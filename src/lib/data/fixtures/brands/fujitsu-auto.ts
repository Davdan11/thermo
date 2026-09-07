import type { BrandDataset } from "../../types";

export const fujitsuDataset: BrandDataset = {
  brand: {
    id: "fujitsu",
    slug: "fujitsu",
    name: "FUJITSU",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "fujitsu-h-series",
      slug: "fujitsu-h-series",
      name: "H-Series",
      brandId: "fujitsu",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard",
      slug: "fujitsu-standard",
      name: "Standard",
      brandId: "fujitsu",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series",
      slug: "fujitsu-airstage-h-series",
      name: "AIRSTAGE H series",
      brandId: "fujitsu",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s",
      slug: "fujitsu-j-7s",
      name: "J-7S",
      brandId: "fujitsu",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "fujitsu-h-series-wall-single-20000",
      slug: "fujitsu-h-series-wall-single-20000",
      name: "H-Series 20 000 BTU",
      seriesId: "fujitsu-h-series",
      brandId: "fujitsu",
      modelNumber: "H-Series 20k",
      normalizedModelNumber: "h-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 14100,
      heatingCapacity5FMaxBtu: 18000,
      seer2Min: 17.8,
      seer2Max: 22.5,
      hspf2Min: 8.7,
      hspf2Max: 11.4,
      cop5FMin: 2.04,
      cop5FMax: 2.06,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000",
      slug: "fujitsu-h-series-wall-single-18000",
      name: "H-Series 18 000 BTU",
      seriesId: "fujitsu-h-series",
      brandId: "fujitsu",
      modelNumber: "H-Series 18k",
      normalizedModelNumber: "h-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 12300,
      heatingCapacity5FMaxBtu: 15800,
      seer2Min: 16.7,
      seer2Max: 23.5,
      hspf2Min: 8.7,
      hspf2Max: 11.5,
      cop5FMin: 1.84,
      cop5FMax: 2.32,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-9000",
      slug: "fujitsu-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5200,
      heatingCapacity5FMaxBtu: 7600,
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
      id: "fujitsu-standard-wall-single-12000",
      slug: "fujitsu-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 10400,
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
      id: "fujitsu-standard-wall-single-18000",
      slug: "fujitsu-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11200,
      heatingCapacity5FMaxBtu: 14600,
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
      id: "fujitsu-h-series-wall-single-9000",
      slug: "fujitsu-h-series-wall-single-9000",
      name: "H-Series 9 000 BTU",
      seriesId: "fujitsu-h-series",
      brandId: "fujitsu",
      modelNumber: "H-Series 9k",
      normalizedModelNumber: "h-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6200,
      heatingCapacity5FMaxBtu: 7800,
      seer2Min: 20,
      seer2Max: 33.1,
      hspf2Min: 10,
      hspf2Max: 13.4,
      cop5FMin: 1.9,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000",
      slug: "fujitsu-h-series-wall-single-12000",
      name: "H-Series 12 000 BTU",
      seriesId: "fujitsu-h-series",
      brandId: "fujitsu",
      modelNumber: "H-Series 12k",
      normalizedModelNumber: "h-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 10700,
      seer2Min: 19.1,
      seer2Max: 29.4,
      hspf2Min: 10.5,
      hspf2Max: 12.9,
      cop5FMin: 1.9,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-15000",
      slug: "fujitsu-h-series-wall-single-15000",
      name: "H-Series 15 000 BTU",
      seriesId: "fujitsu-h-series",
      brandId: "fujitsu",
      modelNumber: "H-Series 15k",
      normalizedModelNumber: "h-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14500,
      heatingCapacity5FMinBtu: 11200,
      heatingCapacity5FMaxBtu: 11600,
      seer2Min: 20.3,
      seer2Max: 25.3,
      hspf2Min: 10.5,
      hspf2Max: 12.8,
      cop5FMin: 1.84,
      cop5FMax: 2.52,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-24000",
      slug: "fujitsu-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 15300,
      heatingCapacity5FMaxBtu: 15400,
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
      id: "fujitsu-standard-wall-single-36000",
      slug: "fujitsu-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 21400,
      heatingCapacity5FMaxBtu: 28200,
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
      id: "fujitsu-standard-wall-single-60000",
      slug: "fujitsu-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 41500,
      heatingCapacity5FMaxBtu: 43500,
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
      id: "fujitsu-standard-wall-single-48000",
      slug: "fujitsu-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 31400,
      heatingCapacity5FMaxBtu: 38500,
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
      id: "fujitsu-standard-wall-single-15000",
      slug: "fujitsu-standard-wall-single-15000",
      name: "Standard 15 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 15k",
      normalizedModelNumber: "standard-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11200,
      heatingCapacity5FMaxBtu: 11200,
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
      id: "fujitsu-standard-wall-single-20000",
      slug: "fujitsu-standard-wall-single-20000",
      name: "Standard 20 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 20k",
      normalizedModelNumber: "standard-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 18000,
      heatingCapacity5FMaxBtu: 18000,
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
      id: "fujitsu-h-series-wall-single-36000",
      slug: "fujitsu-h-series-wall-single-36000",
      name: "H-Series 36 000 BTU",
      seriesId: "fujitsu-h-series",
      brandId: "fujitsu",
      modelNumber: "H-Series 36k",
      normalizedModelNumber: "h-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 21400,
      heatingCapacity5FMaxBtu: 29400,
      seer2Min: 17.1,
      seer2Max: 20.5,
      hspf2Min: 8.7,
      hspf2Max: 9.5,
      cop5FMin: 2,
      cop5FMax: 2.02,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-42000",
      slug: "fujitsu-standard-wall-single-42000",
      name: "Standard 42 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 42k",
      normalizedModelNumber: "standard-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 27800,
      heatingCapacity5FMaxBtu: 29600,
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
      id: "fujitsu-h-series-wall-single-30000",
      slug: "fujitsu-h-series-wall-single-30000",
      name: "H-Series 30 000 BTU",
      seriesId: "fujitsu-h-series",
      brandId: "fujitsu",
      modelNumber: "H-Series 30k",
      normalizedModelNumber: "h-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 18900,
      heatingCapacity5FMaxBtu: 21800,
      seer2Min: 18.7,
      seer2Max: 21.5,
      hspf2Min: 9.7,
      hspf2Max: 10.6,
      cop5FMin: 1.76,
      cop5FMax: 2.12,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-30000",
      slug: "fujitsu-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 19400,
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
      id: "fujitsu-h-series-wall-single-24000",
      slug: "fujitsu-h-series-wall-single-24000",
      name: "H-Series 24 000 BTU",
      seriesId: "fujitsu-h-series",
      brandId: "fujitsu",
      modelNumber: "H-Series 24k",
      normalizedModelNumber: "h-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16400,
      heatingCapacity5FMaxBtu: 18700,
      seer2Min: 16,
      seer2Max: 23,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.94,
      cop5FMax: 2.12,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-9000",
      slug: "fujitsu-airstage-h-series-wall-single-9000",
      name: "AIRSTAGE H series 9 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H series 9k",
      normalizedModelNumber: "airstage-h-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6400,
      heatingCapacity5FMaxBtu: 7900,
      seer2Min: 24.4,
      seer2Max: 33.5,
      hspf2Min: 10.8,
      hspf2Max: 14,
      cop5FMin: 2.22,
      cop5FMax: 2.48,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-12000",
      slug: "fujitsu-airstage-h-series-wall-single-12000",
      name: "AIRSTAGE H series 12 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H series 12k",
      normalizedModelNumber: "airstage-h-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8700,
      heatingCapacity5FMaxBtu: 10700,
      seer2Min: 19.1,
      seer2Max: 31.5,
      hspf2Min: 10.3,
      hspf2Max: 13.7,
      cop5FMin: 2.02,
      cop5FMax: 2.62,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-15000",
      slug: "fujitsu-airstage-h-series-wall-single-15000",
      name: "AIRSTAGE H-Series 15 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H-Series 15k",
      normalizedModelNumber: "airstage-h-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      heatingCapacity5FMinBtu: 10800,
      heatingCapacity5FMaxBtu: 11400,
      seer2Min: 27.5,
      seer2Max: 28.7,
      hspf2Min: 12.7,
      hspf2Max: 13,
      cop5FMin: 2.1,
      cop5FMax: 2.52,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-30000",
      slug: "fujitsu-airstage-h-series-wall-single-30000",
      name: "AIRSTAGE H-Series 30 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H-Series 30k",
      normalizedModelNumber: "airstage-h-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 19600,
      heatingCapacity5FMaxBtu: 22400,
      seer2Min: 18.5,
      seer2Max: 22.4,
      hspf2Min: 10,
      hspf2Max: 10.6,
      cop5FMin: 2.04,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000",
      slug: "fujitsu-airstage-h-series-wall-single-18000",
      name: "AIRSTAGE H-series 18 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H-series 18k",
      normalizedModelNumber: "airstage-h-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11300,
      heatingCapacity5FMaxBtu: 16100,
      seer2Min: 18.6,
      seer2Max: 26.3,
      hspf2Min: 9.5,
      hspf2Max: 12.5,
      cop5FMin: 2,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-24000",
      slug: "fujitsu-airstage-h-series-wall-single-24000",
      name: "AIRSTAGE H-series 24 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H-series 24k",
      normalizedModelNumber: "airstage-h-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 17800,
      heatingCapacity5FMaxBtu: 18200,
      seer2Min: 17.7,
      seer2Max: 23.2,
      hspf2Min: 10.1,
      hspf2Max: 11,
      cop5FMin: 2.04,
      cop5FMax: 2.14,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000",
      slug: "fujitsu-airstage-h-series-wall-single-36000",
      name: "AIRSTAGE H-series 36 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H-series 36k",
      normalizedModelNumber: "airstage-h-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 23400,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 17.6,
      seer2Max: 22,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 1.9,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-20000",
      slug: "fujitsu-airstage-h-series-wall-single-20000",
      name: "AIRSTAGE H series 20 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H series 20k",
      normalizedModelNumber: "airstage-h-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 14800,
      heatingCapacity5FMaxBtu: 16200,
      seer2Min: 19.5,
      seer2Max: 24,
      hspf2Min: 9.5,
      hspf2Max: 11.9,
      cop5FMin: 2.04,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-42000",
      slug: "fujitsu-airstage-h-series-wall-single-42000",
      name: "AIRSTAGE H-series 42 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H-series 42k",
      normalizedModelNumber: "airstage-h-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 43000,
      heatingCapacity5FMinBtu: 30600,
      heatingCapacity5FMaxBtu: 32000,
      seer2Min: 17.3,
      seer2Max: 22,
      hspf2Min: 9,
      hspf2Max: 10.4,
      cop5FMin: 2.14,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-48000",
      slug: "fujitsu-airstage-h-series-wall-single-48000",
      name: "AIRSTAGE H-series 48 000 BTU",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H-series 48k",
      normalizedModelNumber: "airstage-h-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 46000,
      heatingCapacity5FMinBtu: 36000,
      heatingCapacity5FMaxBtu: 37200,
      seer2Min: 16.4,
      seer2Max: 18.2,
      hspf2Min: 9.6,
      hspf2Max: 10.2,
      cop5FMin: 2.21,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-24000",
      slug: "fujitsu-j-7s-wall-single-24000",
      name: "J-7S 24 000 BTU",
      seriesId: "fujitsu-j-7s",
      brandId: "fujitsu",
      modelNumber: "J-7S 24k",
      normalizedModelNumber: "j-7s-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 17400,
      heatingCapacity5FMaxBtu: 17800,
      seer2Min: 16,
      seer2Max: 22.2,
      hspf2Min: 9.2,
      hspf2Max: 11.3,
      cop5FMin: 2.06,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-36000",
      slug: "fujitsu-j-7s-wall-single-36000",
      name: "J-7S 36 000 BTU",
      seriesId: "fujitsu-j-7s",
      brandId: "fujitsu",
      modelNumber: "J-7S 36k",
      normalizedModelNumber: "j-7s-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 26200,
      heatingCapacity5FMaxBtu: 26400,
      seer2Min: 16.1,
      seer2Max: 21.7,
      hspf2Min: 9.4,
      hspf2Max: 10.8,
      cop5FMin: 1.94,
      cop5FMax: 2.14,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-48000",
      slug: "fujitsu-j-7s-wall-single-48000",
      name: "J-7S 48 000 BTU",
      seriesId: "fujitsu-j-7s",
      brandId: "fujitsu",
      modelNumber: "J-7S 48k",
      normalizedModelNumber: "j-7s-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 34800,
      heatingCapacity5FMaxBtu: 35800,
      seer2Min: 15.4,
      seer2Max: 20.2,
      hspf2Min: 9,
      hspf2Max: 10.2,
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
      id: "fujitsu-aou24rlxfz",
      modelNumber: "AOU24RLXFZ",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rlxfzh",
      modelNumber: "AOU24RLXFZH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rlxfwh",
      modelNumber: "AOU24RLXFWH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24lmas1",
      modelNumber: "AOUH24LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlxfz",
      modelNumber: "AOU18RLXFZ",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlxfzh",
      modelNumber: "AOU18RLXFZH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlxfwh",
      modelNumber: "AOU18RLXFWH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rglx",
      modelNumber: "AOU18RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18luas1",
      modelNumber: "AOUH18LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18lmas1",
      modelNumber: "AOUH18LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rls2",
      modelNumber: "AOU9RLS2",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rlfc",
      modelNumber: "AOU9RLFC",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rlfw1",
      modelNumber: "AOU9RLFW1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rls3",
      modelNumber: "AOU9RLS3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rls3h",
      modelNumber: "AOU9RLS3H",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug09lmas1",
      modelNumber: "AOUG09LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aolh09knas1",
      modelNumber: "AOLH09KNAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rlfc",
      modelNumber: "AOU12RLFC",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rlfw1",
      modelNumber: "AOU12RLFW1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rls3h",
      modelNumber: "AOU12RLS3H",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rls3",
      modelNumber: "AOU12RLS3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug12lmas1",
      modelNumber: "AOUG12LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lpas1",
      modelNumber: "AOUH12LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12leas1",
      modelNumber: "AOUH12LEAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aolh12knas1",
      modelNumber: "AOLH12KNAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlfc",
      modelNumber: "AOU18RLFC",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlb",
      modelNumber: "AOU18RLB",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlxfw1",
      modelNumber: "AOU18RLXFW1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18lpas1",
      modelNumber: "AOUH18LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rlff",
      modelNumber: "AOU9RLFF",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rlffh",
      modelNumber: "AOU9RLFFH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug09lzas1",
      modelNumber: "AOUG09LZAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug09lzah1",
      modelNumber: "AOUG09LZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09lmah1",
      modelNumber: "AOUH09LMAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09luas1",
      modelNumber: "AOUH09LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09lpas1",
      modelNumber: "AOUH09LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09leas1",
      modelNumber: "AOUH09LEAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09lmas1",
      modelNumber: "AOUH09LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rlff",
      modelNumber: "AOU12RLFF",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rlffh",
      modelNumber: "AOU12RLFFH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug12lzas1",
      modelNumber: "AOUG12LZAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug12lzah1",
      modelNumber: "AOUG12LZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lmah1",
      modelNumber: "AOUH12LMAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12luas1",
      modelNumber: "AOUH12LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lmas1",
      modelNumber: "AOUH12LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lmbh1",
      modelNumber: "AOUH12LMBH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lmbs1",
      modelNumber: "AOUH12LMBS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou15rlff",
      modelNumber: "AOU15RLFF",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou15rlffh",
      modelNumber: "AOU15RLFFH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug15lzas1",
      modelNumber: "AOUG15LZAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug15lzah1",
      modelNumber: "AOUG15LZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rlb",
      modelNumber: "AOU24RLB",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24lpas1",
      modelNumber: "AOUH24LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlxfz1",
      modelNumber: "AOU36RLXFZ1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlavm",
      modelNumber: "AOU36RLAVM",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlavs",
      modelNumber: "AOU36RLAVS",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rglx",
      modelNumber: "AOU36RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlavm4",
      modelNumber: "AOU36RLAVM4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlavs4",
      modelNumber: "AOU36RLAVS4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36luas1",
      modelNumber: "AOUH36LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou60rlavm",
      modelNumber: "AOU60RLAVM",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou60rlavm4",
      modelNumber: "AOU60RLAVM4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rlavm",
      modelNumber: "AOU48RLAVM",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rlavs",
      modelNumber: "AOU48RLAVS",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rglx",
      modelNumber: "AOU48RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug48lmas1",
      modelNumber: "AOUG48LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rlavm4",
      modelNumber: "AOU48RLAVM4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rlavs4",
      modelNumber: "AOU48RLAVS4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh48lmah1",
      modelNumber: "AOUH48LMAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou15rls3",
      modelNumber: "AOU15RLS3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou15rls3h",
      modelNumber: "AOU15RLS3H",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rlxfw1",
      modelNumber: "AOU24RLXFW1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlxfzh",
      modelNumber: "AOU36RLXFZH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug36lmas1",
      modelNumber: "AOUG36LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou45rlxfz",
      modelNumber: "AOU45RLXFZ",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou42rglx",
      modelNumber: "AOU42RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou30rlxeh",
      modelNumber: "AOU30RLXEH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30luah1",
      modelNumber: "AOUH30LUAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30luas1",
      modelNumber: "AOUH30LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou30rglx",
      modelNumber: "AOU30RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30lpas1",
      modelNumber: "AOUH30LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36lpas1",
      modelNumber: "AOUH36LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36lmah1",
      modelNumber: "AOUH36LMAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rglx",
      modelNumber: "AOU24RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24luas1",
      modelNumber: "AOUH24LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09kmas1",
      modelNumber: "AOUH09KMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09kzah1",
      modelNumber: "AOUH09KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09kpas1",
      modelNumber: "AOUH09KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09kuas1",
      modelNumber: "AOUH09KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09ktap1",
      modelNumber: "AOUH09KTAP1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12kmas1",
      modelNumber: "AOUH12KMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12kzah1",
      modelNumber: "AOUH12KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12kpas1",
      modelNumber: "AOUH12KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12kuas1",
      modelNumber: "AOUH12KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12ktap1",
      modelNumber: "AOUH12KTAP1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh15kzah1",
      modelNumber: "AOUH15KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh15ktap1",
      modelNumber: "AOUH15KTAP1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30kpas1",
      modelNumber: "AOUH30KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kpas1",
      modelNumber: "AOUH36KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30kuas1",
      modelNumber: "AOUH30KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kuas1",
      modelNumber: "AOUH18KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kpas1",
      modelNumber: "AOUH18KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kwas2",
      modelNumber: "AOUH18KWAS2",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kwah2",
      modelNumber: "AOUH18KWAH2",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kzah1",
      modelNumber: "AOUH18KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kuas1",
      modelNumber: "AOUH24KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kuas",
      modelNumber: "AOUH36KUAS",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kuas1",
      modelNumber: "AOUH36KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kwas4",
      modelNumber: "AOUH36KWAS4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kwah4",
      modelNumber: "AOUH36KWAH4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kpas1",
      modelNumber: "AOUH24KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kwas3",
      modelNumber: "AOUH24KWAS3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kwah3",
      modelNumber: "AOUH24KWAH3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kzah1",
      modelNumber: "AOUH24KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh45kwas5",
      modelNumber: "AOUH45KWAS5",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh42kuas1",
      modelNumber: "AOUH42KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh48kuas1",
      modelNumber: "AOUH48KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouk024ssan7",
      modelNumber: "AOUK024SSAN7",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouk036ssan7",
      modelNumber: "AOUK036SSAN7",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouk048ssan7",
      modelNumber: "AOUK048SSAN7",
      brandId: "fujitsu",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "fujitsu-h-series-wall-single-20000-cfg-1",
      slug: "fujitsu-h-series-wall-single-20000-cfg-1",
      modelId: "fujitsu-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aou24rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 18.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-20000-cfg-2",
      slug: "fujitsu-h-series-wall-single-20000-cfg-2",
      modelId: "fujitsu-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aou24rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 18.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-20000-cfg-3",
      slug: "fujitsu-h-series-wall-single-20000-cfg-3",
      modelId: "fujitsu-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aou24rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-20000-cfg-4",
      slug: "fujitsu-h-series-wall-single-20000-cfg-4",
      modelId: "fujitsu-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aou24rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17.8,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-20000-cfg-5",
      slug: "fujitsu-h-series-wall-single-20000-cfg-5",
      modelId: "fujitsu-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aou24rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 18.9,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-20000-cfg-6",
      slug: "fujitsu-h-series-wall-single-20000-cfg-6",
      modelId: "fujitsu-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aou24rlxfwh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-20000-cfg-7",
      slug: "fujitsu-h-series-wall-single-20000-cfg-7",
      modelId: "fujitsu-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aouh24lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 22.5,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-1",
      slug: "fujitsu-h-series-wall-single-18000-cfg-1",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.15,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-2",
      slug: "fujitsu-h-series-wall-single-18000-cfg-2",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-3",
      slug: "fujitsu-h-series-wall-single-18000-cfg-3",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-4",
      slug: "fujitsu-h-series-wall-single-18000-cfg-4",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.25,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-5",
      slug: "fujitsu-h-series-wall-single-18000-cfg-5",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rlxfwh",
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
      id: "fujitsu-h-series-wall-single-18000-cfg-6",
      slug: "fujitsu-h-series-wall-single-18000-cfg-6",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-7",
      slug: "fujitsu-h-series-wall-single-18000-cfg-7",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-8",
      slug: "fujitsu-h-series-wall-single-18000-cfg-8",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-9",
      slug: "fujitsu-h-series-wall-single-18000-cfg-9",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 21.5,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-10",
      slug: "fujitsu-h-series-wall-single-18000-cfg-10",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-11",
      slug: "fujitsu-h-series-wall-single-18000-cfg-11",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 18.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-12",
      slug: "fujitsu-h-series-wall-single-18000-cfg-12",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-18000-cfg-13",
      slug: "fujitsu-h-series-wall-single-18000-cfg-13",
      modelId: "fujitsu-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-9000-cfg-1",
      slug: "fujitsu-standard-wall-single-9000-cfg-1",
      modelId: "fujitsu-standard-wall-single-9000",
      outdoorUnitId: "fujitsu-aou9rls2",
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
      id: "fujitsu-standard-wall-single-9000-cfg-2",
      slug: "fujitsu-standard-wall-single-9000-cfg-2",
      modelId: "fujitsu-standard-wall-single-9000",
      outdoorUnitId: "fujitsu-aou9rlfc",
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
      id: "fujitsu-standard-wall-single-9000-cfg-3",
      slug: "fujitsu-standard-wall-single-9000-cfg-3",
      modelId: "fujitsu-standard-wall-single-9000",
      outdoorUnitId: "fujitsu-aou9rlfc",
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
      id: "fujitsu-standard-wall-single-9000-cfg-4",
      slug: "fujitsu-standard-wall-single-9000-cfg-4",
      modelId: "fujitsu-standard-wall-single-9000",
      outdoorUnitId: "fujitsu-aou9rlfw1",
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
      id: "fujitsu-standard-wall-single-9000-cfg-5",
      slug: "fujitsu-standard-wall-single-9000-cfg-5",
      modelId: "fujitsu-standard-wall-single-9000",
      outdoorUnitId: "fujitsu-aou9rls3",
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
      id: "fujitsu-standard-wall-single-9000-cfg-6",
      slug: "fujitsu-standard-wall-single-9000-cfg-6",
      modelId: "fujitsu-standard-wall-single-9000",
      outdoorUnitId: "fujitsu-aou9rls3h",
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
      id: "fujitsu-standard-wall-single-9000-cfg-7",
      slug: "fujitsu-standard-wall-single-9000-cfg-7",
      modelId: "fujitsu-standard-wall-single-9000",
      outdoorUnitId: "fujitsu-aoug09lmas1",
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
      id: "fujitsu-standard-wall-single-9000-cfg-8",
      slug: "fujitsu-standard-wall-single-9000-cfg-8",
      modelId: "fujitsu-standard-wall-single-9000",
      outdoorUnitId: "fujitsu-aolh09knas1",
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
      id: "fujitsu-standard-wall-single-12000-cfg-1",
      slug: "fujitsu-standard-wall-single-12000-cfg-1",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aou12rlfc",
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
      id: "fujitsu-standard-wall-single-12000-cfg-2",
      slug: "fujitsu-standard-wall-single-12000-cfg-2",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aou12rlfc",
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
      id: "fujitsu-standard-wall-single-12000-cfg-3",
      slug: "fujitsu-standard-wall-single-12000-cfg-3",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aou12rlfw1",
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
      id: "fujitsu-standard-wall-single-12000-cfg-4",
      slug: "fujitsu-standard-wall-single-12000-cfg-4",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aou12rls3h",
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
      id: "fujitsu-standard-wall-single-12000-cfg-5",
      slug: "fujitsu-standard-wall-single-12000-cfg-5",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aou12rls3",
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
      id: "fujitsu-standard-wall-single-12000-cfg-6",
      slug: "fujitsu-standard-wall-single-12000-cfg-6",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aou12rls3h",
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
      id: "fujitsu-standard-wall-single-12000-cfg-7",
      slug: "fujitsu-standard-wall-single-12000-cfg-7",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aou12rlfc",
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
      id: "fujitsu-standard-wall-single-12000-cfg-8",
      slug: "fujitsu-standard-wall-single-12000-cfg-8",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aoug12lmas1",
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
      id: "fujitsu-standard-wall-single-12000-cfg-9",
      slug: "fujitsu-standard-wall-single-12000-cfg-9",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12lpas1",
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
      id: "fujitsu-standard-wall-single-12000-cfg-10",
      slug: "fujitsu-standard-wall-single-12000-cfg-10",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12leas1",
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
      id: "fujitsu-standard-wall-single-12000-cfg-11",
      slug: "fujitsu-standard-wall-single-12000-cfg-11",
      modelId: "fujitsu-standard-wall-single-12000",
      outdoorUnitId: "fujitsu-aolh12knas1",
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
      id: "fujitsu-standard-wall-single-18000-cfg-1",
      slug: "fujitsu-standard-wall-single-18000-cfg-1",
      modelId: "fujitsu-standard-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rlfc",
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
      id: "fujitsu-standard-wall-single-18000-cfg-2",
      slug: "fujitsu-standard-wall-single-18000-cfg-2",
      modelId: "fujitsu-standard-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rlfc",
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
      id: "fujitsu-standard-wall-single-18000-cfg-3",
      slug: "fujitsu-standard-wall-single-18000-cfg-3",
      modelId: "fujitsu-standard-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rlb",
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
      id: "fujitsu-standard-wall-single-18000-cfg-4",
      slug: "fujitsu-standard-wall-single-18000-cfg-4",
      modelId: "fujitsu-standard-wall-single-18000",
      outdoorUnitId: "fujitsu-aou18rlxfw1",
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
      id: "fujitsu-standard-wall-single-18000-cfg-5",
      slug: "fujitsu-standard-wall-single-18000-cfg-5",
      modelId: "fujitsu-standard-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18lpas1",
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
      id: "fujitsu-h-series-wall-single-9000-cfg-1",
      slug: "fujitsu-h-series-wall-single-9000-cfg-1",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aou9rlff",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-2",
      slug: "fujitsu-h-series-wall-single-9000-cfg-2",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aou9rlffh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-3",
      slug: "fujitsu-h-series-wall-single-9000-cfg-3",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aoug09lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-4",
      slug: "fujitsu-h-series-wall-single-9000-cfg-4",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aoug09lzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-5",
      slug: "fujitsu-h-series-wall-single-9000-cfg-5",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09lmah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.5,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-6",
      slug: "fujitsu-h-series-wall-single-9000-cfg-6",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23.5,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-7",
      slug: "fujitsu-h-series-wall-single-9000-cfg-7",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23.5,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-8",
      slug: "fujitsu-h-series-wall-single-9000-cfg-8",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aoug09lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-9",
      slug: "fujitsu-h-series-wall-single-9000-cfg-9",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aoug09lzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-10",
      slug: "fujitsu-h-series-wall-single-9000-cfg-10",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09lpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-11",
      slug: "fujitsu-h-series-wall-single-9000-cfg-11",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09leas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-9000-cfg-12",
      slug: "fujitsu-h-series-wall-single-9000-cfg-12",
      modelId: "fujitsu-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.5,
      hspf2: 12.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-1",
      slug: "fujitsu-h-series-wall-single-12000-cfg-1",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aou12rlff",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-2",
      slug: "fujitsu-h-series-wall-single-12000-cfg-2",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aou12rlffh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-3",
      slug: "fujitsu-h-series-wall-single-12000-cfg-3",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aoug12lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.4,
      hspf2: 12.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-4",
      slug: "fujitsu-h-series-wall-single-12000-cfg-4",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aoug12lzah1",
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
      id: "fujitsu-h-series-wall-single-12000-cfg-5",
      slug: "fujitsu-h-series-wall-single-12000-cfg-5",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12lmah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-6",
      slug: "fujitsu-h-series-wall-single-12000-cfg-6",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-7",
      slug: "fujitsu-h-series-wall-single-12000-cfg-7",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-8",
      slug: "fujitsu-h-series-wall-single-12000-cfg-8",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aoug12lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.4,
      hspf2: 12.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-9",
      slug: "fujitsu-h-series-wall-single-12000-cfg-9",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aoug12lzah1",
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
      id: "fujitsu-h-series-wall-single-12000-cfg-10",
      slug: "fujitsu-h-series-wall-single-12000-cfg-10",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-11",
      slug: "fujitsu-h-series-wall-single-12000-cfg-11",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-12",
      slug: "fujitsu-h-series-wall-single-12000-cfg-12",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12lmbh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-12000-cfg-13",
      slug: "fujitsu-h-series-wall-single-12000-cfg-13",
      modelId: "fujitsu-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12lmbs1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-15000-cfg-1",
      slug: "fujitsu-h-series-wall-single-15000-cfg-1",
      modelId: "fujitsu-h-series-wall-single-15000",
      outdoorUnitId: "fujitsu-aou15rlff",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: 20.3,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-15000-cfg-2",
      slug: "fujitsu-h-series-wall-single-15000-cfg-2",
      modelId: "fujitsu-h-series-wall-single-15000",
      outdoorUnitId: "fujitsu-aou15rlffh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: 20.3,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-15000-cfg-3",
      slug: "fujitsu-h-series-wall-single-15000-cfg-3",
      modelId: "fujitsu-h-series-wall-single-15000",
      outdoorUnitId: "fujitsu-aoug15lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 25.3,
      hspf2: 12.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-15000-cfg-4",
      slug: "fujitsu-h-series-wall-single-15000-cfg-4",
      modelId: "fujitsu-h-series-wall-single-15000",
      outdoorUnitId: "fujitsu-aoug15lzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 25.3,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-15000-cfg-5",
      slug: "fujitsu-h-series-wall-single-15000-cfg-5",
      modelId: "fujitsu-h-series-wall-single-15000",
      outdoorUnitId: "fujitsu-aoug15lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 25.3,
      hspf2: 12.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-15000-cfg-6",
      slug: "fujitsu-h-series-wall-single-15000-cfg-6",
      modelId: "fujitsu-h-series-wall-single-15000",
      outdoorUnitId: "fujitsu-aoug15lzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 25.3,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-24000-cfg-1",
      slug: "fujitsu-standard-wall-single-24000-cfg-1",
      modelId: "fujitsu-standard-wall-single-24000",
      outdoorUnitId: "fujitsu-aou24rlb",
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
      id: "fujitsu-standard-wall-single-24000-cfg-2",
      slug: "fujitsu-standard-wall-single-24000-cfg-2",
      modelId: "fujitsu-standard-wall-single-24000",
      outdoorUnitId: "fujitsu-aouh24lpas1",
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
      id: "fujitsu-standard-wall-single-36000-cfg-1",
      slug: "fujitsu-standard-wall-single-36000-cfg-1",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlxfz1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-36000-cfg-2",
      slug: "fujitsu-standard-wall-single-36000-cfg-2",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlxfz1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-36000-cfg-3",
      slug: "fujitsu-standard-wall-single-36000-cfg-3",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlxfz1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-36000-cfg-4",
      slug: "fujitsu-standard-wall-single-36000-cfg-4",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavm",
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
      id: "fujitsu-standard-wall-single-36000-cfg-5",
      slug: "fujitsu-standard-wall-single-36000-cfg-5",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavm",
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
      id: "fujitsu-standard-wall-single-36000-cfg-6",
      slug: "fujitsu-standard-wall-single-36000-cfg-6",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavm",
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
      id: "fujitsu-standard-wall-single-36000-cfg-7",
      slug: "fujitsu-standard-wall-single-36000-cfg-7",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavs",
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
      id: "fujitsu-standard-wall-single-36000-cfg-8",
      slug: "fujitsu-standard-wall-single-36000-cfg-8",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavs",
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
      id: "fujitsu-standard-wall-single-36000-cfg-9",
      slug: "fujitsu-standard-wall-single-36000-cfg-9",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavs",
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
      id: "fujitsu-standard-wall-single-36000-cfg-10",
      slug: "fujitsu-standard-wall-single-36000-cfg-10",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rglx",
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
      id: "fujitsu-standard-wall-single-36000-cfg-11",
      slug: "fujitsu-standard-wall-single-36000-cfg-11",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rglx",
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
      id: "fujitsu-standard-wall-single-36000-cfg-12",
      slug: "fujitsu-standard-wall-single-36000-cfg-12",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavm4",
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
      id: "fujitsu-standard-wall-single-36000-cfg-13",
      slug: "fujitsu-standard-wall-single-36000-cfg-13",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavm4",
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
      id: "fujitsu-standard-wall-single-36000-cfg-14",
      slug: "fujitsu-standard-wall-single-36000-cfg-14",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavs4",
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
      id: "fujitsu-standard-wall-single-36000-cfg-15",
      slug: "fujitsu-standard-wall-single-36000-cfg-15",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavs4",
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
      id: "fujitsu-standard-wall-single-36000-cfg-16",
      slug: "fujitsu-standard-wall-single-36000-cfg-16",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavm4",
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
      id: "fujitsu-standard-wall-single-36000-cfg-17",
      slug: "fujitsu-standard-wall-single-36000-cfg-17",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlavs4",
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
      id: "fujitsu-standard-wall-single-36000-cfg-18",
      slug: "fujitsu-standard-wall-single-36000-cfg-18",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36luas1",
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
      id: "fujitsu-standard-wall-single-36000-cfg-19",
      slug: "fujitsu-standard-wall-single-36000-cfg-19",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36luas1",
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
      id: "fujitsu-standard-wall-single-36000-cfg-20",
      slug: "fujitsu-standard-wall-single-36000-cfg-20",
      modelId: "fujitsu-standard-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36luas1",
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
      id: "fujitsu-standard-wall-single-60000-cfg-1",
      slug: "fujitsu-standard-wall-single-60000-cfg-1",
      modelId: "fujitsu-standard-wall-single-60000",
      outdoorUnitId: "fujitsu-aou60rlavm",
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
      id: "fujitsu-standard-wall-single-60000-cfg-2",
      slug: "fujitsu-standard-wall-single-60000-cfg-2",
      modelId: "fujitsu-standard-wall-single-60000",
      outdoorUnitId: "fujitsu-aou60rlavm",
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
      id: "fujitsu-standard-wall-single-60000-cfg-3",
      slug: "fujitsu-standard-wall-single-60000-cfg-3",
      modelId: "fujitsu-standard-wall-single-60000",
      outdoorUnitId: "fujitsu-aou60rlavm",
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
      id: "fujitsu-standard-wall-single-60000-cfg-4",
      slug: "fujitsu-standard-wall-single-60000-cfg-4",
      modelId: "fujitsu-standard-wall-single-60000",
      outdoorUnitId: "fujitsu-aou60rlavm4",
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
      id: "fujitsu-standard-wall-single-60000-cfg-5",
      slug: "fujitsu-standard-wall-single-60000-cfg-5",
      modelId: "fujitsu-standard-wall-single-60000",
      outdoorUnitId: "fujitsu-aou60rlavm4",
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
      id: "fujitsu-standard-wall-single-60000-cfg-6",
      slug: "fujitsu-standard-wall-single-60000-cfg-6",
      modelId: "fujitsu-standard-wall-single-60000",
      outdoorUnitId: "fujitsu-aou60rlavm4",
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
      id: "fujitsu-standard-wall-single-48000-cfg-1",
      slug: "fujitsu-standard-wall-single-48000-cfg-1",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavm",
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
      id: "fujitsu-standard-wall-single-48000-cfg-2",
      slug: "fujitsu-standard-wall-single-48000-cfg-2",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavm",
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
      id: "fujitsu-standard-wall-single-48000-cfg-3",
      slug: "fujitsu-standard-wall-single-48000-cfg-3",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavm",
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
      id: "fujitsu-standard-wall-single-48000-cfg-4",
      slug: "fujitsu-standard-wall-single-48000-cfg-4",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavs",
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
      id: "fujitsu-standard-wall-single-48000-cfg-5",
      slug: "fujitsu-standard-wall-single-48000-cfg-5",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavs",
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
      id: "fujitsu-standard-wall-single-48000-cfg-6",
      slug: "fujitsu-standard-wall-single-48000-cfg-6",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavs",
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
      id: "fujitsu-standard-wall-single-48000-cfg-7",
      slug: "fujitsu-standard-wall-single-48000-cfg-7",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rglx",
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
      id: "fujitsu-standard-wall-single-48000-cfg-8",
      slug: "fujitsu-standard-wall-single-48000-cfg-8",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rglx",
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
      id: "fujitsu-standard-wall-single-48000-cfg-9",
      slug: "fujitsu-standard-wall-single-48000-cfg-9",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aoug48lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-48000-cfg-10",
      slug: "fujitsu-standard-wall-single-48000-cfg-10",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavm4",
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
      id: "fujitsu-standard-wall-single-48000-cfg-11",
      slug: "fujitsu-standard-wall-single-48000-cfg-11",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavm4",
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
      id: "fujitsu-standard-wall-single-48000-cfg-12",
      slug: "fujitsu-standard-wall-single-48000-cfg-12",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavs4",
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
      id: "fujitsu-standard-wall-single-48000-cfg-13",
      slug: "fujitsu-standard-wall-single-48000-cfg-13",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavs4",
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
      id: "fujitsu-standard-wall-single-48000-cfg-14",
      slug: "fujitsu-standard-wall-single-48000-cfg-14",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavm4",
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
      id: "fujitsu-standard-wall-single-48000-cfg-15",
      slug: "fujitsu-standard-wall-single-48000-cfg-15",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aou48rlavs4",
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
      id: "fujitsu-standard-wall-single-48000-cfg-16",
      slug: "fujitsu-standard-wall-single-48000-cfg-16",
      modelId: "fujitsu-standard-wall-single-48000",
      outdoorUnitId: "fujitsu-aouh48lmah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-15000-cfg-1",
      slug: "fujitsu-standard-wall-single-15000-cfg-1",
      modelId: "fujitsu-standard-wall-single-15000",
      outdoorUnitId: "fujitsu-aou15rls3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-15000-cfg-2",
      slug: "fujitsu-standard-wall-single-15000-cfg-2",
      modelId: "fujitsu-standard-wall-single-15000",
      outdoorUnitId: "fujitsu-aou15rls3h",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-20000-cfg-1",
      slug: "fujitsu-standard-wall-single-20000-cfg-1",
      modelId: "fujitsu-standard-wall-single-20000",
      outdoorUnitId: "fujitsu-aou24rlxfw1",
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
      id: "fujitsu-h-series-wall-single-36000-cfg-1",
      slug: "fujitsu-h-series-wall-single-36000-cfg-1",
      modelId: "fujitsu-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-36000-cfg-2",
      slug: "fujitsu-h-series-wall-single-36000-cfg-2",
      modelId: "fujitsu-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-36000-cfg-3",
      slug: "fujitsu-h-series-wall-single-36000-cfg-3",
      modelId: "fujitsu-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aou36rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.25,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-36000-cfg-4",
      slug: "fujitsu-h-series-wall-single-36000-cfg-4",
      modelId: "fujitsu-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aoug36lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.1,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-42000-cfg-1",
      slug: "fujitsu-standard-wall-single-42000-cfg-1",
      modelId: "fujitsu-standard-wall-single-42000",
      outdoorUnitId: "fujitsu-aou45rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-42000-cfg-2",
      slug: "fujitsu-standard-wall-single-42000-cfg-2",
      modelId: "fujitsu-standard-wall-single-42000",
      outdoorUnitId: "fujitsu-aou45rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-42000-cfg-3",
      slug: "fujitsu-standard-wall-single-42000-cfg-3",
      modelId: "fujitsu-standard-wall-single-42000",
      outdoorUnitId: "fujitsu-aou45rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-42000-cfg-4",
      slug: "fujitsu-standard-wall-single-42000-cfg-4",
      modelId: "fujitsu-standard-wall-single-42000",
      outdoorUnitId: "fujitsu-aou42rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-30000-cfg-1",
      slug: "fujitsu-h-series-wall-single-30000-cfg-1",
      modelId: "fujitsu-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aou30rlxeh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-30000-cfg-2",
      slug: "fujitsu-h-series-wall-single-30000-cfg-2",
      modelId: "fujitsu-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30luah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: 18.8,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-30000-cfg-3",
      slug: "fujitsu-h-series-wall-single-30000-cfg-3",
      modelId: "fujitsu-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-30000-cfg-4",
      slug: "fujitsu-h-series-wall-single-30000-cfg-4",
      modelId: "fujitsu-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-30000-cfg-5",
      slug: "fujitsu-h-series-wall-single-30000-cfg-5",
      modelId: "fujitsu-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-30000-cfg-6",
      slug: "fujitsu-h-series-wall-single-30000-cfg-6",
      modelId: "fujitsu-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-30000-cfg-1",
      slug: "fujitsu-standard-wall-single-30000-cfg-1",
      modelId: "fujitsu-standard-wall-single-30000",
      outdoorUnitId: "fujitsu-aou30rglx",
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
      id: "fujitsu-standard-wall-single-30000-cfg-2",
      slug: "fujitsu-standard-wall-single-30000-cfg-2",
      modelId: "fujitsu-standard-wall-single-30000",
      outdoorUnitId: "fujitsu-aou30rglx",
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
      id: "fujitsu-standard-wall-single-30000-cfg-3",
      slug: "fujitsu-standard-wall-single-30000-cfg-3",
      modelId: "fujitsu-standard-wall-single-30000",
      outdoorUnitId: "fujitsu-aou30rglx",
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
      id: "fujitsu-standard-wall-single-30000-cfg-4",
      slug: "fujitsu-standard-wall-single-30000-cfg-4",
      modelId: "fujitsu-standard-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30lpas1",
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
      id: "fujitsu-standard-wall-single-30000-cfg-5",
      slug: "fujitsu-standard-wall-single-30000-cfg-5",
      modelId: "fujitsu-standard-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh36lpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-30000-cfg-6",
      slug: "fujitsu-standard-wall-single-30000-cfg-6",
      modelId: "fujitsu-standard-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh36lmah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-24000-cfg-1",
      slug: "fujitsu-h-series-wall-single-24000-cfg-1",
      modelId: "fujitsu-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aou24rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.8,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-24000-cfg-2",
      slug: "fujitsu-h-series-wall-single-24000-cfg-2",
      modelId: "fujitsu-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aou24rglx",
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
      id: "fujitsu-h-series-wall-single-24000-cfg-3",
      slug: "fujitsu-h-series-wall-single-24000-cfg-3",
      modelId: "fujitsu-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aou24rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.8,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-24000-cfg-4",
      slug: "fujitsu-h-series-wall-single-24000-cfg-4",
      modelId: "fujitsu-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aouh24luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-24000-cfg-5",
      slug: "fujitsu-h-series-wall-single-24000-cfg-5",
      modelId: "fujitsu-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aouh24luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-24000-cfg-6",
      slug: "fujitsu-h-series-wall-single-24000-cfg-6",
      modelId: "fujitsu-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aouh24luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-24000-cfg-7",
      slug: "fujitsu-h-series-wall-single-24000-cfg-7",
      modelId: "fujitsu-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aouh24luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-9000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-9000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09kmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 30,
      hspf2: 12.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-9000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-9000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-9000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-9000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-9000-cfg-4",
      slug: "fujitsu-airstage-h-series-wall-single-9000-cfg-4",
      modelId: "fujitsu-airstage-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.4,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-9000-cfg-5",
      slug: "fujitsu-airstage-h-series-wall-single-9000-cfg-5",
      modelId: "fujitsu-airstage-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.5,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-9000-cfg-6",
      slug: "fujitsu-airstage-h-series-wall-single-9000-cfg-6",
      modelId: "fujitsu-airstage-h-series-wall-single-9000",
      outdoorUnitId: "fujitsu-aouh09ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.5,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-12000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-12000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12kmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27.5,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-12000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-12000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 30.5,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-12000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-12000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12kpas1",
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
      id: "fujitsu-airstage-h-series-wall-single-12000-cfg-4",
      slug: "fujitsu-airstage-h-series-wall-single-12000-cfg-4",
      modelId: "fujitsu-airstage-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-12000-cfg-5",
      slug: "fujitsu-airstage-h-series-wall-single-12000-cfg-5",
      modelId: "fujitsu-airstage-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-12000-cfg-6",
      slug: "fujitsu-airstage-h-series-wall-single-12000-cfg-6",
      modelId: "fujitsu-airstage-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 31.5,
      hspf2: 13.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-12000-cfg-7",
      slug: "fujitsu-airstage-h-series-wall-single-12000-cfg-7",
      modelId: "fujitsu-airstage-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 31.5,
      hspf2: 13.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-12000-cfg-8",
      slug: "fujitsu-airstage-h-series-wall-single-12000-cfg-8",
      modelId: "fujitsu-airstage-h-series-wall-single-12000",
      outdoorUnitId: "fujitsu-aouh12kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.9,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-15000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-15000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-15000",
      outdoorUnitId: "fujitsu-aouh15kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 27.5,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-15000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-15000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-15000",
      outdoorUnitId: "fujitsu-aouh15ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 28.7,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-15000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-15000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-15000",
      outdoorUnitId: "fujitsu-aouh15ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 28.7,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-30000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-30000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-30000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-30000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh36kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-30000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-30000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.8,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-30000-cfg-4",
      slug: "fujitsu-airstage-h-series-wall-single-30000-cfg-4",
      modelId: "fujitsu-airstage-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-30000-cfg-5",
      slug: "fujitsu-airstage-h-series-wall-single-30000-cfg-5",
      modelId: "fujitsu-airstage-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-30000-cfg-6",
      slug: "fujitsu-airstage-h-series-wall-single-30000-cfg-6",
      modelId: "fujitsu-airstage-h-series-wall-single-30000",
      outdoorUnitId: "fujitsu-aouh30kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.9,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.4,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 26.3,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-4",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-4",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.6,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-5",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-5",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-6",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-6",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kwas2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-7",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-7",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kwas2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-8",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-8",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kwah2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-9",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-9",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kwah2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-10",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-10",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kwas2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-11",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-11",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kwah2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-12",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-12",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.5,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-18000-cfg-13",
      slug: "fujitsu-airstage-h-series-wall-single-18000-cfg-13",
      modelId: "fujitsu-airstage-h-series-wall-single-18000",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-24000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-24000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aouh24kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-24000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-24000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aouh24kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.2,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-24000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-24000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aouh24kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-24000-cfg-4",
      slug: "fujitsu-airstage-h-series-wall-single-24000-cfg-4",
      modelId: "fujitsu-airstage-h-series-wall-single-24000",
      outdoorUnitId: "fujitsu-aouh24kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.7,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kuas",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.3,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-4",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-4",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kwas4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-5",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-5",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kwas4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-6",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-6",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kwas4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-7",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-7",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kwah4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-8",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-8",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kwah4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-9",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-9",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kwah4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-36000-cfg-10",
      slug: "fujitsu-airstage-h-series-wall-single-36000-cfg-10",
      modelId: "fujitsu-airstage-h-series-wall-single-36000",
      outdoorUnitId: "fujitsu-aouh36kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-20000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-20000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aouh24kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-20000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-20000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aouh24kwas3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-20000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-20000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aouh24kwas3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-20000-cfg-4",
      slug: "fujitsu-airstage-h-series-wall-single-20000-cfg-4",
      modelId: "fujitsu-airstage-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aouh24kwah3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 23.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-20000-cfg-5",
      slug: "fujitsu-airstage-h-series-wall-single-20000-cfg-5",
      modelId: "fujitsu-airstage-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aouh24kwah3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-20000-cfg-6",
      slug: "fujitsu-airstage-h-series-wall-single-20000-cfg-6",
      modelId: "fujitsu-airstage-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aouh24kwas3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-20000-cfg-7",
      slug: "fujitsu-airstage-h-series-wall-single-20000-cfg-7",
      modelId: "fujitsu-airstage-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aouh24kwah3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 22,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-20000-cfg-8",
      slug: "fujitsu-airstage-h-series-wall-single-20000-cfg-8",
      modelId: "fujitsu-airstage-h-series-wall-single-20000",
      outdoorUnitId: "fujitsu-aouh24kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24,
      hspf2: 11.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-42000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-42000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-42000",
      outdoorUnitId: "fujitsu-aouh45kwas5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-42000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-42000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-42000",
      outdoorUnitId: "fujitsu-aouh45kwas5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-42000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-42000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-42000",
      outdoorUnitId: "fujitsu-aouh45kwas5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-42000-cfg-4",
      slug: "fujitsu-airstage-h-series-wall-single-42000-cfg-4",
      modelId: "fujitsu-airstage-h-series-wall-single-42000",
      outdoorUnitId: "fujitsu-aouh42kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 19,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-42000-cfg-5",
      slug: "fujitsu-airstage-h-series-wall-single-42000-cfg-5",
      modelId: "fujitsu-airstage-h-series-wall-single-42000",
      outdoorUnitId: "fujitsu-aouh42kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 17.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-48000-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-48000-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single-48000",
      outdoorUnitId: "fujitsu-aouh48kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-48000-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-48000-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single-48000",
      outdoorUnitId: "fujitsu-aouh48kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-48000-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-48000-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single-48000",
      outdoorUnitId: "fujitsu-aouh48kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-24000-cfg-1",
      slug: "fujitsu-j-7s-wall-single-24000-cfg-1",
      modelId: "fujitsu-j-7s-wall-single-24000",
      outdoorUnitId: "fujitsu-aouk024ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.2,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-24000-cfg-2",
      slug: "fujitsu-j-7s-wall-single-24000-cfg-2",
      modelId: "fujitsu-j-7s-wall-single-24000",
      outdoorUnitId: "fujitsu-aouk024ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-24000-cfg-3",
      slug: "fujitsu-j-7s-wall-single-24000-cfg-3",
      modelId: "fujitsu-j-7s-wall-single-24000",
      outdoorUnitId: "fujitsu-aouk024ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.1,
      hspf2: 10.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-36000-cfg-1",
      slug: "fujitsu-j-7s-wall-single-36000-cfg-1",
      modelId: "fujitsu-j-7s-wall-single-36000",
      outdoorUnitId: "fujitsu-aouk036ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-36000-cfg-2",
      slug: "fujitsu-j-7s-wall-single-36000-cfg-2",
      modelId: "fujitsu-j-7s-wall-single-36000",
      outdoorUnitId: "fujitsu-aouk036ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-36000-cfg-3",
      slug: "fujitsu-j-7s-wall-single-36000-cfg-3",
      modelId: "fujitsu-j-7s-wall-single-36000",
      outdoorUnitId: "fujitsu-aouk036ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18.9,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-48000-cfg-1",
      slug: "fujitsu-j-7s-wall-single-48000-cfg-1",
      modelId: "fujitsu-j-7s-wall-single-48000",
      outdoorUnitId: "fujitsu-aouk048ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 20.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-48000-cfg-2",
      slug: "fujitsu-j-7s-wall-single-48000-cfg-2",
      modelId: "fujitsu-j-7s-wall-single-48000",
      outdoorUnitId: "fujitsu-aouk048ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 15.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-48000-cfg-3",
      slug: "fujitsu-j-7s-wall-single-48000-cfg-3",
      modelId: "fujitsu-j-7s-wall-single-48000",
      outdoorUnitId: "fujitsu-aouk048ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.8,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "fujitsu-h-series-wall-single-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-20000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-20000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-20000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-20000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-20000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-20000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-9",
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
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-18000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-9000-cfg-1",
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
      configurationId: "fujitsu-standard-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-9000-cfg-3",
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
      configurationId: "fujitsu-standard-wall-single-9000-cfg-4",
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
      configurationId: "fujitsu-standard-wall-single-9000-cfg-5",
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
      configurationId: "fujitsu-standard-wall-single-9000-cfg-6",
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
      configurationId: "fujitsu-standard-wall-single-9000-cfg-7",
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
      configurationId: "fujitsu-standard-wall-single-9000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-12000-cfg-4",
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
      configurationId: "fujitsu-standard-wall-single-12000-cfg-5",
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
      configurationId: "fujitsu-standard-wall-single-12000-cfg-6",
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
      configurationId: "fujitsu-standard-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-12000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-12000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-12000-cfg-10",
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
      configurationId: "fujitsu-standard-wall-single-12000-cfg-11",
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
      configurationId: "fujitsu-standard-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-18000-cfg-3",
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
      configurationId: "fujitsu-standard-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-18000-cfg-5",
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
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-1",
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
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-2",
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
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-9000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10700,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-12000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-15000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-15000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-15000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-15000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-15000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-15000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-24000-cfg-1",
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
      configurationId: "fujitsu-standard-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-6",
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
      configurationId: "fujitsu-standard-wall-single-36000-cfg-7",
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
      configurationId: "fujitsu-standard-wall-single-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-9",
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
      configurationId: "fujitsu-standard-wall-single-36000-cfg-10",
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
      configurationId: "fujitsu-standard-wall-single-36000-cfg-11",
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
      configurationId: "fujitsu-standard-wall-single-36000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-14",
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
      configurationId: "fujitsu-standard-wall-single-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-16",
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
      configurationId: "fujitsu-standard-wall-single-36000-cfg-17",
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
      configurationId: "fujitsu-standard-wall-single-36000-cfg-18",
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
      configurationId: "fujitsu-standard-wall-single-36000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-36000-cfg-20",
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
      configurationId: "fujitsu-standard-wall-single-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-60000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-60000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-60000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-60000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-60000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-48000-cfg-1",
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
      configurationId: "fujitsu-standard-wall-single-48000-cfg-2",
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
      configurationId: "fujitsu-standard-wall-single-48000-cfg-3",
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
      configurationId: "fujitsu-standard-wall-single-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-48000-cfg-5",
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
      configurationId: "fujitsu-standard-wall-single-48000-cfg-6",
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
      configurationId: "fujitsu-standard-wall-single-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-48000-cfg-10",
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
      configurationId: "fujitsu-standard-wall-single-48000-cfg-11",
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
      configurationId: "fujitsu-standard-wall-single-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-48000-cfg-13",
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
      configurationId: "fujitsu-standard-wall-single-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-48000-cfg-15",
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
      configurationId: "fujitsu-standard-wall-single-48000-cfg-16",
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
      configurationId: "fujitsu-standard-wall-single-15000-cfg-1",
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
      configurationId: "fujitsu-standard-wall-single-15000-cfg-2",
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
      configurationId: "fujitsu-standard-wall-single-20000-cfg-1",
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
      configurationId: "fujitsu-h-series-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-42000-cfg-3",
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
      configurationId: "fujitsu-standard-wall-single-42000-cfg-4",
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
      configurationId: "fujitsu-h-series-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.76,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-30000-cfg-1",
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
      configurationId: "fujitsu-standard-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-30000-cfg-4",
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
      configurationId: "fujitsu-standard-wall-single-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-30000-cfg-6",
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
      configurationId: "fujitsu-h-series-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18700,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18700,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-9000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-9000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-9000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-12000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10700,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-12000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10700,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-12000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.62,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.62,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-12000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-15000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-15000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-15000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-9",
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
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-18000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-20000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-20000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-20000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-20000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-20000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-20000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-20000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 2.05,
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
