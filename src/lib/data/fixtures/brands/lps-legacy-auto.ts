import type { BrandDataset } from "../../types";

export const lpslegacyDataset: BrandDataset = {
  brand: {
    id: "lps-legacy",
    slug: "lps-legacy",
    name: "LPS LEGACY",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: false,
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
      id: "lps-legacy-standard-wall-single-36000",
      slug: "lps-legacy-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "lps-legacy-standard",
      brandId: "lps-legacy",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 17900,
      heatingCapacity5FMaxBtu: 26200,
      seer2Min: 16.6,
      seer2Max: 24.3,
      hspf2Min: 8.4,
      hspf2Max: 11.1,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlc-series-wall-single-48000",
      slug: "lps-legacy-dlc-series-wall-single-48000",
      name: "DLC-series 48 000 BTU",
      seriesId: "lps-legacy-dlc-series",
      brandId: "lps-legacy",
      modelNumber: "DLC-series 48k",
      normalizedModelNumber: "dlc-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 15.2,
      seer2Max: 18.9,
      hspf2Min: 9.7,
      hspf2Max: 10,
      cop5FMin: 1.85,
      cop5FMax: 1.93,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-standard-wall-single-60000",
      slug: "lps-legacy-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "lps-legacy-standard",
      brandId: "lps-legacy",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 34400,
      heatingCapacity5FMaxBtu: 40500,
      seer2Min: 26.4,
      seer2Max: 21.0,
      hspf2Min: 10.2,
      hspf2Max: 12.1,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlc-series-wall-single-18000",
      slug: "lps-legacy-dlc-series-wall-single-18000",
      name: "DLC-series 18 000 BTU",
      seriesId: "lps-legacy-dlc-series",
      brandId: "lps-legacy",
      modelNumber: "DLC-series 18k",
      normalizedModelNumber: "dlc-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11100,
      heatingCapacity5FMaxBtu: 15700,
      seer2Min: 18,
      seer2Max: 22,
      hspf2Min: 8.7,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-standard-wall-single-12000",
      slug: "lps-legacy-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "lps-legacy-standard",
      brandId: "lps-legacy",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 8300,
      seer2Min: 27.0,
      seer2Max: 21.1,
      hspf2Min: 11.5,
      hspf2Max: 11.7,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlc-series-wall-single-30000",
      slug: "lps-legacy-dlc-series-wall-single-30000",
      name: "DLC-series 30 000 BTU",
      seriesId: "lps-legacy-dlc-series",
      brandId: "lps-legacy",
      modelNumber: "DLC-series 30k",
      normalizedModelNumber: "dlc-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 20.1,
      seer2Max: 21,
      hspf2Min: 8.7,
      hspf2Max: 9,
      cop5FMin: 1.85,
      cop5FMax: 1.92,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-standard-wall-single-24000",
      slug: "lps-legacy-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "lps-legacy-standard",
      brandId: "lps-legacy",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 16500,
      heatingCapacity5FMaxBtu: 17200,
      seer2Min: 16.5,
      seer2Max: 22.4,
      hspf2Min: 9.9,
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
      id: "lps-legacy-standard-wall-single-48000",
      slug: "lps-legacy-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "lps-legacy-standard",
      brandId: "lps-legacy",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 35000,
      heatingCapacity5FMaxBtu: 37200,
      seer2Min: 24.2,
      seer2Max: 27.8,
      hspf2Min: 8.6,
      hspf2Max: 10.6,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlc-series-wall-single-12000",
      slug: "lps-legacy-dlc-series-wall-single-12000",
      name: "DLC series 12 000 BTU",
      seriesId: "lps-legacy-dlc-series",
      brandId: "lps-legacy",
      modelNumber: "DLC series 12k",
      normalizedModelNumber: "dlc-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8400,
      heatingCapacity5FMaxBtu: 10300,
      seer2Min: 20,
      seer2Max: 25.5,
      hspf2Min: 9.5,
      hspf2Max: 10.7,
      cop5FMin: 1.8,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlc-series-wall-single-6000",
      slug: "lps-legacy-dlc-series-wall-single-6000",
      name: "DLC-series 6 000 BTU",
      seriesId: "lps-legacy-dlc-series",
      brandId: "lps-legacy",
      modelNumber: "DLC-series 6k",
      normalizedModelNumber: "dlc-series-6000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6500,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 8500,
      seer2Min: 22,
      seer2Max: 26.5,
      hspf2Min: 10.8,
      hspf2Max: 13.6,
      cop5FMin: 1.84,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlc-series-wall-single-24000",
      slug: "lps-legacy-dlc-series-wall-single-24000",
      name: "DLC-series 24 000 BTU",
      seriesId: "lps-legacy-dlc-series",
      brandId: "lps-legacy",
      modelNumber: "DLC-series 24k",
      normalizedModelNumber: "dlc-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 18900,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 19.2,
      seer2Max: 22.3,
      hspf2Min: 10.3,
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
      id: "lps-legacy-dlc-series-wall-single-9000",
      slug: "lps-legacy-dlc-series-wall-single-9000",
      name: "DLC-series 9 000 BTU",
      seriesId: "lps-legacy-dlc-series",
      brandId: "lps-legacy",
      modelNumber: "DLC-series 9k",
      normalizedModelNumber: "dlc-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 9800,
      seer2Min: 20.5,
      seer2Max: 28.1,
      hspf2Min: 9.1,
      hspf2Max: 12.4,
      cop5FMin: 1.8,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlc-series-wall-single-15000",
      slug: "lps-legacy-dlc-series-wall-single-15000",
      name: "DLC-series 15 000 BTU",
      seriesId: "lps-legacy-dlc-series",
      brandId: "lps-legacy",
      modelNumber: "DLC-series 15k",
      normalizedModelNumber: "dlc-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 15600,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlseries-central-ducted-60000",
      slug: "lps-legacy-dlseries-central-ducted-60000",
      name: "Dlseries 60 000 BTU",
      seriesId: "lps-legacy-dlseries",
      brandId: "lps-legacy",
      modelNumber: "Dlseries 60k",
      normalizedModelNumber: "dlseries-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.3,
      seer2Max: 15.3,
      hspf2Min: 9.4,
      hspf2Max: 9.4,
      cop5FMin: 1.91,
      cop5FMax: 1.91,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dl-series-central-ducted-18000",
      slug: "lps-legacy-dl-series-central-ducted-18000",
      name: "DL series 18 000 BTU",
      seriesId: "lps-legacy-dl-series",
      brandId: "lps-legacy",
      modelNumber: "DL series 18k",
      normalizedModelNumber: "dl-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 14700,
      heatingCapacity5FMaxBtu: 14700,
      seer2Min: 16.1,
      seer2Max: 16.1,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 2.2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dl-series-central-ducted-24000",
      slug: "lps-legacy-dl-series-central-ducted-24000",
      name: "DL series 24 000 BTU",
      seriesId: "lps-legacy-dl-series",
      brandId: "lps-legacy",
      modelNumber: "DL series 24k",
      normalizedModelNumber: "dl-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 22400,
      seer2Min: 16.1,
      seer2Max: 16.5,
      hspf2Min: 9.5,
      hspf2Max: 9.8,
      cop5FMin: 1.95,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dl-series-central-ducted-30000",
      slug: "lps-legacy-dl-series-central-ducted-30000",
      name: "DL series 30 000 BTU",
      seriesId: "lps-legacy-dl-series",
      brandId: "lps-legacy",
      modelNumber: "DL series 30k",
      normalizedModelNumber: "dl-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 22600,
      heatingCapacity5FMaxBtu: 22600,
      seer2Min: 15.5,
      seer2Max: 15.5,
      hspf2Min: 9.7,
      hspf2Max: 9.7,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dl-series-central-ducted-36000",
      slug: "lps-legacy-dl-series-central-ducted-36000",
      name: "DL series 36 000 BTU",
      seriesId: "lps-legacy-dl-series",
      brandId: "lps-legacy",
      modelNumber: "DL series 36k",
      normalizedModelNumber: "dl-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 27400,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 15.5,
      hspf2Min: 8.6,
      hspf2Max: 10,
      cop5FMin: 1.85,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlseries-central-ducted-48000",
      slug: "lps-legacy-dlseries-central-ducted-48000",
      name: "Dlseries 48 000 BTU",
      seriesId: "lps-legacy-dlseries",
      brandId: "lps-legacy",
      modelNumber: "Dlseries 48k",
      normalizedModelNumber: "dlseries-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 32000,
      heatingCapacity5FMaxBtu: 32000,
      seer2Min: 15.6,
      seer2Max: 15.6,
      hspf2Min: 9.4,
      hspf2Max: 9.4,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-central-ducted-18000",
      slug: "lps-legacy-d5f-series-central-ducted-18000",
      name: "D5F Series 18 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 18k",
      normalizedModelNumber: "d5f-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 18.2,
      seer2Max: 19,
      hspf2Min: 9.8,
      hspf2Max: 10.2,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-central-ducted-24000",
      slug: "lps-legacy-d5f-series-central-ducted-24000",
      name: "D5F Series 24 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 24k",
      normalizedModelNumber: "d5f-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 18.2,
      seer2Max: 19.8,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 1.87,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-central-ducted-30000",
      slug: "lps-legacy-d5f-series-central-ducted-30000",
      name: "D5F Series 30 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 30k",
      normalizedModelNumber: "d5f-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 19400,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 16.7,
      seer2Max: 17.2,
      hspf2Min: 8.8,
      hspf2Max: 10.8,
      cop5FMin: 1.96,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-central-ducted-36000",
      slug: "lps-legacy-d5f-series-central-ducted-36000",
      name: "D5F Series 36 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 36k",
      normalizedModelNumber: "d5f-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 25600,
      heatingCapacity5FMaxBtu: 31800,
      seer2Min: 16.2,
      seer2Max: 18,
      hspf2Min: 8.7,
      hspf2Max: 10.3,
      cop5FMin: 1.9,
      cop5FMax: 2.06,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-central-ducted-48000",
      slug: "lps-legacy-d5f-series-central-ducted-48000",
      name: "D5F Series 48 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 48k",
      normalizedModelNumber: "d5f-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 32400,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 17.8,
      hspf2Min: 8.4,
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
      id: "lps-legacy-d5c-series-central-ducted-18000",
      slug: "lps-legacy-d5c-series-central-ducted-18000",
      name: "D5C Series 18 000 BTU",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series 18k",
      normalizedModelNumber: "d5c-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 12600,
      seer2Min: 18.8,
      seer2Max: 18.8,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-central-ducted-30000",
      slug: "lps-legacy-d5c-series-central-ducted-30000",
      name: "D5C Series 30 000 BTU",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series 30k",
      normalizedModelNumber: "d5c-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 18500,
      heatingCapacity5FMaxBtu: 18500,
      seer2Min: 18.6,
      seer2Max: 18.6,
      hspf2Min: 8.7,
      hspf2Max: 8.7,
      cop5FMin: 1.99,
      cop5FMax: 1.99,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-36000",
      slug: "lps-legacy-d5f-series-wall-single-36000",
      name: "D5F Series 36 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 36k",
      normalizedModelNumber: "d5f-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36600,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 31600,
      seer2Min: 17.8,
      seer2Max: 21.3,
      hspf2Min: 10.4,
      hspf2Max: 11.1,
      cop5FMin: 1.95,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-6000",
      slug: "lps-legacy-d5f-series-wall-single-6000",
      name: "D5F Series 6 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 6k",
      normalizedModelNumber: "d5f-series-6000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6500,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 11000,
      seer2Min: 21.5,
      seer2Max: 33.1,
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
      id: "lps-legacy-d5f-series-wall-single-9000",
      slug: "lps-legacy-d5f-series-wall-single-9000",
      name: "D5F Series 9 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 9k",
      normalizedModelNumber: "d5f-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 11000,
      seer2Min: 19,
      seer2Max: 31.5,
      hspf2Min: 9.1,
      hspf2Max: 14.6,
      cop5FMin: 1.8,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-12000",
      slug: "lps-legacy-d5f-series-wall-single-12000",
      name: "D5F Series 12 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 12k",
      normalizedModelNumber: "d5f-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 11000,
      seer2Min: 19,
      seer2Max: 28,
      hspf2Min: 9.5,
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
      id: "lps-legacy-d5f-series-wall-single-18000",
      slug: "lps-legacy-d5f-series-wall-single-18000",
      name: "D5F Series 18 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 18k",
      normalizedModelNumber: "d5f-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 13600,
      heatingCapacity5FMaxBtu: 19300,
      seer2Min: 18,
      seer2Max: 24.5,
      hspf2Min: 10.3,
      hspf2Max: 15.2,
      cop5FMin: 1.86,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-15000",
      slug: "lps-legacy-d5f-series-wall-single-15000",
      name: "D5F Series 15 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 15k",
      normalizedModelNumber: "d5f-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 14100,
      heatingCapacity5FMaxBtu: 14900,
      seer2Min: 20,
      seer2Max: 23.9,
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
      id: "lps-legacy-d5f-series-wall-single-24000",
      slug: "lps-legacy-d5f-series-wall-single-24000",
      name: "D5F Series 24 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 24k",
      normalizedModelNumber: "d5f-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 17100,
      heatingCapacity5FMaxBtu: 21600,
      seer2Min: 17,
      seer2Max: 22.1,
      hspf2Min: 8.5,
      hspf2Max: 13.5,
      cop5FMin: 2.01,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-20000",
      slug: "lps-legacy-d5f-series-wall-single-20000",
      name: "D5F Series 20 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 20k",
      normalizedModelNumber: "d5f-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 20200,
      heatingCapacity5FMaxBtu: 20200,
      seer2Min: 20.5,
      seer2Max: 20.5,
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
      id: "lps-legacy-d5f-series-wall-single-30000",
      slug: "lps-legacy-d5f-series-wall-single-30000",
      name: "D5F Series 30 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 30k",
      normalizedModelNumber: "d5f-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19.6,
      seer2Max: 22.4,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 1.94,
      cop5FMax: 2.03,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-standard-wall-single-18000",
      slug: "lps-legacy-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "lps-legacy-standard",
      brandId: "lps-legacy",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11200,
      heatingCapacity5FMaxBtu: 11200,
      seer2Min: 17.7,
      seer2Max: 27.8,
      hspf2Min: 11.5,
      hspf2Max: 10.2,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-48000",
      slug: "lps-legacy-d5f-series-wall-single-48000",
      name: "D5F Series 48 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 48k",
      normalizedModelNumber: "d5f-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 36600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16.8,
      seer2Max: 19.9,
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
      id: "lps-legacy-d5f-series-wall-single-60000",
      slug: "lps-legacy-d5f-series-wall-single-60000",
      name: "D5F Series 60 000 BTU",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series 60k",
      normalizedModelNumber: "d5f-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 45000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.9,
      seer2Max: 15.9,
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
      id: "lps-legacy-d5c-series-wall-single-18000",
      slug: "lps-legacy-d5c-series-wall-single-18000",
      name: "D5C Series 18 000 BTU",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series 18k",
      normalizedModelNumber: "d5c-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 11700,
      heatingCapacity5FMaxBtu: 17600,
      seer2Min: 20,
      seer2Max: 25.2,
      hspf2Min: 9.1,
      hspf2Max: 10.5,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-24000",
      slug: "lps-legacy-d5c-series-wall-single-24000",
      name: "D5C Series 24 000 BTU",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series 24k",
      normalizedModelNumber: "d5c-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 17800,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 20,
      seer2Max: 25,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-30000",
      slug: "lps-legacy-d5c-series-wall-single-30000",
      name: "D5C Series 30 000 BTU",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series 30k",
      normalizedModelNumber: "d5c-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 26000,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 19.5,
      seer2Max: 25,
      hspf2Min: 9.5,
      hspf2Max: 10.7,
      cop5FMin: 1.95,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-36000",
      slug: "lps-legacy-d5c-series-wall-single-36000",
      name: "D5C Series 36 000 BTU",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series 36k",
      normalizedModelNumber: "d5c-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 26400,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 19.5,
      seer2Max: 24,
      hspf2Min: 9.2,
      hspf2Max: 10.7,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-48000",
      slug: "lps-legacy-d5c-series-wall-single-48000",
      name: "D5C Series 48 000 BTU",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series 48k",
      normalizedModelNumber: "d5c-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 37400,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 20.2,
      seer2Max: 24,
      hspf2Min: 10.4,
      hspf2Max: 11.3,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-42000",
      slug: "lps-legacy-d5c-series-wall-single-42000",
      name: "D5C Series 42 000 BTU",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series 42k",
      normalizedModelNumber: "d5c-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 20.5,
      seer2Max: 20.5,
      hspf2Min: 10.6,
      hspf2Max: 10.6,
      cop5FMin: 2.1,
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
      id: "lps-legacy-dlclrch36aak",
      modelNumber: "DLCLRCH36AAK",
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
      id: "lps-legacy-dlclrch58aak",
      modelNumber: "DLCLRCH58AAK",
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
      id: "lps-legacy-d5cmrah55fak",
      modelNumber: "D5CMRAH55FAK",
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
      id: "lps-legacy-dlcsrbh18aak",
      modelNumber: "DLCSRBH18AAK",
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
      id: "lps-legacy-dlcsrbh30aak",
      modelNumber: "DLCSRBH30AAK",
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
      id: "lps-legacy-dlcerbh24aak",
      modelNumber: "DLCERBH24AAK",
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
      id: "lps-legacy-dlcsrbh12aaj",
      modelNumber: "DLCSRBH12AAJ",
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
      id: "lps-legacy-dlcurah48abk",
      modelNumber: "DLCURAH48ABK",
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
      id: "lps-legacy-d5cshah18aak",
      modelNumber: "D5CSHAH18AAK",
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
      id: "lps-legacy-d5cuhah24aak",
      modelNumber: "D5CUHAH24AAK",
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
      id: "lps-legacy-d5cshah24aak",
      modelNumber: "D5CSHAH24AAK",
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
      id: "lps-legacy-d5cuhah30aak",
      modelNumber: "D5CUHAH30AAK",
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
      id: "lps-legacy-d5csrah30aak",
      modelNumber: "D5CSRAH30AAK",
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
      id: "lps-legacy-d5curah36aak",
      modelNumber: "D5CURAH36AAK",
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
      id: "lps-legacy-d5cprah06aak",
      modelNumber: "D5CPRAH06AAK",
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
      id: "lps-legacy-d5csrah09aak",
      modelNumber: "D5CSRAH09AAK",
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
      id: "lps-legacy-d5cprah09aak",
      modelNumber: "D5CPRAH09AAK",
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
      id: "lps-legacy-d5csrah12aak",
      modelNumber: "D5CSRAH12AAK",
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
      id: "lps-legacy-d5cvrah24aak",
      modelNumber: "D5CVRAH24AAK",
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
      id: "lps-legacy-d5cvrah18aak",
      modelNumber: "D5CVRAH18AAK",
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
      id: "lps-legacy-d5cmrah18cak",
      modelNumber: "D5CMRAH18CAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cerah18aak",
      modelNumber: "D5CERAH18AAK",
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
      id: "lps-legacy-d5cmrah24dak",
      modelNumber: "D5CMRAH24DAK",
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
      id: "lps-legacy-d5cmrah30eak",
      modelNumber: "D5CMRAH30EAK",
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
      id: "lps-legacy-d5cmrah36eak",
      modelNumber: "D5CMRAH36EAK",
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
      id: "lps-legacy-d5cmrah48fak",
      modelNumber: "D5CMRAH48FAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "lps-legacy-standard-wall-single-36000-cfg-1",
      slug: "lps-legacy-standard-wall-single-36000-cfg-1",
      modelId: "lps-legacy-standard-wall-single-36000",
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
      id: "lps-legacy-standard-wall-single-36000-cfg-2",
      slug: "lps-legacy-standard-wall-single-36000-cfg-2",
      modelId: "lps-legacy-standard-wall-single-36000",
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
      id: "lps-legacy-standard-wall-single-36000-cfg-3",
      slug: "lps-legacy-standard-wall-single-36000-cfg-3",
      modelId: "lps-legacy-standard-wall-single-36000",
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
      id: "lps-legacy-standard-wall-single-36000-cfg-4",
      slug: "lps-legacy-standard-wall-single-36000-cfg-4",
      modelId: "lps-legacy-standard-wall-single-36000",
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
      id: "lps-legacy-standard-wall-single-36000-cfg-5",
      slug: "lps-legacy-standard-wall-single-36000-cfg-5",
      modelId: "lps-legacy-standard-wall-single-36000",
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
      id: "lps-legacy-standard-wall-single-36000-cfg-6",
      slug: "lps-legacy-standard-wall-single-36000-cfg-6",
      modelId: "lps-legacy-standard-wall-single-36000",
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
      id: "lps-legacy-standard-wall-single-36000-cfg-7",
      slug: "lps-legacy-standard-wall-single-36000-cfg-7",
      modelId: "lps-legacy-standard-wall-single-36000",
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
      id: "lps-legacy-dlc-series-wall-single-48000-cfg-1",
      slug: "lps-legacy-dlc-series-wall-single-48000-cfg-1",
      modelId: "lps-legacy-dlc-series-wall-single-48000",
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
      id: "lps-legacy-dlc-series-wall-single-48000-cfg-2",
      slug: "lps-legacy-dlc-series-wall-single-48000-cfg-2",
      modelId: "lps-legacy-dlc-series-wall-single-48000",
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
      id: "lps-legacy-dlc-series-wall-single-48000-cfg-3",
      slug: "lps-legacy-dlc-series-wall-single-48000-cfg-3",
      modelId: "lps-legacy-dlc-series-wall-single-48000",
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
      id: "lps-legacy-dlc-series-wall-single-48000-cfg-4",
      slug: "lps-legacy-dlc-series-wall-single-48000-cfg-4",
      modelId: "lps-legacy-dlc-series-wall-single-48000",
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
      id: "lps-legacy-standard-wall-single-60000-cfg-1",
      slug: "lps-legacy-standard-wall-single-60000-cfg-1",
      modelId: "lps-legacy-standard-wall-single-60000",
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
      id: "lps-legacy-standard-wall-single-60000-cfg-2",
      slug: "lps-legacy-standard-wall-single-60000-cfg-2",
      modelId: "lps-legacy-standard-wall-single-60000",
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
      id: "lps-legacy-standard-wall-single-60000-cfg-3",
      slug: "lps-legacy-standard-wall-single-60000-cfg-3",
      modelId: "lps-legacy-standard-wall-single-60000",
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
      id: "lps-legacy-standard-wall-single-60000-cfg-4",
      slug: "lps-legacy-standard-wall-single-60000-cfg-4",
      modelId: "lps-legacy-standard-wall-single-60000",
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
      id: "lps-legacy-standard-wall-single-60000-cfg-5",
      slug: "lps-legacy-standard-wall-single-60000-cfg-5",
      modelId: "lps-legacy-standard-wall-single-60000",
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
      id: "lps-legacy-standard-wall-single-60000-cfg-6",
      slug: "lps-legacy-standard-wall-single-60000-cfg-6",
      modelId: "lps-legacy-standard-wall-single-60000",
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
      id: "lps-legacy-dlc-series-wall-single-18000-cfg-1",
      slug: "lps-legacy-dlc-series-wall-single-18000-cfg-1",
      modelId: "lps-legacy-dlc-series-wall-single-18000",
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
      id: "lps-legacy-dlc-series-wall-single-18000-cfg-2",
      slug: "lps-legacy-dlc-series-wall-single-18000-cfg-2",
      modelId: "lps-legacy-dlc-series-wall-single-18000",
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
      id: "lps-legacy-dlc-series-wall-single-18000-cfg-3",
      slug: "lps-legacy-dlc-series-wall-single-18000-cfg-3",
      modelId: "lps-legacy-dlc-series-wall-single-18000",
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
      id: "lps-legacy-dlc-series-wall-single-18000-cfg-4",
      slug: "lps-legacy-dlc-series-wall-single-18000-cfg-4",
      modelId: "lps-legacy-dlc-series-wall-single-18000",
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
      id: "lps-legacy-dlc-series-wall-single-18000-cfg-5",
      slug: "lps-legacy-dlc-series-wall-single-18000-cfg-5",
      modelId: "lps-legacy-dlc-series-wall-single-18000",
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
      id: "lps-legacy-standard-wall-single-12000-cfg-1",
      slug: "lps-legacy-standard-wall-single-12000-cfg-1",
      modelId: "lps-legacy-standard-wall-single-12000",
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
      id: "lps-legacy-standard-wall-single-12000-cfg-2",
      slug: "lps-legacy-standard-wall-single-12000-cfg-2",
      modelId: "lps-legacy-standard-wall-single-12000",
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
      id: "lps-legacy-standard-wall-single-12000-cfg-3",
      slug: "lps-legacy-standard-wall-single-12000-cfg-3",
      modelId: "lps-legacy-standard-wall-single-12000",
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
      id: "lps-legacy-standard-wall-single-12000-cfg-4",
      slug: "lps-legacy-standard-wall-single-12000-cfg-4",
      modelId: "lps-legacy-standard-wall-single-12000",
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
      id: "lps-legacy-standard-wall-single-12000-cfg-5",
      slug: "lps-legacy-standard-wall-single-12000-cfg-5",
      modelId: "lps-legacy-standard-wall-single-12000",
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
      id: "lps-legacy-standard-wall-single-12000-cfg-6",
      slug: "lps-legacy-standard-wall-single-12000-cfg-6",
      modelId: "lps-legacy-standard-wall-single-12000",
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
      id: "lps-legacy-standard-wall-single-12000-cfg-7",
      slug: "lps-legacy-standard-wall-single-12000-cfg-7",
      modelId: "lps-legacy-standard-wall-single-12000",
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
      id: "lps-legacy-standard-wall-single-12000-cfg-8",
      slug: "lps-legacy-standard-wall-single-12000-cfg-8",
      modelId: "lps-legacy-standard-wall-single-12000",
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
      id: "lps-legacy-dlc-series-wall-single-30000-cfg-1",
      slug: "lps-legacy-dlc-series-wall-single-30000-cfg-1",
      modelId: "lps-legacy-dlc-series-wall-single-30000",
      outdoorUnitId: "lps-legacy-dlcsrbh30aak",
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
      id: "lps-legacy-dlc-series-wall-single-30000-cfg-2",
      slug: "lps-legacy-dlc-series-wall-single-30000-cfg-2",
      modelId: "lps-legacy-dlc-series-wall-single-30000",
      outdoorUnitId: "lps-legacy-dlcerbh30aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlc-series-wall-single-30000-cfg-3",
      slug: "lps-legacy-dlc-series-wall-single-30000-cfg-3",
      modelId: "lps-legacy-dlc-series-wall-single-30000",
      outdoorUnitId: "lps-legacy-dlcsrbh30aak11",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-standard-wall-single-24000-cfg-1",
      slug: "lps-legacy-standard-wall-single-24000-cfg-1",
      modelId: "lps-legacy-standard-wall-single-24000",
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
      id: "lps-legacy-standard-wall-single-24000-cfg-2",
      slug: "lps-legacy-standard-wall-single-24000-cfg-2",
      modelId: "lps-legacy-standard-wall-single-24000",
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
      id: "lps-legacy-standard-wall-single-48000-cfg-1",
      slug: "lps-legacy-standard-wall-single-48000-cfg-1",
      modelId: "lps-legacy-standard-wall-single-48000",
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
      id: "lps-legacy-standard-wall-single-48000-cfg-2",
      slug: "lps-legacy-standard-wall-single-48000-cfg-2",
      modelId: "lps-legacy-standard-wall-single-48000",
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
      id: "lps-legacy-dlc-series-wall-single-12000-cfg-1",
      slug: "lps-legacy-dlc-series-wall-single-12000-cfg-1",
      modelId: "lps-legacy-dlc-series-wall-single-12000",
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
      id: "lps-legacy-dlc-series-wall-single-12000-cfg-2",
      slug: "lps-legacy-dlc-series-wall-single-12000-cfg-2",
      modelId: "lps-legacy-dlc-series-wall-single-12000",
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
      id: "lps-legacy-dlc-series-wall-single-12000-cfg-3",
      slug: "lps-legacy-dlc-series-wall-single-12000-cfg-3",
      modelId: "lps-legacy-dlc-series-wall-single-12000",
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
      id: "lps-legacy-dlc-series-wall-single-12000-cfg-4",
      slug: "lps-legacy-dlc-series-wall-single-12000-cfg-4",
      modelId: "lps-legacy-dlc-series-wall-single-12000",
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
      id: "lps-legacy-dlc-series-wall-single-12000-cfg-5",
      slug: "lps-legacy-dlc-series-wall-single-12000-cfg-5",
      modelId: "lps-legacy-dlc-series-wall-single-12000",
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
      id: "lps-legacy-dlc-series-wall-single-12000-cfg-6",
      slug: "lps-legacy-dlc-series-wall-single-12000-cfg-6",
      modelId: "lps-legacy-dlc-series-wall-single-12000",
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
      id: "lps-legacy-dlc-series-wall-single-12000-cfg-7",
      slug: "lps-legacy-dlc-series-wall-single-12000-cfg-7",
      modelId: "lps-legacy-dlc-series-wall-single-12000",
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
      id: "lps-legacy-dlc-series-wall-single-6000-cfg-1",
      slug: "lps-legacy-dlc-series-wall-single-6000-cfg-1",
      modelId: "lps-legacy-dlc-series-wall-single-6000",
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
      id: "lps-legacy-dlc-series-wall-single-6000-cfg-2",
      slug: "lps-legacy-dlc-series-wall-single-6000-cfg-2",
      modelId: "lps-legacy-dlc-series-wall-single-6000",
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
      id: "lps-legacy-dlc-series-wall-single-6000-cfg-3",
      slug: "lps-legacy-dlc-series-wall-single-6000-cfg-3",
      modelId: "lps-legacy-dlc-series-wall-single-6000",
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
      id: "lps-legacy-dlc-series-wall-single-24000-cfg-1",
      slug: "lps-legacy-dlc-series-wall-single-24000-cfg-1",
      modelId: "lps-legacy-dlc-series-wall-single-24000",
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
      id: "lps-legacy-dlc-series-wall-single-24000-cfg-2",
      slug: "lps-legacy-dlc-series-wall-single-24000-cfg-2",
      modelId: "lps-legacy-dlc-series-wall-single-24000",
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
      id: "lps-legacy-dlc-series-wall-single-24000-cfg-3",
      slug: "lps-legacy-dlc-series-wall-single-24000-cfg-3",
      modelId: "lps-legacy-dlc-series-wall-single-24000",
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
      id: "lps-legacy-dlc-series-wall-single-24000-cfg-4",
      slug: "lps-legacy-dlc-series-wall-single-24000-cfg-4",
      modelId: "lps-legacy-dlc-series-wall-single-24000",
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
      id: "lps-legacy-dlc-series-wall-single-9000-cfg-1",
      slug: "lps-legacy-dlc-series-wall-single-9000-cfg-1",
      modelId: "lps-legacy-dlc-series-wall-single-9000",
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
      id: "lps-legacy-dlc-series-wall-single-9000-cfg-2",
      slug: "lps-legacy-dlc-series-wall-single-9000-cfg-2",
      modelId: "lps-legacy-dlc-series-wall-single-9000",
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
      id: "lps-legacy-dlc-series-wall-single-9000-cfg-3",
      slug: "lps-legacy-dlc-series-wall-single-9000-cfg-3",
      modelId: "lps-legacy-dlc-series-wall-single-9000",
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
      id: "lps-legacy-dlc-series-wall-single-9000-cfg-4",
      slug: "lps-legacy-dlc-series-wall-single-9000-cfg-4",
      modelId: "lps-legacy-dlc-series-wall-single-9000",
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
      id: "lps-legacy-dlc-series-wall-single-9000-cfg-5",
      slug: "lps-legacy-dlc-series-wall-single-9000-cfg-5",
      modelId: "lps-legacy-dlc-series-wall-single-9000",
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
      id: "lps-legacy-dlc-series-wall-single-9000-cfg-6",
      slug: "lps-legacy-dlc-series-wall-single-9000-cfg-6",
      modelId: "lps-legacy-dlc-series-wall-single-9000",
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
      id: "lps-legacy-dlc-series-wall-single-15000-cfg-1",
      slug: "lps-legacy-dlc-series-wall-single-15000-cfg-1",
      modelId: "lps-legacy-dlc-series-wall-single-15000",
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
      id: "lps-legacy-dlseries-central-ducted-60000-cfg-1",
      slug: "lps-legacy-dlseries-central-ducted-60000-cfg-1",
      modelId: "lps-legacy-dlseries-central-ducted-60000",
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
      id: "lps-legacy-dlseries-central-ducted-60000-cfg-2",
      slug: "lps-legacy-dlseries-central-ducted-60000-cfg-2",
      modelId: "lps-legacy-dlseries-central-ducted-60000",
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
      id: "lps-legacy-dl-series-central-ducted-18000-cfg-1",
      slug: "lps-legacy-dl-series-central-ducted-18000-cfg-1",
      modelId: "lps-legacy-dl-series-central-ducted-18000",
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
      id: "lps-legacy-dl-series-central-ducted-24000-cfg-1",
      slug: "lps-legacy-dl-series-central-ducted-24000-cfg-1",
      modelId: "lps-legacy-dl-series-central-ducted-24000",
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
      id: "lps-legacy-dl-series-central-ducted-24000-cfg-2",
      slug: "lps-legacy-dl-series-central-ducted-24000-cfg-2",
      modelId: "lps-legacy-dl-series-central-ducted-24000",
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
      id: "lps-legacy-dl-series-central-ducted-30000-cfg-1",
      slug: "lps-legacy-dl-series-central-ducted-30000-cfg-1",
      modelId: "lps-legacy-dl-series-central-ducted-30000",
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
      id: "lps-legacy-dl-series-central-ducted-36000-cfg-1",
      slug: "lps-legacy-dl-series-central-ducted-36000-cfg-1",
      modelId: "lps-legacy-dl-series-central-ducted-36000",
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
      id: "lps-legacy-dl-series-central-ducted-36000-cfg-2",
      slug: "lps-legacy-dl-series-central-ducted-36000-cfg-2",
      modelId: "lps-legacy-dl-series-central-ducted-36000",
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
      id: "lps-legacy-dlseries-central-ducted-48000-cfg-1",
      slug: "lps-legacy-dlseries-central-ducted-48000-cfg-1",
      modelId: "lps-legacy-dlseries-central-ducted-48000",
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
      id: "lps-legacy-d5f-series-central-ducted-18000-cfg-1",
      slug: "lps-legacy-d5f-series-central-ducted-18000-cfg-1",
      modelId: "lps-legacy-d5f-series-central-ducted-18000",
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
      id: "lps-legacy-d5f-series-central-ducted-18000-cfg-2",
      slug: "lps-legacy-d5f-series-central-ducted-18000-cfg-2",
      modelId: "lps-legacy-d5f-series-central-ducted-18000",
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
      id: "lps-legacy-d5f-series-central-ducted-18000-cfg-3",
      slug: "lps-legacy-d5f-series-central-ducted-18000-cfg-3",
      modelId: "lps-legacy-d5f-series-central-ducted-18000",
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
      id: "lps-legacy-d5f-series-central-ducted-18000-cfg-4",
      slug: "lps-legacy-d5f-series-central-ducted-18000-cfg-4",
      modelId: "lps-legacy-d5f-series-central-ducted-18000",
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
      id: "lps-legacy-d5f-series-central-ducted-24000-cfg-1",
      slug: "lps-legacy-d5f-series-central-ducted-24000-cfg-1",
      modelId: "lps-legacy-d5f-series-central-ducted-24000",
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
      id: "lps-legacy-d5f-series-central-ducted-24000-cfg-2",
      slug: "lps-legacy-d5f-series-central-ducted-24000-cfg-2",
      modelId: "lps-legacy-d5f-series-central-ducted-24000",
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
      id: "lps-legacy-d5f-series-central-ducted-24000-cfg-3",
      slug: "lps-legacy-d5f-series-central-ducted-24000-cfg-3",
      modelId: "lps-legacy-d5f-series-central-ducted-24000",
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
      id: "lps-legacy-d5f-series-central-ducted-24000-cfg-4",
      slug: "lps-legacy-d5f-series-central-ducted-24000-cfg-4",
      modelId: "lps-legacy-d5f-series-central-ducted-24000",
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
      id: "lps-legacy-d5f-series-central-ducted-24000-cfg-5",
      slug: "lps-legacy-d5f-series-central-ducted-24000-cfg-5",
      modelId: "lps-legacy-d5f-series-central-ducted-24000",
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
      id: "lps-legacy-d5f-series-central-ducted-30000-cfg-1",
      slug: "lps-legacy-d5f-series-central-ducted-30000-cfg-1",
      modelId: "lps-legacy-d5f-series-central-ducted-30000",
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
      id: "lps-legacy-d5f-series-central-ducted-30000-cfg-2",
      slug: "lps-legacy-d5f-series-central-ducted-30000-cfg-2",
      modelId: "lps-legacy-d5f-series-central-ducted-30000",
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
      id: "lps-legacy-d5f-series-central-ducted-30000-cfg-3",
      slug: "lps-legacy-d5f-series-central-ducted-30000-cfg-3",
      modelId: "lps-legacy-d5f-series-central-ducted-30000",
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
      id: "lps-legacy-d5f-series-central-ducted-30000-cfg-4",
      slug: "lps-legacy-d5f-series-central-ducted-30000-cfg-4",
      modelId: "lps-legacy-d5f-series-central-ducted-30000",
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
      id: "lps-legacy-d5f-series-central-ducted-36000-cfg-1",
      slug: "lps-legacy-d5f-series-central-ducted-36000-cfg-1",
      modelId: "lps-legacy-d5f-series-central-ducted-36000",
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
      id: "lps-legacy-d5f-series-central-ducted-36000-cfg-2",
      slug: "lps-legacy-d5f-series-central-ducted-36000-cfg-2",
      modelId: "lps-legacy-d5f-series-central-ducted-36000",
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
      id: "lps-legacy-d5f-series-central-ducted-36000-cfg-3",
      slug: "lps-legacy-d5f-series-central-ducted-36000-cfg-3",
      modelId: "lps-legacy-d5f-series-central-ducted-36000",
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
      id: "lps-legacy-d5f-series-central-ducted-36000-cfg-4",
      slug: "lps-legacy-d5f-series-central-ducted-36000-cfg-4",
      modelId: "lps-legacy-d5f-series-central-ducted-36000",
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
      id: "lps-legacy-d5f-series-central-ducted-48000-cfg-1",
      slug: "lps-legacy-d5f-series-central-ducted-48000-cfg-1",
      modelId: "lps-legacy-d5f-series-central-ducted-48000",
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
      id: "lps-legacy-d5f-series-central-ducted-48000-cfg-2",
      slug: "lps-legacy-d5f-series-central-ducted-48000-cfg-2",
      modelId: "lps-legacy-d5f-series-central-ducted-48000",
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
      id: "lps-legacy-d5f-series-central-ducted-48000-cfg-3",
      slug: "lps-legacy-d5f-series-central-ducted-48000-cfg-3",
      modelId: "lps-legacy-d5f-series-central-ducted-48000",
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
      id: "lps-legacy-d5f-series-central-ducted-48000-cfg-4",
      slug: "lps-legacy-d5f-series-central-ducted-48000-cfg-4",
      modelId: "lps-legacy-d5f-series-central-ducted-48000",
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
      id: "lps-legacy-d5f-series-central-ducted-48000-cfg-5",
      slug: "lps-legacy-d5f-series-central-ducted-48000-cfg-5",
      modelId: "lps-legacy-d5f-series-central-ducted-48000",
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
      id: "lps-legacy-d5f-series-central-ducted-48000-cfg-6",
      slug: "lps-legacy-d5f-series-central-ducted-48000-cfg-6",
      modelId: "lps-legacy-d5f-series-central-ducted-48000",
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
      id: "lps-legacy-d5f-series-central-ducted-48000-cfg-7",
      slug: "lps-legacy-d5f-series-central-ducted-48000-cfg-7",
      modelId: "lps-legacy-d5f-series-central-ducted-48000",
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
      id: "lps-legacy-d5f-series-central-ducted-48000-cfg-8",
      slug: "lps-legacy-d5f-series-central-ducted-48000-cfg-8",
      modelId: "lps-legacy-d5f-series-central-ducted-48000",
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
      id: "lps-legacy-d5f-series-central-ducted-48000-cfg-9",
      slug: "lps-legacy-d5f-series-central-ducted-48000-cfg-9",
      modelId: "lps-legacy-d5f-series-central-ducted-48000",
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
      id: "lps-legacy-d5c-series-central-ducted-18000-cfg-1",
      slug: "lps-legacy-d5c-series-central-ducted-18000-cfg-1",
      modelId: "lps-legacy-d5c-series-central-ducted-18000",
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
      id: "lps-legacy-d5c-series-central-ducted-30000-cfg-1",
      slug: "lps-legacy-d5c-series-central-ducted-30000-cfg-1",
      modelId: "lps-legacy-d5c-series-central-ducted-30000",
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
      id: "lps-legacy-d5f-series-wall-single-36000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-36000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-36000",
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
      id: "lps-legacy-d5f-series-wall-single-36000-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-36000-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single-36000",
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
      id: "lps-legacy-d5f-series-wall-single-36000-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-36000-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single-36000",
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
      id: "lps-legacy-d5f-series-wall-single-36000-cfg-4",
      slug: "lps-legacy-d5f-series-wall-single-36000-cfg-4",
      modelId: "lps-legacy-d5f-series-wall-single-36000",
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
      id: "lps-legacy-d5f-series-wall-single-36000-cfg-5",
      slug: "lps-legacy-d5f-series-wall-single-36000-cfg-5",
      modelId: "lps-legacy-d5f-series-wall-single-36000",
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
      id: "lps-legacy-d5f-series-wall-single-36000-cfg-6",
      slug: "lps-legacy-d5f-series-wall-single-36000-cfg-6",
      modelId: "lps-legacy-d5f-series-wall-single-36000",
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
      id: "lps-legacy-d5f-series-wall-single-36000-cfg-7",
      slug: "lps-legacy-d5f-series-wall-single-36000-cfg-7",
      modelId: "lps-legacy-d5f-series-wall-single-36000",
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
      id: "lps-legacy-d5f-series-wall-single-6000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-6000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-6000",
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
      id: "lps-legacy-d5f-series-wall-single-6000-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-6000-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single-6000",
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
      id: "lps-legacy-d5f-series-wall-single-6000-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-6000-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single-6000",
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
      id: "lps-legacy-d5f-series-wall-single-6000-cfg-4",
      slug: "lps-legacy-d5f-series-wall-single-6000-cfg-4",
      modelId: "lps-legacy-d5f-series-wall-single-6000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-4",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-4",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-5",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-5",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-6",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-6",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-7",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-7",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-8",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-8",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-9",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-9",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-10",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-10",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-11",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-11",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-12",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-12",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-13",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-13",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-14",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-14",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-15",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-15",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-16",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-16",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-9000-cfg-17",
      slug: "lps-legacy-d5f-series-wall-single-9000-cfg-17",
      modelId: "lps-legacy-d5f-series-wall-single-9000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-4",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-4",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-5",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-5",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-6",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-6",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-7",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-7",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-8",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-8",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-9",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-9",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-10",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-10",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-11",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-11",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-12",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-12",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-13",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-13",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-12000-cfg-14",
      slug: "lps-legacy-d5f-series-wall-single-12000-cfg-14",
      modelId: "lps-legacy-d5f-series-wall-single-12000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-4",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-4",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-5",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-5",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-6",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-6",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-7",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-7",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-8",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-8",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-9",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-9",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-10",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-10",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-11",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-11",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-18000-cfg-12",
      slug: "lps-legacy-d5f-series-wall-single-18000-cfg-12",
      modelId: "lps-legacy-d5f-series-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-15000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-15000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-15000",
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
      id: "lps-legacy-d5f-series-wall-single-15000-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-15000-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single-15000",
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
      id: "lps-legacy-d5f-series-wall-single-15000-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-15000-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single-15000",
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
      id: "lps-legacy-d5f-series-wall-single-24000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-24000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-24000",
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
      id: "lps-legacy-d5f-series-wall-single-24000-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-24000-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single-24000",
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
      id: "lps-legacy-d5f-series-wall-single-24000-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-24000-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single-24000",
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
      id: "lps-legacy-d5f-series-wall-single-24000-cfg-4",
      slug: "lps-legacy-d5f-series-wall-single-24000-cfg-4",
      modelId: "lps-legacy-d5f-series-wall-single-24000",
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
      id: "lps-legacy-d5f-series-wall-single-24000-cfg-5",
      slug: "lps-legacy-d5f-series-wall-single-24000-cfg-5",
      modelId: "lps-legacy-d5f-series-wall-single-24000",
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
      id: "lps-legacy-d5f-series-wall-single-24000-cfg-6",
      slug: "lps-legacy-d5f-series-wall-single-24000-cfg-6",
      modelId: "lps-legacy-d5f-series-wall-single-24000",
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
      id: "lps-legacy-d5f-series-wall-single-24000-cfg-7",
      slug: "lps-legacy-d5f-series-wall-single-24000-cfg-7",
      modelId: "lps-legacy-d5f-series-wall-single-24000",
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
      id: "lps-legacy-d5f-series-wall-single-24000-cfg-8",
      slug: "lps-legacy-d5f-series-wall-single-24000-cfg-8",
      modelId: "lps-legacy-d5f-series-wall-single-24000",
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
      id: "lps-legacy-d5f-series-wall-single-20000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-20000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-20000",
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
      id: "lps-legacy-d5f-series-wall-single-30000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-30000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-30000",
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
      id: "lps-legacy-d5f-series-wall-single-30000-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-30000-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single-30000",
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
      id: "lps-legacy-d5f-series-wall-single-30000-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-30000-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single-30000",
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
      id: "lps-legacy-standard-wall-single-18000-cfg-1",
      slug: "lps-legacy-standard-wall-single-18000-cfg-1",
      modelId: "lps-legacy-standard-wall-single-18000",
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
      id: "lps-legacy-standard-wall-single-18000-cfg-2",
      slug: "lps-legacy-standard-wall-single-18000-cfg-2",
      modelId: "lps-legacy-standard-wall-single-18000",
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
      id: "lps-legacy-d5f-series-wall-single-48000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-48000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-48000",
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
      id: "lps-legacy-d5f-series-wall-single-48000-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-48000-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single-48000",
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
      id: "lps-legacy-d5f-series-wall-single-48000-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-48000-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single-48000",
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
      id: "lps-legacy-d5f-series-wall-single-48000-cfg-4",
      slug: "lps-legacy-d5f-series-wall-single-48000-cfg-4",
      modelId: "lps-legacy-d5f-series-wall-single-48000",
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
      id: "lps-legacy-d5f-series-wall-single-48000-cfg-5",
      slug: "lps-legacy-d5f-series-wall-single-48000-cfg-5",
      modelId: "lps-legacy-d5f-series-wall-single-48000",
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
      id: "lps-legacy-d5f-series-wall-single-48000-cfg-6",
      slug: "lps-legacy-d5f-series-wall-single-48000-cfg-6",
      modelId: "lps-legacy-d5f-series-wall-single-48000",
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
      id: "lps-legacy-d5f-series-wall-single-48000-cfg-7",
      slug: "lps-legacy-d5f-series-wall-single-48000-cfg-7",
      modelId: "lps-legacy-d5f-series-wall-single-48000",
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
      id: "lps-legacy-d5f-series-wall-single-60000-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-60000-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single-60000",
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
      id: "lps-legacy-d5c-series-wall-single-18000-cfg-1",
      slug: "lps-legacy-d5c-series-wall-single-18000-cfg-1",
      modelId: "lps-legacy-d5c-series-wall-single-18000",
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
      id: "lps-legacy-d5c-series-wall-single-18000-cfg-2",
      slug: "lps-legacy-d5c-series-wall-single-18000-cfg-2",
      modelId: "lps-legacy-d5c-series-wall-single-18000",
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
      id: "lps-legacy-d5c-series-wall-single-18000-cfg-3",
      slug: "lps-legacy-d5c-series-wall-single-18000-cfg-3",
      modelId: "lps-legacy-d5c-series-wall-single-18000",
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
      id: "lps-legacy-d5c-series-wall-single-18000-cfg-4",
      slug: "lps-legacy-d5c-series-wall-single-18000-cfg-4",
      modelId: "lps-legacy-d5c-series-wall-single-18000",
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
      id: "lps-legacy-d5c-series-wall-single-18000-cfg-5",
      slug: "lps-legacy-d5c-series-wall-single-18000-cfg-5",
      modelId: "lps-legacy-d5c-series-wall-single-18000",
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
      id: "lps-legacy-d5c-series-wall-single-18000-cfg-6",
      slug: "lps-legacy-d5c-series-wall-single-18000-cfg-6",
      modelId: "lps-legacy-d5c-series-wall-single-18000",
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
      id: "lps-legacy-d5c-series-wall-single-18000-cfg-7",
      slug: "lps-legacy-d5c-series-wall-single-18000-cfg-7",
      modelId: "lps-legacy-d5c-series-wall-single-18000",
      outdoorUnitId: "lps-legacy-d5cerah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.3,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-24000-cfg-1",
      slug: "lps-legacy-d5c-series-wall-single-24000-cfg-1",
      modelId: "lps-legacy-d5c-series-wall-single-24000",
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
      id: "lps-legacy-d5c-series-wall-single-24000-cfg-2",
      slug: "lps-legacy-d5c-series-wall-single-24000-cfg-2",
      modelId: "lps-legacy-d5c-series-wall-single-24000",
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
      id: "lps-legacy-d5c-series-wall-single-24000-cfg-3",
      slug: "lps-legacy-d5c-series-wall-single-24000-cfg-3",
      modelId: "lps-legacy-d5c-series-wall-single-24000",
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
      id: "lps-legacy-d5c-series-wall-single-24000-cfg-4",
      slug: "lps-legacy-d5c-series-wall-single-24000-cfg-4",
      modelId: "lps-legacy-d5c-series-wall-single-24000",
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
      id: "lps-legacy-d5c-series-wall-single-24000-cfg-5",
      slug: "lps-legacy-d5c-series-wall-single-24000-cfg-5",
      modelId: "lps-legacy-d5c-series-wall-single-24000",
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
      id: "lps-legacy-d5c-series-wall-single-24000-cfg-6",
      slug: "lps-legacy-d5c-series-wall-single-24000-cfg-6",
      modelId: "lps-legacy-d5c-series-wall-single-24000",
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
      id: "lps-legacy-d5c-series-wall-single-30000-cfg-1",
      slug: "lps-legacy-d5c-series-wall-single-30000-cfg-1",
      modelId: "lps-legacy-d5c-series-wall-single-30000",
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
      id: "lps-legacy-d5c-series-wall-single-30000-cfg-2",
      slug: "lps-legacy-d5c-series-wall-single-30000-cfg-2",
      modelId: "lps-legacy-d5c-series-wall-single-30000",
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
      id: "lps-legacy-d5c-series-wall-single-30000-cfg-3",
      slug: "lps-legacy-d5c-series-wall-single-30000-cfg-3",
      modelId: "lps-legacy-d5c-series-wall-single-30000",
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
      id: "lps-legacy-d5c-series-wall-single-30000-cfg-4",
      slug: "lps-legacy-d5c-series-wall-single-30000-cfg-4",
      modelId: "lps-legacy-d5c-series-wall-single-30000",
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
      id: "lps-legacy-d5c-series-wall-single-30000-cfg-5",
      slug: "lps-legacy-d5c-series-wall-single-30000-cfg-5",
      modelId: "lps-legacy-d5c-series-wall-single-30000",
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
      id: "lps-legacy-d5c-series-wall-single-30000-cfg-6",
      slug: "lps-legacy-d5c-series-wall-single-30000-cfg-6",
      modelId: "lps-legacy-d5c-series-wall-single-30000",
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
      id: "lps-legacy-d5c-series-wall-single-36000-cfg-1",
      slug: "lps-legacy-d5c-series-wall-single-36000-cfg-1",
      modelId: "lps-legacy-d5c-series-wall-single-36000",
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
      id: "lps-legacy-d5c-series-wall-single-36000-cfg-2",
      slug: "lps-legacy-d5c-series-wall-single-36000-cfg-2",
      modelId: "lps-legacy-d5c-series-wall-single-36000",
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
      id: "lps-legacy-d5c-series-wall-single-36000-cfg-3",
      slug: "lps-legacy-d5c-series-wall-single-36000-cfg-3",
      modelId: "lps-legacy-d5c-series-wall-single-36000",
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
      id: "lps-legacy-d5c-series-wall-single-36000-cfg-4",
      slug: "lps-legacy-d5c-series-wall-single-36000-cfg-4",
      modelId: "lps-legacy-d5c-series-wall-single-36000",
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
      id: "lps-legacy-d5c-series-wall-single-36000-cfg-5",
      slug: "lps-legacy-d5c-series-wall-single-36000-cfg-5",
      modelId: "lps-legacy-d5c-series-wall-single-36000",
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
      id: "lps-legacy-d5c-series-wall-single-36000-cfg-6",
      slug: "lps-legacy-d5c-series-wall-single-36000-cfg-6",
      modelId: "lps-legacy-d5c-series-wall-single-36000",
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
      id: "lps-legacy-d5c-series-wall-single-48000-cfg-1",
      slug: "lps-legacy-d5c-series-wall-single-48000-cfg-1",
      modelId: "lps-legacy-d5c-series-wall-single-48000",
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
      id: "lps-legacy-d5c-series-wall-single-48000-cfg-2",
      slug: "lps-legacy-d5c-series-wall-single-48000-cfg-2",
      modelId: "lps-legacy-d5c-series-wall-single-48000",
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
      id: "lps-legacy-d5c-series-wall-single-48000-cfg-3",
      slug: "lps-legacy-d5c-series-wall-single-48000-cfg-3",
      modelId: "lps-legacy-d5c-series-wall-single-48000",
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
      id: "lps-legacy-d5c-series-wall-single-48000-cfg-4",
      slug: "lps-legacy-d5c-series-wall-single-48000-cfg-4",
      modelId: "lps-legacy-d5c-series-wall-single-48000",
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
      id: "lps-legacy-d5c-series-wall-single-48000-cfg-5",
      slug: "lps-legacy-d5c-series-wall-single-48000-cfg-5",
      modelId: "lps-legacy-d5c-series-wall-single-48000",
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
      id: "lps-legacy-d5c-series-wall-single-48000-cfg-6",
      slug: "lps-legacy-d5c-series-wall-single-48000-cfg-6",
      modelId: "lps-legacy-d5c-series-wall-single-48000",
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
      id: "lps-legacy-d5c-series-wall-single-48000-cfg-7",
      slug: "lps-legacy-d5c-series-wall-single-48000-cfg-7",
      modelId: "lps-legacy-d5c-series-wall-single-48000",
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
      id: "lps-legacy-d5c-series-wall-single-48000-cfg-8",
      slug: "lps-legacy-d5c-series-wall-single-48000-cfg-8",
      modelId: "lps-legacy-d5c-series-wall-single-48000",
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
      id: "lps-legacy-d5c-series-wall-single-42000-cfg-1",
      slug: "lps-legacy-d5c-series-wall-single-42000-cfg-1",
      modelId: "lps-legacy-d5c-series-wall-single-42000",
      outdoorUnitId: "lps-legacy-d5cmrah48fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "lps-legacy-standard-wall-single-36000-cfg-1",
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
      configurationId: "lps-legacy-standard-wall-single-36000-cfg-2",
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
      configurationId: "lps-legacy-standard-wall-single-36000-cfg-3",
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
      configurationId: "lps-legacy-standard-wall-single-36000-cfg-4",
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
      configurationId: "lps-legacy-standard-wall-single-36000-cfg-5",
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
      configurationId: "lps-legacy-standard-wall-single-36000-cfg-6",
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
      configurationId: "lps-legacy-standard-wall-single-36000-cfg-7",
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
      configurationId: "lps-legacy-dlc-series-wall-single-48000-cfg-1",
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
      configurationId: "lps-legacy-dlc-series-wall-single-48000-cfg-2",
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
      configurationId: "lps-legacy-dlc-series-wall-single-48000-cfg-3",
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
      configurationId: "lps-legacy-dlc-series-wall-single-48000-cfg-4",
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
      configurationId: "lps-legacy-standard-wall-single-60000-cfg-1",
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
      configurationId: "lps-legacy-standard-wall-single-60000-cfg-2",
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
      configurationId: "lps-legacy-standard-wall-single-60000-cfg-3",
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
      configurationId: "lps-legacy-standard-wall-single-60000-cfg-4",
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
      configurationId: "lps-legacy-standard-wall-single-60000-cfg-5",
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
      configurationId: "lps-legacy-standard-wall-single-60000-cfg-6",
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
      configurationId: "lps-legacy-dlc-series-wall-single-18000-cfg-1",
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
      configurationId: "lps-legacy-dlc-series-wall-single-18000-cfg-2",
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
      configurationId: "lps-legacy-dlc-series-wall-single-18000-cfg-3",
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
      configurationId: "lps-legacy-dlc-series-wall-single-18000-cfg-4",
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
      configurationId: "lps-legacy-dlc-series-wall-single-18000-cfg-5",
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
      configurationId: "lps-legacy-standard-wall-single-12000-cfg-1",
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
      configurationId: "lps-legacy-standard-wall-single-12000-cfg-2",
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
      configurationId: "lps-legacy-standard-wall-single-12000-cfg-3",
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
      configurationId: "lps-legacy-standard-wall-single-12000-cfg-4",
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
      configurationId: "lps-legacy-standard-wall-single-12000-cfg-5",
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
      configurationId: "lps-legacy-standard-wall-single-12000-cfg-6",
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
      configurationId: "lps-legacy-standard-wall-single-12000-cfg-7",
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
      configurationId: "lps-legacy-standard-wall-single-12000-cfg-8",
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
      configurationId: "lps-legacy-dlc-series-wall-single-30000-cfg-1",
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
      configurationId: "lps-legacy-dlc-series-wall-single-30000-cfg-2",
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
      configurationId: "lps-legacy-dlc-series-wall-single-30000-cfg-3",
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
      configurationId: "lps-legacy-standard-wall-single-24000-cfg-1",
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
      configurationId: "lps-legacy-standard-wall-single-24000-cfg-2",
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
      configurationId: "lps-legacy-standard-wall-single-48000-cfg-1",
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
      configurationId: "lps-legacy-standard-wall-single-48000-cfg-2",
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
      configurationId: "lps-legacy-dlc-series-wall-single-12000-cfg-1",
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
      configurationId: "lps-legacy-dlc-series-wall-single-12000-cfg-2",
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
      configurationId: "lps-legacy-dlc-series-wall-single-12000-cfg-3",
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
      configurationId: "lps-legacy-dlc-series-wall-single-12000-cfg-4",
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
      configurationId: "lps-legacy-dlc-series-wall-single-12000-cfg-5",
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
      configurationId: "lps-legacy-dlc-series-wall-single-12000-cfg-6",
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
      configurationId: "lps-legacy-dlc-series-wall-single-12000-cfg-7",
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
      configurationId: "lps-legacy-dlc-series-wall-single-6000-cfg-1",
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
      configurationId: "lps-legacy-dlc-series-wall-single-6000-cfg-2",
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
      configurationId: "lps-legacy-dlc-series-wall-single-6000-cfg-3",
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
      configurationId: "lps-legacy-dlc-series-wall-single-24000-cfg-1",
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
      configurationId: "lps-legacy-dlc-series-wall-single-24000-cfg-2",
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
      configurationId: "lps-legacy-dlc-series-wall-single-24000-cfg-3",
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
      configurationId: "lps-legacy-dlc-series-wall-single-24000-cfg-4",
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
      configurationId: "lps-legacy-dlc-series-wall-single-9000-cfg-1",
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
      configurationId: "lps-legacy-dlc-series-wall-single-9000-cfg-2",
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
      configurationId: "lps-legacy-dlc-series-wall-single-9000-cfg-3",
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
      configurationId: "lps-legacy-dlc-series-wall-single-9000-cfg-4",
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
      configurationId: "lps-legacy-dlc-series-wall-single-9000-cfg-5",
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
      configurationId: "lps-legacy-dlc-series-wall-single-9000-cfg-6",
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
      configurationId: "lps-legacy-dlc-series-wall-single-15000-cfg-1",
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
      configurationId: "lps-legacy-dlseries-central-ducted-60000-cfg-1",
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
      configurationId: "lps-legacy-dlseries-central-ducted-60000-cfg-2",
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
      configurationId: "lps-legacy-dl-series-central-ducted-18000-cfg-1",
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
      configurationId: "lps-legacy-dl-series-central-ducted-24000-cfg-1",
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
      configurationId: "lps-legacy-dl-series-central-ducted-24000-cfg-2",
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
      configurationId: "lps-legacy-dl-series-central-ducted-30000-cfg-1",
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
      configurationId: "lps-legacy-dl-series-central-ducted-36000-cfg-1",
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
      configurationId: "lps-legacy-dl-series-central-ducted-36000-cfg-2",
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
      configurationId: "lps-legacy-dlseries-central-ducted-48000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-18000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-18000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-18000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-18000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-24000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-24000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-24000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-24000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-24000-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-30000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-30000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-30000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-30000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-36000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-36000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-36000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-36000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-48000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-48000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-48000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-48000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-48000-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-48000-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-48000-cfg-7",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-48000-cfg-8",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-48000-cfg-9",
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
      configurationId: "lps-legacy-d5c-series-central-ducted-18000-cfg-1",
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
      configurationId: "lps-legacy-d5c-series-central-ducted-30000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-36000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-36000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-36000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-wall-single-36000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-wall-single-36000-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-wall-single-36000-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-wall-single-36000-cfg-7",
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
      configurationId: "lps-legacy-d5f-series-wall-single-6000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-6000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-6000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-wall-single-6000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-7",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-8",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-9",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-10",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-11",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-12",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-13",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-14",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-15",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-16",
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
      configurationId: "lps-legacy-d5f-series-wall-single-9000-cfg-17",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-7",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-8",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-9",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-10",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-11",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-12",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-13",
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
      configurationId: "lps-legacy-d5f-series-wall-single-12000-cfg-14",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-7",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-8",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-9",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-10",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-11",
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
      configurationId: "lps-legacy-d5f-series-wall-single-18000-cfg-12",
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
      configurationId: "lps-legacy-d5f-series-wall-single-15000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-15000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-15000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-wall-single-24000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-24000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-24000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-wall-single-24000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-wall-single-24000-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-wall-single-24000-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-wall-single-24000-cfg-7",
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
      configurationId: "lps-legacy-d5f-series-wall-single-24000-cfg-8",
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
      configurationId: "lps-legacy-d5f-series-wall-single-20000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-30000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-30000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-30000-cfg-3",
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
      configurationId: "lps-legacy-standard-wall-single-18000-cfg-1",
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
      configurationId: "lps-legacy-standard-wall-single-18000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-48000-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-wall-single-48000-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-48000-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-wall-single-48000-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-wall-single-48000-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-wall-single-48000-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-wall-single-48000-cfg-7",
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
      configurationId: "lps-legacy-d5f-series-wall-single-60000-cfg-1",
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
      configurationId: "lps-legacy-d5c-series-wall-single-18000-cfg-1",
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
      configurationId: "lps-legacy-d5c-series-wall-single-18000-cfg-2",
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
      configurationId: "lps-legacy-d5c-series-wall-single-18000-cfg-3",
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
      configurationId: "lps-legacy-d5c-series-wall-single-18000-cfg-4",
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
      configurationId: "lps-legacy-d5c-series-wall-single-18000-cfg-5",
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
      configurationId: "lps-legacy-d5c-series-wall-single-18000-cfg-6",
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
      configurationId: "lps-legacy-d5c-series-wall-single-18000-cfg-7",
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
      configurationId: "lps-legacy-d5c-series-wall-single-24000-cfg-1",
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
      configurationId: "lps-legacy-d5c-series-wall-single-24000-cfg-2",
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
      configurationId: "lps-legacy-d5c-series-wall-single-24000-cfg-3",
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
      configurationId: "lps-legacy-d5c-series-wall-single-24000-cfg-4",
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
      configurationId: "lps-legacy-d5c-series-wall-single-24000-cfg-5",
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
      configurationId: "lps-legacy-d5c-series-wall-single-24000-cfg-6",
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
      configurationId: "lps-legacy-d5c-series-wall-single-30000-cfg-1",
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
      configurationId: "lps-legacy-d5c-series-wall-single-30000-cfg-2",
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
      configurationId: "lps-legacy-d5c-series-wall-single-30000-cfg-3",
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
      configurationId: "lps-legacy-d5c-series-wall-single-30000-cfg-4",
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
      configurationId: "lps-legacy-d5c-series-wall-single-30000-cfg-5",
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
      configurationId: "lps-legacy-d5c-series-wall-single-30000-cfg-6",
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
      configurationId: "lps-legacy-d5c-series-wall-single-36000-cfg-1",
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
      configurationId: "lps-legacy-d5c-series-wall-single-36000-cfg-2",
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
      configurationId: "lps-legacy-d5c-series-wall-single-36000-cfg-3",
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
      configurationId: "lps-legacy-d5c-series-wall-single-36000-cfg-4",
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
      configurationId: "lps-legacy-d5c-series-wall-single-36000-cfg-5",
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
      configurationId: "lps-legacy-d5c-series-wall-single-36000-cfg-6",
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
      configurationId: "lps-legacy-d5c-series-wall-single-48000-cfg-1",
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
      configurationId: "lps-legacy-d5c-series-wall-single-48000-cfg-2",
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
      configurationId: "lps-legacy-d5c-series-wall-single-48000-cfg-3",
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
      configurationId: "lps-legacy-d5c-series-wall-single-48000-cfg-4",
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
      configurationId: "lps-legacy-d5c-series-wall-single-48000-cfg-5",
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
      configurationId: "lps-legacy-d5c-series-wall-single-48000-cfg-6",
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
      configurationId: "lps-legacy-d5c-series-wall-single-48000-cfg-7",
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
      configurationId: "lps-legacy-d5c-series-wall-single-48000-cfg-8",
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
      configurationId: "lps-legacy-d5c-series-wall-single-42000-cfg-1",
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
