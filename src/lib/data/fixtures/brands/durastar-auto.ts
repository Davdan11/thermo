import type { BrandDataset } from "../../types";

export const durastarDataset: BrandDataset = {
  brand: {
    id: "durastar",
    slug: "durastar",
    name: "DURASTAR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "durastar-dra1",
      slug: "durastar-dra1",
      name: "DRA1",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2",
      slug: "durastar-dra2",
      name: "DRA2",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3",
      slug: "durastar-dra3",
      name: "DRA3",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series",
      slug: "durastar-dra-series",
      name: "DRA Series",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard",
      slug: "durastar-standard",
      name: "Standard",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra4",
      slug: "durastar-dra4",
      name: "DRA4",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5",
      slug: "durastar-dra5",
      name: "DRA5",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series",
      slug: "durastar-dru-series",
      name: "DRU Series",
      brandId: "durastar",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "durastar-dra1-wall-single-9000",
      slug: "durastar-dra1-wall-single-9000",
      name: "DRA1 9 000 BTU",
      seriesId: "durastar-dra1",
      brandId: "durastar",
      modelNumber: "DRA1 9k",
      normalizedModelNumber: "dra1-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 10100,
      seer2Min: 19.2,
      seer2Max: 26.4,
      hspf2Min: 10,
      hspf2Max: 12.4,
      cop5FMin: 1.8,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000",
      slug: "durastar-dra1-wall-single-12000",
      name: "DRA1 12 000 BTU",
      seriesId: "durastar-dra1",
      brandId: "durastar",
      modelNumber: "DRA1 12k",
      normalizedModelNumber: "dra1-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: 19,
      seer2Max: 25,
      hspf2Min: 9.8,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.41,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-18000",
      slug: "durastar-dra1-wall-single-18000",
      name: "DRA1 18 000 BTU",
      seriesId: "durastar-dra1",
      brandId: "durastar",
      modelNumber: "DRA1 18k",
      normalizedModelNumber: "dra1-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11100,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 18,
      seer2Max: 24,
      hspf2Min: 9.5,
      hspf2Max: 11.2,
      cop5FMin: 1.85,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-24000",
      slug: "durastar-dra1-wall-single-24000",
      name: "DRA1 24 000 BTU",
      seriesId: "durastar-dra1",
      brandId: "durastar",
      modelNumber: "DRA1 24k",
      normalizedModelNumber: "dra1-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 19,
      seer2Max: 22.3,
      hspf2Min: 8.5,
      hspf2Max: 11.5,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-15000",
      slug: "durastar-dra1-wall-single-15000",
      name: "DRA1 15 000 BTU",
      seriesId: "durastar-dra1",
      brandId: "durastar",
      modelNumber: "DRA1 15k",
      normalizedModelNumber: "dra1-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 20,
      seer2Max: 20.5,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single-18000",
      slug: "durastar-dra2-wall-single-18000",
      name: "DRA2 18 000 BTU",
      seriesId: "durastar-dra2",
      brandId: "durastar",
      modelNumber: "DRA2 18k",
      normalizedModelNumber: "dra2-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 16000,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 9,
      hspf2Max: 10.2,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-24000",
      slug: "durastar-dra3-wall-single-24000",
      name: "DRA3 24 000 BTU",
      seriesId: "durastar-dra3",
      brandId: "durastar",
      modelNumber: "DRA3 24k",
      normalizedModelNumber: "dra3-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 23.5,
      seer2Max: 23.5,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-30000",
      slug: "durastar-dra3-wall-single-30000",
      name: "DRA3 30 000 BTU",
      seriesId: "durastar-dra3",
      brandId: "durastar",
      modelNumber: "DRA3 30k",
      normalizedModelNumber: "dra3-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 20,
      seer2Max: 22.6,
      hspf2Min: 9.2,
      hspf2Max: 9.8,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-36000",
      slug: "durastar-dra-series-wall-single-36000",
      name: "DRA Series 36 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 36k",
      normalizedModelNumber: "dra-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 26400,
      heatingCapacity5FMaxBtu: 36600,
      seer2Min: 19.4,
      seer2Max: 23.1,
      hspf2Min: 9.2,
      hspf2Max: 11.3,
      cop5FMin: 1.68,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-48000",
      slug: "durastar-dra-series-wall-single-48000",
      name: "DRA Series 48 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 48k",
      normalizedModelNumber: "dra-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 36000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 20,
      seer2Max: 21.4,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-6000",
      slug: "durastar-dra1-wall-single-6000",
      name: "DRA1 6 000 BTU",
      seriesId: "durastar-dra1",
      brandId: "durastar",
      modelNumber: "DRA1 6k",
      normalizedModelNumber: "dra1-6000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6500,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 7500,
      seer2Min: 22,
      seer2Max: 23.5,
      hspf2Min: 10.8,
      hspf2Max: 12,
      cop5FMin: 1.84,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-60000",
      slug: "durastar-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "durastar-standard",
      brandId: "durastar",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 35800,
      heatingCapacity5FMaxBtu: 39000,
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
      id: "durastar-dra4-wall-single-36000",
      slug: "durastar-dra4-wall-single-36000",
      name: "DRA4 36 000 BTU",
      seriesId: "durastar-dra4",
      brandId: "durastar",
      modelNumber: "DRA4 36k",
      normalizedModelNumber: "dra4-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 35000,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 19.5,
      seer2Max: 20,
      hspf2Min: 9.7,
      hspf2Max: 9.85,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-48000",
      slug: "durastar-dra5-wall-single-48000",
      name: "DRA5 48 000 BTU",
      seriesId: "durastar-dra5",
      brandId: "durastar",
      modelNumber: "DRA5 48k",
      normalizedModelNumber: "dra5-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 36000,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 20.9,
      seer2Max: 21.2,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-60000",
      slug: "durastar-dra5-wall-single-60000",
      name: "DRA5 60 000 BTU",
      seriesId: "durastar-dra5",
      brandId: "durastar",
      modelNumber: "DRA5 60k",
      normalizedModelNumber: "dra5-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 34800,
      heatingCapacity5FMaxBtu: 35200,
      seer2Min: 18.8,
      seer2Max: 20,
      hspf2Min: 9.3,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-30000",
      slug: "durastar-dra-series-wall-single-30000",
      name: "DRA SERIES 30 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA SERIES 30k",
      normalizedModelNumber: "dra-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 29600,
      seer2Min: 19,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-36000",
      slug: "durastar-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "durastar-standard",
      brandId: "durastar",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 19400,
      heatingCapacity5FMaxBtu: 30200,
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
      id: "durastar-standard-wall-single-48000",
      slug: "durastar-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "durastar-standard",
      brandId: "durastar",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 30400,
      heatingCapacity5FMaxBtu: 45000,
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
      id: "durastar-dra-series-central-ducted-18000",
      slug: "durastar-dra-series-central-ducted-18000",
      name: "DRA Series 18 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 18k",
      normalizedModelNumber: "dra-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 15400,
      seer2Min: 17.6,
      seer2Max: 18.5,
      hspf2Min: 9.3,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.31,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-24000",
      slug: "durastar-dra-series-central-ducted-24000",
      name: "DRA Series 24 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 24k",
      normalizedModelNumber: "dra-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 17600,
      seer2Min: 18,
      seer2Max: 19.7,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-30000",
      slug: "durastar-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "durastar-standard",
      brandId: "durastar",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 22000,
      heatingCapacity5FMaxBtu: 23800,
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
      id: "durastar-dra-series-wall-single-18000",
      slug: "durastar-dra-series-wall-single-18000",
      name: "DRA Series 18 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 18k",
      normalizedModelNumber: "dra-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 13000,
      heatingCapacity5FMaxBtu: 17000,
      seer2Min: 18,
      seer2Max: 24,
      hspf2Min: 10,
      hspf2Max: 12.2,
      cop5FMin: 1.86,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000",
      slug: "durastar-dra-series-wall-single-24000",
      name: "DRA Series 24 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 24k",
      normalizedModelNumber: "dra-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 18000,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 19,
      seer2Max: 23.5,
      hspf2Min: 9,
      hspf2Max: 13.3,
      cop5FMin: 1.9,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-42000",
      slug: "durastar-standard-wall-single-42000",
      name: "Standard 42 000 BTU",
      seriesId: "durastar-standard",
      brandId: "durastar",
      modelNumber: "Standard 42k",
      normalizedModelNumber: "standard-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 34000,
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
      id: "durastar-dra-series-wall-single-6000",
      slug: "durastar-dra-series-wall-single-6000",
      name: "DRA Series 6 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 6k",
      normalizedModelNumber: "dra-series-6000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6500,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 8000,
      seer2Min: 21.4,
      seer2Max: 25.3,
      hspf2Min: 12,
      hspf2Max: 14.6,
      cop5FMin: 2.3,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000",
      slug: "durastar-dra-series-wall-single-9000",
      name: "DRA Series 9 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 9k",
      normalizedModelNumber: "dra-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 10200,
      seer2Min: 19.5,
      seer2Max: 27.2,
      hspf2Min: 10.9,
      hspf2Max: 13.9,
      cop5FMin: 1.8,
      cop5FMax: 2.33,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000",
      slug: "durastar-dra-series-wall-single-12000",
      name: "DRA Series 12 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 12k",
      normalizedModelNumber: "dra-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 10200,
      seer2Min: 19,
      seer2Max: 25,
      hspf2Min: 10,
      hspf2Max: 11.6,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-15000",
      slug: "durastar-dra-series-wall-single-15000",
      name: "DRA Series 15 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 15k",
      normalizedModelNumber: "dra-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 14100,
      heatingCapacity5FMaxBtu: 14900,
      seer2Min: 20,
      seer2Max: 23.8,
      hspf2Min: 10.3,
      hspf2Max: 13.5,
      cop5FMin: 1.9,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-20000",
      slug: "durastar-dra-series-wall-single-20000",
      name: "DRA Series 20 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 20k",
      normalizedModelNumber: "dra-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 20200,
      heatingCapacity5FMaxBtu: 20200,
      seer2Min: 20.4,
      seer2Max: 20.4,
      hspf2Min: 12.1,
      hspf2Max: 12.1,
      cop5FMin: 2.16,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-18000",
      slug: "durastar-dru-series-central-ducted-18000",
      name: "DRU Series 18 000 BTU",
      seriesId: "durastar-dru-series",
      brandId: "durastar",
      modelNumber: "DRU Series 18k",
      normalizedModelNumber: "dru-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 15300,
      seer2Min: 16.1,
      seer2Max: 19.3,
      hspf2Min: 9.1,
      hspf2Max: 10.8,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-24000",
      slug: "durastar-dru-series-central-ducted-24000",
      name: "DRU Series 24 000 BTU",
      seriesId: "durastar-dru-series",
      brandId: "durastar",
      modelNumber: "DRU Series 24k",
      normalizedModelNumber: "dru-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 19700,
      heatingCapacity5FMaxBtu: 20800,
      seer2Min: 16,
      seer2Max: 18.3,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 1.96,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000",
      slug: "durastar-dru-series-central-ducted-36000",
      name: "DRU Series 36 000 BTU",
      seriesId: "durastar-dru-series",
      brandId: "durastar",
      modelNumber: "DRU Series 36k",
      normalizedModelNumber: "dru-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 23400,
      heatingCapacity5FMaxBtu: 31800,
      seer2Min: 15.8,
      seer2Max: 17.4,
      hspf2Min: 8.7,
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
      id: "durastar-dru-series-central-ducted-42000",
      slug: "durastar-dru-series-central-ducted-42000",
      name: "DRU Series 42 000 BTU",
      seriesId: "durastar-dru-series",
      brandId: "durastar",
      modelNumber: "DRU Series 42k",
      normalizedModelNumber: "dru-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 33000,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 15.2,
      seer2Max: 16.7,
      hspf2Min: 8.8,
      hspf2Max: 9.5,
      cop5FMin: 1.85,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000",
      slug: "durastar-dru-series-central-ducted-48000",
      name: "DRU Series 48 000 BTU",
      seriesId: "durastar-dru-series",
      brandId: "durastar",
      modelNumber: "DRU Series 48k",
      normalizedModelNumber: "dru-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 28000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 16.5,
      hspf2Min: 8.1,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000",
      slug: "durastar-dru-series-central-ducted-30000",
      name: "DRU Series 30 000 BTU",
      seriesId: "durastar-dru-series",
      brandId: "durastar",
      modelNumber: "DRU Series 30k",
      normalizedModelNumber: "dru-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 18200,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 15.3,
      seer2Max: 18.6,
      hspf2Min: 8.7,
      hspf2Max: 10.2,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-42000",
      slug: "durastar-dra-series-wall-single-42000",
      name: "DRA Series 42 000 BTU",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series 42k",
      normalizedModelNumber: "dra-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 34000,
      heatingCapacity5FMaxBtu: 40500,
      seer2Min: 20.4,
      seer2Max: 21.3,
      hspf2Min: 10,
      hspf2Max: 10.6,
      cop5FMin: 2,
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
      id: "durastar-dra1u09s1b",
      modelNumber: "DRA1U09S1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h09s1a",
      modelNumber: "DRA1H09S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u12s1b",
      modelNumber: "DRA1U12S1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h12s1a",
      modelNumber: "DRA1H12S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u18s1b",
      modelNumber: "DRA1U18S1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h18s1a",
      modelNumber: "DRA1H18S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u24s1b",
      modelNumber: "DRA1U24S1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h24s1a",
      modelNumber: "DRA1H24S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra2u18m1b",
      modelNumber: "DRA2U18M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra2h18m1a",
      modelNumber: "DRA2H18M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra3u28m1b",
      modelNumber: "DRA3U28M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra3h28m1a",
      modelNumber: "DRA3H28M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra4u36m1b",
      modelNumber: "DRA4U36M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h36m2a",
      modelNumber: "DRA5H36M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5u36m2a",
      modelNumber: "DRA5U36M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5u48m1b",
      modelNumber: "DRA5U48M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra6h48m2a",
      modelNumber: "DRA6H48M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra6h55m2a",
      modelNumber: "DRA6H55M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5u55m1b",
      modelNumber: "DRA5U55M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u60s1a",
      modelNumber: "DRA1U60S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra6u60m2a",
      modelNumber: "DRA6U60M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra4h36m1a",
      modelNumber: "DRA4H36M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h48m1a",
      modelNumber: "DRA5H48M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h55m1a",
      modelNumber: "DRA5H55M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h33s1a",
      modelNumber: "DRA1H33S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra4h28m2a",
      modelNumber: "DRA4H28M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h33s2a",
      modelNumber: "DRA1H33S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u36s1a",
      modelNumber: "DRA1U36S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h36s2a",
      modelNumber: "DRA1H36S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u48s1a",
      modelNumber: "DRA1U48S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h48m2a",
      modelNumber: "DRA5H48M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h55m2a",
      modelNumber: "DRA5H55M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h60s2a",
      modelNumber: "DRA1H60S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u18s2a",
      modelNumber: "DRA1U18S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h18s2a",
      modelNumber: "DRA1H18S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u24s2a",
      modelNumber: "DRA1U24S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h24s2a",
      modelNumber: "DRA1H24S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u30s1a",
      modelNumber: "DRA1U30S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h30s2a",
      modelNumber: "DRA1H30S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra3h18m2a",
      modelNumber: "DRA3H18M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra3u18m2a",
      modelNumber: "DRA3U18M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra4u28m2a",
      modelNumber: "DRA4U28M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5u48m2a",
      modelNumber: "DRA5U48M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h06s2a",
      modelNumber: "DRA1H06S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h09s2a",
      modelNumber: "DRA1H09S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u09s2a",
      modelNumber: "DRA1U09S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h12s2a",
      modelNumber: "DRA1H12S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u12s2a",
      modelNumber: "DRA1U12S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h18s2a",
      modelNumber: "DRU1H18S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u18s2a",
      modelNumber: "DRU1U18S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h24s2a",
      modelNumber: "DRU1H24S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u24s2a",
      modelNumber: "DRU1U24S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h36s2a",
      modelNumber: "DRU1H36S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u36s2a",
      modelNumber: "DRU1U36S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h42s2a",
      modelNumber: "DRU1H42S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u48s2a",
      modelNumber: "DRU1U48S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h48s2a",
      modelNumber: "DRU1H48S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h49s2a",
      modelNumber: "DRU1H49S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h60s2a",
      modelNumber: "DRU1H60S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u60s2a",
      modelNumber: "DRU1U60S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u30s2a",
      modelNumber: "DRU1U30S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h30s2a",
      modelNumber: "DRU1H30S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra6u48m2a",
      modelNumber: "DRA6U48M2A",
      brandId: "durastar",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "durastar-draw09f1b",
      modelNumber: "DRAW09F1B",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drac09f1a",
      modelNumber: "DRAC09F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drad09f1a",
      modelNumber: "DRAD09F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dral09f1a",
      modelNumber: "DRAL09F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw12f1b",
      modelNumber: "DRAW12F1B",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drac12f1a",
      modelNumber: "DRAC12F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drad12f1a",
      modelNumber: "DRAD12F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dras12f1a",
      modelNumber: "DRAS12F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dras12f1b",
      modelNumber: "DRAS12F1B",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dral12f1a",
      modelNumber: "DRAL12F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dras12f1c",
      modelNumber: "DRAS12F1C",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw18f1b",
      modelNumber: "DRAW18F1B",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drad18f1a",
      modelNumber: "DRAD18F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draf18f1a",
      modelNumber: "DRAF18F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dral18f1a",
      modelNumber: "DRAL18F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw24f1b",
      modelNumber: "DRAW24F1B",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drac24f1b",
      modelNumber: "DRAC24F1B",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drad24f1a",
      modelNumber: "DRAD24F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draf24f1a",
      modelNumber: "DRAF24F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drac18f1a",
      modelNumber: "DRAC18F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-appareils-sans-conduits",
      modelNumber: "Appareils sans conduits",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-appareils-avec-conduits",
      modelNumber: "Appareils avec conduits",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      modelNumber: "Combinaison d'appareils avec ou sans conduits",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw06f1b",
      modelNumber: "DRAW06F1B",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dral06f1a",
      modelNumber: "DRAL06F1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dram60s1a",
      modelNumber: "DRAM60S1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw33f1b",
      modelNumber: "DRAW33F1B",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw33f2a",
      modelNumber: "DRAW33F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dram36s1a",
      modelNumber: "DRAM36S1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-mvb-36b23t4n1",
      modelNumber: "MVB-36B23T4N1",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-mac-36hwdn1-mn0",
      modelNumber: "MAC-36HWDN1-MN0",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-druf3622s2a",
      modelNumber: "DRUF3622S2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dram48s1a",
      modelNumber: "DRAM48S1A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-mac-48hwdn1-mn0",
      modelNumber: "MAC-48HWDN1-MN0",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-mac-60hwdn1-mn0",
      modelNumber: "MAC-60HWDN1-MN0",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-druc6024s2a",
      modelNumber: "DRUC6024S2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dram18f1a",
      modelNumber: "DRAM18F1A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-dram18f2a",
      modelNumber: "DRAM18F2A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-dram24f1a",
      modelNumber: "DRAM24F1A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-dram24f2a",
      modelNumber: "DRAM24F2A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-drum3036s2a",
      modelNumber: "DRUM3036S2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-druf3022s2a",
      modelNumber: "DRUF3022S2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw18f2a",
      modelNumber: "DRAW18F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dral18f2a",
      modelNumber: "DRAL18F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draf18f2a",
      modelNumber: "DRAF18F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dradl18f2a",
      modelNumber: "DRADL18F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dradh18f2a",
      modelNumber: "DRADH18F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drac18f2a",
      modelNumber: "DRAC18F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-druf1820s2a",
      modelNumber: "DRUF1820S2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw24f2a",
      modelNumber: "DRAW24F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drac24f2a",
      modelNumber: "DRAC24F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dradh24f2a",
      modelNumber: "DRADH24F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draf24f2a",
      modelNumber: "DRAF24F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-druf2420s2a",
      modelNumber: "DRUF2420S2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw06f2a",
      modelNumber: "DRAW06F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dral0612f2a",
      modelNumber: "DRAL0612F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dradl0612f2a",
      modelNumber: "DRADL0612F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw09f2a",
      modelNumber: "DRAW09F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drac0912f2a",
      modelNumber: "DRAC0912F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dras09f2a",
      modelNumber: "DRAS09F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dras12f2a",
      modelNumber: "DRAS12F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dradh0912f2a",
      modelNumber: "DRADH0912F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-draw12f2a",
      modelNumber: "DRAW12F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-dras16f2a",
      modelNumber: "DRAS16F2A",
      brandId: "durastar",
      type: "wall-single",
    },
    {
      id: "durastar-drum1824s2a",
      modelNumber: "DRUM1824S2A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-druc2414s2a",
      modelNumber: "DRUC2414S2A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-druc2417s2a",
      modelNumber: "DRUC2417S2A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-druc3614s2a",
      modelNumber: "DRUC3614S2A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-druc3617s2a",
      modelNumber: "DRUC3617S2A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-druc3621s2a",
      modelNumber: "DRUC3621S2A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-drum4260s2a",
      modelNumber: "DRUM4260S2A",
      brandId: "durastar",
      type: "central-ducted",
    },
    {
      id: "durastar-druc6021s2a",
      modelNumber: "DRUC6021S2A",
      brandId: "durastar",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "durastar-dra1-wall-single-9000-cfg-1",
      slug: "durastar-dra1-wall-single-9000-cfg-1",
      modelId: "durastar-dra1-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s1b",
      indoorUnitId: "durastar-draw09f1b",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-9000-cfg-2",
      slug: "durastar-dra1-wall-single-9000-cfg-2",
      modelId: "durastar-dra1-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s1b",
      indoorUnitId: "durastar-drac09f1a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-9000-cfg-3",
      slug: "durastar-dra1-wall-single-9000-cfg-3",
      modelId: "durastar-dra1-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s1b",
      indoorUnitId: "durastar-drad09f1a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-9000-cfg-4",
      slug: "durastar-dra1-wall-single-9000-cfg-4",
      modelId: "durastar-dra1-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s1a",
      indoorUnitId: "durastar-draw09f1b",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.4,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-9000-cfg-5",
      slug: "durastar-dra1-wall-single-9000-cfg-5",
      modelId: "durastar-dra1-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s1a",
      indoorUnitId: "durastar-dral09f1a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-9000-cfg-6",
      slug: "durastar-dra1-wall-single-9000-cfg-6",
      modelId: "durastar-dra1-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s1b",
      indoorUnitId: "durastar-dral09f1a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-9000-cfg-7",
      slug: "durastar-dra1-wall-single-9000-cfg-7",
      modelId: "durastar-dra1-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s1a",
      indoorUnitId: "durastar-drac09f1a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-9000-cfg-8",
      slug: "durastar-dra1-wall-single-9000-cfg-8",
      modelId: "durastar-dra1-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s1a",
      indoorUnitId: "durastar-drad09f1a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-1",
      slug: "durastar-dra1-wall-single-12000-cfg-1",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: "durastar-draw12f1b",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-2",
      slug: "durastar-dra1-wall-single-12000-cfg-2",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: "durastar-drac12f1a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-3",
      slug: "durastar-dra1-wall-single-12000-cfg-3",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: "durastar-drad12f1a",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-4",
      slug: "durastar-dra1-wall-single-12000-cfg-4",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: "durastar-dras12f1a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-5",
      slug: "durastar-dra1-wall-single-12000-cfg-5",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: "durastar-dras12f1b",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-6",
      slug: "durastar-dra1-wall-single-12000-cfg-6",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s1a",
      indoorUnitId: "durastar-draw12f1b",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-7",
      slug: "durastar-dra1-wall-single-12000-cfg-7",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s1a",
      indoorUnitId: "durastar-dral12f1a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-8",
      slug: "durastar-dra1-wall-single-12000-cfg-8",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: "durastar-dral12f1a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-9",
      slug: "durastar-dra1-wall-single-12000-cfg-9",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s1a",
      indoorUnitId: "durastar-dras12f1c",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.2,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-10",
      slug: "durastar-dra1-wall-single-12000-cfg-10",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: "durastar-dras12f1c",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-11",
      slug: "durastar-dra1-wall-single-12000-cfg-11",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s1a",
      indoorUnitId: "durastar-drac12f1a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-12",
      slug: "durastar-dra1-wall-single-12000-cfg-12",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s1a",
      indoorUnitId: "durastar-drad12f1a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-12000-cfg-13",
      slug: "durastar-dra1-wall-single-12000-cfg-13",
      modelId: "durastar-dra1-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s1a",
      indoorUnitId: "durastar-dras12f1b",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-18000-cfg-1",
      slug: "durastar-dra1-wall-single-18000-cfg-1",
      modelId: "durastar-dra1-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: "durastar-draw18f1b",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-18000-cfg-2",
      slug: "durastar-dra1-wall-single-18000-cfg-2",
      modelId: "durastar-dra1-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: "durastar-drad18f1a",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-18000-cfg-3",
      slug: "durastar-dra1-wall-single-18000-cfg-3",
      modelId: "durastar-dra1-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: "durastar-draf18f1a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-18000-cfg-4",
      slug: "durastar-dra1-wall-single-18000-cfg-4",
      modelId: "durastar-dra1-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s1a",
      indoorUnitId: "durastar-draw18f1b",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-18000-cfg-5",
      slug: "durastar-dra1-wall-single-18000-cfg-5",
      modelId: "durastar-dra1-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s1a",
      indoorUnitId: "durastar-dral18f1a",
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 19.8,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-18000-cfg-6",
      slug: "durastar-dra1-wall-single-18000-cfg-6",
      modelId: "durastar-dra1-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: "durastar-dral18f1a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-18000-cfg-7",
      slug: "durastar-dra1-wall-single-18000-cfg-7",
      modelId: "durastar-dra1-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s1a",
      indoorUnitId: "durastar-drad18f1a",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-18000-cfg-8",
      slug: "durastar-dra1-wall-single-18000-cfg-8",
      modelId: "durastar-dra1-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s1a",
      indoorUnitId: "durastar-draf18f1a",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-24000-cfg-1",
      slug: "durastar-dra1-wall-single-24000-cfg-1",
      modelId: "durastar-dra1-wall-single-24000",
      outdoorUnitId: "durastar-dra1u24s1b",
      indoorUnitId: "durastar-draw24f1b",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-24000-cfg-2",
      slug: "durastar-dra1-wall-single-24000-cfg-2",
      modelId: "durastar-dra1-wall-single-24000",
      outdoorUnitId: "durastar-dra1u24s1b",
      indoorUnitId: "durastar-drac24f1b",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-24000-cfg-3",
      slug: "durastar-dra1-wall-single-24000-cfg-3",
      modelId: "durastar-dra1-wall-single-24000",
      outdoorUnitId: "durastar-dra1u24s1b",
      indoorUnitId: "durastar-drad24f1a",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-24000-cfg-4",
      slug: "durastar-dra1-wall-single-24000-cfg-4",
      modelId: "durastar-dra1-wall-single-24000",
      outdoorUnitId: "durastar-dra1u24s1b",
      indoorUnitId: "durastar-draf24f1a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-24000-cfg-5",
      slug: "durastar-dra1-wall-single-24000-cfg-5",
      modelId: "durastar-dra1-wall-single-24000",
      outdoorUnitId: "durastar-dra1h24s1a",
      indoorUnitId: "durastar-draw24f1b",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-24000-cfg-6",
      slug: "durastar-dra1-wall-single-24000-cfg-6",
      modelId: "durastar-dra1-wall-single-24000",
      outdoorUnitId: "durastar-dra1h24s1a",
      indoorUnitId: "durastar-drac24f1b",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-24000-cfg-7",
      slug: "durastar-dra1-wall-single-24000-cfg-7",
      modelId: "durastar-dra1-wall-single-24000",
      outdoorUnitId: "durastar-dra1h24s1a",
      indoorUnitId: "durastar-drad24f1a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-24000-cfg-8",
      slug: "durastar-dra1-wall-single-24000-cfg-8",
      modelId: "durastar-dra1-wall-single-24000",
      outdoorUnitId: "durastar-dra1h24s1a",
      indoorUnitId: "durastar-draf24f1a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-15000-cfg-1",
      slug: "durastar-dra1-wall-single-15000-cfg-1",
      modelId: "durastar-dra1-wall-single-15000",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: "durastar-drac18f1a",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-15000-cfg-2",
      slug: "durastar-dra1-wall-single-15000-cfg-2",
      modelId: "durastar-dra1-wall-single-15000",
      outdoorUnitId: "durastar-dra1h18s1a",
      indoorUnitId: "durastar-drac18f1a",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single-18000-cfg-1",
      slug: "durastar-dra2-wall-single-18000-cfg-1",
      modelId: "durastar-dra2-wall-single-18000",
      outdoorUnitId: "durastar-dra2u18m1b",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single-18000-cfg-2",
      slug: "durastar-dra2-wall-single-18000-cfg-2",
      modelId: "durastar-dra2-wall-single-18000",
      outdoorUnitId: "durastar-dra2u18m1b",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single-18000-cfg-3",
      slug: "durastar-dra2-wall-single-18000-cfg-3",
      modelId: "durastar-dra2-wall-single-18000",
      outdoorUnitId: "durastar-dra2u18m1b",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single-18000-cfg-4",
      slug: "durastar-dra2-wall-single-18000-cfg-4",
      modelId: "durastar-dra2-wall-single-18000",
      outdoorUnitId: "durastar-dra2h18m1a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single-18000-cfg-5",
      slug: "durastar-dra2-wall-single-18000-cfg-5",
      modelId: "durastar-dra2-wall-single-18000",
      outdoorUnitId: "durastar-dra2h18m1a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single-18000-cfg-6",
      slug: "durastar-dra2-wall-single-18000-cfg-6",
      modelId: "durastar-dra2-wall-single-18000",
      outdoorUnitId: "durastar-dra2h18m1a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19.75,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-24000-cfg-1",
      slug: "durastar-dra3-wall-single-24000-cfg-1",
      modelId: "durastar-dra3-wall-single-24000",
      outdoorUnitId: "durastar-dra3u28m1b",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-30000-cfg-1",
      slug: "durastar-dra3-wall-single-30000-cfg-1",
      modelId: "durastar-dra3-wall-single-30000",
      outdoorUnitId: "durastar-dra3u28m1b",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-30000-cfg-2",
      slug: "durastar-dra3-wall-single-30000-cfg-2",
      modelId: "durastar-dra3-wall-single-30000",
      outdoorUnitId: "durastar-dra3u28m1b",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-30000-cfg-3",
      slug: "durastar-dra3-wall-single-30000-cfg-3",
      modelId: "durastar-dra3-wall-single-30000",
      outdoorUnitId: "durastar-dra3h28m1a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.6,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-30000-cfg-4",
      slug: "durastar-dra3-wall-single-30000-cfg-4",
      modelId: "durastar-dra3-wall-single-30000",
      outdoorUnitId: "durastar-dra3h28m1a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-30000-cfg-5",
      slug: "durastar-dra3-wall-single-30000-cfg-5",
      modelId: "durastar-dra3-wall-single-30000",
      outdoorUnitId: "durastar-dra3h28m1a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.3,
      hspf2: 9.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-36000-cfg-1",
      slug: "durastar-dra-series-wall-single-36000-cfg-1",
      modelId: "durastar-dra-series-wall-single-36000",
      outdoorUnitId: "durastar-dra4u36m1b",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-36000-cfg-2",
      slug: "durastar-dra-series-wall-single-36000-cfg-2",
      modelId: "durastar-dra-series-wall-single-36000",
      outdoorUnitId: "durastar-dra5h36m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-36000-cfg-3",
      slug: "durastar-dra-series-wall-single-36000-cfg-3",
      modelId: "durastar-dra-series-wall-single-36000",
      outdoorUnitId: "durastar-dra5h36m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-36000-cfg-4",
      slug: "durastar-dra-series-wall-single-36000-cfg-4",
      modelId: "durastar-dra-series-wall-single-36000",
      outdoorUnitId: "durastar-dra5h36m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.45,
      hspf2: 10.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-36000-cfg-5",
      slug: "durastar-dra-series-wall-single-36000-cfg-5",
      modelId: "durastar-dra-series-wall-single-36000",
      outdoorUnitId: "durastar-dra5u36m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 23.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-36000-cfg-6",
      slug: "durastar-dra-series-wall-single-36000-cfg-6",
      modelId: "durastar-dra-series-wall-single-36000",
      outdoorUnitId: "durastar-dra5u36m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-36000-cfg-7",
      slug: "durastar-dra-series-wall-single-36000-cfg-7",
      modelId: "durastar-dra-series-wall-single-36000",
      outdoorUnitId: "durastar-dra5u36m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 21.55,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-48000-cfg-1",
      slug: "durastar-dra-series-wall-single-48000-cfg-1",
      modelId: "durastar-dra-series-wall-single-48000",
      outdoorUnitId: "durastar-dra5u48m1b",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-48000-cfg-2",
      slug: "durastar-dra-series-wall-single-48000-cfg-2",
      modelId: "durastar-dra-series-wall-single-48000",
      outdoorUnitId: "durastar-dra5u48m1b",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-48000-cfg-3",
      slug: "durastar-dra-series-wall-single-48000-cfg-3",
      modelId: "durastar-dra-series-wall-single-48000",
      outdoorUnitId: "durastar-dra6h48m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-48000-cfg-4",
      slug: "durastar-dra-series-wall-single-48000-cfg-4",
      modelId: "durastar-dra-series-wall-single-48000",
      outdoorUnitId: "durastar-dra6h48m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 20.8,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-48000-cfg-5",
      slug: "durastar-dra-series-wall-single-48000-cfg-5",
      modelId: "durastar-dra-series-wall-single-48000",
      outdoorUnitId: "durastar-dra6h55m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 21.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-48000-cfg-6",
      slug: "durastar-dra-series-wall-single-48000-cfg-6",
      modelId: "durastar-dra-series-wall-single-48000",
      outdoorUnitId: "durastar-dra6h55m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 20,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-48000-cfg-7",
      slug: "durastar-dra-series-wall-single-48000-cfg-7",
      modelId: "durastar-dra-series-wall-single-48000",
      outdoorUnitId: "durastar-dra6h55m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 20.7,
      hspf2: 10.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-6000-cfg-1",
      slug: "durastar-dra1-wall-single-6000-cfg-1",
      modelId: "durastar-dra1-wall-single-6000",
      outdoorUnitId: "durastar-dra1u09s1b",
      indoorUnitId: "durastar-draw06f1b",
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-6000-cfg-2",
      slug: "durastar-dra1-wall-single-6000-cfg-2",
      modelId: "durastar-dra1-wall-single-6000",
      outdoorUnitId: "durastar-dra1u09s1b",
      indoorUnitId: "durastar-dral06f1a",
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-60000-cfg-1",
      slug: "durastar-standard-wall-single-60000-cfg-1",
      modelId: "durastar-standard-wall-single-60000",
      outdoorUnitId: "durastar-dra5u55m1b",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-60000-cfg-2",
      slug: "durastar-standard-wall-single-60000-cfg-2",
      modelId: "durastar-standard-wall-single-60000",
      outdoorUnitId: "durastar-dra5u55m1b",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-60000-cfg-3",
      slug: "durastar-standard-wall-single-60000-cfg-3",
      modelId: "durastar-standard-wall-single-60000",
      outdoorUnitId: "durastar-dra1u60s1a",
      indoorUnitId: "durastar-dram60s1a",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-60000-cfg-4",
      slug: "durastar-standard-wall-single-60000-cfg-4",
      modelId: "durastar-standard-wall-single-60000",
      outdoorUnitId: "durastar-dra6u60m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-60000-cfg-5",
      slug: "durastar-standard-wall-single-60000-cfg-5",
      modelId: "durastar-standard-wall-single-60000",
      outdoorUnitId: "durastar-dra6u60m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-60000-cfg-6",
      slug: "durastar-standard-wall-single-60000-cfg-6",
      modelId: "durastar-standard-wall-single-60000",
      outdoorUnitId: "durastar-dra6u60m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra4-wall-single-36000-cfg-1",
      slug: "durastar-dra4-wall-single-36000-cfg-1",
      modelId: "durastar-dra4-wall-single-36000",
      outdoorUnitId: "durastar-dra4h36m1a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra4-wall-single-36000-cfg-2",
      slug: "durastar-dra4-wall-single-36000-cfg-2",
      modelId: "durastar-dra4-wall-single-36000",
      outdoorUnitId: "durastar-dra4h36m1a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-48000-cfg-1",
      slug: "durastar-dra5-wall-single-48000-cfg-1",
      modelId: "durastar-dra5-wall-single-48000",
      outdoorUnitId: "durastar-dra5h48m1a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-48000-cfg-2",
      slug: "durastar-dra5-wall-single-48000-cfg-2",
      modelId: "durastar-dra5-wall-single-48000",
      outdoorUnitId: "durastar-dra5h48m1a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-48000-cfg-3",
      slug: "durastar-dra5-wall-single-48000-cfg-3",
      modelId: "durastar-dra5-wall-single-48000",
      outdoorUnitId: "durastar-dra5h48m1a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.05,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-60000-cfg-1",
      slug: "durastar-dra5-wall-single-60000-cfg-1",
      modelId: "durastar-dra5-wall-single-60000",
      outdoorUnitId: "durastar-dra5h55m1a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-60000-cfg-2",
      slug: "durastar-dra5-wall-single-60000-cfg-2",
      modelId: "durastar-dra5-wall-single-60000",
      outdoorUnitId: "durastar-dra5h55m1a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-60000-cfg-3",
      slug: "durastar-dra5-wall-single-60000-cfg-3",
      modelId: "durastar-dra5-wall-single-60000",
      outdoorUnitId: "durastar-dra5h55m1a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 19.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-30000-cfg-1",
      slug: "durastar-dra-series-wall-single-30000-cfg-1",
      modelId: "durastar-dra-series-wall-single-30000",
      outdoorUnitId: "durastar-dra1h33s1a",
      indoorUnitId: "durastar-draw33f1b",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-30000-cfg-2",
      slug: "durastar-dra-series-wall-single-30000-cfg-2",
      modelId: "durastar-dra-series-wall-single-30000",
      outdoorUnitId: "durastar-dra4h28m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-30000-cfg-3",
      slug: "durastar-dra-series-wall-single-30000-cfg-3",
      modelId: "durastar-dra-series-wall-single-30000",
      outdoorUnitId: "durastar-dra4h28m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 20,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-30000-cfg-4",
      slug: "durastar-dra-series-wall-single-30000-cfg-4",
      modelId: "durastar-dra-series-wall-single-30000",
      outdoorUnitId: "durastar-dra1h33s2a",
      indoorUnitId: "durastar-draw33f2a",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-36000-cfg-1",
      slug: "durastar-standard-wall-single-36000-cfg-1",
      modelId: "durastar-standard-wall-single-36000",
      outdoorUnitId: "durastar-dra1u36s1a",
      indoorUnitId: "durastar-dram36s1a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-36000-cfg-2",
      slug: "durastar-standard-wall-single-36000-cfg-2",
      modelId: "durastar-standard-wall-single-36000",
      outdoorUnitId: "durastar-dra1u36s1a",
      indoorUnitId: "durastar-mvb-36b23t4n1",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-36000-cfg-3",
      slug: "durastar-standard-wall-single-36000-cfg-3",
      modelId: "durastar-standard-wall-single-36000",
      outdoorUnitId: "durastar-dra1u36s1a",
      indoorUnitId: "durastar-mac-36hwdn1-mn0",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-36000-cfg-4",
      slug: "durastar-standard-wall-single-36000-cfg-4",
      modelId: "durastar-standard-wall-single-36000",
      outdoorUnitId: "durastar-dra1h36s2a",
      indoorUnitId: "durastar-druf3622s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-48000-cfg-1",
      slug: "durastar-standard-wall-single-48000-cfg-1",
      modelId: "durastar-standard-wall-single-48000",
      outdoorUnitId: "durastar-dra1u48s1a",
      indoorUnitId: "durastar-dram48s1a",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-48000-cfg-2",
      slug: "durastar-standard-wall-single-48000-cfg-2",
      modelId: "durastar-standard-wall-single-48000",
      outdoorUnitId: "durastar-dra1u48s1a",
      indoorUnitId: "durastar-mac-48hwdn1-mn0",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-48000-cfg-3",
      slug: "durastar-standard-wall-single-48000-cfg-3",
      modelId: "durastar-standard-wall-single-48000",
      outdoorUnitId: "durastar-dra1u60s1a",
      indoorUnitId: "durastar-mac-60hwdn1-mn0",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-48000-cfg-4",
      slug: "durastar-standard-wall-single-48000-cfg-4",
      modelId: "durastar-standard-wall-single-48000",
      outdoorUnitId: "durastar-dra5h48m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-48000-cfg-5",
      slug: "durastar-standard-wall-single-48000-cfg-5",
      modelId: "durastar-standard-wall-single-48000",
      outdoorUnitId: "durastar-dra5h48m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-48000-cfg-6",
      slug: "durastar-standard-wall-single-48000-cfg-6",
      modelId: "durastar-standard-wall-single-48000",
      outdoorUnitId: "durastar-dra5h55m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-48000-cfg-7",
      slug: "durastar-standard-wall-single-48000-cfg-7",
      modelId: "durastar-standard-wall-single-48000",
      outdoorUnitId: "durastar-dra5h55m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-48000-cfg-8",
      slug: "durastar-standard-wall-single-48000-cfg-8",
      modelId: "durastar-standard-wall-single-48000",
      outdoorUnitId: "durastar-dra5h55m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-48000-cfg-9",
      slug: "durastar-standard-wall-single-48000-cfg-9",
      modelId: "durastar-standard-wall-single-48000",
      outdoorUnitId: "durastar-dra1h60s2a",
      indoorUnitId: "durastar-druc6024s2a",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-18000-cfg-1",
      slug: "durastar-dra-series-central-ducted-18000-cfg-1",
      modelId: "durastar-dra-series-central-ducted-18000",
      outdoorUnitId: "durastar-dra1h18s1a",
      indoorUnitId: "durastar-dram18f1a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.6,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-18000-cfg-2",
      slug: "durastar-dra-series-central-ducted-18000-cfg-2",
      modelId: "durastar-dra-series-central-ducted-18000",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: "durastar-dram18f1a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-18000-cfg-3",
      slug: "durastar-dra-series-central-ducted-18000-cfg-3",
      modelId: "durastar-dra-series-central-ducted-18000",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: "durastar-dram18f2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-18000-cfg-4",
      slug: "durastar-dra-series-central-ducted-18000-cfg-4",
      modelId: "durastar-dra-series-central-ducted-18000",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: "durastar-dram18f2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-24000-cfg-1",
      slug: "durastar-dra-series-central-ducted-24000-cfg-1",
      modelId: "durastar-dra-series-central-ducted-24000",
      outdoorUnitId: "durastar-dra1u24s1b",
      indoorUnitId: "durastar-dram24f1a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-24000-cfg-2",
      slug: "durastar-dra-series-central-ducted-24000-cfg-2",
      modelId: "durastar-dra-series-central-ducted-24000",
      outdoorUnitId: "durastar-dra1h24s1a",
      indoorUnitId: "durastar-dram24f1a",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.4,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-24000-cfg-3",
      slug: "durastar-dra-series-central-ducted-24000-cfg-3",
      modelId: "durastar-dra-series-central-ducted-24000",
      outdoorUnitId: "durastar-dra1u24s2a",
      indoorUnitId: "durastar-dram24f2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-24000-cfg-4",
      slug: "durastar-dra-series-central-ducted-24000-cfg-4",
      modelId: "durastar-dra-series-central-ducted-24000",
      outdoorUnitId: "durastar-dra1h24s2a",
      indoorUnitId: "durastar-dram24f2a",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-30000-cfg-1",
      slug: "durastar-standard-wall-single-30000-cfg-1",
      modelId: "durastar-standard-wall-single-30000",
      outdoorUnitId: "durastar-dra1u30s1a",
      indoorUnitId: "durastar-mac-36hwdn1-mn0",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-30000-cfg-2",
      slug: "durastar-standard-wall-single-30000-cfg-2",
      modelId: "durastar-standard-wall-single-30000",
      outdoorUnitId: "durastar-dra1h30s2a",
      indoorUnitId: "durastar-drum3036s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-30000-cfg-3",
      slug: "durastar-standard-wall-single-30000-cfg-3",
      modelId: "durastar-standard-wall-single-30000",
      outdoorUnitId: "durastar-dra1h30s2a",
      indoorUnitId: "durastar-druf3022s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-1",
      slug: "durastar-dra-series-wall-single-18000-cfg-1",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra3h18m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-2",
      slug: "durastar-dra-series-wall-single-18000-cfg-2",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra3h18m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-3",
      slug: "durastar-dra-series-wall-single-18000-cfg-3",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra3h18m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-4",
      slug: "durastar-dra-series-wall-single-18000-cfg-4",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra3u18m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-5",
      slug: "durastar-dra-series-wall-single-18000-cfg-5",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra3u18m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-6",
      slug: "durastar-dra-series-wall-single-18000-cfg-6",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra3u18m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-7",
      slug: "durastar-dra-series-wall-single-18000-cfg-7",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: "durastar-draw18f2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-8",
      slug: "durastar-dra-series-wall-single-18000-cfg-8",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: "durastar-dral18f2a",
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.6,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-9",
      slug: "durastar-dra-series-wall-single-18000-cfg-9",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: "durastar-draf18f2a",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-10",
      slug: "durastar-dra-series-wall-single-18000-cfg-10",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: "durastar-dradl18f2a",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-11",
      slug: "durastar-dra-series-wall-single-18000-cfg-11",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: "durastar-dradh18f2a",
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18.4,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-12",
      slug: "durastar-dra-series-wall-single-18000-cfg-12",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: "durastar-draw18f2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-13",
      slug: "durastar-dra-series-wall-single-18000-cfg-13",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: "durastar-dral18f2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.2,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-14",
      slug: "durastar-dra-series-wall-single-18000-cfg-14",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: "durastar-drac18f2a",
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-15",
      slug: "durastar-dra-series-wall-single-18000-cfg-15",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: "durastar-draf18f2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-16",
      slug: "durastar-dra-series-wall-single-18000-cfg-16",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: "durastar-dradl18f2a",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-17",
      slug: "durastar-dra-series-wall-single-18000-cfg-17",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: "durastar-dradh18f2a",
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-18000-cfg-18",
      slug: "durastar-dra-series-wall-single-18000-cfg-18",
      modelId: "durastar-dra-series-wall-single-18000",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: "durastar-druf1820s2a",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-1",
      slug: "durastar-dra-series-wall-single-24000-cfg-1",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra4h28m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-2",
      slug: "durastar-dra-series-wall-single-24000-cfg-2",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra4u28m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-3",
      slug: "durastar-dra-series-wall-single-24000-cfg-3",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra4u28m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-4",
      slug: "durastar-dra-series-wall-single-24000-cfg-4",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra4u28m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 26200,
      coolingCapacityMaxBtu: 26200,
      seer2: 22,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-5",
      slug: "durastar-dra-series-wall-single-24000-cfg-5",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra1h24s2a",
      indoorUnitId: "durastar-draw24f2a",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-6",
      slug: "durastar-dra-series-wall-single-24000-cfg-6",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra1h24s2a",
      indoorUnitId: "durastar-drac24f2a",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-7",
      slug: "durastar-dra-series-wall-single-24000-cfg-7",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra1h24s2a",
      indoorUnitId: "durastar-dradh24f2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-8",
      slug: "durastar-dra-series-wall-single-24000-cfg-8",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra1u24s2a",
      indoorUnitId: "durastar-draw24f2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-9",
      slug: "durastar-dra-series-wall-single-24000-cfg-9",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra1u24s2a",
      indoorUnitId: "durastar-drac24f2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-10",
      slug: "durastar-dra-series-wall-single-24000-cfg-10",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra1u24s2a",
      indoorUnitId: "durastar-draf24f2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-11",
      slug: "durastar-dra-series-wall-single-24000-cfg-11",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra1u24s2a",
      indoorUnitId: "durastar-dradh24f2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-24000-cfg-12",
      slug: "durastar-dra-series-wall-single-24000-cfg-12",
      modelId: "durastar-dra-series-wall-single-24000",
      outdoorUnitId: "durastar-dra1h24s2a",
      indoorUnitId: "durastar-druf2420s2a",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-42000-cfg-1",
      slug: "durastar-standard-wall-single-42000-cfg-1",
      modelId: "durastar-standard-wall-single-42000",
      outdoorUnitId: "durastar-dra5h48m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-42000-cfg-2",
      slug: "durastar-standard-wall-single-42000-cfg-2",
      modelId: "durastar-standard-wall-single-42000",
      outdoorUnitId: "durastar-dra5u48m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-42000-cfg-3",
      slug: "durastar-standard-wall-single-42000-cfg-3",
      modelId: "durastar-standard-wall-single-42000",
      outdoorUnitId: "durastar-dra5u48m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-42000-cfg-4",
      slug: "durastar-standard-wall-single-42000-cfg-4",
      modelId: "durastar-standard-wall-single-42000",
      outdoorUnitId: "durastar-dra5u48m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-6000-cfg-1",
      slug: "durastar-dra-series-wall-single-6000-cfg-1",
      modelId: "durastar-dra-series-wall-single-6000",
      outdoorUnitId: "durastar-dra1h06s2a",
      indoorUnitId: "durastar-draw06f2a",
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-6000-cfg-2",
      slug: "durastar-dra-series-wall-single-6000-cfg-2",
      modelId: "durastar-dra-series-wall-single-6000",
      outdoorUnitId: "durastar-dra1h06s2a",
      indoorUnitId: "durastar-dral0612f2a",
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-6000-cfg-3",
      slug: "durastar-dra-series-wall-single-6000-cfg-3",
      modelId: "durastar-dra-series-wall-single-6000",
      outdoorUnitId: "durastar-dra1h06s2a",
      indoorUnitId: "durastar-dradl0612f2a",
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 21.4,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-1",
      slug: "durastar-dra-series-wall-single-9000-cfg-1",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s2a",
      indoorUnitId: "durastar-draw09f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-2",
      slug: "durastar-dra-series-wall-single-9000-cfg-2",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s2a",
      indoorUnitId: "durastar-dral0612f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-3",
      slug: "durastar-dra-series-wall-single-9000-cfg-3",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s2a",
      indoorUnitId: "durastar-drac0912f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-4",
      slug: "durastar-dra-series-wall-single-9000-cfg-4",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s2a",
      indoorUnitId: "durastar-dras09f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.2,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-5",
      slug: "durastar-dra-series-wall-single-9000-cfg-5",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s2a",
      indoorUnitId: "durastar-dras12f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.2,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-6",
      slug: "durastar-dra-series-wall-single-9000-cfg-6",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s2a",
      indoorUnitId: "durastar-dradl0612f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-7",
      slug: "durastar-dra-series-wall-single-9000-cfg-7",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1h09s2a",
      indoorUnitId: "durastar-dradh0912f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-8",
      slug: "durastar-dra-series-wall-single-9000-cfg-8",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: "durastar-draw09f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-9",
      slug: "durastar-dra-series-wall-single-9000-cfg-9",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: "durastar-dral0612f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.1,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-10",
      slug: "durastar-dra-series-wall-single-9000-cfg-10",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: "durastar-drac0912f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-11",
      slug: "durastar-dra-series-wall-single-9000-cfg-11",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: "durastar-dras09f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 13.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-12",
      slug: "durastar-dra-series-wall-single-9000-cfg-12",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: "durastar-dras12f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 13.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-13",
      slug: "durastar-dra-series-wall-single-9000-cfg-13",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: "durastar-dradl0612f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-9000-cfg-14",
      slug: "durastar-dra-series-wall-single-9000-cfg-14",
      modelId: "durastar-dra-series-wall-single-9000",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: "durastar-dradh0912f2a",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-1",
      slug: "durastar-dra-series-wall-single-12000-cfg-1",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s2a",
      indoorUnitId: "durastar-draw12f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-2",
      slug: "durastar-dra-series-wall-single-12000-cfg-2",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s2a",
      indoorUnitId: "durastar-dral0612f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-3",
      slug: "durastar-dra-series-wall-single-12000-cfg-3",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s2a",
      indoorUnitId: "durastar-drac0912f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-4",
      slug: "durastar-dra-series-wall-single-12000-cfg-4",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s2a",
      indoorUnitId: "durastar-dras12f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-5",
      slug: "durastar-dra-series-wall-single-12000-cfg-5",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s2a",
      indoorUnitId: "durastar-dradl0612f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-6",
      slug: "durastar-dra-series-wall-single-12000-cfg-6",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1h12s2a",
      indoorUnitId: "durastar-dradh0912f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-7",
      slug: "durastar-dra-series-wall-single-12000-cfg-7",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: "durastar-draw12f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-8",
      slug: "durastar-dra-series-wall-single-12000-cfg-8",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: "durastar-dral0612f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-9",
      slug: "durastar-dra-series-wall-single-12000-cfg-9",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: "durastar-drac0912f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-10",
      slug: "durastar-dra-series-wall-single-12000-cfg-10",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: "durastar-dras12f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-11",
      slug: "durastar-dra-series-wall-single-12000-cfg-11",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: "durastar-dradl0612f2a",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-12000-cfg-12",
      slug: "durastar-dra-series-wall-single-12000-cfg-12",
      modelId: "durastar-dra-series-wall-single-12000",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: "durastar-dradh0912f2a",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-15000-cfg-1",
      slug: "durastar-dra-series-wall-single-15000-cfg-1",
      modelId: "durastar-dra-series-wall-single-15000",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: "durastar-drac18f2a",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-15000-cfg-2",
      slug: "durastar-dra-series-wall-single-15000-cfg-2",
      modelId: "durastar-dra-series-wall-single-15000",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: "durastar-dras16f2a",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-15000-cfg-3",
      slug: "durastar-dra-series-wall-single-15000-cfg-3",
      modelId: "durastar-dra-series-wall-single-15000",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: "durastar-dras16f2a",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 23.8,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-20000-cfg-1",
      slug: "durastar-dra-series-wall-single-20000-cfg-1",
      modelId: "durastar-dra-series-wall-single-20000",
      outdoorUnitId: "durastar-dra1h24s2a",
      indoorUnitId: "durastar-draf24f2a",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.4,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-18000-cfg-1",
      slug: "durastar-dru-series-central-ducted-18000-cfg-1",
      modelId: "durastar-dru-series-central-ducted-18000",
      outdoorUnitId: "durastar-dru1h18s2a",
      indoorUnitId: "durastar-drum1824s2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-18000-cfg-2",
      slug: "durastar-dru-series-central-ducted-18000-cfg-2",
      modelId: "durastar-dru-series-central-ducted-18000",
      outdoorUnitId: "durastar-dru1u18s2a",
      indoorUnitId: "durastar-drum1824s2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-18000-cfg-3",
      slug: "durastar-dru-series-central-ducted-18000-cfg-3",
      modelId: "durastar-dru-series-central-ducted-18000",
      outdoorUnitId: "durastar-dru1u18s2a",
      indoorUnitId: "durastar-druf1820s2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-18000-cfg-4",
      slug: "durastar-dru-series-central-ducted-18000-cfg-4",
      modelId: "durastar-dru-series-central-ducted-18000",
      outdoorUnitId: "durastar-dru1h18s2a",
      indoorUnitId: "durastar-druf1820s2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.3,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-18000-cfg-5",
      slug: "durastar-dru-series-central-ducted-18000-cfg-5",
      modelId: "durastar-dru-series-central-ducted-18000",
      outdoorUnitId: "durastar-dru1u18s2a",
      indoorUnitId: "durastar-druc2414s2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-18000-cfg-6",
      slug: "durastar-dru-series-central-ducted-18000-cfg-6",
      modelId: "durastar-dru-series-central-ducted-18000",
      outdoorUnitId: "durastar-dru1u18s2a",
      indoorUnitId: "durastar-druc2417s2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-18000-cfg-7",
      slug: "durastar-dru-series-central-ducted-18000-cfg-7",
      modelId: "durastar-dru-series-central-ducted-18000",
      outdoorUnitId: "durastar-dru1h18s2a",
      indoorUnitId: "durastar-druc2414s2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-18000-cfg-8",
      slug: "durastar-dru-series-central-ducted-18000-cfg-8",
      modelId: "durastar-dru-series-central-ducted-18000",
      outdoorUnitId: "durastar-dru1h18s2a",
      indoorUnitId: "durastar-druc2417s2a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-24000-cfg-1",
      slug: "durastar-dru-series-central-ducted-24000-cfg-1",
      modelId: "durastar-dru-series-central-ducted-24000",
      outdoorUnitId: "durastar-dru1h24s2a",
      indoorUnitId: "durastar-drum1824s2a",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-24000-cfg-2",
      slug: "durastar-dru-series-central-ducted-24000-cfg-2",
      modelId: "durastar-dru-series-central-ducted-24000",
      outdoorUnitId: "durastar-dru1u24s2a",
      indoorUnitId: "durastar-drum1824s2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.1,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-24000-cfg-3",
      slug: "durastar-dru-series-central-ducted-24000-cfg-3",
      modelId: "durastar-dru-series-central-ducted-24000",
      outdoorUnitId: "durastar-dru1u24s2a",
      indoorUnitId: "durastar-druf2420s2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-24000-cfg-4",
      slug: "durastar-dru-series-central-ducted-24000-cfg-4",
      modelId: "durastar-dru-series-central-ducted-24000",
      outdoorUnitId: "durastar-dru1h24s2a",
      indoorUnitId: "durastar-druf2420s2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-24000-cfg-5",
      slug: "durastar-dru-series-central-ducted-24000-cfg-5",
      modelId: "durastar-dru-series-central-ducted-24000",
      outdoorUnitId: "durastar-dru1u24s2a",
      indoorUnitId: "durastar-druc2414s2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-24000-cfg-6",
      slug: "durastar-dru-series-central-ducted-24000-cfg-6",
      modelId: "durastar-dru-series-central-ducted-24000",
      outdoorUnitId: "durastar-dru1u24s2a",
      indoorUnitId: "durastar-druc2417s2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-24000-cfg-7",
      slug: "durastar-dru-series-central-ducted-24000-cfg-7",
      modelId: "durastar-dru-series-central-ducted-24000",
      outdoorUnitId: "durastar-dru1h24s2a",
      indoorUnitId: "durastar-druc2414s2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-24000-cfg-8",
      slug: "durastar-dru-series-central-ducted-24000-cfg-8",
      modelId: "durastar-dru-series-central-ducted-24000",
      outdoorUnitId: "durastar-dru1h24s2a",
      indoorUnitId: "durastar-druc2417s2a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000-cfg-1",
      slug: "durastar-dru-series-central-ducted-36000-cfg-1",
      modelId: "durastar-dru-series-central-ducted-36000",
      outdoorUnitId: "durastar-dru1h36s2a",
      indoorUnitId: "durastar-drum3036s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000-cfg-2",
      slug: "durastar-dru-series-central-ducted-36000-cfg-2",
      modelId: "durastar-dru-series-central-ducted-36000",
      outdoorUnitId: "durastar-dru1u36s2a",
      indoorUnitId: "durastar-drum3036s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000-cfg-3",
      slug: "durastar-dru-series-central-ducted-36000-cfg-3",
      modelId: "durastar-dru-series-central-ducted-36000",
      outdoorUnitId: "durastar-dru1u36s2a",
      indoorUnitId: "durastar-druf3622s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000-cfg-4",
      slug: "durastar-dru-series-central-ducted-36000-cfg-4",
      modelId: "durastar-dru-series-central-ducted-36000",
      outdoorUnitId: "durastar-dru1h36s2a",
      indoorUnitId: "durastar-druf3622s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.8,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000-cfg-5",
      slug: "durastar-dru-series-central-ducted-36000-cfg-5",
      modelId: "durastar-dru-series-central-ducted-36000",
      outdoorUnitId: "durastar-dru1u36s2a",
      indoorUnitId: "durastar-druc3614s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000-cfg-6",
      slug: "durastar-dru-series-central-ducted-36000-cfg-6",
      modelId: "durastar-dru-series-central-ducted-36000",
      outdoorUnitId: "durastar-dru1u36s2a",
      indoorUnitId: "durastar-druc3617s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000-cfg-7",
      slug: "durastar-dru-series-central-ducted-36000-cfg-7",
      modelId: "durastar-dru-series-central-ducted-36000",
      outdoorUnitId: "durastar-dru1u36s2a",
      indoorUnitId: "durastar-druc3621s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000-cfg-8",
      slug: "durastar-dru-series-central-ducted-36000-cfg-8",
      modelId: "durastar-dru-series-central-ducted-36000",
      outdoorUnitId: "durastar-dru1h36s2a",
      indoorUnitId: "durastar-druc3617s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-36000-cfg-9",
      slug: "durastar-dru-series-central-ducted-36000-cfg-9",
      modelId: "durastar-dru-series-central-ducted-36000",
      outdoorUnitId: "durastar-dru1h36s2a",
      indoorUnitId: "durastar-druc3621s2a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-42000-cfg-1",
      slug: "durastar-dru-series-central-ducted-42000-cfg-1",
      modelId: "durastar-dru-series-central-ducted-42000",
      outdoorUnitId: "durastar-dru1h42s2a",
      indoorUnitId: "durastar-drum4260s2a",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-42000-cfg-2",
      slug: "durastar-dru-series-central-ducted-42000-cfg-2",
      modelId: "durastar-dru-series-central-ducted-42000",
      outdoorUnitId: "durastar-dru1u48s2a",
      indoorUnitId: "durastar-druc6021s2a",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-42000-cfg-3",
      slug: "durastar-dru-series-central-ducted-42000-cfg-3",
      modelId: "durastar-dru-series-central-ducted-42000",
      outdoorUnitId: "durastar-dru1h48s2a",
      indoorUnitId: "durastar-druc6021s2a",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-1",
      slug: "durastar-dru-series-central-ducted-48000-cfg-1",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1h48s2a",
      indoorUnitId: "durastar-drum4260s2a",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-2",
      slug: "durastar-dru-series-central-ducted-48000-cfg-2",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1h49s2a",
      indoorUnitId: "durastar-drum4260s2a",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-3",
      slug: "durastar-dru-series-central-ducted-48000-cfg-3",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1h60s2a",
      indoorUnitId: "durastar-drum4260s2a",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-4",
      slug: "durastar-dru-series-central-ducted-48000-cfg-4",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1u48s2a",
      indoorUnitId: "durastar-drum4260s2a",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-5",
      slug: "durastar-dru-series-central-ducted-48000-cfg-5",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1u60s2a",
      indoorUnitId: "durastar-drum4260s2a",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-6",
      slug: "durastar-dru-series-central-ducted-48000-cfg-6",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1h60s2a",
      indoorUnitId: "durastar-druc6024s2a",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-7",
      slug: "durastar-dru-series-central-ducted-48000-cfg-7",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1u48s2a",
      indoorUnitId: "durastar-druc6024s2a",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-8",
      slug: "durastar-dru-series-central-ducted-48000-cfg-8",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1u60s2a",
      indoorUnitId: "durastar-druc6021s2a",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-9",
      slug: "durastar-dru-series-central-ducted-48000-cfg-9",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1u60s2a",
      indoorUnitId: "durastar-druc6024s2a",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-10",
      slug: "durastar-dru-series-central-ducted-48000-cfg-10",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1h48s2a",
      indoorUnitId: "durastar-druc6024s2a",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-48000-cfg-11",
      slug: "durastar-dru-series-central-ducted-48000-cfg-11",
      modelId: "durastar-dru-series-central-ducted-48000",
      outdoorUnitId: "durastar-dru1h60s2a",
      indoorUnitId: "durastar-druc6021s2a",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-1",
      slug: "durastar-dru-series-central-ducted-30000-cfg-1",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: "durastar-drum3036s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-2",
      slug: "durastar-dru-series-central-ducted-30000-cfg-2",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1h30s2a",
      indoorUnitId: "durastar-drum3036s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-3",
      slug: "durastar-dru-series-central-ducted-30000-cfg-3",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: "durastar-druf3022s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-4",
      slug: "durastar-dru-series-central-ducted-30000-cfg-4",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1h30s2a",
      indoorUnitId: "durastar-druf3022s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-5",
      slug: "durastar-dru-series-central-ducted-30000-cfg-5",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: "durastar-druc3614s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-6",
      slug: "durastar-dru-series-central-ducted-30000-cfg-6",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: "durastar-druc3617s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-7",
      slug: "durastar-dru-series-central-ducted-30000-cfg-7",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: "durastar-druc3621s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-8",
      slug: "durastar-dru-series-central-ducted-30000-cfg-8",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1h30s2a",
      indoorUnitId: "durastar-druc3614s2a",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.3,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-9",
      slug: "durastar-dru-series-central-ducted-30000-cfg-9",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1h30s2a",
      indoorUnitId: "durastar-druc3617s2a",
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-30000-cfg-10",
      slug: "durastar-dru-series-central-ducted-30000-cfg-10",
      modelId: "durastar-dru-series-central-ducted-30000",
      outdoorUnitId: "durastar-dru1h30s2a",
      indoorUnitId: "durastar-druc3621s2a",
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-42000-cfg-1",
      slug: "durastar-dra-series-wall-single-42000-cfg-1",
      modelId: "durastar-dra-series-wall-single-42000",
      outdoorUnitId: "durastar-dra6h48m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-42000-cfg-2",
      slug: "durastar-dra-series-wall-single-42000-cfg-2",
      modelId: "durastar-dra-series-wall-single-42000",
      outdoorUnitId: "durastar-dra6u48m2a",
      indoorUnitId: "durastar-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-42000-cfg-3",
      slug: "durastar-dra-series-wall-single-42000-cfg-3",
      modelId: "durastar-dra-series-wall-single-42000",
      outdoorUnitId: "durastar-dra6u48m2a",
      indoorUnitId: "durastar-appareils-avec-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-42000-cfg-4",
      slug: "durastar-dra-series-wall-single-42000-cfg-4",
      modelId: "durastar-dra-series-wall-single-42000",
      outdoorUnitId: "durastar-dra6u48m2a",
      indoorUnitId: "durastar-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.85,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "durastar-dra1-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-9000-cfg-2",
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
      configurationId: "durastar-dra1-wall-single-9000-cfg-3",
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
      configurationId: "durastar-dra1-wall-single-9000-cfg-4",
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
      configurationId: "durastar-dra1-wall-single-9000-cfg-5",
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
      configurationId: "durastar-dra1-wall-single-9000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-9000-cfg-7",
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
      configurationId: "durastar-dra1-wall-single-9000-cfg-8",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.41,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-12000-cfg-2",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-3",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-4",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-5",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-6",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-7",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-12000-cfg-9",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-10",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-11",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-12",
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
      configurationId: "durastar-dra1-wall-single-12000-cfg-13",
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
      configurationId: "durastar-dra1-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-18000-cfg-2",
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
      configurationId: "durastar-dra1-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-18000-cfg-4",
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
      configurationId: "durastar-dra1-wall-single-18000-cfg-5",
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
      configurationId: "durastar-dra1-wall-single-18000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-18000-cfg-7",
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
      configurationId: "durastar-dra1-wall-single-18000-cfg-8",
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
      configurationId: "durastar-dra1-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-24000-cfg-2",
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
      configurationId: "durastar-dra1-wall-single-24000-cfg-3",
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
      configurationId: "durastar-dra1-wall-single-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-24000-cfg-5",
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
      configurationId: "durastar-dra1-wall-single-24000-cfg-6",
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
      configurationId: "durastar-dra1-wall-single-24000-cfg-7",
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
      configurationId: "durastar-dra1-wall-single-24000-cfg-8",
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
      configurationId: "durastar-dra1-wall-single-15000-cfg-1",
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
      configurationId: "durastar-dra1-wall-single-15000-cfg-2",
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
      configurationId: "durastar-dra2-wall-single-18000-cfg-1",
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
      configurationId: "durastar-dra2-wall-single-18000-cfg-2",
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
      configurationId: "durastar-dra2-wall-single-18000-cfg-3",
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
      configurationId: "durastar-dra2-wall-single-18000-cfg-4",
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
      configurationId: "durastar-dra2-wall-single-18000-cfg-5",
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
      configurationId: "durastar-dra2-wall-single-18000-cfg-6",
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
      configurationId: "durastar-dra3-wall-single-24000-cfg-1",
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
      configurationId: "durastar-dra3-wall-single-30000-cfg-1",
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
      configurationId: "durastar-dra3-wall-single-30000-cfg-2",
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
      configurationId: "durastar-dra3-wall-single-30000-cfg-3",
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
      configurationId: "durastar-dra3-wall-single-30000-cfg-4",
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
      configurationId: "durastar-dra3-wall-single-30000-cfg-5",
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
      configurationId: "durastar-dra-series-wall-single-36000-cfg-1",
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
      configurationId: "durastar-dra-series-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-36000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-36000-cfg-6",
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
      configurationId: "durastar-dra-series-wall-single-36000-cfg-7",
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
      configurationId: "durastar-dra-series-wall-single-48000-cfg-1",
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
      configurationId: "durastar-dra-series-wall-single-48000-cfg-2",
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
      configurationId: "durastar-dra-series-wall-single-48000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-48000-cfg-4",
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
      configurationId: "durastar-dra-series-wall-single-48000-cfg-5",
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
      configurationId: "durastar-dra-series-wall-single-48000-cfg-6",
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
      configurationId: "durastar-dra-series-wall-single-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-6000-cfg-1",
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
      configurationId: "durastar-dra1-wall-single-6000-cfg-2",
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
      configurationId: "durastar-standard-wall-single-60000-cfg-1",
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
      configurationId: "durastar-standard-wall-single-60000-cfg-2",
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
      configurationId: "durastar-standard-wall-single-60000-cfg-3",
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
      configurationId: "durastar-standard-wall-single-60000-cfg-4",
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
      configurationId: "durastar-standard-wall-single-60000-cfg-5",
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
      configurationId: "durastar-standard-wall-single-60000-cfg-6",
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
      configurationId: "durastar-dra4-wall-single-36000-cfg-1",
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
      configurationId: "durastar-dra4-wall-single-36000-cfg-2",
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
      configurationId: "durastar-dra5-wall-single-48000-cfg-1",
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
      configurationId: "durastar-dra5-wall-single-48000-cfg-2",
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
      configurationId: "durastar-dra5-wall-single-48000-cfg-3",
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
      configurationId: "durastar-dra5-wall-single-60000-cfg-1",
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
      configurationId: "durastar-dra5-wall-single-60000-cfg-2",
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
      configurationId: "durastar-dra5-wall-single-60000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-30000-cfg-2",
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
      configurationId: "durastar-dra-series-wall-single-30000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-36000-cfg-1",
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
      configurationId: "durastar-standard-wall-single-36000-cfg-2",
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
      configurationId: "durastar-standard-wall-single-36000-cfg-3",
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
      configurationId: "durastar-standard-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-48000-cfg-1",
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
      configurationId: "durastar-standard-wall-single-48000-cfg-2",
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
      configurationId: "durastar-standard-wall-single-48000-cfg-3",
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
      configurationId: "durastar-standard-wall-single-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-48000-cfg-9",
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
      configurationId: "durastar-dra-series-central-ducted-18000-cfg-1",
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
      configurationId: "durastar-dra-series-central-ducted-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-central-ducted-18000-cfg-3",
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
      configurationId: "durastar-dra-series-central-ducted-18000-cfg-4",
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
      configurationId: "durastar-dra-series-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-central-ducted-24000-cfg-2",
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
      configurationId: "durastar-dra-series-central-ducted-24000-cfg-3",
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
      configurationId: "durastar-dra-series-central-ducted-24000-cfg-4",
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
      configurationId: "durastar-standard-wall-single-30000-cfg-1",
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
      configurationId: "durastar-standard-wall-single-30000-cfg-2",
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
      configurationId: "durastar-standard-wall-single-30000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-18000-cfg-2",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-18000-cfg-5",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-18000-cfg-7",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-8",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-9",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-10",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-11",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-18000-cfg-13",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-14",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-15",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-16",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-17",
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
      configurationId: "durastar-dra-series-wall-single-18000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-24000-cfg-2",
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
      configurationId: "durastar-dra-series-wall-single-24000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-24000-cfg-4",
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
      configurationId: "durastar-dra-series-wall-single-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-24000-cfg-6",
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
      configurationId: "durastar-dra-series-wall-single-24000-cfg-7",
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
      configurationId: "durastar-dra-series-wall-single-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-24000-cfg-9",
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
      configurationId: "durastar-dra-series-wall-single-24000-cfg-10",
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
      configurationId: "durastar-dra-series-wall-single-24000-cfg-11",
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
      configurationId: "durastar-dra-series-wall-single-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-42000-cfg-1",
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
      configurationId: "durastar-standard-wall-single-42000-cfg-2",
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
      configurationId: "durastar-standard-wall-single-42000-cfg-3",
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
      configurationId: "durastar-standard-wall-single-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-6000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-6000-cfg-2",
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
      configurationId: "durastar-dra-series-wall-single-6000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-1",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-2",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-4",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-5",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-6",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-7",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-9000-cfg-9",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-10",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-11",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-12",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-13",
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
      configurationId: "durastar-dra-series-wall-single-9000-cfg-14",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-1",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-2",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-4",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-5",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-6",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-12000-cfg-8",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-9",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-10",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-11",
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
      configurationId: "durastar-dra-series-wall-single-12000-cfg-12",
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
      configurationId: "durastar-dra-series-wall-single-15000-cfg-1",
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
      configurationId: "durastar-dra-series-wall-single-15000-cfg-2",
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
      configurationId: "durastar-dra-series-wall-single-15000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-20000-cfg-1",
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
      configurationId: "durastar-dru-series-central-ducted-18000-cfg-1",
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
      configurationId: "durastar-dru-series-central-ducted-18000-cfg-2",
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
      configurationId: "durastar-dru-series-central-ducted-18000-cfg-3",
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
      configurationId: "durastar-dru-series-central-ducted-18000-cfg-4",
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
      configurationId: "durastar-dru-series-central-ducted-18000-cfg-5",
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
      configurationId: "durastar-dru-series-central-ducted-18000-cfg-6",
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
      configurationId: "durastar-dru-series-central-ducted-18000-cfg-7",
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
      configurationId: "durastar-dru-series-central-ducted-18000-cfg-8",
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
      configurationId: "durastar-dru-series-central-ducted-24000-cfg-1",
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
      configurationId: "durastar-dru-series-central-ducted-24000-cfg-2",
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
      configurationId: "durastar-dru-series-central-ducted-24000-cfg-3",
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
      configurationId: "durastar-dru-series-central-ducted-24000-cfg-4",
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
      configurationId: "durastar-dru-series-central-ducted-24000-cfg-5",
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
      configurationId: "durastar-dru-series-central-ducted-24000-cfg-6",
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
      configurationId: "durastar-dru-series-central-ducted-24000-cfg-7",
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
      configurationId: "durastar-dru-series-central-ducted-24000-cfg-8",
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
      configurationId: "durastar-dru-series-central-ducted-36000-cfg-1",
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
      configurationId: "durastar-dru-series-central-ducted-36000-cfg-2",
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
      configurationId: "durastar-dru-series-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-36000-cfg-4",
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
      configurationId: "durastar-dru-series-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-36000-cfg-6",
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
      configurationId: "durastar-dru-series-central-ducted-36000-cfg-7",
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
      configurationId: "durastar-dru-series-central-ducted-36000-cfg-8",
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
      configurationId: "durastar-dru-series-central-ducted-36000-cfg-9",
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
      configurationId: "durastar-dru-series-central-ducted-42000-cfg-1",
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
      configurationId: "durastar-dru-series-central-ducted-42000-cfg-2",
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
      configurationId: "durastar-dru-series-central-ducted-42000-cfg-3",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-1",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-2",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-3",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-4",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-5",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-6",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-8",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-9",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-10",
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
      configurationId: "durastar-dru-series-central-ducted-48000-cfg-11",
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
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-1",
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
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-2",
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
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-4",
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
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-9",
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
      configurationId: "durastar-dru-series-central-ducted-30000-cfg-10",
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
      configurationId: "durastar-dra-series-wall-single-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-42000-cfg-3",
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
      configurationId: "durastar-dra-series-wall-single-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: 2.1,
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
