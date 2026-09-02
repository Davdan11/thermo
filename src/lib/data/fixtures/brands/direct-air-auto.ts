import type { BrandDataset } from "../../types";

export const directairDataset: BrandDataset = {
  brand: {
    id: "direct-air",
    slug: "direct-air",
    name: "DIRECT AIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "direct-air-mvb-series",
      slug: "direct-air-mvb-series",
      name: "MVB Series",
      brandId: "direct-air",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-standard",
      slug: "direct-air-standard",
      name: "Standard",
      brandId: "direct-air",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-m3o-series",
      slug: "direct-air-m3o-series",
      name: "M3O Series",
      brandId: "direct-air",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-mo-series",
      slug: "direct-air-mo-series",
      name: "MO series",
      brandId: "direct-air",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-m5o-series",
      slug: "direct-air-m5o-series",
      name: "M5O Series",
      brandId: "direct-air",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-hiultra",
      slug: "direct-air-hiultra",
      name: "HiULTRA",
      brandId: "direct-air",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series",
      slug: "direct-air-dirm-series",
      name: "DIRM series",
      brandId: "direct-air",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series",
      slug: "direct-air-dir-series",
      name: "DIR Series",
      brandId: "direct-air",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series",
      slug: "direct-air-dirm4-series",
      name: "DIRM4 Series",
      brandId: "direct-air",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "direct-air-mvb-series-central-ducted",
      slug: "direct-air-mvb-series-central-ducted",
      name: "MVB Series",
      seriesId: "direct-air-mvb-series",
      brandId: "direct-air",
      modelNumber: "MVB Series",
      normalizedModelNumber: "mvb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 15400,
      seer2Min: 16.2,
      seer2Max: 16.2,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.6,
      cop5FMax: 1.6,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-standard-wall-single",
      slug: "direct-air-standard-wall-single",
      name: "Standard",
      seriesId: "direct-air-standard",
      brandId: "direct-air",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 37200,
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
      id: "direct-air-m3o-series-wall-single",
      slug: "direct-air-m3o-series-wall-single",
      name: "M3O Series",
      seriesId: "direct-air-m3o-series",
      brandId: "direct-air",
      modelNumber: "M3O Series",
      normalizedModelNumber: "m3o-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 17200,
      heatingCapacity5FMaxBtu: 17200,
      seer2Min: 22,
      seer2Max: 22,
      hspf2Min: 9.6,
      hspf2Max: 9.6,
      cop5FMin: 2.06,
      cop5FMax: 2.06,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-mo-series-wall-single",
      slug: "direct-air-mo-series-wall-single",
      name: "MO series",
      seriesId: "direct-air-mo-series",
      brandId: "direct-air",
      modelNumber: "MO series",
      normalizedModelNumber: "mo-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 17000,
      heatingCapacity5FMinBtu: 10900,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 18,
      seer2Max: 20.5,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 1.75,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-m5o-series-wall-single",
      slug: "direct-air-m5o-series-wall-single",
      name: "M5O Series",
      seriesId: "direct-air-m5o-series",
      brandId: "direct-air",
      modelNumber: "M5O Series",
      normalizedModelNumber: "m5o-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 28000,
      heatingCapacity5FMaxBtu: 30000,
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
      id: "direct-air-hiultra-wall-single",
      slug: "direct-air-hiultra-wall-single",
      name: "HiULTRA",
      seriesId: "direct-air-hiultra",
      brandId: "direct-air",
      modelNumber: "HiULTRA",
      normalizedModelNumber: "hiultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 11600,
      seer2Min: 21,
      seer2Max: 22.5,
      hspf2Min: 8.6,
      hspf2Max: 9.5,
      cop5FMin: 1.75,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted",
      slug: "direct-air-dirm-series-central-ducted",
      name: "DIRM series",
      seriesId: "direct-air-dirm-series",
      brandId: "direct-air",
      modelNumber: "DIRM series",
      normalizedModelNumber: "dirm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 10.2,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-wall-single",
      slug: "direct-air-dirm-series-wall-single",
      name: "DIRM series",
      seriesId: "direct-air-dirm-series",
      brandId: "direct-air",
      modelNumber: "DIRM series",
      normalizedModelNumber: "dirm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 18,
      seer2Max: 28.1,
      hspf2Min: 8.7,
      hspf2Max: 13.6,
      cop5FMin: 1.7,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-central-ducted",
      slug: "direct-air-dir-series-central-ducted",
      name: "DIR Series",
      seriesId: "direct-air-dir-series",
      brandId: "direct-air",
      modelNumber: "DIR Series",
      normalizedModelNumber: "dir-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.4,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single",
      slug: "direct-air-dir-series-wall-single",
      name: "DIR Series",
      seriesId: "direct-air-dir-series",
      brandId: "direct-air",
      modelNumber: "DIR Series",
      normalizedModelNumber: "dir-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 18.5,
      seer2Max: 27.4,
      hspf2Min: 9.5,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.54,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single",
      slug: "direct-air-dirm4-series-wall-single",
      name: "DIRM4 Series",
      seriesId: "direct-air-dirm4-series",
      brandId: "direct-air",
      modelNumber: "DIRM4 Series",
      normalizedModelNumber: "dirm4-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16.7,
      seer2Max: 27.2,
      hspf2Min: 9.8,
      hspf2Max: 13.9,
      cop5FMin: 1.84,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-central-ducted",
      slug: "direct-air-dirm4-series-central-ducted",
      name: "DIRM4 Series",
      seriesId: "direct-air-dirm4-series",
      brandId: "direct-air",
      modelNumber: "DIRM4 Series",
      normalizedModelNumber: "dirm4-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 24000,
      heatingCapacity5FMaxBtu: 29200,
      seer2Min: 15.3,
      seer2Max: 16,
      hspf2Min: 9.3,
      hspf2Max: 9.6,
      cop5FMin: 1.8,
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
      id: "direct-air-mod30-24hfn1-mt0w",
      modelNumber: "MOD30-24HFN1-MT0W",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-moba30-09hfn1-mt0w",
      modelNumber: "MOBA30-09HFN1-MT0W",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-mob30-12hfn1-mt0w",
      modelNumber: "MOB30-12HFN1-MT0W",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-moca31-18hfn1-mt0w",
      modelNumber: "MOCA31-18HFN1-MT0W",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-mod31-24hfn1-mt0w",
      modelNumber: "MOD31-24HFN1-MT0W",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-mob30-09hfn1-mx0w",
      modelNumber: "MOB30-09HFN1-MX0W",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-mob30-12hfn1-mv0w",
      modelNumber: "MOB30-12HFN1-MV0W",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-m2of-18hfn1-m",
      modelNumber: "M2OF-18HFN1-M",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-m5of-48hfn1-m",
      modelNumber: "M5OF-48HFN1-M",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-m3oh-27hfn1-m",
      modelNumber: "M3OH-27HFN1-M",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-m4oh-36hfn1-m",
      modelNumber: "M4OH-36HFN1-M",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-36lcda25-1z",
      modelNumber: "DIRM-36LCDA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-60lcda25-1z",
      modelNumber: "DIRM-60LCDA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-36cs19-ou",
      modelNumber: "DIRM-36CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-18cs19-ou",
      modelNumber: "DIRM-18CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-48cs19-ou",
      modelNumber: "DIRM-48CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-60cs19-ou",
      modelNumber: "DIRM-60CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-36da25-1z",
      modelNumber: "DIRM4-36DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-60lcda25-1z",
      modelNumber: "DIRM4-60LCDA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-m3of-27hfn1-m",
      modelNumber: "M3OF-27HFN1-M",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-mox430-17hfn1-mt0w",
      modelNumber: "MOX430-17HFN1-MT0W",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-m5og-48hfn1-m-x",
      modelNumber: "M5OG-48HFN1-M-[X]",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirh-12hp23-dko",
      modelNumber: "DIRH-12HP23-DKO",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirh-18hp23-dko",
      modelNumber: "DIRH-18HP23-DKO",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-18magicpro20-ou",
      modelNumber: "DIRM-18MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-24magicpro20-ou",
      modelNumber: "DIRM-24MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-30magicpro20-ou",
      modelNumber: "DIRM-30MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-36magicpro20-ou",
      modelNumber: "DIRM-36MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-48magicpro20-ou",
      modelNumber: "DIRM-48MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-60magicpro20-ou",
      modelNumber: "DIRM-60MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-36magicpro20-ou1f",
      modelNumber: "DIRM-36MAGICPRO20-OU1F",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-24cs19-ou",
      modelNumber: "DIRM-24CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-30cs19-ou",
      modelNumber: "DIRM4-30CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-18magicpro20-ou",
      modelNumber: "DIRM4-18MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-24magicpro20-ou",
      modelNumber: "DIRM4-24MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-30magicpro20-ou",
      modelNumber: "DIRM4-30MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-36magicpro20-ou",
      modelNumber: "DIRM4-36MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-60magicpro20-ou",
      modelNumber: "DIRM4-60MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-24cs19-ou",
      modelNumber: "DIRM4-24CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-48magicpro20-ou",
      modelNumber: "DIRM4-48MAGICPRO20-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-48cs19-ou",
      modelNumber: "DIRM4-48CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-09da25-1z",
      modelNumber: "DIRM-09DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-12da25-1z",
      modelNumber: "DIRM-12DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-18da25-1z",
      modelNumber: "DIRM-18DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-24da25-1z",
      modelNumber: "DIRM-24DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-06hxpro28-1z",
      modelNumber: "DIRM-06HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-09hxpro28-1z",
      modelNumber: "DIRM-09HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-12hxpro28-1z",
      modelNumber: "DIRM-12HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-18hxpro28-1z",
      modelNumber: "DIRM-18HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-24hxpro28-1z",
      modelNumber: "DIRM-24HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-48lcda25-1z",
      modelNumber: "DIRM-48LCDA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-18da25-2z",
      modelNumber: "DIRM-18DA25-2Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-27da25-3z",
      modelNumber: "DIRM-27DA25-3Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-36da25-4z",
      modelNumber: "DIRM-36DA25-4Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-48da25-5z",
      modelNumber: "DIRM-48DA25-5Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-18hxpro28-2z",
      modelNumber: "DIRM-18HXPRO28-2Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-28hxpro28-3z",
      modelNumber: "DIRM-28HXPRO28-3Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-36hxpro28-4z",
      modelNumber: "DIRM-36HXPRO28-4Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm-48hxpro28-5z",
      modelNumber: "DIRM-48HXPRO28-5Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-18da25-2z",
      modelNumber: "DIRM4-18DA25-2Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-27da25-3z",
      modelNumber: "DIRM4-27DA25-3Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-36da25-4z",
      modelNumber: "DIRM4-36DA25-4Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-48da25-5z",
      modelNumber: "DIRM4-48DA25-5Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-18hxpro28-2z",
      modelNumber: "DIRM4-18HXPRO28-2Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-28hxpro28-3z",
      modelNumber: "DIRM4-28HXPRO28-3Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-36hxpro28-4z",
      modelNumber: "DIRM4-36HXPRO28-4Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-48hxpro28-5z",
      modelNumber: "DIRM4-48HXPRO28-5Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-18cs19-ou",
      modelNumber: "DIRM4-18CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-36cs19-ou",
      modelNumber: "DIRM4-36CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-60cs19-ou",
      modelNumber: "DIRM4-60CS19-OU",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-09da25-1z",
      modelNumber: "DIRM4-09DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-12da25-1z",
      modelNumber: "DIRM4-12DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-18da25-1z",
      modelNumber: "DIRM4-18DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-24da25-1z",
      modelNumber: "DIRM4-24DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-06hxpro28-1z",
      modelNumber: "DIRM4-06HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-09hxpro28-1z",
      modelNumber: "DIRM4-09HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-12hxpro28-1z",
      modelNumber: "DIRM4-12HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-18hxpro28-1z",
      modelNumber: "DIRM4-18HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-24hxpro28-1z",
      modelNumber: "DIRM4-24HXPRO28-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-30da25-1z",
      modelNumber: "DIRM4-30DA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-48lcda25-1z",
      modelNumber: "DIRM4-48LCDA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-36lchx-1z",
      modelNumber: "DIRM4-36LCHX-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-48lchx-1z",
      modelNumber: "DIRM4-48LCHX-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    },
    {
      id: "direct-air-dirm4-36lcda25-1z",
      modelNumber: "DIRM4-36LCDA25-1Z",
      brandId: "direct-air",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "direct-air-mvb-series-central-ducted-cfg-1",
      slug: "direct-air-mvb-series-central-ducted-cfg-1",
      modelId: "direct-air-mvb-series-central-ducted",
      outdoorUnitId: "direct-air-mod30-24hfn1-mt0w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-standard-wall-single-cfg-1",
      slug: "direct-air-standard-wall-single-cfg-1",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-moba30-09hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-2",
      slug: "direct-air-standard-wall-single-cfg-2",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-mob30-12hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-3",
      slug: "direct-air-standard-wall-single-cfg-3",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-moca31-18hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-4",
      slug: "direct-air-standard-wall-single-cfg-4",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-moca31-18hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-5",
      slug: "direct-air-standard-wall-single-cfg-5",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-mod31-24hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-6",
      slug: "direct-air-standard-wall-single-cfg-6",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-mod31-24hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-7",
      slug: "direct-air-standard-wall-single-cfg-7",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-mob30-09hfn1-mx0w",
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
      id: "direct-air-standard-wall-single-cfg-8",
      slug: "direct-air-standard-wall-single-cfg-8",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-mob30-12hfn1-mv0w",
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
      id: "direct-air-standard-wall-single-cfg-9",
      slug: "direct-air-standard-wall-single-cfg-9",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-moba30-09hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-10",
      slug: "direct-air-standard-wall-single-cfg-10",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-m2of-18hfn1-m",
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
      id: "direct-air-standard-wall-single-cfg-11",
      slug: "direct-air-standard-wall-single-cfg-11",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-m5of-48hfn1-m",
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
      id: "direct-air-standard-wall-single-cfg-12",
      slug: "direct-air-standard-wall-single-cfg-12",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-mod31-24hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-13",
      slug: "direct-air-standard-wall-single-cfg-13",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-moca31-18hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-14",
      slug: "direct-air-standard-wall-single-cfg-14",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-moba30-09hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-15",
      slug: "direct-air-standard-wall-single-cfg-15",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-mob30-12hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-16",
      slug: "direct-air-standard-wall-single-cfg-16",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-moca31-18hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-17",
      slug: "direct-air-standard-wall-single-cfg-17",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-mod31-24hfn1-mt0w",
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
      id: "direct-air-standard-wall-single-cfg-18",
      slug: "direct-air-standard-wall-single-cfg-18",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-m3oh-27hfn1-m",
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
      id: "direct-air-standard-wall-single-cfg-19",
      slug: "direct-air-standard-wall-single-cfg-19",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-m4oh-36hfn1-m",
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
      id: "direct-air-standard-wall-single-cfg-20",
      slug: "direct-air-standard-wall-single-cfg-20",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-m4oh-36hfn1-m",
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
      id: "direct-air-standard-wall-single-cfg-21",
      slug: "direct-air-standard-wall-single-cfg-21",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm-36lcda25-1z",
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
      id: "direct-air-standard-wall-single-cfg-22",
      slug: "direct-air-standard-wall-single-cfg-22",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm-60lcda25-1z",
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
      id: "direct-air-standard-wall-single-cfg-23",
      slug: "direct-air-standard-wall-single-cfg-23",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm-36lcda25-1z",
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
      id: "direct-air-standard-wall-single-cfg-24",
      slug: "direct-air-standard-wall-single-cfg-24",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm-36lcda25-1z",
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
      id: "direct-air-standard-wall-single-cfg-25",
      slug: "direct-air-standard-wall-single-cfg-25",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm-60lcda25-1z",
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
      id: "direct-air-standard-wall-single-cfg-26",
      slug: "direct-air-standard-wall-single-cfg-26",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm-36cs19-ou",
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
      id: "direct-air-standard-wall-single-cfg-27",
      slug: "direct-air-standard-wall-single-cfg-27",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm-18cs19-ou",
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
      id: "direct-air-standard-wall-single-cfg-28",
      slug: "direct-air-standard-wall-single-cfg-28",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm-48cs19-ou",
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
      id: "direct-air-standard-wall-single-cfg-29",
      slug: "direct-air-standard-wall-single-cfg-29",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm-60cs19-ou",
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
      id: "direct-air-standard-wall-single-cfg-30",
      slug: "direct-air-standard-wall-single-cfg-30",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm4-36da25-1z",
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
      id: "direct-air-standard-wall-single-cfg-31",
      slug: "direct-air-standard-wall-single-cfg-31",
      modelId: "direct-air-standard-wall-single",
      outdoorUnitId: "direct-air-dirm4-60lcda25-1z",
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
      id: "direct-air-m3o-series-wall-single-cfg-1",
      slug: "direct-air-m3o-series-wall-single-cfg-1",
      modelId: "direct-air-m3o-series-wall-single",
      outdoorUnitId: "direct-air-m3of-27hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 22,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-mo-series-wall-single-cfg-1",
      slug: "direct-air-mo-series-wall-single-cfg-1",
      modelId: "direct-air-mo-series-wall-single",
      outdoorUnitId: "direct-air-mox430-17hfn1-mt0w",
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
      id: "direct-air-mo-series-wall-single-cfg-2",
      slug: "direct-air-mo-series-wall-single-cfg-2",
      modelId: "direct-air-mo-series-wall-single",
      outdoorUnitId: "direct-air-mox430-17hfn1-mt0w",
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
      id: "direct-air-mo-series-wall-single-cfg-3",
      slug: "direct-air-mo-series-wall-single-cfg-3",
      modelId: "direct-air-mo-series-wall-single",
      outdoorUnitId: "direct-air-mox430-17hfn1-mt0w",
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
      id: "direct-air-mo-series-wall-single-cfg-4",
      slug: "direct-air-mo-series-wall-single-cfg-4",
      modelId: "direct-air-mo-series-wall-single",
      outdoorUnitId: "direct-air-mox430-17hfn1-mt0w",
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
      id: "direct-air-m5o-series-wall-single-cfg-1",
      slug: "direct-air-m5o-series-wall-single-cfg-1",
      modelId: "direct-air-m5o-series-wall-single",
      outdoorUnitId: "direct-air-m5og-48hfn1-m-x",
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
      id: "direct-air-m5o-series-wall-single-cfg-2",
      slug: "direct-air-m5o-series-wall-single-cfg-2",
      modelId: "direct-air-m5o-series-wall-single",
      outdoorUnitId: "direct-air-m5og-48hfn1-m-x",
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
      id: "direct-air-hiultra-wall-single-cfg-1",
      slug: "direct-air-hiultra-wall-single-cfg-1",
      modelId: "direct-air-hiultra-wall-single",
      outdoorUnitId: "direct-air-dirh-12hp23-dko",
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
      id: "direct-air-hiultra-wall-single-cfg-2",
      slug: "direct-air-hiultra-wall-single-cfg-2",
      modelId: "direct-air-hiultra-wall-single",
      outdoorUnitId: "direct-air-dirh-18hp23-dko",
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
      id: "direct-air-dirm-series-central-ducted-cfg-1",
      slug: "direct-air-dirm-series-central-ducted-cfg-1",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-18magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-2",
      slug: "direct-air-dirm-series-central-ducted-cfg-2",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-24magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-3",
      slug: "direct-air-dirm-series-central-ducted-cfg-3",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-30magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-4",
      slug: "direct-air-dirm-series-central-ducted-cfg-4",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-36magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-5",
      slug: "direct-air-dirm-series-central-ducted-cfg-5",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-48magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-6",
      slug: "direct-air-dirm-series-central-ducted-cfg-6",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-60magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-7",
      slug: "direct-air-dirm-series-central-ducted-cfg-7",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-24magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-8",
      slug: "direct-air-dirm-series-central-ducted-cfg-8",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-18magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-9",
      slug: "direct-air-dirm-series-central-ducted-cfg-9",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-36magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-10",
      slug: "direct-air-dirm-series-central-ducted-cfg-10",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-48magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-11",
      slug: "direct-air-dirm-series-central-ducted-cfg-11",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-30magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-12",
      slug: "direct-air-dirm-series-central-ducted-cfg-12",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-60magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-13",
      slug: "direct-air-dirm-series-central-ducted-cfg-13",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-36magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-14",
      slug: "direct-air-dirm-series-central-ducted-cfg-14",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-60magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-15",
      slug: "direct-air-dirm-series-central-ducted-cfg-15",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-36magicpro20-ou1f",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-16",
      slug: "direct-air-dirm-series-central-ducted-cfg-16",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-24magicpro20-ou",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-17",
      slug: "direct-air-dirm-series-central-ducted-cfg-17",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-36magicpro20-ou1f",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-18",
      slug: "direct-air-dirm-series-central-ducted-cfg-18",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-36magicpro20-ou1f",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 16.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-19",
      slug: "direct-air-dirm-series-central-ducted-cfg-19",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-24magicpro20-ou",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 16.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-20",
      slug: "direct-air-dirm-series-central-ducted-cfg-20",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm-24cs19-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-21",
      slug: "direct-air-dirm-series-central-ducted-cfg-21",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30cs19-ou",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-22",
      slug: "direct-air-dirm-series-central-ducted-cfg-22",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-18magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-23",
      slug: "direct-air-dirm-series-central-ducted-cfg-23",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-18magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-24",
      slug: "direct-air-dirm-series-central-ducted-cfg-24",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-24magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-25",
      slug: "direct-air-dirm-series-central-ducted-cfg-25",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-24magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-26",
      slug: "direct-air-dirm-series-central-ducted-cfg-26",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-27",
      slug: "direct-air-dirm-series-central-ducted-cfg-27",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-28",
      slug: "direct-air-dirm-series-central-ducted-cfg-28",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-60magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-29",
      slug: "direct-air-dirm-series-central-ducted-cfg-29",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-24cs19-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-30",
      slug: "direct-air-dirm-series-central-ducted-cfg-30",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-24cs19-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-31",
      slug: "direct-air-dirm-series-central-ducted-cfg-31",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-60magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-32",
      slug: "direct-air-dirm-series-central-ducted-cfg-32",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-48magicpro20-ou",
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
      id: "direct-air-dirm-series-central-ducted-cfg-33",
      slug: "direct-air-dirm-series-central-ducted-cfg-33",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30cs19-ou",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-34",
      slug: "direct-air-dirm-series-central-ducted-cfg-34",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30cs19-ou",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-35",
      slug: "direct-air-dirm-series-central-ducted-cfg-35",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30cs19-ou",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-36",
      slug: "direct-air-dirm-series-central-ducted-cfg-36",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30cs19-ou",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-37",
      slug: "direct-air-dirm-series-central-ducted-cfg-37",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30cs19-ou",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm-series-central-ducted-cfg-38",
      slug: "direct-air-dirm-series-central-ducted-cfg-38",
      modelId: "direct-air-dirm-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-48cs19-ou",
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
      id: "direct-air-dirm-series-wall-single-cfg-1",
      slug: "direct-air-dirm-series-wall-single-cfg-1",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-09da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-2",
      slug: "direct-air-dirm-series-wall-single-cfg-2",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-3",
      slug: "direct-air-dirm-series-wall-single-cfg-3",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-4",
      slug: "direct-air-dirm-series-wall-single-cfg-4",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-24da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-5",
      slug: "direct-air-dirm-series-wall-single-cfg-5",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-06hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-6",
      slug: "direct-air-dirm-series-wall-single-cfg-6",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-09hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-7",
      slug: "direct-air-dirm-series-wall-single-cfg-7",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-8",
      slug: "direct-air-dirm-series-wall-single-cfg-8",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-9",
      slug: "direct-air-dirm-series-wall-single-cfg-9",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-24hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-10",
      slug: "direct-air-dirm-series-wall-single-cfg-10",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-11",
      slug: "direct-air-dirm-series-wall-single-cfg-11",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-12",
      slug: "direct-air-dirm-series-wall-single-cfg-12",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-24da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-13",
      slug: "direct-air-dirm-series-wall-single-cfg-13",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-24hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-14",
      slug: "direct-air-dirm-series-wall-single-cfg-14",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-48lcda25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-15",
      slug: "direct-air-dirm-series-wall-single-cfg-15",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-09da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-16",
      slug: "direct-air-dirm-series-wall-single-cfg-16",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-09hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-17",
      slug: "direct-air-dirm-series-wall-single-cfg-17",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-18",
      slug: "direct-air-dirm-series-wall-single-cfg-18",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-19",
      slug: "direct-air-dirm-series-wall-single-cfg-19",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-20",
      slug: "direct-air-dirm-series-wall-single-cfg-20",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-21",
      slug: "direct-air-dirm-series-wall-single-cfg-21",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-24da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-22",
      slug: "direct-air-dirm-series-wall-single-cfg-22",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-24hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-23",
      slug: "direct-air-dirm-series-wall-single-cfg-23",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-48lcda25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-24",
      slug: "direct-air-dirm-series-wall-single-cfg-24",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-09da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-25",
      slug: "direct-air-dirm-series-wall-single-cfg-25",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-09da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-26",
      slug: "direct-air-dirm-series-wall-single-cfg-26",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-09hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-27",
      slug: "direct-air-dirm-series-wall-single-cfg-27",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-09hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-28",
      slug: "direct-air-dirm-series-wall-single-cfg-28",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-29",
      slug: "direct-air-dirm-series-wall-single-cfg-29",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-30",
      slug: "direct-air-dirm-series-wall-single-cfg-30",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-31",
      slug: "direct-air-dirm-series-wall-single-cfg-31",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-32",
      slug: "direct-air-dirm-series-wall-single-cfg-32",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-33",
      slug: "direct-air-dirm-series-wall-single-cfg-33",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-34",
      slug: "direct-air-dirm-series-wall-single-cfg-34",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-35",
      slug: "direct-air-dirm-series-wall-single-cfg-35",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-36",
      slug: "direct-air-dirm-series-wall-single-cfg-36",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-24da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-37",
      slug: "direct-air-dirm-series-wall-single-cfg-37",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-24hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-38",
      slug: "direct-air-dirm-series-wall-single-cfg-38",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-48lcda25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-39",
      slug: "direct-air-dirm-series-wall-single-cfg-39",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12da25-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-40",
      slug: "direct-air-dirm-series-wall-single-cfg-40",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-12hxpro28-1z",
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
      id: "direct-air-dirm-series-wall-single-cfg-41",
      slug: "direct-air-dirm-series-wall-single-cfg-41",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18da25-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-42",
      slug: "direct-air-dirm-series-wall-single-cfg-42",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18da25-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-43",
      slug: "direct-air-dirm-series-wall-single-cfg-43",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18da25-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-44",
      slug: "direct-air-dirm-series-wall-single-cfg-44",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-27da25-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-45",
      slug: "direct-air-dirm-series-wall-single-cfg-45",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-27da25-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-46",
      slug: "direct-air-dirm-series-wall-single-cfg-46",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-27da25-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-47",
      slug: "direct-air-dirm-series-wall-single-cfg-47",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-36da25-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-48",
      slug: "direct-air-dirm-series-wall-single-cfg-48",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-48da25-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-49",
      slug: "direct-air-dirm-series-wall-single-cfg-49",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-48da25-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-50",
      slug: "direct-air-dirm-series-wall-single-cfg-50",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-48da25-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-51",
      slug: "direct-air-dirm-series-wall-single-cfg-51",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18hxpro28-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-52",
      slug: "direct-air-dirm-series-wall-single-cfg-52",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18hxpro28-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-53",
      slug: "direct-air-dirm-series-wall-single-cfg-53",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-18hxpro28-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-54",
      slug: "direct-air-dirm-series-wall-single-cfg-54",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-28hxpro28-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-55",
      slug: "direct-air-dirm-series-wall-single-cfg-55",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-28hxpro28-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-56",
      slug: "direct-air-dirm-series-wall-single-cfg-56",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-28hxpro28-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-57",
      slug: "direct-air-dirm-series-wall-single-cfg-57",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-36hxpro28-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-58",
      slug: "direct-air-dirm-series-wall-single-cfg-58",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-36hxpro28-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-59",
      slug: "direct-air-dirm-series-wall-single-cfg-59",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-36hxpro28-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-60",
      slug: "direct-air-dirm-series-wall-single-cfg-60",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-48hxpro28-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-61",
      slug: "direct-air-dirm-series-wall-single-cfg-61",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-48hxpro28-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-62",
      slug: "direct-air-dirm-series-wall-single-cfg-62",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm-48hxpro28-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-63",
      slug: "direct-air-dirm-series-wall-single-cfg-63",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18da25-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-64",
      slug: "direct-air-dirm-series-wall-single-cfg-64",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18da25-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-65",
      slug: "direct-air-dirm-series-wall-single-cfg-65",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18da25-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-66",
      slug: "direct-air-dirm-series-wall-single-cfg-66",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-27da25-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-67",
      slug: "direct-air-dirm-series-wall-single-cfg-67",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-27da25-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-68",
      slug: "direct-air-dirm-series-wall-single-cfg-68",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-27da25-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-69",
      slug: "direct-air-dirm-series-wall-single-cfg-69",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36da25-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-70",
      slug: "direct-air-dirm-series-wall-single-cfg-70",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36da25-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-71",
      slug: "direct-air-dirm-series-wall-single-cfg-71",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36da25-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-72",
      slug: "direct-air-dirm-series-wall-single-cfg-72",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48da25-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-73",
      slug: "direct-air-dirm-series-wall-single-cfg-73",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48da25-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-74",
      slug: "direct-air-dirm-series-wall-single-cfg-74",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48da25-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-75",
      slug: "direct-air-dirm-series-wall-single-cfg-75",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18hxpro28-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-76",
      slug: "direct-air-dirm-series-wall-single-cfg-76",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18hxpro28-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-77",
      slug: "direct-air-dirm-series-wall-single-cfg-77",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18hxpro28-2z",
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
      id: "direct-air-dirm-series-wall-single-cfg-78",
      slug: "direct-air-dirm-series-wall-single-cfg-78",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-28hxpro28-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-79",
      slug: "direct-air-dirm-series-wall-single-cfg-79",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-28hxpro28-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-80",
      slug: "direct-air-dirm-series-wall-single-cfg-80",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-28hxpro28-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-81",
      slug: "direct-air-dirm-series-wall-single-cfg-81",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36hxpro28-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-82",
      slug: "direct-air-dirm-series-wall-single-cfg-82",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36hxpro28-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-83",
      slug: "direct-air-dirm-series-wall-single-cfg-83",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36hxpro28-4z",
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
      id: "direct-air-dirm-series-wall-single-cfg-84",
      slug: "direct-air-dirm-series-wall-single-cfg-84",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48hxpro28-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-85",
      slug: "direct-air-dirm-series-wall-single-cfg-85",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48hxpro28-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-86",
      slug: "direct-air-dirm-series-wall-single-cfg-86",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48hxpro28-5z",
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
      id: "direct-air-dirm-series-wall-single-cfg-87",
      slug: "direct-air-dirm-series-wall-single-cfg-87",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-27da25-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-88",
      slug: "direct-air-dirm-series-wall-single-cfg-88",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-27da25-3z",
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
      id: "direct-air-dirm-series-wall-single-cfg-89",
      slug: "direct-air-dirm-series-wall-single-cfg-89",
      modelId: "direct-air-dirm-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-27da25-3z",
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
      id: "direct-air-dir-series-central-ducted-cfg-1",
      slug: "direct-air-dir-series-central-ducted-cfg-1",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-18cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-2",
      slug: "direct-air-dir-series-central-ducted-cfg-2",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-24cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-3",
      slug: "direct-air-dir-series-central-ducted-cfg-3",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-4",
      slug: "direct-air-dir-series-central-ducted-cfg-4",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-48cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-5",
      slug: "direct-air-dir-series-central-ducted-cfg-5",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-60cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-6",
      slug: "direct-air-dir-series-central-ducted-cfg-6",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-18magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-7",
      slug: "direct-air-dir-series-central-ducted-cfg-7",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-24magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-8",
      slug: "direct-air-dir-series-central-ducted-cfg-8",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-9",
      slug: "direct-air-dir-series-central-ducted-cfg-9",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-10",
      slug: "direct-air-dir-series-central-ducted-cfg-10",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-48magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-11",
      slug: "direct-air-dir-series-central-ducted-cfg-11",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-60magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-12",
      slug: "direct-air-dir-series-central-ducted-cfg-12",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-13",
      slug: "direct-air-dir-series-central-ducted-cfg-13",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-14",
      slug: "direct-air-dir-series-central-ducted-cfg-14",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-15",
      slug: "direct-air-dir-series-central-ducted-cfg-15",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-18cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-16",
      slug: "direct-air-dir-series-central-ducted-cfg-16",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-18cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-17",
      slug: "direct-air-dir-series-central-ducted-cfg-17",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-18",
      slug: "direct-air-dir-series-central-ducted-cfg-18",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-19",
      slug: "direct-air-dir-series-central-ducted-cfg-19",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-20",
      slug: "direct-air-dir-series-central-ducted-cfg-20",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-21",
      slug: "direct-air-dir-series-central-ducted-cfg-21",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-48magicpro20-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-22",
      slug: "direct-air-dir-series-central-ducted-cfg-22",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-23",
      slug: "direct-air-dir-series-central-ducted-cfg-23",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-48cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-24",
      slug: "direct-air-dir-series-central-ducted-cfg-24",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-60cs19-ou",
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
      id: "direct-air-dir-series-central-ducted-cfg-25",
      slug: "direct-air-dir-series-central-ducted-cfg-25",
      modelId: "direct-air-dir-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-60cs19-ou",
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
      id: "direct-air-dir-series-wall-single-cfg-1",
      slug: "direct-air-dir-series-wall-single-cfg-1",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-09da25-1z",
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
      id: "direct-air-dir-series-wall-single-cfg-2",
      slug: "direct-air-dir-series-wall-single-cfg-2",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-12da25-1z",
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
      id: "direct-air-dir-series-wall-single-cfg-3",
      slug: "direct-air-dir-series-wall-single-cfg-3",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18da25-1z",
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
      id: "direct-air-dir-series-wall-single-cfg-4",
      slug: "direct-air-dir-series-wall-single-cfg-4",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-24da25-1z",
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
      id: "direct-air-dir-series-wall-single-cfg-5",
      slug: "direct-air-dir-series-wall-single-cfg-5",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-06hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.5,
      hspf2: 14.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-6",
      slug: "direct-air-dir-series-wall-single-cfg-6",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-09hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-7",
      slug: "direct-air-dir-series-wall-single-cfg-7",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-12hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-8",
      slug: "direct-air-dir-series-wall-single-cfg-8",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-9",
      slug: "direct-air-dir-series-wall-single-cfg-9",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-24hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-10",
      slug: "direct-air-dir-series-wall-single-cfg-10",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-30da25-1z",
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
      id: "direct-air-dir-series-wall-single-cfg-11",
      slug: "direct-air-dir-series-wall-single-cfg-11",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18da25-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-12",
      slug: "direct-air-dir-series-wall-single-cfg-12",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-24da25-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-13",
      slug: "direct-air-dir-series-wall-single-cfg-13",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48lcda25-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19.8,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-14",
      slug: "direct-air-dir-series-wall-single-cfg-14",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-15",
      slug: "direct-air-dir-series-wall-single-cfg-15",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-24hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.4,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-16",
      slug: "direct-air-dir-series-wall-single-cfg-16",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36lchx-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36400,
      coolingCapacityMaxBtu: 36400,
      seer2: 20,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-17",
      slug: "direct-air-dir-series-wall-single-cfg-17",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48lchx-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.5,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dir-series-wall-single-cfg-18",
      slug: "direct-air-dir-series-wall-single-cfg-18",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-12da25-1z",
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
      id: "direct-air-dir-series-wall-single-cfg-19",
      slug: "direct-air-dir-series-wall-single-cfg-19",
      modelId: "direct-air-dir-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-12hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-1",
      slug: "direct-air-dirm4-series-wall-single-cfg-1",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36lcda25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-2",
      slug: "direct-air-dirm4-series-wall-single-cfg-2",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-09hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-3",
      slug: "direct-air-dirm4-series-wall-single-cfg-3",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-09hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.2,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-4",
      slug: "direct-air-dirm4-series-wall-single-cfg-4",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-09da25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-5",
      slug: "direct-air-dirm4-series-wall-single-cfg-5",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-09da25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-6",
      slug: "direct-air-dirm4-series-wall-single-cfg-6",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-12hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-7",
      slug: "direct-air-dirm4-series-wall-single-cfg-7",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-12da25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-8",
      slug: "direct-air-dirm4-series-wall-single-cfg-8",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-9",
      slug: "direct-air-dirm4-series-wall-single-cfg-9",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18da25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-10",
      slug: "direct-air-dirm4-series-wall-single-cfg-10",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-24hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-11",
      slug: "direct-air-dirm4-series-wall-single-cfg-11",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-24hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-12",
      slug: "direct-air-dirm4-series-wall-single-cfg-12",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-24da25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-13",
      slug: "direct-air-dirm4-series-wall-single-cfg-13",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-24da25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-14",
      slug: "direct-air-dirm4-series-wall-single-cfg-14",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36lchx-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36600,
      coolingCapacityMaxBtu: 36600,
      seer2: 21.2,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-15",
      slug: "direct-air-dirm4-series-wall-single-cfg-15",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36lchx-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-16",
      slug: "direct-air-dirm4-series-wall-single-cfg-16",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36lcda25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-17",
      slug: "direct-air-dirm4-series-wall-single-cfg-17",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-36lcda25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-18",
      slug: "direct-air-dirm4-series-wall-single-cfg-18",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48lchx-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-19",
      slug: "direct-air-dirm4-series-wall-single-cfg-19",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48lchx-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-20",
      slug: "direct-air-dirm4-series-wall-single-cfg-20",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48lcda25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-21",
      slug: "direct-air-dirm4-series-wall-single-cfg-21",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-48lcda25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-22",
      slug: "direct-air-dirm4-series-wall-single-cfg-22",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-09hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-23",
      slug: "direct-air-dirm4-series-wall-single-cfg-23",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-09da25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-24",
      slug: "direct-air-dirm4-series-wall-single-cfg-24",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-12hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-25",
      slug: "direct-air-dirm4-series-wall-single-cfg-25",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-12da25-1z",
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
      id: "direct-air-dirm4-series-wall-single-cfg-26",
      slug: "direct-air-dirm4-series-wall-single-cfg-26",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18hxpro28-1z",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18.4,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "direct-air-dirm4-series-wall-single-cfg-27",
      slug: "direct-air-dirm4-series-wall-single-cfg-27",
      modelId: "direct-air-dirm4-series-wall-single",
      outdoorUnitId: "direct-air-dirm4-18da25-1z",
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
      id: "direct-air-dirm4-series-central-ducted-cfg-1",
      slug: "direct-air-dirm4-series-central-ducted-cfg-1",
      modelId: "direct-air-dirm4-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30magicpro20-ou",
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
      id: "direct-air-dirm4-series-central-ducted-cfg-2",
      slug: "direct-air-dirm4-series-central-ducted-cfg-2",
      modelId: "direct-air-dirm4-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36magicpro20-ou",
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
      id: "direct-air-dirm4-series-central-ducted-cfg-3",
      slug: "direct-air-dirm4-series-central-ducted-cfg-3",
      modelId: "direct-air-dirm4-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30magicpro20-ou",
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
      id: "direct-air-dirm4-series-central-ducted-cfg-4",
      slug: "direct-air-dirm4-series-central-ducted-cfg-4",
      modelId: "direct-air-dirm4-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-30magicpro20-ou",
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
      id: "direct-air-dirm4-series-central-ducted-cfg-5",
      slug: "direct-air-dirm4-series-central-ducted-cfg-5",
      modelId: "direct-air-dirm4-series-central-ducted",
      outdoorUnitId: "direct-air-dirm4-36magicpro20-ou",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "direct-air-mvb-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-standard-wall-single-cfg-1",
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
      configurationId: "direct-air-standard-wall-single-cfg-2",
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
      configurationId: "direct-air-standard-wall-single-cfg-3",
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
      configurationId: "direct-air-standard-wall-single-cfg-4",
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
      configurationId: "direct-air-standard-wall-single-cfg-5",
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
      configurationId: "direct-air-standard-wall-single-cfg-6",
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
      configurationId: "direct-air-standard-wall-single-cfg-7",
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
      configurationId: "direct-air-standard-wall-single-cfg-8",
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
      configurationId: "direct-air-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-standard-wall-single-cfg-10",
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
      configurationId: "direct-air-standard-wall-single-cfg-11",
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
      configurationId: "direct-air-standard-wall-single-cfg-12",
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
      configurationId: "direct-air-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-standard-wall-single-cfg-14",
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
      configurationId: "direct-air-standard-wall-single-cfg-15",
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
      configurationId: "direct-air-standard-wall-single-cfg-16",
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
      configurationId: "direct-air-standard-wall-single-cfg-17",
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
      configurationId: "direct-air-standard-wall-single-cfg-18",
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
      configurationId: "direct-air-standard-wall-single-cfg-19",
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
      configurationId: "direct-air-standard-wall-single-cfg-20",
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
      configurationId: "direct-air-standard-wall-single-cfg-21",
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
      configurationId: "direct-air-standard-wall-single-cfg-22",
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
      configurationId: "direct-air-standard-wall-single-cfg-23",
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
      configurationId: "direct-air-standard-wall-single-cfg-24",
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
      configurationId: "direct-air-standard-wall-single-cfg-25",
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
      configurationId: "direct-air-standard-wall-single-cfg-26",
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
      configurationId: "direct-air-standard-wall-single-cfg-27",
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
      configurationId: "direct-air-standard-wall-single-cfg-28",
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
      configurationId: "direct-air-standard-wall-single-cfg-29",
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
      configurationId: "direct-air-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-standard-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-m3o-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-mo-series-wall-single-cfg-1",
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
      configurationId: "direct-air-mo-series-wall-single-cfg-2",
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
      configurationId: "direct-air-mo-series-wall-single-cfg-3",
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
      configurationId: "direct-air-mo-series-wall-single-cfg-4",
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
      configurationId: "direct-air-m5o-series-wall-single-cfg-1",
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
      configurationId: "direct-air-m5o-series-wall-single-cfg-2",
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
      configurationId: "direct-air-hiultra-wall-single-cfg-1",
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
      configurationId: "direct-air-hiultra-wall-single-cfg-2",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-1",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-2",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-3",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-4",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-5",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-6",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-7",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-8",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-9",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-10",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-11",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-12",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-13",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-14",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-15",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-16",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-17",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm-series-central-ducted-cfg-19",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-20",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm-series-central-ducted-cfg-22",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-23",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-24",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-25",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-26",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-27",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-28",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-29",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-30",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-31",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-32",
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
      configurationId: "direct-air-dirm-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm-series-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm-series-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm-series-central-ducted-cfg-38",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-1",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-2",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-3",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-4",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-5",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-6",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-7",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-8",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-9",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-10",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-11",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-12",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-13",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-14",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-15",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-16",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-17",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-18",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-19",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-20",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-21",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-22",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-23",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-24",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-25",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-26",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-27",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-28",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-29",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-30",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-31",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-32",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-33",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-34",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-35",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-36",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-37",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-38",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-39",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-40",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-41",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-42",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-43",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-44",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-45",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-46",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-47",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-48",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-49",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-50",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-51",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-52",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-53",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-54",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-55",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-56",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-57",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-58",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-59",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-60",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-61",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-62",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-63",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-64",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-65",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-66",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-67",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-68",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-69",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-70",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-71",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-72",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-73",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-74",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-75",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-76",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-77",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-78",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-79",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-80",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-81",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-82",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-83",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-84",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-85",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-86",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-87",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-88",
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
      configurationId: "direct-air-dirm-series-wall-single-cfg-89",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-1",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-2",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-3",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-4",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-5",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-6",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-7",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-8",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-9",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-10",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-11",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-central-ducted-cfg-14",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-15",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-16",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-central-ducted-cfg-18",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-19",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-20",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-21",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-22",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-23",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-24",
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
      configurationId: "direct-air-dir-series-central-ducted-cfg-25",
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
      configurationId: "direct-air-dir-series-wall-single-cfg-1",
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
      configurationId: "direct-air-dir-series-wall-single-cfg-2",
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
      configurationId: "direct-air-dir-series-wall-single-cfg-3",
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
      configurationId: "direct-air-dir-series-wall-single-cfg-4",
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
      configurationId: "direct-air-dir-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-10",
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
      configurationId: "direct-air-dir-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dir-series-wall-single-cfg-18",
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
      configurationId: "direct-air-dir-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-4",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-5",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-7",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-9",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-12",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-13",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-16",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-17",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-20",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-21",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-23",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-25",
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
      configurationId: "direct-air-dirm4-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-wall-single-cfg-27",
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
      configurationId: "direct-air-dirm4-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "direct-air-dirm4-series-central-ducted-cfg-2",
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
      configurationId: "direct-air-dirm4-series-central-ducted-cfg-3",
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
      configurationId: "direct-air-dirm4-series-central-ducted-cfg-4",
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
      configurationId: "direct-air-dirm4-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
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
