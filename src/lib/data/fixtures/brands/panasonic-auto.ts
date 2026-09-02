import type { BrandDataset } from "../../types";

export const panasonicDataset: BrandDataset = {
  brand: {
    id: "panasonic",
    slug: "panasonic",
    name: "PANASONIC",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "panasonic-exterios-e",
      slug: "panasonic-exterios-e",
      name: "Exterios E",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-standard",
      slug: "panasonic-standard",
      name: "Standard",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone",
      slug: "panasonic-multizone",
      name: "Multizone",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe9wkuaw-cu-xe9wkua",
      slug: "panasonic-cs-xe9wkuaw-cu-xe9wkua",
      name: "CS-XE9WKUAW / CU-XE9WKUA",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe12wkuaw-cu-xe12wkua",
      slug: "panasonic-cs-xe12wkuaw-cu-xe12wkua",
      name: "CS-XE12WKUAW / CU-XE12WKUA",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe15wkuaw-cu-xe15wkua",
      slug: "panasonic-cs-xe15wkuaw-cu-xe15wkua",
      name: "CS-XE15WKUAW / CU-XE15WKUA",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe18wkuaw-cu-xe18wkua",
      slug: "panasonic-cs-xe18wkuaw-cu-xe18wkua",
      name: "CS-XE18WKUAW / CU-XE18WKUA",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series",
      slug: "panasonic-cu-series",
      name: "CU series",
      brandId: "panasonic",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz",
      slug: "panasonic-climapure-xz",
      name: "Climapure XZ",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z",
      slug: "panasonic-deluxe-z",
      name: "Deluxe Z",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "panasonic-exterios-e-wall-single",
      slug: "panasonic-exterios-e-wall-single",
      name: "Exterios E",
      seriesId: "panasonic-exterios-e",
      brandId: "panasonic",
      modelNumber: "Exterios E",
      normalizedModelNumber: "exterios-e",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 17200,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 12000,
      seer2Min: 19.5,
      seer2Max: 23,
      hspf2Min: 9,
      hspf2Max: 10.3,
      cop5FMin: 1.58,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-standard-wall-single",
      slug: "panasonic-standard-wall-single",
      name: "Standard",
      seriesId: "panasonic-standard",
      brandId: "panasonic",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8000,
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
      id: "panasonic-multizone-wall-single",
      slug: "panasonic-multizone-wall-single",
      name: "Multizone",
      seriesId: "panasonic-multizone",
      brandId: "panasonic",
      modelNumber: "Multizone",
      normalizedModelNumber: "multizone",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 17400,
      heatingCapacity5FMaxBtu: 35700,
      seer2Min: 19,
      seer2Max: 24.5,
      hspf2Min: 9.1,
      hspf2Max: 12.5,
      cop5FMin: 1.82,
      cop5FMax: 2.28,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe9wkuaw-cu-xe9wkua-wall-single",
      slug: "panasonic-cs-xe9wkuaw-cu-xe9wkua-wall-single",
      name: "CS-XE9WKUAW / CU-XE9WKUA",
      seriesId: "panasonic-cs-xe9wkuaw-cu-xe9wkua",
      brandId: "panasonic",
      modelNumber: "CS-XE9WKUAW / CU-XE9WKUA",
      normalizedModelNumber: "cs-xe9wkuaw-cu-xe9wkua",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 8700,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 8000,
      seer2Min: 27.3,
      seer2Max: 27.3,
      hspf2Min: 12,
      hspf2Max: 12,
      cop5FMin: 2.06,
      cop5FMax: 2.06,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe12wkuaw-cu-xe12wkua-wall-single",
      slug: "panasonic-cs-xe12wkuaw-cu-xe12wkua-wall-single",
      name: "CS-XE12WKUAW / CU-XE12WKUA",
      seriesId: "panasonic-cs-xe12wkuaw-cu-xe12wkua",
      brandId: "panasonic",
      modelNumber: "CS-XE12WKUAW / CU-XE12WKUA",
      normalizedModelNumber: "cs-xe12wkuaw-cu-xe12wkua",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      heatingCapacity5FMinBtu: 10000,
      heatingCapacity5FMaxBtu: 10000,
      seer2Min: 24.6,
      seer2Max: 24.6,
      hspf2Min: 11,
      hspf2Max: 11,
      cop5FMin: 2.13,
      cop5FMax: 2.13,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe15wkuaw-cu-xe15wkua-wall-single",
      slug: "panasonic-cs-xe15wkuaw-cu-xe15wkua-wall-single",
      name: "CS-XE15WKUAW / CU-XE15WKUA",
      seriesId: "panasonic-cs-xe15wkuaw-cu-xe15wkua",
      brandId: "panasonic",
      modelNumber: "CS-XE15WKUAW / CU-XE15WKUA",
      normalizedModelNumber: "cs-xe15wkuaw-cu-xe15wkua",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 14700,
      coolingCapacityMaxBtu: 14700,
      heatingCapacity5FMinBtu: 11000,
      heatingCapacity5FMaxBtu: 11000,
      seer2Min: 22,
      seer2Max: 22,
      hspf2Min: 11,
      hspf2Max: 11,
      cop5FMin: 1.87,
      cop5FMax: 1.87,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe18wkuaw-cu-xe18wkua-wall-single",
      slug: "panasonic-cs-xe18wkuaw-cu-xe18wkua-wall-single",
      name: "CS-XE18WKUAW / CU-XE18WKUA",
      seriesId: "panasonic-cs-xe18wkuaw-cu-xe18wkua",
      brandId: "panasonic",
      modelNumber: "CS-XE18WKUAW / CU-XE18WKUA",
      normalizedModelNumber: "cs-xe18wkuaw-cu-xe18wkua",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 14000,
      seer2Min: 22,
      seer2Max: 22,
      hspf2Min: 10.9,
      hspf2Max: 10.9,
      cop5FMin: 2.05,
      cop5FMax: 2.05,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted",
      slug: "panasonic-cu-series-central-ducted",
      name: "CU series",
      seriesId: "panasonic-cu-series",
      brandId: "panasonic",
      modelNumber: "CU series",
      normalizedModelNumber: "cu-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-wall-single",
      slug: "panasonic-climapure-xz-wall-single",
      name: "Climapure XZ",
      seriesId: "panasonic-climapure-xz",
      brandId: "panasonic",
      modelNumber: "Climapure XZ",
      normalizedModelNumber: "climapure-xz",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 14500,
      heatingCapacity5FMaxBtu: 25200,
      seer2Min: 20.5,
      seer2Max: 27.5,
      hspf2Min: 11,
      hspf2Max: 12,
      cop5FMin: 2.11,
      cop5FMax: 2.31,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-wall-single",
      slug: "panasonic-deluxe-z-wall-single",
      name: "Deluxe Z",
      seriesId: "panasonic-deluxe-z",
      brandId: "panasonic",
      modelNumber: "Deluxe Z",
      normalizedModelNumber: "deluxe-z",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 14500,
      heatingCapacity5FMaxBtu: 25200,
      seer2Min: 20.5,
      seer2Max: 27.5,
      hspf2Min: 11,
      hspf2Max: 12,
      cop5FMin: 2.11,
      cop5FMax: 2.31,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "panasonic-cu-e9rkua",
      modelNumber: "CU-E9RKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e12rkua",
      modelNumber: "CU-E12RKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e18rkua",
      modelNumber: "CU-E18RKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e9sd3ua",
      modelNumber: "CU-E9SD3UA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e12sd3ua",
      modelNumber: "CU-E12SD3UA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe9skua",
      modelNumber: "CU-XE9SKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe12skua",
      modelNumber: "CU-XE12SKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe15skua",
      modelNumber: "CU-XE15SKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu5e36qbu5",
      modelNumber: "CU5E36QBU5",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe12skua-1",
      modelNumber: "CU-XE12SKUA-1",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe15skua-1",
      modelNumber: "CU-XE15SKUA-1",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe24wkua",
      modelNumber: "CU-XE24WKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e18yahk6",
      modelNumber: "CU-E18YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e36yahk6",
      modelNumber: "CU-E36YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e48yahk6",
      modelNumber: "CU-E48YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e60yahk6",
      modelNumber: "CU-E60YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e30yahk6",
      modelNumber: "CU-E30YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-2e18sbu-5",
      modelNumber: "CU-2E18SBU-5",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-3e19rbu-5",
      modelNumber: "CU-3E19RBU-5",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-4e24rbu-5",
      modelNumber: "CU-4E24RBU-5",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-2z18abuc",
      modelNumber: "CU-2Z18ABUC",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-3z22abuc",
      modelNumber: "CU-3Z22ABUC",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-4z24bbuc",
      modelNumber: "CU-4Z24BBUC",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-5z36bbuc",
      modelNumber: "CU-5Z36BBUC",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe9wkua",
      modelNumber: "CU-XE9WKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe12wkua",
      modelNumber: "CU-XE12WKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe15wkua",
      modelNumber: "CU-XE15WKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xe18wkua",
      modelNumber: "CU-XE18WKUA",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-e24yahk6",
      modelNumber: "CU-E24YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-he18yahk6",
      modelNumber: "CU-HE18YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-he24yahk6",
      modelNumber: "CU-HE24YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-he30yahk6",
      modelNumber: "CU-HE30YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-he36yahk6",
      modelNumber: "CU-HE36YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-he48yahk6",
      modelNumber: "CU-HE48YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-he55yahk6",
      modelNumber: "CU-HE55YAHK6",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-m18bahu",
      modelNumber: "CU-M18BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-m30bahu",
      modelNumber: "CU-M30BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-m24bahu",
      modelNumber: "CU-M24BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-m36bahu",
      modelNumber: "CU-M36BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-m48bahu",
      modelNumber: "CU-M48BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-m60bahu",
      modelNumber: "CU-M60BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-hm18bahu",
      modelNumber: "CU-HM18BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-hm24bahu",
      modelNumber: "CU-HM24BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-hm30bahu",
      modelNumber: "CU-HM30BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-hm36bahu",
      modelNumber: "CU-HM36BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-hm48bahu",
      modelNumber: "CU-HM48BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-hm55bahu",
      modelNumber: "CU-HM55BAHU",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xz9akuac",
      modelNumber: "CU-XZ9AKUAC",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xz12akuac",
      modelNumber: "CU-XZ12AKUAC",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xz15akuac",
      modelNumber: "CU-XZ15AKUAC",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xz18akuac",
      modelNumber: "CU-XZ18AKUAC",
      brandId: "panasonic",
      refrigerant: null as any,
    },
    {
      id: "panasonic-cu-xz24akuac",
      modelNumber: "CU-XZ24AKUAC",
      brandId: "panasonic",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "panasonic-exterios-e-wall-single-cfg-1",
      slug: "panasonic-exterios-e-wall-single-cfg-1",
      modelId: "panasonic-exterios-e-wall-single",
      outdoorUnitId: "panasonic-cu-e9rkua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 10.3,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-exterios-e-wall-single-cfg-2",
      slug: "panasonic-exterios-e-wall-single-cfg-2",
      modelId: "panasonic-exterios-e-wall-single",
      outdoorUnitId: "panasonic-cu-e12rkua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 22.5,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-exterios-e-wall-single-cfg-3",
      slug: "panasonic-exterios-e-wall-single-cfg-3",
      modelId: "panasonic-exterios-e-wall-single",
      outdoorUnitId: "panasonic-cu-e18rkua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 19.5,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-exterios-e-wall-single-cfg-4",
      slug: "panasonic-exterios-e-wall-single-cfg-4",
      modelId: "panasonic-exterios-e-wall-single",
      outdoorUnitId: "panasonic-cu-e9sd3ua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 9.9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-exterios-e-wall-single-cfg-5",
      slug: "panasonic-exterios-e-wall-single-cfg-5",
      modelId: "panasonic-exterios-e-wall-single",
      outdoorUnitId: "panasonic-cu-e12sd3ua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-standard-wall-single-cfg-1",
      slug: "panasonic-standard-wall-single-cfg-1",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-xe9skua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 8700,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-standard-wall-single-cfg-2",
      slug: "panasonic-standard-wall-single-cfg-2",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-xe12skua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-standard-wall-single-cfg-3",
      slug: "panasonic-standard-wall-single-cfg-3",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-xe15skua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-standard-wall-single-cfg-4",
      slug: "panasonic-standard-wall-single-cfg-4",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu5e36qbu5",
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
      id: "panasonic-standard-wall-single-cfg-5",
      slug: "panasonic-standard-wall-single-cfg-5",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-xe12skua-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-standard-wall-single-cfg-6",
      slug: "panasonic-standard-wall-single-cfg-6",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-xe15skua-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-standard-wall-single-cfg-7",
      slug: "panasonic-standard-wall-single-cfg-7",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-xe24wkua",
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
      id: "panasonic-standard-wall-single-cfg-8",
      slug: "panasonic-standard-wall-single-cfg-8",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e18yahk6",
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
      id: "panasonic-standard-wall-single-cfg-9",
      slug: "panasonic-standard-wall-single-cfg-9",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e36yahk6",
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
      id: "panasonic-standard-wall-single-cfg-10",
      slug: "panasonic-standard-wall-single-cfg-10",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e48yahk6",
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
      id: "panasonic-standard-wall-single-cfg-11",
      slug: "panasonic-standard-wall-single-cfg-11",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e60yahk6",
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
      id: "panasonic-standard-wall-single-cfg-12",
      slug: "panasonic-standard-wall-single-cfg-12",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e18yahk6",
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
      id: "panasonic-standard-wall-single-cfg-13",
      slug: "panasonic-standard-wall-single-cfg-13",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e30yahk6",
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
      id: "panasonic-standard-wall-single-cfg-14",
      slug: "panasonic-standard-wall-single-cfg-14",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e36yahk6",
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
      id: "panasonic-standard-wall-single-cfg-15",
      slug: "panasonic-standard-wall-single-cfg-15",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e48yahk6",
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
      id: "panasonic-standard-wall-single-cfg-16",
      slug: "panasonic-standard-wall-single-cfg-16",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e60yahk6",
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
      id: "panasonic-standard-wall-single-cfg-17",
      slug: "panasonic-standard-wall-single-cfg-17",
      modelId: "panasonic-standard-wall-single",
      outdoorUnitId: "panasonic-cu-e18yahk6",
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
      id: "panasonic-multizone-wall-single-cfg-1",
      slug: "panasonic-multizone-wall-single-cfg-1",
      modelId: "panasonic-multizone-wall-single",
      outdoorUnitId: "panasonic-cu-2e18sbu-5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 19,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-wall-single-cfg-2",
      slug: "panasonic-multizone-wall-single-cfg-2",
      modelId: "panasonic-multizone-wall-single",
      outdoorUnitId: "panasonic-cu-3e19rbu-5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-wall-single-cfg-3",
      slug: "panasonic-multizone-wall-single-cfg-3",
      modelId: "panasonic-multizone-wall-single",
      outdoorUnitId: "panasonic-cu-4e24rbu-5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-wall-single-cfg-4",
      slug: "panasonic-multizone-wall-single-cfg-4",
      modelId: "panasonic-multizone-wall-single",
      outdoorUnitId: "panasonic-cu-2z18abuc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-wall-single-cfg-5",
      slug: "panasonic-multizone-wall-single-cfg-5",
      modelId: "panasonic-multizone-wall-single",
      outdoorUnitId: "panasonic-cu-3z22abuc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-wall-single-cfg-6",
      slug: "panasonic-multizone-wall-single-cfg-6",
      modelId: "panasonic-multizone-wall-single",
      outdoorUnitId: "panasonic-cu-4z24bbuc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-wall-single-cfg-7",
      slug: "panasonic-multizone-wall-single-cfg-7",
      modelId: "panasonic-multizone-wall-single",
      outdoorUnitId: "panasonic-cu-5z36bbuc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe9wkuaw-cu-xe9wkua-wall-single-cfg-1",
      slug: "panasonic-cs-xe9wkuaw-cu-xe9wkua-wall-single-cfg-1",
      modelId: "panasonic-cs-xe9wkuaw-cu-xe9wkua-wall-single",
      outdoorUnitId: "panasonic-cu-xe9wkua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 8700,
      seer2: 27.3,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe12wkuaw-cu-xe12wkua-wall-single-cfg-1",
      slug: "panasonic-cs-xe12wkuaw-cu-xe12wkua-wall-single-cfg-1",
      modelId: "panasonic-cs-xe12wkuaw-cu-xe12wkua-wall-single",
      outdoorUnitId: "panasonic-cu-xe12wkua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 24.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe15wkuaw-cu-xe15wkua-wall-single-cfg-1",
      slug: "panasonic-cs-xe15wkuaw-cu-xe15wkua-wall-single-cfg-1",
      modelId: "panasonic-cs-xe15wkuaw-cu-xe15wkua-wall-single",
      outdoorUnitId: "panasonic-cu-xe15wkua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14700,
      coolingCapacityMaxBtu: 14700,
      seer2: 22,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cs-xe18wkuaw-cu-xe18wkua-wall-single-cfg-1",
      slug: "panasonic-cs-xe18wkuaw-cu-xe18wkua-wall-single-cfg-1",
      modelId: "panasonic-cs-xe18wkuaw-cu-xe18wkua-wall-single",
      outdoorUnitId: "panasonic-cu-xe18wkua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 22,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-1",
      slug: "panasonic-cu-series-central-ducted-cfg-1",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-e24yahk6",
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
      id: "panasonic-cu-series-central-ducted-cfg-2",
      slug: "panasonic-cu-series-central-ducted-cfg-2",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he18yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-3",
      slug: "panasonic-cu-series-central-ducted-cfg-3",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he24yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-4",
      slug: "panasonic-cu-series-central-ducted-cfg-4",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he30yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-5",
      slug: "panasonic-cu-series-central-ducted-cfg-5",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he36yahk6",
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
      id: "panasonic-cu-series-central-ducted-cfg-6",
      slug: "panasonic-cu-series-central-ducted-cfg-6",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he48yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-7",
      slug: "panasonic-cu-series-central-ducted-cfg-7",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he55yahk6",
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
      id: "panasonic-cu-series-central-ducted-cfg-8",
      slug: "panasonic-cu-series-central-ducted-cfg-8",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-e24yahk6",
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
      id: "panasonic-cu-series-central-ducted-cfg-9",
      slug: "panasonic-cu-series-central-ducted-cfg-9",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he18yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-10",
      slug: "panasonic-cu-series-central-ducted-cfg-10",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he24yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-11",
      slug: "panasonic-cu-series-central-ducted-cfg-11",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he30yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-12",
      slug: "panasonic-cu-series-central-ducted-cfg-12",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he36yahk6",
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
      id: "panasonic-cu-series-central-ducted-cfg-13",
      slug: "panasonic-cu-series-central-ducted-cfg-13",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he48yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-14",
      slug: "panasonic-cu-series-central-ducted-cfg-14",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he18yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-15",
      slug: "panasonic-cu-series-central-ducted-cfg-15",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he36yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-16",
      slug: "panasonic-cu-series-central-ducted-cfg-16",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he55yahk6",
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
      id: "panasonic-cu-series-central-ducted-cfg-17",
      slug: "panasonic-cu-series-central-ducted-cfg-17",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he18yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-18",
      slug: "panasonic-cu-series-central-ducted-cfg-18",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-he36yahk6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-19",
      slug: "panasonic-cu-series-central-ducted-cfg-19",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m18bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-20",
      slug: "panasonic-cu-series-central-ducted-cfg-20",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m30bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.1,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-21",
      slug: "panasonic-cu-series-central-ducted-cfg-21",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m24bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-22",
      slug: "panasonic-cu-series-central-ducted-cfg-22",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m36bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-23",
      slug: "panasonic-cu-series-central-ducted-cfg-23",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m48bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-24",
      slug: "panasonic-cu-series-central-ducted-cfg-24",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m60bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-25",
      slug: "panasonic-cu-series-central-ducted-cfg-25",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm18bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-26",
      slug: "panasonic-cu-series-central-ducted-cfg-26",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm24bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-27",
      slug: "panasonic-cu-series-central-ducted-cfg-27",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm30bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-28",
      slug: "panasonic-cu-series-central-ducted-cfg-28",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm36bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-29",
      slug: "panasonic-cu-series-central-ducted-cfg-29",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm48bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-30",
      slug: "panasonic-cu-series-central-ducted-cfg-30",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm55bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-31",
      slug: "panasonic-cu-series-central-ducted-cfg-31",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm18bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-32",
      slug: "panasonic-cu-series-central-ducted-cfg-32",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm18bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-33",
      slug: "panasonic-cu-series-central-ducted-cfg-33",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm24bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-34",
      slug: "panasonic-cu-series-central-ducted-cfg-34",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm24bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-35",
      slug: "panasonic-cu-series-central-ducted-cfg-35",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm30bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.3,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-36",
      slug: "panasonic-cu-series-central-ducted-cfg-36",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm30bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-37",
      slug: "panasonic-cu-series-central-ducted-cfg-37",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm30bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-38",
      slug: "panasonic-cu-series-central-ducted-cfg-38",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm36bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-39",
      slug: "panasonic-cu-series-central-ducted-cfg-39",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm36bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-40",
      slug: "panasonic-cu-series-central-ducted-cfg-40",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm55bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-41",
      slug: "panasonic-cu-series-central-ducted-cfg-41",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m18bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-42",
      slug: "panasonic-cu-series-central-ducted-cfg-42",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m18bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-43",
      slug: "panasonic-cu-series-central-ducted-cfg-43",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m24bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-44",
      slug: "panasonic-cu-series-central-ducted-cfg-44",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m24bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-45",
      slug: "panasonic-cu-series-central-ducted-cfg-45",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm55bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-46",
      slug: "panasonic-cu-series-central-ducted-cfg-46",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm48bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-47",
      slug: "panasonic-cu-series-central-ducted-cfg-47",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m36bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-48",
      slug: "panasonic-cu-series-central-ducted-cfg-48",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m36bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-49",
      slug: "panasonic-cu-series-central-ducted-cfg-49",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m30bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.1,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-50",
      slug: "panasonic-cu-series-central-ducted-cfg-50",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m30bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.1,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-51",
      slug: "panasonic-cu-series-central-ducted-cfg-51",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm48bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-52",
      slug: "panasonic-cu-series-central-ducted-cfg-52",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm55bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-53",
      slug: "panasonic-cu-series-central-ducted-cfg-53",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-hm48bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-54",
      slug: "panasonic-cu-series-central-ducted-cfg-54",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m30bahu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.1,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-55",
      slug: "panasonic-cu-series-central-ducted-cfg-55",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m36bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-56",
      slug: "panasonic-cu-series-central-ducted-cfg-56",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m48bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-57",
      slug: "panasonic-cu-series-central-ducted-cfg-57",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m48bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-58",
      slug: "panasonic-cu-series-central-ducted-cfg-58",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m60bahu",
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
      id: "panasonic-cu-series-central-ducted-cfg-59",
      slug: "panasonic-cu-series-central-ducted-cfg-59",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic-cu-m60bahu",
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
      id: "panasonic-climapure-xz-wall-single-cfg-1",
      slug: "panasonic-climapure-xz-wall-single-cfg-1",
      modelId: "panasonic-climapure-xz-wall-single",
      outdoorUnitId: "panasonic-cu-xz9akuac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 8700,
      seer2: 27.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-wall-single-cfg-2",
      slug: "panasonic-climapure-xz-wall-single-cfg-2",
      modelId: "panasonic-climapure-xz-wall-single",
      outdoorUnitId: "panasonic-cu-xz12akuac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 25,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-wall-single-cfg-3",
      slug: "panasonic-climapure-xz-wall-single-cfg-3",
      modelId: "panasonic-climapure-xz-wall-single",
      outdoorUnitId: "panasonic-cu-xz15akuac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14700,
      coolingCapacityMaxBtu: 14700,
      seer2: 22.4,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-wall-single-cfg-4",
      slug: "panasonic-climapure-xz-wall-single-cfg-4",
      modelId: "panasonic-climapure-xz-wall-single",
      outdoorUnitId: "panasonic-cu-xz18akuac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 22,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-wall-single-cfg-5",
      slug: "panasonic-climapure-xz-wall-single-cfg-5",
      modelId: "panasonic-climapure-xz-wall-single",
      outdoorUnitId: "panasonic-cu-xz24akuac",
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
      id: "panasonic-deluxe-z-wall-single-cfg-1",
      slug: "panasonic-deluxe-z-wall-single-cfg-1",
      modelId: "panasonic-deluxe-z-wall-single",
      outdoorUnitId: "panasonic-cu-xz9akuac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 8700,
      seer2: 27.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-wall-single-cfg-2",
      slug: "panasonic-deluxe-z-wall-single-cfg-2",
      modelId: "panasonic-deluxe-z-wall-single",
      outdoorUnitId: "panasonic-cu-xz12akuac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 25,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-wall-single-cfg-3",
      slug: "panasonic-deluxe-z-wall-single-cfg-3",
      modelId: "panasonic-deluxe-z-wall-single",
      outdoorUnitId: "panasonic-cu-xz15akuac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14700,
      coolingCapacityMaxBtu: 14700,
      seer2: 22.4,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-wall-single-cfg-4",
      slug: "panasonic-deluxe-z-wall-single-cfg-4",
      modelId: "panasonic-deluxe-z-wall-single",
      outdoorUnitId: "panasonic-cu-xz18akuac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 22,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-wall-single-cfg-5",
      slug: "panasonic-deluxe-z-wall-single-cfg-5",
      modelId: "panasonic-deluxe-z-wall-single",
      outdoorUnitId: "panasonic-cu-xz24akuac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "panasonic-exterios-e-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 1.64,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-exterios-e-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 1.58,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-exterios-e-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-exterios-e-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-exterios-e-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 1.64,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-standard-wall-single-cfg-1",
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
      configurationId: "panasonic-standard-wall-single-cfg-2",
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
      configurationId: "panasonic-standard-wall-single-cfg-3",
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
      configurationId: "panasonic-standard-wall-single-cfg-4",
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
      configurationId: "panasonic-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-standard-wall-single-cfg-7",
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
      configurationId: "panasonic-standard-wall-single-cfg-8",
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
      configurationId: "panasonic-standard-wall-single-cfg-9",
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
      configurationId: "panasonic-standard-wall-single-cfg-10",
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
      configurationId: "panasonic-standard-wall-single-cfg-11",
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
      configurationId: "panasonic-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-standard-wall-single-cfg-13",
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
      configurationId: "panasonic-standard-wall-single-cfg-14",
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
      configurationId: "panasonic-standard-wall-single-cfg-15",
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
      configurationId: "panasonic-standard-wall-single-cfg-16",
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
      configurationId: "panasonic-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35700,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cs-xe9wkuaw-cu-xe9wkua-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cs-xe12wkuaw-cu-xe12wkua-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.13,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cs-xe15wkuaw-cu-xe15wkua-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cs-xe18wkuaw-cu-xe18wkua-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-1",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-3",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-5",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-7",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-8",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-9",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-12",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-13",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-14",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-16",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-17",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-19",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-21",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-22",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-23",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-24",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-25",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-26",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-27",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-28",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-29",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-30",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-33",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-34",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-38",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-39",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-43",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-44",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-46",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-47",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-48",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-52",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-56",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-58",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-59",
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
      configurationId: "panasonic-climapure-xz-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: 2.25,
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
