import type { BrandDataset } from "../../types";

export const slimairDataset: BrandDataset = {
  brand: {
    id: "slimair",
    slug: "slimair",
    name: "SLIMAIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "slimair-shc-series",
      slug: "slimair-shc-series",
      name: "SHC series",
      brandId: "slimair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard",
      slug: "slimair-standard",
      name: "Standard",
      brandId: "slimair",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series",
      slug: "slimair-shd-series",
      name: "SHD Series",
      brandId: "slimair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "slimair-shc-series-wall-single-9000",
      slug: "slimair-shc-series-wall-single-9000",
      name: "SHC series 9 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC series 9k",
      normalizedModelNumber: "shc-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 5900,
      heatingCapacity5FMaxBtu: 10200,
      seer2Min: 19.7,
      seer2Max: 26.4,
      hspf2Min: 9,
      hspf2Max: 13.8,
      cop5FMin: 1.8,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-12000",
      slug: "slimair-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "slimair-standard",
      brandId: "slimair",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 8300,
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
      id: "slimair-shc-series-wall-single-18000",
      slug: "slimair-shc-series-wall-single-18000",
      name: "SHC Series 18 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 18k",
      normalizedModelNumber: "shc-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 11100,
      heatingCapacity5FMaxBtu: 17000,
      seer2Min: 18.4,
      seer2Max: 24,
      hspf2Min: 8.7,
      hspf2Max: 11.4,
      cop5FMin: 1.8,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-24000",
      slug: "slimair-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "slimair-standard",
      brandId: "slimair",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 16500,
      heatingCapacity5FMaxBtu: 16500,
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
      id: "slimair-standard-wall-single-36000",
      slug: "slimair-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "slimair-standard",
      brandId: "slimair",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 24000,
      heatingCapacity5FMaxBtu: 25600,
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
      id: "slimair-shc-series-wall-single-12000",
      slug: "slimair-shc-series-wall-single-12000",
      name: "SHC series 12 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC series 12k",
      normalizedModelNumber: "shc-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 10300,
      seer2Min: 19.5,
      seer2Max: 24,
      hspf2Min: 9.8,
      hspf2Max: 11.6,
      cop5FMin: 1.8,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000",
      slug: "slimair-shc-series-wall-single-24000",
      name: "SHC series 24 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC series 24k",
      normalizedModelNumber: "shc-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 17200,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 18.5,
      seer2Max: 23.5,
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
      id: "slimair-shc-series-wall-single-30000",
      slug: "slimair-shc-series-wall-single-30000",
      name: "SHC series 30 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC series 30k",
      normalizedModelNumber: "shc-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 29600,
      seer2Min: 19,
      seer2Max: 22.6,
      hspf2Min: 9,
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
      id: "slimair-shc-series-wall-single-36000",
      slug: "slimair-shc-series-wall-single-36000",
      name: "SHC Series 36 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 36k",
      normalizedModelNumber: "shc-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36600,
      heatingCapacity5FMinBtu: 26400,
      heatingCapacity5FMaxBtu: 36600,
      seer2Min: 17.7,
      seer2Max: 23.1,
      hspf2Min: 9.2,
      hspf2Max: 11.3,
      cop5FMin: 1.68,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000",
      slug: "slimair-shc-series-wall-single-48000",
      name: "SHC Series 48 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 48k",
      normalizedModelNumber: "shc-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 30400,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16.7,
      seer2Max: 21.4,
      hspf2Min: 9,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-15000",
      slug: "slimair-shc-series-wall-single-15000",
      name: "SHC Series 15 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 15k",
      normalizedModelNumber: "shc-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 20,
      seer2Max: 20.5,
      hspf2Min: 9.5,
      hspf2Max: 12.3,
      cop5FMin: 1.75,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-60000",
      slug: "slimair-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "slimair-standard",
      brandId: "slimair",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 34400,
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
      id: "slimair-shc-series-wall-single-60000",
      slug: "slimair-shc-series-wall-single-60000",
      name: "SHC Series 60 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 60k",
      normalizedModelNumber: "shc-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 34800,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 20,
      hspf2Min: 9.3,
      hspf2Max: 10.4,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-6000",
      slug: "slimair-shc-series-wall-single-6000",
      name: "SHC series 6 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC series 6k",
      normalizedModelNumber: "shc-series-6000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6500,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 7600,
      seer2Min: 22,
      seer2Max: 25.3,
      hspf2Min: 10.8,
      hspf2Max: 14.6,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-9000",
      slug: "slimair-shd-series-wall-single-9000",
      name: "SHD Series 9 000 BTU",
      seriesId: "slimair-shd-series",
      brandId: "slimair",
      modelNumber: "SHD Series 9k",
      normalizedModelNumber: "shd-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 10100,
      seer2Min: 19.2,
      seer2Max: 20.2,
      hspf2Min: 10.2,
      hspf2Max: 12,
      cop5FMin: 1.9,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-12000",
      slug: "slimair-shd-series-wall-single-12000",
      name: "SHD Series 12 000 BTU",
      seriesId: "slimair-shd-series",
      brandId: "slimair",
      modelNumber: "SHD Series 12k",
      normalizedModelNumber: "shd-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 9300,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: 19,
      seer2Max: 19.5,
      hspf2Min: 10,
      hspf2Max: 10.3,
      cop5FMin: 1.96,
      cop5FMax: 2.26,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-18000",
      slug: "slimair-shd-series-wall-single-18000",
      name: "SHD Series 18 000 BTU",
      seriesId: "slimair-shd-series",
      brandId: "slimair",
      modelNumber: "SHD Series 18k",
      normalizedModelNumber: "shd-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 18,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 10.6,
      cop5FMin: 1.85,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-24000",
      slug: "slimair-shd-series-wall-single-24000",
      name: "SHD Series 24 000 BTU",
      seriesId: "slimair-shd-series",
      brandId: "slimair",
      modelNumber: "SHD Series 24k",
      normalizedModelNumber: "shd-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 19,
      seer2Max: 19.2,
      hspf2Min: 10.5,
      hspf2Max: 11.2,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-48000",
      slug: "slimair-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "slimair-standard",
      brandId: "slimair",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 34000,
      heatingCapacity5FMaxBtu: 37200,
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
      id: "slimair-shd-series-wall-single-36000",
      slug: "slimair-shd-series-wall-single-36000",
      name: "SHD Series 36 000 BTU",
      seriesId: "slimair-shd-series",
      brandId: "slimair",
      modelNumber: "SHD Series 36k",
      normalizedModelNumber: "shd-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 34000,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 16.5,
      seer2Max: 16.5,
      hspf2Min: 11,
      hspf2Max: 11,
      cop5FMin: 1.98,
      cop5FMax: 1.98,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-48000",
      slug: "slimair-shd-series-wall-single-48000",
      name: "SHD Series 48 000 BTU",
      seriesId: "slimair-shd-series",
      brandId: "slimair",
      modelNumber: "SHD Series 48k",
      normalizedModelNumber: "shd-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 39500,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 17,
      seer2Max: 17,
      hspf2Min: 12,
      hspf2Max: 12,
      cop5FMin: 2.02,
      cop5FMax: 2.02,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-60000",
      slug: "slimair-shd-series-wall-single-60000",
      name: "SHD Series 60 000 BTU",
      seriesId: "slimair-shd-series",
      brandId: "slimair",
      modelNumber: "SHD Series 60k",
      normalizedModelNumber: "shd-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 40000,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 15.8,
      seer2Max: 15.8,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.97,
      cop5FMax: 1.97,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-20000",
      slug: "slimair-shc-series-wall-single-20000",
      name: "SHC Series 20 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 20k",
      normalizedModelNumber: "shc-series-20000",
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
      id: "slimair-shc-series-central-ducted-18000",
      slug: "slimair-shc-series-central-ducted-18000",
      name: "SHC Series 18 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 18k",
      normalizedModelNumber: "shc-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 18.8,
      seer2Max: 19,
      hspf2Min: 9.1,
      hspf2Max: 9.7,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-24000",
      slug: "slimair-shc-series-central-ducted-24000",
      name: "SHC Series 24 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 24k",
      normalizedModelNumber: "shc-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 18.1,
      seer2Max: 18.3,
      hspf2Min: 9.7,
      hspf2Max: 10,
      cop5FMin: 1.87,
      cop5FMax: 1.87,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-30000",
      slug: "slimair-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "slimair-standard",
      brandId: "slimair",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 18500,
      heatingCapacity5FMaxBtu: 18500,
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
      id: "slimair-shc-series-central-ducted-36000",
      slug: "slimair-shc-series-central-ducted-36000",
      name: "SHC Series 36 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 36k",
      normalizedModelNumber: "shc-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 24800,
      heatingCapacity5FMaxBtu: 31800,
      seer2Min: 16.1,
      seer2Max: 17.4,
      hspf2Min: 8.7,
      hspf2Max: 10.3,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-48000",
      slug: "slimair-shc-series-central-ducted-48000",
      name: "SHC Series 48 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 48k",
      normalizedModelNumber: "shc-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 32400,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 16.5,
      hspf2Min: 8.4,
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
      id: "slimair-shc-series-central-ducted-30000",
      slug: "slimair-shc-series-central-ducted-30000",
      name: "SHC Series 30 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 30k",
      normalizedModelNumber: "shc-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 23800,
      heatingCapacity5FMaxBtu: 23800,
      seer2Min: 16.8,
      seer2Max: 16.8,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.96,
      cop5FMax: 1.96,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-42000",
      slug: "slimair-shc-series-wall-single-42000",
      name: "SHC Series 42 000 BTU",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series 42k",
      normalizedModelNumber: "shc-series-42000",
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
      id: "slimair-shc09vc1ag",
      modelNumber: "SHC09VC1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09vc2ag",
      modelNumber: "SHC09VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ve1ag",
      modelNumber: "SHC09VE1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ve2ag",
      modelNumber: "SHC09VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shcd09vc2ag",
      modelNumber: "SHCD09VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09vh2ag",
      modelNumber: "SHC09VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ac1ag",
      modelNumber: "SHC09AC1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ac2ag",
      modelNumber: "SHC09AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ae1ag",
      modelNumber: "SHC09AE1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ae2ag",
      modelNumber: "SHC09AE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ah2ag",
      modelNumber: "SHC09AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12vc1ag",
      modelNumber: "SHC12VC1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12vc2ag",
      modelNumber: "SHC12VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ac1ag",
      modelNumber: "SHC12AC1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ac2ag",
      modelNumber: "SHC12AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18vc2ag",
      modelNumber: "SHC18VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ve2ag",
      modelNumber: "SHC18VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shcd18vc2ag",
      modelNumber: "SHCD18VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc2z18vc2ag",
      modelNumber: "SHC2Z18VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18vh2ag",
      modelNumber: "SHC18VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc2z18ve2ag",
      modelNumber: "SHC2Z18VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ac2ag",
      modelNumber: "SHC18AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ae2ag",
      modelNumber: "SHC18AE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ah2ag",
      modelNumber: "SHC18AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc3z18ac2ag",
      modelNumber: "SHC3Z18AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc3z18ah2ag",
      modelNumber: "SHC3Z18AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24vc2ag",
      modelNumber: "SHC24VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36vb2ab",
      modelNumber: "SHC36VB2AB",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36vc2ag",
      modelNumber: "SHC36VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ab2ab",
      modelNumber: "SHC36AB2AB",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ve1ag",
      modelNumber: "SHC12VE1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ve2ag",
      modelNumber: "SHC12VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shcd12vc2ag",
      modelNumber: "SHCD12VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12vh2ag",
      modelNumber: "SHC12VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ae1ag",
      modelNumber: "SHC12AE1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ae2ag",
      modelNumber: "SHC12AE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ah2ag",
      modelNumber: "SHC12AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ve2ag",
      modelNumber: "SHC24VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shcd24vc2ag",
      modelNumber: "SHCD24VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc3z27vc2ag",
      modelNumber: "SHC3Z27VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24vh2ag",
      modelNumber: "SHC24VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ac2ag",
      modelNumber: "SHC24AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ae2ag",
      modelNumber: "SHC24AE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ah2ag",
      modelNumber: "SHC24AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc4z27ac2ag",
      modelNumber: "SHC4Z27AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc4z27ah2ag",
      modelNumber: "SHC4Z27AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc3z27ve2ag",
      modelNumber: "SHC3Z27VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30vh2ag",
      modelNumber: "SHC30VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30ab2ab",
      modelNumber: "SHC30AB2AB",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30ah2ag",
      modelNumber: "SHC30AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc4z36vc2ag",
      modelNumber: "SHC4Z36VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc4z36ve2ag",
      modelNumber: "SHC4Z36VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ah2ag",
      modelNumber: "SHC36AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ac2ag",
      modelNumber: "SHC36AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z36ac2ag",
      modelNumber: "SHC5Z36AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z36ah2ag",
      modelNumber: "SHC5Z36AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z48vc2ag",
      modelNumber: "SHC5Z48VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z48ve2ag",
      modelNumber: "SHC5Z48VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48ah2ag",
      modelNumber: "SHC48AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48ac2ag",
      modelNumber: "SHC48AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc55ah2ag",
      modelNumber: "SHC55AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc6z48ah2ag",
      modelNumber: "SHC6Z48AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc6z55ah2ag",
      modelNumber: "SHC6Z55AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z55vc2ag",
      modelNumber: "SHC5Z55VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc60vc2ag",
      modelNumber: "SHC60VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc60ac2ag",
      modelNumber: "SHC60AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc6z55ac2ag",
      modelNumber: "SHC6Z55AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z55ve2ag",
      modelNumber: "SHC5Z55VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc06ah2ag",
      modelNumber: "SHC06AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48vc2ag",
      modelNumber: "SHC48VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36vh2ag",
      modelNumber: "SHC36VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48vh2ag",
      modelNumber: "SHC48VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc55vh2ag",
      modelNumber: "SHC55VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ae224v",
      modelNumber: "SHC18AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ah224v",
      modelNumber: "SHC18AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ae224v",
      modelNumber: "SHC24AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ah224v",
      modelNumber: "SHC24AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30ae224v",
      modelNumber: "SHC30AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ae224v",
      modelNumber: "SHC36AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ah224v",
      modelNumber: "SHC36AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48ae224v",
      modelNumber: "SHC48AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc60ae224v",
      modelNumber: "SHC60AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48ah224v",
      modelNumber: "SHC48AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc60ah224v",
      modelNumber: "SHC60AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30ah224v",
      modelNumber: "SHC30AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc6z48ac2ag",
      modelNumber: "SHC6Z48AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "slimair-shm09vc1ag",
      modelNumber: "SHM09VC1AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm09vc2ag",
      modelNumber: "SHM09VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm09ve1ag",
      modelNumber: "SHM09VE1AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm09ve2ag",
      modelNumber: "SHM09VE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shmz09vc2ag",
      modelNumber: "SHMZ09VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shlz09vc2ag",
      modelNumber: "SHLZ09VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-sho09ve2ag",
      modelNumber: "SHO09VE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm09ac1ag",
      modelNumber: "SHM09AC1AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm09ac2ag",
      modelNumber: "SHM09AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm09ae1ag",
      modelNumber: "SHM09AE1AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm09ae2ag",
      modelNumber: "SHM09AE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd09ac2ag",
      modelNumber: "SHD09AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shl09ac2ag",
      modelNumber: "SHL09AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm12vc1ag",
      modelNumber: "SHM12VC1AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm12vc2ag",
      modelNumber: "SHM12VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm12ac1ag",
      modelNumber: "SHM12AC1AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm12ac2ag",
      modelNumber: "SHM12AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm18vc2ag",
      modelNumber: "SHM18VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm18ve2ag",
      modelNumber: "SHM18VE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shmz18vc2ag",
      modelNumber: "SHMZ18VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-appareils-sans-conduits",
      modelNumber: "Appareils sans conduits",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-appareils-avec-conduits",
      modelNumber: "Appareils avec conduits",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      modelNumber: "Combinaison d'appareils avec ou sans conduits",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-sho18ve2ag",
      modelNumber: "SHO18VE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shs18vc2ag",
      modelNumber: "SHS18VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm18ac2ag",
      modelNumber: "SHM18AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm18ae2ag",
      modelNumber: "SHM18AE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd18ac2ag",
      modelNumber: "SHD18AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shs18ac2ag",
      modelNumber: "SHS18AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shl18ac2ag",
      modelNumber: "SHL18AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm24vc2ag",
      modelNumber: "SHM24VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm36vb2ab",
      modelNumber: "SHM36VB2AB",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd36vc2ag",
      modelNumber: "SHD36VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm36ab2ab",
      modelNumber: "SHM36AB2AB",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm12ve1ag",
      modelNumber: "SHM12VE1AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm12ve2ag",
      modelNumber: "SHM12VE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shmz12vc2ag",
      modelNumber: "SHMZ12VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shlz12vc2ag",
      modelNumber: "SHLZ12VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-sho12ve2ag",
      modelNumber: "SHO12VE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm12ae1ag",
      modelNumber: "SHM12AE1AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm12ae2ag",
      modelNumber: "SHM12AE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd12ac2ag",
      modelNumber: "SHD12AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shl12ac2ag",
      modelNumber: "SHL12AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm24ve2ag",
      modelNumber: "SHM24VE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shmz24vc2ag",
      modelNumber: "SHMZ24VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shlz24vc2ag",
      modelNumber: "SHLZ24VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shs24vc2ag",
      modelNumber: "SHS24VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm24ac2ag",
      modelNumber: "SHM24AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm24ae2ag",
      modelNumber: "SHM24AE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd24ac2ag",
      modelNumber: "SHD24AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shs24ac2ag",
      modelNumber: "SHS24AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shl24ac2ag",
      modelNumber: "SHL24AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm30ve2ag",
      modelNumber: "SHM30VE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm30ab2ab",
      modelNumber: "SHM30AB2AB",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm30ae2ag",
      modelNumber: "SHM30AE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd36ac2ag",
      modelNumber: "SHD36AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shs36ac2ag",
      modelNumber: "SHS36AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shl36ac2ag",
      modelNumber: "SHL36AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd48ac2ag",
      modelNumber: "SHD48AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shs48ac2ag",
      modelNumber: "SHS48AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shs60ac2ag",
      modelNumber: "SHS60AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shl48ac2ag",
      modelNumber: "SHL48AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shlz18vc2ag",
      modelNumber: "SHLZ18VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd60vc2ag",
      modelNumber: "SHD60VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd60ac2ag",
      modelNumber: "SHD60AC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-sho06ve2ag",
      modelNumber: "SHO06VE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shm06ae2ag",
      modelNumber: "SHM06AE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd09vc2ag",
      modelNumber: "SHD09VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd12vc2ag",
      modelNumber: "SHD12VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd18vc2ag",
      modelNumber: "SHD18VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd24vc2ag",
      modelNumber: "SHD24VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shd48vc2ag",
      modelNumber: "SHD48VC2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shv18ae2ag",
      modelNumber: "SHV18AE2AG",
      brandId: "slimair",
      type: "central-ducted",
    },
    {
      id: "slimair-shv24ae2ag",
      modelNumber: "SHV24AE2AG",
      brandId: "slimair",
      type: "central-ducted",
    },
    {
      id: "slimair-shv30ae2ag",
      modelNumber: "SHV30AE2AG",
      brandId: "slimair",
      type: "wall-single",
    },
    {
      id: "slimair-shv36ae2ag",
      modelNumber: "SHV36AE2AG",
      brandId: "slimair",
      type: "central-ducted",
    },
    {
      id: "slimair-shv48ae2ag",
      modelNumber: "SHV48AE2AG",
      brandId: "slimair",
      type: "central-ducted",
    },
    {
      id: "slimair-shv60ae2ag",
      modelNumber: "SHV60AE2AG",
      brandId: "slimair",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "slimair-shc-series-wall-single-9000-cfg-1",
      slug: "slimair-shc-series-wall-single-9000-cfg-1",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09vc1ag",
      indoorUnitId: "slimair-shm09vc1ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-2",
      slug: "slimair-shc-series-wall-single-9000-cfg-2",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09vc2ag",
      indoorUnitId: "slimair-shm09vc2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-3",
      slug: "slimair-shc-series-wall-single-9000-cfg-3",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ve1ag",
      indoorUnitId: "slimair-shm09ve1ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-4",
      slug: "slimair-shc-series-wall-single-9000-cfg-4",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: "slimair-shm09ve2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-5",
      slug: "slimair-shc-series-wall-single-9000-cfg-5",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shcd09vc2ag",
      indoorUnitId: "slimair-shmz09vc2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.4,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-6",
      slug: "slimair-shc-series-wall-single-9000-cfg-6",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: "slimair-shmz09vc2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-7",
      slug: "slimair-shc-series-wall-single-9000-cfg-7",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: "slimair-shlz09vc2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-8",
      slug: "slimair-shc-series-wall-single-9000-cfg-8",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09vh2ag",
      indoorUnitId: "slimair-shm09ve2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.4,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-9",
      slug: "slimair-shc-series-wall-single-9000-cfg-9",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: "slimair-sho09ve2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-10",
      slug: "slimair-shc-series-wall-single-9000-cfg-10",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09vh2ag",
      indoorUnitId: "slimair-shlz09vc2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-11",
      slug: "slimair-shc-series-wall-single-9000-cfg-11",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ac1ag",
      indoorUnitId: "slimair-shm09ac1ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-12",
      slug: "slimair-shc-series-wall-single-9000-cfg-12",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ac2ag",
      indoorUnitId: "slimair-shm09ac2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-13",
      slug: "slimair-shc-series-wall-single-9000-cfg-13",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ae1ag",
      indoorUnitId: "slimair-shm09ae1ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-14",
      slug: "slimair-shc-series-wall-single-9000-cfg-14",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ae2ag",
      indoorUnitId: "slimair-shm09ae2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-15",
      slug: "slimair-shc-series-wall-single-9000-cfg-15",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ah2ag",
      indoorUnitId: "slimair-shm09ae2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-16",
      slug: "slimair-shc-series-wall-single-9000-cfg-16",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ah2ag",
      indoorUnitId: "slimair-shd09ac2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-17",
      slug: "slimair-shc-series-wall-single-9000-cfg-17",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ae2ag",
      indoorUnitId: "slimair-shd09ac2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-18",
      slug: "slimair-shc-series-wall-single-9000-cfg-18",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ah2ag",
      indoorUnitId: "slimair-shl09ac2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-9000-cfg-19",
      slug: "slimair-shc-series-wall-single-9000-cfg-19",
      modelId: "slimair-shc-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ae2ag",
      indoorUnitId: "slimair-shl09ac2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-12000-cfg-1",
      slug: "slimair-standard-wall-single-12000-cfg-1",
      modelId: "slimair-standard-wall-single-12000",
      outdoorUnitId: "slimair-shc12vc1ag",
      indoorUnitId: "slimair-shm12vc1ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-12000-cfg-2",
      slug: "slimair-standard-wall-single-12000-cfg-2",
      modelId: "slimair-standard-wall-single-12000",
      outdoorUnitId: "slimair-shc12vc2ag",
      indoorUnitId: "slimair-shm12vc2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-12000-cfg-3",
      slug: "slimair-standard-wall-single-12000-cfg-3",
      modelId: "slimair-standard-wall-single-12000",
      outdoorUnitId: "slimair-shc12ac1ag",
      indoorUnitId: "slimair-shm12ac1ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-12000-cfg-4",
      slug: "slimair-standard-wall-single-12000-cfg-4",
      modelId: "slimair-standard-wall-single-12000",
      outdoorUnitId: "slimair-shc12ac2ag",
      indoorUnitId: "slimair-shm12ac2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-1",
      slug: "slimair-shc-series-wall-single-18000-cfg-1",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18vc2ag",
      indoorUnitId: "slimair-shm18vc2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-2",
      slug: "slimair-shc-series-wall-single-18000-cfg-2",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: "slimair-shm18ve2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-3",
      slug: "slimair-shc-series-wall-single-18000-cfg-3",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shcd18vc2ag",
      indoorUnitId: "slimair-shmz18vc2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-4",
      slug: "slimair-shc-series-wall-single-18000-cfg-4",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: "slimair-shmz18vc2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-5",
      slug: "slimair-shc-series-wall-single-18000-cfg-5",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc2z18vc2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-6",
      slug: "slimair-shc-series-wall-single-18000-cfg-6",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc2z18vc2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-7",
      slug: "slimair-shc-series-wall-single-18000-cfg-7",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc2z18vc2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-8",
      slug: "slimair-shc-series-wall-single-18000-cfg-8",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18vh2ag",
      indoorUnitId: "slimair-shm18ve2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-9",
      slug: "slimair-shc-series-wall-single-18000-cfg-9",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc2z18ve2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-10",
      slug: "slimair-shc-series-wall-single-18000-cfg-10",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc2z18ve2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-11",
      slug: "slimair-shc-series-wall-single-18000-cfg-11",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc2z18ve2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19.75,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-12",
      slug: "slimair-shc-series-wall-single-18000-cfg-12",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: "slimair-sho18ve2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-13",
      slug: "slimair-shc-series-wall-single-18000-cfg-13",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18vh2ag",
      indoorUnitId: "slimair-shs18vc2ag",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-14",
      slug: "slimair-shc-series-wall-single-18000-cfg-14",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ac2ag",
      indoorUnitId: "slimair-shm18ac2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.2,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-15",
      slug: "slimair-shc-series-wall-single-18000-cfg-15",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ae2ag",
      indoorUnitId: "slimair-shm18ae2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-16",
      slug: "slimair-shc-series-wall-single-18000-cfg-16",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ah2ag",
      indoorUnitId: "slimair-shm18ae2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-17",
      slug: "slimair-shc-series-wall-single-18000-cfg-17",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ah2ag",
      indoorUnitId: "slimair-shd18ac2ag",
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18.4,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-18",
      slug: "slimair-shc-series-wall-single-18000-cfg-18",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ae2ag",
      indoorUnitId: "slimair-shd18ac2ag",
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-19",
      slug: "slimair-shc-series-wall-single-18000-cfg-19",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ah2ag",
      indoorUnitId: "slimair-shs18ac2ag",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-20",
      slug: "slimair-shc-series-wall-single-18000-cfg-20",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ae2ag",
      indoorUnitId: "slimair-shs18ac2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-21",
      slug: "slimair-shc-series-wall-single-18000-cfg-21",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ae2ag",
      indoorUnitId: "slimair-shl18ac2ag",
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-22",
      slug: "slimair-shc-series-wall-single-18000-cfg-22",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc3z18ac2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-23",
      slug: "slimair-shc-series-wall-single-18000-cfg-23",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc3z18ac2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-24",
      slug: "slimair-shc-series-wall-single-18000-cfg-24",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc3z18ac2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-25",
      slug: "slimair-shc-series-wall-single-18000-cfg-25",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc3z18ah2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-26",
      slug: "slimair-shc-series-wall-single-18000-cfg-26",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc3z18ah2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-18000-cfg-27",
      slug: "slimair-shc-series-wall-single-18000-cfg-27",
      modelId: "slimair-shc-series-wall-single-18000",
      outdoorUnitId: "slimair-shc3z18ah2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-24000-cfg-1",
      slug: "slimair-standard-wall-single-24000-cfg-1",
      modelId: "slimair-standard-wall-single-24000",
      outdoorUnitId: "slimair-shc24vc2ag",
      indoorUnitId: "slimair-shm24vc2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-36000-cfg-1",
      slug: "slimair-standard-wall-single-36000-cfg-1",
      modelId: "slimair-standard-wall-single-36000",
      outdoorUnitId: "slimair-shc36vb2ab",
      indoorUnitId: "slimair-shm36vb2ab",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-36000-cfg-2",
      slug: "slimair-standard-wall-single-36000-cfg-2",
      modelId: "slimair-standard-wall-single-36000",
      outdoorUnitId: "slimair-shc36vc2ag",
      indoorUnitId: "slimair-shd36vc2ag",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-36000-cfg-3",
      slug: "slimair-standard-wall-single-36000-cfg-3",
      modelId: "slimair-standard-wall-single-36000",
      outdoorUnitId: "slimair-shc36ab2ab",
      indoorUnitId: "slimair-shm36ab2ab",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-1",
      slug: "slimair-shc-series-wall-single-12000-cfg-1",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ve1ag",
      indoorUnitId: "slimair-shm12ve1ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-2",
      slug: "slimair-shc-series-wall-single-12000-cfg-2",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: "slimair-shm12ve2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-3",
      slug: "slimair-shc-series-wall-single-12000-cfg-3",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shcd12vc2ag",
      indoorUnitId: "slimair-shmz12vc2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-4",
      slug: "slimair-shc-series-wall-single-12000-cfg-4",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: "slimair-shmz12vc2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-5",
      slug: "slimair-shc-series-wall-single-12000-cfg-5",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: "slimair-shlz12vc2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-6",
      slug: "slimair-shc-series-wall-single-12000-cfg-6",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12vh2ag",
      indoorUnitId: "slimair-shm12ve2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-7",
      slug: "slimair-shc-series-wall-single-12000-cfg-7",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: "slimair-sho12ve2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-8",
      slug: "slimair-shc-series-wall-single-12000-cfg-8",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12vh2ag",
      indoorUnitId: "slimair-shlz12vc2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-9",
      slug: "slimair-shc-series-wall-single-12000-cfg-9",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ae1ag",
      indoorUnitId: "slimair-shm12ae1ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.2,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-10",
      slug: "slimair-shc-series-wall-single-12000-cfg-10",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ae2ag",
      indoorUnitId: "slimair-shm12ae2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-11",
      slug: "slimair-shc-series-wall-single-12000-cfg-11",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ah2ag",
      indoorUnitId: "slimair-shm12ae2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-12",
      slug: "slimair-shc-series-wall-single-12000-cfg-12",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ah2ag",
      indoorUnitId: "slimair-shd12ac2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-13",
      slug: "slimair-shc-series-wall-single-12000-cfg-13",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ae2ag",
      indoorUnitId: "slimair-shd12ac2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-14",
      slug: "slimair-shc-series-wall-single-12000-cfg-14",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ah2ag",
      indoorUnitId: "slimair-shl12ac2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-12000-cfg-15",
      slug: "slimair-shc-series-wall-single-12000-cfg-15",
      modelId: "slimair-shc-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ae2ag",
      indoorUnitId: "slimair-shl12ac2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-1",
      slug: "slimair-shc-series-wall-single-24000-cfg-1",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ve2ag",
      indoorUnitId: "slimair-shm24ve2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-2",
      slug: "slimair-shc-series-wall-single-24000-cfg-2",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shcd24vc2ag",
      indoorUnitId: "slimair-shmz24vc2ag",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-3",
      slug: "slimair-shc-series-wall-single-24000-cfg-3",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ve2ag",
      indoorUnitId: "slimair-shmz24vc2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-4",
      slug: "slimair-shc-series-wall-single-24000-cfg-4",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc3z27vc2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-5",
      slug: "slimair-shc-series-wall-single-24000-cfg-5",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ve2ag",
      indoorUnitId: "slimair-shlz24vc2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-6",
      slug: "slimair-shc-series-wall-single-24000-cfg-6",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24vh2ag",
      indoorUnitId: "slimair-shm24ve2ag",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-7",
      slug: "slimair-shc-series-wall-single-24000-cfg-7",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24vh2ag",
      indoorUnitId: "slimair-shlz24vc2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-8",
      slug: "slimair-shc-series-wall-single-24000-cfg-8",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24vh2ag",
      indoorUnitId: "slimair-shs24vc2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-9",
      slug: "slimair-shc-series-wall-single-24000-cfg-9",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ac2ag",
      indoorUnitId: "slimair-shm24ac2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-10",
      slug: "slimair-shc-series-wall-single-24000-cfg-10",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ae2ag",
      indoorUnitId: "slimair-shm24ae2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-11",
      slug: "slimair-shc-series-wall-single-24000-cfg-11",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ah2ag",
      indoorUnitId: "slimair-shm24ae2ag",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-12",
      slug: "slimair-shc-series-wall-single-24000-cfg-12",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ah2ag",
      indoorUnitId: "slimair-shd24ac2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-13",
      slug: "slimair-shc-series-wall-single-24000-cfg-13",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ae2ag",
      indoorUnitId: "slimair-shd24ac2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-14",
      slug: "slimair-shc-series-wall-single-24000-cfg-14",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ae2ag",
      indoorUnitId: "slimair-shs24ac2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-15",
      slug: "slimair-shc-series-wall-single-24000-cfg-15",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ah2ag",
      indoorUnitId: "slimair-shl24ac2ag",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-16",
      slug: "slimair-shc-series-wall-single-24000-cfg-16",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ae2ag",
      indoorUnitId: "slimair-shl24ac2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-17",
      slug: "slimair-shc-series-wall-single-24000-cfg-17",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc4z27ac2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-18",
      slug: "slimair-shc-series-wall-single-24000-cfg-18",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc4z27ac2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-19",
      slug: "slimair-shc-series-wall-single-24000-cfg-19",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc4z27ac2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 26200,
      coolingCapacityMaxBtu: 26200,
      seer2: 22,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-24000-cfg-20",
      slug: "slimair-shc-series-wall-single-24000-cfg-20",
      modelId: "slimair-shc-series-wall-single-24000",
      outdoorUnitId: "slimair-shc4z27ah2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-1",
      slug: "slimair-shc-series-wall-single-30000-cfg-1",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc3z27vc2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-2",
      slug: "slimair-shc-series-wall-single-30000-cfg-2",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc3z27vc2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-3",
      slug: "slimair-shc-series-wall-single-30000-cfg-3",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc3z27ve2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.6,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-4",
      slug: "slimair-shc-series-wall-single-30000-cfg-4",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc3z27ve2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-5",
      slug: "slimair-shc-series-wall-single-30000-cfg-5",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc3z27ve2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.3,
      hspf2: 9.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-6",
      slug: "slimair-shc-series-wall-single-30000-cfg-6",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc30vh2ag",
      indoorUnitId: "slimair-shm30ve2ag",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-7",
      slug: "slimair-shc-series-wall-single-30000-cfg-7",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc30ab2ab",
      indoorUnitId: "slimair-shm30ab2ab",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-8",
      slug: "slimair-shc-series-wall-single-30000-cfg-8",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc30ah2ag",
      indoorUnitId: "slimair-shm30ae2ag",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-9",
      slug: "slimair-shc-series-wall-single-30000-cfg-9",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc4z27ah2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-30000-cfg-10",
      slug: "slimair-shc-series-wall-single-30000-cfg-10",
      modelId: "slimair-shc-series-wall-single-30000",
      outdoorUnitId: "slimair-shc4z27ah2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 20,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-1",
      slug: "slimair-shc-series-wall-single-36000-cfg-1",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc4z36vc2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-2",
      slug: "slimair-shc-series-wall-single-36000-cfg-2",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc4z36ve2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-3",
      slug: "slimair-shc-series-wall-single-36000-cfg-3",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc4z36ve2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-4",
      slug: "slimair-shc-series-wall-single-36000-cfg-4",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc36ah2ag",
      indoorUnitId: "slimair-shd36ac2ag",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-5",
      slug: "slimair-shc-series-wall-single-36000-cfg-5",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc36ac2ag",
      indoorUnitId: "slimair-shd36ac2ag",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-6",
      slug: "slimair-shc-series-wall-single-36000-cfg-6",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc36ah2ag",
      indoorUnitId: "slimair-shs36ac2ag",
      coolingCapacityMinBtu: 36400,
      coolingCapacityMaxBtu: 36400,
      seer2: 20,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-7",
      slug: "slimair-shc-series-wall-single-36000-cfg-7",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc36ac2ag",
      indoorUnitId: "slimair-shs36ac2ag",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-8",
      slug: "slimair-shc-series-wall-single-36000-cfg-8",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc36ah2ag",
      indoorUnitId: "slimair-shl36ac2ag",
      coolingCapacityMinBtu: 36600,
      coolingCapacityMaxBtu: 36600,
      seer2: 21.2,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-9",
      slug: "slimair-shc-series-wall-single-36000-cfg-9",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc36ac2ag",
      indoorUnitId: "slimair-shl36ac2ag",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-10",
      slug: "slimair-shc-series-wall-single-36000-cfg-10",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc5z36ac2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 23.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-11",
      slug: "slimair-shc-series-wall-single-36000-cfg-11",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc5z36ac2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-12",
      slug: "slimair-shc-series-wall-single-36000-cfg-12",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc5z36ac2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 21.55,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-13",
      slug: "slimair-shc-series-wall-single-36000-cfg-13",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc5z36ah2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-14",
      slug: "slimair-shc-series-wall-single-36000-cfg-14",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc5z36ah2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-36000-cfg-15",
      slug: "slimair-shc-series-wall-single-36000-cfg-15",
      modelId: "slimair-shc-series-wall-single-36000",
      outdoorUnitId: "slimair-shc5z36ah2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.45,
      hspf2: 10.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-1",
      slug: "slimair-shc-series-wall-single-48000-cfg-1",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc5z48vc2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-2",
      slug: "slimair-shc-series-wall-single-48000-cfg-2",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc5z48vc2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-3",
      slug: "slimair-shc-series-wall-single-48000-cfg-3",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc5z48vc2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-4",
      slug: "slimair-shc-series-wall-single-48000-cfg-4",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc5z48ve2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-5",
      slug: "slimair-shc-series-wall-single-48000-cfg-5",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc5z48ve2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-6",
      slug: "slimair-shc-series-wall-single-48000-cfg-6",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc5z48ve2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.05,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-7",
      slug: "slimair-shc-series-wall-single-48000-cfg-7",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc48ah2ag",
      indoorUnitId: "slimair-shd48ac2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-8",
      slug: "slimair-shc-series-wall-single-48000-cfg-8",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc48ac2ag",
      indoorUnitId: "slimair-shd48ac2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-9",
      slug: "slimair-shc-series-wall-single-48000-cfg-9",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc48ah2ag",
      indoorUnitId: "slimair-shs48ac2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.5,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-10",
      slug: "slimair-shc-series-wall-single-48000-cfg-10",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc55ah2ag",
      indoorUnitId: "slimair-shs60ac2ag",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-11",
      slug: "slimair-shc-series-wall-single-48000-cfg-11",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc48ac2ag",
      indoorUnitId: "slimair-shs48ac2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19.8,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-12",
      slug: "slimair-shc-series-wall-single-48000-cfg-12",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc48ah2ag",
      indoorUnitId: "slimair-shl48ac2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-13",
      slug: "slimair-shc-series-wall-single-48000-cfg-13",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc48ac2ag",
      indoorUnitId: "slimair-shl48ac2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-14",
      slug: "slimair-shc-series-wall-single-48000-cfg-14",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc6z48ah2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-15",
      slug: "slimair-shc-series-wall-single-48000-cfg-15",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc6z48ah2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 20.8,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-16",
      slug: "slimair-shc-series-wall-single-48000-cfg-16",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc6z55ah2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 21.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-17",
      slug: "slimair-shc-series-wall-single-48000-cfg-17",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc6z55ah2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 20,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-48000-cfg-18",
      slug: "slimair-shc-series-wall-single-48000-cfg-18",
      modelId: "slimair-shc-series-wall-single-48000",
      outdoorUnitId: "slimair-shc6z55ah2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 20.7,
      hspf2: 10.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-15000-cfg-1",
      slug: "slimair-shc-series-wall-single-15000-cfg-1",
      modelId: "slimair-shc-series-wall-single-15000",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: "slimair-shlz18vc2ag",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-15000-cfg-2",
      slug: "slimair-shc-series-wall-single-15000-cfg-2",
      modelId: "slimair-shc-series-wall-single-15000",
      outdoorUnitId: "slimair-shc18vh2ag",
      indoorUnitId: "slimair-shlz18vc2ag",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-15000-cfg-3",
      slug: "slimair-shc-series-wall-single-15000-cfg-3",
      modelId: "slimair-shc-series-wall-single-15000",
      outdoorUnitId: "slimair-shc18ah2ag",
      indoorUnitId: "slimair-shl18ac2ag",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-60000-cfg-1",
      slug: "slimair-standard-wall-single-60000-cfg-1",
      modelId: "slimair-standard-wall-single-60000",
      outdoorUnitId: "slimair-shc5z55vc2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-60000-cfg-2",
      slug: "slimair-standard-wall-single-60000-cfg-2",
      modelId: "slimair-standard-wall-single-60000",
      outdoorUnitId: "slimair-shc5z55vc2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-60000-cfg-3",
      slug: "slimair-standard-wall-single-60000-cfg-3",
      modelId: "slimair-standard-wall-single-60000",
      outdoorUnitId: "slimair-shc60vc2ag",
      indoorUnitId: "slimair-shd60vc2ag",
      coolingCapacityMinBtu: 59000,
      coolingCapacityMaxBtu: 59000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-60000-cfg-4",
      slug: "slimair-standard-wall-single-60000-cfg-4",
      modelId: "slimair-standard-wall-single-60000",
      outdoorUnitId: "slimair-shc60ac2ag",
      indoorUnitId: "slimair-shd60ac2ag",
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-60000-cfg-5",
      slug: "slimair-standard-wall-single-60000-cfg-5",
      modelId: "slimair-standard-wall-single-60000",
      outdoorUnitId: "slimair-shc6z55ac2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-60000-cfg-6",
      slug: "slimair-standard-wall-single-60000-cfg-6",
      modelId: "slimair-standard-wall-single-60000",
      outdoorUnitId: "slimair-shc6z55ac2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-60000-cfg-7",
      slug: "slimair-standard-wall-single-60000-cfg-7",
      modelId: "slimair-standard-wall-single-60000",
      outdoorUnitId: "slimair-shc6z55ac2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-60000-cfg-1",
      slug: "slimair-shc-series-wall-single-60000-cfg-1",
      modelId: "slimair-shc-series-wall-single-60000",
      outdoorUnitId: "slimair-shc5z55ve2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-60000-cfg-2",
      slug: "slimair-shc-series-wall-single-60000-cfg-2",
      modelId: "slimair-shc-series-wall-single-60000",
      outdoorUnitId: "slimair-shc5z55ve2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-60000-cfg-3",
      slug: "slimair-shc-series-wall-single-60000-cfg-3",
      modelId: "slimair-shc-series-wall-single-60000",
      outdoorUnitId: "slimair-shc5z55ve2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 19.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-60000-cfg-4",
      slug: "slimair-shc-series-wall-single-60000-cfg-4",
      modelId: "slimair-shc-series-wall-single-60000",
      outdoorUnitId: "slimair-shc55ah2ag",
      indoorUnitId: "slimair-shd60ac2ag",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-6000-cfg-1",
      slug: "slimair-shc-series-wall-single-6000-cfg-1",
      modelId: "slimair-shc-series-wall-single-6000",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: "slimair-sho06ve2ag",
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-6000-cfg-2",
      slug: "slimair-shc-series-wall-single-6000-cfg-2",
      modelId: "slimair-shc-series-wall-single-6000",
      outdoorUnitId: "slimair-shc06ah2ag",
      indoorUnitId: "slimair-shm06ae2ag",
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-9000-cfg-1",
      slug: "slimair-shd-series-wall-single-9000-cfg-1",
      modelId: "slimair-shd-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: "slimair-shd09vc2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-9000-cfg-2",
      slug: "slimair-shd-series-wall-single-9000-cfg-2",
      modelId: "slimair-shd-series-wall-single-9000",
      outdoorUnitId: "slimair-shc09vh2ag",
      indoorUnitId: "slimair-shd09vc2ag",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-12000-cfg-1",
      slug: "slimair-shd-series-wall-single-12000-cfg-1",
      modelId: "slimair-shd-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: "slimair-shd12vc2ag",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-12000-cfg-2",
      slug: "slimair-shd-series-wall-single-12000-cfg-2",
      modelId: "slimair-shd-series-wall-single-12000",
      outdoorUnitId: "slimair-shc12vh2ag",
      indoorUnitId: "slimair-shd12vc2ag",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-18000-cfg-1",
      slug: "slimair-shd-series-wall-single-18000-cfg-1",
      modelId: "slimair-shd-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: "slimair-shd18vc2ag",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-18000-cfg-2",
      slug: "slimair-shd-series-wall-single-18000-cfg-2",
      modelId: "slimair-shd-series-wall-single-18000",
      outdoorUnitId: "slimair-shc18vh2ag",
      indoorUnitId: "slimair-shd18vc2ag",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-24000-cfg-1",
      slug: "slimair-shd-series-wall-single-24000-cfg-1",
      modelId: "slimair-shd-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24ve2ag",
      indoorUnitId: "slimair-shd24vc2ag",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-24000-cfg-2",
      slug: "slimair-shd-series-wall-single-24000-cfg-2",
      modelId: "slimair-shd-series-wall-single-24000",
      outdoorUnitId: "slimair-shc24vh2ag",
      indoorUnitId: "slimair-shd24vc2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-48000-cfg-1",
      slug: "slimair-standard-wall-single-48000-cfg-1",
      modelId: "slimair-standard-wall-single-48000",
      outdoorUnitId: "slimair-shc48vc2ag",
      indoorUnitId: "slimair-shd48vc2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-48000-cfg-2",
      slug: "slimair-standard-wall-single-48000-cfg-2",
      modelId: "slimair-standard-wall-single-48000",
      outdoorUnitId: "slimair-shc60ac2ag",
      indoorUnitId: "slimair-shs60ac2ag",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-36000-cfg-1",
      slug: "slimair-shd-series-wall-single-36000-cfg-1",
      modelId: "slimair-shd-series-wall-single-36000",
      outdoorUnitId: "slimair-shc36vh2ag",
      indoorUnitId: "slimair-shd36vc2ag",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-48000-cfg-1",
      slug: "slimair-shd-series-wall-single-48000-cfg-1",
      modelId: "slimair-shd-series-wall-single-48000",
      outdoorUnitId: "slimair-shc48vh2ag",
      indoorUnitId: "slimair-shd48vc2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 12,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-60000-cfg-1",
      slug: "slimair-shd-series-wall-single-60000-cfg-1",
      modelId: "slimair-shd-series-wall-single-60000",
      outdoorUnitId: "slimair-shc55vh2ag",
      indoorUnitId: "slimair-shd60vc2ag",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-20000-cfg-1",
      slug: "slimair-shc-series-wall-single-20000-cfg-1",
      modelId: "slimair-shc-series-wall-single-20000",
      outdoorUnitId: "slimair-shc24ah2ag",
      indoorUnitId: "slimair-shs24ac2ag",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.4,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-18000-cfg-1",
      slug: "slimair-shc-series-central-ducted-18000-cfg-1",
      modelId: "slimair-shc-series-central-ducted-18000",
      outdoorUnitId: "slimair-shc18ae224v",
      indoorUnitId: "slimair-shv18ae2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-18000-cfg-2",
      slug: "slimair-shc-series-central-ducted-18000-cfg-2",
      modelId: "slimair-shc-series-central-ducted-18000",
      outdoorUnitId: "slimair-shc18ah224v",
      indoorUnitId: "slimair-shv18ae2ag",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-24000-cfg-1",
      slug: "slimair-shc-series-central-ducted-24000-cfg-1",
      modelId: "slimair-shc-series-central-ducted-24000",
      outdoorUnitId: "slimair-shc24ae224v",
      indoorUnitId: "slimair-shv24ae2ag",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.1,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-24000-cfg-2",
      slug: "slimair-shc-series-central-ducted-24000-cfg-2",
      modelId: "slimair-shc-series-central-ducted-24000",
      outdoorUnitId: "slimair-shc24ah224v",
      indoorUnitId: "slimair-shv24ae2ag",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-30000-cfg-1",
      slug: "slimair-standard-wall-single-30000-cfg-1",
      modelId: "slimair-standard-wall-single-30000",
      outdoorUnitId: "slimair-shc30ae224v",
      indoorUnitId: "slimair-shv30ae2ag",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-36000-cfg-1",
      slug: "slimair-shc-series-central-ducted-36000-cfg-1",
      modelId: "slimair-shc-series-central-ducted-36000",
      outdoorUnitId: "slimair-shc36ae224v",
      indoorUnitId: "slimair-shv36ae2ag",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-36000-cfg-2",
      slug: "slimair-shc-series-central-ducted-36000-cfg-2",
      modelId: "slimair-shc-series-central-ducted-36000",
      outdoorUnitId: "slimair-shc36ah224v",
      indoorUnitId: "slimair-shv36ae2ag",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-48000-cfg-1",
      slug: "slimair-shc-series-central-ducted-48000-cfg-1",
      modelId: "slimair-shc-series-central-ducted-48000",
      outdoorUnitId: "slimair-shc48ae224v",
      indoorUnitId: "slimair-shv48ae2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-48000-cfg-2",
      slug: "slimair-shc-series-central-ducted-48000-cfg-2",
      modelId: "slimair-shc-series-central-ducted-48000",
      outdoorUnitId: "slimair-shc60ae224v",
      indoorUnitId: "slimair-shv60ae2ag",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-48000-cfg-3",
      slug: "slimair-shc-series-central-ducted-48000-cfg-3",
      modelId: "slimair-shc-series-central-ducted-48000",
      outdoorUnitId: "slimair-shc48ah224v",
      indoorUnitId: "slimair-shv48ae2ag",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-48000-cfg-4",
      slug: "slimair-shc-series-central-ducted-48000-cfg-4",
      modelId: "slimair-shc-series-central-ducted-48000",
      outdoorUnitId: "slimair-shc60ah224v",
      indoorUnitId: "slimair-shv60ae2ag",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-30000-cfg-1",
      slug: "slimair-shc-series-central-ducted-30000-cfg-1",
      modelId: "slimair-shc-series-central-ducted-30000",
      outdoorUnitId: "slimair-shc30ah224v",
      indoorUnitId: "slimair-shv30ae2ag",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-42000-cfg-1",
      slug: "slimair-shc-series-wall-single-42000-cfg-1",
      modelId: "slimair-shc-series-wall-single-42000",
      outdoorUnitId: "slimair-shc6z48ac2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-42000-cfg-2",
      slug: "slimair-shc-series-wall-single-42000-cfg-2",
      modelId: "slimair-shc-series-wall-single-42000",
      outdoorUnitId: "slimair-shc6z48ac2ag",
      indoorUnitId: "slimair-appareils-avec-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-42000-cfg-3",
      slug: "slimair-shc-series-wall-single-42000-cfg-3",
      modelId: "slimair-shc-series-wall-single-42000",
      outdoorUnitId: "slimair-shc6z48ac2ag",
      indoorUnitId: "slimair-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.85,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-42000-cfg-4",
      slug: "slimair-shc-series-wall-single-42000-cfg-4",
      modelId: "slimair-shc-series-wall-single-42000",
      outdoorUnitId: "slimair-shc6z48ah2ag",
      indoorUnitId: "slimair-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "slimair-shc-series-wall-single-9000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-4",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-5",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-6",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-7",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-8",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-9",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-10",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-11",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-12",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-13",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-14",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-15",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-16",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-17",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-18",
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
      configurationId: "slimair-shc-series-wall-single-9000-cfg-19",
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
      configurationId: "slimair-standard-wall-single-12000-cfg-1",
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
      configurationId: "slimair-standard-wall-single-12000-cfg-2",
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
      configurationId: "slimair-standard-wall-single-12000-cfg-3",
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
      configurationId: "slimair-standard-wall-single-12000-cfg-4",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-4",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-5",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-6",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-7",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-8",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-9",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-10",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-11",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-12",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-13",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-14",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-15",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-16",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-17",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-18",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-19",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-20",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-21",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-22",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-23",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-24",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-25",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-26",
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
      configurationId: "slimair-shc-series-wall-single-18000-cfg-27",
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
      configurationId: "slimair-standard-wall-single-24000-cfg-1",
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
      configurationId: "slimair-standard-wall-single-36000-cfg-1",
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
      configurationId: "slimair-standard-wall-single-36000-cfg-2",
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
      configurationId: "slimair-standard-wall-single-36000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-4",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-5",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-6",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-7",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-8",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-9",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-10",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-11",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-12",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-13",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-14",
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
      configurationId: "slimair-shc-series-wall-single-12000-cfg-15",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-4",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-5",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-6",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-7",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-8",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-9",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-10",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-11",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-12",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-13",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-14",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-15",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-16",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-17",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-18",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-19",
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
      configurationId: "slimair-shc-series-wall-single-24000-cfg-20",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-4",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-5",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-6",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-7",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-8",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-9",
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
      configurationId: "slimair-shc-series-wall-single-30000-cfg-10",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-4",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-5",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-6",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-7",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-8",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-9",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-10",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-11",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-12",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-13",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-14",
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
      configurationId: "slimair-shc-series-wall-single-36000-cfg-15",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-4",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-5",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-6",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-7",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-8",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-9",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-10",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-11",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-12",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-13",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-14",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-15",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-16",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-17",
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
      configurationId: "slimair-shc-series-wall-single-48000-cfg-18",
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
      configurationId: "slimair-shc-series-wall-single-15000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-15000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-15000-cfg-3",
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
      configurationId: "slimair-standard-wall-single-60000-cfg-1",
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
      configurationId: "slimair-standard-wall-single-60000-cfg-2",
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
      configurationId: "slimair-standard-wall-single-60000-cfg-3",
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
      configurationId: "slimair-standard-wall-single-60000-cfg-4",
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
      configurationId: "slimair-standard-wall-single-60000-cfg-5",
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
      configurationId: "slimair-standard-wall-single-60000-cfg-6",
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
      configurationId: "slimair-standard-wall-single-60000-cfg-7",
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
      configurationId: "slimair-shc-series-wall-single-60000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-60000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-60000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-60000-cfg-4",
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
      configurationId: "slimair-shc-series-wall-single-6000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-6000-cfg-2",
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
      configurationId: "slimair-shd-series-wall-single-9000-cfg-1",
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
      configurationId: "slimair-shd-series-wall-single-9000-cfg-2",
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
      configurationId: "slimair-shd-series-wall-single-12000-cfg-1",
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
      configurationId: "slimair-shd-series-wall-single-12000-cfg-2",
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
      configurationId: "slimair-shd-series-wall-single-18000-cfg-1",
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
      configurationId: "slimair-shd-series-wall-single-18000-cfg-2",
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
      configurationId: "slimair-shd-series-wall-single-24000-cfg-1",
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
      configurationId: "slimair-shd-series-wall-single-24000-cfg-2",
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
      configurationId: "slimair-standard-wall-single-48000-cfg-1",
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
      configurationId: "slimair-standard-wall-single-48000-cfg-2",
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
      configurationId: "slimair-shd-series-wall-single-36000-cfg-1",
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
      configurationId: "slimair-shd-series-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shd-series-wall-single-60000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-20000-cfg-1",
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
      configurationId: "slimair-shc-series-central-ducted-18000-cfg-1",
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
      configurationId: "slimair-shc-series-central-ducted-18000-cfg-2",
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
      configurationId: "slimair-shc-series-central-ducted-24000-cfg-1",
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
      configurationId: "slimair-shc-series-central-ducted-24000-cfg-2",
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
      configurationId: "slimair-standard-wall-single-30000-cfg-1",
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
      configurationId: "slimair-shc-series-central-ducted-36000-cfg-1",
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
      configurationId: "slimair-shc-series-central-ducted-36000-cfg-2",
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
      configurationId: "slimair-shc-series-central-ducted-48000-cfg-1",
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
      configurationId: "slimair-shc-series-central-ducted-48000-cfg-2",
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
      configurationId: "slimair-shc-series-central-ducted-48000-cfg-3",
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
      configurationId: "slimair-shc-series-central-ducted-48000-cfg-4",
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
      configurationId: "slimair-shc-series-central-ducted-30000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-42000-cfg-1",
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
      configurationId: "slimair-shc-series-wall-single-42000-cfg-2",
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
      configurationId: "slimair-shc-series-wall-single-42000-cfg-3",
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
      configurationId: "slimair-shc-series-wall-single-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
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
