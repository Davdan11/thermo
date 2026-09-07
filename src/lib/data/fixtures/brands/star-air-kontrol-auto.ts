import type { BrandDataset } from "../../types";

export const starairkontrolDataset: BrandDataset = {
  brand: {
    id: "star-air-kontrol",
    slug: "star-air-kontrol",
    name: "STAR AIR KONTROL",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "star-air-kontrol-standard",
      slug: "star-air-kontrol-standard",
      name: "Standard",
      brandId: "star-air-kontrol",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series",
      slug: "star-air-kontrol-sak-series",
      name: "SAK Series",
      brandId: "star-air-kontrol",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "star-air-kontrol-standard-wall-single-18000",
      slug: "star-air-kontrol-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "star-air-kontrol-standard",
      brandId: "star-air-kontrol",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11400,
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
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-12000",
      slug: "star-air-kontrol-sak-series-wall-single-12000",
      name: "SAK Series 12 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 12k",
      normalizedModelNumber: "sak-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 9500,
      seer2Min: 19,
      seer2Max: 23.1,
      hspf2Min: 9.3,
      hspf2Max: 10.4,
      cop5FMin: 2,
      cop5FMax: 2.48,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-18000",
      slug: "star-air-kontrol-sak-series-wall-single-18000",
      name: "SAK Series 18 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 18k",
      normalizedModelNumber: "sak-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 12200,
      heatingCapacity5FMaxBtu: 14800,
      seer2Min: 19,
      seer2Max: 23.7,
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
      id: "star-air-kontrol-sak-series-wall-single-24000",
      slug: "star-air-kontrol-sak-series-wall-single-24000",
      name: "SAK Series 24 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 24k",
      normalizedModelNumber: "sak-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 18.7,
      seer2Max: 23.5,
      hspf2Min: 9,
      hspf2Max: 11.2,
      cop5FMin: 1.92,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-standard-wall-single-36000",
      slug: "star-air-kontrol-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "star-air-kontrol-standard",
      brandId: "star-air-kontrol",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 20400,
      heatingCapacity5FMaxBtu: 27400,
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
      id: "star-air-kontrol-sak-series-wall-single-15000",
      slug: "star-air-kontrol-sak-series-wall-single-15000",
      name: "SAK Series 15 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 15k",
      normalizedModelNumber: "sak-series-15000",
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
      hspf2Min: 10.5,
      hspf2Max: 10.5,
      cop5FMin: 2.16,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-standard-wall-single-48000",
      slug: "star-air-kontrol-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "star-air-kontrol-standard",
      brandId: "star-air-kontrol",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 37000,
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
      id: "star-air-kontrol-sak-series-central-ducted-24000",
      slug: "star-air-kontrol-sak-series-central-ducted-24000",
      name: "SAK Series 24 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 24k",
      normalizedModelNumber: "sak-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 17,
      seer2Max: 18.1,
      hspf2Min: 9.2,
      hspf2Max: 9.7,
      cop5FMin: 1.87,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-standard-wall-single-60000",
      slug: "star-air-kontrol-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "star-air-kontrol-standard",
      brandId: "star-air-kontrol",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
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
      id: "star-air-kontrol-sak-series-wall-single-30000",
      slug: "star-air-kontrol-sak-series-wall-single-30000",
      name: "SAK Series 30 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 30k",
      normalizedModelNumber: "sak-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 21,
      seer2Max: 22.25,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-48000",
      slug: "star-air-kontrol-sak-series-wall-single-48000",
      name: "SAK Series 48 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 48k",
      normalizedModelNumber: "sak-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 17.1,
      seer2Max: 19,
      hspf2Min: 9.8,
      hspf2Max: 10,
      cop5FMin: 1.85,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-9000",
      slug: "star-air-kontrol-sak-series-wall-single-9000",
      name: "SAK Series 9 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 9k",
      normalizedModelNumber: "sak-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 8900,
      seer2Min: 19.5,
      seer2Max: 22.5,
      hspf2Min: 9,
      hspf2Max: 11.8,
      cop5FMin: 1.9,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-standard-wall-single-12000",
      slug: "star-air-kontrol-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "star-air-kontrol-standard",
      brandId: "star-air-kontrol",
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
      id: "star-air-kontrol-standard-wall-single-24000",
      slug: "star-air-kontrol-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "star-air-kontrol-standard",
      brandId: "star-air-kontrol",
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
      id: "star-air-kontrol-standard-wall-single-30000",
      slug: "star-air-kontrol-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "star-air-kontrol-standard",
      brandId: "star-air-kontrol",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 18500,
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
      id: "star-air-kontrol-sak-series-wall-single-6000",
      slug: "star-air-kontrol-sak-series-wall-single-6000",
      name: "SAK Series 6 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 6k",
      normalizedModelNumber: "sak-series-6000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 8000,
      seer2Min: 21.4,
      seer2Max: 22,
      hspf2Min: 12,
      hspf2Max: 13.8,
      cop5FMin: 2.4,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-36000",
      slug: "star-air-kontrol-sak-series-wall-single-36000",
      name: "SAK Series 36 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 36k",
      normalizedModelNumber: "sak-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 26400,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 20,
      seer2Max: 23.1,
      hspf2Min: 9.2,
      hspf2Max: 10.3,
      cop5FMin: 2,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-42000",
      slug: "star-air-kontrol-sak-series-wall-single-42000",
      name: "SAK Series 42 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 42k",
      normalizedModelNumber: "sak-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 34000,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 20.4,
      seer2Max: 21.3,
      hspf2Min: 10,
      hspf2Max: 10.6,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-central-ducted-18000",
      slug: "star-air-kontrol-sak-series-central-ducted-18000",
      name: "SAK Series 18 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 18k",
      normalizedModelNumber: "sak-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 12600,
      seer2Min: 18.8,
      seer2Max: 18.8,
      hspf2Min: 9.1,
      hspf2Max: 9.1,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-central-ducted-48000",
      slug: "star-air-kontrol-sak-series-central-ducted-48000",
      name: "SAK Series 48 000 BTU",
      seriesId: "star-air-kontrol-sak-series",
      brandId: "star-air-kontrol",
      modelNumber: "SAK Series 48k",
      normalizedModelNumber: "sak-series-48000",
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
    }
  ],
  outdoorUnits: [
    {
      id: "star-air-kontrol-sak-18-19ms-220",
      modelNumber: "SAK-18-19MS/220",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18adn2-m18m",
      modelNumber: "SAK-18ADN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-es-220v",
      modelNumber: "SAK-18-ES/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-wm2-220v",
      modelNumber: "SAK-18-WM2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-22ms-110",
      modelNumber: "SAK-12-22MS/110",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-22ms-220",
      modelNumber: "SAK-12-22MS/220",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-cc-od-220volt",
      modelNumber: "SAK-12-CC(OD)/220VOLT",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-dtms-220v",
      modelNumber: "SAK-12-DTMS/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-cc-220v",
      modelNumber: "SAK-12-CC/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-oc-220v",
      modelNumber: "SAK-12-OC/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-dt2-220v",
      modelNumber: "SAK-12-DT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-ct2-220v",
      modelNumber: "SAK-12-CT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-oct2-220v",
      modelNumber: "SAK-12-OCT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-24ms-220",
      modelNumber: "SAK-18-24MS/220",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-dtms-220v",
      modelNumber: "SAK-18-DTMS/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-21muz-220-out",
      modelNumber: "SAK-18-21MUZ/220(OUT)*",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-oc-220v",
      modelNumber: "SAK-18-OC/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-dt2-220v",
      modelNumber: "SAK-18-DT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-ct2-220v",
      modelNumber: "SAK-18-CT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-oct2-220v",
      modelNumber: "SAK-18-OCT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-dz-220v",
      modelNumber: "SAK-18-DZ/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24-21ms-220",
      modelNumber: "SAK-24-21MS/220",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24-dtms-220v",
      modelNumber: "SAK-24-DTMS/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24-cc-od-220volt",
      modelNumber: "SAK-24-CC(OD)/220VOLT",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-27-22muz-220-out",
      modelNumber: "SAK-27-22MUZ/220(OUT)*",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24cons-220v",
      modelNumber: "SAK-24CONS/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24-cc-220v",
      modelNumber: "SAK-24-CC/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24-wm2-220v",
      modelNumber: "SAK-24-WM2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24-dt2-220v",
      modelNumber: "SAK-24-DT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24-ct2-220v",
      modelNumber: "SAK-24-CT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-27-tz-220v",
      modelNumber: "SAK-27-TZ/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36ms-220v",
      modelNumber: "SAK-36MS/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36-cc-od-220volt",
      modelNumber: "SAK-36-CC(OD)/220VOLT",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36adn2-m18m",
      modelNumber: "SAK-36ADN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36-dtms-220v",
      modelNumber: "SAK-36-DTMS/220V*",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36-22muz-220-out",
      modelNumber: "SAK-36-22MUZ/220(OUT)*",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36cons-220v",
      modelNumber: "SAK-36CONS/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36-cc-220v",
      modelNumber: "SAK-36-CC/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36-wm2-220v",
      modelNumber: "SAK-36-WM2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36-dt2-220v",
      modelNumber: "SAK-36-DT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-cc-od-220volt",
      modelNumber: "SAK-18-CC(OD)/220VOLT",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18-cc-220v",
      modelNumber: "SAK-18-CC/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48-cc-od-220volt",
      modelNumber: "SAK-48-CC(OD)/220VOLT",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48adn2-m18m",
      modelNumber: "SAK-48ADN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48-dtms-220v",
      modelNumber: "SAK-48-DTMS/220V*",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48-21muz-220-out",
      modelNumber: "SAK-48-21MUZ/220(OUT)*",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-60cons-220v",
      modelNumber: "SAK-60CONS/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48-cc-220v",
      modelNumber: "SAK-48-CC/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24adn2-m18m",
      modelNumber: "SAK-24ADN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24fdn2-m18m",
      modelNumber: "SAK-24FDN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-60adn2-m18m",
      modelNumber: "SAK-60ADN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-60-dtms-220v",
      modelNumber: "SAK-60-DTMS/220V*",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-60-20muz-220-out",
      modelNumber: "SAK-60-20MUZ/220(OUT)",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-60-dt2-220v",
      modelNumber: "SAK-60-DT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-60-qz-220v",
      modelNumber: "SAK-60-QZ/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48cons-220v",
      modelNumber: "SAK-48CONS/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48-dt2-220v",
      modelNumber: "SAK-48-DT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48-ct2-220v",
      modelNumber: "SAK-48-CT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-09-cc-220v",
      modelNumber: "SAK-09-CC/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-09-oc-220v",
      modelNumber: "SAK-09-OC/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-09-wm2-115v",
      modelNumber: "SAK-09-WM2/115V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-09-wm2-220v",
      modelNumber: "SAK-09-WM2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-09-dt2-220v",
      modelNumber: "SAK-09-DT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-09-ct2-220v",
      modelNumber: "SAK-09-CT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-09-oct2-220v",
      modelNumber: "SAK-09-OCT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-es-115v",
      modelNumber: "SAK-12-ES/115V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-es-220v",
      modelNumber: "SAK-12-ES/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-wm2-115v",
      modelNumber: "SAK-12-WM2/115V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-12-wm2-220v",
      modelNumber: "SAK-12-WM2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-24-es-220v",
      modelNumber: "SAK-24-ES/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-30-wm2-220v",
      modelNumber: "SAK-30-WM2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36fdn2-m18m",
      modelNumber: "SAK-36FDN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-06-dt2-220v",
      modelNumber: "SAK-06-DT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-06-oct2-220v",
      modelNumber: "SAK-06-OCT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36-ct2-220v",
      modelNumber: "SAK-36-CT2/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-36-qz-220v",
      modelNumber: "SAK-36-QZ/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48-qz-220v",
      modelNumber: "SAK-48-QZ/220V",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-18fdn2-m18m",
      modelNumber: "SAK-18FDN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-48fdn2-m18m",
      modelNumber: "SAK-48FDN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    },
    {
      id: "star-air-kontrol-sak-60fdn2-m18m",
      modelNumber: "SAK-60FDN2-M18M",
      brandId: "star-air-kontrol",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "star-air-kontrol-standard-wall-single-18000-cfg-1",
      slug: "star-air-kontrol-standard-wall-single-18000-cfg-1",
      modelId: "star-air-kontrol-standard-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-19ms-220",
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
      id: "star-air-kontrol-standard-wall-single-18000-cfg-2",
      slug: "star-air-kontrol-standard-wall-single-18000-cfg-2",
      modelId: "star-air-kontrol-standard-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18adn2-m18m",
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
      id: "star-air-kontrol-standard-wall-single-18000-cfg-3",
      slug: "star-air-kontrol-standard-wall-single-18000-cfg-3",
      modelId: "star-air-kontrol-standard-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-es-220v",
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
      id: "star-air-kontrol-standard-wall-single-18000-cfg-4",
      slug: "star-air-kontrol-standard-wall-single-18000-cfg-4",
      modelId: "star-air-kontrol-standard-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18adn2-m18m",
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
      id: "star-air-kontrol-standard-wall-single-18000-cfg-5",
      slug: "star-air-kontrol-standard-wall-single-18000-cfg-5",
      modelId: "star-air-kontrol-standard-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-wm2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-12000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-12000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-22ms-110",
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
      id: "star-air-kontrol-sak-series-wall-single-12000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-12000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-22ms-220",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-12000-cfg-3",
      slug: "star-air-kontrol-sak-series-wall-single-12000-cfg-3",
      modelId: "star-air-kontrol-sak-series-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-cc-od-220volt",
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
      id: "star-air-kontrol-sak-series-wall-single-12000-cfg-4",
      slug: "star-air-kontrol-sak-series-wall-single-12000-cfg-4",
      modelId: "star-air-kontrol-sak-series-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-dtms-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-12000-cfg-5",
      slug: "star-air-kontrol-sak-series-wall-single-12000-cfg-5",
      modelId: "star-air-kontrol-sak-series-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-cc-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-12000-cfg-6",
      slug: "star-air-kontrol-sak-series-wall-single-12000-cfg-6",
      modelId: "star-air-kontrol-sak-series-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-oc-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-12000-cfg-7",
      slug: "star-air-kontrol-sak-series-wall-single-12000-cfg-7",
      modelId: "star-air-kontrol-sak-series-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-dt2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-12000-cfg-8",
      slug: "star-air-kontrol-sak-series-wall-single-12000-cfg-8",
      modelId: "star-air-kontrol-sak-series-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-ct2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-12000-cfg-9",
      slug: "star-air-kontrol-sak-series-wall-single-12000-cfg-9",
      modelId: "star-air-kontrol-sak-series-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-oct2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-24ms-220",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.7,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-dtms-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-3",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-3",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-21muz-220-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-4",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-4",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-21muz-220-out",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-5",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-5",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-21muz-220-out",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-6",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-6",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-oc-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-7",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-7",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-dt2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-8",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-8",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-ct2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-9",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-9",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-oct2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-10",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-10",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-dz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-11",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-11",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-dz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-18000-cfg-12",
      slug: "star-air-kontrol-sak-series-wall-single-18000-cfg-12",
      modelId: "star-air-kontrol-sak-series-wall-single-18000",
      outdoorUnitId: "star-air-kontrol-sak-18-dz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-24-21ms-220",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-24-dtms-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-3",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-3",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-24-cc-od-220volt",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-4",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-4",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-27-22muz-220-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-5",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-5",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-24cons-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-6",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-6",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-24-cc-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-7",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-7",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-24-wm2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-8",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-8",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-24-dt2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-9",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-9",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-24-ct2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-10",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-10",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-27-tz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-11",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-11",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-27-tz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-24000-cfg-12",
      slug: "star-air-kontrol-sak-series-wall-single-24000-cfg-12",
      modelId: "star-air-kontrol-sak-series-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-27-tz-220v",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-1",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-1",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36ms-220v",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-2",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-2",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-cc-od-220volt",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-3",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-3",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36adn2-m18m",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-4",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-4",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-dtms-220v",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-5",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-5",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-22muz-220-out",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-6",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-6",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36cons-220v",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-7",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-7",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-cc-220v",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-8",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-8",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36adn2-m18m",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-9",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-9",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-wm2-220v",
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
      id: "star-air-kontrol-standard-wall-single-36000-cfg-10",
      slug: "star-air-kontrol-standard-wall-single-36000-cfg-10",
      modelId: "star-air-kontrol-standard-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-dt2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-15000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-15000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-15000",
      outdoorUnitId: "star-air-kontrol-sak-18-cc-od-220volt",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-15000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-15000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-15000",
      outdoorUnitId: "star-air-kontrol-sak-18-cc-220v",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-standard-wall-single-48000-cfg-1",
      slug: "star-air-kontrol-standard-wall-single-48000-cfg-1",
      modelId: "star-air-kontrol-standard-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48-cc-od-220volt",
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
      id: "star-air-kontrol-standard-wall-single-48000-cfg-2",
      slug: "star-air-kontrol-standard-wall-single-48000-cfg-2",
      modelId: "star-air-kontrol-standard-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48adn2-m18m",
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
      id: "star-air-kontrol-standard-wall-single-48000-cfg-3",
      slug: "star-air-kontrol-standard-wall-single-48000-cfg-3",
      modelId: "star-air-kontrol-standard-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48-dtms-220v",
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
      id: "star-air-kontrol-standard-wall-single-48000-cfg-4",
      slug: "star-air-kontrol-standard-wall-single-48000-cfg-4",
      modelId: "star-air-kontrol-standard-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48-21muz-220-out",
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
      id: "star-air-kontrol-standard-wall-single-48000-cfg-5",
      slug: "star-air-kontrol-standard-wall-single-48000-cfg-5",
      modelId: "star-air-kontrol-standard-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48-21muz-220-out",
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
      id: "star-air-kontrol-standard-wall-single-48000-cfg-6",
      slug: "star-air-kontrol-standard-wall-single-48000-cfg-6",
      modelId: "star-air-kontrol-standard-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-60cons-220v",
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
      id: "star-air-kontrol-standard-wall-single-48000-cfg-7",
      slug: "star-air-kontrol-standard-wall-single-48000-cfg-7",
      modelId: "star-air-kontrol-standard-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48-cc-220v",
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
      id: "star-air-kontrol-standard-wall-single-48000-cfg-8",
      slug: "star-air-kontrol-standard-wall-single-48000-cfg-8",
      modelId: "star-air-kontrol-standard-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48adn2-m18m",
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
      id: "star-air-kontrol-sak-series-central-ducted-24000-cfg-1",
      slug: "star-air-kontrol-sak-series-central-ducted-24000-cfg-1",
      modelId: "star-air-kontrol-sak-series-central-ducted-24000",
      outdoorUnitId: "star-air-kontrol-sak-24adn2-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-central-ducted-24000-cfg-2",
      slug: "star-air-kontrol-sak-series-central-ducted-24000-cfg-2",
      modelId: "star-air-kontrol-sak-series-central-ducted-24000",
      outdoorUnitId: "star-air-kontrol-sak-24adn2-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-central-ducted-24000-cfg-3",
      slug: "star-air-kontrol-sak-series-central-ducted-24000-cfg-3",
      modelId: "star-air-kontrol-sak-series-central-ducted-24000",
      outdoorUnitId: "star-air-kontrol-sak-24fdn2-m18m",
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
      id: "star-air-kontrol-standard-wall-single-60000-cfg-1",
      slug: "star-air-kontrol-standard-wall-single-60000-cfg-1",
      modelId: "star-air-kontrol-standard-wall-single-60000",
      outdoorUnitId: "star-air-kontrol-sak-60adn2-m18m",
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
      id: "star-air-kontrol-standard-wall-single-60000-cfg-2",
      slug: "star-air-kontrol-standard-wall-single-60000-cfg-2",
      modelId: "star-air-kontrol-standard-wall-single-60000",
      outdoorUnitId: "star-air-kontrol-sak-60-dtms-220v",
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
      id: "star-air-kontrol-standard-wall-single-60000-cfg-3",
      slug: "star-air-kontrol-standard-wall-single-60000-cfg-3",
      modelId: "star-air-kontrol-standard-wall-single-60000",
      outdoorUnitId: "star-air-kontrol-sak-60-20muz-220-out",
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
      id: "star-air-kontrol-standard-wall-single-60000-cfg-4",
      slug: "star-air-kontrol-standard-wall-single-60000-cfg-4",
      modelId: "star-air-kontrol-standard-wall-single-60000",
      outdoorUnitId: "star-air-kontrol-sak-60-20muz-220-out",
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
      id: "star-air-kontrol-standard-wall-single-60000-cfg-5",
      slug: "star-air-kontrol-standard-wall-single-60000-cfg-5",
      modelId: "star-air-kontrol-standard-wall-single-60000",
      outdoorUnitId: "star-air-kontrol-sak-60adn2-m18m",
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
      id: "star-air-kontrol-standard-wall-single-60000-cfg-6",
      slug: "star-air-kontrol-standard-wall-single-60000-cfg-6",
      modelId: "star-air-kontrol-standard-wall-single-60000",
      outdoorUnitId: "star-air-kontrol-sak-60-dt2-220v",
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
      id: "star-air-kontrol-standard-wall-single-60000-cfg-7",
      slug: "star-air-kontrol-standard-wall-single-60000-cfg-7",
      modelId: "star-air-kontrol-standard-wall-single-60000",
      outdoorUnitId: "star-air-kontrol-sak-60-qz-220v",
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
      id: "star-air-kontrol-standard-wall-single-60000-cfg-8",
      slug: "star-air-kontrol-standard-wall-single-60000-cfg-8",
      modelId: "star-air-kontrol-standard-wall-single-60000",
      outdoorUnitId: "star-air-kontrol-sak-60-qz-220v",
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
      id: "star-air-kontrol-standard-wall-single-60000-cfg-9",
      slug: "star-air-kontrol-standard-wall-single-60000-cfg-9",
      modelId: "star-air-kontrol-standard-wall-single-60000",
      outdoorUnitId: "star-air-kontrol-sak-60-qz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-30000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-30000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-30000",
      outdoorUnitId: "star-air-kontrol-sak-27-22muz-220-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-30000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-30000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-30000",
      outdoorUnitId: "star-air-kontrol-sak-27-22muz-220-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-wall-single-48000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-48000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48cons-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-48000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-48000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48-dt2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-48000-cfg-3",
      slug: "star-air-kontrol-sak-series-wall-single-48000-cfg-3",
      modelId: "star-air-kontrol-sak-series-wall-single-48000",
      outdoorUnitId: "star-air-kontrol-sak-48-ct2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-9000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-9000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-9000",
      outdoorUnitId: "star-air-kontrol-sak-09-cc-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-9000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-9000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-9000",
      outdoorUnitId: "star-air-kontrol-sak-09-oc-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-9000-cfg-3",
      slug: "star-air-kontrol-sak-series-wall-single-9000-cfg-3",
      modelId: "star-air-kontrol-sak-series-wall-single-9000",
      outdoorUnitId: "star-air-kontrol-sak-09-wm2-115v",
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
      id: "star-air-kontrol-sak-series-wall-single-9000-cfg-4",
      slug: "star-air-kontrol-sak-series-wall-single-9000-cfg-4",
      modelId: "star-air-kontrol-sak-series-wall-single-9000",
      outdoorUnitId: "star-air-kontrol-sak-09-wm2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-9000-cfg-5",
      slug: "star-air-kontrol-sak-series-wall-single-9000-cfg-5",
      modelId: "star-air-kontrol-sak-series-wall-single-9000",
      outdoorUnitId: "star-air-kontrol-sak-09-dt2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-9000-cfg-6",
      slug: "star-air-kontrol-sak-series-wall-single-9000-cfg-6",
      modelId: "star-air-kontrol-sak-series-wall-single-9000",
      outdoorUnitId: "star-air-kontrol-sak-09-ct2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-9000-cfg-7",
      slug: "star-air-kontrol-sak-series-wall-single-9000-cfg-7",
      modelId: "star-air-kontrol-sak-series-wall-single-9000",
      outdoorUnitId: "star-air-kontrol-sak-09-oct2-220v",
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
      id: "star-air-kontrol-standard-wall-single-12000-cfg-1",
      slug: "star-air-kontrol-standard-wall-single-12000-cfg-1",
      modelId: "star-air-kontrol-standard-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-es-115v",
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
      id: "star-air-kontrol-standard-wall-single-12000-cfg-2",
      slug: "star-air-kontrol-standard-wall-single-12000-cfg-2",
      modelId: "star-air-kontrol-standard-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-es-220v",
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
      id: "star-air-kontrol-standard-wall-single-12000-cfg-3",
      slug: "star-air-kontrol-standard-wall-single-12000-cfg-3",
      modelId: "star-air-kontrol-standard-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-wm2-115v",
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
      id: "star-air-kontrol-standard-wall-single-12000-cfg-4",
      slug: "star-air-kontrol-standard-wall-single-12000-cfg-4",
      modelId: "star-air-kontrol-standard-wall-single-12000",
      outdoorUnitId: "star-air-kontrol-sak-12-wm2-220v",
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
      id: "star-air-kontrol-standard-wall-single-24000-cfg-1",
      slug: "star-air-kontrol-standard-wall-single-24000-cfg-1",
      modelId: "star-air-kontrol-standard-wall-single-24000",
      outdoorUnitId: "star-air-kontrol-sak-24-es-220v",
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
      id: "star-air-kontrol-standard-wall-single-30000-cfg-1",
      slug: "star-air-kontrol-standard-wall-single-30000-cfg-1",
      modelId: "star-air-kontrol-standard-wall-single-30000",
      outdoorUnitId: "star-air-kontrol-sak-30-wm2-220v",
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
      id: "star-air-kontrol-standard-wall-single-30000-cfg-2",
      slug: "star-air-kontrol-standard-wall-single-30000-cfg-2",
      modelId: "star-air-kontrol-standard-wall-single-30000",
      outdoorUnitId: "star-air-kontrol-sak-36fdn2-m18m",
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
      id: "star-air-kontrol-sak-series-wall-single-6000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-6000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-6000",
      outdoorUnitId: "star-air-kontrol-sak-06-dt2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-6000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-6000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-6000",
      outdoorUnitId: "star-air-kontrol-sak-06-oct2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-36000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-36000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-ct2-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-36000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-36000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-qz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-36000-cfg-3",
      slug: "star-air-kontrol-sak-series-wall-single-36000-cfg-3",
      modelId: "star-air-kontrol-sak-series-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-qz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-36000-cfg-4",
      slug: "star-air-kontrol-sak-series-wall-single-36000-cfg-4",
      modelId: "star-air-kontrol-sak-series-wall-single-36000",
      outdoorUnitId: "star-air-kontrol-sak-36-qz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-42000-cfg-1",
      slug: "star-air-kontrol-sak-series-wall-single-42000-cfg-1",
      modelId: "star-air-kontrol-sak-series-wall-single-42000",
      outdoorUnitId: "star-air-kontrol-sak-48-qz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-42000-cfg-2",
      slug: "star-air-kontrol-sak-series-wall-single-42000-cfg-2",
      modelId: "star-air-kontrol-sak-series-wall-single-42000",
      outdoorUnitId: "star-air-kontrol-sak-48-qz-220v",
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
      id: "star-air-kontrol-sak-series-wall-single-42000-cfg-3",
      slug: "star-air-kontrol-sak-series-wall-single-42000-cfg-3",
      modelId: "star-air-kontrol-sak-series-wall-single-42000",
      outdoorUnitId: "star-air-kontrol-sak-48-qz-220v",
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
      id: "star-air-kontrol-sak-series-central-ducted-18000-cfg-1",
      slug: "star-air-kontrol-sak-series-central-ducted-18000-cfg-1",
      modelId: "star-air-kontrol-sak-series-central-ducted-18000",
      outdoorUnitId: "star-air-kontrol-sak-18fdn2-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "star-air-kontrol-sak-series-central-ducted-48000-cfg-1",
      slug: "star-air-kontrol-sak-series-central-ducted-48000-cfg-1",
      modelId: "star-air-kontrol-sak-series-central-ducted-48000",
      outdoorUnitId: "star-air-kontrol-sak-48fdn2-m18m",
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
      id: "star-air-kontrol-sak-series-central-ducted-48000-cfg-2",
      slug: "star-air-kontrol-sak-series-central-ducted-48000-cfg-2",
      modelId: "star-air-kontrol-sak-series-central-ducted-48000",
      outdoorUnitId: "star-air-kontrol-sak-60fdn2-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "star-air-kontrol-standard-wall-single-18000-cfg-1",
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
      configurationId: "star-air-kontrol-standard-wall-single-18000-cfg-2",
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
      configurationId: "star-air-kontrol-standard-wall-single-18000-cfg-3",
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
      configurationId: "star-air-kontrol-standard-wall-single-18000-cfg-4",
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
      configurationId: "star-air-kontrol-standard-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-sak-series-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-sak-series-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-sak-series-wall-single-12000-cfg-3",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-12000-cfg-4",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-12000-cfg-5",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-12000-cfg-6",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-12000-cfg-7",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-12000-cfg-8",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-12000-cfg-9",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-2",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-3",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-4",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-5",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-6",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-7",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-8",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-9",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-10",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-11",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-18000-cfg-12",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-2",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-3",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-4",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-5",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-6",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-7",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-8",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-9",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-10",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-11",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-24000-cfg-12",
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
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-1",
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
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-2",
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
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-4",
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
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-5",
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
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-6",
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
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-7",
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
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-9",
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
      configurationId: "star-air-kontrol-standard-wall-single-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-sak-series-wall-single-15000-cfg-1",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-15000-cfg-2",
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
      configurationId: "star-air-kontrol-standard-wall-single-48000-cfg-1",
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
      configurationId: "star-air-kontrol-standard-wall-single-48000-cfg-2",
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
      configurationId: "star-air-kontrol-standard-wall-single-48000-cfg-3",
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
      configurationId: "star-air-kontrol-standard-wall-single-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-standard-wall-single-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-standard-wall-single-48000-cfg-6",
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
      configurationId: "star-air-kontrol-standard-wall-single-48000-cfg-7",
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
      configurationId: "star-air-kontrol-standard-wall-single-48000-cfg-8",
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
      configurationId: "star-air-kontrol-sak-series-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-sak-series-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "star-air-kontrol-sak-series-central-ducted-24000-cfg-3",
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
      configurationId: "star-air-kontrol-standard-wall-single-60000-cfg-1",
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
      configurationId: "star-air-kontrol-standard-wall-single-60000-cfg-2",
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
      configurationId: "star-air-kontrol-standard-wall-single-60000-cfg-3",
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
      configurationId: "star-air-kontrol-standard-wall-single-60000-cfg-4",
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
      configurationId: "star-air-kontrol-standard-wall-single-60000-cfg-5",
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
      configurationId: "star-air-kontrol-standard-wall-single-60000-cfg-6",
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
      configurationId: "star-air-kontrol-standard-wall-single-60000-cfg-7",
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
      configurationId: "star-air-kontrol-standard-wall-single-60000-cfg-8",
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
      configurationId: "star-air-kontrol-standard-wall-single-60000-cfg-9",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-30000-cfg-1",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-30000-cfg-2",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-48000-cfg-1",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-48000-cfg-2",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-48000-cfg-3",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-9000-cfg-1",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-9000-cfg-2",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-9000-cfg-3",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-9000-cfg-4",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-9000-cfg-5",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-9000-cfg-6",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-9000-cfg-7",
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
      configurationId: "star-air-kontrol-standard-wall-single-12000-cfg-1",
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
      configurationId: "star-air-kontrol-standard-wall-single-12000-cfg-2",
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
      configurationId: "star-air-kontrol-standard-wall-single-12000-cfg-3",
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
      configurationId: "star-air-kontrol-standard-wall-single-12000-cfg-4",
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
      configurationId: "star-air-kontrol-standard-wall-single-24000-cfg-1",
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
      configurationId: "star-air-kontrol-standard-wall-single-30000-cfg-1",
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
      configurationId: "star-air-kontrol-standard-wall-single-30000-cfg-2",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-6000-cfg-1",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-6000-cfg-2",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-36000-cfg-1",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-36000-cfg-2",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-36000-cfg-3",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-36000-cfg-4",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-42000-cfg-1",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-42000-cfg-2",
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
      configurationId: "star-air-kontrol-sak-series-wall-single-42000-cfg-3",
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
      configurationId: "star-air-kontrol-sak-series-central-ducted-18000-cfg-1",
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
      configurationId: "star-air-kontrol-sak-series-central-ducted-48000-cfg-1",
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
      configurationId: "star-air-kontrol-sak-series-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
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
