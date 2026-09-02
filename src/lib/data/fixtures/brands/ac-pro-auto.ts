import type { BrandDataset } from "../../types";

export const acproDataset: BrandDataset = {
  brand: {
    id: "ac-pro",
    slug: "ac-pro",
    name: "AC PRO",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ac-pro-4hp18v-series",
      slug: "ac-pro-4hp18v-series",
      name: "4HP18V SERIES",
      brandId: "ac-pro",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series",
      slug: "ac-pro-mhpc-series",
      name: "MHPC Series",
      brandId: "ac-pro",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-standard",
      slug: "ac-pro-standard",
      name: "Standard",
      brandId: "ac-pro",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series",
      slug: "ac-pro-sphp-series",
      name: "SPHP Series",
      brandId: "ac-pro",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhp-series",
      slug: "ac-pro-mhp-series",
      name: "MHP Series",
      brandId: "ac-pro",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-x-series",
      slug: "ac-pro-x-series",
      name: "X Series",
      brandId: "ac-pro",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series",
      slug: "ac-pro-aox-series",
      name: "AOX Series",
      brandId: "ac-pro",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avc-series",
      slug: "ac-pro-avc-series",
      name: "AVC series",
      brandId: "ac-pro",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aod-series",
      slug: "ac-pro-aod-series",
      name: "AOD Series",
      brandId: "ac-pro",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avbl-series",
      slug: "ac-pro-avbl-series",
      name: "AVBL series",
      brandId: "ac-pro",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aac-series",
      slug: "ac-pro-aac-series",
      name: "AAC series",
      brandId: "ac-pro",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-a-series",
      slug: "ac-pro-a-series",
      name: "A series",
      brandId: "ac-pro",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aoe-series",
      slug: "ac-pro-aoe-series",
      name: "AOE Series",
      brandId: "ac-pro",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-a5og-series",
      slug: "ac-pro-a5og-series",
      name: "A5OG Series",
      brandId: "ac-pro",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ac-pro-4hp18v-series-central-ducted",
      slug: "ac-pro-4hp18v-series-central-ducted",
      name: "4HP18V SERIES",
      seriesId: "ac-pro-4hp18v-series",
      brandId: "ac-pro",
      modelNumber: "4HP18V SERIES",
      normalizedModelNumber: "4hp18v-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 46000,
      heatingCapacity5FMinBtu: 14900,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 7.8,
      hspf2Max: 8.5,
      cop5FMin: 1.78,
      cop5FMax: 2.18,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single",
      slug: "ac-pro-mhpc-series-wall-single",
      name: "MHPC Series",
      seriesId: "ac-pro-mhpc-series",
      brandId: "ac-pro",
      modelNumber: "MHPC Series",
      normalizedModelNumber: "mhpc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 17.1,
      seer2Max: 26,
      hspf2Min: 9,
      hspf2Max: 13.9,
      cop5FMin: 1.88,
      cop5FMax: 2.54,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-standard-wall-single",
      slug: "ac-pro-standard-wall-single",
      name: "Standard",
      seriesId: "ac-pro-standard",
      brandId: "ac-pro",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7300,
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
      id: "ac-pro-sphp-series-central-ducted",
      slug: "ac-pro-sphp-series-central-ducted",
      name: "SPHP Series",
      seriesId: "ac-pro-sphp-series",
      brandId: "ac-pro",
      modelNumber: "SPHP Series",
      normalizedModelNumber: "sphp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 11800,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.4,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.14,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-central-ducted",
      slug: "ac-pro-mhpc-series-central-ducted",
      name: "MHPC Series",
      seriesId: "ac-pro-mhpc-series",
      brandId: "ac-pro",
      modelNumber: "MHPC Series",
      normalizedModelNumber: "mhpc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 17600,
      seer2Min: 18.5,
      seer2Max: 19.7,
      hspf2Min: 9,
      hspf2Max: 9.8,
      cop5FMin: 2.2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhp-series-central-ducted",
      slug: "ac-pro-mhp-series-central-ducted",
      name: "MHP Series",
      seriesId: "ac-pro-mhp-series",
      brandId: "ac-pro",
      modelNumber: "MHP Series",
      normalizedModelNumber: "mhp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 19400,
      heatingCapacity5FMaxBtu: 19400,
      seer2Min: 17,
      seer2Max: 17,
      hspf2Min: 8.7,
      hspf2Max: 8.7,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-x-series-central-ducted",
      slug: "ac-pro-x-series-central-ducted",
      name: "X Series",
      seriesId: "ac-pro-x-series",
      brandId: "ac-pro",
      modelNumber: "X Series",
      normalizedModelNumber: "x-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 20600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted",
      slug: "ac-pro-aox-series-central-ducted",
      name: "AOX Series",
      seriesId: "ac-pro-aox-series",
      brandId: "ac-pro",
      modelNumber: "AOX Series",
      normalizedModelNumber: "aox-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 11500,
      heatingCapacity5FMaxBtu: 22600,
      seer2Min: 15.7,
      seer2Max: 16.5,
      hspf2Min: 8.6,
      hspf2Max: 9.8,
      cop5FMin: 1.93,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avc-series-central-ducted",
      slug: "ac-pro-avc-series-central-ducted",
      name: "AVC series",
      seriesId: "ac-pro-avc-series",
      brandId: "ac-pro",
      modelNumber: "AVC series",
      normalizedModelNumber: "avc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 22600,
      seer2Min: 17,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 9.3,
      cop5FMin: 1.9,
      cop5FMax: 2.31,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aod-series-central-ducted",
      slug: "ac-pro-aod-series-central-ducted",
      name: "AOD Series",
      seriesId: "ac-pro-aod-series",
      brandId: "ac-pro",
      modelNumber: "AOD Series",
      normalizedModelNumber: "aod-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 20400,
      heatingCapacity5FMaxBtu: 20400,
      seer2Min: 17.5,
      seer2Max: 17.5,
      hspf2Min: 8.4,
      hspf2Max: 8.4,
      cop5FMin: 1.81,
      cop5FMax: 1.81,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avbl-series-central-ducted",
      slug: "ac-pro-avbl-series-central-ducted",
      name: "AVBL series",
      seriesId: "ac-pro-avbl-series",
      brandId: "ac-pro",
      modelNumber: "AVBL series",
      normalizedModelNumber: "avbl-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 32800,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.8,
      hspf2Max: 9.9,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aac-series-central-ducted",
      slug: "ac-pro-aac-series-central-ducted",
      name: "AAC series",
      seriesId: "ac-pro-aac-series",
      brandId: "ac-pro",
      modelNumber: "AAC series",
      normalizedModelNumber: "aac-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 22000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 15.7,
      seer2Max: 15.7,
      hspf2Min: 9.8,
      hspf2Max: 9.8,
      cop5FMin: 2.2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-a-series-wall-single",
      slug: "ac-pro-a-series-wall-single",
      name: "A series",
      seriesId: "ac-pro-a-series",
      brandId: "ac-pro",
      modelNumber: "A series",
      normalizedModelNumber: "a-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 18,
      seer2Max: 25.5,
      hspf2Min: 8.7,
      hspf2Max: 12.3,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aoe-series-wall-single",
      slug: "ac-pro-aoe-series-wall-single",
      name: "AOE Series",
      seriesId: "ac-pro-aoe-series",
      brandId: "ac-pro",
      modelNumber: "AOE Series",
      normalizedModelNumber: "aoe-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 18.9,
      seer2Max: 18.9,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-a5og-series-wall-single",
      slug: "ac-pro-a5og-series-wall-single",
      name: "A5OG Series",
      seriesId: "ac-pro-a5og-series",
      brandId: "ac-pro",
      modelNumber: "A5OG Series",
      normalizedModelNumber: "a5og-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 35000,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 21.95,
      seer2Max: 21.95,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ac-pro-4hp18v36p",
      modelNumber: "4HP18V36P",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-4hp18v60p",
      modelNumber: "4HP18V60P",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-j-009asb",
      modelNumber: "MHPC-J-009ASB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-j-009bsb",
      modelNumber: "MHPC-J-009BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-j-024bsb",
      modelNumber: "MHPC-J-024BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-j-030bsb",
      modelNumber: "MHPC-J-030BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-012asb",
      modelNumber: "MHPC-H-012ASB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-009bsb",
      modelNumber: "MHPC-H-009BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-012bsb",
      modelNumber: "MHPC-H-012BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-018bsb",
      modelNumber: "MHPC-H-018BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-024bsb",
      modelNumber: "MHPC-H-024BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-030bsb",
      modelNumber: "MHPC-H-030BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-036bsb",
      modelNumber: "MHPC-H-036BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-048bsb",
      modelNumber: "MHPC-H-048BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-018bmb",
      modelNumber: "MHPC-H-018BMB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-027bmb",
      modelNumber: "MHPC-H-027BMB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-036bmb",
      modelNumber: "MHPC-H-036BMB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-048bmb",
      modelNumber: "MHPC-H-048BMB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-j-012asb",
      modelNumber: "MHPC-J-012ASB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-j-012bsb",
      modelNumber: "MHPC-J-012BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-j-018bsb",
      modelNumber: "MHPC-J-018BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-j-036bsb",
      modelNumber: "MHPC-J-036BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-060bsb",
      modelNumber: "MHPC-H-060BSB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-mhpc-h-060bmb",
      modelNumber: "MHPC-H-060BMB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-y-v030bb",
      modelNumber: "SPHP-Y-V030BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aod30u-36hfn1-mr0",
      modelNumber: "AOD30U-36HFN1-MR0",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aoe30u-48hfn1-mr0",
      modelNumber: "AOE30U-48HFN1-MR0",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aoe30u-60hfn1-mr0",
      modelNumber: "AOE30U-60HFN1-MR0",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aod30u-36hfn1-m-ga",
      modelNumber: "AOD30U-36HFN1-M(GA)",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aod30u-30hfn1-mr0",
      modelNumber: "AOD30U-30HFN1-MR0",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox330-18hfn1-ms0w",
      modelNumber: "AOX330-18HFN1-MS0W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aod31-36hfn1-mp0w",
      modelNumber: "AOD31-36HFN1-MP0W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aod30u-36hfn1-mp0-ga",
      modelNumber: "AOD30U-36HFN1-MP0(GA)",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-a5oa-55hfn1-m",
      modelNumber: "A5OA-55HFN1-M",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-y-v018bb",
      modelNumber: "SPHP-Y-V018BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-y-v024bb",
      modelNumber: "SPHP-Y-V024BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-y-v036bb",
      modelNumber: "SPHP-Y-V036BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-y-v048bb",
      modelNumber: "SPHP-Y-V048BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-y-v060bb",
      modelNumber: "SPHP-Y-V060BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-z-v018bb",
      modelNumber: "SPHP-Z-V018BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-z-v024bb",
      modelNumber: "SPHP-Z-V024BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-z-v030bb",
      modelNumber: "SPHP-Z-V030BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-z-v036bb",
      modelNumber: "SPHP-Z-V036BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-z-v048bb",
      modelNumber: "SPHP-Z-V048BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-z-v060bb",
      modelNumber: "SPHP-Z-V060BB",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-x-i036b",
      modelNumber: "SPHP-X-I036B",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-sphp-x-i060b",
      modelNumber: "SPHP-X-I060B",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox330-18hfn1-mr0",
      modelNumber: "AOX330-18HFN1-MR0",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox330u-18hfn1-mr0",
      modelNumber: "AOX330U-18HFN1-MR0",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox430u-24hfn1-mr0",
      modelNumber: "AOX430U-24HFN1-MR0",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox430-24hfn1-mr0",
      modelNumber: "AOX430-24HFN1-MR0",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox430-18hfn1-mt8w",
      modelNumber: "AOX430-18HFN1-MT8W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aod32-24hfn1-mt0w",
      modelNumber: "AOD32-24HFN1-MT0W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aod30u-30hfn1-m-ga",
      modelNumber: "AOD30U-30HFN1-M(GA)",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox430u-18hfn1-m",
      modelNumber: "AOX430U-18HFN1-M",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aod30-24hfn1-mw",
      modelNumber: "AOD30-24HFN1-MW",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aod30u-30hfn1-mr0-x",
      modelNumber: "AOD30U-30HFN1-MR0(X)",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aoe31u-36hfn1-m",
      modelNumber: "AOE31U-36HFN1-M",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-a2oa-18hfn1-m",
      modelNumber: "A2OA-18HFN1-M",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-a3oj-27hfn1-m",
      modelNumber: "A3OJ-27HFN1-M",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-a4og-36hfn1-m",
      modelNumber: "A4OG-36HFN1-M",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-a5og-48hfn1-m",
      modelNumber: "A5OG-48HFN1-M",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox230-09hfn1-bs5w",
      modelNumber: "AOX230-09HFN1-BS5W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox230-09hfn1-mt0w",
      modelNumber: "AOX230-09HFN1-MT0W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox230-09hfn1-mw5w",
      modelNumber: "AOX230-09HFN1-MW5W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox230-12hfn1-mv5w",
      modelNumber: "AOX230-12HFN1-MV5W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox430-18hfn1-mu0w",
      modelNumber: "AOX430-18HFN1-MU0W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox330-09hfn1-my5w",
      modelNumber: "AOX330-09HFN1-MY5W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox330-12hfn1-mw5w",
      modelNumber: "AOX330-12HFN1-MW5W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aox430-17hfn1-mt0w",
      modelNumber: "AOX430-17HFN1-MT0W",
      brandId: "ac-pro",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-aoe30u-48hfn1-mp0-ga",
      modelNumber: "AOE30U-48HFN1-MP0(GA)",
      brandId: "ac-pro",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-1",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-1",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-2",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-2",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-3",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-3",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-4",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-4",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-5",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-5",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-6",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-6",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-7",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-7",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-8",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-8",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-9",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-9",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-10",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-10",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-11",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-11",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-12",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-12",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-13",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-13",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-14",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-14",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-15",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-15",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-16",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-16",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-17",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-17",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-18",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-18",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-19",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-19",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-20",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-20",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-21",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-21",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-22",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-22",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-23",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-23",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-24",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-24",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-25",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-25",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-26",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-26",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-27",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-27",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-28",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-28",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-29",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-29",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-30",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-30",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-31",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-31",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-32",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-32",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-33",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-33",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-34",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-34",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-35",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-35",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-36",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-36",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-37",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-37",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-38",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-38",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-39",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-39",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-40",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-40",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-41",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-41",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-42",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-42",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-43",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-43",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-44",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-44",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-45",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-45",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-46",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-46",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-47",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-47",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-48",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-48",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-49",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-49",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-50",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-50",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-51",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-51",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-52",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-52",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-53",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-53",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-54",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-54",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-55",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-55",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-56",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-56",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-57",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-57",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-58",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-58",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-59",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-59",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-60",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-60",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-61",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-61",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-62",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-62",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-63",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-63",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-64",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-64",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-65",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-65",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-66",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-66",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-67",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-67",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-68",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-68",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-69",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-69",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-70",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-70",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-71",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-71",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-72",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-72",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-73",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-73",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-74",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-74",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-75",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-75",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-76",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-76",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-77",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-77",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-78",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-78",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-79",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-79",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-80",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-80",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-81",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-81",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-82",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-82",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-83",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-83",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-84",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-84",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-85",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-85",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-86",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-86",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-87",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-87",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-88",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-88",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-89",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-89",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-90",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-90",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-91",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-91",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-92",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-92",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-93",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-93",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-94",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-94",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-95",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-95",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-96",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-96",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-97",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-97",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-98",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-98",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-99",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-99",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-100",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-100",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-101",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-101",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-102",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-102",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-103",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-103",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-104",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-104",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-105",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-105",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-106",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-106",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-107",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-107",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-108",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-108",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-109",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-109",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-110",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-110",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-111",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-111",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-112",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-112",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-113",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-113",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-114",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-114",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-115",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-115",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-116",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-116",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-117",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-117",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-118",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-118",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-119",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-119",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-120",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-120",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-121",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-121",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-122",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-122",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-123",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-123",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-124",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-124",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-125",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-125",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-126",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-126",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-127",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-127",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-128",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-128",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-129",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-129",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-130",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-130",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-131",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-131",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-132",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-132",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-133",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-133",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-134",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-134",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-135",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-135",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-136",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-136",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-137",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-137",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-138",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-138",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-139",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-139",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-140",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-140",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-141",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-141",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-142",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-142",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-143",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-143",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-144",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-144",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-145",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-145",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-146",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-146",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-147",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-147",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-148",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-148",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-149",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-149",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-150",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-150",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-151",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-151",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-152",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-152",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-153",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-153",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-154",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-154",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-155",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-155",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-156",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-156",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-157",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-157",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-158",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-158",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-159",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-159",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-160",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-160",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-161",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-161",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-162",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-162",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-163",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-163",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-164",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-164",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-165",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-165",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-166",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-166",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-167",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-167",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-168",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-168",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-169",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-169",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-170",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-170",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-171",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-171",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-172",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-172",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-173",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-173",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-174",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-174",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-175",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-175",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-176",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-176",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-177",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-177",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-178",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-178",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-179",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-179",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-180",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-180",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-181",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-181",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-182",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-182",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-183",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-183",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-184",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-184",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-185",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-185",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-186",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-186",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-187",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-187",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-188",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-188",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-189",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-189",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-190",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-190",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-191",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-191",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-192",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-192",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-193",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-193",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-194",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-194",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-195",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-195",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-196",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-196",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-197",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-197",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-198",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-198",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-199",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-199",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-200",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-200",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-201",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-201",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-202",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-202",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-203",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-203",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-204",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-204",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-205",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-205",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-206",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-206",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-207",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-207",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-208",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-208",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-209",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-209",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-210",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-210",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-211",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-211",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-212",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-212",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-213",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-213",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-214",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-214",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-215",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-215",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-216",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-216",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-217",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-217",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-218",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-218",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-219",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-219",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-220",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-220",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-221",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-221",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-222",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-222",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-223",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-223",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-224",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-224",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-225",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-225",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-226",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-226",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-227",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-227",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-228",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-228",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-229",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-229",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-230",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-230",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-231",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-231",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-232",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-232",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-233",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-233",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-234",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-234",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-235",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-235",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-236",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-236",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-237",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-237",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-238",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-238",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-239",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-239",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-240",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-240",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-241",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-241",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-242",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-242",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-243",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-243",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-244",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-244",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-245",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-245",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-246",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-246",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-247",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-247",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-248",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-248",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-249",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-249",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-250",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-250",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-251",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-251",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-252",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-252",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-253",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-253",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-254",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-254",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-255",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-255",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-256",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-256",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-257",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-257",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-258",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-258",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-259",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-259",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-260",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-260",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-261",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-261",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-262",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-262",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-263",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-263",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-264",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-264",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-265",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-265",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-266",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-266",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-267",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-267",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-268",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-268",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-269",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-269",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-270",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-270",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-271",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-271",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-272",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-272",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-273",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-273",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-274",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-274",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-275",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-275",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-276",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-276",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-277",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-277",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-278",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-278",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-279",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-279",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-280",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-280",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-281",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-281",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-282",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-282",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-283",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-283",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-284",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-284",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-285",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-285",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-286",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-286",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-287",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-287",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-288",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-288",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-289",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-289",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-290",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-290",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-291",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-291",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-292",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-292",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-293",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-293",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-294",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-294",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-295",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-295",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-296",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-296",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-297",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-297",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-298",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-298",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-299",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-299",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-300",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-300",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-301",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-301",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-302",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-302",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-303",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-303",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-304",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-304",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-305",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-305",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-306",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-306",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-307",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-307",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-308",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-308",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-309",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-309",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-310",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-310",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-311",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-311",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-312",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-312",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-313",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-313",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-314",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-314",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-315",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-315",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-316",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-316",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-317",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-317",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-318",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-318",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-319",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-319",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-320",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-320",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-321",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-321",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-322",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-322",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-323",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-323",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-324",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-324",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-325",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-325",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-326",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-326",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-327",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-327",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-328",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-328",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-329",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-329",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-330",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-330",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-331",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-331",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-332",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-332",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-333",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-333",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-334",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-334",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-335",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-335",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-336",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-336",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-337",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-337",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-338",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-338",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-339",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-339",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-340",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-340",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-341",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-341",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-342",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-342",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-343",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-343",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-344",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-344",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-345",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-345",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-346",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-346",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v60p",
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
      id: "ac-pro-4hp18v-series-central-ducted-cfg-347",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-347",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-348",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-348",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-349",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-349",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-350",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-350",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-351",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-351",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-352",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-352",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-353",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-353",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-354",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-354",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-355",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-355",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-4hp18v-series-central-ducted-cfg-356",
      slug: "ac-pro-4hp18v-series-central-ducted-cfg-356",
      modelId: "ac-pro-4hp18v-series-central-ducted",
      outdoorUnitId: "ac-pro-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-1",
      slug: "ac-pro-mhpc-series-wall-single-cfg-1",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-j-009asb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-2",
      slug: "ac-pro-mhpc-series-wall-single-cfg-2",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-j-009bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-3",
      slug: "ac-pro-mhpc-series-wall-single-cfg-3",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-j-024bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-4",
      slug: "ac-pro-mhpc-series-wall-single-cfg-4",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-j-030bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-5",
      slug: "ac-pro-mhpc-series-wall-single-cfg-5",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-012asb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.4,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-6",
      slug: "ac-pro-mhpc-series-wall-single-cfg-6",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-009bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.8,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-7",
      slug: "ac-pro-mhpc-series-wall-single-cfg-7",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-012bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-8",
      slug: "ac-pro-mhpc-series-wall-single-cfg-8",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-018bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-9",
      slug: "ac-pro-mhpc-series-wall-single-cfg-9",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-024bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-10",
      slug: "ac-pro-mhpc-series-wall-single-cfg-10",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-030bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-11",
      slug: "ac-pro-mhpc-series-wall-single-cfg-11",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-036bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-12",
      slug: "ac-pro-mhpc-series-wall-single-cfg-12",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-009bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-13",
      slug: "ac-pro-mhpc-series-wall-single-cfg-13",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-012bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-14",
      slug: "ac-pro-mhpc-series-wall-single-cfg-14",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-018bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-15",
      slug: "ac-pro-mhpc-series-wall-single-cfg-15",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-024bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-16",
      slug: "ac-pro-mhpc-series-wall-single-cfg-16",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-036bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-17",
      slug: "ac-pro-mhpc-series-wall-single-cfg-17",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-048bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-18",
      slug: "ac-pro-mhpc-series-wall-single-cfg-18",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-009bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-19",
      slug: "ac-pro-mhpc-series-wall-single-cfg-19",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-012bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-20",
      slug: "ac-pro-mhpc-series-wall-single-cfg-20",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-018bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-21",
      slug: "ac-pro-mhpc-series-wall-single-cfg-21",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-009bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-22",
      slug: "ac-pro-mhpc-series-wall-single-cfg-22",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-012bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-23",
      slug: "ac-pro-mhpc-series-wall-single-cfg-23",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-018bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-24",
      slug: "ac-pro-mhpc-series-wall-single-cfg-24",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-024bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-25",
      slug: "ac-pro-mhpc-series-wall-single-cfg-25",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-036bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-26",
      slug: "ac-pro-mhpc-series-wall-single-cfg-26",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-048bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-27",
      slug: "ac-pro-mhpc-series-wall-single-cfg-27",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-009bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-28",
      slug: "ac-pro-mhpc-series-wall-single-cfg-28",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-018bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 23.8,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-29",
      slug: "ac-pro-mhpc-series-wall-single-cfg-29",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-018bmb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-30",
      slug: "ac-pro-mhpc-series-wall-single-cfg-30",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-018bmb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-31",
      slug: "ac-pro-mhpc-series-wall-single-cfg-31",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-018bmb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.55,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-32",
      slug: "ac-pro-mhpc-series-wall-single-cfg-32",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-027bmb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 25,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-33",
      slug: "ac-pro-mhpc-series-wall-single-cfg-33",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-027bmb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-34",
      slug: "ac-pro-mhpc-series-wall-single-cfg-34",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-027bmb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26800,
      coolingCapacityMaxBtu: 26800,
      seer2: 23,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-35",
      slug: "ac-pro-mhpc-series-wall-single-cfg-35",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-036bmb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-36",
      slug: "ac-pro-mhpc-series-wall-single-cfg-36",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-036bmb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-37",
      slug: "ac-pro-mhpc-series-wall-single-cfg-37",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-036bmb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-38",
      slug: "ac-pro-mhpc-series-wall-single-cfg-38",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-048bmb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 24,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-39",
      slug: "ac-pro-mhpc-series-wall-single-cfg-39",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-048bmb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-40",
      slug: "ac-pro-mhpc-series-wall-single-cfg-40",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-048bmb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 22.2,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhpc-series-wall-single-cfg-41",
      slug: "ac-pro-mhpc-series-wall-single-cfg-41",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-036bsb",
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
      id: "ac-pro-mhpc-series-wall-single-cfg-42",
      slug: "ac-pro-mhpc-series-wall-single-cfg-42",
      modelId: "ac-pro-mhpc-series-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-012bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-standard-wall-single-cfg-1",
      slug: "ac-pro-standard-wall-single-cfg-1",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-mhpc-j-012asb",
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
      id: "ac-pro-standard-wall-single-cfg-2",
      slug: "ac-pro-standard-wall-single-cfg-2",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-mhpc-j-012bsb",
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
      id: "ac-pro-standard-wall-single-cfg-3",
      slug: "ac-pro-standard-wall-single-cfg-3",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-mhpc-j-018bsb",
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
      id: "ac-pro-standard-wall-single-cfg-4",
      slug: "ac-pro-standard-wall-single-cfg-4",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-mhpc-j-036bsb",
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
      id: "ac-pro-standard-wall-single-cfg-5",
      slug: "ac-pro-standard-wall-single-cfg-5",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-060bsb",
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
      id: "ac-pro-standard-wall-single-cfg-6",
      slug: "ac-pro-standard-wall-single-cfg-6",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-060bmb",
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
      id: "ac-pro-standard-wall-single-cfg-7",
      slug: "ac-pro-standard-wall-single-cfg-7",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-060bmb",
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
      id: "ac-pro-standard-wall-single-cfg-8",
      slug: "ac-pro-standard-wall-single-cfg-8",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-mhpc-h-060bmb",
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
      id: "ac-pro-standard-wall-single-cfg-9",
      slug: "ac-pro-standard-wall-single-cfg-9",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-sphp-y-v030bb",
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
      id: "ac-pro-standard-wall-single-cfg-10",
      slug: "ac-pro-standard-wall-single-cfg-10",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-36hfn1-mr0",
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
      id: "ac-pro-standard-wall-single-cfg-11",
      slug: "ac-pro-standard-wall-single-cfg-11",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aoe30u-48hfn1-mr0",
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
      id: "ac-pro-standard-wall-single-cfg-12",
      slug: "ac-pro-standard-wall-single-cfg-12",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aoe30u-60hfn1-mr0",
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
      id: "ac-pro-standard-wall-single-cfg-13",
      slug: "ac-pro-standard-wall-single-cfg-13",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-36hfn1-m-ga",
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
      id: "ac-pro-standard-wall-single-cfg-14",
      slug: "ac-pro-standard-wall-single-cfg-14",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-36hfn1-mr0",
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
      id: "ac-pro-standard-wall-single-cfg-15",
      slug: "ac-pro-standard-wall-single-cfg-15",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aoe30u-48hfn1-mr0",
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
      id: "ac-pro-standard-wall-single-cfg-16",
      slug: "ac-pro-standard-wall-single-cfg-16",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aoe30u-60hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-standard-wall-single-cfg-17",
      slug: "ac-pro-standard-wall-single-cfg-17",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-30hfn1-mr0",
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
      id: "ac-pro-standard-wall-single-cfg-18",
      slug: "ac-pro-standard-wall-single-cfg-18",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-36hfn1-mr0",
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
      id: "ac-pro-standard-wall-single-cfg-19",
      slug: "ac-pro-standard-wall-single-cfg-19",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-30hfn1-mr0",
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
      id: "ac-pro-standard-wall-single-cfg-20",
      slug: "ac-pro-standard-wall-single-cfg-20",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-36hfn1-mr0",
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
      id: "ac-pro-standard-wall-single-cfg-21",
      slug: "ac-pro-standard-wall-single-cfg-21",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-sphp-y-v030bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-standard-wall-single-cfg-22",
      slug: "ac-pro-standard-wall-single-cfg-22",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-sphp-y-v030bb",
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
      id: "ac-pro-standard-wall-single-cfg-23",
      slug: "ac-pro-standard-wall-single-cfg-23",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aox330-18hfn1-ms0w",
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
      id: "ac-pro-standard-wall-single-cfg-24",
      slug: "ac-pro-standard-wall-single-cfg-24",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod31-36hfn1-mp0w",
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
      id: "ac-pro-standard-wall-single-cfg-25",
      slug: "ac-pro-standard-wall-single-cfg-25",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-36hfn1-mp0-ga",
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
      id: "ac-pro-standard-wall-single-cfg-26",
      slug: "ac-pro-standard-wall-single-cfg-26",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-a5oa-55hfn1-m",
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
      id: "ac-pro-standard-wall-single-cfg-27",
      slug: "ac-pro-standard-wall-single-cfg-27",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-36hfn1-mp0-ga",
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
      id: "ac-pro-standard-wall-single-cfg-28",
      slug: "ac-pro-standard-wall-single-cfg-28",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-aod30u-36hfn1-mp0-ga",
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
      id: "ac-pro-standard-wall-single-cfg-29",
      slug: "ac-pro-standard-wall-single-cfg-29",
      modelId: "ac-pro-standard-wall-single",
      outdoorUnitId: "ac-pro-a5oa-55hfn1-m",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-1",
      slug: "ac-pro-sphp-series-central-ducted-cfg-1",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v018bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-2",
      slug: "ac-pro-sphp-series-central-ducted-cfg-2",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v024bb",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-3",
      slug: "ac-pro-sphp-series-central-ducted-cfg-3",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v036bb",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-4",
      slug: "ac-pro-sphp-series-central-ducted-cfg-4",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v048bb",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-5",
      slug: "ac-pro-sphp-series-central-ducted-cfg-5",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v060bb",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-6",
      slug: "ac-pro-sphp-series-central-ducted-cfg-6",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-z-v018bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-7",
      slug: "ac-pro-sphp-series-central-ducted-cfg-7",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-z-v024bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-8",
      slug: "ac-pro-sphp-series-central-ducted-cfg-8",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-z-v030bb",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-9",
      slug: "ac-pro-sphp-series-central-ducted-cfg-9",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-z-v036bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-10",
      slug: "ac-pro-sphp-series-central-ducted-cfg-10",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-z-v048bb",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-11",
      slug: "ac-pro-sphp-series-central-ducted-cfg-11",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-z-v060bb",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-12",
      slug: "ac-pro-sphp-series-central-ducted-cfg-12",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v018bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-13",
      slug: "ac-pro-sphp-series-central-ducted-cfg-13",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v018bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-14",
      slug: "ac-pro-sphp-series-central-ducted-cfg-14",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v024bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-15",
      slug: "ac-pro-sphp-series-central-ducted-cfg-15",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v024bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-16",
      slug: "ac-pro-sphp-series-central-ducted-cfg-16",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v036bb",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-17",
      slug: "ac-pro-sphp-series-central-ducted-cfg-17",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v036bb",
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
      id: "ac-pro-sphp-series-central-ducted-cfg-18",
      slug: "ac-pro-sphp-series-central-ducted-cfg-18",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v018bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-19",
      slug: "ac-pro-sphp-series-central-ducted-cfg-19",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v024bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-20",
      slug: "ac-pro-sphp-series-central-ducted-cfg-20",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v036bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-21",
      slug: "ac-pro-sphp-series-central-ducted-cfg-21",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-z-v018bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-22",
      slug: "ac-pro-sphp-series-central-ducted-cfg-22",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-z-v024bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-23",
      slug: "ac-pro-sphp-series-central-ducted-cfg-23",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v048bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-sphp-series-central-ducted-cfg-24",
      slug: "ac-pro-sphp-series-central-ducted-cfg-24",
      modelId: "ac-pro-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-y-v060bb",
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
      id: "ac-pro-mhpc-series-central-ducted-cfg-1",
      slug: "ac-pro-mhpc-series-central-ducted-cfg-1",
      modelId: "ac-pro-mhpc-series-central-ducted",
      outdoorUnitId: "ac-pro-mhpc-h-018bsb",
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
      id: "ac-pro-mhpc-series-central-ducted-cfg-2",
      slug: "ac-pro-mhpc-series-central-ducted-cfg-2",
      modelId: "ac-pro-mhpc-series-central-ducted",
      outdoorUnitId: "ac-pro-mhpc-h-024bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-mhp-series-central-ducted-cfg-1",
      slug: "ac-pro-mhp-series-central-ducted-cfg-1",
      modelId: "ac-pro-mhp-series-central-ducted",
      outdoorUnitId: "ac-pro-mhpc-h-030bsb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-x-series-central-ducted-cfg-1",
      slug: "ac-pro-x-series-central-ducted-cfg-1",
      modelId: "ac-pro-x-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-x-i036b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-x-series-central-ducted-cfg-2",
      slug: "ac-pro-x-series-central-ducted-cfg-2",
      modelId: "ac-pro-x-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-x-i036b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-x-series-central-ducted-cfg-3",
      slug: "ac-pro-x-series-central-ducted-cfg-3",
      modelId: "ac-pro-x-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-x-i060b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-x-series-central-ducted-cfg-4",
      slug: "ac-pro-x-series-central-ducted-cfg-4",
      modelId: "ac-pro-x-series-central-ducted",
      outdoorUnitId: "ac-pro-sphp-x-i060b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 18.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-1",
      slug: "ac-pro-aox-series-central-ducted-cfg-1",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox330-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-2",
      slug: "ac-pro-aox-series-central-ducted-cfg-2",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox330-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-3",
      slug: "ac-pro-aox-series-central-ducted-cfg-3",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox330u-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-4",
      slug: "ac-pro-aox-series-central-ducted-cfg-4",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox330u-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-5",
      slug: "ac-pro-aox-series-central-ducted-cfg-5",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox330-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-6",
      slug: "ac-pro-aox-series-central-ducted-cfg-6",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox430u-24hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-7",
      slug: "ac-pro-aox-series-central-ducted-cfg-7",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox330u-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-8",
      slug: "ac-pro-aox-series-central-ducted-cfg-8",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox430u-24hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-9",
      slug: "ac-pro-aox-series-central-ducted-cfg-9",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox330-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aox-series-central-ducted-cfg-10",
      slug: "ac-pro-aox-series-central-ducted-cfg-10",
      modelId: "ac-pro-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-aox430u-24hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avc-series-central-ducted-cfg-1",
      slug: "ac-pro-avc-series-central-ducted-cfg-1",
      modelId: "ac-pro-avc-series-central-ducted",
      outdoorUnitId: "ac-pro-aox430-24hfn1-mr0",
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
      id: "ac-pro-avc-series-central-ducted-cfg-2",
      slug: "ac-pro-avc-series-central-ducted-cfg-2",
      modelId: "ac-pro-avc-series-central-ducted",
      outdoorUnitId: "ac-pro-aox430-18hfn1-mt8w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avc-series-central-ducted-cfg-3",
      slug: "ac-pro-avc-series-central-ducted-cfg-3",
      modelId: "ac-pro-avc-series-central-ducted",
      outdoorUnitId: "ac-pro-aod32-24hfn1-mt0w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avc-series-central-ducted-cfg-4",
      slug: "ac-pro-avc-series-central-ducted-cfg-4",
      modelId: "ac-pro-avc-series-central-ducted",
      outdoorUnitId: "ac-pro-aox430-24hfn1-mr0",
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
      id: "ac-pro-aod-series-central-ducted-cfg-1",
      slug: "ac-pro-aod-series-central-ducted-cfg-1",
      modelId: "ac-pro-aod-series-central-ducted",
      outdoorUnitId: "ac-pro-aod30u-30hfn1-m-ga",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.5,
      hspf2: 8.4,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avbl-series-central-ducted-cfg-1",
      slug: "ac-pro-avbl-series-central-ducted-cfg-1",
      modelId: "ac-pro-avbl-series-central-ducted",
      outdoorUnitId: "ac-pro-aox430u-18hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avbl-series-central-ducted-cfg-2",
      slug: "ac-pro-avbl-series-central-ducted-cfg-2",
      modelId: "ac-pro-avbl-series-central-ducted",
      outdoorUnitId: "ac-pro-aod30-24hfn1-mw",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avbl-series-central-ducted-cfg-3",
      slug: "ac-pro-avbl-series-central-ducted-cfg-3",
      modelId: "ac-pro-avbl-series-central-ducted",
      outdoorUnitId: "ac-pro-aod30u-30hfn1-mr0-x",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 18.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-avbl-series-central-ducted-cfg-4",
      slug: "ac-pro-avbl-series-central-ducted-cfg-4",
      modelId: "ac-pro-avbl-series-central-ducted",
      outdoorUnitId: "ac-pro-aoe31u-36hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-aac-series-central-ducted-cfg-1",
      slug: "ac-pro-aac-series-central-ducted-cfg-1",
      modelId: "ac-pro-aac-series-central-ducted",
      outdoorUnitId: "ac-pro-aox430-24hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-a-series-wall-single-cfg-1",
      slug: "ac-pro-a-series-wall-single-cfg-1",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-a2oa-18hfn1-m",
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
      id: "ac-pro-a-series-wall-single-cfg-2",
      slug: "ac-pro-a-series-wall-single-cfg-2",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-a3oj-27hfn1-m",
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
      id: "ac-pro-a-series-wall-single-cfg-3",
      slug: "ac-pro-a-series-wall-single-cfg-3",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-a4og-36hfn1-m",
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
      id: "ac-pro-a-series-wall-single-cfg-4",
      slug: "ac-pro-a-series-wall-single-cfg-4",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-a2oa-18hfn1-m",
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
      id: "ac-pro-a-series-wall-single-cfg-5",
      slug: "ac-pro-a-series-wall-single-cfg-5",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-a2oa-18hfn1-m",
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
      id: "ac-pro-a-series-wall-single-cfg-6",
      slug: "ac-pro-a-series-wall-single-cfg-6",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-a3oj-27hfn1-m",
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
      id: "ac-pro-a-series-wall-single-cfg-7",
      slug: "ac-pro-a-series-wall-single-cfg-7",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-a5og-48hfn1-m",
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
      id: "ac-pro-a-series-wall-single-cfg-8",
      slug: "ac-pro-a-series-wall-single-cfg-8",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-09hfn1-bs5w",
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
      id: "ac-pro-a-series-wall-single-cfg-9",
      slug: "ac-pro-a-series-wall-single-cfg-9",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-09hfn1-mt0w",
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
      id: "ac-pro-a-series-wall-single-cfg-10",
      slug: "ac-pro-a-series-wall-single-cfg-10",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-09hfn1-mw5w",
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
      id: "ac-pro-a-series-wall-single-cfg-11",
      slug: "ac-pro-a-series-wall-single-cfg-11",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-12hfn1-mv5w",
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
      id: "ac-pro-a-series-wall-single-cfg-12",
      slug: "ac-pro-a-series-wall-single-cfg-12",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox430-18hfn1-mu0w",
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
      id: "ac-pro-a-series-wall-single-cfg-13",
      slug: "ac-pro-a-series-wall-single-cfg-13",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aod32-24hfn1-mt0w",
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
      id: "ac-pro-a-series-wall-single-cfg-14",
      slug: "ac-pro-a-series-wall-single-cfg-14",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox330-09hfn1-my5w",
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
      id: "ac-pro-a-series-wall-single-cfg-15",
      slug: "ac-pro-a-series-wall-single-cfg-15",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox330-12hfn1-mw5w",
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
      id: "ac-pro-a-series-wall-single-cfg-16",
      slug: "ac-pro-a-series-wall-single-cfg-16",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox430-17hfn1-mt0w",
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
      id: "ac-pro-a-series-wall-single-cfg-17",
      slug: "ac-pro-a-series-wall-single-cfg-17",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox330-09hfn1-my5w",
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
      id: "ac-pro-a-series-wall-single-cfg-18",
      slug: "ac-pro-a-series-wall-single-cfg-18",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox330-12hfn1-mw5w",
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
      id: "ac-pro-a-series-wall-single-cfg-19",
      slug: "ac-pro-a-series-wall-single-cfg-19",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox430-17hfn1-mt0w",
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
      id: "ac-pro-a-series-wall-single-cfg-20",
      slug: "ac-pro-a-series-wall-single-cfg-20",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aod32-24hfn1-mt0w",
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
      id: "ac-pro-a-series-wall-single-cfg-21",
      slug: "ac-pro-a-series-wall-single-cfg-21",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox330-12hfn1-mw5w",
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
      id: "ac-pro-a-series-wall-single-cfg-22",
      slug: "ac-pro-a-series-wall-single-cfg-22",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-09hfn1-mw5w",
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
      id: "ac-pro-a-series-wall-single-cfg-23",
      slug: "ac-pro-a-series-wall-single-cfg-23",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-12hfn1-mv5w",
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
      id: "ac-pro-a-series-wall-single-cfg-24",
      slug: "ac-pro-a-series-wall-single-cfg-24",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox430-18hfn1-mt8w",
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
      id: "ac-pro-a-series-wall-single-cfg-25",
      slug: "ac-pro-a-series-wall-single-cfg-25",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aod32-24hfn1-mt0w",
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
      id: "ac-pro-a-series-wall-single-cfg-26",
      slug: "ac-pro-a-series-wall-single-cfg-26",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-09hfn1-mw5w",
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
      id: "ac-pro-a-series-wall-single-cfg-27",
      slug: "ac-pro-a-series-wall-single-cfg-27",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-12hfn1-mv5w",
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
      id: "ac-pro-a-series-wall-single-cfg-28",
      slug: "ac-pro-a-series-wall-single-cfg-28",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox430-18hfn1-mt8w",
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
      id: "ac-pro-a-series-wall-single-cfg-29",
      slug: "ac-pro-a-series-wall-single-cfg-29",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-12hfn1-mv5w",
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
      id: "ac-pro-a-series-wall-single-cfg-30",
      slug: "ac-pro-a-series-wall-single-cfg-30",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox430-18hfn1-mt8w",
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
      id: "ac-pro-a-series-wall-single-cfg-31",
      slug: "ac-pro-a-series-wall-single-cfg-31",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aod32-24hfn1-mt0w",
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
      id: "ac-pro-a-series-wall-single-cfg-32",
      slug: "ac-pro-a-series-wall-single-cfg-32",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox430-18hfn1-mt8w",
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
      id: "ac-pro-a-series-wall-single-cfg-33",
      slug: "ac-pro-a-series-wall-single-cfg-33",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-09hfn1-mw5w",
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
      id: "ac-pro-a-series-wall-single-cfg-34",
      slug: "ac-pro-a-series-wall-single-cfg-34",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox230-12hfn1-mv5w",
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
      id: "ac-pro-a-series-wall-single-cfg-35",
      slug: "ac-pro-a-series-wall-single-cfg-35",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-aox430-18hfn1-mt8w",
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
      id: "ac-pro-a-series-wall-single-cfg-36",
      slug: "ac-pro-a-series-wall-single-cfg-36",
      modelId: "ac-pro-a-series-wall-single",
      outdoorUnitId: "ac-pro-a3oj-27hfn1-m",
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
      id: "ac-pro-aoe-series-wall-single-cfg-1",
      slug: "ac-pro-aoe-series-wall-single-cfg-1",
      modelId: "ac-pro-aoe-series-wall-single",
      outdoorUnitId: "ac-pro-aoe30u-48hfn1-mp0-ga",
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
      id: "ac-pro-aoe-series-wall-single-cfg-2",
      slug: "ac-pro-aoe-series-wall-single-cfg-2",
      modelId: "ac-pro-aoe-series-wall-single",
      outdoorUnitId: "ac-pro-aoe30u-48hfn1-mp0-ga",
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
      id: "ac-pro-aoe-series-wall-single-cfg-3",
      slug: "ac-pro-aoe-series-wall-single-cfg-3",
      modelId: "ac-pro-aoe-series-wall-single",
      outdoorUnitId: "ac-pro-aoe30u-48hfn1-mp0-ga",
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
      id: "ac-pro-a5og-series-wall-single-cfg-1",
      slug: "ac-pro-a5og-series-wall-single-cfg-1",
      modelId: "ac-pro-a5og-series-wall-single",
      outdoorUnitId: "ac-pro-a5og-48hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.95,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-1",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-2",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-3",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-4",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-5",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-6",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-7",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-8",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-9",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-10",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-11",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-12",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-13",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-14",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-15",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-16",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-17",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-18",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-19",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-20",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-21",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-22",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-23",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-24",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-25",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-26",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-27",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-28",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-29",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-30",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-31",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-32",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-33",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-34",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-35",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-36",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-37",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-38",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-39",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-40",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-41",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-42",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-43",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-44",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-45",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-46",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-47",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-48",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-49",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-50",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-51",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-52",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-53",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-54",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-55",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-56",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-57",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-58",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-59",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-60",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-61",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-62",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-63",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-64",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-65",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-66",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-67",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-68",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-69",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-70",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-71",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-72",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-73",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-74",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-75",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-76",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-77",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-78",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-79",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-80",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-81",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-82",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-83",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-84",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-85",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-86",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-87",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-88",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-89",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-90",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-91",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-92",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-93",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-94",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-95",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-96",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-97",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-98",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-99",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-100",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-101",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-102",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-103",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-104",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-105",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-106",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-107",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-108",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-109",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-110",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-111",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-112",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-113",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-114",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-115",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-116",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-117",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-118",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-119",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-120",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-121",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-122",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-123",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-124",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-125",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-126",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-127",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-128",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-129",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-130",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-131",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-132",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-133",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-134",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-135",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-136",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-137",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-138",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-139",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-140",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-141",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-142",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-143",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-144",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-145",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-146",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-147",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-148",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-149",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-150",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-151",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-152",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-153",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-154",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-155",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-156",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-157",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-158",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-159",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-160",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-161",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-162",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-163",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-164",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-165",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-166",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-167",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-168",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-169",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-170",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-171",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-172",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-173",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-174",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-175",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-176",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-177",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-178",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-179",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-180",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-181",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-182",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-183",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-184",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-185",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-186",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-187",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-188",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-189",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-190",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-191",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-192",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-193",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-194",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-195",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-196",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-197",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-198",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-199",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-200",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-201",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-202",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-203",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-204",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-205",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-206",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-207",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-208",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-209",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-210",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-211",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-212",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-213",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-214",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-215",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-216",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-217",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-218",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-219",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-220",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-221",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-222",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-223",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-224",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-225",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-226",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-227",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-228",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-229",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-230",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-231",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-232",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-233",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-234",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-235",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-236",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-237",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-238",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-239",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-240",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-241",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-242",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-243",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-244",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-245",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-246",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-247",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-248",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-249",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-250",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-251",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-252",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-253",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-254",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-255",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-256",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-257",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-258",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-259",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-260",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-261",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-262",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-263",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-264",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-265",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-266",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-267",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-268",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-269",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-270",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-271",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-272",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-273",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-274",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-275",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-276",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-277",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-278",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-279",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-280",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-281",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-282",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-283",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-284",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-285",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-286",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-287",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-288",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-289",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-290",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-291",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-292",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-293",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-294",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-295",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-296",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-297",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-298",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-299",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-300",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-301",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-302",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-303",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-304",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-305",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-306",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-307",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-308",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-309",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-310",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-311",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-312",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-313",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-314",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-315",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-316",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-317",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-318",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-319",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-320",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-321",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-322",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-323",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-324",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-325",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-326",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-327",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-328",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-329",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-330",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-331",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-332",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-333",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-334",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-335",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-336",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-337",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-338",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-339",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-340",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-341",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-342",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-343",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-344",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-345",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-346",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-347",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-348",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-349",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-350",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-351",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-352",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-353",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-354",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-355",
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
      configurationId: "ac-pro-4hp18v-series-central-ducted-cfg-356",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-1",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-2",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-3",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-5",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-6",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-7",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-8",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2.54,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-10",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-12",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-13",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-14",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-15",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-16",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-17",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-18",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-19",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-20",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-21",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-22",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-23",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-24",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-25",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-26",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-27",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-28",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-29",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-30",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-31",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-32",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-33",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-34",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-35",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-36",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-37",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-38",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-39",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-40",
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
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-mhpc-series-wall-single-cfg-42",
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
      configurationId: "ac-pro-standard-wall-single-cfg-1",
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
      configurationId: "ac-pro-standard-wall-single-cfg-2",
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
      configurationId: "ac-pro-standard-wall-single-cfg-3",
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
      configurationId: "ac-pro-standard-wall-single-cfg-4",
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
      configurationId: "ac-pro-standard-wall-single-cfg-5",
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
      configurationId: "ac-pro-standard-wall-single-cfg-6",
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
      configurationId: "ac-pro-standard-wall-single-cfg-7",
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
      configurationId: "ac-pro-standard-wall-single-cfg-8",
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
      configurationId: "ac-pro-standard-wall-single-cfg-9",
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
      configurationId: "ac-pro-standard-wall-single-cfg-10",
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
      configurationId: "ac-pro-standard-wall-single-cfg-11",
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
      configurationId: "ac-pro-standard-wall-single-cfg-12",
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
      configurationId: "ac-pro-standard-wall-single-cfg-13",
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
      configurationId: "ac-pro-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-standard-wall-single-cfg-16",
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
      configurationId: "ac-pro-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-standard-wall-single-cfg-18",
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
      configurationId: "ac-pro-standard-wall-single-cfg-19",
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
      configurationId: "ac-pro-standard-wall-single-cfg-20",
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
      configurationId: "ac-pro-standard-wall-single-cfg-21",
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
      configurationId: "ac-pro-standard-wall-single-cfg-22",
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
      configurationId: "ac-pro-standard-wall-single-cfg-23",
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
      configurationId: "ac-pro-standard-wall-single-cfg-24",
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
      configurationId: "ac-pro-standard-wall-single-cfg-25",
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
      configurationId: "ac-pro-standard-wall-single-cfg-26",
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
      configurationId: "ac-pro-standard-wall-single-cfg-27",
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
      configurationId: "ac-pro-standard-wall-single-cfg-28",
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
      configurationId: "ac-pro-standard-wall-single-cfg-29",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-1",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-2",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-3",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-4",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-5",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-6",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-7",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-8",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-10",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-11",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-16",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-17",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-19",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-21",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-23",
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
      configurationId: "ac-pro-sphp-series-central-ducted-cfg-24",
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
      configurationId: "ac-pro-mhpc-series-central-ducted-cfg-1",
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
      configurationId: "ac-pro-mhpc-series-central-ducted-cfg-2",
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
      configurationId: "ac-pro-mhp-series-central-ducted-cfg-1",
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
      configurationId: "ac-pro-x-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-x-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-x-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-x-series-central-ducted-cfg-4",
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
      configurationId: "ac-pro-aox-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aox-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aox-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aox-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aox-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aox-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aox-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aox-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aox-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aox-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-avc-series-central-ducted-cfg-1",
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
      configurationId: "ac-pro-avc-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-avc-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-avc-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aod-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-avbl-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-avbl-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-avbl-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-avbl-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-aac-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-a-series-wall-single-cfg-1",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-2",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-3",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-4",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-5",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-6",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-7",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-8",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-9",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-10",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-11",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-12",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-13",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-14",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-15",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-16",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-17",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-18",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-19",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-20",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-21",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-22",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-23",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-24",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-25",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-26",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-27",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-28",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-29",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-30",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-31",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-32",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-33",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-34",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-35",
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
      configurationId: "ac-pro-a-series-wall-single-cfg-36",
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
      configurationId: "ac-pro-aoe-series-wall-single-cfg-1",
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
      configurationId: "ac-pro-aoe-series-wall-single-cfg-2",
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
      configurationId: "ac-pro-aoe-series-wall-single-cfg-3",
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
      configurationId: "ac-pro-a5og-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.75,
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
