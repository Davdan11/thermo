import type { BrandDataset } from "../../types";

export const concordDataset: BrandDataset = {
  brand: {
    id: "concord",
    slug: "concord",
    name: "CONCORD",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "concord-4hp18v-series",
      slug: "concord-4hp18v-series",
      name: "4HP18V SERIES",
      brandId: "concord",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series",
      slug: "concord-4dh-series",
      name: "4DH SERIES",
      brandId: "concord",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-standard",
      slug: "concord-standard",
      name: "Standard",
      brandId: "concord",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series",
      slug: "concord-7scp18v-series",
      name: "7SCP18V Series",
      brandId: "concord",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "concord-4hp18v-series-central-ducted-36000",
      slug: "concord-4hp18v-series-central-ducted-36000",
      name: "4HP18V SERIES 36 000 BTU",
      seriesId: "concord-4hp18v-series",
      brandId: "concord",
      modelNumber: "4HP18V SERIES 36k",
      normalizedModelNumber: "4hp18v-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34600,
      heatingCapacity5FMinBtu: 22000,
      heatingCapacity5FMaxBtu: 22200,
      seer2Min: 17.1,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 8.5,
      cop5FMin: 2.04,
      cop5FMax: 2.18,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-20000",
      slug: "concord-4hp18v-series-central-ducted-20000",
      name: "4HP18V SERIES 20 000 BTU",
      seriesId: "concord-4hp18v-series",
      brandId: "concord",
      modelNumber: "4HP18V SERIES 20k",
      normalizedModelNumber: "4hp18v-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 15400,
      seer2Min: 17.1,
      seer2Max: 17.1,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.94,
      cop5FMax: 1.94,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000",
      slug: "concord-4hp18v-series-central-ducted-24000",
      name: "4HP18V SERIES 24 000 BTU",
      seriesId: "concord-4hp18v-series",
      brandId: "concord",
      modelNumber: "4HP18V SERIES 24k",
      normalizedModelNumber: "4hp18v-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 14800,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 7.8,
      hspf2Max: 8.5,
      cop5FMin: 1.78,
      cop5FMax: 2.17,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000",
      slug: "concord-4hp18v-series-central-ducted-48000",
      name: "4HP18V SERIES 48 000 BTU",
      seriesId: "concord-4hp18v-series",
      brandId: "concord",
      modelNumber: "4HP18V SERIES 48k",
      normalizedModelNumber: "4hp18v-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      heatingCapacity5FMinBtu: 30200,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 16.5,
      seer2Max: 16.5,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 2.08,
      cop5FMax: 2.08,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-12000",
      slug: "concord-4dh-series-wall-single-12000",
      name: "4DH SERIES 12 000 BTU",
      seriesId: "concord-4dh-series",
      brandId: "concord",
      modelNumber: "4DH SERIES 12k",
      normalizedModelNumber: "4dh-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8400,
      heatingCapacity5FMaxBtu: 9300,
      seer2Min: 18.8,
      seer2Max: 24.6,
      hspf2Min: 7.8,
      hspf2Max: 10.7,
      cop5FMin: 2.01,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-18000",
      slug: "concord-4dh-series-wall-single-18000",
      name: "4DH SERIES 18 000 BTU",
      seriesId: "concord-4dh-series",
      brandId: "concord",
      modelNumber: "4DH SERIES 18k",
      normalizedModelNumber: "4dh-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 14900,
      seer2Min: 19,
      seer2Max: 23.5,
      hspf2Min: 9.8,
      hspf2Max: 10.7,
      cop5FMin: 2,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-24000",
      slug: "concord-4dh-series-wall-single-24000",
      name: "4DH SERIES 24 000 BTU",
      seriesId: "concord-4dh-series",
      brandId: "concord",
      modelNumber: "4DH SERIES 24k",
      normalizedModelNumber: "4dh-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 21600,
      seer2Min: 19,
      seer2Max: 24.6,
      hspf2Min: 9.6,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-15000",
      slug: "concord-4dh-series-wall-single-15000",
      name: "4DH SERIES 15 000 BTU",
      seriesId: "concord-4dh-series",
      brandId: "concord",
      modelNumber: "4DH SERIES 15k",
      normalizedModelNumber: "4dh-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 12000,
      seer2Min: 20.5,
      seer2Max: 20.5,
      hspf2Min: 10.4,
      hspf2Max: 10.4,
      cop5FMin: 2.16,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-9000",
      slug: "concord-4dh-series-wall-single-9000",
      name: "4DH SERIES 9 000 BTU",
      seriesId: "concord-4dh-series",
      brandId: "concord",
      modelNumber: "4DH SERIES 9k",
      normalizedModelNumber: "4dh-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 8900,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 8500,
      seer2Min: 19.2,
      seer2Max: 25.5,
      hspf2Min: 9.1,
      hspf2Max: 12.3,
      cop5FMin: 1.9,
      cop5FMax: 2.17,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-standard-wall-single-12000",
      slug: "concord-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "concord-standard",
      brandId: "concord",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 7800,
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
      id: "concord-standard-wall-single-18000",
      slug: "concord-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "concord-standard",
      brandId: "concord",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 11400,
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
      id: "concord-standard-wall-single-24000",
      slug: "concord-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "concord-standard",
      brandId: "concord",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
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
      id: "concord-standard-wall-single-36000",
      slug: "concord-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "concord-standard",
      brandId: "concord",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 27000,
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
      id: "concord-standard-wall-single-48000",
      slug: "concord-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "concord-standard",
      brandId: "concord",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 28000,
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
      id: "concord-4dh-series-wall-single-30000",
      slug: "concord-4dh-series-wall-single-30000",
      name: "4DH SERIES 30 000 BTU",
      seriesId: "concord-4dh-series",
      brandId: "concord",
      modelNumber: "4DH SERIES 30k",
      normalizedModelNumber: "4dh-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 20.7,
      seer2Max: 24.6,
      hspf2Min: 9.2,
      hspf2Max: 9.3,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-36000",
      slug: "concord-4dh-series-wall-single-36000",
      name: "4DH SERIES 36 000 BTU",
      seriesId: "concord-4dh-series",
      brandId: "concord",
      modelNumber: "4DH SERIES 36k",
      normalizedModelNumber: "4dh-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 26800,
      heatingCapacity5FMaxBtu: 26800,
      seer2Min: 23.9,
      seer2Max: 23.9,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-48000",
      slug: "concord-4dh-series-wall-single-48000",
      name: "4DH SERIES 48 000 BTU",
      seriesId: "concord-4dh-series",
      brandId: "concord",
      modelNumber: "4DH SERIES 48k",
      normalizedModelNumber: "4dh-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 36000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 21.8,
      seer2Max: 21.8,
      hspf2Min: 9.8,
      hspf2Max: 9.8,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-standard-wall-single-30000",
      slug: "concord-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "concord-standard",
      brandId: "concord",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 19000,
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
      id: "concord-7scp18v-series-central-ducted-24000",
      slug: "concord-7scp18v-series-central-ducted-24000",
      name: "7SCP18V Series 24 000 BTU",
      seriesId: "concord-7scp18v-series",
      brandId: "concord",
      modelNumber: "7SCP18V Series 24k",
      normalizedModelNumber: "7scp18v-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 19800,
      heatingCapacity5FMaxBtu: 19800,
      seer2Min: 16.95,
      seer2Max: 17.45,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000",
      slug: "concord-7scp18v-series-central-ducted-36000",
      name: "7SCP18V Series 36 000 BTU",
      seriesId: "concord-7scp18v-series",
      brandId: "concord",
      modelNumber: "7SCP18V Series 36k",
      normalizedModelNumber: "7scp18v-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 28600,
      heatingCapacity5FMaxBtu: 29000,
      seer2Min: 16.5,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.85,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-42000",
      slug: "concord-7scp18v-series-central-ducted-42000",
      name: "7SCP18V Series 42 000 BTU",
      seriesId: "concord-7scp18v-series",
      brandId: "concord",
      modelNumber: "7SCP18V Series 42k",
      normalizedModelNumber: "7scp18v-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 44500,
      heatingCapacity5FMinBtu: 39500,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 16,
      seer2Max: 16.75,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-48000",
      slug: "concord-7scp18v-series-central-ducted-48000",
      name: "7SCP18V Series 48 000 BTU",
      seriesId: "concord-7scp18v-series",
      brandId: "concord",
      modelNumber: "7SCP18V Series 48k",
      normalizedModelNumber: "7scp18v-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 39000,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 16,
      seer2Max: 17.2,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.85,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-60000",
      slug: "concord-7scp18v-series-central-ducted-60000",
      name: "7SCP18V Series 60 000 BTU",
      seriesId: "concord-7scp18v-series",
      brandId: "concord",
      modelNumber: "7SCP18V Series 60k",
      normalizedModelNumber: "7scp18v-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      heatingCapacity5FMinBtu: 43500,
      heatingCapacity5FMaxBtu: 44000,
      seer2Min: 16.55,
      seer2Max: 16.9,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "concord-4hp18v36p",
      modelNumber: "4HP18V36P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4hp18v60p",
      modelNumber: "4HP18V60P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s12s-1p",
      modelNumber: "4DHP2S12S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s12s-1l",
      modelNumber: "4DHP2S12S-1L",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s18s-1p",
      modelNumber: "4DHP2S18S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s18m-1p",
      modelNumber: "4DHP2S18M-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s24s-1p",
      modelNumber: "4DHP2S24S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s24m-1p",
      modelNumber: "4DHP2S24M-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhps209s-1p",
      modelNumber: "4DHPS209S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhv2s09s-1l",
      modelNumber: "4DHV2S09S-1L",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhv2s09s-1p",
      modelNumber: "4DHV2S09S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhv2s12s-1l",
      modelNumber: "4DHV2S12S-1L",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhv2s12s-1p",
      modelNumber: "4DHV2S12S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhv2s18s-1p",
      modelNumber: "4DHV2S18S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhv2s24s-1p",
      modelNumber: "4DHV2S24S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s36s-1p",
      modelNumber: "4DHP2S36S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s48s-1p",
      modelNumber: "4DHP2S48S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s30m-1p",
      modelNumber: "4DHP2S30M-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s36m-1p",
      modelNumber: "4DHP2S36M-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s48m-1p",
      modelNumber: "4DHP2S48M-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-4dhp2s30s-1p",
      modelNumber: "4DHP2S30S-1P",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-7scp18v24p-a",
      modelNumber: "7SCP18V24P-**A",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-7scp18v36p-a",
      modelNumber: "7SCP18V36P-**A",
      brandId: "concord",
      refrigerant: null as any,
    },
    {
      id: "concord-7scp18v60p-a",
      modelNumber: "7SCP18V60P-**A",
      brandId: "concord",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "concord-4hp18v-series-central-ducted-36000-cfg-1",
      slug: "concord-4hp18v-series-central-ducted-36000-cfg-1",
      modelId: "concord-4hp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-36000-cfg-2",
      slug: "concord-4hp18v-series-central-ducted-36000-cfg-2",
      modelId: "concord-4hp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-36000-cfg-3",
      slug: "concord-4hp18v-series-central-ducted-36000-cfg-3",
      modelId: "concord-4hp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-36000-cfg-4",
      slug: "concord-4hp18v-series-central-ducted-36000-cfg-4",
      modelId: "concord-4hp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.1,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-20000-cfg-1",
      slug: "concord-4hp18v-series-central-ducted-20000-cfg-1",
      modelId: "concord-4hp18v-series-central-ducted-20000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-20000-cfg-2",
      slug: "concord-4hp18v-series-central-ducted-20000-cfg-2",
      modelId: "concord-4hp18v-series-central-ducted-20000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-1",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-1",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-2",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-2",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-3",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-3",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-4",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-4",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-5",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-5",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-6",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-6",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-7",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-7",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-8",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-8",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-9",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-9",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-10",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-10",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-11",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-11",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-12",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-12",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-13",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-13",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-14",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-14",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-15",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-15",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-16",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-16",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-17",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-17",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-18",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-18",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-19",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-19",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-20",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-20",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-21",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-21",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-22",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-22",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-23",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-23",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-24",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-24",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-25",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-25",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-26",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-26",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-27",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-27",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-28",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-28",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-29",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-29",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-30",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-30",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-31",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-31",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-32",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-32",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-33",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-33",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-34",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-34",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-35",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-35",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-36",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-36",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: 16.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-37",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-37",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-38",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-38",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-39",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-39",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-40",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-40",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-41",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-41",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-42",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-42",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-43",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-43",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-44",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-44",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-45",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-45",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-46",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-46",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-47",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-47",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-48",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-48",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-49",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-49",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-50",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-50",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-51",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-51",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-52",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-52",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-53",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-53",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-54",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-54",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-55",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-55",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-56",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-56",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-57",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-57",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-58",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-58",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-59",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-59",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-60",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-60",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-61",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-61",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-62",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-62",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-63",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-63",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-64",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-64",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-65",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-65",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-66",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-66",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-67",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-67",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-68",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-68",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-69",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-69",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-70",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-70",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-71",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-71",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-72",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-72",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-73",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-73",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-74",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-74",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-75",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-75",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-76",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-76",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-77",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-77",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-78",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-78",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-79",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-79",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-80",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-80",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-81",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-81",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-82",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-82",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-83",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-83",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-84",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-84",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-85",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-85",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-86",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-86",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-87",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-87",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-88",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-88",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-89",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-89",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-90",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-90",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-91",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-91",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-92",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-92",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-93",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-93",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-94",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-94",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-95",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-95",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-96",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-96",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-97",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-97",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-98",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-98",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-99",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-99",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-100",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-100",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-101",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-101",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-102",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-102",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-103",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-103",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-104",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-104",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-105",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-105",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-106",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-106",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-107",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-107",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-108",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-108",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-109",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-109",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-110",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-110",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-111",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-111",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-112",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-112",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-113",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-113",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-114",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-114",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-115",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-115",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-116",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-116",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-117",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-117",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-118",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-118",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-119",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-119",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-120",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-120",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-121",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-121",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-122",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-122",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-123",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-123",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-124",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-124",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-125",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-125",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-126",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-126",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-127",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-127",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-128",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-128",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-129",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-129",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-130",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-130",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-131",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-131",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-132",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-132",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-133",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-133",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-134",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-134",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-135",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-135",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-136",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-136",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-137",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-137",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-138",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-138",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-139",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-139",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-140",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-140",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-141",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-141",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-142",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-142",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-143",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-143",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-144",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-144",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-145",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-145",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-146",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-146",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-147",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-147",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-148",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-148",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-149",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-149",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-150",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-150",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-151",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-151",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-152",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-152",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-153",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-153",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-154",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-154",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-155",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-155",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-156",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-156",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-157",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-157",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-158",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-158",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-159",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-159",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-160",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-160",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-161",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-161",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-162",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-162",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-163",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-163",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-164",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-164",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-165",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-165",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-166",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-166",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-167",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-167",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-168",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-168",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-169",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-169",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-170",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-170",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-171",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-171",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-172",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-172",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-173",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-173",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-174",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-174",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-175",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-175",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-176",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-176",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-177",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-177",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-178",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-178",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-179",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-179",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-180",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-180",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-181",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-181",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-182",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-182",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-183",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-183",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-184",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-184",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-185",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-185",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-186",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-186",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-187",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-187",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-188",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-188",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-189",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-189",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-190",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-190",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-191",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-191",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-192",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-192",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-193",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-193",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-194",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-194",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-195",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-195",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-196",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-196",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-197",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-197",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-198",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-198",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-199",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-199",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-200",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-200",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-201",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-201",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-202",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-202",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-203",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-203",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-204",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-204",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-205",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-205",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-206",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-206",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-207",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-207",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-208",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-208",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-209",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-209",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-210",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-210",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-211",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-211",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-212",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-212",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-213",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-213",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-214",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-214",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-215",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-215",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-216",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-216",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-217",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-217",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-218",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-218",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-219",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-219",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-220",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-220",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-221",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-221",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-222",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-222",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-223",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-223",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-224",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-224",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-225",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-225",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-226",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-226",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-227",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-227",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-228",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-228",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-229",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-229",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-230",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-230",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-231",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-231",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-232",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-232",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-233",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-233",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-234",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-234",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-235",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-235",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-236",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-236",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-237",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-237",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-238",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-238",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-239",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-239",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-240",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-240",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-241",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-241",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-242",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-242",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-243",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-243",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-244",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-244",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-245",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-245",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-246",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-246",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-247",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-247",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-248",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-248",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-249",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-249",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-250",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-250",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-251",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-251",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-252",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-252",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-253",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-253",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-254",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-254",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-255",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-255",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-256",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-256",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-257",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-257",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-258",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-258",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-259",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-259",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-260",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-260",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-261",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-261",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-262",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-262",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-263",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-263",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-264",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-264",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-265",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-265",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-266",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-266",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-267",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-267",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-268",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-268",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-269",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-269",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-270",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-270",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-271",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-271",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-272",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-272",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-273",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-273",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-274",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-274",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-275",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-275",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-276",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-276",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-277",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-277",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-278",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-278",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-279",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-279",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-280",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-280",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-281",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-281",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-282",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-282",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-283",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-283",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-284",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-284",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-285",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-285",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-286",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-286",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-287",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-287",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-288",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-288",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-289",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-289",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-290",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-290",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-291",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-291",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-292",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-292",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-293",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-293",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-294",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-294",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-295",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-295",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-296",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-296",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-297",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-297",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-298",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-298",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-299",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-299",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-300",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-300",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-301",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-301",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-302",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-302",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-303",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-303",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-304",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-304",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-305",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-305",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-306",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-306",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-307",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-307",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-308",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-308",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-309",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-309",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-310",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-310",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-311",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-311",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-312",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-312",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-313",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-313",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-314",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-314",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-315",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-315",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-316",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-316",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-317",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-317",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-318",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-318",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-319",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-319",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-320",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-320",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-321",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-321",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-322",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-322",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-323",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-323",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-324",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-324",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-325",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-325",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-326",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-326",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-327",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-327",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-328",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-328",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-329",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-329",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-330",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-330",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-331",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-331",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-332",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-332",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-333",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-333",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-334",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-334",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-335",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-335",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-336",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-336",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-337",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-337",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-338",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-338",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-339",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-339",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-340",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-340",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-341",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-341",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-342",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-342",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-343",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-343",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-344",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-344",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-345",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-345",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-346",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-346",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-347",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-347",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-348",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-348",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-349",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-349",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-350",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-350",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-351",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-351",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-352",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-352",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-353",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-353",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-354",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-354",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-355",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-355",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-356",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-356",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-357",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-357",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-358",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-358",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-359",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-359",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-360",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-360",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-361",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-361",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-362",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-362",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-363",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-363",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-364",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-364",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-365",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-365",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-366",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-366",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-367",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-367",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-368",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-368",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-369",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-369",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-370",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-370",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-371",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-371",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-372",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-372",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-373",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-373",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-374",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-374",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-375",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-375",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-376",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-376",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-377",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-377",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-378",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-378",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-379",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-379",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-24000-cfg-380",
      slug: "concord-4hp18v-series-central-ducted-24000-cfg-380",
      modelId: "concord-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-1",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-1",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-2",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-2",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-3",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-3",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-4",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-4",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-5",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-5",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-6",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-6",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-7",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-7",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-8",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-8",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-9",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-9",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-10",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-10",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-11",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-11",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-12",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-12",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-13",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-13",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-14",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-14",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-15",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-15",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-16",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-16",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-17",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-17",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-18",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-18",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-19",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-19",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-20",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-20",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-21",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-21",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-22",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-22",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-23",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-23",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-24",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-24",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-25",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-25",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-26",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-26",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-27",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-27",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-28",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-28",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-29",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-29",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-30",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-30",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-31",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-31",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-32",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-32",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-33",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-33",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-34",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-34",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-35",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-35",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-36",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-36",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-37",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-37",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-38",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-38",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-39",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-39",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-40",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-40",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-41",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-41",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-42",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-42",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-43",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-43",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-44",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-44",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-45",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-45",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-46",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-46",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-47",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-47",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-48",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-48",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-49",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-49",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-50",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-50",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-51",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-51",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-52",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-52",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-53",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-53",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-54",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-54",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-55",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-55",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-56",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-56",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-57",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-57",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-58",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-58",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-59",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-59",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-60",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-60",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-61",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-61",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-62",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-62",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-63",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-63",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-64",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-64",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-65",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-65",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-66",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-66",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-67",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-67",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-68",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-68",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-69",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-69",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-70",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-70",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-71",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-71",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-72",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-72",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-73",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-73",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-74",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-74",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-75",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-75",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-76",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-76",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-77",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-77",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-78",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-78",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-79",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-79",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-80",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-80",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-81",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-81",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-82",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-82",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-83",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-83",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-84",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-84",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-85",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-85",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-86",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-86",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-87",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-87",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-88",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-88",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-89",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-89",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-90",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-90",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4hp18v-series-central-ducted-48000-cfg-91",
      slug: "concord-4hp18v-series-central-ducted-48000-cfg-91",
      modelId: "concord-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-12000-cfg-1",
      slug: "concord-4dh-series-wall-single-12000-cfg-1",
      modelId: "concord-4dh-series-wall-single-12000",
      outdoorUnitId: "concord-4dhp2s12s-1p",
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
      id: "concord-4dh-series-wall-single-12000-cfg-2",
      slug: "concord-4dh-series-wall-single-12000-cfg-2",
      modelId: "concord-4dh-series-wall-single-12000",
      outdoorUnitId: "concord-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11800,
      coolingCapacityMaxBtu: 11800,
      seer2: 22.7,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-12000-cfg-3",
      slug: "concord-4dh-series-wall-single-12000-cfg-3",
      modelId: "concord-4dh-series-wall-single-12000",
      outdoorUnitId: "concord-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 18.8,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-12000-cfg-4",
      slug: "concord-4dh-series-wall-single-12000-cfg-4",
      modelId: "concord-4dh-series-wall-single-12000",
      outdoorUnitId: "concord-4dhp2s12s-1l",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.4,
      hspf2: 7.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-12000-cfg-5",
      slug: "concord-4dh-series-wall-single-12000-cfg-5",
      modelId: "concord-4dh-series-wall-single-12000",
      outdoorUnitId: "concord-4dhp2s12s-1l",
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
      id: "concord-4dh-series-wall-single-12000-cfg-6",
      slug: "concord-4dh-series-wall-single-12000-cfg-6",
      modelId: "concord-4dh-series-wall-single-12000",
      outdoorUnitId: "concord-4dhp2s12s-1p",
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
      id: "concord-4dh-series-wall-single-12000-cfg-7",
      slug: "concord-4dh-series-wall-single-12000-cfg-7",
      modelId: "concord-4dh-series-wall-single-12000",
      outdoorUnitId: "concord-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 18.8,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-12000-cfg-8",
      slug: "concord-4dh-series-wall-single-12000-cfg-8",
      modelId: "concord-4dh-series-wall-single-12000",
      outdoorUnitId: "concord-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11800,
      coolingCapacityMaxBtu: 11800,
      seer2: 22.7,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-18000-cfg-1",
      slug: "concord-4dh-series-wall-single-18000-cfg-1",
      modelId: "concord-4dh-series-wall-single-18000",
      outdoorUnitId: "concord-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-18000-cfg-2",
      slug: "concord-4dh-series-wall-single-18000-cfg-2",
      modelId: "concord-4dh-series-wall-single-18000",
      outdoorUnitId: "concord-4dhp2s18s-1p",
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
      id: "concord-4dh-series-wall-single-18000-cfg-3",
      slug: "concord-4dh-series-wall-single-18000-cfg-3",
      modelId: "concord-4dh-series-wall-single-18000",
      outdoorUnitId: "concord-4dhp2s18m-1p",
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
      id: "concord-4dh-series-wall-single-18000-cfg-4",
      slug: "concord-4dh-series-wall-single-18000-cfg-4",
      modelId: "concord-4dh-series-wall-single-18000",
      outdoorUnitId: "concord-4dhp2s18m-1p",
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
      id: "concord-4dh-series-wall-single-18000-cfg-5",
      slug: "concord-4dh-series-wall-single-18000-cfg-5",
      modelId: "concord-4dh-series-wall-single-18000",
      outdoorUnitId: "concord-4dhp2s18m-1p",
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
      id: "concord-4dh-series-wall-single-18000-cfg-6",
      slug: "concord-4dh-series-wall-single-18000-cfg-6",
      modelId: "concord-4dh-series-wall-single-18000",
      outdoorUnitId: "concord-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-18000-cfg-7",
      slug: "concord-4dh-series-wall-single-18000-cfg-7",
      modelId: "concord-4dh-series-wall-single-18000",
      outdoorUnitId: "concord-4dhp2s18s-1p",
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
      id: "concord-4dh-series-wall-single-24000-cfg-1",
      slug: "concord-4dh-series-wall-single-24000-cfg-1",
      modelId: "concord-4dh-series-wall-single-24000",
      outdoorUnitId: "concord-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-24000-cfg-2",
      slug: "concord-4dh-series-wall-single-24000-cfg-2",
      modelId: "concord-4dh-series-wall-single-24000",
      outdoorUnitId: "concord-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-24000-cfg-3",
      slug: "concord-4dh-series-wall-single-24000-cfg-3",
      modelId: "concord-4dh-series-wall-single-24000",
      outdoorUnitId: "concord-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-24000-cfg-4",
      slug: "concord-4dh-series-wall-single-24000-cfg-4",
      modelId: "concord-4dh-series-wall-single-24000",
      outdoorUnitId: "concord-4dhp2s24m-1p",
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
      id: "concord-4dh-series-wall-single-24000-cfg-5",
      slug: "concord-4dh-series-wall-single-24000-cfg-5",
      modelId: "concord-4dh-series-wall-single-24000",
      outdoorUnitId: "concord-4dhp2s24m-1p",
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
      id: "concord-4dh-series-wall-single-24000-cfg-6",
      slug: "concord-4dh-series-wall-single-24000-cfg-6",
      modelId: "concord-4dh-series-wall-single-24000",
      outdoorUnitId: "concord-4dhp2s24m-1p",
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
      id: "concord-4dh-series-wall-single-24000-cfg-7",
      slug: "concord-4dh-series-wall-single-24000-cfg-7",
      modelId: "concord-4dh-series-wall-single-24000",
      outdoorUnitId: "concord-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-24000-cfg-8",
      slug: "concord-4dh-series-wall-single-24000-cfg-8",
      modelId: "concord-4dh-series-wall-single-24000",
      outdoorUnitId: "concord-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-24000-cfg-9",
      slug: "concord-4dh-series-wall-single-24000-cfg-9",
      modelId: "concord-4dh-series-wall-single-24000",
      outdoorUnitId: "concord-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-15000-cfg-1",
      slug: "concord-4dh-series-wall-single-15000-cfg-1",
      modelId: "concord-4dh-series-wall-single-15000",
      outdoorUnitId: "concord-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.4,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-15000-cfg-2",
      slug: "concord-4dh-series-wall-single-15000-cfg-2",
      modelId: "concord-4dh-series-wall-single-15000",
      outdoorUnitId: "concord-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.4,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-9000-cfg-1",
      slug: "concord-4dh-series-wall-single-9000-cfg-1",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhps209s-1p",
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
      id: "concord-4dh-series-wall-single-9000-cfg-2",
      slug: "concord-4dh-series-wall-single-9000-cfg-2",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhps209s-1p",
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
      id: "concord-4dh-series-wall-single-9000-cfg-3",
      slug: "concord-4dh-series-wall-single-9000-cfg-3",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhps209s-1p",
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
      id: "concord-4dh-series-wall-single-9000-cfg-4",
      slug: "concord-4dh-series-wall-single-9000-cfg-4",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhv2s09s-1l",
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
      id: "concord-4dh-series-wall-single-9000-cfg-5",
      slug: "concord-4dh-series-wall-single-9000-cfg-5",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhv2s09s-1p",
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
      id: "concord-4dh-series-wall-single-9000-cfg-6",
      slug: "concord-4dh-series-wall-single-9000-cfg-6",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhps209s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.5,
      hspf2: 11.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-9000-cfg-7",
      slug: "concord-4dh-series-wall-single-9000-cfg-7",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhps209s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-9000-cfg-8",
      slug: "concord-4dh-series-wall-single-9000-cfg-8",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhps209s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 8900,
      coolingCapacityMaxBtu: 8900,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-9000-cfg-9",
      slug: "concord-4dh-series-wall-single-9000-cfg-9",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhv2s09s-1l",
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
      id: "concord-4dh-series-wall-single-9000-cfg-10",
      slug: "concord-4dh-series-wall-single-9000-cfg-10",
      modelId: "concord-4dh-series-wall-single-9000",
      outdoorUnitId: "concord-4dhv2s09s-1p",
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
      id: "concord-standard-wall-single-12000-cfg-1",
      slug: "concord-standard-wall-single-12000-cfg-1",
      modelId: "concord-standard-wall-single-12000",
      outdoorUnitId: "concord-4dhv2s12s-1l",
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
      id: "concord-standard-wall-single-12000-cfg-2",
      slug: "concord-standard-wall-single-12000-cfg-2",
      modelId: "concord-standard-wall-single-12000",
      outdoorUnitId: "concord-4dhv2s12s-1p",
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
      id: "concord-standard-wall-single-12000-cfg-3",
      slug: "concord-standard-wall-single-12000-cfg-3",
      modelId: "concord-standard-wall-single-12000",
      outdoorUnitId: "concord-4dhv2s12s-1l",
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
      id: "concord-standard-wall-single-12000-cfg-4",
      slug: "concord-standard-wall-single-12000-cfg-4",
      modelId: "concord-standard-wall-single-12000",
      outdoorUnitId: "concord-4dhv2s12s-1p",
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
      id: "concord-standard-wall-single-18000-cfg-1",
      slug: "concord-standard-wall-single-18000-cfg-1",
      modelId: "concord-standard-wall-single-18000",
      outdoorUnitId: "concord-4dhv2s18s-1p",
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
      id: "concord-standard-wall-single-18000-cfg-2",
      slug: "concord-standard-wall-single-18000-cfg-2",
      modelId: "concord-standard-wall-single-18000",
      outdoorUnitId: "concord-4dhv2s18s-1p",
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
      id: "concord-standard-wall-single-24000-cfg-1",
      slug: "concord-standard-wall-single-24000-cfg-1",
      modelId: "concord-standard-wall-single-24000",
      outdoorUnitId: "concord-4dhv2s24s-1p",
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
      id: "concord-standard-wall-single-24000-cfg-2",
      slug: "concord-standard-wall-single-24000-cfg-2",
      modelId: "concord-standard-wall-single-24000",
      outdoorUnitId: "concord-4dhv2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-standard-wall-single-36000-cfg-1",
      slug: "concord-standard-wall-single-36000-cfg-1",
      modelId: "concord-standard-wall-single-36000",
      outdoorUnitId: "concord-4dhp2s36s-1p",
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
      id: "concord-standard-wall-single-36000-cfg-2",
      slug: "concord-standard-wall-single-36000-cfg-2",
      modelId: "concord-standard-wall-single-36000",
      outdoorUnitId: "concord-4dhp2s36s-1p",
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
      id: "concord-standard-wall-single-36000-cfg-3",
      slug: "concord-standard-wall-single-36000-cfg-3",
      modelId: "concord-standard-wall-single-36000",
      outdoorUnitId: "concord-4dhp2s36s-1p",
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
      id: "concord-standard-wall-single-36000-cfg-4",
      slug: "concord-standard-wall-single-36000-cfg-4",
      modelId: "concord-standard-wall-single-36000",
      outdoorUnitId: "concord-4dhp2s36s-1p",
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
      id: "concord-standard-wall-single-48000-cfg-1",
      slug: "concord-standard-wall-single-48000-cfg-1",
      modelId: "concord-standard-wall-single-48000",
      outdoorUnitId: "concord-4dhp2s48s-1p",
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
      id: "concord-standard-wall-single-48000-cfg-2",
      slug: "concord-standard-wall-single-48000-cfg-2",
      modelId: "concord-standard-wall-single-48000",
      outdoorUnitId: "concord-4dhp2s48s-1p",
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
      id: "concord-standard-wall-single-48000-cfg-3",
      slug: "concord-standard-wall-single-48000-cfg-3",
      modelId: "concord-standard-wall-single-48000",
      outdoorUnitId: "concord-4dhp2s48s-1p",
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
      id: "concord-standard-wall-single-48000-cfg-4",
      slug: "concord-standard-wall-single-48000-cfg-4",
      modelId: "concord-standard-wall-single-48000",
      outdoorUnitId: "concord-4dhp2s48s-1p",
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
      id: "concord-4dh-series-wall-single-30000-cfg-1",
      slug: "concord-4dh-series-wall-single-30000-cfg-1",
      modelId: "concord-4dh-series-wall-single-30000",
      outdoorUnitId: "concord-4dhp2s30m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 24.6,
      hspf2: 9.3,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-30000-cfg-2",
      slug: "concord-4dh-series-wall-single-30000-cfg-2",
      modelId: "concord-4dh-series-wall-single-30000",
      outdoorUnitId: "concord-4dhp2s30m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20.7,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-30000-cfg-3",
      slug: "concord-4dh-series-wall-single-30000-cfg-3",
      modelId: "concord-4dh-series-wall-single-30000",
      outdoorUnitId: "concord-4dhp2s30m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.65,
      hspf2: 9.25,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-36000-cfg-1",
      slug: "concord-4dh-series-wall-single-36000-cfg-1",
      modelId: "concord-4dh-series-wall-single-36000",
      outdoorUnitId: "concord-4dhp2s36m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.9,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-4dh-series-wall-single-48000-cfg-1",
      slug: "concord-4dh-series-wall-single-48000-cfg-1",
      modelId: "concord-4dh-series-wall-single-48000",
      outdoorUnitId: "concord-4dhp2s48m-1p",
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
      id: "concord-standard-wall-single-30000-cfg-1",
      slug: "concord-standard-wall-single-30000-cfg-1",
      modelId: "concord-standard-wall-single-30000",
      outdoorUnitId: "concord-4dhp2s30s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29600,
      coolingCapacityMaxBtu: 29600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-24000-cfg-1",
      slug: "concord-7scp18v-series-central-ducted-24000-cfg-1",
      modelId: "concord-7scp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-24000-cfg-2",
      slug: "concord-7scp18v-series-central-ducted-24000-cfg-2",
      modelId: "concord-7scp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-24000-cfg-3",
      slug: "concord-7scp18v-series-central-ducted-24000-cfg-3",
      modelId: "concord-7scp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-24000-cfg-4",
      slug: "concord-7scp18v-series-central-ducted-24000-cfg-4",
      modelId: "concord-7scp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.45,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-24000-cfg-5",
      slug: "concord-7scp18v-series-central-ducted-24000-cfg-5",
      modelId: "concord-7scp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-24000-cfg-6",
      slug: "concord-7scp18v-series-central-ducted-24000-cfg-6",
      modelId: "concord-7scp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.45,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-24000-cfg-7",
      slug: "concord-7scp18v-series-central-ducted-24000-cfg-7",
      modelId: "concord-7scp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-24000-cfg-8",
      slug: "concord-7scp18v-series-central-ducted-24000-cfg-8",
      modelId: "concord-7scp18v-series-central-ducted-24000",
      outdoorUnitId: "concord-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-1",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-1",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-2",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-2",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-3",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-3",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-4",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-4",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-5",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-5",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-6",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-6",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-7",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-7",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-8",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-8",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-9",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-9",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-36000-cfg-10",
      slug: "concord-7scp18v-series-central-ducted-36000-cfg-10",
      modelId: "concord-7scp18v-series-central-ducted-36000",
      outdoorUnitId: "concord-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 17.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-42000-cfg-1",
      slug: "concord-7scp18v-series-central-ducted-42000-cfg-1",
      modelId: "concord-7scp18v-series-central-ducted-42000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-42000-cfg-2",
      slug: "concord-7scp18v-series-central-ducted-42000-cfg-2",
      modelId: "concord-7scp18v-series-central-ducted-42000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-42000-cfg-3",
      slug: "concord-7scp18v-series-central-ducted-42000-cfg-3",
      modelId: "concord-7scp18v-series-central-ducted-42000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-42000-cfg-4",
      slug: "concord-7scp18v-series-central-ducted-42000-cfg-4",
      modelId: "concord-7scp18v-series-central-ducted-42000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-42000-cfg-5",
      slug: "concord-7scp18v-series-central-ducted-42000-cfg-5",
      modelId: "concord-7scp18v-series-central-ducted-42000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-42000-cfg-6",
      slug: "concord-7scp18v-series-central-ducted-42000-cfg-6",
      modelId: "concord-7scp18v-series-central-ducted-42000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-42000-cfg-7",
      slug: "concord-7scp18v-series-central-ducted-42000-cfg-7",
      modelId: "concord-7scp18v-series-central-ducted-42000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-42000-cfg-8",
      slug: "concord-7scp18v-series-central-ducted-42000-cfg-8",
      modelId: "concord-7scp18v-series-central-ducted-42000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-48000-cfg-1",
      slug: "concord-7scp18v-series-central-ducted-48000-cfg-1",
      modelId: "concord-7scp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-48000-cfg-2",
      slug: "concord-7scp18v-series-central-ducted-48000-cfg-2",
      modelId: "concord-7scp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-48000-cfg-3",
      slug: "concord-7scp18v-series-central-ducted-48000-cfg-3",
      modelId: "concord-7scp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-48000-cfg-4",
      slug: "concord-7scp18v-series-central-ducted-48000-cfg-4",
      modelId: "concord-7scp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-48000-cfg-5",
      slug: "concord-7scp18v-series-central-ducted-48000-cfg-5",
      modelId: "concord-7scp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-48000-cfg-6",
      slug: "concord-7scp18v-series-central-ducted-48000-cfg-6",
      modelId: "concord-7scp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-48000-cfg-7",
      slug: "concord-7scp18v-series-central-ducted-48000-cfg-7",
      modelId: "concord-7scp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-48000-cfg-8",
      slug: "concord-7scp18v-series-central-ducted-48000-cfg-8",
      modelId: "concord-7scp18v-series-central-ducted-48000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 16.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-60000-cfg-1",
      slug: "concord-7scp18v-series-central-ducted-60000-cfg-1",
      modelId: "concord-7scp18v-series-central-ducted-60000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "concord-7scp18v-series-central-ducted-60000-cfg-2",
      slug: "concord-7scp18v-series-central-ducted-60000-cfg-2",
      modelId: "concord-7scp18v-series-central-ducted-60000",
      outdoorUnitId: "concord-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "concord-4hp18v-series-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-36000-cfg-2",
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
      configurationId: "concord-4hp18v-series-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-20000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-5",
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
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-102",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-107",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-110",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-113",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-114",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-115",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-118",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-123",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-124",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-125",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-126",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-127",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-130",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-131",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-137",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-138",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-139",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-140",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-141",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-142",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-143",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-144",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-145",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-146",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-147",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-148",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-149",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-150",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-151",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-152",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-153",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-154",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-155",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-156",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-157",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-158",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-159",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-160",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-161",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-162",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-163",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-164",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-165",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-166",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-167",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-168",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-169",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-170",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-171",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-172",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-173",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-174",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-175",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-176",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-177",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-178",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-179",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-180",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-181",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-182",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-183",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-184",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-185",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-186",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-187",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-188",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-189",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-190",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-191",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-192",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-194",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-196",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-197",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-198",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-199",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-200",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-201",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-202",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-203",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-204",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-205",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-206",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-207",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-208",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-209",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-210",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-211",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-212",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-213",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-214",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-215",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-216",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-217",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-218",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-219",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-220",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-221",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-222",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-223",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-224",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-225",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-226",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-227",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-228",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-229",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-230",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-231",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-232",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-233",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-234",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-235",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-236",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-237",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-238",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-239",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-240",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-241",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-242",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-243",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-244",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-245",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-246",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-247",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-248",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-249",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-250",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-251",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-252",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-253",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-254",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-255",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-256",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-257",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-258",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-259",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-260",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-261",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-262",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-263",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-264",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-265",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-266",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-267",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-268",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-269",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-270",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-271",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-272",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-273",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-274",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-275",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-276",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-277",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-278",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-279",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-280",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-281",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-282",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-283",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-284",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-285",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-286",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-287",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-288",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-289",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-290",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-291",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-292",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-293",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-294",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-295",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-296",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-297",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-298",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-299",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-300",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-301",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-302",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-303",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-304",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-305",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-306",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-307",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-308",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-309",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-310",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-311",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-312",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-313",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-314",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-315",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-316",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-317",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-318",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-319",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-320",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-321",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-322",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-323",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-324",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-325",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-326",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-327",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-328",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-329",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-330",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-331",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-332",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-333",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-334",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-335",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-336",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-337",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-338",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-339",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-340",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-341",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-342",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-343",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-344",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-345",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-346",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-347",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-348",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-349",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-350",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-351",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-352",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-353",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-354",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.78,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-355",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-356",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-357",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-358",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-359",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-360",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-361",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-362",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-363",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-364",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-365",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-366",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-367",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-368",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-369",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-370",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-371",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-372",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-373",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-374",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-375",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-376",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-377",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-378",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-379",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-24000-cfg-380",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4hp18v-series-central-ducted-48000-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4dh-series-wall-single-12000-cfg-1",
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
      configurationId: "concord-4dh-series-wall-single-12000-cfg-2",
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
      configurationId: "concord-4dh-series-wall-single-12000-cfg-3",
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
      configurationId: "concord-4dh-series-wall-single-12000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2.01,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4dh-series-wall-single-12000-cfg-5",
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
      configurationId: "concord-4dh-series-wall-single-12000-cfg-6",
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
      configurationId: "concord-4dh-series-wall-single-12000-cfg-7",
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
      configurationId: "concord-4dh-series-wall-single-12000-cfg-8",
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
      configurationId: "concord-4dh-series-wall-single-18000-cfg-1",
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
      configurationId: "concord-4dh-series-wall-single-18000-cfg-2",
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
      configurationId: "concord-4dh-series-wall-single-18000-cfg-3",
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
      configurationId: "concord-4dh-series-wall-single-18000-cfg-4",
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
      configurationId: "concord-4dh-series-wall-single-18000-cfg-5",
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
      configurationId: "concord-4dh-series-wall-single-18000-cfg-6",
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
      configurationId: "concord-4dh-series-wall-single-18000-cfg-7",
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
      configurationId: "concord-4dh-series-wall-single-24000-cfg-1",
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
      configurationId: "concord-4dh-series-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4dh-series-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4dh-series-wall-single-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4dh-series-wall-single-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4dh-series-wall-single-24000-cfg-6",
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
      configurationId: "concord-4dh-series-wall-single-24000-cfg-7",
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
      configurationId: "concord-4dh-series-wall-single-24000-cfg-8",
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
      configurationId: "concord-4dh-series-wall-single-24000-cfg-9",
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
      configurationId: "concord-4dh-series-wall-single-15000-cfg-1",
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
      configurationId: "concord-4dh-series-wall-single-15000-cfg-2",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-1",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-2",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-3",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-4",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-5",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-6",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-7",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-8",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-9",
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
      configurationId: "concord-4dh-series-wall-single-9000-cfg-10",
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
      configurationId: "concord-standard-wall-single-12000-cfg-1",
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
      configurationId: "concord-standard-wall-single-12000-cfg-2",
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
      configurationId: "concord-standard-wall-single-12000-cfg-3",
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
      configurationId: "concord-standard-wall-single-12000-cfg-4",
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
      configurationId: "concord-standard-wall-single-18000-cfg-1",
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
      configurationId: "concord-standard-wall-single-18000-cfg-2",
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
      configurationId: "concord-standard-wall-single-24000-cfg-1",
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
      configurationId: "concord-standard-wall-single-24000-cfg-2",
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
      configurationId: "concord-standard-wall-single-36000-cfg-1",
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
      configurationId: "concord-standard-wall-single-36000-cfg-2",
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
      configurationId: "concord-standard-wall-single-36000-cfg-3",
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
      configurationId: "concord-standard-wall-single-36000-cfg-4",
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
      configurationId: "concord-standard-wall-single-48000-cfg-1",
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
      configurationId: "concord-standard-wall-single-48000-cfg-2",
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
      configurationId: "concord-standard-wall-single-48000-cfg-3",
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
      configurationId: "concord-standard-wall-single-48000-cfg-4",
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
      configurationId: "concord-4dh-series-wall-single-30000-cfg-1",
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
      configurationId: "concord-4dh-series-wall-single-30000-cfg-2",
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
      configurationId: "concord-4dh-series-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-4dh-series-wall-single-36000-cfg-1",
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
      configurationId: "concord-4dh-series-wall-single-48000-cfg-1",
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
      configurationId: "concord-standard-wall-single-30000-cfg-1",
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
      configurationId: "concord-7scp18v-series-central-ducted-24000-cfg-1",
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
      configurationId: "concord-7scp18v-series-central-ducted-24000-cfg-2",
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
      configurationId: "concord-7scp18v-series-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-24000-cfg-5",
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
      configurationId: "concord-7scp18v-series-central-ducted-24000-cfg-6",
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
      configurationId: "concord-7scp18v-series-central-ducted-24000-cfg-7",
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
      configurationId: "concord-7scp18v-series-central-ducted-24000-cfg-8",
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
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-9",
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
      configurationId: "concord-7scp18v-series-central-ducted-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-42000-cfg-1",
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
      configurationId: "concord-7scp18v-series-central-ducted-42000-cfg-2",
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
      configurationId: "concord-7scp18v-series-central-ducted-42000-cfg-3",
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
      configurationId: "concord-7scp18v-series-central-ducted-42000-cfg-4",
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
      configurationId: "concord-7scp18v-series-central-ducted-42000-cfg-5",
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
      configurationId: "concord-7scp18v-series-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "concord-7scp18v-series-central-ducted-60000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.9,
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
