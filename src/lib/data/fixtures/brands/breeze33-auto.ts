import type { BrandDataset } from "../../types";

export const breeze33Dataset: BrandDataset = {
  brand: {
    id: "breeze33",
    slug: "breeze33",
    name: "BREEZE33",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "breeze33-bz33-series",
      slug: "breeze33-bz33-series",
      name: "BZ33 series",
      brandId: "breeze33",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-standard",
      slug: "breeze33-standard",
      name: "Standard",
      brandId: "breeze33",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series",
      slug: "breeze33-hs-series",
      name: "HS series",
      brandId: "breeze33",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "breeze33-bz33-series-wall-single-9000",
      slug: "breeze33-bz33-series-wall-single-9000",
      name: "BZ33 series 9 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 9k",
      normalizedModelNumber: "bz33-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 10100,
      seer2Min: 20.2,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 12.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-standard-wall-single-18000",
      slug: "breeze33-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "breeze33-standard",
      brandId: "breeze33",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11500,
      heatingCapacity5FMaxBtu: 12300,
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
      id: "breeze33-standard-wall-single-36000",
      slug: "breeze33-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "breeze33-standard",
      brandId: "breeze33",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 24000,
      heatingCapacity5FMaxBtu: 24600,
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
      id: "breeze33-bz33-series-wall-single-6000",
      slug: "breeze33-bz33-series-wall-single-6000",
      name: "BZ33 series 6 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 6k",
      normalizedModelNumber: "bz33-series-6000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6500,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 8500,
      seer2Min: 22,
      seer2Max: 26.5,
      hspf2Min: 12,
      hspf2Max: 14.8,
      cop5FMin: 2.1,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-12000",
      slug: "breeze33-bz33-series-wall-single-12000",
      name: "BZ33 series 12 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 12k",
      normalizedModelNumber: "bz33-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 9500,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: 19.5,
      seer2Max: 25.5,
      hspf2Min: 10,
      hspf2Max: 11.6,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-18000",
      slug: "breeze33-bz33-series-wall-single-18000",
      name: "BZ33 series 18 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 18k",
      normalizedModelNumber: "bz33-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 17600,
      seer2Min: 18,
      seer2Max: 25.1,
      hspf2Min: 9.3,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-24000",
      slug: "breeze33-bz33-series-wall-single-24000",
      name: "BZ33 series 24 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 24k",
      normalizedModelNumber: "bz33-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 18.7,
      seer2Max: 25,
      hspf2Min: 9,
      hspf2Max: 13.5,
      cop5FMin: 2,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-15000",
      slug: "breeze33-bz33-series-wall-single-15000",
      name: "BZ33 series 15 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 15k",
      normalizedModelNumber: "bz33-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 14200,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 12.3,
      cop5FMin: 1.75,
      cop5FMax: 1.95,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-30000",
      slug: "breeze33-bz33-series-wall-single-30000",
      name: "BZ33 series 30 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 30k",
      normalizedModelNumber: "bz33-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19,
      seer2Max: 24.6,
      hspf2Min: 9.2,
      hspf2Max: 10.6,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-36000",
      slug: "breeze33-bz33-series-wall-single-36000",
      name: "BZ33 series 36 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 36k",
      normalizedModelNumber: "bz33-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36600,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 16.5,
      seer2Max: 24,
      hspf2Min: 9.2,
      hspf2Max: 11.1,
      cop5FMin: 1.7,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-48000",
      slug: "breeze33-bz33-series-wall-single-48000",
      name: "BZ33 series 48 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 48k",
      normalizedModelNumber: "bz33-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 30400,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16.7,
      seer2Max: 24,
      hspf2Min: 8.7,
      hspf2Max: 11,
      cop5FMin: 1.75,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-18000",
      slug: "breeze33-bz33-series-central-ducted-18000",
      name: "BZ33 series 18 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 18k",
      normalizedModelNumber: "bz33-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 15800,
      seer2Min: 16.1,
      seer2Max: 19.3,
      hspf2Min: 9.5,
      hspf2Max: 10.8,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-24000",
      slug: "breeze33-bz33-series-central-ducted-24000",
      name: "BZ33 series 24 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 24k",
      normalizedModelNumber: "bz33-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 22400,
      seer2Min: 16,
      seer2Max: 18.7,
      hspf2Min: 9.3,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 2.16,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-wall-single-9000",
      slug: "breeze33-hs-series-wall-single-9000",
      name: "HS series 9 000 BTU",
      seriesId: "breeze33-hs-series",
      brandId: "breeze33",
      modelNumber: "HS series 9k",
      normalizedModelNumber: "hs-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 9800,
      heatingCapacity5FMaxBtu: 10100,
      seer2Min: 20.2,
      seer2Max: 24,
      hspf2Min: 12,
      hspf2Max: 12.4,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-wall-single-12000",
      slug: "breeze33-hs-series-wall-single-12000",
      name: "HS series 12 000 BTU",
      seriesId: "breeze33-hs-series",
      brandId: "breeze33",
      modelNumber: "HS series 12k",
      normalizedModelNumber: "hs-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 9500,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: 19.5,
      seer2Max: 24.2,
      hspf2Min: 10,
      hspf2Max: 10.7,
      cop5FMin: 1.8,
      cop5FMax: 1.99,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-wall-single-15000",
      slug: "breeze33-hs-series-wall-single-15000",
      name: "HS series 15 000 BTU",
      seriesId: "breeze33-hs-series",
      brandId: "breeze33",
      modelNumber: "HS series 15k",
      normalizedModelNumber: "hs-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 14700,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 20,
      seer2Max: 20.2,
      hspf2Min: 8.9,
      hspf2Max: 9.5,
      cop5FMin: 1.75,
      cop5FMax: 1.76,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-wall-single-18000",
      slug: "breeze33-hs-series-wall-single-18000",
      name: "HS series 18 000 BTU",
      seriesId: "breeze33-hs-series",
      brandId: "breeze33",
      modelNumber: "HS series 18k",
      normalizedModelNumber: "hs-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 17000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 18,
      seer2Max: 20.5,
      hspf2Min: 9.5,
      hspf2Max: 11.2,
      cop5FMin: 1.85,
      cop5FMax: 1.93,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-wall-single-24000",
      slug: "breeze33-hs-series-wall-single-24000",
      name: "HS series 24 000 BTU",
      seriesId: "breeze33-hs-series",
      brandId: "breeze33",
      modelNumber: "HS series 24k",
      normalizedModelNumber: "hs-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 19.2,
      seer2Max: 20.5,
      hspf2Min: 10.5,
      hspf2Max: 11.5,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-central-ducted-24000",
      slug: "breeze33-hs-series-central-ducted-24000",
      name: "HS-series 24 000 BTU",
      seriesId: "breeze33-hs-series",
      brandId: "breeze33",
      modelNumber: "HS-series 24k",
      normalizedModelNumber: "hs-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 16900,
      seer2Min: 18.4,
      seer2Max: 18.4,
      hspf2Min: 9.3,
      hspf2Max: 9.3,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-central-ducted-18000",
      slug: "breeze33-hs-series-central-ducted-18000",
      name: "HS-series 18 000 BTU",
      seriesId: "breeze33-hs-series",
      brandId: "breeze33",
      modelNumber: "HS-series 18k",
      normalizedModelNumber: "hs-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 15400,
      seer2Min: 17.6,
      seer2Max: 17.6,
      hspf2Min: 9.6,
      hspf2Max: 9.6,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-36000",
      slug: "breeze33-bz33-series-central-ducted-36000",
      name: "BZ33 series 36 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 36k",
      normalizedModelNumber: "bz33-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 27400,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.6,
      hspf2Max: 10.3,
      cop5FMin: 1.81,
      cop5FMax: 2.06,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-standard-wall-single-48000",
      slug: "breeze33-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "breeze33-standard",
      brandId: "breeze33",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 32000,
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
      id: "breeze33-bz33-series-central-ducted-30000",
      slug: "breeze33-bz33-series-central-ducted-30000",
      name: "BZ33 series 30 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series 30k",
      normalizedModelNumber: "bz33-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 19600,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 15.2,
      seer2Max: 17.2,
      hspf2Min: 8.5,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 1.97,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-standard-wall-single-12000",
      slug: "breeze33-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "breeze33-standard",
      brandId: "breeze33",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7300,
      heatingCapacity5FMaxBtu: 7300,
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
      id: "breeze33-bz33-series-central-ducted-48000",
      slug: "breeze33-bz33-series-central-ducted-48000",
      name: "BZ33 Series 48 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 Series 48k",
      normalizedModelNumber: "bz33-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 34000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 17.5,
      hspf2Min: 8.1,
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
      id: "breeze33-bz33-series-wall-single-60000",
      slug: "breeze33-bz33-series-wall-single-60000",
      name: "BZ33 Series 60 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 Series 60k",
      normalizedModelNumber: "bz33-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 45000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 15.8,
      hspf2Min: 10.4,
      hspf2Max: 10.4,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-20000",
      slug: "breeze33-bz33-series-wall-single-20000",
      name: "BZ33 Series 20 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 Series 20k",
      normalizedModelNumber: "bz33-series-20000",
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
      id: "breeze33-bz33-series-wall-single-42000",
      slug: "breeze33-bz33-series-wall-single-42000",
      name: "BZ33 Series 42 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 Series 42k",
      normalizedModelNumber: "bz33-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 20.4,
      seer2Max: 20.4,
      hspf2Min: 10.6,
      hspf2Max: 10.6,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-42000",
      slug: "breeze33-bz33-series-central-ducted-42000",
      name: "BZ33 Series 42 000 BTU",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 Series 42k",
      normalizedModelNumber: "bz33-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 34400,
      heatingCapacity5FMaxBtu: 34400,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 8.8,
      hspf2Max: 8.8,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "breeze33-bz33-hp09out1-g2-c",
      modelNumber: "BZ33-HP09OUT1-G2-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp09out2-g2-p",
      modelNumber: "BZ33-HYP09OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp09out1-454-g3-c",
      modelNumber: "BZ33-HP09OUT1-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp09out2-454-g3-p",
      modelNumber: "BZ33-HYP09OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp18out2-g2-c",
      modelNumber: "BZ33-HP18OUT2-G2-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp18out2-454-g3-c",
      modelNumber: "BZ33-HP18OUT2-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp36out2-g2-c",
      modelNumber: "BZ33-HP36OUT2-G2-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp36out2-454-g3-c",
      modelNumber: "BZ33-HP36OUT2-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp06out2-g2-p",
      modelNumber: "BZ33-HYP06OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp06out2-454-g3-p",
      modelNumber: "BZ33-HYP06OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp12out2-g2-p",
      modelNumber: "BZ33-HYP12OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp12out2-454-g3-p",
      modelNumber: "BZ33-HYP12OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp18out2-g2-p",
      modelNumber: "BZ33-HYP18OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp182z2-g2-p",
      modelNumber: "BZ33-HP182Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp182z2-g2-p",
      modelNumber: "BZ33-HYP182Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp18out2-454-g3-p",
      modelNumber: "BZ33-HYP18OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp183z2-454-g3-p",
      modelNumber: "BZ33-HP183Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp183z2-454-g3-p",
      modelNumber: "BZ33-HYP183Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp24out2-g2-p",
      modelNumber: "BZ33-HYP24OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp24out2-454-g3-c",
      modelNumber: "BZ33-HP24OUT2-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp24out2-454-g3-p",
      modelNumber: "BZ33-HYP24OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp274z2-454-g3-p",
      modelNumber: "BZ33-HP274Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp274z2-454-g3-p",
      modelNumber: "BZ33-HYP274Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp273z2-g2-p",
      modelNumber: "BZ33-HP273Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp273z2-g2-p",
      modelNumber: "BZ33-HYP273Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp33out2-g2-p",
      modelNumber: "BZ33-HYP33OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp30out2-454-g3-c",
      modelNumber: "BZ33-HP30OUT2-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp33out2-454-g3-p",
      modelNumber: "BZ33-HYP33OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp364z2-g2-p",
      modelNumber: "BZ33-HP364Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp364z2-g2-p",
      modelNumber: "BZ33-HYP364Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp36out2-g2-p",
      modelNumber: "BZ33-HYP36OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp36out2-454-g3-p",
      modelNumber: "BZ33-HYP36OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp365z2-454-g3-p",
      modelNumber: "BZ33-HP365Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp365z2-454-g3-p",
      modelNumber: "BZ33-HYP365Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp485z2-g2-p",
      modelNumber: "BZ33-HP485Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp485z2-g2-p",
      modelNumber: "BZ33-HYP485Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp48out2-g2-p",
      modelNumber: "BZ33-HYP48OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp48out2-454-g3-p",
      modelNumber: "BZ33-HYP48OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp55out2-454-g3-p",
      modelNumber: "BZ33-HYP55OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp486z2-454-g3-p",
      modelNumber: "BZ33-HP486Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp486z2-454-g3-p",
      modelNumber: "BZ33-HYP486Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp556z2-454-g3-p",
      modelNumber: "BZ33-HYP556Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv18out2-j",
      modelNumber: "BZ33-INV18OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv18out2-454-g3-j",
      modelNumber: "BZ33-INV18OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv24out2-j",
      modelNumber: "BZ33-INV24OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv24out2-454-g3-j",
      modelNumber: "BZ33-INV24OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-hsz9h424zmo",
      modelNumber: "HSZ9H424ZMO",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-hsz12h424zmo",
      modelNumber: "HSZ12H424ZMO",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-hsz18h424zmo",
      modelNumber: "HSZ18H424ZMO",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-hsz24h424zmo",
      modelNumber: "HSZ24H424ZMO",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv36out2-j",
      modelNumber: "BZ33-INV36OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv36out2-454-g3-j",
      modelNumber: "BZ33-INV36OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv48out2-j",
      modelNumber: "BZ33-INV48OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv60out2-j",
      modelNumber: "BZ33-INV60OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv30out2-j",
      modelNumber: "BZ33-INV30OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv30out2-454-g3-j",
      modelNumber: "BZ33-INV30OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp12out1-454-g3-c",
      modelNumber: "BZ33-HP12OUT1-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv48out2-454-g3-j",
      modelNumber: "BZ33-INV48OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv60out2-454-g3-j",
      modelNumber: "BZ33-INV60OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "breeze33-bz33-series-wall-single-9000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hp09out1-g2-c",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-2",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-2",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hyp09out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-3",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-3",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hyp09out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-4",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-4",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hyp09out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-5",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-5",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hyp09out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-6",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-6",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hp09out1-454-g3-c",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-7",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-7",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-8",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-8",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-9",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-9",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-10",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-10",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-9000-cfg-11",
      slug: "breeze33-bz33-series-wall-single-9000-cfg-11",
      modelId: "breeze33-bz33-series-wall-single-9000",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
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
      id: "breeze33-standard-wall-single-18000-cfg-1",
      slug: "breeze33-standard-wall-single-18000-cfg-1",
      modelId: "breeze33-standard-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hp18out2-g2-c",
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
      id: "breeze33-standard-wall-single-18000-cfg-2",
      slug: "breeze33-standard-wall-single-18000-cfg-2",
      modelId: "breeze33-standard-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hp18out2-454-g3-c",
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
      id: "breeze33-standard-wall-single-36000-cfg-1",
      slug: "breeze33-standard-wall-single-36000-cfg-1",
      modelId: "breeze33-standard-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hp36out2-g2-c",
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
      id: "breeze33-standard-wall-single-36000-cfg-2",
      slug: "breeze33-standard-wall-single-36000-cfg-2",
      modelId: "breeze33-standard-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hp36out2-454-g3-c",
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
      id: "breeze33-bz33-series-wall-single-6000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-6000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-6000",
      outdoorUnitId: "breeze33-bz33-hyp06out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-6000-cfg-2",
      slug: "breeze33-bz33-series-wall-single-6000-cfg-2",
      modelId: "breeze33-bz33-series-wall-single-6000",
      outdoorUnitId: "breeze33-bz33-hyp06out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-6000-cfg-3",
      slug: "breeze33-bz33-series-wall-single-6000-cfg-3",
      modelId: "breeze33-bz33-series-wall-single-6000",
      outdoorUnitId: "breeze33-bz33-hyp06out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-2",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-2",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-3",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-3",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-4",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-4",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-5",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-5",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-6",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-6",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-7",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-7",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-8",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-8",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-9",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-9",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-12000-cfg-10",
      slug: "breeze33-bz33-series-wall-single-12000-cfg-10",
      modelId: "breeze33-bz33-series-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-2",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-2",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-3",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-3",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-4",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-4",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hp182z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-5",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-5",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hp182z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-6",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-6",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hp182z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-7",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-7",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp182z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-8",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-8",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp182z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-9",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-9",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp182z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-10",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-10",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-11",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-11",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-12",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-12",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-13",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-13",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-14",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-14",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-15",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-15",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-16",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-16",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-17",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-17",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-18",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-18",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-18000-cfg-19",
      slug: "breeze33-bz33-series-wall-single-18000-cfg-19",
      modelId: "breeze33-bz33-series-wall-single-18000",
      outdoorUnitId: "breeze33-bz33-hyp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hyp24out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-2",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-2",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hyp24out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-3",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-3",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hyp24out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-4",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-4",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hp24out2-454-g3-c",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-5",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-5",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-6",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-6",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-7",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-7",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-8",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-8",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hp274z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-9",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-9",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hp274z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-10",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-10",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hp274z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-24000-cfg-11",
      slug: "breeze33-bz33-series-wall-single-24000-cfg-11",
      modelId: "breeze33-bz33-series-wall-single-24000",
      outdoorUnitId: "breeze33-bz33-hyp274z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-15000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-15000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-15000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-15000-cfg-2",
      slug: "breeze33-bz33-series-wall-single-15000-cfg-2",
      modelId: "breeze33-bz33-series-wall-single-15000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-15000-cfg-3",
      slug: "breeze33-bz33-series-wall-single-15000-cfg-3",
      modelId: "breeze33-bz33-series-wall-single-15000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hp273z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-2",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-2",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hp273z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-3",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-3",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hp273z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-4",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-4",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hyp273z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-5",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-5",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hyp273z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-6",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-6",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hyp273z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-7",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-7",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hyp33out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-8",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-8",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hp30out2-454-g3-c",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-9",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-9",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hyp33out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-10",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-10",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hyp274z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-30000-cfg-11",
      slug: "breeze33-bz33-series-wall-single-30000-cfg-11",
      modelId: "breeze33-bz33-series-wall-single-30000",
      outdoorUnitId: "breeze33-bz33-hyp274z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hp364z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-2",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-2",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp364z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-3",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-3",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp364z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-4",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-4",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp36out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-5",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-5",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp36out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-6",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-6",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp36out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-7",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-7",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp36out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-8",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-8",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp36out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-9",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-9",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp36out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-10",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-10",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp36out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-11",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-11",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hp365z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-12",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-12",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hp365z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-13",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-13",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hp365z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-14",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-14",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp365z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-15",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-15",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp365z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-36000-cfg-16",
      slug: "breeze33-bz33-series-wall-single-36000-cfg-16",
      modelId: "breeze33-bz33-series-wall-single-36000",
      outdoorUnitId: "breeze33-bz33-hyp365z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hp485z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-2",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-2",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hp485z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-3",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-3",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hp485z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-4",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-4",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp485z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-5",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-5",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp485z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-6",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-6",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp485z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-7",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-7",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp48out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-8",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-8",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp48out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-9",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-9",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp48out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-10",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-10",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp48out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-11",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-11",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp48out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-12",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-12",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp48out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-13",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-13",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp48out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-14",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-14",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp55out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-15",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-15",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hp486z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-16",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-16",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hp486z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-17",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-17",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp486z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-18",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-18",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp486z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-19",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-19",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp486z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-20",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-20",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp556z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-21",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-21",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp556z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-48000-cfg-22",
      slug: "breeze33-bz33-series-wall-single-48000-cfg-22",
      modelId: "breeze33-bz33-series-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-hyp556z2-454-g3-p",
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
      id: "breeze33-bz33-series-central-ducted-18000-cfg-1",
      slug: "breeze33-bz33-series-central-ducted-18000-cfg-1",
      modelId: "breeze33-bz33-series-central-ducted-18000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-central-ducted-18000-cfg-2",
      slug: "breeze33-bz33-series-central-ducted-18000-cfg-2",
      modelId: "breeze33-bz33-series-central-ducted-18000",
      outdoorUnitId: "breeze33-bz33-inv18out2-j",
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
      id: "breeze33-bz33-series-central-ducted-18000-cfg-3",
      slug: "breeze33-bz33-series-central-ducted-18000-cfg-3",
      modelId: "breeze33-bz33-series-central-ducted-18000",
      outdoorUnitId: "breeze33-bz33-inv18out2-j",
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
      id: "breeze33-bz33-series-central-ducted-18000-cfg-4",
      slug: "breeze33-bz33-series-central-ducted-18000-cfg-4",
      modelId: "breeze33-bz33-series-central-ducted-18000",
      outdoorUnitId: "breeze33-bz33-inv18out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-18000-cfg-5",
      slug: "breeze33-bz33-series-central-ducted-18000-cfg-5",
      modelId: "breeze33-bz33-series-central-ducted-18000",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-central-ducted-18000-cfg-6",
      slug: "breeze33-bz33-series-central-ducted-18000-cfg-6",
      modelId: "breeze33-bz33-series-central-ducted-18000",
      outdoorUnitId: "breeze33-bz33-inv18out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-18000-cfg-7",
      slug: "breeze33-bz33-series-central-ducted-18000-cfg-7",
      modelId: "breeze33-bz33-series-central-ducted-18000",
      outdoorUnitId: "breeze33-bz33-inv18out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-18000-cfg-8",
      slug: "breeze33-bz33-series-central-ducted-18000-cfg-8",
      modelId: "breeze33-bz33-series-central-ducted-18000",
      outdoorUnitId: "breeze33-bz33-inv18out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-24000-cfg-1",
      slug: "breeze33-bz33-series-central-ducted-24000-cfg-1",
      modelId: "breeze33-bz33-series-central-ducted-24000",
      outdoorUnitId: "breeze33-bz33-hyp24out2-g2-p",
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
      id: "breeze33-bz33-series-central-ducted-24000-cfg-2",
      slug: "breeze33-bz33-series-central-ducted-24000-cfg-2",
      modelId: "breeze33-bz33-series-central-ducted-24000",
      outdoorUnitId: "breeze33-bz33-inv24out2-j",
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
      id: "breeze33-bz33-series-central-ducted-24000-cfg-3",
      slug: "breeze33-bz33-series-central-ducted-24000-cfg-3",
      modelId: "breeze33-bz33-series-central-ducted-24000",
      outdoorUnitId: "breeze33-bz33-inv24out2-j",
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
      id: "breeze33-bz33-series-central-ducted-24000-cfg-4",
      slug: "breeze33-bz33-series-central-ducted-24000-cfg-4",
      modelId: "breeze33-bz33-series-central-ducted-24000",
      outdoorUnitId: "breeze33-bz33-inv24out2-j",
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
      id: "breeze33-bz33-series-central-ducted-24000-cfg-5",
      slug: "breeze33-bz33-series-central-ducted-24000-cfg-5",
      modelId: "breeze33-bz33-series-central-ducted-24000",
      outdoorUnitId: "breeze33-bz33-inv24out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-24000-cfg-6",
      slug: "breeze33-bz33-series-central-ducted-24000-cfg-6",
      modelId: "breeze33-bz33-series-central-ducted-24000",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-central-ducted-24000-cfg-7",
      slug: "breeze33-bz33-series-central-ducted-24000-cfg-7",
      modelId: "breeze33-bz33-series-central-ducted-24000",
      outdoorUnitId: "breeze33-bz33-inv24out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-24000-cfg-8",
      slug: "breeze33-bz33-series-central-ducted-24000-cfg-8",
      modelId: "breeze33-bz33-series-central-ducted-24000",
      outdoorUnitId: "breeze33-bz33-inv24out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-24000-cfg-9",
      slug: "breeze33-bz33-series-central-ducted-24000-cfg-9",
      modelId: "breeze33-bz33-series-central-ducted-24000",
      outdoorUnitId: "breeze33-bz33-inv24out2-454-g3-j",
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
      id: "breeze33-hs-series-wall-single-9000-cfg-1",
      slug: "breeze33-hs-series-wall-single-9000-cfg-1",
      modelId: "breeze33-hs-series-wall-single-9000",
      outdoorUnitId: "breeze33-hsz9h424zmo",
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
      id: "breeze33-hs-series-wall-single-9000-cfg-2",
      slug: "breeze33-hs-series-wall-single-9000-cfg-2",
      modelId: "breeze33-hs-series-wall-single-9000",
      outdoorUnitId: "breeze33-hsz9h424zmo",
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
      id: "breeze33-hs-series-wall-single-12000-cfg-1",
      slug: "breeze33-hs-series-wall-single-12000-cfg-1",
      modelId: "breeze33-hs-series-wall-single-12000",
      outdoorUnitId: "breeze33-hsz12h424zmo",
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
      id: "breeze33-hs-series-wall-single-12000-cfg-2",
      slug: "breeze33-hs-series-wall-single-12000-cfg-2",
      modelId: "breeze33-hs-series-wall-single-12000",
      outdoorUnitId: "breeze33-hsz12h424zmo",
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
      id: "breeze33-hs-series-wall-single-12000-cfg-3",
      slug: "breeze33-hs-series-wall-single-12000-cfg-3",
      modelId: "breeze33-hs-series-wall-single-12000",
      outdoorUnitId: "breeze33-hsz12h424zmo",
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
      id: "breeze33-hs-series-wall-single-12000-cfg-4",
      slug: "breeze33-hs-series-wall-single-12000-cfg-4",
      modelId: "breeze33-hs-series-wall-single-12000",
      outdoorUnitId: "breeze33-hsz12h424zmo",
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
      id: "breeze33-hs-series-wall-single-15000-cfg-1",
      slug: "breeze33-hs-series-wall-single-15000-cfg-1",
      modelId: "breeze33-hs-series-wall-single-15000",
      outdoorUnitId: "breeze33-hsz18h424zmo",
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
      id: "breeze33-hs-series-wall-single-15000-cfg-2",
      slug: "breeze33-hs-series-wall-single-15000-cfg-2",
      modelId: "breeze33-hs-series-wall-single-15000",
      outdoorUnitId: "breeze33-hsz18h424zmo",
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
      id: "breeze33-hs-series-wall-single-18000-cfg-1",
      slug: "breeze33-hs-series-wall-single-18000-cfg-1",
      modelId: "breeze33-hs-series-wall-single-18000",
      outdoorUnitId: "breeze33-hsz18h424zmo",
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
      id: "breeze33-hs-series-wall-single-18000-cfg-2",
      slug: "breeze33-hs-series-wall-single-18000-cfg-2",
      modelId: "breeze33-hs-series-wall-single-18000",
      outdoorUnitId: "breeze33-hsz18h424zmo",
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
      id: "breeze33-hs-series-wall-single-18000-cfg-3",
      slug: "breeze33-hs-series-wall-single-18000-cfg-3",
      modelId: "breeze33-hs-series-wall-single-18000",
      outdoorUnitId: "breeze33-hsz18h424zmo",
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
      id: "breeze33-hs-series-wall-single-24000-cfg-1",
      slug: "breeze33-hs-series-wall-single-24000-cfg-1",
      modelId: "breeze33-hs-series-wall-single-24000",
      outdoorUnitId: "breeze33-hsz24h424zmo",
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
      id: "breeze33-hs-series-wall-single-24000-cfg-2",
      slug: "breeze33-hs-series-wall-single-24000-cfg-2",
      modelId: "breeze33-hs-series-wall-single-24000",
      outdoorUnitId: "breeze33-hsz24h424zmo",
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
      id: "breeze33-hs-series-wall-single-24000-cfg-3",
      slug: "breeze33-hs-series-wall-single-24000-cfg-3",
      modelId: "breeze33-hs-series-wall-single-24000",
      outdoorUnitId: "breeze33-hsz24h424zmo",
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
      id: "breeze33-hs-series-central-ducted-24000-cfg-1",
      slug: "breeze33-hs-series-central-ducted-24000-cfg-1",
      modelId: "breeze33-hs-series-central-ducted-24000",
      outdoorUnitId: "breeze33-hsz24h424zmo",
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
      id: "breeze33-hs-series-central-ducted-18000-cfg-1",
      slug: "breeze33-hs-series-central-ducted-18000-cfg-1",
      modelId: "breeze33-hs-series-central-ducted-18000",
      outdoorUnitId: "breeze33-hsz18h424zmo",
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
      id: "breeze33-bz33-series-central-ducted-36000-cfg-1",
      slug: "breeze33-bz33-series-central-ducted-36000-cfg-1",
      modelId: "breeze33-bz33-series-central-ducted-36000",
      outdoorUnitId: "breeze33-bz33-inv36out2-j",
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
      id: "breeze33-bz33-series-central-ducted-36000-cfg-2",
      slug: "breeze33-bz33-series-central-ducted-36000-cfg-2",
      modelId: "breeze33-bz33-series-central-ducted-36000",
      outdoorUnitId: "breeze33-bz33-inv36out2-j",
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
      id: "breeze33-bz33-series-central-ducted-36000-cfg-3",
      slug: "breeze33-bz33-series-central-ducted-36000-cfg-3",
      modelId: "breeze33-bz33-series-central-ducted-36000",
      outdoorUnitId: "breeze33-bz33-inv36out2-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-36000-cfg-4",
      slug: "breeze33-bz33-series-central-ducted-36000-cfg-4",
      modelId: "breeze33-bz33-series-central-ducted-36000",
      outdoorUnitId: "breeze33-bz33-inv36out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-36000-cfg-5",
      slug: "breeze33-bz33-series-central-ducted-36000-cfg-5",
      modelId: "breeze33-bz33-series-central-ducted-36000",
      outdoorUnitId: "breeze33-bz33-hyp36out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-36000-cfg-6",
      slug: "breeze33-bz33-series-central-ducted-36000-cfg-6",
      modelId: "breeze33-bz33-series-central-ducted-36000",
      outdoorUnitId: "breeze33-bz33-inv36out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-36000-cfg-7",
      slug: "breeze33-bz33-series-central-ducted-36000-cfg-7",
      modelId: "breeze33-bz33-series-central-ducted-36000",
      outdoorUnitId: "breeze33-bz33-inv36out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-36000-cfg-8",
      slug: "breeze33-bz33-series-central-ducted-36000-cfg-8",
      modelId: "breeze33-bz33-series-central-ducted-36000",
      outdoorUnitId: "breeze33-bz33-inv36out2-454-g3-j",
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
      id: "breeze33-standard-wall-single-48000-cfg-1",
      slug: "breeze33-standard-wall-single-48000-cfg-1",
      modelId: "breeze33-standard-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-inv48out2-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-standard-wall-single-48000-cfg-2",
      slug: "breeze33-standard-wall-single-48000-cfg-2",
      modelId: "breeze33-standard-wall-single-48000",
      outdoorUnitId: "breeze33-bz33-inv60out2-j",
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
      id: "breeze33-bz33-series-central-ducted-30000-cfg-1",
      slug: "breeze33-bz33-series-central-ducted-30000-cfg-1",
      modelId: "breeze33-bz33-series-central-ducted-30000",
      outdoorUnitId: "breeze33-bz33-inv30out2-j",
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
      id: "breeze33-bz33-series-central-ducted-30000-cfg-2",
      slug: "breeze33-bz33-series-central-ducted-30000-cfg-2",
      modelId: "breeze33-bz33-series-central-ducted-30000",
      outdoorUnitId: "breeze33-bz33-inv30out2-j",
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
      id: "breeze33-bz33-series-central-ducted-30000-cfg-3",
      slug: "breeze33-bz33-series-central-ducted-30000-cfg-3",
      modelId: "breeze33-bz33-series-central-ducted-30000",
      outdoorUnitId: "breeze33-bz33-inv30out2-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-30000-cfg-4",
      slug: "breeze33-bz33-series-central-ducted-30000-cfg-4",
      modelId: "breeze33-bz33-series-central-ducted-30000",
      outdoorUnitId: "breeze33-bz33-inv30out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-30000-cfg-5",
      slug: "breeze33-bz33-series-central-ducted-30000-cfg-5",
      modelId: "breeze33-bz33-series-central-ducted-30000",
      outdoorUnitId: "breeze33-bz33-inv30out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-30000-cfg-6",
      slug: "breeze33-bz33-series-central-ducted-30000-cfg-6",
      modelId: "breeze33-bz33-series-central-ducted-30000",
      outdoorUnitId: "breeze33-bz33-inv30out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-30000-cfg-7",
      slug: "breeze33-bz33-series-central-ducted-30000-cfg-7",
      modelId: "breeze33-bz33-series-central-ducted-30000",
      outdoorUnitId: "breeze33-bz33-inv30out2-454-g3-j",
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
      id: "breeze33-standard-wall-single-12000-cfg-1",
      slug: "breeze33-standard-wall-single-12000-cfg-1",
      modelId: "breeze33-standard-wall-single-12000",
      outdoorUnitId: "breeze33-bz33-hp12out1-454-g3-c",
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
      id: "breeze33-bz33-series-central-ducted-48000-cfg-1",
      slug: "breeze33-bz33-series-central-ducted-48000-cfg-1",
      modelId: "breeze33-bz33-series-central-ducted-48000",
      outdoorUnitId: "breeze33-bz33-inv48out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-48000-cfg-2",
      slug: "breeze33-bz33-series-central-ducted-48000-cfg-2",
      modelId: "breeze33-bz33-series-central-ducted-48000",
      outdoorUnitId: "breeze33-bz33-inv60out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-48000-cfg-3",
      slug: "breeze33-bz33-series-central-ducted-48000-cfg-3",
      modelId: "breeze33-bz33-series-central-ducted-48000",
      outdoorUnitId: "breeze33-bz33-hyp48out2-454-g3-p",
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
      id: "breeze33-bz33-series-central-ducted-48000-cfg-4",
      slug: "breeze33-bz33-series-central-ducted-48000-cfg-4",
      modelId: "breeze33-bz33-series-central-ducted-48000",
      outdoorUnitId: "breeze33-bz33-hyp55out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-48000-cfg-5",
      slug: "breeze33-bz33-series-central-ducted-48000-cfg-5",
      modelId: "breeze33-bz33-series-central-ducted-48000",
      outdoorUnitId: "breeze33-bz33-inv48out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-48000-cfg-6",
      slug: "breeze33-bz33-series-central-ducted-48000-cfg-6",
      modelId: "breeze33-bz33-series-central-ducted-48000",
      outdoorUnitId: "breeze33-bz33-inv60out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-48000-cfg-7",
      slug: "breeze33-bz33-series-central-ducted-48000-cfg-7",
      modelId: "breeze33-bz33-series-central-ducted-48000",
      outdoorUnitId: "breeze33-bz33-inv48out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-48000-cfg-8",
      slug: "breeze33-bz33-series-central-ducted-48000-cfg-8",
      modelId: "breeze33-bz33-series-central-ducted-48000",
      outdoorUnitId: "breeze33-bz33-inv60out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-48000-cfg-9",
      slug: "breeze33-bz33-series-central-ducted-48000-cfg-9",
      modelId: "breeze33-bz33-series-central-ducted-48000",
      outdoorUnitId: "breeze33-bz33-inv60out2-454-g3-j",
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
      id: "breeze33-bz33-series-wall-single-60000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-60000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-60000",
      outdoorUnitId: "breeze33-bz33-hyp55out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-20000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-20000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-20000",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-42000-cfg-1",
      slug: "breeze33-bz33-series-wall-single-42000-cfg-1",
      modelId: "breeze33-bz33-series-wall-single-42000",
      outdoorUnitId: "breeze33-bz33-hp486z2-454-g3-p",
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
      id: "breeze33-bz33-series-central-ducted-42000-cfg-1",
      slug: "breeze33-bz33-series-central-ducted-42000-cfg-1",
      modelId: "breeze33-bz33-series-central-ducted-42000",
      outdoorUnitId: "breeze33-bz33-inv48out2-454-g3-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-4",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-5",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-6",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-7",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-8",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-9",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-10",
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
      configurationId: "breeze33-bz33-series-wall-single-9000-cfg-11",
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
      configurationId: "breeze33-standard-wall-single-18000-cfg-1",
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
      configurationId: "breeze33-standard-wall-single-18000-cfg-2",
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
      configurationId: "breeze33-standard-wall-single-36000-cfg-1",
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
      configurationId: "breeze33-standard-wall-single-36000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-6000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-6000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-6000-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-4",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-5",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-6",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-7",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-8",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-9",
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
      configurationId: "breeze33-bz33-series-wall-single-12000-cfg-10",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-4",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-5",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-6",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-7",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-8",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-9",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-10",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-11",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-12",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-13",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-14",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-15",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-16",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-17",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-18",
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
      configurationId: "breeze33-bz33-series-wall-single-18000-cfg-19",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-4",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-5",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-6",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-7",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-8",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-9",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-10",
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
      configurationId: "breeze33-bz33-series-wall-single-24000-cfg-11",
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
      configurationId: "breeze33-bz33-series-wall-single-15000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-15000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-15000-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-4",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-5",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-6",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-7",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-9",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-10",
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
      configurationId: "breeze33-bz33-series-wall-single-30000-cfg-11",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-5",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-6",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-7",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-8",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-9",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-10",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-11",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-12",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-13",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-14",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-15",
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
      configurationId: "breeze33-bz33-series-wall-single-36000-cfg-16",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-4",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-5",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-6",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-8",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-10",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-11",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-12",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-13",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-14",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-15",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-16",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-17",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-18",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-19",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-20",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-21",
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
      configurationId: "breeze33-bz33-series-wall-single-48000-cfg-22",
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
      configurationId: "breeze33-bz33-series-central-ducted-18000-cfg-1",
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
      configurationId: "breeze33-bz33-series-central-ducted-18000-cfg-2",
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
      configurationId: "breeze33-bz33-series-central-ducted-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-18000-cfg-4",
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
      configurationId: "breeze33-bz33-series-central-ducted-18000-cfg-5",
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
      configurationId: "breeze33-bz33-series-central-ducted-18000-cfg-6",
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
      configurationId: "breeze33-bz33-series-central-ducted-18000-cfg-7",
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
      configurationId: "breeze33-bz33-series-central-ducted-18000-cfg-8",
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
      configurationId: "breeze33-bz33-series-central-ducted-24000-cfg-1",
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
      configurationId: "breeze33-bz33-series-central-ducted-24000-cfg-2",
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
      configurationId: "breeze33-bz33-series-central-ducted-24000-cfg-3",
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
      configurationId: "breeze33-bz33-series-central-ducted-24000-cfg-4",
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
      configurationId: "breeze33-bz33-series-central-ducted-24000-cfg-5",
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
      configurationId: "breeze33-bz33-series-central-ducted-24000-cfg-6",
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
      configurationId: "breeze33-bz33-series-central-ducted-24000-cfg-7",
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
      configurationId: "breeze33-bz33-series-central-ducted-24000-cfg-8",
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
      configurationId: "breeze33-bz33-series-central-ducted-24000-cfg-9",
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
      configurationId: "breeze33-hs-series-wall-single-9000-cfg-1",
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
      configurationId: "breeze33-hs-series-wall-single-9000-cfg-2",
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
      configurationId: "breeze33-hs-series-wall-single-12000-cfg-1",
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
      configurationId: "breeze33-hs-series-wall-single-12000-cfg-2",
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
      configurationId: "breeze33-hs-series-wall-single-12000-cfg-3",
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
      configurationId: "breeze33-hs-series-wall-single-12000-cfg-4",
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
      configurationId: "breeze33-hs-series-wall-single-15000-cfg-1",
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
      configurationId: "breeze33-hs-series-wall-single-15000-cfg-2",
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
      configurationId: "breeze33-hs-series-wall-single-18000-cfg-1",
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
      configurationId: "breeze33-hs-series-wall-single-18000-cfg-2",
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
      configurationId: "breeze33-hs-series-wall-single-18000-cfg-3",
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
      configurationId: "breeze33-hs-series-wall-single-24000-cfg-1",
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
      configurationId: "breeze33-hs-series-wall-single-24000-cfg-2",
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
      configurationId: "breeze33-hs-series-wall-single-24000-cfg-3",
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
      configurationId: "breeze33-hs-series-central-ducted-24000-cfg-1",
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
      configurationId: "breeze33-hs-series-central-ducted-18000-cfg-1",
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
      configurationId: "breeze33-bz33-series-central-ducted-36000-cfg-1",
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
      configurationId: "breeze33-bz33-series-central-ducted-36000-cfg-2",
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
      configurationId: "breeze33-bz33-series-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-36000-cfg-4",
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
      configurationId: "breeze33-bz33-series-central-ducted-36000-cfg-5",
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
      configurationId: "breeze33-bz33-series-central-ducted-36000-cfg-6",
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
      configurationId: "breeze33-bz33-series-central-ducted-36000-cfg-7",
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
      configurationId: "breeze33-bz33-series-central-ducted-36000-cfg-8",
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
      configurationId: "breeze33-standard-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-standard-wall-single-48000-cfg-2",
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
      configurationId: "breeze33-bz33-series-central-ducted-30000-cfg-1",
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
      configurationId: "breeze33-bz33-series-central-ducted-30000-cfg-2",
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
      configurationId: "breeze33-bz33-series-central-ducted-30000-cfg-3",
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
      configurationId: "breeze33-bz33-series-central-ducted-30000-cfg-4",
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
      configurationId: "breeze33-bz33-series-central-ducted-30000-cfg-5",
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
      configurationId: "breeze33-bz33-series-central-ducted-30000-cfg-6",
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
      configurationId: "breeze33-bz33-series-central-ducted-30000-cfg-7",
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
      configurationId: "breeze33-standard-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-48000-cfg-1",
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
      configurationId: "breeze33-bz33-series-central-ducted-48000-cfg-2",
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
      configurationId: "breeze33-bz33-series-central-ducted-48000-cfg-3",
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
      configurationId: "breeze33-bz33-series-central-ducted-48000-cfg-4",
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
      configurationId: "breeze33-bz33-series-central-ducted-48000-cfg-5",
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
      configurationId: "breeze33-bz33-series-central-ducted-48000-cfg-6",
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
      configurationId: "breeze33-bz33-series-central-ducted-48000-cfg-7",
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
      configurationId: "breeze33-bz33-series-central-ducted-48000-cfg-8",
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
      configurationId: "breeze33-bz33-series-central-ducted-48000-cfg-9",
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
      configurationId: "breeze33-bz33-series-wall-single-60000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-20000-cfg-1",
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
      configurationId: "breeze33-bz33-series-wall-single-42000-cfg-1",
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
      configurationId: "breeze33-bz33-series-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.85,
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
