import type { BrandDataset } from "../../types";

export const cooperhunterDataset: BrandDataset = {
  brand: {
    id: "cooper-hunter",
    slug: "cooper-hunter",
    name: "COOPER&HUNTER",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "cooper-hunter-ch-series",
      slug: "cooper-hunter-ch-series",
      name: "CH series",
      brandId: "cooper-hunter",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard",
      slug: "cooper-hunter-standard",
      name: "Standard",
      brandId: "cooper-hunter",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "cooper-hunter-ch-series-wall-single-48000",
      slug: "cooper-hunter-ch-series-wall-single-48000",
      name: "CH series 48 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 48k",
      normalizedModelNumber: "ch-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 16.8,
      seer2Max: 23.4,
      hspf2Min: 8.7,
      hspf2Max: 10.7,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-36000",
      slug: "cooper-hunter-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "cooper-hunter-standard",
      brandId: "cooper-hunter",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 42000,
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
      id: "cooper-hunter-ch-series-central-ducted-18000",
      slug: "cooper-hunter-ch-series-central-ducted-18000",
      name: "CH series 18 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 18k",
      normalizedModelNumber: "ch-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 15400,
      seer2Min: 17.6,
      seer2Max: 19,
      hspf2Min: 9.3,
      hspf2Max: 10.1,
      cop5FMin: 2,
      cop5FMax: 2.31,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-24000",
      slug: "cooper-hunter-ch-series-central-ducted-24000",
      name: "CH series 24 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 24k",
      normalizedModelNumber: "ch-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 19000,
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
      id: "cooper-hunter-standard-wall-single-48000",
      slug: "cooper-hunter-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "cooper-hunter-standard",
      brandId: "cooper-hunter",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 32000,
      heatingCapacity5FMaxBtu: 54000,
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
      id: "cooper-hunter-standard-wall-single-60000",
      slug: "cooper-hunter-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "cooper-hunter-standard",
      brandId: "cooper-hunter",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 34400,
      heatingCapacity5FMaxBtu: 63000,
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
      id: "cooper-hunter-ch-series-wall-single-36000",
      slug: "cooper-hunter-ch-series-wall-single-36000",
      name: "CH series 36 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 36k",
      normalizedModelNumber: "ch-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 16.5,
      seer2Max: 24,
      hspf2Min: 9.2,
      hspf2Max: 11,
      cop5FMin: 1.75,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-6000",
      slug: "cooper-hunter-ch-series-wall-single-6000",
      name: "CH series 6 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 6k",
      normalizedModelNumber: "ch-series-6000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6500,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 8500,
      seer2Min: 21.5,
      seer2Max: 26.5,
      hspf2Min: 9,
      hspf2Max: 14.6,
      cop5FMin: 1.84,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000",
      slug: "cooper-hunter-ch-series-wall-single-9000",
      name: "CH series 9 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 9k",
      normalizedModelNumber: "ch-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 5900,
      heatingCapacity5FMaxBtu: 10100,
      seer2Min: 19.2,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 13,
      cop5FMin: 1.8,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000",
      slug: "cooper-hunter-ch-series-wall-single-12000",
      name: "CH series 12 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 12k",
      normalizedModelNumber: "ch-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: 19,
      seer2Max: 25.5,
      hspf2Min: 9.8,
      hspf2Max: 11.5,
      cop5FMin: 1.8,
      cop5FMax: 2.41,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000",
      slug: "cooper-hunter-ch-series-wall-single-18000",
      name: "CH series 18 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 18k",
      normalizedModelNumber: "ch-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 11100,
      heatingCapacity5FMaxBtu: 16600,
      seer2Min: 18,
      seer2Max: 25.1,
      hspf2Min: 8.7,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-24000",
      slug: "cooper-hunter-ch-series-wall-single-24000",
      name: "CH series 24 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 24k",
      normalizedModelNumber: "ch-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 21600,
      seer2Min: 18.7,
      seer2Max: 25,
      hspf2Min: 8.5,
      hspf2Max: 13.3,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-12000",
      slug: "cooper-hunter-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "cooper-hunter-standard",
      brandId: "cooper-hunter",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 8700,
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
      id: "cooper-hunter-standard-wall-single-24000",
      slug: "cooper-hunter-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "cooper-hunter-standard",
      brandId: "cooper-hunter",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 16500,
      heatingCapacity5FMaxBtu: 20000,
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
      id: "cooper-hunter-ch-series-wall-single-15000",
      slug: "cooper-hunter-ch-series-wall-single-15000",
      name: "CH series 15 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 15k",
      normalizedModelNumber: "ch-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 20,
      seer2Max: 22.4,
      hspf2Min: 8.9,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 2.32,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-30000",
      slug: "cooper-hunter-ch-series-wall-single-30000",
      name: "CH series 30 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 30k",
      normalizedModelNumber: "ch-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 20400,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19.5,
      seer2Max: 24.6,
      hspf2Min: 9.2,
      hspf2Max: 10.6,
      cop5FMin: 1.8,
      cop5FMax: 2.03,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-60000",
      slug: "cooper-hunter-ch-series-wall-single-60000",
      name: "CH series 60 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 60k",
      normalizedModelNumber: "ch-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 34400,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 15.8,
      seer2Max: 22,
      hspf2Min: 9.3,
      hspf2Max: 10.2,
      cop5FMin: 1.9,
      cop5FMax: 1.97,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-60000",
      slug: "cooper-hunter-ch-series-central-ducted-60000",
      name: "CH series 60 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series 60k",
      normalizedModelNumber: "ch-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 41000,
      heatingCapacity5FMaxBtu: 41000,
      seer2Min: 15.5,
      seer2Max: 15.5,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 1.96,
      cop5FMax: 1.96,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-30000",
      slug: "cooper-hunter-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "cooper-hunter-standard",
      brandId: "cooper-hunter",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 17500,
      heatingCapacity5FMaxBtu: 18100,
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
      id: "cooper-hunter-ch-series-central-ducted-30000",
      slug: "cooper-hunter-ch-series-central-ducted-30000",
      name: "CH Series 30 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH Series 30k",
      normalizedModelNumber: "ch-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 19400,
      heatingCapacity5FMaxBtu: 24000,
      seer2Min: 17,
      seer2Max: 17.2,
      hspf2Min: 8.7,
      hspf2Max: 10.8,
      cop5FMin: 1.97,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-36000",
      slug: "cooper-hunter-ch-series-central-ducted-36000",
      name: "CH Series 36 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH Series 36k",
      normalizedModelNumber: "ch-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 24600,
      heatingCapacity5FMaxBtu: 28000,
      seer2Min: 17.2,
      seer2Max: 17.7,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 2.06,
      cop5FMax: 2.06,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-48000",
      slug: "cooper-hunter-ch-series-central-ducted-48000",
      name: "CH Series 48 000 BTU",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH Series 48k",
      normalizedModelNumber: "ch-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 34000,
      heatingCapacity5FMaxBtu: 41000,
      seer2Min: 15.2,
      seer2Max: 17.7,
      hspf2Min: 9.2,
      hspf2Max: 10.2,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-9000",
      slug: "cooper-hunter-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "cooper-hunter-standard",
      brandId: "cooper-hunter",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 6500,
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
      id: "cooper-hunter-standard-wall-single-18000",
      slug: "cooper-hunter-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "cooper-hunter-standard",
      brandId: "cooper-hunter",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 12300,
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
    }
  ],
  outdoorUnits: [
    {
      id: "cooper-hunter-ch-n48lcu-230vo",
      modelNumber: "CH-N48LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-nhpr48lcu-230vo",
      modelNumber: "CH-NHPR48LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-48mes-230vo",
      modelNumber: "CH-48MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr48m-230vo",
      modelNumber: "CH-HPR48M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r48lcu-230vo",
      modelNumber: "CH-R48LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-n36lcu-230vo",
      modelNumber: "CH-N36LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-36urbm",
      modelNumber: "CHV6-36URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-el36-230vo",
      modelNumber: "CH-EL36-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rel36-230vo",
      modelNumber: "CH-REL36-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs36urbm",
      modelNumber: "CHV6-RS36URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs36urbmhh",
      modelNumber: "CHV6-RS36URBMHH",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es18-230vo",
      modelNumber: "CH-ES18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr18-230vo",
      modelNumber: "CH-HPR18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq18-230vo",
      modelNumber: "CH-PQ18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp18-230vo",
      modelNumber: "CH-RHP18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res18-230vo",
      modelNumber: "CH-RES18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr24-230vo",
      modelNumber: "CH-HPR24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es24-230vo",
      modelNumber: "CH-ES24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq24-230vo",
      modelNumber: "CH-PQ24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp24-230vo",
      modelNumber: "CH-RHP24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res24-230vo",
      modelNumber: "CH-RES24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-48urbm",
      modelNumber: "CHV6-48URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-n60lcu-230vo",
      modelNumber: "CH-N60LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs48urbm",
      modelNumber: "CHV6-RS48URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs48urbmhh",
      modelNumber: "CHV6-RS48URBMHH",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-60urbm",
      modelNumber: "CHV6-60URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-55mes-230vo",
      modelNumber: "CH-55MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r60lcu-230vo",
      modelNumber: "CH-R60LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs60urbmhh",
      modelNumber: "CHV6-RS60URBMHH",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-nhpr36lcu-230vo",
      modelNumber: "CH-NHPR36LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-36mes-230vo",
      modelNumber: "CH-36MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr36m-230vo",
      modelNumber: "CH-HPR36M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r36mes-230vo",
      modelNumber: "CH-R36MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rvhp36m-230vo",
      modelNumber: "CH-RVHP36M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r36lcu-230vo",
      modelNumber: "CH-R36LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr06f9-230vo",
      modelNumber: "CH-HPR06F9-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es06-115vo",
      modelNumber: "CH-ES06-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-06olvwm-115vo",
      modelNumber: "CH-06OLVWM-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny06mia-115vo",
      modelNumber: "CH-NY06MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es09-230vo",
      modelNumber: "CH-ES09-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp06f9-230vo",
      modelNumber: "CH-RHP06F9-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr09-230vo",
      modelNumber: "CH-HPR09-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny09mia-115vo",
      modelNumber: "CH-NY09MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny09mia-230vo",
      modelNumber: "CH-NY09MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es09-115vo",
      modelNumber: "CH-ES09-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res06-115vo",
      modelNumber: "CH-RES06-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res09-115vo",
      modelNumber: "CH-RES09-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res09-230vo",
      modelNumber: "CH-RES09-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp09-230vo",
      modelNumber: "CH-RHP09-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls06mia-115vo",
      modelNumber: "CH-RLS06MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls09mia-115vo",
      modelNumber: "CH-RLS09MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls09mia-230vo",
      modelNumber: "CH-RLS09MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr12-230vo",
      modelNumber: "CH-HPR12-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es12-230vo",
      modelNumber: "CH-ES12-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es12-115vo",
      modelNumber: "CH-ES12-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res12-115vo",
      modelNumber: "CH-RES12-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res12-230vo",
      modelNumber: "CH-RES12-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp12-230vo",
      modelNumber: "CH-RHP12-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny18mia-230vo",
      modelNumber: "CH-NY18MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-18mes-230vo",
      modelNumber: "CH-18MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr19m-230vo",
      modelNumber: "CH-HPR19M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r18mes-230vo",
      modelNumber: "CH-R18MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp15-230vo",
      modelNumber: "CH-RHP15-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r28mes-230vo",
      modelNumber: "CH-R28MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls24mia-230vo",
      modelNumber: "CH-RLS24MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny12mia-115vo",
      modelNumber: "CH-NY12MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny12mia-230vo",
      modelNumber: "CH-NY12MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls12mia-115vo",
      modelNumber: "CH-RLS12MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls12mia-230vo",
      modelNumber: "CH-RLS12MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny24mia-230vo",
      modelNumber: "CH-NY24MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs24urbm",
      modelNumber: "CHV6-RS24URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-28mes-230vo",
      modelNumber: "CH-28MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr28m-230vo",
      modelNumber: "CH-HPR28M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr35-230vo",
      modelNumber: "CH-HPR35-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp33-230vo",
      modelNumber: "CH-RHP33-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rel30-230vo",
      modelNumber: "CH-REL30-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr55m-230vo",
      modelNumber: "CH-HPR55M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-nhpr60lcu-230vo",
      modelNumber: "CH-NHPR60LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-28urbm",
      modelNumber: "CHV6-28URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq33-230vo",
      modelNumber: "CH-PQ33-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq36-230vo",
      modelNumber: "CH-PQ36-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp36lcu-230vo",
      modelNumber: "CH-RHP36LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq48-230vo",
      modelNumber: "CH-PQ48-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq55-230vo",
      modelNumber: "CH-PQ55-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp48lcu-230vo",
      modelNumber: "CH-RHP48LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp60lcu-230vo",
      modelNumber: "CH-RHP60LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r06mia-115vo",
      modelNumber: "CH-R06MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r09mia-115vo",
      modelNumber: "CH-R09MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls18mia-230vo",
      modelNumber: "CH-RLS18MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-8",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-8",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-9",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-9",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-48mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-10",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-10",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-48mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-11",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-11",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-hpr48m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-12",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-12",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-hpr48m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-13",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-13",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-hpr48m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-14",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-14",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-15",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-15",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-16",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-16",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-17",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-17",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-18",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-18",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-19",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-19",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-20",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-20",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-21",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-21",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-22",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-22",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-r48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-23",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-23",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-r48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-48000-cfg-24",
      slug: "cooper-hunter-ch-series-wall-single-48000-cfg-24",
      modelId: "cooper-hunter-ch-series-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-r48lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-1",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-1",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-2",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-2",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-chv6-36urbm",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-3",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-3",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-chv6-36urbm",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-4",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-4",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-el36-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-5",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-5",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-6",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-6",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-7",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-7",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-8",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-8",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-9",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-9",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-10",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-10",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-11",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-11",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-12",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-12",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-rel36-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-13",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-13",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbm",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-14",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-14",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbm",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-15",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-15",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbm",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-16",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-16",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbmhh",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-17",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-17",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbmhh",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-18",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-18",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbmhh",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-19",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-19",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-rel36-230vo",
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
      id: "cooper-hunter-standard-wall-single-36000-cfg-20",
      slug: "cooper-hunter-standard-wall-single-36000-cfg-20",
      modelId: "cooper-hunter-standard-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-rel36-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-18000-cfg-1",
      slug: "cooper-hunter-ch-series-central-ducted-18000-cfg-1",
      modelId: "cooper-hunter-ch-series-central-ducted-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-18000-cfg-2",
      slug: "cooper-hunter-ch-series-central-ducted-18000-cfg-2",
      modelId: "cooper-hunter-ch-series-central-ducted-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-18000-cfg-3",
      slug: "cooper-hunter-ch-series-central-ducted-18000-cfg-3",
      modelId: "cooper-hunter-ch-series-central-ducted-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-18000-cfg-4",
      slug: "cooper-hunter-ch-series-central-ducted-18000-cfg-4",
      modelId: "cooper-hunter-ch-series-central-ducted-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-18000-cfg-5",
      slug: "cooper-hunter-ch-series-central-ducted-18000-cfg-5",
      modelId: "cooper-hunter-ch-series-central-ducted-18000",
      outdoorUnitId: "cooper-hunter-ch-pq18-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-18000-cfg-6",
      slug: "cooper-hunter-ch-series-central-ducted-18000-cfg-6",
      modelId: "cooper-hunter-ch-series-central-ducted-18000",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-18000-cfg-7",
      slug: "cooper-hunter-ch-series-central-ducted-18000-cfg-7",
      modelId: "cooper-hunter-ch-series-central-ducted-18000",
      outdoorUnitId: "cooper-hunter-ch-res18-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-24000-cfg-1",
      slug: "cooper-hunter-ch-series-central-ducted-24000-cfg-1",
      modelId: "cooper-hunter-ch-series-central-ducted-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-24000-cfg-2",
      slug: "cooper-hunter-ch-series-central-ducted-24000-cfg-2",
      modelId: "cooper-hunter-ch-series-central-ducted-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-24000-cfg-3",
      slug: "cooper-hunter-ch-series-central-ducted-24000-cfg-3",
      modelId: "cooper-hunter-ch-series-central-ducted-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-24000-cfg-4",
      slug: "cooper-hunter-ch-series-central-ducted-24000-cfg-4",
      modelId: "cooper-hunter-ch-series-central-ducted-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-24000-cfg-5",
      slug: "cooper-hunter-ch-series-central-ducted-24000-cfg-5",
      modelId: "cooper-hunter-ch-series-central-ducted-24000",
      outdoorUnitId: "cooper-hunter-ch-pq24-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-24000-cfg-6",
      slug: "cooper-hunter-ch-series-central-ducted-24000-cfg-6",
      modelId: "cooper-hunter-ch-series-central-ducted-24000",
      outdoorUnitId: "cooper-hunter-ch-rhp24-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-24000-cfg-7",
      slug: "cooper-hunter-ch-series-central-ducted-24000-cfg-7",
      modelId: "cooper-hunter-ch-series-central-ducted-24000",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-1",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-1",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-chv6-48urbm",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-2",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-2",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-chv6-48urbm",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-3",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-3",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-4",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-4",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-5",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-5",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbm",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-6",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-6",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbm",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-7",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-7",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbm",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-8",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-8",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbmhh",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-9",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-9",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbmhh",
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
      id: "cooper-hunter-standard-wall-single-48000-cfg-10",
      slug: "cooper-hunter-standard-wall-single-48000-cfg-10",
      modelId: "cooper-hunter-standard-wall-single-48000",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbmhh",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-1",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-1",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-chv6-60urbm",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57500,
      coolingCapacityMaxBtu: 57500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-60000-cfg-2",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-2",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-3",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-3",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-4",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-4",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-55mes-230vo",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-5",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-5",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-55mes-230vo",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-6",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-6",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-7",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-7",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-8",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-8",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-r60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-9",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-9",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-chv6-rs60urbmhh",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-10",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-10",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-chv6-rs60urbmhh",
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
      id: "cooper-hunter-standard-wall-single-60000-cfg-11",
      slug: "cooper-hunter-standard-wall-single-60000-cfg-11",
      modelId: "cooper-hunter-standard-wall-single-60000",
      outdoorUnitId: "cooper-hunter-chv6-rs60urbmhh",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-36mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-hpr36m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-hpr36m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-8",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-8",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-9",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-9",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-10",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-10",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-11",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-11",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-12",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-12",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-r36mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-13",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-13",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-r36mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-14",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-14",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-r36mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-15",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-15",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-rvhp36m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-16",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-16",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-rvhp36m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-36000-cfg-17",
      slug: "cooper-hunter-ch-series-wall-single-36000-cfg-17",
      modelId: "cooper-hunter-ch-series-wall-single-36000",
      outdoorUnitId: "cooper-hunter-ch-r36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-es06-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-06olvwm-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-ny06mia-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-8",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-8",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-9",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-9",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-10",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-10",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-ny06mia-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-11",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-11",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-rhp06f9-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-6000-cfg-12",
      slug: "cooper-hunter-ch-series-wall-single-6000-cfg-12",
      modelId: "cooper-hunter-ch-series-wall-single-6000",
      outdoorUnitId: "cooper-hunter-ch-rhp06f9-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-8",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-8",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-9",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-9",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-10",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-10",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-11",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-11",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-12",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-12",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-13",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-13",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-14",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-14",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-15",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-15",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-16",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-16",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-17",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-17",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-18",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-18",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-19",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-19",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-20",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-20",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-21",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-21",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-22",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-22",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-23",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-23",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-24",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-24",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-25",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-25",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-26",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-26",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-27",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-27",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-res06-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-28",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-28",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-res09-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-29",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-29",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-res09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-30",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-30",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-rhp09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-31",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-31",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-res09-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-32",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-32",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-res09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-33",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-33",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-rhp09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-34",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-34",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-rhp09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-35",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-35",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-rhp09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-36",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-36",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-rls06mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-37",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-37",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-rls09mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-9000-cfg-38",
      slug: "cooper-hunter-ch-series-wall-single-9000-cfg-38",
      modelId: "cooper-hunter-ch-series-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-rls09mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-8",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-8",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-9",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-9",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-10",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-10",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-11",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-11",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-12",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-12",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-13",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-13",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-14",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-14",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-15",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-15",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-16",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-16",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-17",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-17",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-18",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-18",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-19",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-19",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-20",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-20",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-21",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-21",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-22",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-22",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-23",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-23",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-24",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-24",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-25",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-25",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-res12-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.2,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-26",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-26",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-res12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-27",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-27",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-28",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-28",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-res12-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.2,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-29",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-29",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-res12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-30",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-30",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-31",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-31",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-32",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-32",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-12000-cfg-33",
      slug: "cooper-hunter-ch-series-wall-single-12000-cfg-33",
      modelId: "cooper-hunter-ch-series-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-ny18mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-ny18mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-8",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-8",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-9",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-9",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-10",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-10",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-11",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-11",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-12",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-12",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-13",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-13",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr19m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-14",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-14",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr19m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-15",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-15",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr19m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-16",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-16",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-17",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-17",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-18",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-18",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-19",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-19",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-20",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-20",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-21",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-21",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-22",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-22",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-23",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-23",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-24",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-24",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-25",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-25",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-26",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-26",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-27",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-27",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-ny18mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-28",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-28",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-res18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-29",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-29",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-30",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-30",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-res18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-31",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-31",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-32",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-32",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-33",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-33",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-34",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-34",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-r18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-35",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-35",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-r18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-36",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-36",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-r18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-37",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-37",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-rhp15-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-18000-cfg-38",
      slug: "cooper-hunter-ch-series-wall-single-18000-cfg-38",
      modelId: "cooper-hunter-ch-series-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-rhp15-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-8",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-8",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-9",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-9",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-10",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-10",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-11",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-11",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-12",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-12",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-13",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-13",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-14",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-14",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-15",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-15",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-16",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-16",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-17",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-17",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-18",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-18",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-19",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-19",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-20",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-20",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-rhp24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-21",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-21",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-22",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-22",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-rhp24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-23",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-23",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-24",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-24",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-25",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-25",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-r28mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-26",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-26",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-r28mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-24000-cfg-27",
      slug: "cooper-hunter-ch-series-wall-single-24000-cfg-27",
      modelId: "cooper-hunter-ch-series-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-rls24mia-230vo",
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
      id: "cooper-hunter-standard-wall-single-12000-cfg-1",
      slug: "cooper-hunter-standard-wall-single-12000-cfg-1",
      modelId: "cooper-hunter-standard-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-ny12mia-115vo",
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
      id: "cooper-hunter-standard-wall-single-12000-cfg-2",
      slug: "cooper-hunter-standard-wall-single-12000-cfg-2",
      modelId: "cooper-hunter-standard-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-ny12mia-230vo",
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
      id: "cooper-hunter-standard-wall-single-12000-cfg-3",
      slug: "cooper-hunter-standard-wall-single-12000-cfg-3",
      modelId: "cooper-hunter-standard-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-rls12mia-115vo",
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
      id: "cooper-hunter-standard-wall-single-12000-cfg-4",
      slug: "cooper-hunter-standard-wall-single-12000-cfg-4",
      modelId: "cooper-hunter-standard-wall-single-12000",
      outdoorUnitId: "cooper-hunter-ch-rls12mia-230vo",
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
      id: "cooper-hunter-standard-wall-single-24000-cfg-1",
      slug: "cooper-hunter-standard-wall-single-24000-cfg-1",
      modelId: "cooper-hunter-standard-wall-single-24000",
      outdoorUnitId: "cooper-hunter-ch-ny24mia-230vo",
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
      id: "cooper-hunter-standard-wall-single-24000-cfg-2",
      slug: "cooper-hunter-standard-wall-single-24000-cfg-2",
      modelId: "cooper-hunter-standard-wall-single-24000",
      outdoorUnitId: "cooper-hunter-chv6-rs24urbm",
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
      id: "cooper-hunter-standard-wall-single-24000-cfg-3",
      slug: "cooper-hunter-standard-wall-single-24000-cfg-3",
      modelId: "cooper-hunter-standard-wall-single-24000",
      outdoorUnitId: "cooper-hunter-chv6-rs24urbm",
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
      id: "cooper-hunter-standard-wall-single-24000-cfg-4",
      slug: "cooper-hunter-standard-wall-single-24000-cfg-4",
      modelId: "cooper-hunter-standard-wall-single-24000",
      outdoorUnitId: "cooper-hunter-chv6-rs24urbm",
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
      id: "cooper-hunter-ch-series-wall-single-15000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-15000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-15000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-15000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-15000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-15000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-15000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-15000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-15000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 22.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-15000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-15000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-15000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-15000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-15000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-15000",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-15000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-15000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-15000",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-28mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-28mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-28mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-hpr28m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-hpr28m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-hpr28m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-hpr35-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-8",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-8",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-rhp33-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-9",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-9",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-rhp33-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-10",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-10",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-rhp33-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-11",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-11",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-rel30-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-30000-cfg-12",
      slug: "cooper-hunter-ch-series-wall-single-30000-cfg-12",
      modelId: "cooper-hunter-ch-series-wall-single-30000",
      outdoorUnitId: "cooper-hunter-ch-rel30-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-60000-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-60000-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-hpr55m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-60000-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-60000-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-hpr55m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-60000-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-60000-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-hpr55m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-60000-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-60000-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-60000-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-60000-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-60000-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-60000-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-60000-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-60000-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single-60000",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-60000-cfg-1",
      slug: "cooper-hunter-ch-series-central-ducted-60000-cfg-1",
      modelId: "cooper-hunter-ch-series-central-ducted-60000",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-60000-cfg-2",
      slug: "cooper-hunter-ch-series-central-ducted-60000-cfg-2",
      modelId: "cooper-hunter-ch-series-central-ducted-60000",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-30000-cfg-1",
      slug: "cooper-hunter-standard-wall-single-30000-cfg-1",
      modelId: "cooper-hunter-standard-wall-single-30000",
      outdoorUnitId: "cooper-hunter-chv6-28urbm",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27200,
      coolingCapacityMaxBtu: 27200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-30000-cfg-2",
      slug: "cooper-hunter-standard-wall-single-30000-cfg-2",
      modelId: "cooper-hunter-standard-wall-single-30000",
      outdoorUnitId: "cooper-hunter-chv6-28urbm",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27200,
      coolingCapacityMaxBtu: 27200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-30000-cfg-3",
      slug: "cooper-hunter-standard-wall-single-30000-cfg-3",
      modelId: "cooper-hunter-standard-wall-single-30000",
      outdoorUnitId: "cooper-hunter-chv6-28urbm",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27200,
      coolingCapacityMaxBtu: 27200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-30000-cfg-1",
      slug: "cooper-hunter-ch-series-central-ducted-30000-cfg-1",
      modelId: "cooper-hunter-ch-series-central-ducted-30000",
      outdoorUnitId: "cooper-hunter-ch-pq33-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-30000-cfg-2",
      slug: "cooper-hunter-ch-series-central-ducted-30000-cfg-2",
      modelId: "cooper-hunter-ch-series-central-ducted-30000",
      outdoorUnitId: "cooper-hunter-ch-rel30-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-36000-cfg-1",
      slug: "cooper-hunter-ch-series-central-ducted-36000-cfg-1",
      modelId: "cooper-hunter-ch-series-central-ducted-36000",
      outdoorUnitId: "cooper-hunter-ch-pq36-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-36000-cfg-2",
      slug: "cooper-hunter-ch-series-central-ducted-36000-cfg-2",
      modelId: "cooper-hunter-ch-series-central-ducted-36000",
      outdoorUnitId: "cooper-hunter-ch-rhp36lcu-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-48000-cfg-1",
      slug: "cooper-hunter-ch-series-central-ducted-48000-cfg-1",
      modelId: "cooper-hunter-ch-series-central-ducted-48000",
      outdoorUnitId: "cooper-hunter-ch-pq48-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-48000-cfg-2",
      slug: "cooper-hunter-ch-series-central-ducted-48000-cfg-2",
      modelId: "cooper-hunter-ch-series-central-ducted-48000",
      outdoorUnitId: "cooper-hunter-ch-pq55-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-48000-cfg-3",
      slug: "cooper-hunter-ch-series-central-ducted-48000-cfg-3",
      modelId: "cooper-hunter-ch-series-central-ducted-48000",
      outdoorUnitId: "cooper-hunter-ch-rhp48lcu-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-48000-cfg-4",
      slug: "cooper-hunter-ch-series-central-ducted-48000-cfg-4",
      modelId: "cooper-hunter-ch-series-central-ducted-48000",
      outdoorUnitId: "cooper-hunter-ch-rhp60lcu-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-48000-cfg-5",
      slug: "cooper-hunter-ch-series-central-ducted-48000-cfg-5",
      modelId: "cooper-hunter-ch-series-central-ducted-48000",
      outdoorUnitId: "cooper-hunter-ch-r48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-9000-cfg-1",
      slug: "cooper-hunter-standard-wall-single-9000-cfg-1",
      modelId: "cooper-hunter-standard-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-r06mia-115vo",
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
      id: "cooper-hunter-standard-wall-single-9000-cfg-2",
      slug: "cooper-hunter-standard-wall-single-9000-cfg-2",
      modelId: "cooper-hunter-standard-wall-single-9000",
      outdoorUnitId: "cooper-hunter-ch-r09mia-115vo",
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
      id: "cooper-hunter-standard-wall-single-18000-cfg-1",
      slug: "cooper-hunter-standard-wall-single-18000-cfg-1",
      modelId: "cooper-hunter-standard-wall-single-18000",
      outdoorUnitId: "cooper-hunter-ch-rls18mia-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-8",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-9",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-10",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-11",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-12",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-13",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-14",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-15",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-16",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-17",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-18",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-19",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-20",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-21",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-22",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-23",
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
      configurationId: "cooper-hunter-ch-series-wall-single-48000-cfg-24",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-1",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-4",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-5",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-6",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-7",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-8",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-9",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-10",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-11",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-12",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-19",
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
      configurationId: "cooper-hunter-standard-wall-single-36000-cfg-20",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-18000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-18000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-18000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-18000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-18000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-18000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-18000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-24000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-24000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-24000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-24000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-24000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-24000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-24000-cfg-7",
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
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-1",
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
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-2",
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
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-3",
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
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-4",
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
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-5",
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
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-7",
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
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-1",
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
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-2",
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
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-3",
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
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-4",
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
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-5",
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
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-6",
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
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-7",
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
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-8",
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
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 63000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 63000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-60000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 63000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-8",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-9",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-10",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-11",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-12",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-13",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-14",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-15",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-16",
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
      configurationId: "cooper-hunter-ch-series-wall-single-36000-cfg-17",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-8",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-9",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-10",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-11",
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
      configurationId: "cooper-hunter-ch-series-wall-single-6000-cfg-12",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-8",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-9",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-10",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-11",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-13",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-15",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-16",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-17",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-18",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-19",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-20",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-21",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-22",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-23",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-24",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-25",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-26",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-29",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-30",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-32",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-33",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-34",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-35",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-36",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-37",
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
      configurationId: "cooper-hunter-ch-series-wall-single-9000-cfg-38",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-8",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-9",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-10",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-11",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-12",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-13",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-14",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-15",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-16",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-17",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-18",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-19",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-20",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-21",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-22",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-23",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-24",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-26",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-27",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-29",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-30",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-31",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-32",
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
      configurationId: "cooper-hunter-ch-series-wall-single-12000-cfg-33",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-8",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-9",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-10",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-11",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-12",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-13",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-14",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-15",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-16",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-17",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-18",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-19",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-20",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-21",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-22",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-23",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-24",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-25",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-26",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-28",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-29",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-30",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-31",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-32",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-33",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-34",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-35",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-36",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-37",
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
      configurationId: "cooper-hunter-ch-series-wall-single-18000-cfg-38",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-8",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-9",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-10",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-11",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-12",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-13",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-14",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-15",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-16",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-17",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-18",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-19",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-20",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-21",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-22",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-23",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-24",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-25",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-26",
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
      configurationId: "cooper-hunter-ch-series-wall-single-24000-cfg-27",
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
      configurationId: "cooper-hunter-standard-wall-single-12000-cfg-1",
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
      configurationId: "cooper-hunter-standard-wall-single-12000-cfg-2",
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
      configurationId: "cooper-hunter-standard-wall-single-12000-cfg-3",
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
      configurationId: "cooper-hunter-standard-wall-single-12000-cfg-4",
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
      configurationId: "cooper-hunter-standard-wall-single-24000-cfg-1",
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
      configurationId: "cooper-hunter-standard-wall-single-24000-cfg-2",
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
      configurationId: "cooper-hunter-standard-wall-single-24000-cfg-3",
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
      configurationId: "cooper-hunter-standard-wall-single-24000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-15000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-15000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-15000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-15000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-15000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-wall-single-15000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-8",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-9",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-10",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-11",
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
      configurationId: "cooper-hunter-ch-series-wall-single-30000-cfg-12",
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
      configurationId: "cooper-hunter-ch-series-wall-single-60000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-wall-single-60000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-wall-single-60000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-60000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-60000-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-wall-single-60000-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-60000-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-60000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-30000-cfg-2",
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
      configurationId: "cooper-hunter-standard-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-30000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-30000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-36000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-48000-cfg-1",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-48000-cfg-2",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-48000-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-48000-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-48000-cfg-5",
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
      configurationId: "cooper-hunter-standard-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: null,
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
