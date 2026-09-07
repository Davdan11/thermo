import type { BrandDataset } from "../../types";

export const chDataset: BrandDataset = {
  brand: {
    id: "c-h",
    slug: "c-h",
    name: "C&H",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "c-h-standard",
      slug: "c-h-standard",
      name: "Standard",
      brandId: "c-h",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series",
      slug: "c-h-ch-series",
      name: "CH series",
      brandId: "c-h",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "c-h-standard-wall-single-12000",
      slug: "c-h-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "c-h-standard",
      brandId: "c-h",
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
      id: "c-h-standard-wall-single-9000",
      slug: "c-h-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "c-h-standard",
      brandId: "c-h",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 7200,
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
      id: "c-h-standard-wall-single-18000",
      slug: "c-h-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "c-h-standard",
      brandId: "c-h",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 10400,
      heatingCapacity5FMaxBtu: 12000,
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
      id: "c-h-standard-wall-single-24000",
      slug: "c-h-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "c-h-standard",
      brandId: "c-h",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 17200,
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
      id: "c-h-standard-wall-single-36000",
      slug: "c-h-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "c-h-standard",
      brandId: "c-h",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 27600,
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
      id: "c-h-standard-wall-single-48000",
      slug: "c-h-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "c-h-standard",
      brandId: "c-h",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 28000,
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
      id: "c-h-standard-wall-single-60000",
      slug: "c-h-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "c-h-standard",
      brandId: "c-h",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 34400,
      heatingCapacity5FMaxBtu: 37600,
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
      id: "c-h-standard-wall-single-30000",
      slug: "c-h-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "c-h-standard",
      brandId: "c-h",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 17200,
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
      id: "c-h-ch-series-wall-single-36000",
      slug: "c-h-ch-series-wall-single-36000",
      name: "CH series 36 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 36k",
      normalizedModelNumber: "ch-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 16.5,
      seer2Max: 23.9,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.7,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-standard-wall-single-20000",
      slug: "c-h-standard-wall-single-20000",
      name: "Standard 20 000 BTU",
      seriesId: "c-h-standard",
      brandId: "c-h",
      modelNumber: "Standard 20k",
      normalizedModelNumber: "standard-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 17500,
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
      id: "c-h-ch-series-wall-single-6000",
      slug: "c-h-ch-series-wall-single-6000",
      name: "CH series 6 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 6k",
      normalizedModelNumber: "ch-series-6000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      heatingCapacity5FMinBtu: 5900,
      heatingCapacity5FMaxBtu: 8500,
      seer2Min: 21.5,
      seer2Max: 26.5,
      hspf2Min: 9,
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
      id: "c-h-ch-series-wall-single-9000",
      slug: "c-h-ch-series-wall-single-9000",
      name: "CH series 9 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 9k",
      normalizedModelNumber: "ch-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 5900,
      heatingCapacity5FMaxBtu: 10100,
      seer2Min: 19.2,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 12.3,
      cop5FMin: 1.59,
      cop5FMax: 2.25,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-12000",
      slug: "c-h-ch-series-wall-single-12000",
      name: "CH series 12 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 12k",
      normalizedModelNumber: "ch-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7600,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: 19,
      seer2Max: 25.5,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.41,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-18000",
      slug: "c-h-ch-series-wall-single-18000",
      name: "CH series 18 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 18k",
      normalizedModelNumber: "ch-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 10900,
      heatingCapacity5FMaxBtu: 17600,
      seer2Min: 18,
      seer2Max: 25,
      hspf2Min: 8.7,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-24000",
      slug: "c-h-ch-series-wall-single-24000",
      name: "CH series 24 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 24k",
      normalizedModelNumber: "ch-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 19,
      seer2Max: 23,
      hspf2Min: 8.5,
      hspf2Max: 11.5,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-15000",
      slug: "c-h-ch-series-wall-single-15000",
      name: "CH series 15 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 15k",
      normalizedModelNumber: "ch-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 20,
      seer2Max: 22.4,
      hspf2Min: 8.9,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 2.32,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-48000",
      slug: "c-h-ch-series-wall-single-48000",
      name: "CH series 48 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 48k",
      normalizedModelNumber: "ch-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16.8,
      seer2Max: 23.4,
      hspf2Min: 8.7,
      hspf2Max: 11,
      cop5FMin: 1.75,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-30000",
      slug: "c-h-ch-series-wall-single-30000",
      name: "CH series 30 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 30k",
      normalizedModelNumber: "ch-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 19,
      seer2Max: 24.6,
      hspf2Min: 9.2,
      hspf2Max: 10.6,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-60000",
      slug: "c-h-ch-series-wall-single-60000",
      name: "CH series 60 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 60k",
      normalizedModelNumber: "ch-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 34400,
      heatingCapacity5FMaxBtu: 35200,
      seer2Min: 18.8,
      seer2Max: 22,
      hspf2Min: 9.3,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-20000",
      slug: "c-h-ch-series-wall-single-20000",
      name: "CH series 20 000 BTU",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series 20k",
      normalizedModelNumber: "ch-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
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
    }
  ],
  outdoorUnits: [
    {
      id: "c-h-ch-12sph-115vo",
      modelNumber: "CH-12SPH-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-12dkt230vo",
      modelNumber: "CH-12DKT230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-12sph-230vo",
      modelNumber: "CH-12SPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp12sph230vo",
      modelNumber: "CH-HYP12SPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-sr09sph-115vo",
      modelNumber: "CH-SR09SPH-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny12mia-115vo",
      modelNumber: "CH-NY12MIA-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny12mia-230vo",
      modelNumber: "CH-NY12MIA-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-09sph-230vo",
      modelNumber: "CH-09SPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-09lcu-o",
      modelNumber: "CH-09LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-09dkt230vo",
      modelNumber: "CH-09DKT230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-09mia115vo",
      modelNumber: "CH-09MIA115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp09sph230vo",
      modelNumber: "CH-HYP09SPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ng09mia115vo",
      modelNumber: "CH-NG09MIA115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-18sph-230vo",
      modelNumber: "CH-18SPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-18lcu-o",
      modelNumber: "CH-18LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch18msph230vo",
      modelNumber: "CH18MSPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ng18mia230vo",
      modelNumber: "CH-NG18MIA230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-24lcdtu-o",
      modelNumber: "CH-24LCDTU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-24lcu-o",
      modelNumber: "CH-24LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-24sph-230vo",
      modelNumber: "CH-24SPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-24dkt230vo",
      modelNumber: "CH-24DKT230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp24sph230vo",
      modelNumber: "CH-HYP24SPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny24mia-230vo",
      modelNumber: "CH-NY24MIA-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-36lcdtu-o",
      modelNumber: "CH-36LCDTU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-36lcu-o",
      modelNumber: "CH-36LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp36msph-230vo",
      modelNumber: "CH-HYP36MSPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch36msph230vo",
      modelNumber: "CH36MSPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-nh36lcuo",
      modelNumber: "CH-NH36LCUO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-el36-230vo",
      modelNumber: "CH-EL36-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-n36lcu-230vo",
      modelNumber: "CH-N36LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-48lcdtu-o",
      modelNumber: "CH-48LCDTU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-48lcu-o",
      modelNumber: "CH-48LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-60lcu-o",
      modelNumber: "CH-60LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch48msph230vo",
      modelNumber: "CH48MSPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp48lcuo",
      modelNumber: "CH-HYP48LCUO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp48msph-230vo",
      modelNumber: "CH-HYP48MSPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-nh48lcuo",
      modelNumber: "CH-NH48LCUO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-n60lcu-230vo",
      modelNumber: "CH-N60LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-60lcdtu-o",
      modelNumber: "CH-60LCDTU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-55mes-230vo",
      modelNumber: "CH-55MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch28msph230vo",
      modelNumber: "CH28MSPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp28msph-230vo",
      modelNumber: "CH-HYP28MSPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp36lcuo",
      modelNumber: "CH-HYP36LCUO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-nhpr36lcu-230vo",
      modelNumber: "CH-NHPR36LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-36mes-230vo",
      modelNumber: "CH-36MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr36m-230vo",
      modelNumber: "CH-HPR36M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp36m-230vo",
      modelNumber: "CH-RHP36M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr06f9-230vo",
      modelNumber: "CH-HPR06F9-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-06olvwm-115vo",
      modelNumber: "CH-06OLVWM-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny06mia-115vo",
      modelNumber: "CH-NY06MIA-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es06-115vo",
      modelNumber: "CH-ES06-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr09-230vo",
      modelNumber: "CH-HPR09-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny09mia-115vo",
      modelNumber: "CH-NY09MIA-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es09-230vo",
      modelNumber: "CH-ES09-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny09mia-230vo",
      modelNumber: "CH-NY09MIA-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es09-115vo",
      modelNumber: "CH-ES09-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr12-230vo",
      modelNumber: "CH-HPR12-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es12-230vo",
      modelNumber: "CH-ES12-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es12-115vo",
      modelNumber: "CH-ES12-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr18-230vo",
      modelNumber: "CH-HPR18-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny18mia-230vo",
      modelNumber: "CH-NY18MIA-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es18-230vo",
      modelNumber: "CH-ES18-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-18mes-230vo",
      modelNumber: "CH-18MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr19m-230vo",
      modelNumber: "CH-HPR19M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp19m-230vo",
      modelNumber: "CH-RHP19M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr24-230vo",
      modelNumber: "CH-HPR24-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es24-230vo",
      modelNumber: "CH-ES24-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp28m-230vo",
      modelNumber: "CH-RHP28M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-n48lcu-230vo",
      modelNumber: "CH-N48LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-nhpr48lcu-230vo",
      modelNumber: "CH-NHPR48LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-48mes-230vo",
      modelNumber: "CH-48MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr48m-230vo",
      modelNumber: "CH-HPR48M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp48m-230vo",
      modelNumber: "CH-RHP48M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp55m-230vo",
      modelNumber: "CH-RHP55M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-28mes-230vo",
      modelNumber: "CH-28MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr28m-230vo",
      modelNumber: "CH-HPR28M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr55m-230vo",
      modelNumber: "CH-HPR55M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "c-h-standard-wall-single-12000-cfg-1",
      slug: "c-h-standard-wall-single-12000-cfg-1",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-12sph-115vo",
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
      id: "c-h-standard-wall-single-12000-cfg-2",
      slug: "c-h-standard-wall-single-12000-cfg-2",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-12dkt230vo",
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
      id: "c-h-standard-wall-single-12000-cfg-3",
      slug: "c-h-standard-wall-single-12000-cfg-3",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-12sph-230vo",
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
      id: "c-h-standard-wall-single-12000-cfg-4",
      slug: "c-h-standard-wall-single-12000-cfg-4",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-12dkt230vo",
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
      id: "c-h-standard-wall-single-12000-cfg-5",
      slug: "c-h-standard-wall-single-12000-cfg-5",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-12dkt230vo",
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
      id: "c-h-standard-wall-single-12000-cfg-6",
      slug: "c-h-standard-wall-single-12000-cfg-6",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-12sph-230vo",
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
      id: "c-h-standard-wall-single-12000-cfg-7",
      slug: "c-h-standard-wall-single-12000-cfg-7",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-12sph-230vo",
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
      id: "c-h-standard-wall-single-12000-cfg-8",
      slug: "c-h-standard-wall-single-12000-cfg-8",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-hyp12sph230vo",
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
      id: "c-h-standard-wall-single-12000-cfg-9",
      slug: "c-h-standard-wall-single-12000-cfg-9",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-sr09sph-115vo",
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
      id: "c-h-standard-wall-single-12000-cfg-10",
      slug: "c-h-standard-wall-single-12000-cfg-10",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-12sph-115vo",
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
      id: "c-h-standard-wall-single-12000-cfg-11",
      slug: "c-h-standard-wall-single-12000-cfg-11",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-hyp12sph230vo",
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
      id: "c-h-standard-wall-single-12000-cfg-12",
      slug: "c-h-standard-wall-single-12000-cfg-12",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-12sph-230vo",
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
      id: "c-h-standard-wall-single-12000-cfg-13",
      slug: "c-h-standard-wall-single-12000-cfg-13",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-ny12mia-115vo",
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
      id: "c-h-standard-wall-single-12000-cfg-14",
      slug: "c-h-standard-wall-single-12000-cfg-14",
      modelId: "c-h-standard-wall-single-12000",
      outdoorUnitId: "c-h-ch-ny12mia-230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-1",
      slug: "c-h-standard-wall-single-9000-cfg-1",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-2",
      slug: "c-h-standard-wall-single-9000-cfg-2",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09lcu-o",
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
      id: "c-h-standard-wall-single-9000-cfg-3",
      slug: "c-h-standard-wall-single-9000-cfg-3",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09dkt230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-4",
      slug: "c-h-standard-wall-single-9000-cfg-4",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-sr09sph-115vo",
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
      id: "c-h-standard-wall-single-9000-cfg-5",
      slug: "c-h-standard-wall-single-9000-cfg-5",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09mia115vo",
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
      id: "c-h-standard-wall-single-9000-cfg-6",
      slug: "c-h-standard-wall-single-9000-cfg-6",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-7",
      slug: "c-h-standard-wall-single-9000-cfg-7",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-8",
      slug: "c-h-standard-wall-single-9000-cfg-8",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09dkt230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-9",
      slug: "c-h-standard-wall-single-9000-cfg-9",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-10",
      slug: "c-h-standard-wall-single-9000-cfg-10",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-hyp09sph230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-11",
      slug: "c-h-standard-wall-single-9000-cfg-11",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-12",
      slug: "c-h-standard-wall-single-9000-cfg-12",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-hyp09sph230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-13",
      slug: "c-h-standard-wall-single-9000-cfg-13",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-14",
      slug: "c-h-standard-wall-single-9000-cfg-14",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-9000-cfg-15",
      slug: "c-h-standard-wall-single-9000-cfg-15",
      modelId: "c-h-standard-wall-single-9000",
      outdoorUnitId: "c-h-ch-ng09mia115vo",
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
      id: "c-h-standard-wall-single-18000-cfg-1",
      slug: "c-h-standard-wall-single-18000-cfg-1",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-18000-cfg-2",
      slug: "c-h-standard-wall-single-18000-cfg-2",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-18lcu-o",
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
      id: "c-h-standard-wall-single-18000-cfg-3",
      slug: "c-h-standard-wall-single-18000-cfg-3",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-18000-cfg-4",
      slug: "c-h-standard-wall-single-18000-cfg-4",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-18000-cfg-5",
      slug: "c-h-standard-wall-single-18000-cfg-5",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-18000-cfg-6",
      slug: "c-h-standard-wall-single-18000-cfg-6",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch18msph230vo",
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
      id: "c-h-standard-wall-single-18000-cfg-7",
      slug: "c-h-standard-wall-single-18000-cfg-7",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-18000-cfg-8",
      slug: "c-h-standard-wall-single-18000-cfg-8",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-18000-cfg-9",
      slug: "c-h-standard-wall-single-18000-cfg-9",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-18000-cfg-10",
      slug: "c-h-standard-wall-single-18000-cfg-10",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-18000-cfg-11",
      slug: "c-h-standard-wall-single-18000-cfg-11",
      modelId: "c-h-standard-wall-single-18000",
      outdoorUnitId: "c-h-ch-ng18mia230vo",
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
      id: "c-h-standard-wall-single-24000-cfg-1",
      slug: "c-h-standard-wall-single-24000-cfg-1",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24lcdtu-o",
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
      id: "c-h-standard-wall-single-24000-cfg-2",
      slug: "c-h-standard-wall-single-24000-cfg-2",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24lcu-o",
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
      id: "c-h-standard-wall-single-24000-cfg-3",
      slug: "c-h-standard-wall-single-24000-cfg-3",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-24000-cfg-4",
      slug: "c-h-standard-wall-single-24000-cfg-4",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-24000-cfg-5",
      slug: "c-h-standard-wall-single-24000-cfg-5",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24dkt230vo",
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
      id: "c-h-standard-wall-single-24000-cfg-6",
      slug: "c-h-standard-wall-single-24000-cfg-6",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-24000-cfg-7",
      slug: "c-h-standard-wall-single-24000-cfg-7",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-24000-cfg-8",
      slug: "c-h-standard-wall-single-24000-cfg-8",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24lcu-o",
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
      id: "c-h-standard-wall-single-24000-cfg-9",
      slug: "c-h-standard-wall-single-24000-cfg-9",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-hyp24sph230vo",
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
      id: "c-h-standard-wall-single-24000-cfg-10",
      slug: "c-h-standard-wall-single-24000-cfg-10",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-24000-cfg-11",
      slug: "c-h-standard-wall-single-24000-cfg-11",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-24000-cfg-12",
      slug: "c-h-standard-wall-single-24000-cfg-12",
      modelId: "c-h-standard-wall-single-24000",
      outdoorUnitId: "c-h-ch-ny24mia-230vo",
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
      id: "c-h-standard-wall-single-36000-cfg-1",
      slug: "c-h-standard-wall-single-36000-cfg-1",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-36lcdtu-o",
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
      id: "c-h-standard-wall-single-36000-cfg-2",
      slug: "c-h-standard-wall-single-36000-cfg-2",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-36lcu-o",
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
      id: "c-h-standard-wall-single-36000-cfg-3",
      slug: "c-h-standard-wall-single-36000-cfg-3",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-36lcu-o",
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
      id: "c-h-standard-wall-single-36000-cfg-4",
      slug: "c-h-standard-wall-single-36000-cfg-4",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-hyp36msph-230vo",
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
      id: "c-h-standard-wall-single-36000-cfg-5",
      slug: "c-h-standard-wall-single-36000-cfg-5",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-hyp36msph-230vo",
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
      id: "c-h-standard-wall-single-36000-cfg-6",
      slug: "c-h-standard-wall-single-36000-cfg-6",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch36msph230vo",
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
      id: "c-h-standard-wall-single-36000-cfg-7",
      slug: "c-h-standard-wall-single-36000-cfg-7",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-36lcu-o",
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
      id: "c-h-standard-wall-single-36000-cfg-8",
      slug: "c-h-standard-wall-single-36000-cfg-8",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch36msph230vo",
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
      id: "c-h-standard-wall-single-36000-cfg-9",
      slug: "c-h-standard-wall-single-36000-cfg-9",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-nh36lcuo",
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
      id: "c-h-standard-wall-single-36000-cfg-10",
      slug: "c-h-standard-wall-single-36000-cfg-10",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-el36-230vo",
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
      id: "c-h-standard-wall-single-36000-cfg-11",
      slug: "c-h-standard-wall-single-36000-cfg-11",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-el36-230vo",
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
      id: "c-h-standard-wall-single-36000-cfg-12",
      slug: "c-h-standard-wall-single-36000-cfg-12",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-n36lcu-230vo",
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
      id: "c-h-standard-wall-single-36000-cfg-13",
      slug: "c-h-standard-wall-single-36000-cfg-13",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-n36lcu-230vo",
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
      id: "c-h-standard-wall-single-36000-cfg-14",
      slug: "c-h-standard-wall-single-36000-cfg-14",
      modelId: "c-h-standard-wall-single-36000",
      outdoorUnitId: "c-h-ch-n36lcu-230vo",
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
      id: "c-h-standard-wall-single-48000-cfg-1",
      slug: "c-h-standard-wall-single-48000-cfg-1",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-48lcdtu-o",
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
      id: "c-h-standard-wall-single-48000-cfg-2",
      slug: "c-h-standard-wall-single-48000-cfg-2",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-48000-cfg-3",
      slug: "c-h-standard-wall-single-48000-cfg-3",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-48000-cfg-4",
      slug: "c-h-standard-wall-single-48000-cfg-4",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-60lcu-o",
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
      id: "c-h-standard-wall-single-48000-cfg-5",
      slug: "c-h-standard-wall-single-48000-cfg-5",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-48000-cfg-6",
      slug: "c-h-standard-wall-single-48000-cfg-6",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch48msph230vo",
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
      id: "c-h-standard-wall-single-48000-cfg-7",
      slug: "c-h-standard-wall-single-48000-cfg-7",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-48000-cfg-8",
      slug: "c-h-standard-wall-single-48000-cfg-8",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-48000-cfg-9",
      slug: "c-h-standard-wall-single-48000-cfg-9",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-48000-cfg-10",
      slug: "c-h-standard-wall-single-48000-cfg-10",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-48000-cfg-11",
      slug: "c-h-standard-wall-single-48000-cfg-11",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-48000-cfg-12",
      slug: "c-h-standard-wall-single-48000-cfg-12",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-60lcu-o",
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
      id: "c-h-standard-wall-single-48000-cfg-13",
      slug: "c-h-standard-wall-single-48000-cfg-13",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-48000-cfg-14",
      slug: "c-h-standard-wall-single-48000-cfg-14",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-48000-cfg-15",
      slug: "c-h-standard-wall-single-48000-cfg-15",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch48msph230vo",
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
      id: "c-h-standard-wall-single-48000-cfg-16",
      slug: "c-h-standard-wall-single-48000-cfg-16",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-60lcu-o",
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
      id: "c-h-standard-wall-single-48000-cfg-17",
      slug: "c-h-standard-wall-single-48000-cfg-17",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-hyp48msph-230vo",
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
      id: "c-h-standard-wall-single-48000-cfg-18",
      slug: "c-h-standard-wall-single-48000-cfg-18",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-hyp48msph-230vo",
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
      id: "c-h-standard-wall-single-48000-cfg-19",
      slug: "c-h-standard-wall-single-48000-cfg-19",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-nh48lcuo",
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
      id: "c-h-standard-wall-single-48000-cfg-20",
      slug: "c-h-standard-wall-single-48000-cfg-20",
      modelId: "c-h-standard-wall-single-48000",
      outdoorUnitId: "c-h-ch-n60lcu-230vo",
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
      id: "c-h-standard-wall-single-60000-cfg-1",
      slug: "c-h-standard-wall-single-60000-cfg-1",
      modelId: "c-h-standard-wall-single-60000",
      outdoorUnitId: "c-h-ch-60lcdtu-o",
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
      id: "c-h-standard-wall-single-60000-cfg-2",
      slug: "c-h-standard-wall-single-60000-cfg-2",
      modelId: "c-h-standard-wall-single-60000",
      outdoorUnitId: "c-h-ch-60lcu-o",
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
      id: "c-h-standard-wall-single-60000-cfg-3",
      slug: "c-h-standard-wall-single-60000-cfg-3",
      modelId: "c-h-standard-wall-single-60000",
      outdoorUnitId: "c-h-ch-n60lcu-230vo",
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
      id: "c-h-standard-wall-single-60000-cfg-4",
      slug: "c-h-standard-wall-single-60000-cfg-4",
      modelId: "c-h-standard-wall-single-60000",
      outdoorUnitId: "c-h-ch-55mes-230vo",
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
      id: "c-h-standard-wall-single-60000-cfg-5",
      slug: "c-h-standard-wall-single-60000-cfg-5",
      modelId: "c-h-standard-wall-single-60000",
      outdoorUnitId: "c-h-ch-55mes-230vo",
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
      id: "c-h-standard-wall-single-60000-cfg-6",
      slug: "c-h-standard-wall-single-60000-cfg-6",
      modelId: "c-h-standard-wall-single-60000",
      outdoorUnitId: "c-h-ch-55mes-230vo",
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
      id: "c-h-standard-wall-single-30000-cfg-1",
      slug: "c-h-standard-wall-single-30000-cfg-1",
      modelId: "c-h-standard-wall-single-30000",
      outdoorUnitId: "c-h-ch28msph230vo",
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
      id: "c-h-standard-wall-single-30000-cfg-2",
      slug: "c-h-standard-wall-single-30000-cfg-2",
      modelId: "c-h-standard-wall-single-30000",
      outdoorUnitId: "c-h-ch-hyp28msph-230vo",
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
      id: "c-h-standard-wall-single-30000-cfg-3",
      slug: "c-h-standard-wall-single-30000-cfg-3",
      modelId: "c-h-standard-wall-single-30000",
      outdoorUnitId: "c-h-ch-hyp28msph-230vo",
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
      id: "c-h-ch-series-wall-single-36000-cfg-1",
      slug: "c-h-ch-series-wall-single-36000-cfg-1",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-hyp36lcuo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-36000-cfg-2",
      slug: "c-h-ch-series-wall-single-36000-cfg-2",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-nhpr36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-36000-cfg-3",
      slug: "c-h-ch-series-wall-single-36000-cfg-3",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-nhpr36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-36000-cfg-4",
      slug: "c-h-ch-series-wall-single-36000-cfg-4",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-nhpr36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-36000-cfg-5",
      slug: "c-h-ch-series-wall-single-36000-cfg-5",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-36mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.9,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-36000-cfg-6",
      slug: "c-h-ch-series-wall-single-36000-cfg-6",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-hpr36m-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-36000-cfg-7",
      slug: "c-h-ch-series-wall-single-36000-cfg-7",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-hpr36m-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-36000-cfg-8",
      slug: "c-h-ch-series-wall-single-36000-cfg-8",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-hpr36m-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.6,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-36000-cfg-9",
      slug: "c-h-ch-series-wall-single-36000-cfg-9",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-rhp36m-230vo",
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
      id: "c-h-ch-series-wall-single-36000-cfg-10",
      slug: "c-h-ch-series-wall-single-36000-cfg-10",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-rhp36m-230vo",
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
      id: "c-h-ch-series-wall-single-36000-cfg-11",
      slug: "c-h-ch-series-wall-single-36000-cfg-11",
      modelId: "c-h-ch-series-wall-single-36000",
      outdoorUnitId: "c-h-ch-rhp36m-230vo",
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
      id: "c-h-standard-wall-single-20000-cfg-1",
      slug: "c-h-standard-wall-single-20000-cfg-1",
      modelId: "c-h-standard-wall-single-20000",
      outdoorUnitId: "c-h-ch-hyp24sph230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-standard-wall-single-20000-cfg-2",
      slug: "c-h-standard-wall-single-20000-cfg-2",
      modelId: "c-h-standard-wall-single-20000",
      outdoorUnitId: "c-h-ch-24lcu-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-6000-cfg-1",
      slug: "c-h-ch-series-wall-single-6000-cfg-1",
      modelId: "c-h-ch-series-wall-single-6000",
      outdoorUnitId: "c-h-ch-hpr06f9-230vo",
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
      id: "c-h-ch-series-wall-single-6000-cfg-2",
      slug: "c-h-ch-series-wall-single-6000-cfg-2",
      modelId: "c-h-ch-series-wall-single-6000",
      outdoorUnitId: "c-h-ch-hpr06f9-230vo",
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
      id: "c-h-ch-series-wall-single-6000-cfg-3",
      slug: "c-h-ch-series-wall-single-6000-cfg-3",
      modelId: "c-h-ch-series-wall-single-6000",
      outdoorUnitId: "c-h-ch-06olvwm-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-6000-cfg-4",
      slug: "c-h-ch-series-wall-single-6000-cfg-4",
      modelId: "c-h-ch-series-wall-single-6000",
      outdoorUnitId: "c-h-ch-ny06mia-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-6000-cfg-5",
      slug: "c-h-ch-series-wall-single-6000-cfg-5",
      modelId: "c-h-ch-series-wall-single-6000",
      outdoorUnitId: "c-h-ch-hpr06f9-230vo",
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
      id: "c-h-ch-series-wall-single-6000-cfg-6",
      slug: "c-h-ch-series-wall-single-6000-cfg-6",
      modelId: "c-h-ch-series-wall-single-6000",
      outdoorUnitId: "c-h-ch-es06-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-9000-cfg-1",
      slug: "c-h-ch-series-wall-single-9000-cfg-1",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-2",
      slug: "c-h-ch-series-wall-single-9000-cfg-2",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-ny09mia-115vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-3",
      slug: "c-h-ch-series-wall-single-9000-cfg-3",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-es09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-9000-cfg-4",
      slug: "c-h-ch-series-wall-single-9000-cfg-4",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-5",
      slug: "c-h-ch-series-wall-single-9000-cfg-5",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-ny09mia-115vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-6",
      slug: "c-h-ch-series-wall-single-9000-cfg-6",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-ny09mia-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-9000-cfg-7",
      slug: "c-h-ch-series-wall-single-9000-cfg-7",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-ny09mia-230vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-8",
      slug: "c-h-ch-series-wall-single-9000-cfg-8",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-es09-230vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-9",
      slug: "c-h-ch-series-wall-single-9000-cfg-9",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-es09-230vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-10",
      slug: "c-h-ch-series-wall-single-9000-cfg-10",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-11",
      slug: "c-h-ch-series-wall-single-9000-cfg-11",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-12",
      slug: "c-h-ch-series-wall-single-9000-cfg-12",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-es09-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-9000-cfg-13",
      slug: "c-h-ch-series-wall-single-9000-cfg-13",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-14",
      slug: "c-h-ch-series-wall-single-9000-cfg-14",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-es09-230vo",
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
      id: "c-h-ch-series-wall-single-9000-cfg-15",
      slug: "c-h-ch-series-wall-single-9000-cfg-15",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-es09-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-9000-cfg-16",
      slug: "c-h-ch-series-wall-single-9000-cfg-16",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-es09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-9000-cfg-17",
      slug: "c-h-ch-series-wall-single-9000-cfg-17",
      modelId: "c-h-ch-series-wall-single-9000",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-1",
      slug: "c-h-ch-series-wall-single-12000-cfg-1",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-2",
      slug: "c-h-ch-series-wall-single-12000-cfg-2",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-es12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-12000-cfg-3",
      slug: "c-h-ch-series-wall-single-12000-cfg-3",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-4",
      slug: "c-h-ch-series-wall-single-12000-cfg-4",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-es12-115vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-5",
      slug: "c-h-ch-series-wall-single-12000-cfg-5",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-6",
      slug: "c-h-ch-series-wall-single-12000-cfg-6",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-7",
      slug: "c-h-ch-series-wall-single-12000-cfg-7",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-es12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-12000-cfg-8",
      slug: "c-h-ch-series-wall-single-12000-cfg-8",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-9",
      slug: "c-h-ch-series-wall-single-12000-cfg-9",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-10",
      slug: "c-h-ch-series-wall-single-12000-cfg-10",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-12000-cfg-11",
      slug: "c-h-ch-series-wall-single-12000-cfg-11",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-12",
      slug: "c-h-ch-series-wall-single-12000-cfg-12",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-13",
      slug: "c-h-ch-series-wall-single-12000-cfg-13",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-es12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-12000-cfg-14",
      slug: "c-h-ch-series-wall-single-12000-cfg-14",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-15",
      slug: "c-h-ch-series-wall-single-12000-cfg-15",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-es12-115vo",
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
      id: "c-h-ch-series-wall-single-12000-cfg-16",
      slug: "c-h-ch-series-wall-single-12000-cfg-16",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-es12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-12000-cfg-17",
      slug: "c-h-ch-series-wall-single-12000-cfg-17",
      modelId: "c-h-ch-series-wall-single-12000",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-1",
      slug: "c-h-ch-series-wall-single-18000-cfg-1",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-2",
      slug: "c-h-ch-series-wall-single-18000-cfg-2",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-ny18mia-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-3",
      slug: "c-h-ch-series-wall-single-18000-cfg-3",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-18000-cfg-4",
      slug: "c-h-ch-series-wall-single-18000-cfg-4",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-5",
      slug: "c-h-ch-series-wall-single-18000-cfg-5",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-ny18mia-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-6",
      slug: "c-h-ch-series-wall-single-18000-cfg-6",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-7",
      slug: "c-h-ch-series-wall-single-18000-cfg-7",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-8",
      slug: "c-h-ch-series-wall-single-18000-cfg-8",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-9",
      slug: "c-h-ch-series-wall-single-18000-cfg-9",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-18000-cfg-10",
      slug: "c-h-ch-series-wall-single-18000-cfg-10",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-18mes-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-11",
      slug: "c-h-ch-series-wall-single-18000-cfg-11",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-18mes-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-12",
      slug: "c-h-ch-series-wall-single-18000-cfg-12",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-18mes-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-13",
      slug: "c-h-ch-series-wall-single-18000-cfg-13",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-hpr19m-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-14",
      slug: "c-h-ch-series-wall-single-18000-cfg-14",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-hpr19m-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-15",
      slug: "c-h-ch-series-wall-single-18000-cfg-15",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-hpr19m-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-16",
      slug: "c-h-ch-series-wall-single-18000-cfg-16",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-17",
      slug: "c-h-ch-series-wall-single-18000-cfg-17",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-18",
      slug: "c-h-ch-series-wall-single-18000-cfg-18",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-18000-cfg-19",
      slug: "c-h-ch-series-wall-single-18000-cfg-19",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-20",
      slug: "c-h-ch-series-wall-single-18000-cfg-20",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-rhp19m-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-21",
      slug: "c-h-ch-series-wall-single-18000-cfg-21",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-rhp19m-230vo",
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
      id: "c-h-ch-series-wall-single-18000-cfg-22",
      slug: "c-h-ch-series-wall-single-18000-cfg-22",
      modelId: "c-h-ch-series-wall-single-18000",
      outdoorUnitId: "c-h-ch-rhp19m-230vo",
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
      id: "c-h-ch-series-wall-single-24000-cfg-1",
      slug: "c-h-ch-series-wall-single-24000-cfg-1",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-24000-cfg-2",
      slug: "c-h-ch-series-wall-single-24000-cfg-2",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-24000-cfg-3",
      slug: "c-h-ch-series-wall-single-24000-cfg-3",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-24000-cfg-4",
      slug: "c-h-ch-series-wall-single-24000-cfg-4",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-es24-230vo",
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
      id: "c-h-ch-series-wall-single-24000-cfg-5",
      slug: "c-h-ch-series-wall-single-24000-cfg-5",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-es24-230vo",
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
      id: "c-h-ch-series-wall-single-24000-cfg-6",
      slug: "c-h-ch-series-wall-single-24000-cfg-6",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-es24-230vo",
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
      id: "c-h-ch-series-wall-single-24000-cfg-7",
      slug: "c-h-ch-series-wall-single-24000-cfg-7",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-24000-cfg-8",
      slug: "c-h-ch-series-wall-single-24000-cfg-8",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-24000-cfg-9",
      slug: "c-h-ch-series-wall-single-24000-cfg-9",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-24000-cfg-10",
      slug: "c-h-ch-series-wall-single-24000-cfg-10",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-24000-cfg-11",
      slug: "c-h-ch-series-wall-single-24000-cfg-11",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-24000-cfg-12",
      slug: "c-h-ch-series-wall-single-24000-cfg-12",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-24000-cfg-13",
      slug: "c-h-ch-series-wall-single-24000-cfg-13",
      modelId: "c-h-ch-series-wall-single-24000",
      outdoorUnitId: "c-h-ch-rhp28m-230vo",
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
      id: "c-h-ch-series-wall-single-15000-cfg-1",
      slug: "c-h-ch-series-wall-single-15000-cfg-1",
      modelId: "c-h-ch-series-wall-single-15000",
      outdoorUnitId: "c-h-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-15000-cfg-2",
      slug: "c-h-ch-series-wall-single-15000-cfg-2",
      modelId: "c-h-ch-series-wall-single-15000",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-15000-cfg-3",
      slug: "c-h-ch-series-wall-single-15000-cfg-3",
      modelId: "c-h-ch-series-wall-single-15000",
      outdoorUnitId: "c-h-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 22.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-15000-cfg-4",
      slug: "c-h-ch-series-wall-single-15000-cfg-4",
      modelId: "c-h-ch-series-wall-single-15000",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-48000-cfg-1",
      slug: "c-h-ch-series-wall-single-48000-cfg-1",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-n48lcu-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-2",
      slug: "c-h-ch-series-wall-single-48000-cfg-2",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-n48lcu-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-3",
      slug: "c-h-ch-series-wall-single-48000-cfg-3",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-n48lcu-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-4",
      slug: "c-h-ch-series-wall-single-48000-cfg-4",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-48000-cfg-5",
      slug: "c-h-ch-series-wall-single-48000-cfg-5",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-48000-cfg-6",
      slug: "c-h-ch-series-wall-single-48000-cfg-6",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-48000-cfg-7",
      slug: "c-h-ch-series-wall-single-48000-cfg-7",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-48mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 23.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-48000-cfg-8",
      slug: "c-h-ch-series-wall-single-48000-cfg-8",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-48mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 23.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-48000-cfg-9",
      slug: "c-h-ch-series-wall-single-48000-cfg-9",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-48mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.95,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-48000-cfg-10",
      slug: "c-h-ch-series-wall-single-48000-cfg-10",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-hpr48m-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-11",
      slug: "c-h-ch-series-wall-single-48000-cfg-11",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-hpr48m-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-12",
      slug: "c-h-ch-series-wall-single-48000-cfg-12",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-hpr48m-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-13",
      slug: "c-h-ch-series-wall-single-48000-cfg-13",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-rhp48m-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-14",
      slug: "c-h-ch-series-wall-single-48000-cfg-14",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-rhp48m-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-15",
      slug: "c-h-ch-series-wall-single-48000-cfg-15",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-rhp48m-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-16",
      slug: "c-h-ch-series-wall-single-48000-cfg-16",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-rhp55m-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-17",
      slug: "c-h-ch-series-wall-single-48000-cfg-17",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-rhp55m-230vo",
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
      id: "c-h-ch-series-wall-single-48000-cfg-18",
      slug: "c-h-ch-series-wall-single-48000-cfg-18",
      modelId: "c-h-ch-series-wall-single-48000",
      outdoorUnitId: "c-h-ch-rhp55m-230vo",
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
      id: "c-h-ch-series-wall-single-30000-cfg-1",
      slug: "c-h-ch-series-wall-single-30000-cfg-1",
      modelId: "c-h-ch-series-wall-single-30000",
      outdoorUnitId: "c-h-ch-28mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 24.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-30000-cfg-2",
      slug: "c-h-ch-series-wall-single-30000-cfg-2",
      modelId: "c-h-ch-series-wall-single-30000",
      outdoorUnitId: "c-h-ch-28mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-30000-cfg-3",
      slug: "c-h-ch-series-wall-single-30000-cfg-3",
      modelId: "c-h-ch-series-wall-single-30000",
      outdoorUnitId: "c-h-ch-28mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.8,
      hspf2: 9.35,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-30000-cfg-4",
      slug: "c-h-ch-series-wall-single-30000-cfg-4",
      modelId: "c-h-ch-series-wall-single-30000",
      outdoorUnitId: "c-h-ch-hpr28m-230vo",
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
      id: "c-h-ch-series-wall-single-30000-cfg-5",
      slug: "c-h-ch-series-wall-single-30000-cfg-5",
      modelId: "c-h-ch-series-wall-single-30000",
      outdoorUnitId: "c-h-ch-hpr28m-230vo",
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
      id: "c-h-ch-series-wall-single-30000-cfg-6",
      slug: "c-h-ch-series-wall-single-30000-cfg-6",
      modelId: "c-h-ch-series-wall-single-30000",
      outdoorUnitId: "c-h-ch-hpr28m-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.5,
      hspf2: 10.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-30000-cfg-7",
      slug: "c-h-ch-series-wall-single-30000-cfg-7",
      modelId: "c-h-ch-series-wall-single-30000",
      outdoorUnitId: "c-h-ch-rhp28m-230vo",
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
      id: "c-h-ch-series-wall-single-30000-cfg-8",
      slug: "c-h-ch-series-wall-single-30000-cfg-8",
      modelId: "c-h-ch-series-wall-single-30000",
      outdoorUnitId: "c-h-ch-rhp28m-230vo",
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
      id: "c-h-ch-series-wall-single-60000-cfg-1",
      slug: "c-h-ch-series-wall-single-60000-cfg-1",
      modelId: "c-h-ch-series-wall-single-60000",
      outdoorUnitId: "c-h-ch-hpr55m-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-60000-cfg-2",
      slug: "c-h-ch-series-wall-single-60000-cfg-2",
      modelId: "c-h-ch-series-wall-single-60000",
      outdoorUnitId: "c-h-ch-hpr55m-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-60000-cfg-3",
      slug: "c-h-ch-series-wall-single-60000-cfg-3",
      modelId: "c-h-ch-series-wall-single-60000",
      outdoorUnitId: "c-h-ch-hpr55m-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-20000-cfg-1",
      slug: "c-h-ch-series-wall-single-20000-cfg-1",
      modelId: "c-h-ch-series-wall-single-20000",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "c-h-standard-wall-single-12000-cfg-1",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-2",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-3",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-4",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-12000-cfg-6",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-7",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-12000-cfg-9",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-10",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-11",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-12",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-13",
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
      configurationId: "c-h-standard-wall-single-12000-cfg-14",
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
      configurationId: "c-h-standard-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-3",
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
      configurationId: "c-h-standard-wall-single-9000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-8",
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
      configurationId: "c-h-standard-wall-single-9000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-10",
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
      configurationId: "c-h-standard-wall-single-9000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-12",
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
      configurationId: "c-h-standard-wall-single-9000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-9000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-18000-cfg-1",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-2",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-3",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-4",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-5",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-6",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-7",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-8",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-9",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-10",
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
      configurationId: "c-h-standard-wall-single-18000-cfg-11",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-1",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-2",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-24000-cfg-4",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-5",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-6",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-7",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-8",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-9",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-10",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-11",
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
      configurationId: "c-h-standard-wall-single-24000-cfg-12",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-1",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-2",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-3",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-4",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-5",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-6",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-7",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-8",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-9",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-36000-cfg-11",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-12",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-13",
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
      configurationId: "c-h-standard-wall-single-36000-cfg-14",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-1",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-2",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-3",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-4",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-5",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-6",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-7",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-8",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-9",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-10",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-11",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-12",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-13",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-14",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-15",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-16",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-17",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-18",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-19",
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
      configurationId: "c-h-standard-wall-single-48000-cfg-20",
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
      configurationId: "c-h-standard-wall-single-60000-cfg-1",
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
      configurationId: "c-h-standard-wall-single-60000-cfg-2",
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
      configurationId: "c-h-standard-wall-single-60000-cfg-3",
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
      configurationId: "c-h-standard-wall-single-60000-cfg-4",
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
      configurationId: "c-h-standard-wall-single-60000-cfg-5",
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
      configurationId: "c-h-standard-wall-single-60000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-30000-cfg-1",
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
      configurationId: "c-h-standard-wall-single-30000-cfg-2",
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
      configurationId: "c-h-standard-wall-single-30000-cfg-3",
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
      configurationId: "c-h-ch-series-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-36000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-36000-cfg-3",
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
      configurationId: "c-h-ch-series-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-36000-cfg-5",
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
      configurationId: "c-h-ch-series-wall-single-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-36000-cfg-9",
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
      configurationId: "c-h-ch-series-wall-single-36000-cfg-10",
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
      configurationId: "c-h-ch-series-wall-single-36000-cfg-11",
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
      configurationId: "c-h-standard-wall-single-20000-cfg-1",
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
      configurationId: "c-h-standard-wall-single-20000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-6000-cfg-1",
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
      configurationId: "c-h-ch-series-wall-single-6000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-6000-cfg-3",
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
      configurationId: "c-h-ch-series-wall-single-6000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-6000-cfg-5",
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
      configurationId: "c-h-ch-series-wall-single-6000-cfg-6",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-1",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-3",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-4",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-9000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-9000-cfg-7",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-8",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-9",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-10",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-11",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-12",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-13",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-14",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-15",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-16",
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
      configurationId: "c-h-ch-series-wall-single-9000-cfg-17",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-1",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-3",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-4",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-5",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-6",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-12000-cfg-8",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-9",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-10",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-12000-cfg-12",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9200,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-12000-cfg-14",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-15",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-16",
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
      configurationId: "c-h-ch-series-wall-single-12000-cfg-17",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-1",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-3",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-4",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-18000-cfg-6",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-18000-cfg-8",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-9",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-10",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-11",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-18000-cfg-13",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-14",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-15",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-16",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-17",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-18",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-19",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-20",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-21",
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
      configurationId: "c-h-ch-series-wall-single-18000-cfg-22",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-1",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-3",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-4",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-5",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-6",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-7",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-8",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-9",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-10",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-11",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-12",
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
      configurationId: "c-h-ch-series-wall-single-24000-cfg-13",
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
      configurationId: "c-h-ch-series-wall-single-15000-cfg-1",
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
      configurationId: "c-h-ch-series-wall-single-15000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-15000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-15000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.76,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-48000-cfg-1",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-3",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-48000-cfg-5",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-6",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-48000-cfg-8",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-48000-cfg-10",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-11",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-12",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-13",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-14",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-15",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-16",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-17",
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
      configurationId: "c-h-ch-series-wall-single-48000-cfg-18",
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
      configurationId: "c-h-ch-series-wall-single-30000-cfg-1",
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
      configurationId: "c-h-ch-series-wall-single-30000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-30000-cfg-4",
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
      configurationId: "c-h-ch-series-wall-single-30000-cfg-5",
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
      configurationId: "c-h-ch-series-wall-single-30000-cfg-6",
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
      configurationId: "c-h-ch-series-wall-single-30000-cfg-7",
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
      configurationId: "c-h-ch-series-wall-single-30000-cfg-8",
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
      configurationId: "c-h-ch-series-wall-single-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-60000-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-60000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
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
