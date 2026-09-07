import type { BrandDataset } from "../../types";

export const alliedDataset: BrandDataset = {
  brand: {
    id: "allied",
    slug: "allied",
    name: "ALLIED",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "allied-4hp18v-series",
      slug: "allied-4hp18v-series",
      name: "4HP18V SERIES",
      brandId: "allied",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series",
      slug: "allied-4dh-series",
      name: "4DH SERIES",
      brandId: "allied",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard",
      slug: "allied-standard",
      name: "Standard",
      brandId: "allied",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "allied-4hp18v-series-central-ducted-36000",
      slug: "allied-4hp18v-series-central-ducted-36000",
      name: "4HP18V SERIES 36 000 BTU",
      seriesId: "allied-4hp18v-series",
      brandId: "allied",
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
      id: "allied-4hp18v-series-central-ducted-20000",
      slug: "allied-4hp18v-series-central-ducted-20000",
      name: "4HP18V SERIES 20 000 BTU",
      seriesId: "allied-4hp18v-series",
      brandId: "allied",
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
      id: "allied-4hp18v-series-central-ducted-24000",
      slug: "allied-4hp18v-series-central-ducted-24000",
      name: "4HP18V SERIES 24 000 BTU",
      seriesId: "allied-4hp18v-series",
      brandId: "allied",
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
      id: "allied-4hp18v-series-central-ducted-48000",
      slug: "allied-4hp18v-series-central-ducted-48000",
      name: "4HP18V SERIES 48 000 BTU",
      seriesId: "allied-4hp18v-series",
      brandId: "allied",
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
      id: "allied-4dh-series-wall-single-12000",
      slug: "allied-4dh-series-wall-single-12000",
      name: "4DH SERIES 12 000 BTU",
      seriesId: "allied-4dh-series",
      brandId: "allied",
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
      id: "allied-4dh-series-wall-single-18000",
      slug: "allied-4dh-series-wall-single-18000",
      name: "4DH SERIES 18 000 BTU",
      seriesId: "allied-4dh-series",
      brandId: "allied",
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
      id: "allied-4dh-series-wall-single-24000",
      slug: "allied-4dh-series-wall-single-24000",
      name: "4DH SERIES 24 000 BTU",
      seriesId: "allied-4dh-series",
      brandId: "allied",
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
      id: "allied-4dh-series-wall-single-15000",
      slug: "allied-4dh-series-wall-single-15000",
      name: "4DH SERIES 15 000 BTU",
      seriesId: "allied-4dh-series",
      brandId: "allied",
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
      id: "allied-4dh-series-wall-single-9000",
      slug: "allied-4dh-series-wall-single-9000",
      name: "4DH SERIES 9 000 BTU",
      seriesId: "allied-4dh-series",
      brandId: "allied",
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
      id: "allied-standard-wall-single-12000",
      slug: "allied-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "allied-standard",
      brandId: "allied",
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
      id: "allied-standard-wall-single-18000",
      slug: "allied-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "allied-standard",
      brandId: "allied",
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
      id: "allied-standard-wall-single-24000",
      slug: "allied-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "allied-standard",
      brandId: "allied",
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
      id: "allied-standard-wall-single-36000",
      slug: "allied-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "allied-standard",
      brandId: "allied",
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
      id: "allied-standard-wall-single-48000",
      slug: "allied-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "allied-standard",
      brandId: "allied",
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
      id: "allied-4dh-series-wall-single-30000",
      slug: "allied-4dh-series-wall-single-30000",
      name: "4DH SERIES 30 000 BTU",
      seriesId: "allied-4dh-series",
      brandId: "allied",
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
      id: "allied-4dh-series-wall-single-36000",
      slug: "allied-4dh-series-wall-single-36000",
      name: "4DH SERIES 36 000 BTU",
      seriesId: "allied-4dh-series",
      brandId: "allied",
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
      id: "allied-4dh-series-wall-single-48000",
      slug: "allied-4dh-series-wall-single-48000",
      name: "4DH SERIES 48 000 BTU",
      seriesId: "allied-4dh-series",
      brandId: "allied",
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
      id: "allied-standard-wall-single-30000",
      slug: "allied-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "allied-standard",
      brandId: "allied",
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
    }
  ],
  outdoorUnits: [
    {
      id: "allied-4hp18v36p",
      modelNumber: "4HP18V36P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4hp18v60p",
      modelNumber: "4HP18V60P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s12s-1p",
      modelNumber: "4DHP2S12S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s12s-1l",
      modelNumber: "4DHP2S12S-1L",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s18s-1p",
      modelNumber: "4DHP2S18S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s18m-1p",
      modelNumber: "4DHP2S18M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s24s-1p",
      modelNumber: "4DHP2S24S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s24m-1p",
      modelNumber: "4DHP2S24M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhps209s-1p",
      modelNumber: "4DHPS209S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s09s-1l",
      modelNumber: "4DHV2S09S-1L",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s09s-1p",
      modelNumber: "4DHV2S09S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s12s-1l",
      modelNumber: "4DHV2S12S-1L",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s12s-1p",
      modelNumber: "4DHV2S12S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s18s-1p",
      modelNumber: "4DHV2S18S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s24s-1p",
      modelNumber: "4DHV2S24S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s36s-1p",
      modelNumber: "4DHP2S36S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s48s-1p",
      modelNumber: "4DHP2S48S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s30m-1p",
      modelNumber: "4DHP2S30M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s36m-1p",
      modelNumber: "4DHP2S36M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s48m-1p",
      modelNumber: "4DHP2S48M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s30s-1p",
      modelNumber: "4DHP2S30S-1P",
      brandId: "allied",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "allied-bce5v36m",
      modelNumber: "BCE5V36M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5v42m",
      modelNumber: "BCE5V42M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ed1p30-36b-h4txv02",
      modelNumber: "ED1P30/36B+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ed1p30-36c-h4txv02",
      modelNumber: "ED1P30/36C+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5c18m-1p-h4txv01",
      modelNumber: "BCE5C18M*1P+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5c18m-4x",
      modelNumber: "BCE5C18M*4X",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5c24m-1p-h4txv01",
      modelNumber: "BCE5C24M*1P+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5c24m-4x",
      modelNumber: "BCE5C24M*4X",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5c36m-1p-h4txv02",
      modelNumber: "BCE5C36M*1P+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5c36m-4x",
      modelNumber: "BCE5C36M*4X",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5e24m",
      modelNumber: "BCE5E24M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5e30m",
      modelNumber: "BCE5E30M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5e36m",
      modelNumber: "BCE5E36M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5e42m",
      modelNumber: "BCE5E42M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5v18m",
      modelNumber: "BCE5V18M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5v24m",
      modelNumber: "BCE5V24M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5v30m",
      modelNumber: "BCE5V30M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce7e18m",
      modelNumber: "BCE7E18M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce7e24m",
      modelNumber: "BCE7E24M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce7e30m",
      modelNumber: "BCE7E30M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce7e36m",
      modelNumber: "BCE7E36M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce7e42m",
      modelNumber: "BCE7E42M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-e-1p23a-h4txv01",
      modelNumber: "E*1P23A+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-e-1p23b-h4txv01",
      modelNumber: "E*1P23B+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-e-1p36a-h4txv02",
      modelNumber: "E*1P36A+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-e-1p36b-h4txv02",
      modelNumber: "E*1P36B+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-e-1p36c-h4txv02",
      modelNumber: "E*1P36C+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p24a-h4txv01",
      modelNumber: "EA(C,U)1P24A+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p24b-h4txv01",
      modelNumber: "EA(C,U)1P24B+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p30a-h4txv01",
      modelNumber: "EA(C,U)1P30A+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p30b-h4txv01",
      modelNumber: "EA(C,U)1P30B+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p36a-h4txv02",
      modelNumber: "EA(C,U)1P36A+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p36b-h4txv02",
      modelNumber: "EA(C,U)1P36B+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p48b-h4txv02",
      modelNumber: "EA(C,U)1P48B+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p48c-h4txv02",
      modelNumber: "EA(C,U)1P48C+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x24a",
      modelNumber: "EAC4X24A",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x24b",
      modelNumber: "EAC4X24B",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x30a",
      modelNumber: "EAC4X30A",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x30b",
      modelNumber: "EAC4X30B",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x36a",
      modelNumber: "EAC4X36A",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x36b",
      modelNumber: "EAC4X36B",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x48b",
      modelNumber: "EAC4X48B",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x48c",
      modelNumber: "EAC4X48C",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eah1p30a-h4txv01",
      modelNumber: "EAH1P30A+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eah1p30b-h4txv01",
      modelNumber: "EAH1P30B+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eah1p36b-h4txv02",
      modelNumber: "EAH1P36B+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eah1p48b-h4txv02",
      modelNumber: "EAH1P48B+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ec4x23a",
      modelNumber: "EC4X23A",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ec4x23b",
      modelNumber: "EC4X23B",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ec4x36a",
      modelNumber: "EC4X36A",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ec4x36b",
      modelNumber: "EC4X36B",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ec4x36c",
      modelNumber: "EC4X36C",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ed1p24a-h4txv01",
      modelNumber: "ED1P24A+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ed1p24b-h4txv01",
      modelNumber: "ED1P24B+H4TXV01",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ed1p30-36a-h4txv02",
      modelNumber: "ED1P30/36A+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eah1p48c-tdr-txv",
      modelNumber: "EAH1P48C+TDR+TXV",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5v60m",
      modelNumber: "BCE5V60M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5c48m-1p-h4txv02",
      modelNumber: "BCE5C48M*1P+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5c48m-4x",
      modelNumber: "BCE5C48M*4X",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5e48m",
      modelNumber: "BCE5E48M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5e60m",
      modelNumber: "BCE5E60M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce5v48m",
      modelNumber: "BCE5V48M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-bce7e48m",
      modelNumber: "BCE7E48M",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-e-1p50c-h4txv03",
      modelNumber: "E*1P50C+H4TXV03",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p49c-h4txv02",
      modelNumber: "EA(C,U)1P49C+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p60c-h4txv03",
      modelNumber: "EA(C,U)1P60C+H4TXV03",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ea-c-u-1p60d-h4txv03",
      modelNumber: "EA(C,U)1P60D+H4TXV03",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x49c",
      modelNumber: "EAC4X49C",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x60c",
      modelNumber: "EAC4X60C",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eac4x60d",
      modelNumber: "EAC4X60D",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eah1p48c-h4txv02",
      modelNumber: "EAH1P48C+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eah1p51c-h4txv03",
      modelNumber: "EAH1P51C+H4TXV03",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-eah1p60d-h4txv03",
      modelNumber: "EAH1P60D+H4TXV03",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ed1p50-60c-h4txv02",
      modelNumber: "ED1P50/60C+H4TXV02",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-ed1p60d-h4txv03",
      modelNumber: "ED1P60D+H4TXV03",
      brandId: "allied",
      type: "central-ducted",
    },
    {
      id: "allied-dwm212s4-1p",
      modelNumber: "DWM212S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d22c112s4-1p",
      modelNumber: "D22C112S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd212s4-1p",
      modelNumber: "DMD212S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm212s4-1l",
      modelNumber: "DWM212S4-1L",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm212s4-l",
      modelNumber: "DWM212S4-*L",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm212s4-p",
      modelNumber: "DWM212S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd212s4-p",
      modelNumber: "DMD212S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d22c112s4-p",
      modelNumber: "D22C112S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm218s4-1p",
      modelNumber: "DWM218S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd218s4-1p",
      modelNumber: "DMD218S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-appareils-sans-conduits",
      modelNumber: "Appareils sans conduits",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-appareils-avec-conduits",
      modelNumber: "Appareils avec conduits",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-combinaison-d-appareils-avec-ou-sans-conduits",
      modelNumber: "Combinaison d'appareils avec ou sans conduits",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm218s4-p",
      modelNumber: "DWM218S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd218s4-p",
      modelNumber: "DMD218S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm224s4-1p",
      modelNumber: "DWM224S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d33c224s4-1p",
      modelNumber: "D33C224S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd224s4-1p",
      modelNumber: "DMD224S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm224s4-p",
      modelNumber: "DWM224S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd224s4-p",
      modelNumber: "DMD224S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d33c224s4-p",
      modelNumber: "D33C224S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d22c118s4-1p",
      modelNumber: "D22C118S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d22c118s4-p",
      modelNumber: "D22C118S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm209s4-1p",
      modelNumber: "DWM209S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d22c109s4-1p",
      modelNumber: "D22C109S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd209s4-1p",
      modelNumber: "DMD209S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh209s4-1l",
      modelNumber: "DWH209S4-1L",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh209s4-1p",
      modelNumber: "DWH209S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm209s4-p",
      modelNumber: "DWM209S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd209s4-p",
      modelNumber: "DMD209S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d22c109s4-p",
      modelNumber: "D22C109S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh209s4-l",
      modelNumber: "DWH209S4-*L",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh209s4-p",
      modelNumber: "DWH209S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh212s4-1l",
      modelNumber: "DWH212S4-1L",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh212s4-1p",
      modelNumber: "DWH212S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh212s4-l",
      modelNumber: "DWH212S4-*L",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh212s4-p",
      modelNumber: "DWH212S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh218s4-1p",
      modelNumber: "DWH218S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh218s4-p",
      modelNumber: "DWH218S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh224s4-1p",
      modelNumber: "DWH224S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwh224s4-p",
      modelNumber: "DWH224S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d33c236s4-1p",
      modelNumber: "D33C236S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd236s4-2p",
      modelNumber: "DMD236S4-2P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd236s4-p",
      modelNumber: "DMD236S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d33c236s4-p",
      modelNumber: "D33C236S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d33c248s4-1p",
      modelNumber: "D33C248S4-1P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd248s4-2p",
      modelNumber: "DMD248S4-2P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dmd248s4-p",
      modelNumber: "DMD248S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-d33c248s4-p",
      modelNumber: "D33C248S4-*P",
      brandId: "allied",
      type: "wall-single",
    },
    {
      id: "allied-dwm230s4-p",
      modelNumber: "DWM230S4-*P",
      brandId: "allied",
      type: "wall-single",
    }
  ],
  configurations: [
    {
      id: "allied-4hp18v-series-central-ducted-36000-cfg-1",
      slug: "allied-4hp18v-series-central-ducted-36000-cfg-1",
      modelId: "allied-4hp18v-series-central-ducted-36000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5v36m",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-36000-cfg-2",
      slug: "allied-4hp18v-series-central-ducted-36000-cfg-2",
      modelId: "allied-4hp18v-series-central-ducted-36000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5v42m",
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-36000-cfg-3",
      slug: "allied-4hp18v-series-central-ducted-36000-cfg-3",
      modelId: "allied-4hp18v-series-central-ducted-36000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-36000-cfg-4",
      slug: "allied-4hp18v-series-central-ducted-36000-cfg-4",
      modelId: "allied-4hp18v-series-central-ducted-36000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36c-h4txv02",
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.1,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-20000-cfg-1",
      slug: "allied-4hp18v-series-central-ducted-20000-cfg-1",
      modelId: "allied-4hp18v-series-central-ducted-20000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5c18m-1p-h4txv01",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-20000-cfg-2",
      slug: "allied-4hp18v-series-central-ducted-20000-cfg-2",
      modelId: "allied-4hp18v-series-central-ducted-20000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5c18m-4x",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-1",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-1",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5c24m-1p-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-2",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-2",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5c24m-4x",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-3",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-3",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5c36m-1p-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-4",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-4",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5c36m-4x",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-5",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-5",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5e24m",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-6",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-6",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5e30m",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-7",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-7",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5e36m",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-8",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-8",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5e42m",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-9",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-9",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5v18m",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-10",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-10",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5v24m",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-11",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-11",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce5v30m",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-12",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-12",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce7e18m",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-13",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-13",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce7e24m",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-14",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-14",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce7e30m",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-15",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-15",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce7e36m",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-16",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-16",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-bce7e42m",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-17",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-17",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-18",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-18",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-19",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-19",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-20",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-20",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-21",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-21",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-22",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-22",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-23",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-23",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-24",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-24",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-25",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-25",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-26",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-26",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-27",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-27",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-28",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-28",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-29",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-29",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-30",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-30",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-31",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-31",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-32",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-32",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-33",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-33",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-34",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-34",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-35",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-35",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-36",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-36",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: 16.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-37",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-37",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p23b-h4txv01",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-38",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-38",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-39",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-39",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-40",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-40",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-41",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-41",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-42",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-42",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-43",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-43",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-44",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-44",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-45",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-45",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-46",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-46",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-47",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-47",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-48",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-48",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-49",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-49",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-50",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-50",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-51",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-51",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-52",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-52",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-53",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-53",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-54",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-54",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-55",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-55",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-56",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-56",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-57",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-57",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-58",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-58",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-59",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-59",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-60",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-60",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-61",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-61",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-62",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-62",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-63",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-63",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-64",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-64",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-65",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-65",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-66",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-66",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-67",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-67",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-e-1p36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-68",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-68",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-69",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-69",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-70",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-70",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-71",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-71",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-72",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-72",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-73",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-73",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-74",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-74",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-75",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-75",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-76",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-76",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-77",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-77",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-78",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-78",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-79",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-79",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-80",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-80",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-81",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-81",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-82",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-82",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-83",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-83",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-84",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-84",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-85",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-85",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p24b-h4txv01",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-86",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-86",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-87",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-87",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-88",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-88",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-89",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-89",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-90",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-90",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-91",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-91",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-92",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-92",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-93",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-93",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-94",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-94",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-95",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-95",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-96",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-96",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-97",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-97",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-98",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-98",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-99",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-99",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-100",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-100",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-101",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-101",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-102",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-102",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-103",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-103",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-104",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-104",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-105",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-105",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-106",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-106",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-107",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-107",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-108",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-108",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-109",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-109",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-110",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-110",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-111",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-111",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-112",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-112",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-113",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-113",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-114",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-114",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-115",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-115",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-116",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-116",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-117",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-117",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-118",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-118",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-119",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-119",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-120",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-120",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-121",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-121",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-122",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-122",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-123",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-123",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-124",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-124",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-125",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-125",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-126",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-126",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-127",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-127",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-128",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-128",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-129",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-129",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-130",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-130",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-131",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-131",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-132",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-132",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-133",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-133",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-134",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-134",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-135",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-135",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-136",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-136",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-137",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-137",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-138",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-138",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-139",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-139",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-140",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-140",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-141",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-141",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-142",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-142",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-143",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-143",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-144",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-144",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-145",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-145",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-146",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-146",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-147",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-147",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-148",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-148",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-149",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-149",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-150",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-150",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-151",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-151",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-152",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-152",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-153",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-153",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-154",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-154",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-155",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-155",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-156",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-156",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ea-c-u-1p48c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-157",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-157",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-158",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-158",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-159",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-159",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-160",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-160",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-161",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-161",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-162",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-162",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-163",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-163",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-164",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-164",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-165",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-165",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-166",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-166",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-167",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-167",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-168",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-168",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-169",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-169",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-170",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-170",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-171",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-171",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-172",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-172",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-173",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-173",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-174",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-174",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x24b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-175",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-175",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-176",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-176",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-177",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-177",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-178",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-178",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-179",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-179",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-180",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-180",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-181",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-181",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-182",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-182",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-183",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-183",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-184",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-184",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-185",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-185",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-186",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-186",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-187",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-187",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-188",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-188",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-189",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-189",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-190",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-190",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-191",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-191",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-192",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-192",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-193",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-193",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-194",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-194",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-195",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-195",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-196",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-196",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x30b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-197",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-197",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-198",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-198",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-199",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-199",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-200",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-200",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-201",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-201",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-202",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-202",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-203",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-203",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-204",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-204",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-205",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-205",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-206",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-206",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-207",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-207",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-208",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-208",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-209",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-209",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-210",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-210",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-211",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-211",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-212",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-212",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-213",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-213",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-214",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-214",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-215",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-215",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-216",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-216",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-217",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-217",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-218",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-218",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-219",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-219",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-220",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-220",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-221",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-221",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-222",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-222",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-223",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-223",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-224",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-224",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-225",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-225",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-226",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-226",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-227",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-227",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-228",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-228",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-229",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-229",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-230",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-230",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-231",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-231",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-232",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-232",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-233",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-233",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-234",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-234",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-235",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-235",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-236",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-236",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-237",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-237",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-238",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-238",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-239",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-239",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-240",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-240",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-241",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-241",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-242",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-242",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-243",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-243",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-244",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-244",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-245",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-245",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eac4x48c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-246",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-246",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-247",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-247",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-248",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-248",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-249",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-249",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-250",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-250",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-251",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-251",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-252",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-252",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-253",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-253",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-254",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-254",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-255",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-255",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-256",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-256",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-257",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-257",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-258",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-258",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-259",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-259",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-260",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-260",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-261",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-261",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-262",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-262",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-263",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-263",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-264",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-264",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-265",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-265",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-266",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-266",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-267",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-267",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p30b-h4txv01",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-268",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-268",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-269",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-269",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-270",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-270",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-271",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-271",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-272",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-272",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-273",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-273",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-274",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-274",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-275",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-275",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-276",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-276",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-277",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-277",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-278",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-278",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-279",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-279",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-280",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-280",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-281",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-281",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-282",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-282",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-283",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-283",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-284",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-284",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-285",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-285",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-286",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-286",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-287",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-287",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-288",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-288",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-289",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-289",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-290",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-290",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-291",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-291",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-292",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-292",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-293",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-293",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-294",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-294",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-295",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-295",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-296",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-296",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-297",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-297",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-298",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-298",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-299",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-299",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-300",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-300",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-301",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-301",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-302",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-302",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-303",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-303",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-304",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-304",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-305",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-305",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-306",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-306",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-307",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-307",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-308",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-308",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-309",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-309",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-310",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-310",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-311",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-311",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-312",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-312",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-313",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-313",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-314",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-314",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-315",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-315",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-316",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-316",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x23b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-317",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-317",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-318",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-318",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-319",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-319",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-320",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-320",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-321",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-321",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-322",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-322",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36a",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-323",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-323",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-324",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-324",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-325",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-325",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-326",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-326",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-327",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-327",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-328",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-328",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-329",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-329",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-330",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-330",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-331",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-331",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-332",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-332",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-333",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-333",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-334",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-334",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-335",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-335",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-336",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-336",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-337",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-337",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36b",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-338",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-338",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-339",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-339",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-340",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-340",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-341",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-341",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-342",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-342",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-343",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-343",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-344",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-344",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-345",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-345",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-346",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-346",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ec4x36c",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-347",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-347",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p24a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-348",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-348",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p24a-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-349",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-349",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-350",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-350",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-351",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-351",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-352",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-352",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p24b-h4txv01",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-353",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-353",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p24b-h4txv01",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-354",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-354",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p24b-h4txv01",
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-355",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-355",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p24b-h4txv01",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-356",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-356",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-357",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-357",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-358",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-358",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36a-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-359",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-359",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-360",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-360",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-361",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-361",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-362",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-362",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-363",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-363",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-364",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-364",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-365",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-365",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-366",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-366",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-367",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-367",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-368",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-368",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36b-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-369",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-369",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-370",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-370",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-ed1p30-36c-h4txv02",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-371",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-371",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-372",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-372",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-373",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-373",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-374",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-374",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-375",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-375",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-376",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-376",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-377",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-377",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-378",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-378",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-379",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-379",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-24000-cfg-380",
      slug: "allied-4hp18v-series-central-ducted-24000-cfg-380",
      modelId: "allied-4hp18v-series-central-ducted-24000",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: "allied-eah1p48c-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-1",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-1",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-bce5v60m",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-2",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-2",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-bce5c48m-1p-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-3",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-3",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-bce5c48m-4x",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-4",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-4",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-bce5e48m",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-5",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-5",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-bce5e60m",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-6",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-6",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-bce5v48m",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-7",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-7",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-bce7e48m",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-8",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-8",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-9",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-9",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-10",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-10",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-11",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-11",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-12",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-12",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-13",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-13",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-14",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-14",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-15",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-15",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-16",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-16",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-17",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-17",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-18",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-18",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-19",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-19",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-20",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-20",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-e-1p50c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-21",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-21",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p49c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-22",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-22",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p49c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-23",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-23",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p49c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-24",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-24",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p49c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-25",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-25",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p49c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-26",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-26",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p49c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-27",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-27",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p49c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-28",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-28",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p49c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-29",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-29",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-30",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-30",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-31",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-31",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-32",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-32",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-33",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-33",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-34",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-34",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-35",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-35",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-36",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-36",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-37",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-37",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-38",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-38",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-39",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-39",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-40",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-40",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-41",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-41",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-42",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-42",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60d-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-43",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-43",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60d-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-44",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-44",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ea-c-u-1p60d-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-45",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-45",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x49c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-46",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-46",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x49c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-47",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-47",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x49c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-48",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-48",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x49c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-49",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-49",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x49c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-50",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-50",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x49c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-51",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-51",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x49c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-52",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-52",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x49c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-53",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-53",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-54",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-54",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-55",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-55",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-56",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-56",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-57",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-57",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-58",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-58",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-59",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-59",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-60",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-60",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-61",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-61",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-62",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-62",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-63",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-63",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-64",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-64",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-65",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-65",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60c",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-66",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-66",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60d",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-67",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-67",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60d",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-68",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-68",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eac4x60d",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-69",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-69",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p48c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-70",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-70",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p48c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-71",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-71",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p48c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-72",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-72",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p48c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-73",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-73",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p48c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-74",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-74",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p48c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-75",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-75",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p48c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-76",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-76",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p48c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-77",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-77",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p51c-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-78",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-78",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-eah1p60d-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-79",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-79",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p50-60c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-80",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-80",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p50-60c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-81",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-81",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p50-60c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-82",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-82",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p50-60c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-83",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-83",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p50-60c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-84",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-84",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p50-60c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-85",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-85",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p50-60c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-86",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-86",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p50-60c-h4txv02",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-87",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-87",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p60d-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-88",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-88",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p60d-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-89",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-89",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p60d-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-90",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-90",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p60d-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-48000-cfg-91",
      slug: "allied-4hp18v-series-central-ducted-48000-cfg-91",
      modelId: "allied-4hp18v-series-central-ducted-48000",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: "allied-ed1p60d-h4txv03",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-12000-cfg-1",
      slug: "allied-4dh-series-wall-single-12000-cfg-1",
      modelId: "allied-4dh-series-wall-single-12000",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: "allied-dwm212s4-1p",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-12000-cfg-2",
      slug: "allied-4dh-series-wall-single-12000-cfg-2",
      modelId: "allied-4dh-series-wall-single-12000",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: "allied-d22c112s4-1p",
      coolingCapacityMinBtu: 11800,
      coolingCapacityMaxBtu: 11800,
      seer2: 22.7,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-12000-cfg-3",
      slug: "allied-4dh-series-wall-single-12000-cfg-3",
      modelId: "allied-4dh-series-wall-single-12000",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: "allied-dmd212s4-1p",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 18.8,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-12000-cfg-4",
      slug: "allied-4dh-series-wall-single-12000-cfg-4",
      modelId: "allied-4dh-series-wall-single-12000",
      outdoorUnitId: "allied-4dhp2s12s-1l",
      indoorUnitId: "allied-dwm212s4-1l",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.4,
      hspf2: 7.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-12000-cfg-5",
      slug: "allied-4dh-series-wall-single-12000-cfg-5",
      modelId: "allied-4dh-series-wall-single-12000",
      outdoorUnitId: "allied-4dhp2s12s-1l",
      indoorUnitId: "allied-dwm212s4-l",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-12000-cfg-6",
      slug: "allied-4dh-series-wall-single-12000-cfg-6",
      modelId: "allied-4dh-series-wall-single-12000",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: "allied-dwm212s4-p",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-12000-cfg-7",
      slug: "allied-4dh-series-wall-single-12000-cfg-7",
      modelId: "allied-4dh-series-wall-single-12000",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: "allied-dmd212s4-p",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 18.8,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-12000-cfg-8",
      slug: "allied-4dh-series-wall-single-12000-cfg-8",
      modelId: "allied-4dh-series-wall-single-12000",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: "allied-d22c112s4-p",
      coolingCapacityMinBtu: 11800,
      coolingCapacityMaxBtu: 11800,
      seer2: 22.7,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-18000-cfg-1",
      slug: "allied-4dh-series-wall-single-18000-cfg-1",
      modelId: "allied-4dh-series-wall-single-18000",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: "allied-dwm218s4-1p",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-18000-cfg-2",
      slug: "allied-4dh-series-wall-single-18000-cfg-2",
      modelId: "allied-4dh-series-wall-single-18000",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: "allied-dmd218s4-1p",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-18000-cfg-3",
      slug: "allied-4dh-series-wall-single-18000-cfg-3",
      modelId: "allied-4dh-series-wall-single-18000",
      outdoorUnitId: "allied-4dhp2s18m-1p",
      indoorUnitId: "allied-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.9,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-18000-cfg-4",
      slug: "allied-4dh-series-wall-single-18000-cfg-4",
      modelId: "allied-4dh-series-wall-single-18000",
      outdoorUnitId: "allied-4dhp2s18m-1p",
      indoorUnitId: "allied-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-18000-cfg-5",
      slug: "allied-4dh-series-wall-single-18000-cfg-5",
      modelId: "allied-4dh-series-wall-single-18000",
      outdoorUnitId: "allied-4dhp2s18m-1p",
      indoorUnitId: "allied-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.95,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-18000-cfg-6",
      slug: "allied-4dh-series-wall-single-18000-cfg-6",
      modelId: "allied-4dh-series-wall-single-18000",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: "allied-dwm218s4-p",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-18000-cfg-7",
      slug: "allied-4dh-series-wall-single-18000-cfg-7",
      modelId: "allied-4dh-series-wall-single-18000",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: "allied-dmd218s4-p",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-24000-cfg-1",
      slug: "allied-4dh-series-wall-single-24000-cfg-1",
      modelId: "allied-4dh-series-wall-single-24000",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: "allied-dwm224s4-1p",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-24000-cfg-2",
      slug: "allied-4dh-series-wall-single-24000-cfg-2",
      modelId: "allied-4dh-series-wall-single-24000",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: "allied-d33c224s4-1p",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-24000-cfg-3",
      slug: "allied-4dh-series-wall-single-24000-cfg-3",
      modelId: "allied-4dh-series-wall-single-24000",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: "allied-dmd224s4-1p",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-24000-cfg-4",
      slug: "allied-4dh-series-wall-single-24000-cfg-4",
      modelId: "allied-4dh-series-wall-single-24000",
      outdoorUnitId: "allied-4dhp2s24m-1p",
      indoorUnitId: "allied-appareils-sans-conduits",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-24000-cfg-5",
      slug: "allied-4dh-series-wall-single-24000-cfg-5",
      modelId: "allied-4dh-series-wall-single-24000",
      outdoorUnitId: "allied-4dhp2s24m-1p",
      indoorUnitId: "allied-appareils-avec-conduits",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.3,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-24000-cfg-6",
      slug: "allied-4dh-series-wall-single-24000-cfg-6",
      modelId: "allied-4dh-series-wall-single-24000",
      outdoorUnitId: "allied-4dhp2s24m-1p",
      indoorUnitId: "allied-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.95,
      hspf2: 9.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-24000-cfg-7",
      slug: "allied-4dh-series-wall-single-24000-cfg-7",
      modelId: "allied-4dh-series-wall-single-24000",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: "allied-dwm224s4-p",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-24000-cfg-8",
      slug: "allied-4dh-series-wall-single-24000-cfg-8",
      modelId: "allied-4dh-series-wall-single-24000",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: "allied-dmd224s4-p",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-24000-cfg-9",
      slug: "allied-4dh-series-wall-single-24000-cfg-9",
      modelId: "allied-4dh-series-wall-single-24000",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: "allied-d33c224s4-p",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-15000-cfg-1",
      slug: "allied-4dh-series-wall-single-15000-cfg-1",
      modelId: "allied-4dh-series-wall-single-15000",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: "allied-d22c118s4-1p",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.4,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-15000-cfg-2",
      slug: "allied-4dh-series-wall-single-15000-cfg-2",
      modelId: "allied-4dh-series-wall-single-15000",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: "allied-d22c118s4-p",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.4,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-1",
      slug: "allied-4dh-series-wall-single-9000-cfg-1",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: "allied-dwm209s4-1p",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.5,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-2",
      slug: "allied-4dh-series-wall-single-9000-cfg-2",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: "allied-d22c109s4-1p",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-3",
      slug: "allied-4dh-series-wall-single-9000-cfg-3",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: "allied-dmd209s4-1p",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-4",
      slug: "allied-4dh-series-wall-single-9000-cfg-4",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhv2s09s-1l",
      indoorUnitId: "allied-dwh209s4-1l",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-5",
      slug: "allied-4dh-series-wall-single-9000-cfg-5",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhv2s09s-1p",
      indoorUnitId: "allied-dwh209s4-1p",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-6",
      slug: "allied-4dh-series-wall-single-9000-cfg-6",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: "allied-dwm209s4-p",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.5,
      hspf2: 11.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-7",
      slug: "allied-4dh-series-wall-single-9000-cfg-7",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: "allied-dmd209s4-p",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-8",
      slug: "allied-4dh-series-wall-single-9000-cfg-8",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: "allied-d22c109s4-p",
      coolingCapacityMinBtu: 8900,
      coolingCapacityMaxBtu: 8900,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-9",
      slug: "allied-4dh-series-wall-single-9000-cfg-9",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhv2s09s-1l",
      indoorUnitId: "allied-dwh209s4-l",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-9000-cfg-10",
      slug: "allied-4dh-series-wall-single-9000-cfg-10",
      modelId: "allied-4dh-series-wall-single-9000",
      outdoorUnitId: "allied-4dhv2s09s-1p",
      indoorUnitId: "allied-dwh209s4-p",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-12000-cfg-1",
      slug: "allied-standard-wall-single-12000-cfg-1",
      modelId: "allied-standard-wall-single-12000",
      outdoorUnitId: "allied-4dhv2s12s-1l",
      indoorUnitId: "allied-dwh212s4-1l",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-12000-cfg-2",
      slug: "allied-standard-wall-single-12000-cfg-2",
      modelId: "allied-standard-wall-single-12000",
      outdoorUnitId: "allied-4dhv2s12s-1p",
      indoorUnitId: "allied-dwh212s4-1p",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-12000-cfg-3",
      slug: "allied-standard-wall-single-12000-cfg-3",
      modelId: "allied-standard-wall-single-12000",
      outdoorUnitId: "allied-4dhv2s12s-1l",
      indoorUnitId: "allied-dwh212s4-l",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-12000-cfg-4",
      slug: "allied-standard-wall-single-12000-cfg-4",
      modelId: "allied-standard-wall-single-12000",
      outdoorUnitId: "allied-4dhv2s12s-1p",
      indoorUnitId: "allied-dwh212s4-p",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-18000-cfg-1",
      slug: "allied-standard-wall-single-18000-cfg-1",
      modelId: "allied-standard-wall-single-18000",
      outdoorUnitId: "allied-4dhv2s18s-1p",
      indoorUnitId: "allied-dwh218s4-1p",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-18000-cfg-2",
      slug: "allied-standard-wall-single-18000-cfg-2",
      modelId: "allied-standard-wall-single-18000",
      outdoorUnitId: "allied-4dhv2s18s-1p",
      indoorUnitId: "allied-dwh218s4-p",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-24000-cfg-1",
      slug: "allied-standard-wall-single-24000-cfg-1",
      modelId: "allied-standard-wall-single-24000",
      outdoorUnitId: "allied-4dhv2s24s-1p",
      indoorUnitId: "allied-dwh224s4-1p",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-24000-cfg-2",
      slug: "allied-standard-wall-single-24000-cfg-2",
      modelId: "allied-standard-wall-single-24000",
      outdoorUnitId: "allied-4dhv2s24s-1p",
      indoorUnitId: "allied-dwh224s4-p",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-36000-cfg-1",
      slug: "allied-standard-wall-single-36000-cfg-1",
      modelId: "allied-standard-wall-single-36000",
      outdoorUnitId: "allied-4dhp2s36s-1p",
      indoorUnitId: "allied-d33c236s4-1p",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-36000-cfg-2",
      slug: "allied-standard-wall-single-36000-cfg-2",
      modelId: "allied-standard-wall-single-36000",
      outdoorUnitId: "allied-4dhp2s36s-1p",
      indoorUnitId: "allied-dmd236s4-2p",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-36000-cfg-3",
      slug: "allied-standard-wall-single-36000-cfg-3",
      modelId: "allied-standard-wall-single-36000",
      outdoorUnitId: "allied-4dhp2s36s-1p",
      indoorUnitId: "allied-dmd236s4-p",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-36000-cfg-4",
      slug: "allied-standard-wall-single-36000-cfg-4",
      modelId: "allied-standard-wall-single-36000",
      outdoorUnitId: "allied-4dhp2s36s-1p",
      indoorUnitId: "allied-d33c236s4-p",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-48000-cfg-1",
      slug: "allied-standard-wall-single-48000-cfg-1",
      modelId: "allied-standard-wall-single-48000",
      outdoorUnitId: "allied-4dhp2s48s-1p",
      indoorUnitId: "allied-d33c248s4-1p",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-48000-cfg-2",
      slug: "allied-standard-wall-single-48000-cfg-2",
      modelId: "allied-standard-wall-single-48000",
      outdoorUnitId: "allied-4dhp2s48s-1p",
      indoorUnitId: "allied-dmd248s4-2p",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-48000-cfg-3",
      slug: "allied-standard-wall-single-48000-cfg-3",
      modelId: "allied-standard-wall-single-48000",
      outdoorUnitId: "allied-4dhp2s48s-1p",
      indoorUnitId: "allied-dmd248s4-p",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-48000-cfg-4",
      slug: "allied-standard-wall-single-48000-cfg-4",
      modelId: "allied-standard-wall-single-48000",
      outdoorUnitId: "allied-4dhp2s48s-1p",
      indoorUnitId: "allied-d33c248s4-p",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-30000-cfg-1",
      slug: "allied-4dh-series-wall-single-30000-cfg-1",
      modelId: "allied-4dh-series-wall-single-30000",
      outdoorUnitId: "allied-4dhp2s30m-1p",
      indoorUnitId: "allied-appareils-sans-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 24.6,
      hspf2: 9.3,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-30000-cfg-2",
      slug: "allied-4dh-series-wall-single-30000-cfg-2",
      modelId: "allied-4dh-series-wall-single-30000",
      outdoorUnitId: "allied-4dhp2s30m-1p",
      indoorUnitId: "allied-appareils-avec-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20.7,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-30000-cfg-3",
      slug: "allied-4dh-series-wall-single-30000-cfg-3",
      modelId: "allied-4dh-series-wall-single-30000",
      outdoorUnitId: "allied-4dhp2s30m-1p",
      indoorUnitId: "allied-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.65,
      hspf2: 9.25,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-36000-cfg-1",
      slug: "allied-4dh-series-wall-single-36000-cfg-1",
      modelId: "allied-4dh-series-wall-single-36000",
      outdoorUnitId: "allied-4dhp2s36m-1p",
      indoorUnitId: "allied-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.9,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-48000-cfg-1",
      slug: "allied-4dh-series-wall-single-48000-cfg-1",
      modelId: "allied-4dh-series-wall-single-48000",
      outdoorUnitId: "allied-4dhp2s48m-1p",
      indoorUnitId: "allied-appareils-sans-conduits",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.8,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-30000-cfg-1",
      slug: "allied-standard-wall-single-30000-cfg-1",
      modelId: "allied-standard-wall-single-30000",
      outdoorUnitId: "allied-4dhp2s30s-1p",
      indoorUnitId: "allied-dwm230s4-p",
      coolingCapacityMinBtu: 29600,
      coolingCapacityMaxBtu: 29600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "allied-4hp18v-series-central-ducted-36000-cfg-1",
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
      configurationId: "allied-4hp18v-series-central-ducted-36000-cfg-2",
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
      configurationId: "allied-4hp18v-series-central-ducted-36000-cfg-3",
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
      configurationId: "allied-4hp18v-series-central-ducted-36000-cfg-4",
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
      configurationId: "allied-4hp18v-series-central-ducted-20000-cfg-1",
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
      configurationId: "allied-4hp18v-series-central-ducted-20000-cfg-2",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-1",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-2",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-3",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-4",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-5",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-6",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-7",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-8",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-9",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-10",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-11",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-12",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-13",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-14",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-15",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-16",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-17",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-18",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-19",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-20",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-21",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-22",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-23",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-24",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-25",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-26",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-27",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-28",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-29",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-30",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-31",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-32",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-33",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-34",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-35",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-36",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-37",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-38",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-39",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-40",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-41",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-42",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-43",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-44",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-45",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-46",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-47",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-48",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-49",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-50",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-51",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-52",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-53",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-54",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-55",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-56",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-57",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-58",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-59",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-60",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-61",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-62",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-63",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-64",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-65",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-66",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-67",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-68",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-69",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-70",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-71",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-72",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-73",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-74",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-75",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-76",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-77",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-78",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-79",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-80",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-81",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-82",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-83",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-84",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-85",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-86",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-87",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-88",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-89",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-90",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-91",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-92",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-93",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-94",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-95",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-96",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-97",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-98",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-99",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-100",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-101",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-102",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-103",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-104",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-105",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-106",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-107",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-108",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-109",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-110",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-111",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-112",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-113",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-114",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-115",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-116",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-117",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-118",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-119",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-120",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-121",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-122",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-123",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-124",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-125",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-126",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-127",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-128",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-129",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-130",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-131",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-132",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-133",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-134",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-135",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-136",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-137",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-138",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-139",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-140",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-141",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-142",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-143",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-144",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-145",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-146",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-147",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-148",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-149",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-150",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-151",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-152",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-153",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-154",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-155",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-156",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-157",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-158",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-159",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-160",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-161",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-162",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-163",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-164",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-165",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-166",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-167",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-168",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-169",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-170",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-171",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-172",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-173",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-174",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-175",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-176",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-177",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-178",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-179",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-180",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-181",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-182",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-183",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-184",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-185",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-186",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-187",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-188",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-189",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-190",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-191",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-192",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-193",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-194",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-195",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-196",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-197",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-198",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-199",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-200",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-201",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-202",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-203",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-204",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-205",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-206",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-207",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-208",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-209",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-210",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-211",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-212",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-213",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-214",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-215",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-216",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-217",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-218",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-219",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-220",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-221",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-222",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-223",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-224",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-225",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-226",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-227",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-228",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-229",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-230",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-231",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-232",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-233",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-234",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-235",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-236",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-237",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-238",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-239",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-240",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-241",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-242",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-243",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-244",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-245",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-246",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-247",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-248",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-249",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-250",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-251",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-252",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-253",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-254",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-255",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-256",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-257",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-258",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-259",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-260",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-261",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-262",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-263",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-264",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-265",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-266",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-267",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-268",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-269",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-270",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-271",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-272",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-273",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-274",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-275",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-276",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-277",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-278",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-279",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-280",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-281",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-282",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-283",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-284",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-285",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-286",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-287",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-288",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-289",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-290",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-291",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-292",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-293",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-294",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-295",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-296",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-297",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-298",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-299",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-300",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-301",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-302",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-303",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-304",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-305",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-306",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-307",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-308",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-309",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-310",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-311",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-312",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-313",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-314",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-315",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-316",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-317",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-318",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-319",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-320",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-321",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-322",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-323",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-324",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-325",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-326",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-327",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-328",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-329",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-330",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-331",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-332",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-333",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-334",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-335",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-336",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-337",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-338",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-339",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-340",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-341",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-342",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-343",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-344",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-345",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-346",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-347",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-348",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-349",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-350",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-351",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-352",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-353",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-354",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-355",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-356",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-357",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-358",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-359",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-360",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-361",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-362",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-363",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-364",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-365",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-366",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-367",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-368",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-369",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-370",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-371",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-372",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-373",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-374",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-375",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-376",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-377",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-378",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-379",
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
      configurationId: "allied-4hp18v-series-central-ducted-24000-cfg-380",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-1",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-2",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-3",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-4",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-5",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-6",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-7",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-8",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-9",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-10",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-11",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-12",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-13",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-14",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-15",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-16",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-17",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-18",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-19",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-20",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-21",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-22",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-23",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-24",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-25",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-26",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-27",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-28",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-29",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-30",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-31",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-32",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-33",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-34",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-35",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-36",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-37",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-38",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-39",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-40",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-41",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-42",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-43",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-44",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-45",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-46",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-47",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-48",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-49",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-50",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-51",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-52",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-53",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-54",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-55",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-56",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-57",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-58",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-59",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-60",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-61",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-62",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-63",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-64",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-65",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-66",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-67",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-68",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-69",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-70",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-71",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-72",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-73",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-74",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-75",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-76",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-77",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-78",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-79",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-80",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-81",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-82",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-83",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-84",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-85",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-86",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-87",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-88",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-89",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-90",
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
      configurationId: "allied-4hp18v-series-central-ducted-48000-cfg-91",
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
      configurationId: "allied-4dh-series-wall-single-12000-cfg-1",
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
      configurationId: "allied-4dh-series-wall-single-12000-cfg-2",
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
      configurationId: "allied-4dh-series-wall-single-12000-cfg-3",
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
      configurationId: "allied-4dh-series-wall-single-12000-cfg-4",
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
      configurationId: "allied-4dh-series-wall-single-12000-cfg-5",
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
      configurationId: "allied-4dh-series-wall-single-12000-cfg-6",
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
      configurationId: "allied-4dh-series-wall-single-12000-cfg-7",
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
      configurationId: "allied-4dh-series-wall-single-12000-cfg-8",
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
      configurationId: "allied-4dh-series-wall-single-18000-cfg-1",
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
      configurationId: "allied-4dh-series-wall-single-18000-cfg-2",
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
      configurationId: "allied-4dh-series-wall-single-18000-cfg-3",
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
      configurationId: "allied-4dh-series-wall-single-18000-cfg-4",
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
      configurationId: "allied-4dh-series-wall-single-18000-cfg-5",
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
      configurationId: "allied-4dh-series-wall-single-18000-cfg-6",
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
      configurationId: "allied-4dh-series-wall-single-18000-cfg-7",
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
      configurationId: "allied-4dh-series-wall-single-24000-cfg-1",
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
      configurationId: "allied-4dh-series-wall-single-24000-cfg-2",
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
      configurationId: "allied-4dh-series-wall-single-24000-cfg-3",
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
      configurationId: "allied-4dh-series-wall-single-24000-cfg-4",
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
      configurationId: "allied-4dh-series-wall-single-24000-cfg-5",
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
      configurationId: "allied-4dh-series-wall-single-24000-cfg-6",
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
      configurationId: "allied-4dh-series-wall-single-24000-cfg-7",
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
      configurationId: "allied-4dh-series-wall-single-24000-cfg-8",
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
      configurationId: "allied-4dh-series-wall-single-24000-cfg-9",
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
      configurationId: "allied-4dh-series-wall-single-15000-cfg-1",
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
      configurationId: "allied-4dh-series-wall-single-15000-cfg-2",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-1",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-2",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-3",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-4",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-5",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-6",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-7",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-8",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-9",
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
      configurationId: "allied-4dh-series-wall-single-9000-cfg-10",
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
      configurationId: "allied-standard-wall-single-12000-cfg-1",
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
      configurationId: "allied-standard-wall-single-12000-cfg-2",
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
      configurationId: "allied-standard-wall-single-12000-cfg-3",
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
      configurationId: "allied-standard-wall-single-12000-cfg-4",
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
      configurationId: "allied-standard-wall-single-18000-cfg-1",
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
      configurationId: "allied-standard-wall-single-18000-cfg-2",
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
      configurationId: "allied-standard-wall-single-24000-cfg-1",
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
      configurationId: "allied-standard-wall-single-24000-cfg-2",
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
      configurationId: "allied-standard-wall-single-36000-cfg-1",
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
      configurationId: "allied-standard-wall-single-36000-cfg-2",
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
      configurationId: "allied-standard-wall-single-36000-cfg-3",
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
      configurationId: "allied-standard-wall-single-36000-cfg-4",
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
      configurationId: "allied-standard-wall-single-48000-cfg-1",
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
      configurationId: "allied-standard-wall-single-48000-cfg-2",
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
      configurationId: "allied-standard-wall-single-48000-cfg-3",
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
      configurationId: "allied-standard-wall-single-48000-cfg-4",
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
      configurationId: "allied-4dh-series-wall-single-30000-cfg-1",
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
      configurationId: "allied-4dh-series-wall-single-30000-cfg-2",
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
      configurationId: "allied-4dh-series-wall-single-30000-cfg-3",
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
      configurationId: "allied-4dh-series-wall-single-36000-cfg-1",
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
      configurationId: "allied-4dh-series-wall-single-48000-cfg-1",
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
      configurationId: "allied-standard-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
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
