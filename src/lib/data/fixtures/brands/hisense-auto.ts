import type { BrandDataset } from "../../types";

export const hisenseDataset: BrandDataset = {
  brand: {
    id: "hisense",
    slug: "hisense",
    name: "HISENSE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "hisense-standard",
      slug: "hisense-standard",
      name: "Standard",
      brandId: "hisense",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra",
      slug: "hisense-hiultra",
      name: "HiULTRA",
      brandId: "hisense",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme",
      slug: "hisense-hi-multi-xtreme",
      name: "Hi MULTI Xtreme",
      brandId: "hisense",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni",
      slug: "hisense-hi-uni",
      name: "Hi UNI",
      brandId: "hisense",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd",
      slug: "hisense-hi-ultra-hd",
      name: "Hi ULTRA HD",
      brandId: "hisense",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-coil",
      slug: "hisense-hi-ultra-hd-coil",
      name: "Hi ULTRA HD-Coil",
      brandId: "hisense",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd",
      slug: "hisense-hi-pro-hd",
      name: "Hi-PRO HD",
      brandId: "hisense",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-smartsense",
      slug: "hisense-smartsense",
      name: "SmartSense",
      brandId: "hisense",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra",
      slug: "hisense-hi-ultra",
      name: "Hi-ULTRA",
      brandId: "hisense",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro",
      slug: "hisense-hi-pro",
      name: "Hi-PRO",
      brandId: "hisense",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-edge",
      slug: "hisense-hi-edge",
      name: "HI-EDGE",
      brandId: "hisense",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "hisense-standard-wall-single",
      slug: "hisense-standard-wall-single",
      name: "Standard",
      seriesId: "hisense-standard",
      brandId: "hisense",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 63000,
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
      id: "hisense-hiultra-wall-single",
      slug: "hisense-hiultra-wall-single",
      name: "HiULTRA",
      seriesId: "hisense-hiultra",
      brandId: "hisense",
      modelNumber: "HiULTRA",
      normalizedModelNumber: "hiultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 15500,
      seer2Min: 18.5,
      seer2Max: 27.5,
      hspf2Min: 8.6,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single",
      slug: "hisense-hi-multi-xtreme-wall-single",
      name: "Hi MULTI Xtreme",
      seriesId: "hisense-hi-multi-xtreme",
      brandId: "hisense",
      modelNumber: "Hi MULTI Xtreme",
      normalizedModelNumber: "hi-multi-xtreme",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 11500,
      heatingCapacity5FMaxBtu: 28400,
      seer2Min: 17.5,
      seer2Max: 23,
      hspf2Min: 8.6,
      hspf2Max: 10,
      cop5FMin: 1.82,
      cop5FMax: 1.99,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single",
      slug: "hisense-hi-uni-wall-single",
      name: "Hi UNI",
      seriesId: "hisense-hi-uni",
      brandId: "hisense",
      modelNumber: "Hi UNI",
      normalizedModelNumber: "hi-uni",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 5500,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 18,
      seer2Max: 22,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-central-ducted",
      slug: "hisense-hi-ultra-hd-central-ducted",
      name: "Hi ULTRA HD",
      seriesId: "hisense-hi-ultra-hd",
      brandId: "hisense",
      modelNumber: "Hi ULTRA HD",
      normalizedModelNumber: "hi-ultra-hd",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 32200,
      seer2Min: 16.5,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-coil-central-ducted",
      slug: "hisense-hi-ultra-hd-coil-central-ducted",
      name: "Hi ULTRA HD-Coil",
      seriesId: "hisense-hi-ultra-hd-coil",
      brandId: "hisense",
      modelNumber: "Hi ULTRA HD-Coil",
      normalizedModelNumber: "hi-ultra-hd-coil",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 31200,
      seer2Min: 15.5,
      seer2Max: 15.55,
      hspf2Min: 8.55,
      hspf2Max: 9.4,
      cop5FMin: 1.94,
      cop5FMax: 2.08,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd-central-ducted",
      slug: "hisense-hi-pro-hd-central-ducted",
      name: "Hi-PRO HD",
      seriesId: "hisense-hi-pro-hd",
      brandId: "hisense",
      modelNumber: "Hi-PRO HD",
      normalizedModelNumber: "hi-pro-hd",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 20400,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 19,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 2.15,
      cop5FMax: 2.52,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-smartsense-wall-single",
      slug: "hisense-smartsense-wall-single",
      name: "SmartSense",
      seriesId: "hisense-smartsense",
      brandId: "hisense",
      modelNumber: "SmartSense",
      normalizedModelNumber: "smartsense",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 14800,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 9.8,
      cop5FMin: 2.1,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-wall-single",
      slug: "hisense-hi-ultra-wall-single",
      name: "Hi-ULTRA",
      seriesId: "hisense-hi-ultra",
      brandId: "hisense",
      modelNumber: "Hi-ULTRA",
      normalizedModelNumber: "hi-ultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 9000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 21,
      seer2Max: 25,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.9,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-wall-single",
      slug: "hisense-hi-pro-wall-single",
      name: "Hi-PRO",
      seriesId: "hisense-hi-pro",
      brandId: "hisense",
      modelNumber: "Hi-PRO",
      normalizedModelNumber: "hi-pro",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 13000,
      heatingCapacity5FMaxBtu: 13000,
      seer2Min: 30,
      seer2Max: 32,
      hspf2Min: 11.8,
      hspf2Max: 11.8,
      cop5FMin: 2.25,
      cop5FMax: 2.25,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-edge-wall-single",
      slug: "hisense-hi-edge-wall-single",
      name: "HI-EDGE",
      seriesId: "hisense-hi-edge",
      brandId: "hisense",
      modelNumber: "HI-EDGE",
      normalizedModelNumber: "hi-edge",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 14800,
      seer2Min: 20,
      seer2Max: 22.5,
      hspf2Min: 9,
      hspf2Max: 9.8,
      cop5FMin: 2.1,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "hisense-as-09uw3sve",
      modelNumber: "AS-09UW3SVE",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-as-12uw3sxe",
      modelNumber: "AS-12UW3SXE",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-as-18uw3sbb",
      modelNumber: "AS-18UW3SBB",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-36h3fh",
      modelNumber: "AVW-36H3FH",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-48h3fh",
      modelNumber: "AVW-48H3FH",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-60h3fh",
      modelNumber: "AVW-60H3FH",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auw-36u3st1",
      modelNumber: "AUW-36U3ST1",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-60u3sp2",
      modelNumber: "AUWR-60U3SP2",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-28h3fh2",
      modelNumber: "AVW-28H3FH2",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-2424tuo",
      modelNumber: "AST-2424TUO",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-1824txo",
      modelNumber: "AST-1824TXO",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-0924txo",
      modelNumber: "AST-0924TXO",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-1224tuo",
      modelNumber: "AST-1224TUO",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-24h3dh2h1",
      modelNumber: "AVW-24H3DH2H1",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-36h3dh2h1",
      modelNumber: "AVW-36H3DH2H1",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-48h3dh2h1",
      modelNumber: "AVW-48H3DH2H1",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-12u3r25ss",
      modelNumber: "AO-12U3R25SS",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-24u3r25ss",
      modelNumber: "AO-24U3R25SS",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-36f3dah2",
      modelNumber: "AVW-36F3DAH2",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-48f3dah2",
      modelNumber: "AVW-48F3DAH2",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-avw-60f3dah2",
      modelNumber: "AVW-60F3DAH2",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aoh-36u3t25u",
      modelNumber: "AOH-36U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aoh-60u3t25u",
      modelNumber: "AOH-60U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-12u3r25e",
      modelNumber: "AO-12U3R25E��",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-24u3r25e",
      modelNumber: "AO-24U3R25E",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-as-09uw3sxe00",
      modelNumber: "AS-09UW3SXE00",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-as-12uw3sxa00",
      modelNumber: "AS-12UW3SXA00",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-as-09uw1sve00",
      modelNumber: "AS-09UW1SVE00",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-as-12uw1sxe00",
      modelNumber: "AS-12UW1SXE00",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-09uw3sve01",
      modelNumber: "AST-09UW3SVE01",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-18uw3sbb00",
      modelNumber: "AST-18UW3SBB00",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-24uw3sdb01",
      modelNumber: "AST-24UW3SDB01",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-12uw3sxe01",
      modelNumber: "AST-12UW3SXE01",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-09uw3svg01a",
      modelNumber: "AST-09UW3SVG01A",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-12uw3sxg01a",
      modelNumber: "AST-12UW3SXG01A",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-24uw3sdn01a",
      modelNumber: "AST-24UW3SDN01A",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-09uw3sxe01",
      modelNumber: "AST-09UW3SXE01",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-12uw3sxe02",
      modelNumber: "AST-12UW3SXE02",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-18uw3sbb01",
      modelNumber: "AST-18UW3SBB01",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-as-24uw3skk00",
      modelNumber: "AS-24UW3SKK00",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-as-12uw3sxa-00",
      modelNumber: "AS-12UW3SXA**00",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-18uw3sbb-00",
      modelNumber: "AST-18UW3SBB**00",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-12uw3sxe-01",
      modelNumber: "AST-12UW3SXE**01",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-09uw3svg01b",
      modelNumber: "AST-09UW3SVG01B",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-12uw3sxg01b",
      modelNumber: "AST-12UW3SXG01B",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-18uw3sbn00b",
      modelNumber: "AST-18UW3SBN00B",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ast-24uw3sdn01b",
      modelNumber: "AST-24UW3SDN01B",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-amw3-24u3saa",
      modelNumber: "AMW3-24U3SAA",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-amw4-36u3sta",
      modelNumber: "AMW4-36U3STA",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-amw2-18u3sfa",
      modelNumber: "AMW2-18U3SFA",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-amw5-42u3sta",
      modelNumber: "AMW5-42U3STA",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-amo2-18u3t25u",
      modelNumber: "AMO2-18U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-amo3-27u3t25u",
      modelNumber: "AMO3-27U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-amo5-45u3t25u",
      modelNumber: "AMO5-45U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-amo4-36u3t25u",
      modelNumber: "AMO4-36U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auw-24u3sa",
      modelNumber: "AUW-24U3SA",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auw-09u3ss",
      modelNumber: "AUW-09U3SS",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auw-12u3ss",
      modelNumber: "AUW-12U3SS",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auw-18u3sf",
      modelNumber: "AUW-18U3SF",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aou-09u3t25u",
      modelNumber: "AOU-09U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aou-12u3t25u",
      modelNumber: "AOU-12U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aou-18u3t25u",
      modelNumber: "AOU-18U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aou-24u3t25u",
      modelNumber: "AOU-24U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aou-36u3t25u",
      modelNumber: "AOU-36U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-24u3sf2",
      modelNumber: "AUWR-24U3SF2",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-48u3sp2",
      modelNumber: "AUWR-48U3SP2",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-36u3sa2",
      modelNumber: "AUWR-36U3SA2",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aoh-24u3t25u",
      modelNumber: "AOH-24U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aoh-48u3t25u",
      modelNumber: "AOH-48U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-36u3sa",
      modelNumber: "AUWR-36U3SA",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-48u3sp",
      modelNumber: "AUWR-48U3SP",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-24u3tk5",
      modelNumber: "AUWR-24U3TK5",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-36u3tw5",
      modelNumber: "AUWR-36U3TW5",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-60u3th5",
      modelNumber: "AUWR-60U3TH5",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-2424p",
      modelNumber: "AUWR-2424P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-3624p",
      modelNumber: "AUWR-3624P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-6024p",
      modelNumber: "AUWR-6024P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-auwr-4824p",
      modelNumber: "AUWR-4824P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aoh-24u3t24p",
      modelNumber: "AOH-24U3T24P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aoh-36u3t24p",
      modelNumber: "AOH-36U3T24P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aoh-60u3t24p",
      modelNumber: "AOH-60U3T24P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-aoh-48u3t24p",
      modelNumber: "AOH-48U3T24P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-18u3r25ss",
      modelNumber: "AO-18U3R25SS",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-09u3r25ss",
      modelNumber: "AO-09U3R25SS",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-24u3t25u",
      modelNumber: "AO-24U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-18u3t25u",
      modelNumber: "AO-18U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-12u3t25u",
      modelNumber: "AO-12U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-09u3t25u",
      modelNumber: "AO-09U3T25U",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-09u3t25p",
      modelNumber: "AO-09U3T25P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-12u3t25p",
      modelNumber: "AO-12U3T25P",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-09u3r25e",
      modelNumber: "AO-09U3R25E",
      brandId: "hisense",
      refrigerant: null as any,
    },
    {
      id: "hisense-ao-18u3r25e",
      modelNumber: "AO-18U3R25E",
      brandId: "hisense",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "hisense-standard-wall-single-cfg-1",
      slug: "hisense-standard-wall-single-cfg-1",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-as-09uw3sve",
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
      id: "hisense-standard-wall-single-cfg-2",
      slug: "hisense-standard-wall-single-cfg-2",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-as-12uw3sxe",
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
      id: "hisense-standard-wall-single-cfg-3",
      slug: "hisense-standard-wall-single-cfg-3",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-as-18uw3sbb",
      indoorUnitId: null,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-standard-wall-single-cfg-4",
      slug: "hisense-standard-wall-single-cfg-4",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-36h3fh",
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
      id: "hisense-standard-wall-single-cfg-5",
      slug: "hisense-standard-wall-single-cfg-5",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-48h3fh",
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
      id: "hisense-standard-wall-single-cfg-6",
      slug: "hisense-standard-wall-single-cfg-6",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-60h3fh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57500,
      coolingCapacityMaxBtu: 57500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-standard-wall-single-cfg-7",
      slug: "hisense-standard-wall-single-cfg-7",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-36h3fh",
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
      id: "hisense-standard-wall-single-cfg-8",
      slug: "hisense-standard-wall-single-cfg-8",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-48h3fh",
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
      id: "hisense-standard-wall-single-cfg-9",
      slug: "hisense-standard-wall-single-cfg-9",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-60h3fh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57500,
      coolingCapacityMaxBtu: 57500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-standard-wall-single-cfg-10",
      slug: "hisense-standard-wall-single-cfg-10",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-36h3fh",
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
      id: "hisense-standard-wall-single-cfg-11",
      slug: "hisense-standard-wall-single-cfg-11",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-48h3fh",
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
      id: "hisense-standard-wall-single-cfg-12",
      slug: "hisense-standard-wall-single-cfg-12",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-60h3fh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57500,
      coolingCapacityMaxBtu: 57500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-standard-wall-single-cfg-13",
      slug: "hisense-standard-wall-single-cfg-13",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-auw-36u3st1",
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
      id: "hisense-standard-wall-single-cfg-14",
      slug: "hisense-standard-wall-single-cfg-14",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-auw-36u3st1",
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
      id: "hisense-standard-wall-single-cfg-15",
      slug: "hisense-standard-wall-single-cfg-15",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-auwr-60u3sp2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-standard-wall-single-cfg-16",
      slug: "hisense-standard-wall-single-cfg-16",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-auw-36u3st1",
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
      id: "hisense-standard-wall-single-cfg-17",
      slug: "hisense-standard-wall-single-cfg-17",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-auw-36u3st1",
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
      id: "hisense-standard-wall-single-cfg-18",
      slug: "hisense-standard-wall-single-cfg-18",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-28h3fh2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27200,
      coolingCapacityMaxBtu: 27200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-standard-wall-single-cfg-19",
      slug: "hisense-standard-wall-single-cfg-19",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-28h3fh2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27200,
      coolingCapacityMaxBtu: 27200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-standard-wall-single-cfg-20",
      slug: "hisense-standard-wall-single-cfg-20",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-28h3fh2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27200,
      coolingCapacityMaxBtu: 27200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-standard-wall-single-cfg-21",
      slug: "hisense-standard-wall-single-cfg-21",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-ast-2424tuo",
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
      id: "hisense-standard-wall-single-cfg-22",
      slug: "hisense-standard-wall-single-cfg-22",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-ast-1824txo",
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
      id: "hisense-standard-wall-single-cfg-23",
      slug: "hisense-standard-wall-single-cfg-23",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-ast-0924txo",
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
      id: "hisense-standard-wall-single-cfg-24",
      slug: "hisense-standard-wall-single-cfg-24",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-ast-1224tuo",
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
      id: "hisense-standard-wall-single-cfg-25",
      slug: "hisense-standard-wall-single-cfg-25",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-24h3dh2h1",
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
      id: "hisense-standard-wall-single-cfg-26",
      slug: "hisense-standard-wall-single-cfg-26",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-36h3dh2h1",
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
      id: "hisense-standard-wall-single-cfg-27",
      slug: "hisense-standard-wall-single-cfg-27",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-48h3dh2h1",
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
      id: "hisense-standard-wall-single-cfg-28",
      slug: "hisense-standard-wall-single-cfg-28",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-24h3dh2h1",
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
      id: "hisense-standard-wall-single-cfg-29",
      slug: "hisense-standard-wall-single-cfg-29",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-36h3dh2h1",
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
      id: "hisense-standard-wall-single-cfg-30",
      slug: "hisense-standard-wall-single-cfg-30",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-48h3dh2h1",
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
      id: "hisense-standard-wall-single-cfg-31",
      slug: "hisense-standard-wall-single-cfg-31",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-24h3dh2h1",
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
      id: "hisense-standard-wall-single-cfg-32",
      slug: "hisense-standard-wall-single-cfg-32",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-36h3dh2h1",
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
      id: "hisense-standard-wall-single-cfg-33",
      slug: "hisense-standard-wall-single-cfg-33",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-48h3dh2h1",
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
      id: "hisense-standard-wall-single-cfg-34",
      slug: "hisense-standard-wall-single-cfg-34",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-ao-12u3r25ss",
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
      id: "hisense-standard-wall-single-cfg-35",
      slug: "hisense-standard-wall-single-cfg-35",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-ao-24u3r25ss",
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
      id: "hisense-standard-wall-single-cfg-36",
      slug: "hisense-standard-wall-single-cfg-36",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-36f3dah2",
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
      id: "hisense-standard-wall-single-cfg-37",
      slug: "hisense-standard-wall-single-cfg-37",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-36f3dah2",
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
      id: "hisense-standard-wall-single-cfg-38",
      slug: "hisense-standard-wall-single-cfg-38",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-36f3dah2",
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
      id: "hisense-standard-wall-single-cfg-39",
      slug: "hisense-standard-wall-single-cfg-39",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-48f3dah2",
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
      id: "hisense-standard-wall-single-cfg-40",
      slug: "hisense-standard-wall-single-cfg-40",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-48f3dah2",
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
      id: "hisense-standard-wall-single-cfg-41",
      slug: "hisense-standard-wall-single-cfg-41",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-48f3dah2",
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
      id: "hisense-standard-wall-single-cfg-42",
      slug: "hisense-standard-wall-single-cfg-42",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-60f3dah2",
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
      id: "hisense-standard-wall-single-cfg-43",
      slug: "hisense-standard-wall-single-cfg-43",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-60f3dah2",
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
      id: "hisense-standard-wall-single-cfg-44",
      slug: "hisense-standard-wall-single-cfg-44",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-avw-60f3dah2",
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
      id: "hisense-standard-wall-single-cfg-45",
      slug: "hisense-standard-wall-single-cfg-45",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-aoh-36u3t25u",
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
      id: "hisense-standard-wall-single-cfg-46",
      slug: "hisense-standard-wall-single-cfg-46",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-aoh-60u3t25u",
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
      id: "hisense-standard-wall-single-cfg-47",
      slug: "hisense-standard-wall-single-cfg-47",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-ao-12u3r25e",
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
      id: "hisense-standard-wall-single-cfg-48",
      slug: "hisense-standard-wall-single-cfg-48",
      modelId: "hisense-standard-wall-single",
      outdoorUnitId: "hisense-ao-24u3r25e",
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
      id: "hisense-hiultra-wall-single-cfg-1",
      slug: "hisense-hiultra-wall-single-cfg-1",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-as-09uw3sxe00",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-2",
      slug: "hisense-hiultra-wall-single-cfg-2",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-as-12uw3sxa00",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-3",
      slug: "hisense-hiultra-wall-single-cfg-3",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-as-09uw1sve00",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-4",
      slug: "hisense-hiultra-wall-single-cfg-4",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-as-12uw1sxe00",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-5",
      slug: "hisense-hiultra-wall-single-cfg-5",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-09uw3sve01",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-6",
      slug: "hisense-hiultra-wall-single-cfg-6",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-18uw3sbb00",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-7",
      slug: "hisense-hiultra-wall-single-cfg-7",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-24uw3sdb01",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-8",
      slug: "hisense-hiultra-wall-single-cfg-8",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-12uw3sxe01",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-9",
      slug: "hisense-hiultra-wall-single-cfg-9",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-09uw3svg01a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-10",
      slug: "hisense-hiultra-wall-single-cfg-10",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-12uw3sxg01a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-11",
      slug: "hisense-hiultra-wall-single-cfg-11",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-24uw3sdn01a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-12",
      slug: "hisense-hiultra-wall-single-cfg-12",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-09uw3sxe01",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-13",
      slug: "hisense-hiultra-wall-single-cfg-13",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-12uw3sxe02",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-14",
      slug: "hisense-hiultra-wall-single-cfg-14",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-18uw3sbb01",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-15",
      slug: "hisense-hiultra-wall-single-cfg-15",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-as-24uw3skk00",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-16",
      slug: "hisense-hiultra-wall-single-cfg-16",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-as-12uw3sxa-00",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-17",
      slug: "hisense-hiultra-wall-single-cfg-17",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-18uw3sbb-00",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-18",
      slug: "hisense-hiultra-wall-single-cfg-18",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-12uw3sxe-01",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-19",
      slug: "hisense-hiultra-wall-single-cfg-19",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-09uw3svg01b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-20",
      slug: "hisense-hiultra-wall-single-cfg-20",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-12uw3sxg01b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-21",
      slug: "hisense-hiultra-wall-single-cfg-21",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-18uw3sbn00b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hiultra-wall-single-cfg-22",
      slug: "hisense-hiultra-wall-single-cfg-22",
      modelId: "hisense-hiultra-wall-single",
      outdoorUnitId: "hisense-ast-24uw3sdn01b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-1",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-1",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw3-24u3saa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-2",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-2",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw4-36u3sta",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-3",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-3",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw3-24u3saa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-4",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-4",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw4-36u3sta",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-5",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-5",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw3-24u3saa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-6",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-6",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw4-36u3sta",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-7",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-7",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw3-24u3saa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 8.83,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-8",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-8",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw4-36u3sta",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 20.25,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-9",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-9",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw2-18u3sfa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-10",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-10",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw2-18u3sfa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-11",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-11",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw2-18u3sfa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-12",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-12",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw5-42u3sta",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-13",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-13",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw5-42u3sta",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-14",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-14",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amw5-42u3sta",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 8.88,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-15",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-15",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo2-18u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-16",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-16",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo3-27u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-17",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-17",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo2-18u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-18",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-18",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo5-45u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-19",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-19",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo5-45u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-20",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-20",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo5-45u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-21",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-21",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo4-36u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-22",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-22",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo4-36u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-23",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-23",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo4-36u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-24",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-24",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo2-18u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.75,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-25",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-25",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo3-27u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-multi-xtreme-wall-single-cfg-26",
      slug: "hisense-hi-multi-xtreme-wall-single-cfg-26",
      modelId: "hisense-hi-multi-xtreme-wall-single",
      outdoorUnitId: "hisense-amo3-27u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-1",
      slug: "hisense-hi-uni-wall-single-cfg-1",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-24u3sa",
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
      id: "hisense-hi-uni-wall-single-cfg-2",
      slug: "hisense-hi-uni-wall-single-cfg-2",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-09u3ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-3",
      slug: "hisense-hi-uni-wall-single-cfg-3",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-09u3ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-4",
      slug: "hisense-hi-uni-wall-single-cfg-4",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-12u3ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-5",
      slug: "hisense-hi-uni-wall-single-cfg-5",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-12u3ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-6",
      slug: "hisense-hi-uni-wall-single-cfg-6",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-24u3sa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.5,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-7",
      slug: "hisense-hi-uni-wall-single-cfg-7",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-18u3sf",
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
      id: "hisense-hi-uni-wall-single-cfg-8",
      slug: "hisense-hi-uni-wall-single-cfg-8",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-18u3sf",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-9",
      slug: "hisense-hi-uni-wall-single-cfg-9",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-18u3sf",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-10",
      slug: "hisense-hi-uni-wall-single-cfg-10",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-24u3sa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.5,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-11",
      slug: "hisense-hi-uni-wall-single-cfg-11",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-09u3ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-12",
      slug: "hisense-hi-uni-wall-single-cfg-12",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-12u3ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-13",
      slug: "hisense-hi-uni-wall-single-cfg-13",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-09u3ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-14",
      slug: "hisense-hi-uni-wall-single-cfg-14",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-12u3ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-15",
      slug: "hisense-hi-uni-wall-single-cfg-15",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-18u3sf",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-16",
      slug: "hisense-hi-uni-wall-single-cfg-16",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-auw-24u3sa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.5,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-17",
      slug: "hisense-hi-uni-wall-single-cfg-17",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-09u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-18",
      slug: "hisense-hi-uni-wall-single-cfg-18",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-12u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-19",
      slug: "hisense-hi-uni-wall-single-cfg-19",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-09u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-20",
      slug: "hisense-hi-uni-wall-single-cfg-20",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-12u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-21",
      slug: "hisense-hi-uni-wall-single-cfg-21",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-18u3t25u",
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
      id: "hisense-hi-uni-wall-single-cfg-22",
      slug: "hisense-hi-uni-wall-single-cfg-22",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-24u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-23",
      slug: "hisense-hi-uni-wall-single-cfg-23",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-36u3t25u",
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
      id: "hisense-hi-uni-wall-single-cfg-24",
      slug: "hisense-hi-uni-wall-single-cfg-24",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-36u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-uni-wall-single-cfg-25",
      slug: "hisense-hi-uni-wall-single-cfg-25",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-18u3t25u",
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
      id: "hisense-hi-uni-wall-single-cfg-26",
      slug: "hisense-hi-uni-wall-single-cfg-26",
      modelId: "hisense-hi-uni-wall-single",
      outdoorUnitId: "hisense-aou-24u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-central-ducted-cfg-1",
      slug: "hisense-hi-ultra-hd-central-ducted-cfg-1",
      modelId: "hisense-hi-ultra-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-24u3sf2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-central-ducted-cfg-2",
      slug: "hisense-hi-ultra-hd-central-ducted-cfg-2",
      modelId: "hisense-hi-ultra-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-48u3sp2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-central-ducted-cfg-3",
      slug: "hisense-hi-ultra-hd-central-ducted-cfg-3",
      modelId: "hisense-hi-ultra-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-36u3sa2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-central-ducted-cfg-4",
      slug: "hisense-hi-ultra-hd-central-ducted-cfg-4",
      modelId: "hisense-hi-ultra-hd-central-ducted",
      outdoorUnitId: "hisense-aoh-24u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-central-ducted-cfg-5",
      slug: "hisense-hi-ultra-hd-central-ducted-cfg-5",
      modelId: "hisense-hi-ultra-hd-central-ducted",
      outdoorUnitId: "hisense-aoh-48u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-coil-central-ducted-cfg-1",
      slug: "hisense-hi-ultra-hd-coil-central-ducted-cfg-1",
      modelId: "hisense-hi-ultra-hd-coil-central-ducted",
      outdoorUnitId: "hisense-auwr-36u3sa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-coil-central-ducted-cfg-2",
      slug: "hisense-hi-ultra-hd-coil-central-ducted-cfg-2",
      modelId: "hisense-hi-ultra-hd-coil-central-ducted",
      outdoorUnitId: "hisense-auwr-48u3sp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 15.55,
      hspf2: 8.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-coil-central-ducted-cfg-3",
      slug: "hisense-hi-ultra-hd-coil-central-ducted-cfg-3",
      modelId: "hisense-hi-ultra-hd-coil-central-ducted",
      outdoorUnitId: "hisense-auwr-36u3sa2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-hd-coil-central-ducted-cfg-4",
      slug: "hisense-hi-ultra-hd-coil-central-ducted-cfg-4",
      modelId: "hisense-hi-ultra-hd-coil-central-ducted",
      outdoorUnitId: "hisense-auwr-48u3sp2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 15.55,
      hspf2: 8.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd-central-ducted-cfg-1",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-1",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-24u3tk5",
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
      id: "hisense-hi-pro-hd-central-ducted-cfg-2",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-2",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-36u3tw5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd-central-ducted-cfg-3",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-3",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-60u3th5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd-central-ducted-cfg-4",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-4",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-2424p",
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
      id: "hisense-hi-pro-hd-central-ducted-cfg-5",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-5",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-3624p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd-central-ducted-cfg-6",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-6",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-6024p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd-central-ducted-cfg-7",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-7",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-auwr-4824p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd-central-ducted-cfg-8",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-8",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-aoh-24u3t24p",
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
      id: "hisense-hi-pro-hd-central-ducted-cfg-9",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-9",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-aoh-36u3t24p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd-central-ducted-cfg-10",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-10",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-aoh-60u3t24p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-hd-central-ducted-cfg-11",
      slug: "hisense-hi-pro-hd-central-ducted-cfg-11",
      modelId: "hisense-hi-pro-hd-central-ducted",
      outdoorUnitId: "hisense-aoh-48u3t24p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-smartsense-wall-single-cfg-1",
      slug: "hisense-smartsense-wall-single-cfg-1",
      modelId: "hisense-smartsense-wall-single",
      outdoorUnitId: "hisense-ao-18u3r25ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-smartsense-wall-single-cfg-2",
      slug: "hisense-smartsense-wall-single-cfg-2",
      modelId: "hisense-smartsense-wall-single",
      outdoorUnitId: "hisense-ao-09u3r25ss",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-wall-single-cfg-1",
      slug: "hisense-hi-ultra-wall-single-cfg-1",
      modelId: "hisense-hi-ultra-wall-single",
      outdoorUnitId: "hisense-ao-24u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-wall-single-cfg-2",
      slug: "hisense-hi-ultra-wall-single-cfg-2",
      modelId: "hisense-hi-ultra-wall-single",
      outdoorUnitId: "hisense-ao-18u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-wall-single-cfg-3",
      slug: "hisense-hi-ultra-wall-single-cfg-3",
      modelId: "hisense-hi-ultra-wall-single",
      outdoorUnitId: "hisense-ao-12u3t25u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-ultra-wall-single-cfg-4",
      slug: "hisense-hi-ultra-wall-single-cfg-4",
      modelId: "hisense-hi-ultra-wall-single",
      outdoorUnitId: "hisense-ao-09u3t25u",
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
      id: "hisense-hi-pro-wall-single-cfg-1",
      slug: "hisense-hi-pro-wall-single-cfg-1",
      modelId: "hisense-hi-pro-wall-single",
      outdoorUnitId: "hisense-ao-09u3t25p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 32,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-pro-wall-single-cfg-2",
      slug: "hisense-hi-pro-wall-single-cfg-2",
      modelId: "hisense-hi-pro-wall-single",
      outdoorUnitId: "hisense-ao-12u3t25p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 30,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-edge-wall-single-cfg-1",
      slug: "hisense-hi-edge-wall-single-cfg-1",
      modelId: "hisense-hi-edge-wall-single",
      outdoorUnitId: "hisense-ao-09u3r25e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.5,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hisense-hi-edge-wall-single-cfg-2",
      slug: "hisense-hi-edge-wall-single-cfg-2",
      modelId: "hisense-hi-edge-wall-single",
      outdoorUnitId: "hisense-ao-18u3r25e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "hisense-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-2",
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
      configurationId: "hisense-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-4",
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
      configurationId: "hisense-standard-wall-single-cfg-5",
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
      configurationId: "hisense-standard-wall-single-cfg-6",
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
      configurationId: "hisense-standard-wall-single-cfg-7",
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
      configurationId: "hisense-standard-wall-single-cfg-8",
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
      configurationId: "hisense-standard-wall-single-cfg-9",
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
      configurationId: "hisense-standard-wall-single-cfg-10",
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
      configurationId: "hisense-standard-wall-single-cfg-11",
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
      configurationId: "hisense-standard-wall-single-cfg-12",
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
      configurationId: "hisense-standard-wall-single-cfg-13",
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
      configurationId: "hisense-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-15",
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
      configurationId: "hisense-standard-wall-single-cfg-16",
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
      configurationId: "hisense-standard-wall-single-cfg-17",
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
      configurationId: "hisense-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-19",
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
      configurationId: "hisense-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-21",
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
      configurationId: "hisense-standard-wall-single-cfg-22",
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
      configurationId: "hisense-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-25",
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
      configurationId: "hisense-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-28",
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
      configurationId: "hisense-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-31",
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
      configurationId: "hisense-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-33",
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
      configurationId: "hisense-standard-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-35",
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
      configurationId: "hisense-standard-wall-single-cfg-36",
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
      configurationId: "hisense-standard-wall-single-cfg-37",
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
      configurationId: "hisense-standard-wall-single-cfg-38",
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
      configurationId: "hisense-standard-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 63000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 63000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 63000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-standard-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-1",
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
      configurationId: "hisense-hiultra-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5500,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hiultra-wall-single-cfg-21",
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
      configurationId: "hisense-hiultra-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-multi-xtreme-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-1",
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
      configurationId: "hisense-hi-uni-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19300,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-7",
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
      configurationId: "hisense-hi-uni-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-9",
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
      configurationId: "hisense-hi-uni-wall-single-cfg-10",
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
      configurationId: "hisense-hi-uni-wall-single-cfg-11",
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
      configurationId: "hisense-hi-uni-wall-single-cfg-12",
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
      configurationId: "hisense-hi-uni-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-16",
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
      configurationId: "hisense-hi-uni-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-23",
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
      configurationId: "hisense-hi-uni-wall-single-cfg-24",
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
      configurationId: "hisense-hi-uni-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-uni-wall-single-cfg-26",
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
      configurationId: "hisense-hi-ultra-hd-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-hd-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-hd-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-hd-central-ducted-cfg-4",
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
      configurationId: "hisense-hi-ultra-hd-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-hd-coil-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-hd-coil-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-hd-coil-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-hd-coil-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-1",
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
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.46,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-4",
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
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.46,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-8",
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
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.46,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-hd-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-smartsense-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-smartsense-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-wall-single-cfg-1",
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
      configurationId: "hisense-hi-ultra-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-ultra-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-pro-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-edge-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hisense-hi-edge-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.4,
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
