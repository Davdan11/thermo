import type { BrandDataset } from "../../types";

export const hitachiDataset: BrandDataset = {
  brand: {
    id: "hitachi",
    slug: "hitachi",
    name: "HITACHI",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "hitachi-standard",
      slug: "hitachi-standard",
      name: "Standard",
      brandId: "hitachi",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni",
      slug: "hitachi-hi-uni",
      name: "Hi UNI",
      brandId: "hitachi",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700",
      slug: "hitachi-aircore700",
      name: "airCore700",
      brandId: "hitachi",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "hitachi-standard-wall-single-60000",
      slug: "hitachi-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 37500,
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
      id: "hitachi-standard-wall-single-36000",
      slug: "hitachi-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 27200,
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
      id: "hitachi-standard-wall-single-48000",
      slug: "hitachi-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 32000,
      heatingCapacity5FMaxBtu: 34000,
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
      id: "hitachi-standard-wall-single-18000",
      slug: "hitachi-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 12200,
      heatingCapacity5FMaxBtu: 16000,
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
      id: "hitachi-standard-wall-single-20000",
      slug: "hitachi-standard-wall-single-20000",
      name: "Standard 20 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 20k",
      normalizedModelNumber: "standard-20000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 15100,
      heatingCapacity5FMaxBtu: 17500,
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
      id: "hitachi-standard-wall-single-42000",
      slug: "hitachi-standard-wall-single-42000",
      name: "Standard 42 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 42k",
      normalizedModelNumber: "standard-42000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 33000,
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
      id: "hitachi-standard-wall-single-24000",
      slug: "hitachi-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 17500,
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
      id: "hitachi-hi-uni-wall-single-9000",
      slug: "hitachi-hi-uni-wall-single-9000",
      name: "Hi UNI 9 000 BTU",
      seriesId: "hitachi-hi-uni",
      brandId: "hitachi",
      modelNumber: "Hi UNI 9k",
      normalizedModelNumber: "hi-uni-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 5500,
      heatingCapacity5FMaxBtu: 6000,
      seer2Min: 18,
      seer2Max: 20.5,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 2.1,
      cop5FMax: 2.26,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-12000",
      slug: "hitachi-hi-uni-wall-single-12000",
      name: "Hi UNI 12 000 BTU",
      seriesId: "hitachi-hi-uni",
      brandId: "hitachi",
      modelNumber: "Hi UNI 12k",
      normalizedModelNumber: "hi-uni-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 7300,
      seer2Min: 20.5,
      seer2Max: 21.5,
      hspf2Min: 9,
      hspf2Max: 9.5,
      cop5FMin: 1.88,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-18000",
      slug: "hitachi-hi-uni-wall-single-18000",
      name: "Hi UNI 18 000 BTU",
      seriesId: "hitachi-hi-uni",
      brandId: "hitachi",
      modelNumber: "Hi UNI 18k",
      normalizedModelNumber: "hi-uni-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11000,
      heatingCapacity5FMaxBtu: 12000,
      seer2Min: 20.5,
      seer2Max: 22,
      hspf2Min: 9.6,
      hspf2Max: 10,
      cop5FMin: 2.3,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-24000",
      slug: "hitachi-hi-uni-wall-single-24000",
      name: "Hi UNI 24 000 BTU",
      seriesId: "hitachi-hi-uni",
      brandId: "hitachi",
      modelNumber: "Hi UNI 24k",
      normalizedModelNumber: "hi-uni-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 15600,
      heatingCapacity5FMaxBtu: 19600,
      seer2Min: 18.5,
      seer2Max: 20.5,
      hspf2Min: 9.3,
      hspf2Max: 10,
      cop5FMin: 1.92,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-9000",
      slug: "hitachi-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 8000,
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
      id: "hitachi-standard-wall-single-12000",
      slug: "hitachi-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8400,
      heatingCapacity5FMaxBtu: 11000,
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
      id: "hitachi-aircore700-wall-single-18000",
      slug: "hitachi-aircore700-wall-single-18000",
      name: "airCore700 18 000 BTU",
      seriesId: "hitachi-aircore700",
      brandId: "hitachi",
      modelNumber: "airCore700 18k",
      normalizedModelNumber: "aircore700-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 18200,
      seer2Min: 17.5,
      seer2Max: 25,
      hspf2Min: 9.4,
      hspf2Max: 11.5,
      cop5FMin: 2.1,
      cop5FMax: 2.6,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-20000",
      slug: "hitachi-aircore700-wall-single-20000",
      name: "airCore700 20 000 BTU",
      seriesId: "hitachi-aircore700",
      brandId: "hitachi",
      modelNumber: "airCore700 20k",
      normalizedModelNumber: "aircore700-20000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 16800,
      heatingCapacity5FMaxBtu: 21800,
      seer2Min: 17,
      seer2Max: 24,
      hspf2Min: 9,
      hspf2Max: 11.6,
      cop5FMin: 2.1,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-30000",
      slug: "hitachi-aircore700-wall-single-30000",
      name: "airCore700 30 000 BTU",
      seriesId: "hitachi-aircore700",
      brandId: "hitachi",
      modelNumber: "airCore700 30k",
      normalizedModelNumber: "aircore700-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 22400,
      heatingCapacity5FMaxBtu: 28600,
      seer2Min: 16,
      seer2Max: 21,
      hspf2Min: 10,
      hspf2Max: 12,
      cop5FMin: 2.1,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-36000",
      slug: "hitachi-aircore700-wall-single-36000",
      name: "airCore700 36 000 BTU",
      seriesId: "hitachi-aircore700",
      brandId: "hitachi",
      modelNumber: "airCore700 36k",
      normalizedModelNumber: "aircore700-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 28000,
      heatingCapacity5FMaxBtu: 35200,
      seer2Min: 16.5,
      seer2Max: 21,
      hspf2Min: 10.2,
      hspf2Max: 11.8,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-42000",
      slug: "hitachi-aircore700-wall-single-42000",
      name: "airCore700 42 000 BTU",
      seriesId: "hitachi-aircore700",
      brandId: "hitachi",
      modelNumber: "airCore700 42k",
      normalizedModelNumber: "aircore700-42000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 39000,
      heatingCapacity5FMaxBtu: 41000,
      seer2Min: 17,
      seer2Max: 20,
      hspf2Min: 10,
      hspf2Max: 10.8,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-9000",
      slug: "hitachi-aircore700-wall-single-9000",
      name: "airCore700 9 000 BTU",
      seriesId: "hitachi-aircore700",
      brandId: "hitachi",
      modelNumber: "airCore700 9k",
      normalizedModelNumber: "aircore700-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 10500,
      seer2Min: 16.8,
      seer2Max: 16.8,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2.2,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-12000",
      slug: "hitachi-aircore700-wall-single-12000",
      name: "airCore700 12 000 BTU",
      seriesId: "hitachi-aircore700",
      brandId: "hitachi",
      modelNumber: "airCore700 12k",
      normalizedModelNumber: "aircore700-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 9800,
      heatingCapacity5FMaxBtu: 13300,
      seer2Min: 16,
      seer2Max: 23,
      hspf2Min: 9.2,
      hspf2Max: 11.3,
      cop5FMin: 2,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-24000",
      slug: "hitachi-aircore700-wall-single-24000",
      name: "airCore700 24 000 BTU",
      seriesId: "hitachi-aircore700",
      brandId: "hitachi",
      modelNumber: "airCore700 24k",
      normalizedModelNumber: "aircore700-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 21600,
      seer2Min: 18.5,
      seer2Max: 21,
      hspf2Min: 9.8,
      hspf2Max: 12.2,
      cop5FMin: 2,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-30000",
      slug: "hitachi-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 25200,
      heatingCapacity5FMaxBtu: 25200,
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
      id: "hitachi-standard-wall-single-15000",
      slug: "hitachi-standard-wall-single-15000",
      name: "Standard 15 000 BTU",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard 15k",
      normalizedModelNumber: "standard-15000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 12600,
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
      id: "hitachi-hvahp060b21s",
      modelNumber: "HVAHP060B21S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp060c23s",
      modelNumber: "HVAHP060C23S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp036b21s",
      modelNumber: "HVAHP036B21S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-s36u4hlae",
      modelNumber: "RAM-S36U4HLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-4-0pnnbdh1",
      modelNumber: "RAS-4.0PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-g36n4haa",
      modelNumber: "RAM-G36N4HAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp036c23s",
      modelNumber: "HVAHP036C23S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp048b21s",
      modelNumber: "HVAHP048B21S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp048c23s",
      modelNumber: "HVAHP048C23S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-sh18whlae",
      modelNumber: "RAC-SH18WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-s18u2hlae",
      modelNumber: "RAM-S18U2HLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ph18whlae",
      modelNumber: "RAC-PH18WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj18whaa",
      modelNumber: "RAC-DJ18WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj18whaa",
      modelNumber: "RAC-GJ18WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-xj18whaa",
      modelNumber: "RAC-XJ18WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-g18n2haa",
      modelNumber: "RAM-G18N2HAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-sh24whlae",
      modelNumber: "RAC-SH24WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ph24whlae",
      modelNumber: "RAC-PH24WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj24whaa",
      modelNumber: "RAC-GJ24WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-xj24whaa",
      modelNumber: "RAC-XJ24WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj24whaa",
      modelNumber: "RAC-DJ24WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-s42u5hlae",
      modelNumber: "RAM-S42U5HLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-g42n5haa",
      modelNumber: "RAM-G42N5HAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-s24u3hlae",
      modelNumber: "RAM-S24U3HLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-g24n3haa",
      modelNumber: "RAM-G24N3HAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-1-0pnnbdh1",
      modelNumber: "RAS-1.0PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-1-5pnnbdh1",
      modelNumber: "RAS-1.5PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-2-0pnnbdh1",
      modelNumber: "RAS-2.0PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-3-0pnnbdh1",
      modelNumber: "RAS-3.0PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-sh09whlae",
      modelNumber: "RAC-SH09WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ph09whlae",
      modelNumber: "RAC-PH09WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj09whaa",
      modelNumber: "RAC-DJ09WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj09whaa",
      modelNumber: "RAC-GJ09WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-xj09whaa",
      modelNumber: "RAC-XJ09WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-sh12whlae",
      modelNumber: "RAC-SH12WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ph12whlae",
      modelNumber: "RAC-PH12WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj12whaa",
      modelNumber: "RAC-DJ12WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj12whaa",
      modelNumber: "RAC-GJ12WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-xj12whaa",
      modelNumber: "RAC-XJ12WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ej12whaa",
      modelNumber: "RAC-EJ12WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-18bufasdq1",
      modelNumber: "PAS-18BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-18blfasdq1",
      modelNumber: "PAS-18BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-24bufasdq1",
      modelNumber: "PAS-24BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-30bufasdq1",
      modelNumber: "PAS-30BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-30blfasdq1",
      modelNumber: "PAS-30BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-36bufasdq1",
      modelNumber: "PAS-36BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-36blfasdq1",
      modelNumber: "PAS-36BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-48bufasdq1",
      modelNumber: "PAS-48BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-09bufasdq1",
      modelNumber: "PAS-09BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-12bufasdq1",
      modelNumber: "PAS-12BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-12blfasdq1",
      modelNumber: "PAS-12BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-24blfasdq1",
      modelNumber: "PAS-24BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj36whaa",
      modelNumber: "RAC-DJ36WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj15whaa",
      modelNumber: "RAC-GJ15WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "hitachi-appareils-sans-conduits",
      modelNumber: "Appareils sans conduits",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-appareils-avec-conduits",
      modelNumber: "Appareils avec conduits",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      modelNumber: "Combinaison d'appareils avec ou sans conduits",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-sh09rhlae",
      modelNumber: "RAS-SH09RHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rad-sh09qhlae",
      modelNumber: "RAD-SH09QHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rci-4-0pnn1dh",
      modelNumber: "RCI-4.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpim-4-0pnn1dh",
      modelNumber: "RPIM-4.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpk-4-0pnn1dh",
      modelNumber: "RPK-4.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-sh18rhlae",
      modelNumber: "RAS-SH18RHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-ph18phlae",
      modelNumber: "RAS-PH18PHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-dj18phaa",
      modelNumber: "RAK-DJ18PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-gj18phaa",
      modelNumber: "RAK-GJ18PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-xj18phaa",
      modelNumber: "RAK-XJ18PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-dj18rhaa",
      modelNumber: "RAK-DJ18RHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-sh24rhlae",
      modelNumber: "RAS-SH24RHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-ph24phlae",
      modelNumber: "RAS-PH24PHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-gj24phaa",
      modelNumber: "RAK-GJ24PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-xj24phaa",
      modelNumber: "RAK-XJ24PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-dj24rhaa",
      modelNumber: "RAK-DJ24RHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-sh09rhlae-ou-ras-sh12rhlae-ou-ras-sh07rhlae",
      modelNumber: "RAS-SH09RHLAE ou  RAS-SH12RHLAE ou RAS-SH07RHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rad-sh09qhlae-ou-rad-sh12qhlae",
      modelNumber: "RAD-SH09QHLAE ou RAD-SH12QHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-sh09rhlae-ou-ras-sh07rhlae",
      modelNumber: "RAS-SH09RHLAE ou  RAS-SH07RHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rad-sh09qhlae-ou-rad-sh07qhlae",
      modelNumber: "RAD-SH09QHLAE  ou RAD-SH07QHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-dj24phaa",
      modelNumber: "RAK-DJ24PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rcim-1-0pnn1dh",
      modelNumber: "RCIM-1.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpil-1-0pnn1dh",
      modelNumber: "RPIL-1.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpk-1-0pnn1dh",
      modelNumber: "RPK-1.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rcim-1-5pnn1dh",
      modelNumber: "RCIM-1.5PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpil-1-5pnn1dh",
      modelNumber: "RPIL-1.5PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpk-1-5pnn1dh",
      modelNumber: "RPK-1.5PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rci-2-0pnn1dh",
      modelNumber: "RCI-2.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpil-2-0pnn1dh",
      modelNumber: "RPIL-2.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpk-2-0pnn1dh",
      modelNumber: "RPK-2.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rci-3-0pnn1dh",
      modelNumber: "RCI-3.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpim-3-0pnn1dh",
      modelNumber: "RPIM-3.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rpk-3-0pnn1dh",
      modelNumber: "RPK-3.0PNN1DH",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-ph09phlae",
      modelNumber: "RAS-PH09PHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-dj09phaa",
      modelNumber: "RAK-DJ09PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-gj09phaa",
      modelNumber: "RAK-GJ09PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-xj09phaa",
      modelNumber: "RAK-XJ09PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-dj09rhaa",
      modelNumber: "RAK-DJ09RHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-sh12rhlae",
      modelNumber: "RAS-SH12RHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ras-ph12phlae",
      modelNumber: "RAS-PH12PHLAE",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-dj12phaa",
      modelNumber: "RAK-DJ12PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-gj12phaa",
      modelNumber: "RAK-GJ12PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-xj12phaa",
      modelNumber: "RAK-XJ12PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-dj12rhaa",
      modelNumber: "RAK-DJ12RHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-ej12phaa",
      modelNumber: "RAK-EJ12PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppim-b18ufa1dq",
      modelNumber: "PPIM-B18UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-pci-b18ufa1dq",
      modelNumber: "PCI-B18UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppfc-b18ufa1dq",
      modelNumber: "PPFC-B18UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-jpe18b3xb2hs1a",
      modelNumber: "JPE18B3XB2HS1A",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppk-b18ufa1dq",
      modelNumber: "PPK-B18UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppim-b24ufa1dq",
      modelNumber: "PPIM-B24UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-pci-b24ufa1dq",
      modelNumber: "PCI-B24UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppfc-b24ufa1dq",
      modelNumber: "PPFC-B24UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-jpe24b3xc2hs1a",
      modelNumber: "JPE24B3XC2HS1A",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppk-b24ufa1dq",
      modelNumber: "PPK-B24UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppim-b30ufa1dq",
      modelNumber: "PPIM-B30UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-pci-b30ufa1dq",
      modelNumber: "PCI-B30UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppfc-b30ufa1dq",
      modelNumber: "PPFC-B30UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-jpe30b3xd2hs1a",
      modelNumber: "JPE30B3XD2HS1A",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppk-b30ufa1dq",
      modelNumber: "PPK-B30UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppim-b36ufa1dq",
      modelNumber: "PPIM-B36UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-pci-b36ufa1dq",
      modelNumber: "PCI-B36UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppfc-b36ufa1dq",
      modelNumber: "PPFC-B36UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-jpe36b3xd2hs1a",
      modelNumber: "JPE36B3XD2HS1A",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppim-b48ufa1dq",
      modelNumber: "PPIM-B48UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-pci-b48ufa1dq",
      modelNumber: "PCI-B48UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppfc-b48ufa1dq",
      modelNumber: "PPFC-B48UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-jpe48c3xg2hs1a",
      modelNumber: "JPE48C3XG2HS1A",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppfc-b09ufa1dq",
      modelNumber: "PPFC-B09UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-pcim-b09ufa1dq",
      modelNumber: "PCIM-B09UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppim-b09ufa1dq",
      modelNumber: "PPIM-B09UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppk-b09ufa1dq",
      modelNumber: "PPK-B09UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppfc-b12ufa1dq",
      modelNumber: "PPFC-B12UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-pcim-b12ufa1dq",
      modelNumber: "PCIM-B12UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppim-b12ufa1dq",
      modelNumber: "PPIM-B12UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-ppk-b12ufa1dq",
      modelNumber: "PPK-B12UFA1DQ",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-dj36phaa",
      modelNumber: "RAK-DJ36PHAA",
      brandId: "hitachi",
      type: "wall-single",
    },
    {
      id: "hitachi-rak-gj15phaa",
      modelNumber: "RAK-GJ15PHAA",
      brandId: "hitachi",
      type: "wall-single",
    }
  ],
  configurations: [
    {
      id: "hitachi-standard-wall-single-60000-cfg-1",
      slug: "hitachi-standard-wall-single-60000-cfg-1",
      modelId: "hitachi-standard-wall-single-60000",
      outdoorUnitId: "hitachi-hvahp060b21s",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-60000-cfg-2",
      slug: "hitachi-standard-wall-single-60000-cfg-2",
      modelId: "hitachi-standard-wall-single-60000",
      outdoorUnitId: "hitachi-hvahp060b21s",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-60000-cfg-3",
      slug: "hitachi-standard-wall-single-60000-cfg-3",
      modelId: "hitachi-standard-wall-single-60000",
      outdoorUnitId: "hitachi-hvahp060b21s",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 57500,
      coolingCapacityMaxBtu: 57500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-60000-cfg-4",
      slug: "hitachi-standard-wall-single-60000-cfg-4",
      modelId: "hitachi-standard-wall-single-60000",
      outdoorUnitId: "hitachi-hvahp060c23s",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-60000-cfg-5",
      slug: "hitachi-standard-wall-single-60000-cfg-5",
      modelId: "hitachi-standard-wall-single-60000",
      outdoorUnitId: "hitachi-hvahp060c23s",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-60000-cfg-6",
      slug: "hitachi-standard-wall-single-60000-cfg-6",
      modelId: "hitachi-standard-wall-single-60000",
      outdoorUnitId: "hitachi-hvahp060c23s",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 57500,
      coolingCapacityMaxBtu: 57500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-1",
      slug: "hitachi-standard-wall-single-36000-cfg-1",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-hvahp036b21s",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-2",
      slug: "hitachi-standard-wall-single-36000-cfg-2",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-hvahp036b21s",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-3",
      slug: "hitachi-standard-wall-single-36000-cfg-3",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-hvahp036b21s",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-4",
      slug: "hitachi-standard-wall-single-36000-cfg-4",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-ram-s36u4hlae",
      indoorUnitId: "hitachi-ras-sh09rhlae",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-5",
      slug: "hitachi-standard-wall-single-36000-cfg-5",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-ram-s36u4hlae",
      indoorUnitId: "hitachi-rad-sh09qhlae",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-6",
      slug: "hitachi-standard-wall-single-36000-cfg-6",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-ras-4-0pnnbdh1",
      indoorUnitId: "hitachi-rci-4-0pnn1dh",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-7",
      slug: "hitachi-standard-wall-single-36000-cfg-7",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-ras-4-0pnnbdh1",
      indoorUnitId: "hitachi-rpim-4-0pnn1dh",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-8",
      slug: "hitachi-standard-wall-single-36000-cfg-8",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-ras-4-0pnnbdh1",
      indoorUnitId: "hitachi-rpk-4-0pnn1dh",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-9",
      slug: "hitachi-standard-wall-single-36000-cfg-9",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-ram-g36n4haa",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-10",
      slug: "hitachi-standard-wall-single-36000-cfg-10",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-ram-g36n4haa",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-11",
      slug: "hitachi-standard-wall-single-36000-cfg-11",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-hvahp036c23s",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-12",
      slug: "hitachi-standard-wall-single-36000-cfg-12",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-hvahp036c23s",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-13",
      slug: "hitachi-standard-wall-single-36000-cfg-13",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-hvahp036c23s",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-36000-cfg-14",
      slug: "hitachi-standard-wall-single-36000-cfg-14",
      modelId: "hitachi-standard-wall-single-36000",
      outdoorUnitId: "hitachi-ram-g36n4haa",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-48000-cfg-1",
      slug: "hitachi-standard-wall-single-48000-cfg-1",
      modelId: "hitachi-standard-wall-single-48000",
      outdoorUnitId: "hitachi-hvahp048b21s",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-48000-cfg-2",
      slug: "hitachi-standard-wall-single-48000-cfg-2",
      modelId: "hitachi-standard-wall-single-48000",
      outdoorUnitId: "hitachi-hvahp048b21s",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-48000-cfg-3",
      slug: "hitachi-standard-wall-single-48000-cfg-3",
      modelId: "hitachi-standard-wall-single-48000",
      outdoorUnitId: "hitachi-hvahp048b21s",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-48000-cfg-4",
      slug: "hitachi-standard-wall-single-48000-cfg-4",
      modelId: "hitachi-standard-wall-single-48000",
      outdoorUnitId: "hitachi-hvahp048c23s",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-48000-cfg-5",
      slug: "hitachi-standard-wall-single-48000-cfg-5",
      modelId: "hitachi-standard-wall-single-48000",
      outdoorUnitId: "hitachi-hvahp048c23s",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-48000-cfg-6",
      slug: "hitachi-standard-wall-single-48000-cfg-6",
      modelId: "hitachi-standard-wall-single-48000",
      outdoorUnitId: "hitachi-hvahp048c23s",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-1",
      slug: "hitachi-standard-wall-single-18000-cfg-1",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-rac-sh18whlae",
      indoorUnitId: "hitachi-ras-sh18rhlae",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-2",
      slug: "hitachi-standard-wall-single-18000-cfg-2",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-ram-s18u2hlae",
      indoorUnitId: "hitachi-ras-sh09rhlae",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-3",
      slug: "hitachi-standard-wall-single-18000-cfg-3",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-ram-s18u2hlae",
      indoorUnitId: "hitachi-rad-sh09qhlae",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-4",
      slug: "hitachi-standard-wall-single-18000-cfg-4",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-rac-ph18whlae",
      indoorUnitId: "hitachi-ras-ph18phlae",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-5",
      slug: "hitachi-standard-wall-single-18000-cfg-5",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-rac-dj18whaa",
      indoorUnitId: "hitachi-rak-dj18phaa",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-6",
      slug: "hitachi-standard-wall-single-18000-cfg-6",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-rac-gj18whaa",
      indoorUnitId: "hitachi-rak-gj18phaa",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-7",
      slug: "hitachi-standard-wall-single-18000-cfg-7",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-rac-xj18whaa",
      indoorUnitId: "hitachi-rak-xj18phaa",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-8",
      slug: "hitachi-standard-wall-single-18000-cfg-8",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-ram-g18n2haa",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-9",
      slug: "hitachi-standard-wall-single-18000-cfg-9",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-ram-g18n2haa",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-10",
      slug: "hitachi-standard-wall-single-18000-cfg-10",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-rac-dj18whaa",
      indoorUnitId: "hitachi-rak-dj18rhaa",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-18000-cfg-11",
      slug: "hitachi-standard-wall-single-18000-cfg-11",
      modelId: "hitachi-standard-wall-single-18000",
      outdoorUnitId: "hitachi-ram-g18n2haa",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-20000-cfg-1",
      slug: "hitachi-standard-wall-single-20000-cfg-1",
      modelId: "hitachi-standard-wall-single-20000",
      outdoorUnitId: "hitachi-rac-sh24whlae",
      indoorUnitId: "hitachi-ras-sh24rhlae",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-20000-cfg-2",
      slug: "hitachi-standard-wall-single-20000-cfg-2",
      modelId: "hitachi-standard-wall-single-20000",
      outdoorUnitId: "hitachi-rac-ph24whlae",
      indoorUnitId: "hitachi-ras-ph24phlae",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-20000-cfg-3",
      slug: "hitachi-standard-wall-single-20000-cfg-3",
      modelId: "hitachi-standard-wall-single-20000",
      outdoorUnitId: "hitachi-rac-gj24whaa",
      indoorUnitId: "hitachi-rak-gj24phaa",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-20000-cfg-4",
      slug: "hitachi-standard-wall-single-20000-cfg-4",
      modelId: "hitachi-standard-wall-single-20000",
      outdoorUnitId: "hitachi-rac-xj24whaa",
      indoorUnitId: "hitachi-rak-xj24phaa",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-20000-cfg-5",
      slug: "hitachi-standard-wall-single-20000-cfg-5",
      modelId: "hitachi-standard-wall-single-20000",
      outdoorUnitId: "hitachi-rac-dj24whaa",
      indoorUnitId: "hitachi-rak-dj24rhaa",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-42000-cfg-1",
      slug: "hitachi-standard-wall-single-42000-cfg-1",
      modelId: "hitachi-standard-wall-single-42000",
      outdoorUnitId: "hitachi-ram-s42u5hlae",
      indoorUnitId: "hitachi-ras-sh09rhlae-ou-ras-sh12rhlae-ou-ras-sh07rhlae",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-42000-cfg-2",
      slug: "hitachi-standard-wall-single-42000-cfg-2",
      modelId: "hitachi-standard-wall-single-42000",
      outdoorUnitId: "hitachi-ram-s42u5hlae",
      indoorUnitId: "hitachi-rad-sh09qhlae-ou-rad-sh12qhlae",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-42000-cfg-3",
      slug: "hitachi-standard-wall-single-42000-cfg-3",
      modelId: "hitachi-standard-wall-single-42000",
      outdoorUnitId: "hitachi-ram-g42n5haa",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-42000-cfg-4",
      slug: "hitachi-standard-wall-single-42000-cfg-4",
      modelId: "hitachi-standard-wall-single-42000",
      outdoorUnitId: "hitachi-ram-g42n5haa",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-42000-cfg-5",
      slug: "hitachi-standard-wall-single-42000-cfg-5",
      modelId: "hitachi-standard-wall-single-42000",
      outdoorUnitId: "hitachi-ram-g42n5haa",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-24000-cfg-1",
      slug: "hitachi-standard-wall-single-24000-cfg-1",
      modelId: "hitachi-standard-wall-single-24000",
      outdoorUnitId: "hitachi-ram-s24u3hlae",
      indoorUnitId: "hitachi-ras-sh09rhlae-ou-ras-sh07rhlae",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-24000-cfg-2",
      slug: "hitachi-standard-wall-single-24000-cfg-2",
      modelId: "hitachi-standard-wall-single-24000",
      outdoorUnitId: "hitachi-ram-s24u3hlae",
      indoorUnitId: "hitachi-rad-sh09qhlae-ou-rad-sh07qhlae",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-24000-cfg-3",
      slug: "hitachi-standard-wall-single-24000-cfg-3",
      modelId: "hitachi-standard-wall-single-24000",
      outdoorUnitId: "hitachi-rac-dj24whaa",
      indoorUnitId: "hitachi-rak-dj24phaa",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-24000-cfg-4",
      slug: "hitachi-standard-wall-single-24000-cfg-4",
      modelId: "hitachi-standard-wall-single-24000",
      outdoorUnitId: "hitachi-ram-g24n3haa",
      indoorUnitId: "hitachi-appareils-sans-conduits",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-24000-cfg-5",
      slug: "hitachi-standard-wall-single-24000-cfg-5",
      modelId: "hitachi-standard-wall-single-24000",
      outdoorUnitId: "hitachi-ram-g24n3haa",
      indoorUnitId: "hitachi-appareils-avec-conduits",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-24000-cfg-6",
      slug: "hitachi-standard-wall-single-24000-cfg-6",
      modelId: "hitachi-standard-wall-single-24000",
      outdoorUnitId: "hitachi-ram-g24n3haa",
      indoorUnitId: "hitachi-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-9000-cfg-1",
      slug: "hitachi-hi-uni-wall-single-9000-cfg-1",
      modelId: "hitachi-hi-uni-wall-single-9000",
      outdoorUnitId: "hitachi-ras-1-0pnnbdh1",
      indoorUnitId: "hitachi-rcim-1-0pnn1dh",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-9000-cfg-2",
      slug: "hitachi-hi-uni-wall-single-9000-cfg-2",
      modelId: "hitachi-hi-uni-wall-single-9000",
      outdoorUnitId: "hitachi-ras-1-0pnnbdh1",
      indoorUnitId: "hitachi-rpil-1-0pnn1dh",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-9000-cfg-3",
      slug: "hitachi-hi-uni-wall-single-9000-cfg-3",
      modelId: "hitachi-hi-uni-wall-single-9000",
      outdoorUnitId: "hitachi-ras-1-0pnnbdh1",
      indoorUnitId: "hitachi-rpk-1-0pnn1dh",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-12000-cfg-1",
      slug: "hitachi-hi-uni-wall-single-12000-cfg-1",
      modelId: "hitachi-hi-uni-wall-single-12000",
      outdoorUnitId: "hitachi-ras-1-5pnnbdh1",
      indoorUnitId: "hitachi-rcim-1-5pnn1dh",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-12000-cfg-2",
      slug: "hitachi-hi-uni-wall-single-12000-cfg-2",
      modelId: "hitachi-hi-uni-wall-single-12000",
      outdoorUnitId: "hitachi-ras-1-5pnnbdh1",
      indoorUnitId: "hitachi-rpil-1-5pnn1dh",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-12000-cfg-3",
      slug: "hitachi-hi-uni-wall-single-12000-cfg-3",
      modelId: "hitachi-hi-uni-wall-single-12000",
      outdoorUnitId: "hitachi-ras-1-5pnnbdh1",
      indoorUnitId: "hitachi-rpk-1-5pnn1dh",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-18000-cfg-1",
      slug: "hitachi-hi-uni-wall-single-18000-cfg-1",
      modelId: "hitachi-hi-uni-wall-single-18000",
      outdoorUnitId: "hitachi-ras-2-0pnnbdh1",
      indoorUnitId: "hitachi-rci-2-0pnn1dh",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-18000-cfg-2",
      slug: "hitachi-hi-uni-wall-single-18000-cfg-2",
      modelId: "hitachi-hi-uni-wall-single-18000",
      outdoorUnitId: "hitachi-ras-2-0pnnbdh1",
      indoorUnitId: "hitachi-rpil-2-0pnn1dh",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-18000-cfg-3",
      slug: "hitachi-hi-uni-wall-single-18000-cfg-3",
      modelId: "hitachi-hi-uni-wall-single-18000",
      outdoorUnitId: "hitachi-ras-2-0pnnbdh1",
      indoorUnitId: "hitachi-rpk-2-0pnn1dh",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-24000-cfg-1",
      slug: "hitachi-hi-uni-wall-single-24000-cfg-1",
      modelId: "hitachi-hi-uni-wall-single-24000",
      outdoorUnitId: "hitachi-ras-3-0pnnbdh1",
      indoorUnitId: "hitachi-rci-3-0pnn1dh",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-24000-cfg-2",
      slug: "hitachi-hi-uni-wall-single-24000-cfg-2",
      modelId: "hitachi-hi-uni-wall-single-24000",
      outdoorUnitId: "hitachi-ras-3-0pnnbdh1",
      indoorUnitId: "hitachi-rpim-3-0pnn1dh",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-24000-cfg-3",
      slug: "hitachi-hi-uni-wall-single-24000-cfg-3",
      modelId: "hitachi-hi-uni-wall-single-24000",
      outdoorUnitId: "hitachi-ras-3-0pnnbdh1",
      indoorUnitId: "hitachi-rpk-3-0pnn1dh",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.5,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-9000-cfg-1",
      slug: "hitachi-standard-wall-single-9000-cfg-1",
      modelId: "hitachi-standard-wall-single-9000",
      outdoorUnitId: "hitachi-rac-sh09whlae",
      indoorUnitId: "hitachi-ras-sh09rhlae",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-9000-cfg-2",
      slug: "hitachi-standard-wall-single-9000-cfg-2",
      modelId: "hitachi-standard-wall-single-9000",
      outdoorUnitId: "hitachi-rac-ph09whlae",
      indoorUnitId: "hitachi-ras-ph09phlae",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-9000-cfg-3",
      slug: "hitachi-standard-wall-single-9000-cfg-3",
      modelId: "hitachi-standard-wall-single-9000",
      outdoorUnitId: "hitachi-rac-dj09whaa",
      indoorUnitId: "hitachi-rak-dj09phaa",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-9000-cfg-4",
      slug: "hitachi-standard-wall-single-9000-cfg-4",
      modelId: "hitachi-standard-wall-single-9000",
      outdoorUnitId: "hitachi-rac-gj09whaa",
      indoorUnitId: "hitachi-rak-gj09phaa",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-9000-cfg-5",
      slug: "hitachi-standard-wall-single-9000-cfg-5",
      modelId: "hitachi-standard-wall-single-9000",
      outdoorUnitId: "hitachi-rac-xj09whaa",
      indoorUnitId: "hitachi-rak-xj09phaa",
      coolingCapacityMinBtu: 9500,
      coolingCapacityMaxBtu: 9500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-9000-cfg-6",
      slug: "hitachi-standard-wall-single-9000-cfg-6",
      modelId: "hitachi-standard-wall-single-9000",
      outdoorUnitId: "hitachi-rac-dj09whaa",
      indoorUnitId: "hitachi-rak-dj09rhaa",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-12000-cfg-1",
      slug: "hitachi-standard-wall-single-12000-cfg-1",
      modelId: "hitachi-standard-wall-single-12000",
      outdoorUnitId: "hitachi-rac-sh12whlae",
      indoorUnitId: "hitachi-ras-sh12rhlae",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-12000-cfg-2",
      slug: "hitachi-standard-wall-single-12000-cfg-2",
      modelId: "hitachi-standard-wall-single-12000",
      outdoorUnitId: "hitachi-rac-ph12whlae",
      indoorUnitId: "hitachi-ras-ph12phlae",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-12000-cfg-3",
      slug: "hitachi-standard-wall-single-12000-cfg-3",
      modelId: "hitachi-standard-wall-single-12000",
      outdoorUnitId: "hitachi-rac-dj12whaa",
      indoorUnitId: "hitachi-rak-dj12phaa",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-12000-cfg-4",
      slug: "hitachi-standard-wall-single-12000-cfg-4",
      modelId: "hitachi-standard-wall-single-12000",
      outdoorUnitId: "hitachi-rac-gj12whaa",
      indoorUnitId: "hitachi-rak-gj12phaa",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-12000-cfg-5",
      slug: "hitachi-standard-wall-single-12000-cfg-5",
      modelId: "hitachi-standard-wall-single-12000",
      outdoorUnitId: "hitachi-rac-xj12whaa",
      indoorUnitId: "hitachi-rak-xj12phaa",
      coolingCapacityMinBtu: 12500,
      coolingCapacityMaxBtu: 12500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-12000-cfg-6",
      slug: "hitachi-standard-wall-single-12000-cfg-6",
      modelId: "hitachi-standard-wall-single-12000",
      outdoorUnitId: "hitachi-rac-dj12whaa",
      indoorUnitId: "hitachi-rak-dj12rhaa",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-12000-cfg-7",
      slug: "hitachi-standard-wall-single-12000-cfg-7",
      modelId: "hitachi-standard-wall-single-12000",
      outdoorUnitId: "hitachi-rac-ej12whaa",
      indoorUnitId: "hitachi-rak-ej12phaa",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-18000-cfg-1",
      slug: "hitachi-aircore700-wall-single-18000-cfg-1",
      modelId: "hitachi-aircore700-wall-single-18000",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
      indoorUnitId: "hitachi-ppim-b18ufa1dq",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-18000-cfg-2",
      slug: "hitachi-aircore700-wall-single-18000-cfg-2",
      modelId: "hitachi-aircore700-wall-single-18000",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
      indoorUnitId: "hitachi-pci-b18ufa1dq",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-18000-cfg-3",
      slug: "hitachi-aircore700-wall-single-18000-cfg-3",
      modelId: "hitachi-aircore700-wall-single-18000",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
      indoorUnitId: "hitachi-ppfc-b18ufa1dq",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-18000-cfg-4",
      slug: "hitachi-aircore700-wall-single-18000-cfg-4",
      modelId: "hitachi-aircore700-wall-single-18000",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
      indoorUnitId: "hitachi-jpe18b3xb2hs1a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-18000-cfg-5",
      slug: "hitachi-aircore700-wall-single-18000-cfg-5",
      modelId: "hitachi-aircore700-wall-single-18000",
      outdoorUnitId: "hitachi-pas-18blfasdq1",
      indoorUnitId: "hitachi-ppim-b18ufa1dq",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-18000-cfg-6",
      slug: "hitachi-aircore700-wall-single-18000-cfg-6",
      modelId: "hitachi-aircore700-wall-single-18000",
      outdoorUnitId: "hitachi-pas-18blfasdq1",
      indoorUnitId: "hitachi-pci-b18ufa1dq",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-18000-cfg-7",
      slug: "hitachi-aircore700-wall-single-18000-cfg-7",
      modelId: "hitachi-aircore700-wall-single-18000",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
      indoorUnitId: "hitachi-ppk-b18ufa1dq",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-18000-cfg-8",
      slug: "hitachi-aircore700-wall-single-18000-cfg-8",
      modelId: "hitachi-aircore700-wall-single-18000",
      outdoorUnitId: "hitachi-pas-18blfasdq1",
      indoorUnitId: "hitachi-jpe18b3xb2hs1a",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-20000-cfg-1",
      slug: "hitachi-aircore700-wall-single-20000-cfg-1",
      modelId: "hitachi-aircore700-wall-single-20000",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: "hitachi-ppim-b24ufa1dq",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-20000-cfg-2",
      slug: "hitachi-aircore700-wall-single-20000-cfg-2",
      modelId: "hitachi-aircore700-wall-single-20000",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: "hitachi-pci-b24ufa1dq",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-20000-cfg-3",
      slug: "hitachi-aircore700-wall-single-20000-cfg-3",
      modelId: "hitachi-aircore700-wall-single-20000",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: "hitachi-ppfc-b24ufa1dq",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-20000-cfg-4",
      slug: "hitachi-aircore700-wall-single-20000-cfg-4",
      modelId: "hitachi-aircore700-wall-single-20000",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: "hitachi-jpe24b3xc2hs1a",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-20000-cfg-5",
      slug: "hitachi-aircore700-wall-single-20000-cfg-5",
      modelId: "hitachi-aircore700-wall-single-20000",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: "hitachi-ppk-b24ufa1dq",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-30000-cfg-1",
      slug: "hitachi-aircore700-wall-single-30000-cfg-1",
      modelId: "hitachi-aircore700-wall-single-30000",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: "hitachi-ppim-b30ufa1dq",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19.6,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-30000-cfg-2",
      slug: "hitachi-aircore700-wall-single-30000-cfg-2",
      modelId: "hitachi-aircore700-wall-single-30000",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: "hitachi-pci-b30ufa1dq",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-30000-cfg-3",
      slug: "hitachi-aircore700-wall-single-30000-cfg-3",
      modelId: "hitachi-aircore700-wall-single-30000",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: "hitachi-ppfc-b30ufa1dq",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-30000-cfg-4",
      slug: "hitachi-aircore700-wall-single-30000-cfg-4",
      modelId: "hitachi-aircore700-wall-single-30000",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: "hitachi-jpe30b3xd2hs1a",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 16,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-30000-cfg-5",
      slug: "hitachi-aircore700-wall-single-30000-cfg-5",
      modelId: "hitachi-aircore700-wall-single-30000",
      outdoorUnitId: "hitachi-pas-30blfasdq1",
      indoorUnitId: "hitachi-pci-b30ufa1dq",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.3,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-30000-cfg-6",
      slug: "hitachi-aircore700-wall-single-30000-cfg-6",
      modelId: "hitachi-aircore700-wall-single-30000",
      outdoorUnitId: "hitachi-pas-30blfasdq1",
      indoorUnitId: "hitachi-ppim-b30ufa1dq",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-30000-cfg-7",
      slug: "hitachi-aircore700-wall-single-30000-cfg-7",
      modelId: "hitachi-aircore700-wall-single-30000",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: "hitachi-ppk-b30ufa1dq",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-30000-cfg-8",
      slug: "hitachi-aircore700-wall-single-30000-cfg-8",
      modelId: "hitachi-aircore700-wall-single-30000",
      outdoorUnitId: "hitachi-pas-30blfasdq1",
      indoorUnitId: "hitachi-ppk-b30ufa1dq",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-36000-cfg-1",
      slug: "hitachi-aircore700-wall-single-36000-cfg-1",
      modelId: "hitachi-aircore700-wall-single-36000",
      outdoorUnitId: "hitachi-pas-36bufasdq1",
      indoorUnitId: "hitachi-ppim-b36ufa1dq",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.6,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-36000-cfg-2",
      slug: "hitachi-aircore700-wall-single-36000-cfg-2",
      modelId: "hitachi-aircore700-wall-single-36000",
      outdoorUnitId: "hitachi-pas-36bufasdq1",
      indoorUnitId: "hitachi-pci-b36ufa1dq",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-36000-cfg-3",
      slug: "hitachi-aircore700-wall-single-36000-cfg-3",
      modelId: "hitachi-aircore700-wall-single-36000",
      outdoorUnitId: "hitachi-pas-36bufasdq1",
      indoorUnitId: "hitachi-ppfc-b36ufa1dq",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-36000-cfg-4",
      slug: "hitachi-aircore700-wall-single-36000-cfg-4",
      modelId: "hitachi-aircore700-wall-single-36000",
      outdoorUnitId: "hitachi-pas-36bufasdq1",
      indoorUnitId: "hitachi-jpe36b3xd2hs1a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.6,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-36000-cfg-5",
      slug: "hitachi-aircore700-wall-single-36000-cfg-5",
      modelId: "hitachi-aircore700-wall-single-36000",
      outdoorUnitId: "hitachi-pas-36blfasdq1",
      indoorUnitId: "hitachi-ppim-b36ufa1dq",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-36000-cfg-6",
      slug: "hitachi-aircore700-wall-single-36000-cfg-6",
      modelId: "hitachi-aircore700-wall-single-36000",
      outdoorUnitId: "hitachi-pas-36blfasdq1",
      indoorUnitId: "hitachi-pci-b36ufa1dq",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.5,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-36000-cfg-7",
      slug: "hitachi-aircore700-wall-single-36000-cfg-7",
      modelId: "hitachi-aircore700-wall-single-36000",
      outdoorUnitId: "hitachi-pas-36blfasdq1",
      indoorUnitId: "hitachi-jpe36b3xd2hs1a",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-42000-cfg-1",
      slug: "hitachi-aircore700-wall-single-42000-cfg-1",
      modelId: "hitachi-aircore700-wall-single-42000",
      outdoorUnitId: "hitachi-pas-48bufasdq1",
      indoorUnitId: "hitachi-ppim-b48ufa1dq",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-42000-cfg-2",
      slug: "hitachi-aircore700-wall-single-42000-cfg-2",
      modelId: "hitachi-aircore700-wall-single-42000",
      outdoorUnitId: "hitachi-pas-48bufasdq1",
      indoorUnitId: "hitachi-pci-b48ufa1dq",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-42000-cfg-3",
      slug: "hitachi-aircore700-wall-single-42000-cfg-3",
      modelId: "hitachi-aircore700-wall-single-42000",
      outdoorUnitId: "hitachi-pas-48bufasdq1",
      indoorUnitId: "hitachi-ppfc-b48ufa1dq",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18.5,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-42000-cfg-4",
      slug: "hitachi-aircore700-wall-single-42000-cfg-4",
      modelId: "hitachi-aircore700-wall-single-42000",
      outdoorUnitId: "hitachi-pas-48bufasdq1",
      indoorUnitId: "hitachi-jpe48c3xg2hs1a",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 17,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-9000-cfg-1",
      slug: "hitachi-aircore700-wall-single-9000-cfg-1",
      modelId: "hitachi-aircore700-wall-single-9000",
      outdoorUnitId: "hitachi-pas-09bufasdq1",
      indoorUnitId: "hitachi-ppfc-b09ufa1dq",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-9000-cfg-2",
      slug: "hitachi-aircore700-wall-single-9000-cfg-2",
      modelId: "hitachi-aircore700-wall-single-9000",
      outdoorUnitId: "hitachi-pas-09bufasdq1",
      indoorUnitId: "hitachi-pcim-b09ufa1dq",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-9000-cfg-3",
      slug: "hitachi-aircore700-wall-single-9000-cfg-3",
      modelId: "hitachi-aircore700-wall-single-9000",
      outdoorUnitId: "hitachi-pas-09bufasdq1",
      indoorUnitId: "hitachi-ppim-b09ufa1dq",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-9000-cfg-4",
      slug: "hitachi-aircore700-wall-single-9000-cfg-4",
      modelId: "hitachi-aircore700-wall-single-9000",
      outdoorUnitId: "hitachi-pas-09bufasdq1",
      indoorUnitId: "hitachi-ppk-b09ufa1dq",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-12000-cfg-1",
      slug: "hitachi-aircore700-wall-single-12000-cfg-1",
      modelId: "hitachi-aircore700-wall-single-12000",
      outdoorUnitId: "hitachi-pas-12bufasdq1",
      indoorUnitId: "hitachi-ppfc-b12ufa1dq",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-12000-cfg-2",
      slug: "hitachi-aircore700-wall-single-12000-cfg-2",
      modelId: "hitachi-aircore700-wall-single-12000",
      outdoorUnitId: "hitachi-pas-12bufasdq1",
      indoorUnitId: "hitachi-pcim-b12ufa1dq",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-12000-cfg-3",
      slug: "hitachi-aircore700-wall-single-12000-cfg-3",
      modelId: "hitachi-aircore700-wall-single-12000",
      outdoorUnitId: "hitachi-pas-12bufasdq1",
      indoorUnitId: "hitachi-ppim-b12ufa1dq",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 16.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-12000-cfg-4",
      slug: "hitachi-aircore700-wall-single-12000-cfg-4",
      modelId: "hitachi-aircore700-wall-single-12000",
      outdoorUnitId: "hitachi-pas-12blfasdq1",
      indoorUnitId: "hitachi-ppim-b12ufa1dq",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-12000-cfg-5",
      slug: "hitachi-aircore700-wall-single-12000-cfg-5",
      modelId: "hitachi-aircore700-wall-single-12000",
      outdoorUnitId: "hitachi-pas-12blfasdq1",
      indoorUnitId: "hitachi-pcim-b12ufa1dq",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-12000-cfg-6",
      slug: "hitachi-aircore700-wall-single-12000-cfg-6",
      modelId: "hitachi-aircore700-wall-single-12000",
      outdoorUnitId: "hitachi-pas-12bufasdq1",
      indoorUnitId: "hitachi-ppk-b12ufa1dq",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-24000-cfg-1",
      slug: "hitachi-aircore700-wall-single-24000-cfg-1",
      modelId: "hitachi-aircore700-wall-single-24000",
      outdoorUnitId: "hitachi-pas-24blfasdq1",
      indoorUnitId: "hitachi-ppim-b24ufa1dq",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-24000-cfg-2",
      slug: "hitachi-aircore700-wall-single-24000-cfg-2",
      modelId: "hitachi-aircore700-wall-single-24000",
      outdoorUnitId: "hitachi-pas-24blfasdq1",
      indoorUnitId: "hitachi-pci-b24ufa1dq",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-24000-cfg-3",
      slug: "hitachi-aircore700-wall-single-24000-cfg-3",
      modelId: "hitachi-aircore700-wall-single-24000",
      outdoorUnitId: "hitachi-pas-24blfasdq1",
      indoorUnitId: "hitachi-jpe24b3xc2hs1a",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-30000-cfg-1",
      slug: "hitachi-standard-wall-single-30000-cfg-1",
      modelId: "hitachi-standard-wall-single-30000",
      outdoorUnitId: "hitachi-rac-dj36whaa",
      indoorUnitId: "hitachi-rak-dj36phaa",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-15000-cfg-1",
      slug: "hitachi-standard-wall-single-15000-cfg-1",
      modelId: "hitachi-standard-wall-single-15000",
      outdoorUnitId: "hitachi-rac-gj15whaa",
      indoorUnitId: "hitachi-rak-gj15phaa",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "hitachi-standard-wall-single-60000-cfg-1",
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
      configurationId: "hitachi-standard-wall-single-60000-cfg-2",
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
      configurationId: "hitachi-standard-wall-single-60000-cfg-3",
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
      configurationId: "hitachi-standard-wall-single-60000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-60000-cfg-5",
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
      configurationId: "hitachi-standard-wall-single-60000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-36000-cfg-1",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-2",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-3",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-4",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-5",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-36000-cfg-7",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-8",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-9",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-10",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-11",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-12",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-13",
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
      configurationId: "hitachi-standard-wall-single-36000-cfg-14",
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
      configurationId: "hitachi-standard-wall-single-48000-cfg-1",
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
      configurationId: "hitachi-standard-wall-single-48000-cfg-2",
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
      configurationId: "hitachi-standard-wall-single-48000-cfg-3",
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
      configurationId: "hitachi-standard-wall-single-48000-cfg-4",
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
      configurationId: "hitachi-standard-wall-single-48000-cfg-5",
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
      configurationId: "hitachi-standard-wall-single-48000-cfg-6",
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
      configurationId: "hitachi-standard-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-18000-cfg-3",
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
      configurationId: "hitachi-standard-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-18000-cfg-6",
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
      configurationId: "hitachi-standard-wall-single-18000-cfg-7",
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
      configurationId: "hitachi-standard-wall-single-18000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-18000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-18000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-18000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-20000-cfg-2",
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
      configurationId: "hitachi-standard-wall-single-20000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-20000-cfg-4",
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
      configurationId: "hitachi-standard-wall-single-20000-cfg-5",
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
      configurationId: "hitachi-standard-wall-single-42000-cfg-1",
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
      configurationId: "hitachi-standard-wall-single-42000-cfg-2",
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
      configurationId: "hitachi-standard-wall-single-42000-cfg-3",
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
      configurationId: "hitachi-standard-wall-single-42000-cfg-4",
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
      configurationId: "hitachi-standard-wall-single-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-24000-cfg-1",
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
      configurationId: "hitachi-standard-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-24000-cfg-3",
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
      configurationId: "hitachi-standard-wall-single-24000-cfg-4",
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
      configurationId: "hitachi-standard-wall-single-24000-cfg-5",
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
      configurationId: "hitachi-standard-wall-single-24000-cfg-6",
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
      configurationId: "hitachi-hi-uni-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5500,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-24000-cfg-1",
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
      configurationId: "hitachi-hi-uni-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-9000-cfg-1",
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
      configurationId: "hitachi-standard-wall-single-9000-cfg-2",
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
      configurationId: "hitachi-standard-wall-single-9000-cfg-3",
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
      configurationId: "hitachi-standard-wall-single-9000-cfg-4",
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
      configurationId: "hitachi-standard-wall-single-9000-cfg-5",
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
      configurationId: "hitachi-standard-wall-single-9000-cfg-6",
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
      configurationId: "hitachi-standard-wall-single-12000-cfg-1",
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
      configurationId: "hitachi-standard-wall-single-12000-cfg-2",
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
      configurationId: "hitachi-standard-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-12000-cfg-4",
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
      configurationId: "hitachi-standard-wall-single-12000-cfg-5",
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
      configurationId: "hitachi-standard-wall-single-12000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-18000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-18000-cfg-7",
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
      configurationId: "hitachi-aircore700-wall-single-18000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-20000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-20000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-20000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-20000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-30000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-30000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-42000-cfg-1",
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
      configurationId: "hitachi-aircore700-wall-single-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-42000-cfg-3",
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
      configurationId: "hitachi-aircore700-wall-single-42000-cfg-4",
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
      configurationId: "hitachi-aircore700-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-9000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-12000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-12000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-12000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-24000-cfg-1",
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
      configurationId: "hitachi-aircore700-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-24000-cfg-3",
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
      configurationId: "hitachi-standard-wall-single-30000-cfg-1",
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
      configurationId: "hitachi-standard-wall-single-15000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
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
