import type { BrandDataset } from "../../types";

export const franklinDataset: BrandDataset = {
  brand: {
    id: "franklin",
    slug: "franklin",
    name: "FRANKLIN",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "franklin-msh-series",
      slug: "franklin-msh-series",
      name: "MSH Series",
      brandId: "franklin",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series",
      slug: "franklin-mst-series",
      name: "MST Series",
      brandId: "franklin",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard",
      slug: "franklin-standard",
      name: "Standard",
      brandId: "franklin",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9",
      slug: "franklin-gszv9",
      name: "GSZV9",
      brandId: "franklin",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9",
      slug: "franklin-aszv9",
      name: "ASZV9",
      brandId: "franklin",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "franklin-msh-series-wall-single-9000",
      slug: "franklin-msh-series-wall-single-9000",
      name: "MSH Series 9 000 BTU",
      seriesId: "franklin-msh-series",
      brandId: "franklin",
      modelNumber: "MSH Series 9k",
      normalizedModelNumber: "msh-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 7100,
      heatingCapacity5FMaxBtu: 10100,
      seer2Min: 20.2,
      seer2Max: 28.1,
      hspf2Min: 10.3,
      hspf2Max: 12,
      cop5FMin: 1.59,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-12000",
      slug: "franklin-msh-series-wall-single-12000",
      name: "MSH Series 12 000 BTU",
      seriesId: "franklin-msh-series",
      brandId: "franklin",
      modelNumber: "MSH Series 12k",
      normalizedModelNumber: "msh-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: 19.5,
      seer2Max: 25.5,
      hspf2Min: 9.5,
      hspf2Max: 10.4,
      cop5FMin: 1.8,
      cop5FMax: 1.96,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-18000",
      slug: "franklin-msh-series-wall-single-18000",
      name: "MSH Series 18 000 BTU",
      seriesId: "franklin-msh-series",
      brandId: "franklin",
      modelNumber: "MSH Series 18k",
      normalizedModelNumber: "msh-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 10900,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 18,
      seer2Max: 21.5,
      hspf2Min: 9.5,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-20000",
      slug: "franklin-msh-series-wall-single-20000",
      name: "MSH Series 20 000 BTU",
      seriesId: "franklin-msh-series",
      brandId: "franklin",
      modelNumber: "MSH Series 20k",
      normalizedModelNumber: "msh-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      heatingCapacity5FMinBtu: 19400,
      heatingCapacity5FMaxBtu: 19400,
      seer2Min: 18.9,
      seer2Max: 18.9,
      hspf2Min: 10.4,
      hspf2Max: 10.4,
      cop5FMin: 1.89,
      cop5FMax: 1.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-18000",
      slug: "franklin-mst-series-wall-single-18000",
      name: "MST Series 18 000 BTU",
      seriesId: "franklin-mst-series",
      brandId: "franklin",
      modelNumber: "MST Series 18k",
      normalizedModelNumber: "mst-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 11500,
      heatingCapacity5FMaxBtu: 16000,
      seer2Min: 18,
      seer2Max: 22,
      hspf2Min: 9.3,
      hspf2Max: 9.8,
      cop5FMin: 1.85,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-30000",
      slug: "franklin-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 18000,
      heatingCapacity5FMaxBtu: 18000,
      seer2Min: 21.4,
      seer2Max: 19.1,
      hspf2Min: 8.8,
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
      id: "franklin-standard-wall-single-36000",
      slug: "franklin-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 23200,
      heatingCapacity5FMaxBtu: 27600,
      seer2Min: 26.4,
      seer2Max: 28.7,
      hspf2Min: 10.7,
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
      id: "franklin-standard-wall-single-18000",
      slug: "franklin-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 10400,
      heatingCapacity5FMaxBtu: 12000,
      seer2Min: 21.7,
      seer2Max: 22.4,
      hspf2Min: 10.2,
      hspf2Max: 10.0,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-24000",
      slug: "franklin-msh-series-wall-single-24000",
      name: "MSH Series 24 000 BTU",
      seriesId: "franklin-msh-series",
      brandId: "franklin",
      modelNumber: "MSH Series 24k",
      normalizedModelNumber: "msh-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 19.2,
      seer2Max: 21.5,
      hspf2Min: 10.5,
      hspf2Max: 11.4,
      cop5FMin: 2,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-15000",
      slug: "franklin-msh-series-wall-single-15000",
      name: "MSH Series 15 000 BTU",
      seriesId: "franklin-msh-series",
      brandId: "franklin",
      modelNumber: "MSH Series 15k",
      normalizedModelNumber: "msh-series-15000",
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
      id: "franklin-standard-wall-single-24000",
      slug: "franklin-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 16000,
      seer2Min: 20.8,
      seer2Max: 29.1,
      hspf2Min: 11.1,
      hspf2Max: 11.9,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-48000",
      slug: "franklin-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 32400,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 27.2,
      seer2Max: 25.6,
      hspf2Min: 9.7,
      hspf2Max: 10.0,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-60000",
      slug: "franklin-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 37600,
      heatingCapacity5FMaxBtu: 37600,
      seer2Min: 24.1,
      seer2Max: 21.1,
      hspf2Min: 8.3,
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
      id: "franklin-standard-wall-single-12000",
      slug: "franklin-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 7500,
      seer2Min: 16.5,
      seer2Max: 27.3,
      hspf2Min: 8.3,
      hspf2Max: 10.3,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000",
      slug: "franklin-gszv9-central-ducted-36000",
      name: "GSZV9 36 000 BTU",
      seriesId: "franklin-gszv9",
      brandId: "franklin",
      modelNumber: "GSZV9 36k",
      normalizedModelNumber: "gszv9-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 21600,
      heatingCapacity5FMaxBtu: 21600,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 8.2,
      hspf2Max: 8.2,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000",
      slug: "franklin-aszv9-central-ducted-36000",
      name: "ASZV9 36 000 BTU",
      seriesId: "franklin-aszv9",
      brandId: "franklin",
      modelNumber: "ASZV9 36k",
      normalizedModelNumber: "aszv9-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 21600,
      heatingCapacity5FMaxBtu: 21600,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 8.2,
      hspf2Max: 8.2,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000",
      slug: "franklin-gszv9-central-ducted-42000",
      name: "GSZV9 42 000 BTU",
      seriesId: "franklin-gszv9",
      brandId: "franklin",
      modelNumber: "GSZV9 42k",
      normalizedModelNumber: "gszv9-42000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 27000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 8.2,
      hspf2Max: 8.2,
      cop5FMin: 1.82,
      cop5FMax: 1.82,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000",
      slug: "franklin-aszv9-central-ducted-42000",
      name: "ASZV9 42 000 BTU",
      seriesId: "franklin-aszv9",
      brandId: "franklin",
      modelNumber: "ASZV9 42k",
      normalizedModelNumber: "aszv9-42000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 27000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 8.2,
      hspf2Max: 8.2,
      cop5FMin: 1.82,
      cop5FMax: 1.82,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000",
      slug: "franklin-gszv9-central-ducted-24000",
      name: "GSZV9 24 000 BTU",
      seriesId: "franklin-gszv9",
      brandId: "franklin",
      modelNumber: "GSZV9 24k",
      normalizedModelNumber: "gszv9-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      heatingCapacity5FMinBtu: 13800,
      heatingCapacity5FMaxBtu: 14800,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 8.2,
      hspf2Max: 8.2,
      cop5FMin: 2.2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000",
      slug: "franklin-aszv9-central-ducted-24000",
      name: "ASZV9 24 000 BTU",
      seriesId: "franklin-aszv9",
      brandId: "franklin",
      modelNumber: "ASZV9 24k",
      normalizedModelNumber: "aszv9-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      heatingCapacity5FMinBtu: 13800,
      heatingCapacity5FMaxBtu: 14800,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 8.2,
      hspf2Max: 8.2,
      cop5FMin: 2.2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000",
      slug: "franklin-standard-central-ducted-48000",
      name: "Standard 48 000 BTU",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 32400,
      heatingCapacity5FMaxBtu: 33400,
      seer2Min: 26.4,
      seer2Max: 25.9,
      hspf2Min: 8.7,
      hspf2Max: 11.3,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-30000",
      slug: "franklin-msh-series-wall-single-30000",
      name: "MSH Series 30 000 BTU",
      seriesId: "franklin-msh-series",
      brandId: "franklin",
      modelNumber: "MSH Series 30k",
      normalizedModelNumber: "msh-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 19000,
      seer2Min: 20.1,
      seer2Max: 20.1,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.92,
      cop5FMax: 1.92,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-24000",
      slug: "franklin-mst-series-wall-single-24000",
      name: "MST Series 24 000 BTU",
      seriesId: "franklin-mst-series",
      brandId: "franklin",
      modelNumber: "MST Series 24k",
      normalizedModelNumber: "mst-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 23000,
      seer2Min: 19,
      seer2Max: 21.8,
      hspf2Min: 10,
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
      id: "franklin-mst-series-wall-single-36000",
      slug: "franklin-mst-series-wall-single-36000",
      name: "MST Series 36 000 BTU",
      seriesId: "franklin-mst-series",
      brandId: "franklin",
      modelNumber: "MST Series 36k",
      normalizedModelNumber: "mst-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 27400,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19.4,
      seer2Max: 22.4,
      hspf2Min: 10,
      hspf2Max: 10.9,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-48000",
      slug: "franklin-mst-series-wall-single-48000",
      name: "MST Series 48 000 BTU",
      seriesId: "franklin-mst-series",
      brandId: "franklin",
      modelNumber: "MST Series 48k",
      normalizedModelNumber: "mst-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 36000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 20.9,
      seer2Max: 21.8,
      hspf2Min: 9,
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
      id: "franklin-mst-series-wall-single-12000",
      slug: "franklin-mst-series-wall-single-12000",
      name: "MST Series 12 000 BTU",
      seriesId: "franklin-mst-series",
      brandId: "franklin",
      modelNumber: "MST Series 12k",
      normalizedModelNumber: "mst-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 9900,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: 19.5,
      seer2Max: 22.3,
      hspf2Min: 10,
      hspf2Max: 10.2,
      cop5FMin: 1.89,
      cop5FMax: 1.96,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-15000",
      slug: "franklin-mst-series-wall-single-15000",
      name: "MST Series 15 000 BTU",
      seriesId: "franklin-mst-series",
      brandId: "franklin",
      modelNumber: "MST Series 15k",
      normalizedModelNumber: "mst-series-15000",
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
      id: "franklin-mst-series-wall-single-30000",
      slug: "franklin-mst-series-wall-single-30000",
      name: "MST Series 30 000 BTU",
      seriesId: "franklin-mst-series",
      brandId: "franklin",
      modelNumber: "MST Series 30k",
      normalizedModelNumber: "mst-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 26600,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 20,
      seer2Max: 23,
      hspf2Min: 9.5,
      hspf2Max: 10.6,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "franklin-msh093e23mcaa",
      modelNumber: "MSH093E23MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh093f25mcaa",
      modelNumber: "MSH093F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh123e23mcaa",
      modelNumber: "MSH123E23MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh123f25mcaa",
      modelNumber: "MSH123F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh183e23mcaa",
      modelNumber: "MSH183E23MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh183f25mcaa",
      modelNumber: "MSH183F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh243e23mcaa",
      modelNumber: "MSH243E23MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst183e23mhaa",
      modelNumber: "MST183E23MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst183f25mhaa",
      modelNumber: "MST183F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst303e23mhaa",
      modelNumber: "MST303E23MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst363e23mhaa",
      modelNumber: "MST363E23MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh363e18mcaa",
      modelNumber: "MSH363E18MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh183e19mcaa",
      modelNumber: "MSH183E19MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh183e21mcaa",
      modelNumber: "MSH183E21MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh243f25mcaa",
      modelNumber: "MSH243F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh243e21mcaa",
      modelNumber: "MSH243E21MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh483e18mcaa",
      modelNumber: "MSH483E18MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-gszv906010a",
      modelNumber: "GSZV906010A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-aszv906010a",
      modelNumber: "ASZV906010A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh603e18mcaa",
      modelNumber: "MSH603E18MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh123e21mcaa",
      modelNumber: "MSH123E21MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-gszv903610a",
      modelNumber: "GSZV903610A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-aszv903610a",
      modelNumber: "ASZV903610A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-gszv904810a",
      modelNumber: "GSZV904810A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-aszv904810a",
      modelNumber: "ASZV904810A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-gszv902410a",
      modelNumber: "GSZV902410A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-aszv902410a",
      modelNumber: "ASZV902410A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh303f25mcaa",
      modelNumber: "MSH303F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst273f25mhaa",
      modelNumber: "MST273F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst363f25mhaa",
      modelNumber: "MST363F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst483f25mhaa",
      modelNumber: "MST483F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst283f25mhaa",
      modelNumber: "MST283F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "franklin-msh-series-wall-single-9000-cfg-1",
      slug: "franklin-msh-series-wall-single-9000-cfg-1",
      modelId: "franklin-msh-series-wall-single-9000",
      outdoorUnitId: "franklin-msh093e23mcaa",
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
      id: "franklin-msh-series-wall-single-9000-cfg-2",
      slug: "franklin-msh-series-wall-single-9000-cfg-2",
      modelId: "franklin-msh-series-wall-single-9000",
      outdoorUnitId: "franklin-msh093e23mcaa",
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
      id: "franklin-msh-series-wall-single-9000-cfg-3",
      slug: "franklin-msh-series-wall-single-9000-cfg-3",
      modelId: "franklin-msh-series-wall-single-9000",
      outdoorUnitId: "franklin-msh093e23mcaa",
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
      id: "franklin-msh-series-wall-single-9000-cfg-4",
      slug: "franklin-msh-series-wall-single-9000-cfg-4",
      modelId: "franklin-msh-series-wall-single-9000",
      outdoorUnitId: "franklin-msh093f25mcaa",
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
      id: "franklin-msh-series-wall-single-12000-cfg-1",
      slug: "franklin-msh-series-wall-single-12000-cfg-1",
      modelId: "franklin-msh-series-wall-single-12000",
      outdoorUnitId: "franklin-msh123e23mcaa",
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
      id: "franklin-msh-series-wall-single-12000-cfg-2",
      slug: "franklin-msh-series-wall-single-12000-cfg-2",
      modelId: "franklin-msh-series-wall-single-12000",
      outdoorUnitId: "franklin-msh123e23mcaa",
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
      id: "franklin-msh-series-wall-single-12000-cfg-3",
      slug: "franklin-msh-series-wall-single-12000-cfg-3",
      modelId: "franklin-msh-series-wall-single-12000",
      outdoorUnitId: "franklin-msh123e23mcaa",
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
      id: "franklin-msh-series-wall-single-12000-cfg-4",
      slug: "franklin-msh-series-wall-single-12000-cfg-4",
      modelId: "franklin-msh-series-wall-single-12000",
      outdoorUnitId: "franklin-msh123f25mcaa",
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
      id: "franklin-msh-series-wall-single-12000-cfg-5",
      slug: "franklin-msh-series-wall-single-12000-cfg-5",
      modelId: "franklin-msh-series-wall-single-12000",
      outdoorUnitId: "franklin-msh123e23mcaa",
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
      id: "franklin-msh-series-wall-single-18000-cfg-1",
      slug: "franklin-msh-series-wall-single-18000-cfg-1",
      modelId: "franklin-msh-series-wall-single-18000",
      outdoorUnitId: "franklin-msh183e23mcaa",
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
      id: "franklin-msh-series-wall-single-18000-cfg-2",
      slug: "franklin-msh-series-wall-single-18000-cfg-2",
      modelId: "franklin-msh-series-wall-single-18000",
      outdoorUnitId: "franklin-msh183e23mcaa",
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
      id: "franklin-msh-series-wall-single-18000-cfg-3",
      slug: "franklin-msh-series-wall-single-18000-cfg-3",
      modelId: "franklin-msh-series-wall-single-18000",
      outdoorUnitId: "franklin-msh183f25mcaa",
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
      id: "franklin-msh-series-wall-single-20000-cfg-1",
      slug: "franklin-msh-series-wall-single-20000-cfg-1",
      modelId: "franklin-msh-series-wall-single-20000",
      outdoorUnitId: "franklin-msh243e23mcaa",
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
      id: "franklin-mst-series-wall-single-18000-cfg-1",
      slug: "franklin-mst-series-wall-single-18000-cfg-1",
      modelId: "franklin-mst-series-wall-single-18000",
      outdoorUnitId: "franklin-mst183e23mhaa",
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
      id: "franklin-mst-series-wall-single-18000-cfg-2",
      slug: "franklin-mst-series-wall-single-18000-cfg-2",
      modelId: "franklin-mst-series-wall-single-18000",
      outdoorUnitId: "franklin-mst183e23mhaa",
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
      id: "franklin-mst-series-wall-single-18000-cfg-3",
      slug: "franklin-mst-series-wall-single-18000-cfg-3",
      modelId: "franklin-mst-series-wall-single-18000",
      outdoorUnitId: "franklin-mst183e23mhaa",
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
      id: "franklin-mst-series-wall-single-18000-cfg-4",
      slug: "franklin-mst-series-wall-single-18000-cfg-4",
      modelId: "franklin-mst-series-wall-single-18000",
      outdoorUnitId: "franklin-mst183f25mhaa",
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
      id: "franklin-mst-series-wall-single-18000-cfg-5",
      slug: "franklin-mst-series-wall-single-18000-cfg-5",
      modelId: "franklin-mst-series-wall-single-18000",
      outdoorUnitId: "franklin-mst183f25mhaa",
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
      id: "franklin-mst-series-wall-single-18000-cfg-6",
      slug: "franklin-mst-series-wall-single-18000-cfg-6",
      modelId: "franklin-mst-series-wall-single-18000",
      outdoorUnitId: "franklin-mst183f25mhaa",
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
      id: "franklin-mst-series-wall-single-18000-cfg-7",
      slug: "franklin-mst-series-wall-single-18000-cfg-7",
      modelId: "franklin-mst-series-wall-single-18000",
      outdoorUnitId: "franklin-msh183f25mcaa",
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
      id: "franklin-standard-wall-single-30000-cfg-1",
      slug: "franklin-standard-wall-single-30000-cfg-1",
      modelId: "franklin-standard-wall-single-30000",
      outdoorUnitId: "franklin-mst303e23mhaa",
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
      id: "franklin-standard-wall-single-36000-cfg-1",
      slug: "franklin-standard-wall-single-36000-cfg-1",
      modelId: "franklin-standard-wall-single-36000",
      outdoorUnitId: "franklin-mst363e23mhaa",
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
      id: "franklin-standard-wall-single-36000-cfg-2",
      slug: "franklin-standard-wall-single-36000-cfg-2",
      modelId: "franklin-standard-wall-single-36000",
      outdoorUnitId: "franklin-mst363e23mhaa",
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
      id: "franklin-standard-wall-single-36000-cfg-3",
      slug: "franklin-standard-wall-single-36000-cfg-3",
      modelId: "franklin-standard-wall-single-36000",
      outdoorUnitId: "franklin-msh363e18mcaa",
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
      id: "franklin-standard-wall-single-18000-cfg-1",
      slug: "franklin-standard-wall-single-18000-cfg-1",
      modelId: "franklin-standard-wall-single-18000",
      outdoorUnitId: "franklin-msh183e19mcaa",
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
      id: "franklin-standard-wall-single-18000-cfg-2",
      slug: "franklin-standard-wall-single-18000-cfg-2",
      modelId: "franklin-standard-wall-single-18000",
      outdoorUnitId: "franklin-msh183e21mcaa",
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
      id: "franklin-standard-wall-single-18000-cfg-3",
      slug: "franklin-standard-wall-single-18000-cfg-3",
      modelId: "franklin-standard-wall-single-18000",
      outdoorUnitId: "franklin-msh183e21mcaa",
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
      id: "franklin-standard-wall-single-18000-cfg-4",
      slug: "franklin-standard-wall-single-18000-cfg-4",
      modelId: "franklin-standard-wall-single-18000",
      outdoorUnitId: "franklin-msh183e21mcaa",
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
      id: "franklin-msh-series-wall-single-24000-cfg-1",
      slug: "franklin-msh-series-wall-single-24000-cfg-1",
      modelId: "franklin-msh-series-wall-single-24000",
      outdoorUnitId: "franklin-msh243e23mcaa",
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
      id: "franklin-msh-series-wall-single-24000-cfg-2",
      slug: "franklin-msh-series-wall-single-24000-cfg-2",
      modelId: "franklin-msh-series-wall-single-24000",
      outdoorUnitId: "franklin-msh243f25mcaa",
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
      id: "franklin-msh-series-wall-single-15000-cfg-1",
      slug: "franklin-msh-series-wall-single-15000-cfg-1",
      modelId: "franklin-msh-series-wall-single-15000",
      outdoorUnitId: "franklin-msh183e23mcaa",
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
      id: "franklin-standard-wall-single-24000-cfg-1",
      slug: "franklin-standard-wall-single-24000-cfg-1",
      modelId: "franklin-standard-wall-single-24000",
      outdoorUnitId: "franklin-msh243e21mcaa",
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
      id: "franklin-standard-wall-single-48000-cfg-1",
      slug: "franklin-standard-wall-single-48000-cfg-1",
      modelId: "franklin-standard-wall-single-48000",
      outdoorUnitId: "franklin-msh483e18mcaa",
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
      id: "franklin-standard-wall-single-48000-cfg-2",
      slug: "franklin-standard-wall-single-48000-cfg-2",
      modelId: "franklin-standard-wall-single-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-48000-cfg-3",
      slug: "franklin-standard-wall-single-48000-cfg-3",
      modelId: "franklin-standard-wall-single-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-48000-cfg-4",
      slug: "franklin-standard-wall-single-48000-cfg-4",
      modelId: "franklin-standard-wall-single-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-48000-cfg-5",
      slug: "franklin-standard-wall-single-48000-cfg-5",
      modelId: "franklin-standard-wall-single-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-48000-cfg-6",
      slug: "franklin-standard-wall-single-48000-cfg-6",
      modelId: "franklin-standard-wall-single-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-48000-cfg-7",
      slug: "franklin-standard-wall-single-48000-cfg-7",
      modelId: "franklin-standard-wall-single-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-48000-cfg-8",
      slug: "franklin-standard-wall-single-48000-cfg-8",
      modelId: "franklin-standard-wall-single-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-60000-cfg-1",
      slug: "franklin-standard-wall-single-60000-cfg-1",
      modelId: "franklin-standard-wall-single-60000",
      outdoorUnitId: "franklin-msh603e18mcaa",
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
      id: "franklin-standard-wall-single-12000-cfg-1",
      slug: "franklin-standard-wall-single-12000-cfg-1",
      modelId: "franklin-standard-wall-single-12000",
      outdoorUnitId: "franklin-msh123e21mcaa",
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
      id: "franklin-gszv9-central-ducted-36000-cfg-1",
      slug: "franklin-gszv9-central-ducted-36000-cfg-1",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-2",
      slug: "franklin-gszv9-central-ducted-36000-cfg-2",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-3",
      slug: "franklin-gszv9-central-ducted-36000-cfg-3",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-4",
      slug: "franklin-gszv9-central-ducted-36000-cfg-4",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-5",
      slug: "franklin-gszv9-central-ducted-36000-cfg-5",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-6",
      slug: "franklin-gszv9-central-ducted-36000-cfg-6",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-7",
      slug: "franklin-gszv9-central-ducted-36000-cfg-7",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-8",
      slug: "franklin-gszv9-central-ducted-36000-cfg-8",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-9",
      slug: "franklin-gszv9-central-ducted-36000-cfg-9",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-10",
      slug: "franklin-gszv9-central-ducted-36000-cfg-10",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-11",
      slug: "franklin-gszv9-central-ducted-36000-cfg-11",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-12",
      slug: "franklin-gszv9-central-ducted-36000-cfg-12",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-13",
      slug: "franklin-gszv9-central-ducted-36000-cfg-13",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-14",
      slug: "franklin-gszv9-central-ducted-36000-cfg-14",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-15",
      slug: "franklin-gszv9-central-ducted-36000-cfg-15",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-16",
      slug: "franklin-gszv9-central-ducted-36000-cfg-16",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-17",
      slug: "franklin-gszv9-central-ducted-36000-cfg-17",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-18",
      slug: "franklin-gszv9-central-ducted-36000-cfg-18",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-19",
      slug: "franklin-gszv9-central-ducted-36000-cfg-19",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-20",
      slug: "franklin-gszv9-central-ducted-36000-cfg-20",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-21",
      slug: "franklin-gszv9-central-ducted-36000-cfg-21",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-22",
      slug: "franklin-gszv9-central-ducted-36000-cfg-22",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-23",
      slug: "franklin-gszv9-central-ducted-36000-cfg-23",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-24",
      slug: "franklin-gszv9-central-ducted-36000-cfg-24",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-25",
      slug: "franklin-gszv9-central-ducted-36000-cfg-25",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-26",
      slug: "franklin-gszv9-central-ducted-36000-cfg-26",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-27",
      slug: "franklin-gszv9-central-ducted-36000-cfg-27",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-28",
      slug: "franklin-gszv9-central-ducted-36000-cfg-28",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-29",
      slug: "franklin-gszv9-central-ducted-36000-cfg-29",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-30",
      slug: "franklin-gszv9-central-ducted-36000-cfg-30",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-31",
      slug: "franklin-gszv9-central-ducted-36000-cfg-31",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-32",
      slug: "franklin-gszv9-central-ducted-36000-cfg-32",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-33",
      slug: "franklin-gszv9-central-ducted-36000-cfg-33",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-34",
      slug: "franklin-gszv9-central-ducted-36000-cfg-34",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-35",
      slug: "franklin-gszv9-central-ducted-36000-cfg-35",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-36",
      slug: "franklin-gszv9-central-ducted-36000-cfg-36",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-37",
      slug: "franklin-gszv9-central-ducted-36000-cfg-37",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-38",
      slug: "franklin-gszv9-central-ducted-36000-cfg-38",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-39",
      slug: "franklin-gszv9-central-ducted-36000-cfg-39",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-40",
      slug: "franklin-gszv9-central-ducted-36000-cfg-40",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-41",
      slug: "franklin-gszv9-central-ducted-36000-cfg-41",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-42",
      slug: "franklin-gszv9-central-ducted-36000-cfg-42",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-43",
      slug: "franklin-gszv9-central-ducted-36000-cfg-43",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-44",
      slug: "franklin-gszv9-central-ducted-36000-cfg-44",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-45",
      slug: "franklin-gszv9-central-ducted-36000-cfg-45",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-46",
      slug: "franklin-gszv9-central-ducted-36000-cfg-46",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-47",
      slug: "franklin-gszv9-central-ducted-36000-cfg-47",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-48",
      slug: "franklin-gszv9-central-ducted-36000-cfg-48",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-49",
      slug: "franklin-gszv9-central-ducted-36000-cfg-49",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-50",
      slug: "franklin-gszv9-central-ducted-36000-cfg-50",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-51",
      slug: "franklin-gszv9-central-ducted-36000-cfg-51",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-52",
      slug: "franklin-gszv9-central-ducted-36000-cfg-52",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-53",
      slug: "franklin-gszv9-central-ducted-36000-cfg-53",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-54",
      slug: "franklin-gszv9-central-ducted-36000-cfg-54",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-55",
      slug: "franklin-gszv9-central-ducted-36000-cfg-55",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-56",
      slug: "franklin-gszv9-central-ducted-36000-cfg-56",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-57",
      slug: "franklin-gszv9-central-ducted-36000-cfg-57",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-58",
      slug: "franklin-gszv9-central-ducted-36000-cfg-58",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-59",
      slug: "franklin-gszv9-central-ducted-36000-cfg-59",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-60",
      slug: "franklin-gszv9-central-ducted-36000-cfg-60",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-61",
      slug: "franklin-gszv9-central-ducted-36000-cfg-61",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-62",
      slug: "franklin-gszv9-central-ducted-36000-cfg-62",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-63",
      slug: "franklin-gszv9-central-ducted-36000-cfg-63",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-64",
      slug: "franklin-gszv9-central-ducted-36000-cfg-64",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-36000-cfg-65",
      slug: "franklin-gszv9-central-ducted-36000-cfg-65",
      modelId: "franklin-gszv9-central-ducted-36000",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-1",
      slug: "franklin-aszv9-central-ducted-36000-cfg-1",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-2",
      slug: "franklin-aszv9-central-ducted-36000-cfg-2",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-3",
      slug: "franklin-aszv9-central-ducted-36000-cfg-3",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-4",
      slug: "franklin-aszv9-central-ducted-36000-cfg-4",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-5",
      slug: "franklin-aszv9-central-ducted-36000-cfg-5",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-6",
      slug: "franklin-aszv9-central-ducted-36000-cfg-6",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-7",
      slug: "franklin-aszv9-central-ducted-36000-cfg-7",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-8",
      slug: "franklin-aszv9-central-ducted-36000-cfg-8",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-9",
      slug: "franklin-aszv9-central-ducted-36000-cfg-9",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-10",
      slug: "franklin-aszv9-central-ducted-36000-cfg-10",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-11",
      slug: "franklin-aszv9-central-ducted-36000-cfg-11",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-12",
      slug: "franklin-aszv9-central-ducted-36000-cfg-12",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-13",
      slug: "franklin-aszv9-central-ducted-36000-cfg-13",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-14",
      slug: "franklin-aszv9-central-ducted-36000-cfg-14",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-15",
      slug: "franklin-aszv9-central-ducted-36000-cfg-15",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-16",
      slug: "franklin-aszv9-central-ducted-36000-cfg-16",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-17",
      slug: "franklin-aszv9-central-ducted-36000-cfg-17",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-18",
      slug: "franklin-aszv9-central-ducted-36000-cfg-18",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-19",
      slug: "franklin-aszv9-central-ducted-36000-cfg-19",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-20",
      slug: "franklin-aszv9-central-ducted-36000-cfg-20",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-21",
      slug: "franklin-aszv9-central-ducted-36000-cfg-21",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-22",
      slug: "franklin-aszv9-central-ducted-36000-cfg-22",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-23",
      slug: "franklin-aszv9-central-ducted-36000-cfg-23",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-24",
      slug: "franklin-aszv9-central-ducted-36000-cfg-24",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-25",
      slug: "franklin-aszv9-central-ducted-36000-cfg-25",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-26",
      slug: "franklin-aszv9-central-ducted-36000-cfg-26",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-27",
      slug: "franklin-aszv9-central-ducted-36000-cfg-27",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-28",
      slug: "franklin-aszv9-central-ducted-36000-cfg-28",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-29",
      slug: "franklin-aszv9-central-ducted-36000-cfg-29",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-30",
      slug: "franklin-aszv9-central-ducted-36000-cfg-30",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-31",
      slug: "franklin-aszv9-central-ducted-36000-cfg-31",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-32",
      slug: "franklin-aszv9-central-ducted-36000-cfg-32",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-33",
      slug: "franklin-aszv9-central-ducted-36000-cfg-33",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-34",
      slug: "franklin-aszv9-central-ducted-36000-cfg-34",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-35",
      slug: "franklin-aszv9-central-ducted-36000-cfg-35",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-36",
      slug: "franklin-aszv9-central-ducted-36000-cfg-36",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-37",
      slug: "franklin-aszv9-central-ducted-36000-cfg-37",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-38",
      slug: "franklin-aszv9-central-ducted-36000-cfg-38",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-39",
      slug: "franklin-aszv9-central-ducted-36000-cfg-39",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-40",
      slug: "franklin-aszv9-central-ducted-36000-cfg-40",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-41",
      slug: "franklin-aszv9-central-ducted-36000-cfg-41",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-42",
      slug: "franklin-aszv9-central-ducted-36000-cfg-42",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-43",
      slug: "franklin-aszv9-central-ducted-36000-cfg-43",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-44",
      slug: "franklin-aszv9-central-ducted-36000-cfg-44",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-45",
      slug: "franklin-aszv9-central-ducted-36000-cfg-45",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-46",
      slug: "franklin-aszv9-central-ducted-36000-cfg-46",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-47",
      slug: "franklin-aszv9-central-ducted-36000-cfg-47",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-48",
      slug: "franklin-aszv9-central-ducted-36000-cfg-48",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-49",
      slug: "franklin-aszv9-central-ducted-36000-cfg-49",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-50",
      slug: "franklin-aszv9-central-ducted-36000-cfg-50",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-51",
      slug: "franklin-aszv9-central-ducted-36000-cfg-51",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-52",
      slug: "franklin-aszv9-central-ducted-36000-cfg-52",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-53",
      slug: "franklin-aszv9-central-ducted-36000-cfg-53",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-54",
      slug: "franklin-aszv9-central-ducted-36000-cfg-54",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-55",
      slug: "franklin-aszv9-central-ducted-36000-cfg-55",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-56",
      slug: "franklin-aszv9-central-ducted-36000-cfg-56",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-57",
      slug: "franklin-aszv9-central-ducted-36000-cfg-57",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-58",
      slug: "franklin-aszv9-central-ducted-36000-cfg-58",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-59",
      slug: "franklin-aszv9-central-ducted-36000-cfg-59",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-60",
      slug: "franklin-aszv9-central-ducted-36000-cfg-60",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-61",
      slug: "franklin-aszv9-central-ducted-36000-cfg-61",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-62",
      slug: "franklin-aszv9-central-ducted-36000-cfg-62",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-63",
      slug: "franklin-aszv9-central-ducted-36000-cfg-63",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-64",
      slug: "franklin-aszv9-central-ducted-36000-cfg-64",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-36000-cfg-65",
      slug: "franklin-aszv9-central-ducted-36000-cfg-65",
      modelId: "franklin-aszv9-central-ducted-36000",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-1",
      slug: "franklin-gszv9-central-ducted-42000-cfg-1",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-2",
      slug: "franklin-gszv9-central-ducted-42000-cfg-2",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-3",
      slug: "franklin-gszv9-central-ducted-42000-cfg-3",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-4",
      slug: "franklin-gszv9-central-ducted-42000-cfg-4",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-5",
      slug: "franklin-gszv9-central-ducted-42000-cfg-5",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-6",
      slug: "franklin-gszv9-central-ducted-42000-cfg-6",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-7",
      slug: "franklin-gszv9-central-ducted-42000-cfg-7",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-8",
      slug: "franklin-gszv9-central-ducted-42000-cfg-8",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-9",
      slug: "franklin-gszv9-central-ducted-42000-cfg-9",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-10",
      slug: "franklin-gszv9-central-ducted-42000-cfg-10",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-11",
      slug: "franklin-gszv9-central-ducted-42000-cfg-11",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-12",
      slug: "franklin-gszv9-central-ducted-42000-cfg-12",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-13",
      slug: "franklin-gszv9-central-ducted-42000-cfg-13",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-14",
      slug: "franklin-gszv9-central-ducted-42000-cfg-14",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-15",
      slug: "franklin-gszv9-central-ducted-42000-cfg-15",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-16",
      slug: "franklin-gszv9-central-ducted-42000-cfg-16",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-17",
      slug: "franklin-gszv9-central-ducted-42000-cfg-17",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-18",
      slug: "franklin-gszv9-central-ducted-42000-cfg-18",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-19",
      slug: "franklin-gszv9-central-ducted-42000-cfg-19",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-20",
      slug: "franklin-gszv9-central-ducted-42000-cfg-20",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-21",
      slug: "franklin-gszv9-central-ducted-42000-cfg-21",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-22",
      slug: "franklin-gszv9-central-ducted-42000-cfg-22",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-23",
      slug: "franklin-gszv9-central-ducted-42000-cfg-23",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-24",
      slug: "franklin-gszv9-central-ducted-42000-cfg-24",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-25",
      slug: "franklin-gszv9-central-ducted-42000-cfg-25",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-26",
      slug: "franklin-gszv9-central-ducted-42000-cfg-26",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-27",
      slug: "franklin-gszv9-central-ducted-42000-cfg-27",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-28",
      slug: "franklin-gszv9-central-ducted-42000-cfg-28",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-29",
      slug: "franklin-gszv9-central-ducted-42000-cfg-29",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-30",
      slug: "franklin-gszv9-central-ducted-42000-cfg-30",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-31",
      slug: "franklin-gszv9-central-ducted-42000-cfg-31",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-32",
      slug: "franklin-gszv9-central-ducted-42000-cfg-32",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-33",
      slug: "franklin-gszv9-central-ducted-42000-cfg-33",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-34",
      slug: "franklin-gszv9-central-ducted-42000-cfg-34",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-35",
      slug: "franklin-gszv9-central-ducted-42000-cfg-35",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-36",
      slug: "franklin-gszv9-central-ducted-42000-cfg-36",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-42000-cfg-37",
      slug: "franklin-gszv9-central-ducted-42000-cfg-37",
      modelId: "franklin-gszv9-central-ducted-42000",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-1",
      slug: "franklin-aszv9-central-ducted-42000-cfg-1",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-2",
      slug: "franklin-aszv9-central-ducted-42000-cfg-2",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-3",
      slug: "franklin-aszv9-central-ducted-42000-cfg-3",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-4",
      slug: "franklin-aszv9-central-ducted-42000-cfg-4",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-5",
      slug: "franklin-aszv9-central-ducted-42000-cfg-5",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-6",
      slug: "franklin-aszv9-central-ducted-42000-cfg-6",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-7",
      slug: "franklin-aszv9-central-ducted-42000-cfg-7",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-8",
      slug: "franklin-aszv9-central-ducted-42000-cfg-8",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-9",
      slug: "franklin-aszv9-central-ducted-42000-cfg-9",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-10",
      slug: "franklin-aszv9-central-ducted-42000-cfg-10",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-11",
      slug: "franklin-aszv9-central-ducted-42000-cfg-11",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-12",
      slug: "franklin-aszv9-central-ducted-42000-cfg-12",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-13",
      slug: "franklin-aszv9-central-ducted-42000-cfg-13",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-14",
      slug: "franklin-aszv9-central-ducted-42000-cfg-14",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-15",
      slug: "franklin-aszv9-central-ducted-42000-cfg-15",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-16",
      slug: "franklin-aszv9-central-ducted-42000-cfg-16",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-17",
      slug: "franklin-aszv9-central-ducted-42000-cfg-17",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-18",
      slug: "franklin-aszv9-central-ducted-42000-cfg-18",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-19",
      slug: "franklin-aszv9-central-ducted-42000-cfg-19",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-20",
      slug: "franklin-aszv9-central-ducted-42000-cfg-20",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-21",
      slug: "franklin-aszv9-central-ducted-42000-cfg-21",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-22",
      slug: "franklin-aszv9-central-ducted-42000-cfg-22",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-23",
      slug: "franklin-aszv9-central-ducted-42000-cfg-23",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-24",
      slug: "franklin-aszv9-central-ducted-42000-cfg-24",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-25",
      slug: "franklin-aszv9-central-ducted-42000-cfg-25",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-26",
      slug: "franklin-aszv9-central-ducted-42000-cfg-26",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-27",
      slug: "franklin-aszv9-central-ducted-42000-cfg-27",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-28",
      slug: "franklin-aszv9-central-ducted-42000-cfg-28",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-29",
      slug: "franklin-aszv9-central-ducted-42000-cfg-29",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-30",
      slug: "franklin-aszv9-central-ducted-42000-cfg-30",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-31",
      slug: "franklin-aszv9-central-ducted-42000-cfg-31",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-32",
      slug: "franklin-aszv9-central-ducted-42000-cfg-32",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-33",
      slug: "franklin-aszv9-central-ducted-42000-cfg-33",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-34",
      slug: "franklin-aszv9-central-ducted-42000-cfg-34",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-35",
      slug: "franklin-aszv9-central-ducted-42000-cfg-35",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-36",
      slug: "franklin-aszv9-central-ducted-42000-cfg-36",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-42000-cfg-37",
      slug: "franklin-aszv9-central-ducted-42000-cfg-37",
      modelId: "franklin-aszv9-central-ducted-42000",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-1",
      slug: "franklin-gszv9-central-ducted-24000-cfg-1",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-2",
      slug: "franklin-gszv9-central-ducted-24000-cfg-2",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-3",
      slug: "franklin-gszv9-central-ducted-24000-cfg-3",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-4",
      slug: "franklin-gszv9-central-ducted-24000-cfg-4",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-5",
      slug: "franklin-gszv9-central-ducted-24000-cfg-5",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-6",
      slug: "franklin-gszv9-central-ducted-24000-cfg-6",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-7",
      slug: "franklin-gszv9-central-ducted-24000-cfg-7",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-8",
      slug: "franklin-gszv9-central-ducted-24000-cfg-8",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-9",
      slug: "franklin-gszv9-central-ducted-24000-cfg-9",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-10",
      slug: "franklin-gszv9-central-ducted-24000-cfg-10",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-11",
      slug: "franklin-gszv9-central-ducted-24000-cfg-11",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-12",
      slug: "franklin-gszv9-central-ducted-24000-cfg-12",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-13",
      slug: "franklin-gszv9-central-ducted-24000-cfg-13",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-14",
      slug: "franklin-gszv9-central-ducted-24000-cfg-14",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-15",
      slug: "franklin-gszv9-central-ducted-24000-cfg-15",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-16",
      slug: "franklin-gszv9-central-ducted-24000-cfg-16",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-17",
      slug: "franklin-gszv9-central-ducted-24000-cfg-17",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-18",
      slug: "franklin-gszv9-central-ducted-24000-cfg-18",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-19",
      slug: "franklin-gszv9-central-ducted-24000-cfg-19",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-20",
      slug: "franklin-gszv9-central-ducted-24000-cfg-20",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-21",
      slug: "franklin-gszv9-central-ducted-24000-cfg-21",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-22",
      slug: "franklin-gszv9-central-ducted-24000-cfg-22",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-23",
      slug: "franklin-gszv9-central-ducted-24000-cfg-23",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-24",
      slug: "franklin-gszv9-central-ducted-24000-cfg-24",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-25",
      slug: "franklin-gszv9-central-ducted-24000-cfg-25",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-26",
      slug: "franklin-gszv9-central-ducted-24000-cfg-26",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-27",
      slug: "franklin-gszv9-central-ducted-24000-cfg-27",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-28",
      slug: "franklin-gszv9-central-ducted-24000-cfg-28",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-29",
      slug: "franklin-gszv9-central-ducted-24000-cfg-29",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-30",
      slug: "franklin-gszv9-central-ducted-24000-cfg-30",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-31",
      slug: "franklin-gszv9-central-ducted-24000-cfg-31",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-32",
      slug: "franklin-gszv9-central-ducted-24000-cfg-32",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-33",
      slug: "franklin-gszv9-central-ducted-24000-cfg-33",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-24000-cfg-34",
      slug: "franklin-gszv9-central-ducted-24000-cfg-34",
      modelId: "franklin-gszv9-central-ducted-24000",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-1",
      slug: "franklin-aszv9-central-ducted-24000-cfg-1",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-2",
      slug: "franklin-aszv9-central-ducted-24000-cfg-2",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-3",
      slug: "franklin-aszv9-central-ducted-24000-cfg-3",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-4",
      slug: "franklin-aszv9-central-ducted-24000-cfg-4",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-5",
      slug: "franklin-aszv9-central-ducted-24000-cfg-5",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-6",
      slug: "franklin-aszv9-central-ducted-24000-cfg-6",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-7",
      slug: "franklin-aszv9-central-ducted-24000-cfg-7",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-8",
      slug: "franklin-aszv9-central-ducted-24000-cfg-8",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-9",
      slug: "franklin-aszv9-central-ducted-24000-cfg-9",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-10",
      slug: "franklin-aszv9-central-ducted-24000-cfg-10",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-11",
      slug: "franklin-aszv9-central-ducted-24000-cfg-11",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-12",
      slug: "franklin-aszv9-central-ducted-24000-cfg-12",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-13",
      slug: "franklin-aszv9-central-ducted-24000-cfg-13",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-14",
      slug: "franklin-aszv9-central-ducted-24000-cfg-14",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-15",
      slug: "franklin-aszv9-central-ducted-24000-cfg-15",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-16",
      slug: "franklin-aszv9-central-ducted-24000-cfg-16",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-17",
      slug: "franklin-aszv9-central-ducted-24000-cfg-17",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-18",
      slug: "franklin-aszv9-central-ducted-24000-cfg-18",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-19",
      slug: "franklin-aszv9-central-ducted-24000-cfg-19",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-20",
      slug: "franklin-aszv9-central-ducted-24000-cfg-20",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-21",
      slug: "franklin-aszv9-central-ducted-24000-cfg-21",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-22",
      slug: "franklin-aszv9-central-ducted-24000-cfg-22",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-23",
      slug: "franklin-aszv9-central-ducted-24000-cfg-23",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-24",
      slug: "franklin-aszv9-central-ducted-24000-cfg-24",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-25",
      slug: "franklin-aszv9-central-ducted-24000-cfg-25",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-26",
      slug: "franklin-aszv9-central-ducted-24000-cfg-26",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-27",
      slug: "franklin-aszv9-central-ducted-24000-cfg-27",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-28",
      slug: "franklin-aszv9-central-ducted-24000-cfg-28",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-29",
      slug: "franklin-aszv9-central-ducted-24000-cfg-29",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-30",
      slug: "franklin-aszv9-central-ducted-24000-cfg-30",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-31",
      slug: "franklin-aszv9-central-ducted-24000-cfg-31",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-32",
      slug: "franklin-aszv9-central-ducted-24000-cfg-32",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-33",
      slug: "franklin-aszv9-central-ducted-24000-cfg-33",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-24000-cfg-34",
      slug: "franklin-aszv9-central-ducted-24000-cfg-34",
      modelId: "franklin-aszv9-central-ducted-24000",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-1",
      slug: "franklin-standard-central-ducted-48000-cfg-1",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-2",
      slug: "franklin-standard-central-ducted-48000-cfg-2",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-3",
      slug: "franklin-standard-central-ducted-48000-cfg-3",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-4",
      slug: "franklin-standard-central-ducted-48000-cfg-4",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-5",
      slug: "franklin-standard-central-ducted-48000-cfg-5",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-6",
      slug: "franklin-standard-central-ducted-48000-cfg-6",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-7",
      slug: "franklin-standard-central-ducted-48000-cfg-7",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-8",
      slug: "franklin-standard-central-ducted-48000-cfg-8",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-9",
      slug: "franklin-standard-central-ducted-48000-cfg-9",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-10",
      slug: "franklin-standard-central-ducted-48000-cfg-10",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-11",
      slug: "franklin-standard-central-ducted-48000-cfg-11",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-12",
      slug: "franklin-standard-central-ducted-48000-cfg-12",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-13",
      slug: "franklin-standard-central-ducted-48000-cfg-13",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-14",
      slug: "franklin-standard-central-ducted-48000-cfg-14",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-15",
      slug: "franklin-standard-central-ducted-48000-cfg-15",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-16",
      slug: "franklin-standard-central-ducted-48000-cfg-16",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-17",
      slug: "franklin-standard-central-ducted-48000-cfg-17",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-18",
      slug: "franklin-standard-central-ducted-48000-cfg-18",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-19",
      slug: "franklin-standard-central-ducted-48000-cfg-19",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-20",
      slug: "franklin-standard-central-ducted-48000-cfg-20",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-21",
      slug: "franklin-standard-central-ducted-48000-cfg-21",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-22",
      slug: "franklin-standard-central-ducted-48000-cfg-22",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-23",
      slug: "franklin-standard-central-ducted-48000-cfg-23",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-24",
      slug: "franklin-standard-central-ducted-48000-cfg-24",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-25",
      slug: "franklin-standard-central-ducted-48000-cfg-25",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-26",
      slug: "franklin-standard-central-ducted-48000-cfg-26",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-27",
      slug: "franklin-standard-central-ducted-48000-cfg-27",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-28",
      slug: "franklin-standard-central-ducted-48000-cfg-28",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-29",
      slug: "franklin-standard-central-ducted-48000-cfg-29",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-48000-cfg-30",
      slug: "franklin-standard-central-ducted-48000-cfg-30",
      modelId: "franklin-standard-central-ducted-48000",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-30000-cfg-1",
      slug: "franklin-msh-series-wall-single-30000-cfg-1",
      modelId: "franklin-msh-series-wall-single-30000",
      outdoorUnitId: "franklin-msh303f25mcaa",
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
      id: "franklin-mst-series-wall-single-24000-cfg-1",
      slug: "franklin-mst-series-wall-single-24000-cfg-1",
      modelId: "franklin-mst-series-wall-single-24000",
      outdoorUnitId: "franklin-mst273f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-24000-cfg-2",
      slug: "franklin-mst-series-wall-single-24000-cfg-2",
      modelId: "franklin-mst-series-wall-single-24000",
      outdoorUnitId: "franklin-mst273f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-24000-cfg-3",
      slug: "franklin-mst-series-wall-single-24000-cfg-3",
      modelId: "franklin-mst-series-wall-single-24000",
      outdoorUnitId: "franklin-mst273f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-24000-cfg-4",
      slug: "franklin-mst-series-wall-single-24000-cfg-4",
      modelId: "franklin-mst-series-wall-single-24000",
      outdoorUnitId: "franklin-msh243f25mcaa",
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
      id: "franklin-mst-series-wall-single-36000-cfg-1",
      slug: "franklin-mst-series-wall-single-36000-cfg-1",
      modelId: "franklin-mst-series-wall-single-36000",
      outdoorUnitId: "franklin-mst363f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.4,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-36000-cfg-2",
      slug: "franklin-mst-series-wall-single-36000-cfg-2",
      modelId: "franklin-mst-series-wall-single-36000",
      outdoorUnitId: "franklin-mst363f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-36000-cfg-3",
      slug: "franklin-mst-series-wall-single-36000-cfg-3",
      modelId: "franklin-mst-series-wall-single-36000",
      outdoorUnitId: "franklin-mst363f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.9,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-48000-cfg-1",
      slug: "franklin-mst-series-wall-single-48000-cfg-1",
      modelId: "franklin-mst-series-wall-single-48000",
      outdoorUnitId: "franklin-mst483f25mhaa",
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
      id: "franklin-mst-series-wall-single-48000-cfg-2",
      slug: "franklin-mst-series-wall-single-48000-cfg-2",
      modelId: "franklin-mst-series-wall-single-48000",
      outdoorUnitId: "franklin-mst483f25mhaa",
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
      id: "franklin-mst-series-wall-single-48000-cfg-3",
      slug: "franklin-mst-series-wall-single-48000-cfg-3",
      modelId: "franklin-mst-series-wall-single-48000",
      outdoorUnitId: "franklin-mst483f25mhaa",
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
      id: "franklin-mst-series-wall-single-12000-cfg-1",
      slug: "franklin-mst-series-wall-single-12000-cfg-1",
      modelId: "franklin-mst-series-wall-single-12000",
      outdoorUnitId: "franklin-msh123f25mcaa",
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
      id: "franklin-mst-series-wall-single-12000-cfg-2",
      slug: "franklin-mst-series-wall-single-12000-cfg-2",
      modelId: "franklin-mst-series-wall-single-12000",
      outdoorUnitId: "franklin-msh123f25mcaa",
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
      id: "franklin-mst-series-wall-single-15000-cfg-1",
      slug: "franklin-mst-series-wall-single-15000-cfg-1",
      modelId: "franklin-mst-series-wall-single-15000",
      outdoorUnitId: "franklin-msh183f25mcaa",
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
      id: "franklin-mst-series-wall-single-30000-cfg-1",
      slug: "franklin-mst-series-wall-single-30000-cfg-1",
      modelId: "franklin-mst-series-wall-single-30000",
      outdoorUnitId: "franklin-mst283f25mhaa",
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
      id: "franklin-mst-series-wall-single-30000-cfg-2",
      slug: "franklin-mst-series-wall-single-30000-cfg-2",
      modelId: "franklin-mst-series-wall-single-30000",
      outdoorUnitId: "franklin-mst283f25mhaa",
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
      id: "franklin-mst-series-wall-single-30000-cfg-3",
      slug: "franklin-mst-series-wall-single-30000-cfg-3",
      modelId: "franklin-mst-series-wall-single-30000",
      outdoorUnitId: "franklin-mst283f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.5,
      hspf2: 10.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "franklin-msh-series-wall-single-9000-cfg-1",
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
      configurationId: "franklin-msh-series-wall-single-9000-cfg-2",
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
      configurationId: "franklin-msh-series-wall-single-9000-cfg-3",
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
      configurationId: "franklin-msh-series-wall-single-9000-cfg-4",
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
      configurationId: "franklin-msh-series-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-msh-series-wall-single-12000-cfg-2",
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
      configurationId: "franklin-msh-series-wall-single-12000-cfg-3",
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
      configurationId: "franklin-msh-series-wall-single-12000-cfg-4",
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
      configurationId: "franklin-msh-series-wall-single-12000-cfg-5",
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
      configurationId: "franklin-msh-series-wall-single-18000-cfg-1",
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
      configurationId: "franklin-msh-series-wall-single-18000-cfg-2",
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
      configurationId: "franklin-msh-series-wall-single-18000-cfg-3",
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
      configurationId: "franklin-msh-series-wall-single-20000-cfg-1",
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
      configurationId: "franklin-mst-series-wall-single-18000-cfg-1",
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
      configurationId: "franklin-mst-series-wall-single-18000-cfg-2",
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
      configurationId: "franklin-mst-series-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-mst-series-wall-single-18000-cfg-4",
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
      configurationId: "franklin-mst-series-wall-single-18000-cfg-5",
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
      configurationId: "franklin-mst-series-wall-single-18000-cfg-6",
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
      configurationId: "franklin-mst-series-wall-single-18000-cfg-7",
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
      configurationId: "franklin-standard-wall-single-30000-cfg-1",
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
      configurationId: "franklin-standard-wall-single-36000-cfg-1",
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
      configurationId: "franklin-standard-wall-single-36000-cfg-2",
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
      configurationId: "franklin-standard-wall-single-36000-cfg-3",
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
      configurationId: "franklin-standard-wall-single-18000-cfg-1",
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
      configurationId: "franklin-standard-wall-single-18000-cfg-2",
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
      configurationId: "franklin-standard-wall-single-18000-cfg-3",
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
      configurationId: "franklin-standard-wall-single-18000-cfg-4",
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
      configurationId: "franklin-msh-series-wall-single-24000-cfg-1",
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
      configurationId: "franklin-msh-series-wall-single-24000-cfg-2",
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
      configurationId: "franklin-msh-series-wall-single-15000-cfg-1",
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
      configurationId: "franklin-standard-wall-single-24000-cfg-1",
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
      configurationId: "franklin-standard-wall-single-48000-cfg-1",
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
      configurationId: "franklin-standard-wall-single-48000-cfg-2",
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
      configurationId: "franklin-standard-wall-single-48000-cfg-3",
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
      configurationId: "franklin-standard-wall-single-48000-cfg-4",
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
      configurationId: "franklin-standard-wall-single-48000-cfg-5",
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
      configurationId: "franklin-standard-wall-single-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-48000-cfg-8",
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
      configurationId: "franklin-standard-wall-single-60000-cfg-1",
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
      configurationId: "franklin-standard-wall-single-12000-cfg-1",
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
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-36000-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-36000-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-42000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-42000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-1",
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
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-24000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-1",
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
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-24000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-1",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-2",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-3",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-4",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-5",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-16",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-17",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-18",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-19",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-20",
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
      configurationId: "franklin-standard-central-ducted-48000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-48000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-msh-series-wall-single-30000-cfg-1",
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
      configurationId: "franklin-mst-series-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-mst-series-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-mst-series-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-mst-series-wall-single-24000-cfg-4",
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
      configurationId: "franklin-mst-series-wall-single-36000-cfg-1",
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
      configurationId: "franklin-mst-series-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-mst-series-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-mst-series-wall-single-48000-cfg-1",
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
      configurationId: "franklin-mst-series-wall-single-48000-cfg-2",
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
      configurationId: "franklin-mst-series-wall-single-48000-cfg-3",
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
      configurationId: "franklin-mst-series-wall-single-12000-cfg-1",
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
      configurationId: "franklin-mst-series-wall-single-12000-cfg-2",
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
      configurationId: "franklin-mst-series-wall-single-15000-cfg-1",
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
      configurationId: "franklin-mst-series-wall-single-30000-cfg-1",
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
      configurationId: "franklin-mst-series-wall-single-30000-cfg-2",
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
      configurationId: "franklin-mst-series-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 1.8,
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
