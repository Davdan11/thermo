import type { BrandDataset } from "../../types";

export const mainlineDataset: BrandDataset = {
  brand: {
    id: "mainline",
    slug: "mainline",
    name: "MAINLINE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: false,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "mainline-ml-series",
      slug: "mainline-ml-series",
      name: "ML Series",
      brandId: "mainline",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-standard",
      slug: "mainline-standard",
      name: "Standard",
      brandId: "mainline",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "mainline-ml-series-central-ducted-18000",
      slug: "mainline-ml-series-central-ducted-18000",
      name: "ML Series 18 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 18k",
      normalizedModelNumber: "ml-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11800,
      heatingCapacity5FMaxBtu: 15300,
      seer2Min: 16.1,
      seer2Max: 19.3,
      hspf2Min: 8.8,
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
      id: "mainline-ml-series-central-ducted-24000",
      slug: "mainline-ml-series-central-ducted-24000",
      name: "ML Series 24 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 24k",
      normalizedModelNumber: "ml-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 20800,
      seer2Min: 16,
      seer2Max: 19.7,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-30000",
      slug: "mainline-ml-series-wall-single-30000",
      name: "ML Series 30 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 30k",
      normalizedModelNumber: "ml-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 9.2,
      hspf2Max: 10.5,
      cop5FMin: 1.88,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-standard-wall-single-36000",
      slug: "mainline-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "mainline-standard",
      brandId: "mainline",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 17900,
      heatingCapacity5FMaxBtu: 24600,
      seer2Min: 27.8,
      seer2Max: 19.6,
      hspf2Min: 11.0,
      hspf2Max: 12.4,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-30000",
      slug: "mainline-ml-series-central-ducted-30000",
      name: "ML Series 30 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 30k",
      normalizedModelNumber: "ml-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 18200,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 15.3,
      seer2Max: 18.6,
      hspf2Min: 8.7,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-36000",
      slug: "mainline-ml-series-wall-single-36000",
      name: "ML Series 36 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 36k",
      normalizedModelNumber: "ml-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 36600,
      seer2Min: 19.4,
      seer2Max: 24,
      hspf2Min: 9.2,
      hspf2Max: 11.3,
      cop5FMin: 1.9,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-48000",
      slug: "mainline-ml-series-central-ducted-48000",
      name: "ML Series 48 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 48k",
      normalizedModelNumber: "ml-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 28000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 17.7,
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
      id: "mainline-standard-wall-single-60000",
      slug: "mainline-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "mainline-standard",
      brandId: "mainline",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 39000,
      heatingCapacity5FMaxBtu: 40500,
      seer2Min: 27.7,
      seer2Max: 19.3,
      hspf2Min: 11.2,
      hspf2Max: 10.9,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-36000",
      slug: "mainline-ml-series-central-ducted-36000",
      name: "ML Series 36 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 36k",
      normalizedModelNumber: "ml-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 23200,
      heatingCapacity5FMaxBtu: 31800,
      seer2Min: 15.4,
      seer2Max: 18,
      hspf2Min: 8.2,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2.06,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-42000",
      slug: "mainline-ml-series-central-ducted-42000",
      name: "ML Series 42 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 42k",
      normalizedModelNumber: "ml-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "mainline-standard-wall-single-9000",
      slug: "mainline-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "mainline-standard",
      brandId: "mainline",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 6900,
      seer2Min: 23.7,
      seer2Max: 21.1,
      hspf2Min: 11.7,
      hspf2Max: 9.8,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-standard-wall-single-12000",
      slug: "mainline-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "mainline-standard",
      brandId: "mainline",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7300,
      heatingCapacity5FMaxBtu: 8000,
      seer2Min: 19.7,
      seer2Max: 28.4,
      hspf2Min: 9.8,
      hspf2Max: 9.7,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-9000",
      slug: "mainline-ml-series-wall-single-9000",
      name: "ML Series 9 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 9k",
      normalizedModelNumber: "ml-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 11000,
      seer2Min: 19,
      seer2Max: 33.3,
      hspf2Min: 9,
      hspf2Max: 14.6,
      cop5FMin: 1.8,
      cop5FMax: 2.33,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-standard-wall-single-18000",
      slug: "mainline-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "mainline-standard",
      brandId: "mainline",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11200,
      heatingCapacity5FMaxBtu: 11200,
      seer2Min: 16.7,
      seer2Max: 28.9,
      hspf2Min: 9.6,
      hspf2Max: 11.4,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-24000",
      slug: "mainline-ml-series-wall-single-24000",
      name: "ML Series 24 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 24k",
      normalizedModelNumber: "ml-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 17,
      seer2Max: 25,
      hspf2Min: 8.5,
      hspf2Max: 13.5,
      cop5FMin: 1.9,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-12000",
      slug: "mainline-ml-series-wall-single-12000",
      name: "ML Series 12 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 12k",
      normalizedModelNumber: "ml-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 11000,
      seer2Min: 19,
      seer2Max: 29.4,
      hspf2Min: 9.1,
      hspf2Max: 12.7,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-18000",
      slug: "mainline-ml-series-wall-single-18000",
      name: "ML Series 18 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 18k",
      normalizedModelNumber: "ml-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 12300,
      heatingCapacity5FMaxBtu: 19300,
      seer2Min: 18,
      seer2Max: 25.6,
      hspf2Min: 9.6,
      hspf2Max: 16.2,
      cop5FMin: 1.86,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-6000",
      slug: "mainline-ml-series-wall-single-6000",
      name: "ML Series 6 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 6k",
      normalizedModelNumber: "ml-series-6000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6500,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 11000,
      seer2Min: 21.4,
      seer2Max: 35,
      hspf2Min: 12,
      hspf2Max: 15.6,
      cop5FMin: 2,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-15000",
      slug: "mainline-ml-series-wall-single-15000",
      name: "ML Series 15 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 15k",
      normalizedModelNumber: "ml-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "mainline-ml-series-wall-single-20000",
      slug: "mainline-ml-series-wall-single-20000",
      name: "ML Series 20 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 20k",
      normalizedModelNumber: "ml-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "mainline-ml-series-wall-single-48000",
      slug: "mainline-ml-series-wall-single-48000",
      name: "ML Series 48 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 48k",
      normalizedModelNumber: "ml-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 36600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16.7,
      seer2Max: 24,
      hspf2Min: 9.8,
      hspf2Max: 11,
      cop5FMin: 1.83,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-standard-wall-single-48000",
      slug: "mainline-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "mainline-standard",
      brandId: "mainline",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 37200,
      heatingCapacity5FMaxBtu: 37200,
      seer2Min: 18.0,
      seer2Max: 24.3,
      hspf2Min: 11.3,
      hspf2Max: 11.3,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-60000",
      slug: "mainline-ml-series-wall-single-60000",
      name: "ML Series 60 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 60k",
      normalizedModelNumber: "ml-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "mainline-ml-series-wall-single-42000",
      slug: "mainline-ml-series-wall-single-42000",
      name: "ML Series 42 000 BTU",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series 42k",
      normalizedModelNumber: "ml-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "mainline-ml18hp230nex-o",
      modelNumber: "ML18HP230NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230nexh-o",
      modelNumber: "ML18HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230lmnt-o",
      modelNumber: "ML18HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230lmnth-o",
      modelNumber: "ML18HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230nex-o",
      modelNumber: "ML24HP230NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230nexh-o",
      modelNumber: "ML24HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230lmnt-o",
      modelNumber: "ML24HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230lmnth-o",
      modelNumber: "ML24HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml30hp230gen-o",
      modelNumber: "ML30HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml33hp230nexh-o",
      modelNumber: "ML33HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml33hp230calh-o",
      modelNumber: "ML33HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml27hp230mulh-o",
      modelNumber: "ML27HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230gen-o",
      modelNumber: "ML36HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml30hp230lmnt-o",
      modelNumber: "ML30HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml30hp230lmnth-o",
      modelNumber: "ML30HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230lcm-o",
      modelNumber: "ML36HP230LCM-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230mul-o",
      modelNumber: "ML36HP230MUL-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230mulh-o",
      modelNumber: "ML36HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230lcm-o",
      modelNumber: "ML48HP230LCM-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230lcmh-o",
      modelNumber: "ML48HP230LCMH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml60hp230lcmh-o",
      modelNumber: "ML60HP230LCMH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230lmnt-o",
      modelNumber: "ML48HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml60hp230lmnt-o",
      modelNumber: "ML60HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230lmnth-o",
      modelNumber: "ML48HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml50hp230lmnth-o",
      modelNumber: "ML50HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml60hp230lmnth-o",
      modelNumber: "ML60HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml60hp230lcm-o",
      modelNumber: "ML60HP230LCM-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml55hp230mul-o",
      modelNumber: "ML55HP230MUL-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230lcmh-o",
      modelNumber: "ML36HP230LCMH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230lmnt-o",
      modelNumber: "ML36HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml33hp230lmnth-o",
      modelNumber: "ML33HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230lmnth-o",
      modelNumber: "ML36HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml42hp230lmnth-o",
      modelNumber: "ML42HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp115win-o",
      modelNumber: "ML09HP115WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp115win-o",
      modelNumber: "ML12HP115WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230win-o",
      modelNumber: "ML12HP230WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp115gen-o",
      modelNumber: "ML12HP115GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230win-o",
      modelNumber: "ML09HP230WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp115gen-o",
      modelNumber: "ML09HP115GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230gen-o",
      modelNumber: "ML09HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230nex-o",
      modelNumber: "ML09HP230NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230nexh-o",
      modelNumber: "ML09HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230calh-o",
      modelNumber: "ML09HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230win-o",
      modelNumber: "ML18HP230WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230win-o",
      modelNumber: "ML24HP230WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230gen-o",
      modelNumber: "ML24HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230calh-o",
      modelNumber: "ML24HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml27hp230mul-o",
      modelNumber: "ML27HP230MUL-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230gen-o",
      modelNumber: "ML12HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp115nex-o",
      modelNumber: "ML12HP115NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230nex-o",
      modelNumber: "ML12HP230NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230nexh-o",
      modelNumber: "ML12HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230calh-o",
      modelNumber: "ML12HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230gen-o",
      modelNumber: "ML18HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230calh-o",
      modelNumber: "ML18HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230mul-o",
      modelNumber: "ML18HP230MUL-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230mulh-o",
      modelNumber: "ML18HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml06hp230nexh-o",
      modelNumber: "ML06HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml06hp230calh-o",
      modelNumber: "ML06HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230mulh-o",
      modelNumber: "ML48HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml55hp230mulh-o",
      modelNumber: "ML55HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230mul-o",
      modelNumber: "ML48HP230MUL-O*",
      brandId: "mainline",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "mainline-ml-series-central-ducted-18000-cfg-1",
      slug: "mainline-ml-series-central-ducted-18000-cfg-1",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-2",
      slug: "mainline-ml-series-central-ducted-18000-cfg-2",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-3",
      slug: "mainline-ml-series-central-ducted-18000-cfg-3",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-4",
      slug: "mainline-ml-series-central-ducted-18000-cfg-4",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-5",
      slug: "mainline-ml-series-central-ducted-18000-cfg-5",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-6",
      slug: "mainline-ml-series-central-ducted-18000-cfg-6",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-7",
      slug: "mainline-ml-series-central-ducted-18000-cfg-7",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-18000-cfg-8",
      slug: "mainline-ml-series-central-ducted-18000-cfg-8",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-9",
      slug: "mainline-ml-series-central-ducted-18000-cfg-9",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-18000-cfg-10",
      slug: "mainline-ml-series-central-ducted-18000-cfg-10",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-18000-cfg-11",
      slug: "mainline-ml-series-central-ducted-18000-cfg-11",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-18000-cfg-12",
      slug: "mainline-ml-series-central-ducted-18000-cfg-12",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-13",
      slug: "mainline-ml-series-central-ducted-18000-cfg-13",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-14",
      slug: "mainline-ml-series-central-ducted-18000-cfg-14",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-18000-cfg-15",
      slug: "mainline-ml-series-central-ducted-18000-cfg-15",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-18000-cfg-16",
      slug: "mainline-ml-series-central-ducted-18000-cfg-16",
      modelId: "mainline-ml-series-central-ducted-18000",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-24000-cfg-1",
      slug: "mainline-ml-series-central-ducted-24000-cfg-1",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-2",
      slug: "mainline-ml-series-central-ducted-24000-cfg-2",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-3",
      slug: "mainline-ml-series-central-ducted-24000-cfg-3",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-4",
      slug: "mainline-ml-series-central-ducted-24000-cfg-4",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-5",
      slug: "mainline-ml-series-central-ducted-24000-cfg-5",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-6",
      slug: "mainline-ml-series-central-ducted-24000-cfg-6",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-24000-cfg-7",
      slug: "mainline-ml-series-central-ducted-24000-cfg-7",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-8",
      slug: "mainline-ml-series-central-ducted-24000-cfg-8",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-9",
      slug: "mainline-ml-series-central-ducted-24000-cfg-9",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-24000-cfg-10",
      slug: "mainline-ml-series-central-ducted-24000-cfg-10",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-11",
      slug: "mainline-ml-series-central-ducted-24000-cfg-11",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-12",
      slug: "mainline-ml-series-central-ducted-24000-cfg-12",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-24000-cfg-13",
      slug: "mainline-ml-series-central-ducted-24000-cfg-13",
      modelId: "mainline-ml-series-central-ducted-24000",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-wall-single-30000-cfg-1",
      slug: "mainline-ml-series-wall-single-30000-cfg-1",
      modelId: "mainline-ml-series-wall-single-30000",
      outdoorUnitId: "mainline-ml30hp230gen-o",
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
      id: "mainline-ml-series-wall-single-30000-cfg-2",
      slug: "mainline-ml-series-wall-single-30000-cfg-2",
      modelId: "mainline-ml-series-wall-single-30000",
      outdoorUnitId: "mainline-ml30hp230gen-o",
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
      id: "mainline-ml-series-wall-single-30000-cfg-3",
      slug: "mainline-ml-series-wall-single-30000-cfg-3",
      modelId: "mainline-ml-series-wall-single-30000",
      outdoorUnitId: "mainline-ml33hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-30000-cfg-4",
      slug: "mainline-ml-series-wall-single-30000-cfg-4",
      modelId: "mainline-ml-series-wall-single-30000",
      outdoorUnitId: "mainline-ml33hp230calh-o",
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
      id: "mainline-ml-series-wall-single-30000-cfg-5",
      slug: "mainline-ml-series-wall-single-30000-cfg-5",
      modelId: "mainline-ml-series-wall-single-30000",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-30000-cfg-6",
      slug: "mainline-ml-series-wall-single-30000-cfg-6",
      modelId: "mainline-ml-series-wall-single-30000",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 20,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-30000-cfg-7",
      slug: "mainline-ml-series-wall-single-30000-cfg-7",
      modelId: "mainline-ml-series-wall-single-30000",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-30000-cfg-8",
      slug: "mainline-ml-series-wall-single-30000-cfg-8",
      modelId: "mainline-ml-series-wall-single-30000",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-standard-wall-single-36000-cfg-1",
      slug: "mainline-standard-wall-single-36000-cfg-1",
      modelId: "mainline-standard-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230gen-o",
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
      id: "mainline-standard-wall-single-36000-cfg-2",
      slug: "mainline-standard-wall-single-36000-cfg-2",
      modelId: "mainline-standard-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230gen-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-1",
      slug: "mainline-ml-series-central-ducted-30000-cfg-1",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml33hp230nexh-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-2",
      slug: "mainline-ml-series-central-ducted-30000-cfg-2",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-3",
      slug: "mainline-ml-series-central-ducted-30000-cfg-3",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-4",
      slug: "mainline-ml-series-central-ducted-30000-cfg-4",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-5",
      slug: "mainline-ml-series-central-ducted-30000-cfg-5",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-6",
      slug: "mainline-ml-series-central-ducted-30000-cfg-6",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-7",
      slug: "mainline-ml-series-central-ducted-30000-cfg-7",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-8",
      slug: "mainline-ml-series-central-ducted-30000-cfg-8",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-9",
      slug: "mainline-ml-series-central-ducted-30000-cfg-9",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-30000-cfg-10",
      slug: "mainline-ml-series-central-ducted-30000-cfg-10",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-11",
      slug: "mainline-ml-series-central-ducted-30000-cfg-11",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-12",
      slug: "mainline-ml-series-central-ducted-30000-cfg-12",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-13",
      slug: "mainline-ml-series-central-ducted-30000-cfg-13",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-14",
      slug: "mainline-ml-series-central-ducted-30000-cfg-14",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-15",
      slug: "mainline-ml-series-central-ducted-30000-cfg-15",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-16",
      slug: "mainline-ml-series-central-ducted-30000-cfg-16",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-30000-cfg-17",
      slug: "mainline-ml-series-central-ducted-30000-cfg-17",
      modelId: "mainline-ml-series-central-ducted-30000",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-1",
      slug: "mainline-ml-series-wall-single-36000-cfg-1",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-2",
      slug: "mainline-ml-series-wall-single-36000-cfg-2",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-3",
      slug: "mainline-ml-series-wall-single-36000-cfg-3",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-4",
      slug: "mainline-ml-series-wall-single-36000-cfg-4",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-5",
      slug: "mainline-ml-series-wall-single-36000-cfg-5",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 23.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-36000-cfg-6",
      slug: "mainline-ml-series-wall-single-36000-cfg-6",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-7",
      slug: "mainline-ml-series-wall-single-36000-cfg-7",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 21.55,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-36000-cfg-8",
      slug: "mainline-ml-series-wall-single-36000-cfg-8",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-36000-cfg-9",
      slug: "mainline-ml-series-wall-single-36000-cfg-9",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-10",
      slug: "mainline-ml-series-wall-single-36000-cfg-10",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.45,
      hspf2: 10.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-36000-cfg-11",
      slug: "mainline-ml-series-wall-single-36000-cfg-11",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-12",
      slug: "mainline-ml-series-wall-single-36000-cfg-12",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-13",
      slug: "mainline-ml-series-wall-single-36000-cfg-13",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-14",
      slug: "mainline-ml-series-wall-single-36000-cfg-14",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-15",
      slug: "mainline-ml-series-wall-single-36000-cfg-15",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-36000-cfg-16",
      slug: "mainline-ml-series-wall-single-36000-cfg-16",
      modelId: "mainline-ml-series-wall-single-36000",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-1",
      slug: "mainline-ml-series-central-ducted-48000-cfg-1",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lcm-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-2",
      slug: "mainline-ml-series-central-ducted-48000-cfg-2",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-3",
      slug: "mainline-ml-series-central-ducted-48000-cfg-3",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml60hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-4",
      slug: "mainline-ml-series-central-ducted-48000-cfg-4",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-5",
      slug: "mainline-ml-series-central-ducted-48000-cfg-5",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml60hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-6",
      slug: "mainline-ml-series-central-ducted-48000-cfg-6",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-7",
      slug: "mainline-ml-series-central-ducted-48000-cfg-7",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml50hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-48000-cfg-8",
      slug: "mainline-ml-series-central-ducted-48000-cfg-8",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml60hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-9",
      slug: "mainline-ml-series-central-ducted-48000-cfg-9",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-10",
      slug: "mainline-ml-series-central-ducted-48000-cfg-10",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml60hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-11",
      slug: "mainline-ml-series-central-ducted-48000-cfg-11",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-12",
      slug: "mainline-ml-series-central-ducted-48000-cfg-12",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml60hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-13",
      slug: "mainline-ml-series-central-ducted-48000-cfg-13",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml60hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-14",
      slug: "mainline-ml-series-central-ducted-48000-cfg-14",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-15",
      slug: "mainline-ml-series-central-ducted-48000-cfg-15",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-16",
      slug: "mainline-ml-series-central-ducted-48000-cfg-16",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-17",
      slug: "mainline-ml-series-central-ducted-48000-cfg-17",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml60hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-18",
      slug: "mainline-ml-series-central-ducted-48000-cfg-18",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml60hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-48000-cfg-19",
      slug: "mainline-ml-series-central-ducted-48000-cfg-19",
      modelId: "mainline-ml-series-central-ducted-48000",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-standard-wall-single-60000-cfg-1",
      slug: "mainline-standard-wall-single-60000-cfg-1",
      modelId: "mainline-standard-wall-single-60000",
      outdoorUnitId: "mainline-ml60hp230lcm-o",
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
      id: "mainline-standard-wall-single-60000-cfg-2",
      slug: "mainline-standard-wall-single-60000-cfg-2",
      modelId: "mainline-standard-wall-single-60000",
      outdoorUnitId: "mainline-ml60hp230lcm-o",
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
      id: "mainline-standard-wall-single-60000-cfg-3",
      slug: "mainline-standard-wall-single-60000-cfg-3",
      modelId: "mainline-standard-wall-single-60000",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-60000-cfg-4",
      slug: "mainline-standard-wall-single-60000-cfg-4",
      modelId: "mainline-standard-wall-single-60000",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-60000-cfg-5",
      slug: "mainline-standard-wall-single-60000-cfg-5",
      modelId: "mainline-standard-wall-single-60000",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-60000-cfg-6",
      slug: "mainline-standard-wall-single-60000-cfg-6",
      modelId: "mainline-standard-wall-single-60000",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-60000-cfg-7",
      slug: "mainline-standard-wall-single-60000-cfg-7",
      modelId: "mainline-standard-wall-single-60000",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-60000-cfg-8",
      slug: "mainline-standard-wall-single-60000-cfg-8",
      modelId: "mainline-standard-wall-single-60000",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-1",
      slug: "mainline-ml-series-central-ducted-36000-cfg-1",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-2",
      slug: "mainline-ml-series-central-ducted-36000-cfg-2",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-3",
      slug: "mainline-ml-series-central-ducted-36000-cfg-3",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml33hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-36000-cfg-4",
      slug: "mainline-ml-series-central-ducted-36000-cfg-4",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-5",
      slug: "mainline-ml-series-central-ducted-36000-cfg-5",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-6",
      slug: "mainline-ml-series-central-ducted-36000-cfg-6",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-7",
      slug: "mainline-ml-series-central-ducted-36000-cfg-7",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-8",
      slug: "mainline-ml-series-central-ducted-36000-cfg-8",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml33hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-9",
      slug: "mainline-ml-series-central-ducted-36000-cfg-9",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-10",
      slug: "mainline-ml-series-central-ducted-36000-cfg-10",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-36000-cfg-11",
      slug: "mainline-ml-series-central-ducted-36000-cfg-11",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-12",
      slug: "mainline-ml-series-central-ducted-36000-cfg-12",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-36000-cfg-13",
      slug: "mainline-ml-series-central-ducted-36000-cfg-13",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.4,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-36000-cfg-14",
      slug: "mainline-ml-series-central-ducted-36000-cfg-14",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-15",
      slug: "mainline-ml-series-central-ducted-36000-cfg-15",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-16",
      slug: "mainline-ml-series-central-ducted-36000-cfg-16",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-17",
      slug: "mainline-ml-series-central-ducted-36000-cfg-17",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-36000-cfg-18",
      slug: "mainline-ml-series-central-ducted-36000-cfg-18",
      modelId: "mainline-ml-series-central-ducted-36000",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-42000-cfg-1",
      slug: "mainline-ml-series-central-ducted-42000-cfg-1",
      modelId: "mainline-ml-series-central-ducted-42000",
      outdoorUnitId: "mainline-ml42hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-42000-cfg-2",
      slug: "mainline-ml-series-central-ducted-42000-cfg-2",
      modelId: "mainline-ml-series-central-ducted-42000",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-42000-cfg-3",
      slug: "mainline-ml-series-central-ducted-42000-cfg-3",
      modelId: "mainline-ml-series-central-ducted-42000",
      outdoorUnitId: "mainline-ml48hp230lmnt-o",
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
      id: "mainline-standard-wall-single-9000-cfg-1",
      slug: "mainline-standard-wall-single-9000-cfg-1",
      modelId: "mainline-standard-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp115win-o",
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
      id: "mainline-standard-wall-single-12000-cfg-1",
      slug: "mainline-standard-wall-single-12000-cfg-1",
      modelId: "mainline-standard-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp115win-o",
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
      id: "mainline-standard-wall-single-12000-cfg-2",
      slug: "mainline-standard-wall-single-12000-cfg-2",
      modelId: "mainline-standard-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230win-o",
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
      id: "mainline-standard-wall-single-12000-cfg-3",
      slug: "mainline-standard-wall-single-12000-cfg-3",
      modelId: "mainline-standard-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp115gen-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-1",
      slug: "mainline-ml-series-wall-single-9000-cfg-1",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230win-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-2",
      slug: "mainline-ml-series-wall-single-9000-cfg-2",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp115gen-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-3",
      slug: "mainline-ml-series-wall-single-9000-cfg-3",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230gen-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-4",
      slug: "mainline-ml-series-wall-single-9000-cfg-4",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nex-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-5",
      slug: "mainline-ml-series-wall-single-9000-cfg-5",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-6",
      slug: "mainline-ml-series-wall-single-9000-cfg-6",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230calh-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-7",
      slug: "mainline-ml-series-wall-single-9000-cfg-7",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nex-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-8",
      slug: "mainline-ml-series-wall-single-9000-cfg-8",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nex-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-9",
      slug: "mainline-ml-series-wall-single-9000-cfg-9",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nex-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-10",
      slug: "mainline-ml-series-wall-single-9000-cfg-10",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nex-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-11",
      slug: "mainline-ml-series-wall-single-9000-cfg-11",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nex-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-12",
      slug: "mainline-ml-series-wall-single-9000-cfg-12",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-13",
      slug: "mainline-ml-series-wall-single-9000-cfg-13",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-14",
      slug: "mainline-ml-series-wall-single-9000-cfg-14",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-15",
      slug: "mainline-ml-series-wall-single-9000-cfg-15",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-9000-cfg-16",
      slug: "mainline-ml-series-wall-single-9000-cfg-16",
      modelId: "mainline-ml-series-wall-single-9000",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-standard-wall-single-18000-cfg-1",
      slug: "mainline-standard-wall-single-18000-cfg-1",
      modelId: "mainline-standard-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230win-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-1",
      slug: "mainline-ml-series-wall-single-24000-cfg-1",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230win-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-2",
      slug: "mainline-ml-series-wall-single-24000-cfg-2",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230gen-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-3",
      slug: "mainline-ml-series-wall-single-24000-cfg-3",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-4",
      slug: "mainline-ml-series-wall-single-24000-cfg-4",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-5",
      slug: "mainline-ml-series-wall-single-24000-cfg-5",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230calh-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-6",
      slug: "mainline-ml-series-wall-single-24000-cfg-6",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-7",
      slug: "mainline-ml-series-wall-single-24000-cfg-7",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-8",
      slug: "mainline-ml-series-wall-single-24000-cfg-8",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-9",
      slug: "mainline-ml-series-wall-single-24000-cfg-9",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-10",
      slug: "mainline-ml-series-wall-single-24000-cfg-10",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-11",
      slug: "mainline-ml-series-wall-single-24000-cfg-11",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml27hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-24000-cfg-12",
      slug: "mainline-ml-series-wall-single-24000-cfg-12",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml27hp230mul-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-13",
      slug: "mainline-ml-series-wall-single-24000-cfg-13",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml27hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26200,
      coolingCapacityMaxBtu: 26200,
      seer2: 22,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-24000-cfg-14",
      slug: "mainline-ml-series-wall-single-24000-cfg-14",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-24000-cfg-15",
      slug: "mainline-ml-series-wall-single-24000-cfg-15",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml27hp230mul-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-16",
      slug: "mainline-ml-series-wall-single-24000-cfg-16",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml27hp230mul-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-17",
      slug: "mainline-ml-series-wall-single-24000-cfg-17",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml27hp230mul-o",
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
      id: "mainline-ml-series-wall-single-24000-cfg-18",
      slug: "mainline-ml-series-wall-single-24000-cfg-18",
      modelId: "mainline-ml-series-wall-single-24000",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-1",
      slug: "mainline-ml-series-wall-single-12000-cfg-1",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230gen-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.3,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-12000-cfg-2",
      slug: "mainline-ml-series-wall-single-12000-cfg-2",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp115nex-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-3",
      slug: "mainline-ml-series-wall-single-12000-cfg-3",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nex-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-4",
      slug: "mainline-ml-series-wall-single-12000-cfg-4",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-5",
      slug: "mainline-ml-series-wall-single-12000-cfg-5",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230calh-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-6",
      slug: "mainline-ml-series-wall-single-12000-cfg-6",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nex-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-7",
      slug: "mainline-ml-series-wall-single-12000-cfg-7",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nex-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-8",
      slug: "mainline-ml-series-wall-single-12000-cfg-8",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nex-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-9",
      slug: "mainline-ml-series-wall-single-12000-cfg-9",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nex-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-10",
      slug: "mainline-ml-series-wall-single-12000-cfg-10",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nex-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-11",
      slug: "mainline-ml-series-wall-single-12000-cfg-11",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-12",
      slug: "mainline-ml-series-wall-single-12000-cfg-12",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-13",
      slug: "mainline-ml-series-wall-single-12000-cfg-13",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-14",
      slug: "mainline-ml-series-wall-single-12000-cfg-14",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-12000-cfg-15",
      slug: "mainline-ml-series-wall-single-12000-cfg-15",
      modelId: "mainline-ml-series-wall-single-12000",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-1",
      slug: "mainline-ml-series-wall-single-18000-cfg-1",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230gen-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.2,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-18000-cfg-2",
      slug: "mainline-ml-series-wall-single-18000-cfg-2",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-3",
      slug: "mainline-ml-series-wall-single-18000-cfg-3",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-4",
      slug: "mainline-ml-series-wall-single-18000-cfg-4",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230calh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-5",
      slug: "mainline-ml-series-wall-single-18000-cfg-5",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-6",
      slug: "mainline-ml-series-wall-single-18000-cfg-6",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-7",
      slug: "mainline-ml-series-wall-single-18000-cfg-7",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-8",
      slug: "mainline-ml-series-wall-single-18000-cfg-8",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-9",
      slug: "mainline-ml-series-wall-single-18000-cfg-9",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-10",
      slug: "mainline-ml-series-wall-single-18000-cfg-10",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-11",
      slug: "mainline-ml-series-wall-single-18000-cfg-11",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-12",
      slug: "mainline-ml-series-wall-single-18000-cfg-12",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-13",
      slug: "mainline-ml-series-wall-single-18000-cfg-13",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-14",
      slug: "mainline-ml-series-wall-single-18000-cfg-14",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-15",
      slug: "mainline-ml-series-wall-single-18000-cfg-15",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-16",
      slug: "mainline-ml-series-wall-single-18000-cfg-16",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-18000-cfg-17",
      slug: "mainline-ml-series-wall-single-18000-cfg-17",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-18000-cfg-18",
      slug: "mainline-ml-series-wall-single-18000-cfg-18",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-19",
      slug: "mainline-ml-series-wall-single-18000-cfg-19",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-18000-cfg-20",
      slug: "mainline-ml-series-wall-single-18000-cfg-20",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-21",
      slug: "mainline-ml-series-wall-single-18000-cfg-21",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-22",
      slug: "mainline-ml-series-wall-single-18000-cfg-22",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-23",
      slug: "mainline-ml-series-wall-single-18000-cfg-23",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-24",
      slug: "mainline-ml-series-wall-single-18000-cfg-24",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-18000-cfg-25",
      slug: "mainline-ml-series-wall-single-18000-cfg-25",
      modelId: "mainline-ml-series-wall-single-18000",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-6000-cfg-1",
      slug: "mainline-ml-series-wall-single-6000-cfg-1",
      modelId: "mainline-ml-series-wall-single-6000",
      outdoorUnitId: "mainline-ml06hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-6000-cfg-2",
      slug: "mainline-ml-series-wall-single-6000-cfg-2",
      modelId: "mainline-ml-series-wall-single-6000",
      outdoorUnitId: "mainline-ml06hp230calh-o",
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
      id: "mainline-ml-series-wall-single-6000-cfg-3",
      slug: "mainline-ml-series-wall-single-6000-cfg-3",
      modelId: "mainline-ml-series-wall-single-6000",
      outdoorUnitId: "mainline-ml06hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-6000-cfg-4",
      slug: "mainline-ml-series-wall-single-6000-cfg-4",
      modelId: "mainline-ml-series-wall-single-6000",
      outdoorUnitId: "mainline-ml06hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-15000-cfg-1",
      slug: "mainline-ml-series-wall-single-15000-cfg-1",
      modelId: "mainline-ml-series-wall-single-15000",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-15000-cfg-2",
      slug: "mainline-ml-series-wall-single-15000-cfg-2",
      modelId: "mainline-ml-series-wall-single-15000",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-15000-cfg-3",
      slug: "mainline-ml-series-wall-single-15000-cfg-3",
      modelId: "mainline-ml-series-wall-single-15000",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-20000-cfg-1",
      slug: "mainline-ml-series-wall-single-20000-cfg-1",
      modelId: "mainline-ml-series-wall-single-20000",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-1",
      slug: "mainline-ml-series-wall-single-48000-cfg-1",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-2",
      slug: "mainline-ml-series-wall-single-48000-cfg-2",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-3",
      slug: "mainline-ml-series-wall-single-48000-cfg-3",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-4",
      slug: "mainline-ml-series-wall-single-48000-cfg-4",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230lcmh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-5",
      slug: "mainline-ml-series-wall-single-48000-cfg-5",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230lcmh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-6",
      slug: "mainline-ml-series-wall-single-48000-cfg-6",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230lcmh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-7",
      slug: "mainline-ml-series-wall-single-48000-cfg-7",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml60hp230lcmh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-8",
      slug: "mainline-ml-series-wall-single-48000-cfg-8",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-9",
      slug: "mainline-ml-series-wall-single-48000-cfg-9",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 20.8,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-48000-cfg-10",
      slug: "mainline-ml-series-wall-single-48000-cfg-10",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 21.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-48000-cfg-11",
      slug: "mainline-ml-series-wall-single-48000-cfg-11",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-12",
      slug: "mainline-ml-series-wall-single-48000-cfg-12",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 20.7,
      hspf2: 10.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-48000-cfg-13",
      slug: "mainline-ml-series-wall-single-48000-cfg-13",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230mul-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-14",
      slug: "mainline-ml-series-wall-single-48000-cfg-14",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230mul-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-15",
      slug: "mainline-ml-series-wall-single-48000-cfg-15",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-16",
      slug: "mainline-ml-series-wall-single-48000-cfg-16",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-17",
      slug: "mainline-ml-series-wall-single-48000-cfg-17",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-18",
      slug: "mainline-ml-series-wall-single-48000-cfg-18",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-19",
      slug: "mainline-ml-series-wall-single-48000-cfg-19",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-48000-cfg-20",
      slug: "mainline-ml-series-wall-single-48000-cfg-20",
      modelId: "mainline-ml-series-wall-single-48000",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-standard-wall-single-48000-cfg-1",
      slug: "mainline-standard-wall-single-48000-cfg-1",
      modelId: "mainline-standard-wall-single-48000",
      outdoorUnitId: "mainline-ml60hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-60000-cfg-1",
      slug: "mainline-ml-series-wall-single-60000-cfg-1",
      modelId: "mainline-ml-series-wall-single-60000",
      outdoorUnitId: "mainline-ml60hp230lcmh-o",
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
      id: "mainline-ml-series-wall-single-42000-cfg-1",
      slug: "mainline-ml-series-wall-single-42000-cfg-1",
      modelId: "mainline-ml-series-wall-single-42000",
      outdoorUnitId: "mainline-ml48hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-42000-cfg-2",
      slug: "mainline-ml-series-wall-single-42000-cfg-2",
      modelId: "mainline-ml-series-wall-single-42000",
      outdoorUnitId: "mainline-ml48hp230mul-o",
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
      id: "mainline-ml-series-wall-single-42000-cfg-3",
      slug: "mainline-ml-series-wall-single-42000-cfg-3",
      modelId: "mainline-ml-series-wall-single-42000",
      outdoorUnitId: "mainline-ml48hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.85,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-42000-cfg-4",
      slug: "mainline-ml-series-wall-single-42000-cfg-4",
      modelId: "mainline-ml-series-wall-single-42000",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-42000-cfg-5",
      slug: "mainline-ml-series-wall-single-42000-cfg-5",
      modelId: "mainline-ml-series-wall-single-42000",
      outdoorUnitId: "mainline-ml48hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-1",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-2",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-3",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-4",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-5",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-6",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-8",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-9",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-12",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-13",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-15",
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
      configurationId: "mainline-ml-series-central-ducted-18000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-1",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-2",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-3",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-4",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-5",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-6",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-7",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-10",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-11",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-12",
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
      configurationId: "mainline-ml-series-central-ducted-24000-cfg-13",
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
      configurationId: "mainline-ml-series-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-30000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-30000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-30000-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-30000-cfg-5",
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
      configurationId: "mainline-ml-series-wall-single-30000-cfg-6",
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
      configurationId: "mainline-ml-series-wall-single-30000-cfg-7",
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
      configurationId: "mainline-ml-series-wall-single-30000-cfg-8",
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
      configurationId: "mainline-standard-wall-single-36000-cfg-1",
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
      configurationId: "mainline-standard-wall-single-36000-cfg-2",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-1",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-2",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-3",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-4",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-5",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-6",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-7",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-8",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-10",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-11",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-12",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-13",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-14",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-15",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-16",
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
      configurationId: "mainline-ml-series-central-ducted-30000-cfg-17",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-5",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-6",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-7",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-8",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-9",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-10",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-11",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-12",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-13",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-14",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-15",
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
      configurationId: "mainline-ml-series-wall-single-36000-cfg-16",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-1",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-2",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-3",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-4",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-5",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-6",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-7",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-8",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-9",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-10",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-11",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-12",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-13",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-14",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-15",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-16",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-17",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-18",
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
      configurationId: "mainline-ml-series-central-ducted-48000-cfg-19",
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
      configurationId: "mainline-standard-wall-single-60000-cfg-1",
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
      configurationId: "mainline-standard-wall-single-60000-cfg-2",
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
      configurationId: "mainline-standard-wall-single-60000-cfg-3",
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
      configurationId: "mainline-standard-wall-single-60000-cfg-4",
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
      configurationId: "mainline-standard-wall-single-60000-cfg-5",
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
      configurationId: "mainline-standard-wall-single-60000-cfg-6",
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
      configurationId: "mainline-standard-wall-single-60000-cfg-7",
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
      configurationId: "mainline-standard-wall-single-60000-cfg-8",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-1",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-2",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-4",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-8",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-9",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-10",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-11",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-14",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-15",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-16",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-17",
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
      configurationId: "mainline-ml-series-central-ducted-36000-cfg-18",
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
      configurationId: "mainline-ml-series-central-ducted-42000-cfg-1",
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
      configurationId: "mainline-ml-series-central-ducted-42000-cfg-2",
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
      configurationId: "mainline-ml-series-central-ducted-42000-cfg-3",
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
      configurationId: "mainline-standard-wall-single-9000-cfg-1",
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
      configurationId: "mainline-standard-wall-single-12000-cfg-1",
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
      configurationId: "mainline-standard-wall-single-12000-cfg-2",
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
      configurationId: "mainline-standard-wall-single-12000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-5",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-6",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-7",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-8",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-9",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-10",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-11",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-12",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-13",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-14",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-15",
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
      configurationId: "mainline-ml-series-wall-single-9000-cfg-16",
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
      configurationId: "mainline-standard-wall-single-18000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-5",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-6",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-7",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-8",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-9",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-10",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-11",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-12",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-13",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-14",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-15",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-16",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-17",
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
      configurationId: "mainline-ml-series-wall-single-24000-cfg-18",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-12000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-5",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-6",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-7",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-8",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-9",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-10",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-11",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-12",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-13",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-14",
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
      configurationId: "mainline-ml-series-wall-single-12000-cfg-15",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-18000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-5",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-6",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-7",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-8",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-9",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-10",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-11",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-12",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-13",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-14",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-15",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-16",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-17",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-18",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-19",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-20",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-21",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-22",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-23",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-24",
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
      configurationId: "mainline-ml-series-wall-single-18000-cfg-25",
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
      configurationId: "mainline-ml-series-wall-single-6000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-6000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-6000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-6000-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-15000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-15000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-15000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-20000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-5",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-6",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-7",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-8",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-9",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-10",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-11",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-12",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-13",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-14",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-15",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-16",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-17",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-18",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-19",
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
      configurationId: "mainline-ml-series-wall-single-48000-cfg-20",
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
      configurationId: "mainline-standard-wall-single-48000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-60000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-42000-cfg-1",
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
      configurationId: "mainline-ml-series-wall-single-42000-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-42000-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
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
