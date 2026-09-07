import type { BrandDataset } from "../../types";

export const ecoerDataset: BrandDataset = {
  brand: {
    id: "ecoer",
    slug: "ecoer",
    name: "ECOER",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ecoer-standard",
      slug: "ecoer-standard",
      name: "Standard",
      brandId: "ecoer",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-decades-extreme",
      slug: "ecoer-sdi-decades-extreme",
      name: "SDi Decades Extreme",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme",
      slug: "ecoer-esi-decades-extreme",
      name: "ESi Decades Extreme",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro",
      slug: "ecoer-tdi-pro",
      name: "TDi Pro",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti",
      slug: "ecoer-rti",
      name: "RTi",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2",
      slug: "ecoer-tdi-pro-2",
      name: "TDi Pro 2",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2",
      slug: "ecoer-sdi-extreme-2",
      name: "SDi Extreme 2",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2",
      slug: "ecoer-sdi-pro-2",
      name: "SDi Pro 2",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti-2",
      slug: "ecoer-rti-2",
      name: "RTi 2",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ecoer-standard-wall-single-36000",
      slug: "ecoer-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 24000,
      heatingCapacity5FMaxBtu: 32000,
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
      id: "ecoer-standard-wall-single-48000",
      slug: "ecoer-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 35600,
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
      id: "ecoer-standard-wall-single-24000",
      slug: "ecoer-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 22400,
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
      id: "ecoer-standard-wall-single-42000",
      slug: "ecoer-standard-wall-single-42000",
      name: "Standard 42 000 BTU",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard 42k",
      normalizedModelNumber: "standard-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 32000,
      heatingCapacity5FMaxBtu: 39000,
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
      id: "ecoer-standard-wall-single-30000",
      slug: "ecoer-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 22000,
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
      id: "ecoer-standard-central-ducted-24000",
      slug: "ecoer-standard-central-ducted-24000",
      name: "Standard 24 000 BTU",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 18600,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000",
      slug: "ecoer-standard-central-ducted-30000",
      name: "Standard 30 000 BTU",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 29000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-42000",
      slug: "ecoer-standard-central-ducted-42000",
      name: "Standard 42 000 BTU",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard 42k",
      normalizedModelNumber: "standard-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000",
      slug: "ecoer-standard-central-ducted-48000",
      name: "Standard 48 000 BTU",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 35000,
      heatingCapacity5FMaxBtu: 41000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-decades-extreme-central-ducted-36000",
      slug: "ecoer-sdi-decades-extreme-central-ducted-36000",
      name: "SDi Decades Extreme 36 000 BTU",
      seriesId: "ecoer-sdi-decades-extreme",
      brandId: "ecoer",
      modelNumber: "SDi Decades Extreme 36k",
      normalizedModelNumber: "sdi-decades-extreme-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 30400,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 16,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 1.97,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-decades-extreme-central-ducted-60000",
      slug: "ecoer-sdi-decades-extreme-central-ducted-60000",
      name: "SDi Decades Extreme 60 000 BTU",
      seriesId: "ecoer-sdi-decades-extreme",
      brandId: "ecoer",
      modelNumber: "SDi Decades Extreme 60k",
      normalizedModelNumber: "sdi-decades-extreme-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
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
      id: "ecoer-sdi-decades-extreme-central-ducted-42000",
      slug: "ecoer-sdi-decades-extreme-central-ducted-42000",
      name: "SDi Decades Extreme 42 000 BTU",
      seriesId: "ecoer-sdi-decades-extreme",
      brandId: "ecoer",
      modelNumber: "SDi Decades Extreme 42k",
      normalizedModelNumber: "sdi-decades-extreme-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000",
      name: "ESi Decades Extreme 24 000 BTU",
      seriesId: "ecoer-esi-decades-extreme",
      brandId: "ecoer",
      modelNumber: "ESi Decades Extreme 24k",
      normalizedModelNumber: "esi-decades-extreme-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 27600,
      seer2Min: 18.5,
      seer2Max: 18.5,
      hspf2Min: 8.8,
      hspf2Max: 8.8,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000",
      slug: "ecoer-tdi-pro-central-ducted-24000",
      name: "TDi Pro 24 000 BTU",
      seriesId: "ecoer-tdi-pro",
      brandId: "ecoer",
      modelNumber: "TDi Pro 24k",
      normalizedModelNumber: "tdi-pro-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 15.2,
      seer2Max: 20.5,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-36000",
      slug: "ecoer-tdi-pro-central-ducted-36000",
      name: "TDi Pro 36 000 BTU",
      seriesId: "ecoer-tdi-pro",
      brandId: "ecoer",
      modelNumber: "TDi Pro 36k",
      normalizedModelNumber: "tdi-pro-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 35200,
      heatingCapacity5FMinBtu: 28000,
      heatingCapacity5FMaxBtu: 32000,
      seer2Min: 18.2,
      seer2Max: 19.5,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000",
      slug: "ecoer-tdi-pro-central-ducted-48000",
      name: "TDi Pro 48 000 BTU",
      seriesId: "ecoer-tdi-pro",
      brandId: "ecoer",
      modelNumber: "TDi Pro 48k",
      normalizedModelNumber: "tdi-pro-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 40000,
      heatingCapacity5FMaxBtu: 43500,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.3,
      hspf2Max: 9.5,
      cop5FMin: 1.85,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000",
      slug: "ecoer-tdi-pro-central-ducted-30000",
      name: "TDi Pro 30 000 BTU",
      seriesId: "ecoer-tdi-pro",
      brandId: "ecoer",
      modelNumber: "TDi Pro 30k",
      normalizedModelNumber: "tdi-pro-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 25600,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 15.2,
      seer2Max: 18.5,
      hspf2Min: 8.3,
      hspf2Max: 9,
      cop5FMin: 1.9,
      cop5FMax: 1.95,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-42000",
      slug: "ecoer-tdi-pro-central-ducted-42000",
      name: "TDi Pro 42 000 BTU",
      seriesId: "ecoer-tdi-pro",
      brandId: "ecoer",
      modelNumber: "TDi Pro 42k",
      normalizedModelNumber: "tdi-pro-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.3,
      hspf2Max: 8.8,
      cop5FMin: 1.9,
      cop5FMax: 1.95,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti-central-ducted-60000",
      slug: "ecoer-rti-central-ducted-60000",
      name: "RTi 60 000 BTU",
      seriesId: "ecoer-rti",
      brandId: "ecoer",
      modelNumber: "RTi 60k",
      normalizedModelNumber: "rti-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 44500,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 18.5,
      seer2Max: 18.5,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-36000",
      slug: "ecoer-esi-decades-extreme-central-ducted-36000",
      name: "ESi Decades Extreme 36 000 BTU",
      seriesId: "ecoer-esi-decades-extreme",
      brandId: "ecoer",
      modelNumber: "ESi Decades Extreme 36k",
      normalizedModelNumber: "esi-decades-extreme-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      heatingCapacity5FMinBtu: 27000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 17.2,
      seer2Max: 17.2,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.95,
      cop5FMax: 1.95,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-24000",
      slug: "ecoer-tdi-pro-2-central-ducted-24000",
      name: "TDi Pro 2 24 000 BTU",
      seriesId: "ecoer-tdi-pro-2",
      brandId: "ecoer",
      modelNumber: "TDi Pro 2 24k",
      normalizedModelNumber: "tdi-pro-2-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 23200,
      heatingCapacity5FMaxBtu: 23200,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-36000",
      slug: "ecoer-tdi-pro-2-central-ducted-36000",
      name: "TDi Pro 2 36 000 BTU",
      seriesId: "ecoer-tdi-pro-2",
      brandId: "ecoer",
      modelNumber: "TDi Pro 2 36k",
      normalizedModelNumber: "tdi-pro-2-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 35200,
      heatingCapacity5FMinBtu: 28800,
      heatingCapacity5FMaxBtu: 35200,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-48000",
      slug: "ecoer-tdi-pro-2-central-ducted-48000",
      name: "TDi Pro 2 48 000 BTU",
      seriesId: "ecoer-tdi-pro-2",
      brandId: "ecoer",
      modelNumber: "TDi Pro 2 48k",
      normalizedModelNumber: "tdi-pro-2-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 42000,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-24000",
      slug: "ecoer-sdi-extreme-2-central-ducted-24000",
      name: "SDi Extreme 2 24 000 BTU",
      seriesId: "ecoer-sdi-extreme-2",
      brandId: "ecoer",
      modelNumber: "SDi Extreme 2 24k",
      normalizedModelNumber: "sdi-extreme-2-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 18.3,
      seer2Max: 18.3,
      hspf2Min: 10,
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
      id: "ecoer-sdi-extreme-2-central-ducted-48000",
      slug: "ecoer-sdi-extreme-2-central-ducted-48000",
      name: "SDi Extreme 2 48 000 BTU",
      seriesId: "ecoer-sdi-extreme-2",
      brandId: "ecoer",
      modelNumber: "SDi Extreme 2 48k",
      normalizedModelNumber: "sdi-extreme-2-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16,
      seer2Max: 16.5,
      hspf2Min: 8.5,
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
      id: "ecoer-sdi-pro-2-central-ducted-24000",
      slug: "ecoer-sdi-pro-2-central-ducted-24000",
      name: "SDi Pro 2 24 000 BTU",
      seriesId: "ecoer-sdi-pro-2",
      brandId: "ecoer",
      modelNumber: "SDi Pro 2 24k",
      normalizedModelNumber: "sdi-pro-2-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 18.1,
      seer2Max: 18.1,
      hspf2Min: 9.7,
      hspf2Max: 9.7,
      cop5FMin: 1.87,
      cop5FMax: 1.87,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted-48000",
      slug: "ecoer-sdi-pro-2-central-ducted-48000",
      name: "SDi Pro 2 48 000 BTU",
      seriesId: "ecoer-sdi-pro-2",
      brandId: "ecoer",
      modelNumber: "SDi Pro 2 48k",
      normalizedModelNumber: "sdi-pro-2-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 32400,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 16,
      hspf2Min: 8.4,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-36000",
      slug: "ecoer-sdi-extreme-2-central-ducted-36000",
      name: "SDi Extreme 2 36 000 BTU",
      seriesId: "ecoer-sdi-extreme-2",
      brandId: "ecoer",
      modelNumber: "SDi Extreme 2 36k",
      normalizedModelNumber: "sdi-extreme-2-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 29200,
      heatingCapacity5FMaxBtu: 31800,
      seer2Min: 15.8,
      seer2Max: 17.4,
      hspf2Min: 9.4,
      hspf2Max: 10.3,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted-36000",
      slug: "ecoer-sdi-pro-2-central-ducted-36000",
      name: "SDi Pro 2 36 000 BTU",
      seriesId: "ecoer-sdi-pro-2",
      brandId: "ecoer",
      modelNumber: "SDi Pro 2 36k",
      normalizedModelNumber: "sdi-pro-2-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 24800,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 16.1,
      seer2Max: 16.1,
      hspf2Min: 8.7,
      hspf2Max: 8.7,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti-2-central-ducted-60000",
      slug: "ecoer-rti-2-central-ducted-60000",
      name: "RTi 2 60 000 BTU",
      seriesId: "ecoer-rti-2",
      brandId: "ecoer",
      modelNumber: "RTi 2 60k",
      normalizedModelNumber: "rti-2-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      heatingCapacity5FMinBtu: 45000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-30000",
      slug: "ecoer-tdi-pro-2-central-ducted-30000",
      name: "TDi Pro 2 30 000 BTU",
      seriesId: "ecoer-tdi-pro-2",
      brandId: "ecoer",
      modelNumber: "TDi Pro 2 30k",
      normalizedModelNumber: "tdi-pro-2-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 25600,
      heatingCapacity5FMaxBtu: 27600,
      seer2Min: 16,
      seer2Max: 18,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ecoer-eoda18h-2436",
      modelNumber: "EODA18H-2436",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-4860",
      modelNumber: "EODA18H-4860",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-2436b",
      modelNumber: "EODA18H-2436B",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-4860b",
      modelNumber: "EODA18H-4860B",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-4860baa",
      modelNumber: "EODA18H-4860BAA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-36",
      modelNumber: "ESCA16H-36",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-60",
      modelNumber: "ESCA16H-60",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-2436baa",
      modelNumber: "EODA18H-2436BAA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda19h-2436aa",
      modelNumber: "EODA19H-2436AA*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda19h-4860aa",
      modelNumber: "EODA19H-4860AA*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-erda19h-60aa",
      modelNumber: "ERDA19H-60AA*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda19h-2436ab",
      modelNumber: "EODA19H-2436AB*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda19h-4860ab",
      modelNumber: "EODA19H-4860AB*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca17h-24aba",
      modelNumber: "ESCA17H-24ABA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca17h-48aba",
      modelNumber: "ESCA17H-48ABA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca17h-60aba",
      modelNumber: "ESCA17H-60ABA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-24bba",
      modelNumber: "ESCA16H-24BBA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-48bba",
      modelNumber: "ESCA16H-48BBA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-60bba",
      modelNumber: "ESCA16H-60BBA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca17h-36aba",
      modelNumber: "ESCA17H-36ABA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-36bba",
      modelNumber: "ESCA16H-36BBA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-erda19h-60ab",
      modelNumber: "ERDA19H-60AB*",
      brandId: "ecoer",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ecoer-standard-wall-single-36000-cfg-1",
      slug: "ecoer-standard-wall-single-36000-cfg-1",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-36000-cfg-2",
      slug: "ecoer-standard-wall-single-36000-cfg-2",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-36000-cfg-3",
      slug: "ecoer-standard-wall-single-36000-cfg-3",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-36000-cfg-4",
      slug: "ecoer-standard-wall-single-36000-cfg-4",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-36000-cfg-5",
      slug: "ecoer-standard-wall-single-36000-cfg-5",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-36000-cfg-6",
      slug: "ecoer-standard-wall-single-36000-cfg-6",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-wall-single-36000-cfg-7",
      slug: "ecoer-standard-wall-single-36000-cfg-7",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-36000-cfg-8",
      slug: "ecoer-standard-wall-single-36000-cfg-8",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-36000-cfg-9",
      slug: "ecoer-standard-wall-single-36000-cfg-9",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-36000-cfg-10",
      slug: "ecoer-standard-wall-single-36000-cfg-10",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-wall-single-36000-cfg-11",
      slug: "ecoer-standard-wall-single-36000-cfg-11",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-wall-single-36000-cfg-12",
      slug: "ecoer-standard-wall-single-36000-cfg-12",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-36000-cfg-13",
      slug: "ecoer-standard-wall-single-36000-cfg-13",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-36000-cfg-14",
      slug: "ecoer-standard-wall-single-36000-cfg-14",
      modelId: "ecoer-standard-wall-single-36000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-wall-single-48000-cfg-1",
      slug: "ecoer-standard-wall-single-48000-cfg-1",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-48000-cfg-2",
      slug: "ecoer-standard-wall-single-48000-cfg-2",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-48000-cfg-3",
      slug: "ecoer-standard-wall-single-48000-cfg-3",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-48000-cfg-4",
      slug: "ecoer-standard-wall-single-48000-cfg-4",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-48000-cfg-5",
      slug: "ecoer-standard-wall-single-48000-cfg-5",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-wall-single-48000-cfg-6",
      slug: "ecoer-standard-wall-single-48000-cfg-6",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-48000-cfg-7",
      slug: "ecoer-standard-wall-single-48000-cfg-7",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-48000-cfg-8",
      slug: "ecoer-standard-wall-single-48000-cfg-8",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-48000-cfg-9",
      slug: "ecoer-standard-wall-single-48000-cfg-9",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-wall-single-48000-cfg-10",
      slug: "ecoer-standard-wall-single-48000-cfg-10",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-48000-cfg-11",
      slug: "ecoer-standard-wall-single-48000-cfg-11",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-48000-cfg-12",
      slug: "ecoer-standard-wall-single-48000-cfg-12",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-48000-cfg-13",
      slug: "ecoer-standard-wall-single-48000-cfg-13",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-48000-cfg-14",
      slug: "ecoer-standard-wall-single-48000-cfg-14",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-wall-single-48000-cfg-15",
      slug: "ecoer-standard-wall-single-48000-cfg-15",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-48000-cfg-16",
      slug: "ecoer-standard-wall-single-48000-cfg-16",
      modelId: "ecoer-standard-wall-single-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-wall-single-24000-cfg-1",
      slug: "ecoer-standard-wall-single-24000-cfg-1",
      modelId: "ecoer-standard-wall-single-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-24000-cfg-2",
      slug: "ecoer-standard-wall-single-24000-cfg-2",
      modelId: "ecoer-standard-wall-single-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-24000-cfg-3",
      slug: "ecoer-standard-wall-single-24000-cfg-3",
      modelId: "ecoer-standard-wall-single-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-24000-cfg-4",
      slug: "ecoer-standard-wall-single-24000-cfg-4",
      modelId: "ecoer-standard-wall-single-24000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
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
      id: "ecoer-standard-wall-single-24000-cfg-5",
      slug: "ecoer-standard-wall-single-24000-cfg-5",
      modelId: "ecoer-standard-wall-single-24000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-24000-cfg-6",
      slug: "ecoer-standard-wall-single-24000-cfg-6",
      modelId: "ecoer-standard-wall-single-24000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-24000-cfg-7",
      slug: "ecoer-standard-wall-single-24000-cfg-7",
      modelId: "ecoer-standard-wall-single-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-24000-cfg-8",
      slug: "ecoer-standard-wall-single-24000-cfg-8",
      modelId: "ecoer-standard-wall-single-24000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
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
      id: "ecoer-standard-wall-single-24000-cfg-9",
      slug: "ecoer-standard-wall-single-24000-cfg-9",
      modelId: "ecoer-standard-wall-single-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-42000-cfg-1",
      slug: "ecoer-standard-wall-single-42000-cfg-1",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-42000-cfg-2",
      slug: "ecoer-standard-wall-single-42000-cfg-2",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-42000-cfg-3",
      slug: "ecoer-standard-wall-single-42000-cfg-3",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-wall-single-42000-cfg-4",
      slug: "ecoer-standard-wall-single-42000-cfg-4",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-wall-single-42000-cfg-5",
      slug: "ecoer-standard-wall-single-42000-cfg-5",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-42000-cfg-6",
      slug: "ecoer-standard-wall-single-42000-cfg-6",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-wall-single-42000-cfg-7",
      slug: "ecoer-standard-wall-single-42000-cfg-7",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-wall-single-42000-cfg-8",
      slug: "ecoer-standard-wall-single-42000-cfg-8",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-wall-single-42000-cfg-9",
      slug: "ecoer-standard-wall-single-42000-cfg-9",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-wall-single-42000-cfg-10",
      slug: "ecoer-standard-wall-single-42000-cfg-10",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-wall-single-42000-cfg-11",
      slug: "ecoer-standard-wall-single-42000-cfg-11",
      modelId: "ecoer-standard-wall-single-42000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-30000-cfg-1",
      slug: "ecoer-standard-wall-single-30000-cfg-1",
      modelId: "ecoer-standard-wall-single-30000",
      outdoorUnitId: "ecoer-eoda18h-2436",
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
      id: "ecoer-standard-wall-single-30000-cfg-2",
      slug: "ecoer-standard-wall-single-30000-cfg-2",
      modelId: "ecoer-standard-wall-single-30000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-1",
      slug: "ecoer-standard-central-ducted-24000-cfg-1",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-2",
      slug: "ecoer-standard-central-ducted-24000-cfg-2",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-3",
      slug: "ecoer-standard-central-ducted-24000-cfg-3",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-4",
      slug: "ecoer-standard-central-ducted-24000-cfg-4",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-5",
      slug: "ecoer-standard-central-ducted-24000-cfg-5",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-6",
      slug: "ecoer-standard-central-ducted-24000-cfg-6",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-7",
      slug: "ecoer-standard-central-ducted-24000-cfg-7",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-8",
      slug: "ecoer-standard-central-ducted-24000-cfg-8",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-9",
      slug: "ecoer-standard-central-ducted-24000-cfg-9",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-24000-cfg-10",
      slug: "ecoer-standard-central-ducted-24000-cfg-10",
      modelId: "ecoer-standard-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000-cfg-1",
      slug: "ecoer-standard-central-ducted-30000-cfg-1",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000-cfg-2",
      slug: "ecoer-standard-central-ducted-30000-cfg-2",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-central-ducted-30000-cfg-3",
      slug: "ecoer-standard-central-ducted-30000-cfg-3",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000-cfg-4",
      slug: "ecoer-standard-central-ducted-30000-cfg-4",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-central-ducted-30000-cfg-5",
      slug: "ecoer-standard-central-ducted-30000-cfg-5",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000-cfg-6",
      slug: "ecoer-standard-central-ducted-30000-cfg-6",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000-cfg-7",
      slug: "ecoer-standard-central-ducted-30000-cfg-7",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
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
      id: "ecoer-standard-central-ducted-30000-cfg-8",
      slug: "ecoer-standard-central-ducted-30000-cfg-8",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436b",
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
      id: "ecoer-standard-central-ducted-30000-cfg-9",
      slug: "ecoer-standard-central-ducted-30000-cfg-9",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-central-ducted-30000-cfg-10",
      slug: "ecoer-standard-central-ducted-30000-cfg-10",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-central-ducted-30000-cfg-11",
      slug: "ecoer-standard-central-ducted-30000-cfg-11",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-central-ducted-30000-cfg-12",
      slug: "ecoer-standard-central-ducted-30000-cfg-12",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-central-ducted-30000-cfg-13",
      slug: "ecoer-standard-central-ducted-30000-cfg-13",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-central-ducted-30000-cfg-14",
      slug: "ecoer-standard-central-ducted-30000-cfg-14",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-central-ducted-30000-cfg-15",
      slug: "ecoer-standard-central-ducted-30000-cfg-15",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-central-ducted-30000-cfg-16",
      slug: "ecoer-standard-central-ducted-30000-cfg-16",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000-cfg-17",
      slug: "ecoer-standard-central-ducted-30000-cfg-17",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000-cfg-18",
      slug: "ecoer-standard-central-ducted-30000-cfg-18",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000-cfg-19",
      slug: "ecoer-standard-central-ducted-30000-cfg-19",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-30000-cfg-20",
      slug: "ecoer-standard-central-ducted-30000-cfg-20",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-central-ducted-30000-cfg-21",
      slug: "ecoer-standard-central-ducted-30000-cfg-21",
      modelId: "ecoer-standard-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-central-ducted-42000-cfg-1",
      slug: "ecoer-standard-central-ducted-42000-cfg-1",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-42000-cfg-2",
      slug: "ecoer-standard-central-ducted-42000-cfg-2",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-central-ducted-42000-cfg-3",
      slug: "ecoer-standard-central-ducted-42000-cfg-3",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-42000-cfg-4",
      slug: "ecoer-standard-central-ducted-42000-cfg-4",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-central-ducted-42000-cfg-5",
      slug: "ecoer-standard-central-ducted-42000-cfg-5",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-42000-cfg-6",
      slug: "ecoer-standard-central-ducted-42000-cfg-6",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-42000-cfg-7",
      slug: "ecoer-standard-central-ducted-42000-cfg-7",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-42000-cfg-8",
      slug: "ecoer-standard-central-ducted-42000-cfg-8",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-central-ducted-42000-cfg-9",
      slug: "ecoer-standard-central-ducted-42000-cfg-9",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-central-ducted-42000-cfg-10",
      slug: "ecoer-standard-central-ducted-42000-cfg-10",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-42000-cfg-11",
      slug: "ecoer-standard-central-ducted-42000-cfg-11",
      modelId: "ecoer-standard-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-1",
      slug: "ecoer-standard-central-ducted-48000-cfg-1",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-central-ducted-48000-cfg-2",
      slug: "ecoer-standard-central-ducted-48000-cfg-2",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-central-ducted-48000-cfg-3",
      slug: "ecoer-standard-central-ducted-48000-cfg-3",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-4",
      slug: "ecoer-standard-central-ducted-48000-cfg-4",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-5",
      slug: "ecoer-standard-central-ducted-48000-cfg-5",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-6",
      slug: "ecoer-standard-central-ducted-48000-cfg-6",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-7",
      slug: "ecoer-standard-central-ducted-48000-cfg-7",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-8",
      slug: "ecoer-standard-central-ducted-48000-cfg-8",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-9",
      slug: "ecoer-standard-central-ducted-48000-cfg-9",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-10",
      slug: "ecoer-standard-central-ducted-48000-cfg-10",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-11",
      slug: "ecoer-standard-central-ducted-48000-cfg-11",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-48000-cfg-12",
      slug: "ecoer-standard-central-ducted-48000-cfg-12",
      modelId: "ecoer-standard-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-sdi-decades-extreme-central-ducted-36000-cfg-1",
      slug: "ecoer-sdi-decades-extreme-central-ducted-36000-cfg-1",
      modelId: "ecoer-sdi-decades-extreme-central-ducted-36000",
      outdoorUnitId: "ecoer-esca16h-36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-decades-extreme-central-ducted-36000-cfg-2",
      slug: "ecoer-sdi-decades-extreme-central-ducted-36000-cfg-2",
      modelId: "ecoer-sdi-decades-extreme-central-ducted-36000",
      outdoorUnitId: "ecoer-esca16h-36",
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
      id: "ecoer-sdi-decades-extreme-central-ducted-60000-cfg-1",
      slug: "ecoer-sdi-decades-extreme-central-ducted-60000-cfg-1",
      modelId: "ecoer-sdi-decades-extreme-central-ducted-60000",
      outdoorUnitId: "ecoer-esca16h-60",
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
      id: "ecoer-sdi-decades-extreme-central-ducted-60000-cfg-2",
      slug: "ecoer-sdi-decades-extreme-central-ducted-60000-cfg-2",
      modelId: "ecoer-sdi-decades-extreme-central-ducted-60000",
      outdoorUnitId: "ecoer-esca16h-60",
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
      id: "ecoer-sdi-decades-extreme-central-ducted-60000-cfg-3",
      slug: "ecoer-sdi-decades-extreme-central-ducted-60000-cfg-3",
      modelId: "ecoer-sdi-decades-extreme-central-ducted-60000",
      outdoorUnitId: "ecoer-esca16h-60",
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
      id: "ecoer-sdi-decades-extreme-central-ducted-42000-cfg-1",
      slug: "ecoer-sdi-decades-extreme-central-ducted-42000-cfg-1",
      modelId: "ecoer-sdi-decades-extreme-central-ducted-42000",
      outdoorUnitId: "ecoer-esca16h-60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-1",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-1",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-2",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-2",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-3",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-3",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-4",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-4",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-5",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-5",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-6",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-6",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-7",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-7",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-8",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-8",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-9",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-9",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-10",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-10",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-11",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-11",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-12",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-12",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-13",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-13",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-14",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-14",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-15",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-15",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-16",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-16",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-17",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-17",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-18",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-18",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-19",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-19",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-20",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-20",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-21",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-21",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-22",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-22",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-23",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-23",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-24",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-24",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-25",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-25",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-26",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-26",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-27",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-27",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-28",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-28",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-29",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-29",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-30",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-30",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-31",
      slug: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-31",
      modelId: "ecoer-esi-decades-extreme-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-1",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-1",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-2",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-2",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 15.2,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-3",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-3",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-4",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-4",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-5",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-5",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-6",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-6",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-7",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-7",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-8",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-8",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-9",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-9",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-10",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-10",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-11",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-11",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-12",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-12",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-13",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-13",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-14",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-14",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-15",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-15",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-24000-cfg-16",
      slug: "ecoer-tdi-pro-central-ducted-24000-cfg-16",
      modelId: "ecoer-tdi-pro-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-36000-cfg-1",
      slug: "ecoer-tdi-pro-central-ducted-36000-cfg-1",
      modelId: "ecoer-tdi-pro-central-ducted-36000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-36000-cfg-2",
      slug: "ecoer-tdi-pro-central-ducted-36000-cfg-2",
      modelId: "ecoer-tdi-pro-central-ducted-36000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-36000-cfg-3",
      slug: "ecoer-tdi-pro-central-ducted-36000-cfg-3",
      modelId: "ecoer-tdi-pro-central-ducted-36000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 18.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-36000-cfg-4",
      slug: "ecoer-tdi-pro-central-ducted-36000-cfg-4",
      modelId: "ecoer-tdi-pro-central-ducted-36000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-36000-cfg-5",
      slug: "ecoer-tdi-pro-central-ducted-36000-cfg-5",
      modelId: "ecoer-tdi-pro-central-ducted-36000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-36000-cfg-6",
      slug: "ecoer-tdi-pro-central-ducted-36000-cfg-6",
      modelId: "ecoer-tdi-pro-central-ducted-36000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-1",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-1",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-2",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-2",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-3",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-3",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-4",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-4",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-5",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-5",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-6",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-6",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-7",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-7",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-8",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-8",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16.5,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-9",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-9",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16.5,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-10",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-10",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-11",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-11",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-12",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-12",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-13",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-13",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-14",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-14",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-15",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-15",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50000,
      coolingCapacityMaxBtu: 50000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-48000-cfg-16",
      slug: "ecoer-tdi-pro-central-ducted-48000-cfg-16",
      modelId: "ecoer-tdi-pro-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50000,
      coolingCapacityMaxBtu: 50000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-1",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-1",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-2",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-2",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-3",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-3",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-4",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-4",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-5",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-5",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-6",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-6",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-7",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-7",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-8",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-8",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-9",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-9",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-10",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-10",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-11",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-11",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-12",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-12",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-13",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-13",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-14",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-14",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-15",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-15",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-16",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-16",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-17",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-17",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-18",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-18",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-19",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-19",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-20",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-20",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-21",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-21",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-22",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-22",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-30000-cfg-23",
      slug: "ecoer-tdi-pro-central-ducted-30000-cfg-23",
      modelId: "ecoer-tdi-pro-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-42000-cfg-1",
      slug: "ecoer-tdi-pro-central-ducted-42000-cfg-1",
      modelId: "ecoer-tdi-pro-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 15.2,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-42000-cfg-2",
      slug: "ecoer-tdi-pro-central-ducted-42000-cfg-2",
      modelId: "ecoer-tdi-pro-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-42000-cfg-3",
      slug: "ecoer-tdi-pro-central-ducted-42000-cfg-3",
      modelId: "ecoer-tdi-pro-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-42000-cfg-4",
      slug: "ecoer-tdi-pro-central-ducted-42000-cfg-4",
      modelId: "ecoer-tdi-pro-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 17,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-42000-cfg-5",
      slug: "ecoer-tdi-pro-central-ducted-42000-cfg-5",
      modelId: "ecoer-tdi-pro-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 17,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-42000-cfg-6",
      slug: "ecoer-tdi-pro-central-ducted-42000-cfg-6",
      modelId: "ecoer-tdi-pro-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-42000-cfg-7",
      slug: "ecoer-tdi-pro-central-ducted-42000-cfg-7",
      modelId: "ecoer-tdi-pro-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-42000-cfg-8",
      slug: "ecoer-tdi-pro-central-ducted-42000-cfg-8",
      modelId: "ecoer-tdi-pro-central-ducted-42000",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti-central-ducted-60000-cfg-1",
      slug: "ecoer-rti-central-ducted-60000-cfg-1",
      modelId: "ecoer-rti-central-ducted-60000",
      outdoorUnitId: "ecoer-erda19h-60aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-36000-cfg-1",
      slug: "ecoer-esi-decades-extreme-central-ducted-36000-cfg-1",
      modelId: "ecoer-esi-decades-extreme-central-ducted-36000",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-24000-cfg-1",
      slug: "ecoer-tdi-pro-2-central-ducted-24000-cfg-1",
      modelId: "ecoer-tdi-pro-2-central-ducted-24000",
      outdoorUnitId: "ecoer-eoda19h-2436ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-36000-cfg-1",
      slug: "ecoer-tdi-pro-2-central-ducted-36000-cfg-1",
      modelId: "ecoer-tdi-pro-2-central-ducted-36000",
      outdoorUnitId: "ecoer-eoda19h-2436ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-36000-cfg-2",
      slug: "ecoer-tdi-pro-2-central-ducted-36000-cfg-2",
      modelId: "ecoer-tdi-pro-2-central-ducted-36000",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-48000-cfg-1",
      slug: "ecoer-tdi-pro-2-central-ducted-48000-cfg-1",
      modelId: "ecoer-tdi-pro-2-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-48000-cfg-2",
      slug: "ecoer-tdi-pro-2-central-ducted-48000-cfg-2",
      modelId: "ecoer-tdi-pro-2-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-48000-cfg-3",
      slug: "ecoer-tdi-pro-2-central-ducted-48000-cfg-3",
      modelId: "ecoer-tdi-pro-2-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-48000-cfg-4",
      slug: "ecoer-tdi-pro-2-central-ducted-48000-cfg-4",
      modelId: "ecoer-tdi-pro-2-central-ducted-48000",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-24000-cfg-1",
      slug: "ecoer-sdi-extreme-2-central-ducted-24000-cfg-1",
      modelId: "ecoer-sdi-extreme-2-central-ducted-24000",
      outdoorUnitId: "ecoer-esca17h-24aba",
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
      id: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-1",
      slug: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-1",
      modelId: "ecoer-sdi-extreme-2-central-ducted-48000",
      outdoorUnitId: "ecoer-esca17h-48aba",
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
      id: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-2",
      slug: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-2",
      modelId: "ecoer-sdi-extreme-2-central-ducted-48000",
      outdoorUnitId: "ecoer-esca17h-60aba",
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
      id: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-3",
      slug: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-3",
      modelId: "ecoer-sdi-extreme-2-central-ducted-48000",
      outdoorUnitId: "ecoer-esca17h-60aba",
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
      id: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-4",
      slug: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-4",
      modelId: "ecoer-sdi-extreme-2-central-ducted-48000",
      outdoorUnitId: "ecoer-esca17h-60aba",
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
      id: "ecoer-sdi-pro-2-central-ducted-24000-cfg-1",
      slug: "ecoer-sdi-pro-2-central-ducted-24000-cfg-1",
      modelId: "ecoer-sdi-pro-2-central-ducted-24000",
      outdoorUnitId: "ecoer-esca16h-24bba",
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
      id: "ecoer-sdi-pro-2-central-ducted-48000-cfg-1",
      slug: "ecoer-sdi-pro-2-central-ducted-48000-cfg-1",
      modelId: "ecoer-sdi-pro-2-central-ducted-48000",
      outdoorUnitId: "ecoer-esca16h-48bba",
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
      id: "ecoer-sdi-pro-2-central-ducted-48000-cfg-2",
      slug: "ecoer-sdi-pro-2-central-ducted-48000-cfg-2",
      modelId: "ecoer-sdi-pro-2-central-ducted-48000",
      outdoorUnitId: "ecoer-esca16h-60bba",
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
      id: "ecoer-sdi-pro-2-central-ducted-48000-cfg-3",
      slug: "ecoer-sdi-pro-2-central-ducted-48000-cfg-3",
      modelId: "ecoer-sdi-pro-2-central-ducted-48000",
      outdoorUnitId: "ecoer-esca16h-60bba",
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
      id: "ecoer-sdi-extreme-2-central-ducted-36000-cfg-1",
      slug: "ecoer-sdi-extreme-2-central-ducted-36000-cfg-1",
      modelId: "ecoer-sdi-extreme-2-central-ducted-36000",
      outdoorUnitId: "ecoer-esca17h-36aba",
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
      id: "ecoer-sdi-extreme-2-central-ducted-36000-cfg-2",
      slug: "ecoer-sdi-extreme-2-central-ducted-36000-cfg-2",
      modelId: "ecoer-sdi-extreme-2-central-ducted-36000",
      outdoorUnitId: "ecoer-esca17h-36aba",
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
      id: "ecoer-sdi-extreme-2-central-ducted-36000-cfg-3",
      slug: "ecoer-sdi-extreme-2-central-ducted-36000-cfg-3",
      modelId: "ecoer-sdi-extreme-2-central-ducted-36000",
      outdoorUnitId: "ecoer-esca17h-36aba",
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
      id: "ecoer-sdi-pro-2-central-ducted-36000-cfg-1",
      slug: "ecoer-sdi-pro-2-central-ducted-36000-cfg-1",
      modelId: "ecoer-sdi-pro-2-central-ducted-36000",
      outdoorUnitId: "ecoer-esca16h-36bba",
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
      id: "ecoer-sdi-pro-2-central-ducted-36000-cfg-2",
      slug: "ecoer-sdi-pro-2-central-ducted-36000-cfg-2",
      modelId: "ecoer-sdi-pro-2-central-ducted-36000",
      outdoorUnitId: "ecoer-esca16h-36bba",
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
      id: "ecoer-sdi-pro-2-central-ducted-36000-cfg-3",
      slug: "ecoer-sdi-pro-2-central-ducted-36000-cfg-3",
      modelId: "ecoer-sdi-pro-2-central-ducted-36000",
      outdoorUnitId: "ecoer-esca16h-36bba",
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
      id: "ecoer-rti-2-central-ducted-60000-cfg-1",
      slug: "ecoer-rti-2-central-ducted-60000-cfg-1",
      modelId: "ecoer-rti-2-central-ducted-60000",
      outdoorUnitId: "ecoer-erda19h-60ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-30000-cfg-1",
      slug: "ecoer-tdi-pro-2-central-ducted-30000-cfg-1",
      modelId: "ecoer-tdi-pro-2-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-30000-cfg-2",
      slug: "ecoer-tdi-pro-2-central-ducted-30000-cfg-2",
      modelId: "ecoer-tdi-pro-2-central-ducted-30000",
      outdoorUnitId: "ecoer-eoda19h-2436ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ecoer-standard-wall-single-36000-cfg-1",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-2",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-3",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-4",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-5",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-6",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-7",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-8",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-9",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-10",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-11",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-12",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-13",
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
      configurationId: "ecoer-standard-wall-single-36000-cfg-14",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-48000-cfg-3",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-4",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-5",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-6",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-7",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-48000-cfg-9",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-10",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-11",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-12",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-13",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-14",
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
      configurationId: "ecoer-standard-wall-single-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-48000-cfg-16",
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
      configurationId: "ecoer-standard-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-24000-cfg-2",
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
      configurationId: "ecoer-standard-wall-single-24000-cfg-3",
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
      configurationId: "ecoer-standard-wall-single-24000-cfg-4",
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
      configurationId: "ecoer-standard-wall-single-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-24000-cfg-8",
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
      configurationId: "ecoer-standard-wall-single-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-42000-cfg-1",
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
      configurationId: "ecoer-standard-wall-single-42000-cfg-2",
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
      configurationId: "ecoer-standard-wall-single-42000-cfg-3",
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
      configurationId: "ecoer-standard-wall-single-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-42000-cfg-5",
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
      configurationId: "ecoer-standard-wall-single-42000-cfg-6",
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
      configurationId: "ecoer-standard-wall-single-42000-cfg-7",
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
      configurationId: "ecoer-standard-wall-single-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-42000-cfg-9",
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
      configurationId: "ecoer-standard-wall-single-42000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-42000-cfg-11",
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
      configurationId: "ecoer-standard-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-30000-cfg-2",
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
      configurationId: "ecoer-standard-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-24000-cfg-4",
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
      configurationId: "ecoer-standard-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-24000-cfg-6",
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
      configurationId: "ecoer-standard-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-24000-cfg-8",
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
      configurationId: "ecoer-standard-central-ducted-24000-cfg-9",
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
      configurationId: "ecoer-standard-central-ducted-24000-cfg-10",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-1",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-2",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-3",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-4",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-5",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-6",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-7",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-8",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-9",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-10",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-11",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-12",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-13",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-14",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-15",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-16",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-17",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-18",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-19",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-20",
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
      configurationId: "ecoer-standard-central-ducted-30000-cfg-21",
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
      configurationId: "ecoer-standard-central-ducted-42000-cfg-1",
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
      configurationId: "ecoer-standard-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-42000-cfg-3",
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
      configurationId: "ecoer-standard-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-42000-cfg-5",
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
      configurationId: "ecoer-standard-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-42000-cfg-7",
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
      configurationId: "ecoer-standard-central-ducted-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-42000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-42000-cfg-10",
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
      configurationId: "ecoer-standard-central-ducted-42000-cfg-11",
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
      configurationId: "ecoer-standard-central-ducted-48000-cfg-1",
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
      configurationId: "ecoer-standard-central-ducted-48000-cfg-2",
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
      configurationId: "ecoer-standard-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-48000-cfg-12",
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
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-36000-cfg-2",
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
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-60000-cfg-1",
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
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-60000-cfg-2",
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
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-60000-cfg-3",
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
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-5",
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
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-7",
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
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-20",
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
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-21",
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
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-27",
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
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-24000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-1",
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
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-4",
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
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-6",
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
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-8",
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
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-11",
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
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-14",
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
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-36000-cfg-2",
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
      configurationId: "ecoer-tdi-pro-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-36000-cfg-4",
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
      configurationId: "ecoer-tdi-pro-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-36000-cfg-6",
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
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-2",
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
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-12",
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
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-14",
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
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-48000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-30000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-42000-cfg-1",
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
      configurationId: "ecoer-tdi-pro-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-42000-cfg-8",
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
      configurationId: "ecoer-rti-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-36000-cfg-2",
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
      configurationId: "ecoer-tdi-pro-2-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-extreme-2-central-ducted-24000-cfg-1",
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
      configurationId: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-1",
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
      configurationId: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-2",
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
      configurationId: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-3",
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
      configurationId: "ecoer-sdi-extreme-2-central-ducted-48000-cfg-4",
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
      configurationId: "ecoer-sdi-pro-2-central-ducted-24000-cfg-1",
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
      configurationId: "ecoer-sdi-pro-2-central-ducted-48000-cfg-1",
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
      configurationId: "ecoer-sdi-pro-2-central-ducted-48000-cfg-2",
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
      configurationId: "ecoer-sdi-pro-2-central-ducted-48000-cfg-3",
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
      configurationId: "ecoer-sdi-extreme-2-central-ducted-36000-cfg-1",
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
      configurationId: "ecoer-sdi-extreme-2-central-ducted-36000-cfg-2",
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
      configurationId: "ecoer-sdi-extreme-2-central-ducted-36000-cfg-3",
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
      configurationId: "ecoer-sdi-pro-2-central-ducted-36000-cfg-1",
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
      configurationId: "ecoer-sdi-pro-2-central-ducted-36000-cfg-2",
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
      configurationId: "ecoer-sdi-pro-2-central-ducted-36000-cfg-3",
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
      configurationId: "ecoer-rti-2-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
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
