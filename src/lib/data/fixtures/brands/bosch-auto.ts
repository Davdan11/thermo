import type { BrandDataset } from "../../types";

export const boschDataset: BrandDataset = {
  brand: {
    id: "bosch",
    slug: "bosch",
    name: "BOSCH",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "bosch-standard",
      slug: "bosch-standard",
      name: "Standard",
      brandId: "bosch",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series",
      slug: "bosch-bms-series",
      name: "BMS series",
      brandId: "bosch",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500",
      slug: "bosch-bms500",
      name: "BMS500",
      brandId: "bosch",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp",
      slug: "bosch-ids-premium-lgwp",
      name: "IDS Premium LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra",
      slug: "bosch-ids-ultra",
      name: "IDS Ultra",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp",
      slug: "bosch-ids-light-lgwp",
      name: "IDS Light-LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp",
      slug: "bosch-idp-premium-lgwp",
      name: "IDP Premium LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-plus-lgwp",
      slug: "bosch-idp-plus-lgwp",
      name: "IDP Plus LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "bosch-standard-wall-single",
      slug: "bosch-standard-wall-single",
      name: "Standard",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 43500,
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
      id: "bosch-standard-central-ducted",
      slug: "bosch-standard-central-ducted",
      name: "Standard",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 17200,
      heatingCapacity5FMaxBtu: 38500,
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
      id: "bosch-bms-series-wall-single",
      slug: "bosch-bms-series-wall-single",
      name: "BMS series",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS series",
      normalizedModelNumber: "bms-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 17.1,
      seer2Max: 27.4,
      hspf2Min: 8.5,
      hspf2Max: 13.5,
      cop5FMin: 1.75,
      cop5FMax: 2.54,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single",
      slug: "bosch-bms500-wall-single",
      name: "BMS500",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500",
      normalizedModelNumber: "bms500",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 6100,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 18,
      seer2Max: 28.1,
      hspf2Min: 8.7,
      hspf2Max: 13.6,
      cop5FMin: 1.59,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted",
      slug: "bosch-ids-premium-lgwp-central-ducted",
      name: "IDS Premium LGWP",
      seriesId: "bosch-ids-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Premium LGWP",
      normalizedModelNumber: "ids-premium-lgwp",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 19400,
      heatingCapacity5FMaxBtu: 44000,
      seer2Min: 15.2,
      seer2Max: 20,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted",
      slug: "bosch-ids-ultra-central-ducted",
      name: "IDS Ultra",
      seriesId: "bosch-ids-ultra",
      brandId: "bosch",
      modelNumber: "IDS Ultra",
      normalizedModelNumber: "ids-ultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 53500,
      heatingCapacity5FMinBtu: 45500,
      heatingCapacity5FMaxBtu: 55000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted",
      slug: "bosch-ids-light-lgwp-central-ducted",
      name: "IDS Light-LGWP",
      seriesId: "bosch-ids-light-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Light-LGWP",
      normalizedModelNumber: "ids-light-lgwp",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 14800,
      heatingCapacity5FMaxBtu: 40500,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.88,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted",
      slug: "bosch-idp-premium-lgwp-central-ducted",
      name: "IDP Premium LGWP",
      seriesId: "bosch-idp-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDP Premium LGWP",
      normalizedModelNumber: "idp-premium-lgwp",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 43000,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 8.1,
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
      id: "bosch-idp-plus-lgwp-central-ducted",
      slug: "bosch-idp-plus-lgwp-central-ducted",
      name: "IDP Plus LGWP",
      seriesId: "bosch-idp-plus-lgwp",
      brandId: "bosch",
      modelNumber: "IDP Plus LGWP",
      normalizedModelNumber: "idp-plus-lgwp",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 40500,
      heatingCapacity5FMaxBtu: 40500,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "bosch-bova-36hdn1-m18m",
      modelNumber: "BOVA-36HDN1-M18M",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60hdn1-m18m",
      modelNumber: "BOVA-60HDN1-M18M",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-0csxxa",
      modelNumber: "BMS500-AAS009-0CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxxa",
      modelNumber: "BMS500-AAS009-1CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-0csxxa",
      modelNumber: "BMS500-AAS012-0CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxxa",
      modelNumber: "BMS500-AAS018-1CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxxa",
      modelNumber: "BMS500-AAS024-1CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-36hdn1-m20g",
      modelNumber: "BOVA-36HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60hdn1-m20g",
      modelNumber: "BOVA-60HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-0csxrb",
      modelNumber: "BMS500-AAS012-0CSXRB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxra",
      modelNumber: "BMS500-AAS009-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxra",
      modelNumber: "BMS500-AAS012-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxra",
      modelNumber: "BMS500-AAS018-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxra",
      modelNumber: "BMS500-AAS024-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxhb",
      modelNumber: "BMS500-AAS009-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxhb",
      modelNumber: "BMS500-AAS012-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxlb",
      modelNumber: "BMS500-AAS036-1CSXLB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas048-1csxlb",
      modelNumber: "BMS500-AAS048-1CSXLB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas060-1csxlb",
      modelNumber: "BMS500-AAS060-1CSXLB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxra",
      modelNumber: "BMS500-AAM018-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxra",
      modelNumber: "BMS500-AAM027-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxra",
      modelNumber: "BMS500-AAM036-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxra",
      modelNumber: "BMS500-AAM048-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxhb",
      modelNumber: "BMS500-AAM027-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxhb",
      modelNumber: "BMS500-AAM036-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxhb",
      modelNumber: "BMS500-AAS024-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxxa",
      modelNumber: "BMS500-AAS012-1CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovb-36hdn1-m18m",
      modelNumber: "BOVB-36HDN1-M18M",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovb-60hdn1-m18m",
      modelNumber: "BOVB-60HDN1-M18M",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovb-36hdn1-m20g",
      modelNumber: "BOVB-36HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovb-60hdn1-m20g",
      modelNumber: "BOVB-60HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxrc",
      modelNumber: "BMS500-AAS036-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxlc",
      modelNumber: "BMS500-AAS036-1CSXLC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas048-1csxlc",
      modelNumber: "BMS500-AAS048-1CSXLC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-24hdn1-m15g",
      modelNumber: "BOVA-24HDN1-M15G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-36hdn1-m15g",
      modelNumber: "BOVA-36HDN1-M15G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60hdn1-m15g",
      modelNumber: "BOVA-60HDN1-M15G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovc-36hdn1-m20g",
      modelNumber: "BOVC-36HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovd-36hdn1-m20g",
      modelNumber: "BOVD-36HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxrd",
      modelNumber: "BMS500-AAS036-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas060-1csxld",
      modelNumber: "BMS500-AAS060-1CSXLD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bpha-36rcb-m16s",
      modelNumber: "BPHA-36RCB-M16S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-0csxrc",
      modelNumber: "BMS500-AAS012-0CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxrc",
      modelNumber: "BMS500-AAS024-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxhd",
      modelNumber: "BMS500-AAS009-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxhd",
      modelNumber: "BMS500-AAS012-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxhd",
      modelNumber: "BMS500-AAS018-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxhd",
      modelNumber: "BMS500-AAS024-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxrd",
      modelNumber: "BMS500-AAS009-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxrd",
      modelNumber: "BMS500-AAS012-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxrd",
      modelNumber: "BMS500-AAS018-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxrd",
      modelNumber: "BMS500-AAS024-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas030-1csxrd",
      modelNumber: "BMS500-AAS030-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxld",
      modelNumber: "BMS500-AAS036-1CSXLD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas048-1csxld",
      modelNumber: "BMS500-AAS048-1CSXLD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxhd",
      modelNumber: "BMS500-AAM018-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxhd",
      modelNumber: "BMS500-AAM027-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxhd",
      modelNumber: "BMS500-AAM036-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxhd",
      modelNumber: "BMS500-AAM048-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxrd",
      modelNumber: "BMS500-AAM018-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxrd",
      modelNumber: "BMS500-AAM027-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxrd",
      modelNumber: "BMS500-AAM036-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxrd",
      modelNumber: "BMS500-AAM048-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-0csxrd",
      modelNumber: "BMS500-AAS012-0CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxrc",
      modelNumber: "BMS500-AAS009-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxrc",
      modelNumber: "BMS500-AAS012-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxrc",
      modelNumber: "BMS500-AAS018-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxhc",
      modelNumber: "BMS500-AAS009-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxhc",
      modelNumber: "BMS500-AAS012-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxhc",
      modelNumber: "BMS500-AAS018-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxhc",
      modelNumber: "BMS500-AAS024-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas030-1csxrc",
      modelNumber: "BMS500-AAS030-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxrc",
      modelNumber: "BMS500-AAM018-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxrc",
      modelNumber: "BMS500-AAM027-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxrc",
      modelNumber: "BMS500-AAM036-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxrc",
      modelNumber: "BMS500-AAM048-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxhc",
      modelNumber: "BMS500-AAM018-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxhc",
      modelNumber: "BMS500-AAM027-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxhc",
      modelNumber: "BMS500-AAM036-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxhc",
      modelNumber: "BMS500-AAM048-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-36rtb-m20s",
      modelNumber: "BOVA-36RTB-M20S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60rtb-m20s",
      modelNumber: "BOVA-60RTB-M20S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60mtb-m19e",
      modelNumber: "BOVA-60MTB-M19E",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-24rxb-m15s",
      modelNumber: "BOVA-24RXB-M15S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-36rxb-m15s",
      modelNumber: "BOVA-36RXB-M15S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60rxb-m15s",
      modelNumber: "BOVA-60RXB-M15S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bpba-36rcb-m18s",
      modelNumber: "BPBA-36RCB-M18S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bpba-60rcb-m18s",
      modelNumber: "BPBA-60RCB-M18S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bpha-60rcb-m16s",
      modelNumber: "BPHA-60RCB-M16S",
      brandId: "bosch",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "bosch-standard-wall-single-cfg-1",
      slug: "bosch-standard-wall-single-cfg-1",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-2",
      slug: "bosch-standard-wall-single-cfg-2",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-3",
      slug: "bosch-standard-wall-single-cfg-3",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-4",
      slug: "bosch-standard-wall-single-cfg-4",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-5",
      slug: "bosch-standard-wall-single-cfg-5",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-0csxxa",
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
      id: "bosch-standard-wall-single-cfg-6",
      slug: "bosch-standard-wall-single-cfg-6",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxxa",
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
      id: "bosch-standard-wall-single-cfg-7",
      slug: "bosch-standard-wall-single-cfg-7",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-0csxxa",
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
      id: "bosch-standard-wall-single-cfg-8",
      slug: "bosch-standard-wall-single-cfg-8",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxxa",
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
      id: "bosch-standard-wall-single-cfg-9",
      slug: "bosch-standard-wall-single-cfg-9",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxxa",
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
      id: "bosch-standard-wall-single-cfg-10",
      slug: "bosch-standard-wall-single-cfg-10",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-11",
      slug: "bosch-standard-wall-single-cfg-11",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-12",
      slug: "bosch-standard-wall-single-cfg-12",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-13",
      slug: "bosch-standard-wall-single-cfg-13",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-14",
      slug: "bosch-standard-wall-single-cfg-14",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-15",
      slug: "bosch-standard-wall-single-cfg-15",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-16",
      slug: "bosch-standard-wall-single-cfg-16",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-17",
      slug: "bosch-standard-wall-single-cfg-17",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-18",
      slug: "bosch-standard-wall-single-cfg-18",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-19",
      slug: "bosch-standard-wall-single-cfg-19",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-20",
      slug: "bosch-standard-wall-single-cfg-20",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-21",
      slug: "bosch-standard-wall-single-cfg-21",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-22",
      slug: "bosch-standard-wall-single-cfg-22",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-23",
      slug: "bosch-standard-wall-single-cfg-23",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-24",
      slug: "bosch-standard-wall-single-cfg-24",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-25",
      slug: "bosch-standard-wall-single-cfg-25",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-26",
      slug: "bosch-standard-wall-single-cfg-26",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-27",
      slug: "bosch-standard-wall-single-cfg-27",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-28",
      slug: "bosch-standard-wall-single-cfg-28",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-29",
      slug: "bosch-standard-wall-single-cfg-29",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-30",
      slug: "bosch-standard-wall-single-cfg-30",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-31",
      slug: "bosch-standard-wall-single-cfg-31",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-32",
      slug: "bosch-standard-wall-single-cfg-32",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-0csxrb",
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
      id: "bosch-standard-wall-single-cfg-33",
      slug: "bosch-standard-wall-single-cfg-33",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxra",
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
      id: "bosch-standard-wall-single-cfg-34",
      slug: "bosch-standard-wall-single-cfg-34",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxra",
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
      id: "bosch-standard-wall-single-cfg-35",
      slug: "bosch-standard-wall-single-cfg-35",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxra",
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
      id: "bosch-standard-wall-single-cfg-36",
      slug: "bosch-standard-wall-single-cfg-36",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxra",
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
      id: "bosch-standard-wall-single-cfg-37",
      slug: "bosch-standard-wall-single-cfg-37",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhb",
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
      id: "bosch-standard-wall-single-cfg-38",
      slug: "bosch-standard-wall-single-cfg-38",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhb",
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
      id: "bosch-standard-wall-single-cfg-39",
      slug: "bosch-standard-wall-single-cfg-39",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxra",
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
      id: "bosch-standard-wall-single-cfg-40",
      slug: "bosch-standard-wall-single-cfg-40",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-41",
      slug: "bosch-standard-wall-single-cfg-41",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-42",
      slug: "bosch-standard-wall-single-cfg-42",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas036-1csxlb",
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
      id: "bosch-standard-wall-single-cfg-43",
      slug: "bosch-standard-wall-single-cfg-43",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas048-1csxlb",
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
      id: "bosch-standard-wall-single-cfg-44",
      slug: "bosch-standard-wall-single-cfg-44",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas060-1csxlb",
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
      id: "bosch-standard-wall-single-cfg-45",
      slug: "bosch-standard-wall-single-cfg-45",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxra",
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
      id: "bosch-standard-wall-single-cfg-46",
      slug: "bosch-standard-wall-single-cfg-46",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxra",
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
      id: "bosch-standard-wall-single-cfg-47",
      slug: "bosch-standard-wall-single-cfg-47",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxra",
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
      id: "bosch-standard-wall-single-cfg-48",
      slug: "bosch-standard-wall-single-cfg-48",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxra",
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
      id: "bosch-standard-wall-single-cfg-49",
      slug: "bosch-standard-wall-single-cfg-49",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas036-1csxlb",
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
      id: "bosch-standard-wall-single-cfg-50",
      slug: "bosch-standard-wall-single-cfg-50",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas048-1csxlb",
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
      id: "bosch-standard-wall-single-cfg-51",
      slug: "bosch-standard-wall-single-cfg-51",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxra",
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
      id: "bosch-standard-wall-single-cfg-52",
      slug: "bosch-standard-wall-single-cfg-52",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxra",
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
      id: "bosch-standard-wall-single-cfg-53",
      slug: "bosch-standard-wall-single-cfg-53",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxra",
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
      id: "bosch-standard-wall-single-cfg-54",
      slug: "bosch-standard-wall-single-cfg-54",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxra",
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
      id: "bosch-standard-wall-single-cfg-55",
      slug: "bosch-standard-wall-single-cfg-55",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxhb",
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
      id: "bosch-standard-wall-single-cfg-56",
      slug: "bosch-standard-wall-single-cfg-56",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxhb",
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
      id: "bosch-standard-wall-single-cfg-57",
      slug: "bosch-standard-wall-single-cfg-57",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxhb",
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
      id: "bosch-standard-wall-single-cfg-58",
      slug: "bosch-standard-wall-single-cfg-58",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhb",
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
      id: "bosch-standard-wall-single-cfg-59",
      slug: "bosch-standard-wall-single-cfg-59",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhb",
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
      id: "bosch-standard-wall-single-cfg-60",
      slug: "bosch-standard-wall-single-cfg-60",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhb",
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
      id: "bosch-standard-wall-single-cfg-61",
      slug: "bosch-standard-wall-single-cfg-61",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxhb",
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
      id: "bosch-standard-wall-single-cfg-62",
      slug: "bosch-standard-wall-single-cfg-62",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-63",
      slug: "bosch-standard-wall-single-cfg-63",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-64",
      slug: "bosch-standard-wall-single-cfg-64",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-65",
      slug: "bosch-standard-wall-single-cfg-65",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-66",
      slug: "bosch-standard-wall-single-cfg-66",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-67",
      slug: "bosch-standard-wall-single-cfg-67",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxxa",
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
      id: "bosch-standard-wall-single-cfg-68",
      slug: "bosch-standard-wall-single-cfg-68",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-69",
      slug: "bosch-standard-wall-single-cfg-69",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-70",
      slug: "bosch-standard-wall-single-cfg-70",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-71",
      slug: "bosch-standard-wall-single-cfg-71",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-72",
      slug: "bosch-standard-wall-single-cfg-72",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-73",
      slug: "bosch-standard-wall-single-cfg-73",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-74",
      slug: "bosch-standard-wall-single-cfg-74",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-75",
      slug: "bosch-standard-wall-single-cfg-75",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-76",
      slug: "bosch-standard-wall-single-cfg-76",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-77",
      slug: "bosch-standard-wall-single-cfg-77",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-78",
      slug: "bosch-standard-wall-single-cfg-78",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-79",
      slug: "bosch-standard-wall-single-cfg-79",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-80",
      slug: "bosch-standard-wall-single-cfg-80",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-81",
      slug: "bosch-standard-wall-single-cfg-81",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-82",
      slug: "bosch-standard-wall-single-cfg-82",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-83",
      slug: "bosch-standard-wall-single-cfg-83",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-84",
      slug: "bosch-standard-wall-single-cfg-84",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-85",
      slug: "bosch-standard-wall-single-cfg-85",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-86",
      slug: "bosch-standard-wall-single-cfg-86",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-87",
      slug: "bosch-standard-wall-single-cfg-87",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-88",
      slug: "bosch-standard-wall-single-cfg-88",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-89",
      slug: "bosch-standard-wall-single-cfg-89",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-90",
      slug: "bosch-standard-wall-single-cfg-90",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-91",
      slug: "bosch-standard-wall-single-cfg-91",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-92",
      slug: "bosch-standard-wall-single-cfg-92",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-93",
      slug: "bosch-standard-wall-single-cfg-93",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-wall-single-cfg-94",
      slug: "bosch-standard-wall-single-cfg-94",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-95",
      slug: "bosch-standard-wall-single-cfg-95",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-96",
      slug: "bosch-standard-wall-single-cfg-96",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-97",
      slug: "bosch-standard-wall-single-cfg-97",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-98",
      slug: "bosch-standard-wall-single-cfg-98",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-99",
      slug: "bosch-standard-wall-single-cfg-99",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-100",
      slug: "bosch-standard-wall-single-cfg-100",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-101",
      slug: "bosch-standard-wall-single-cfg-101",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-102",
      slug: "bosch-standard-wall-single-cfg-102",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-103",
      slug: "bosch-standard-wall-single-cfg-103",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-104",
      slug: "bosch-standard-wall-single-cfg-104",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-105",
      slug: "bosch-standard-wall-single-cfg-105",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-106",
      slug: "bosch-standard-wall-single-cfg-106",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-107",
      slug: "bosch-standard-wall-single-cfg-107",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-108",
      slug: "bosch-standard-wall-single-cfg-108",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-109",
      slug: "bosch-standard-wall-single-cfg-109",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-110",
      slug: "bosch-standard-wall-single-cfg-110",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-111",
      slug: "bosch-standard-wall-single-cfg-111",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas036-1csxrc",
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
      id: "bosch-standard-wall-single-cfg-112",
      slug: "bosch-standard-wall-single-cfg-112",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas036-1csxlc",
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
      id: "bosch-standard-wall-single-cfg-113",
      slug: "bosch-standard-wall-single-cfg-113",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas048-1csxlc",
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
      id: "bosch-standard-wall-single-cfg-114",
      slug: "bosch-standard-wall-single-cfg-114",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas036-1csxlc",
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
      id: "bosch-standard-wall-single-cfg-115",
      slug: "bosch-standard-wall-single-cfg-115",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas048-1csxlc",
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
      id: "bosch-standard-wall-single-cfg-116",
      slug: "bosch-standard-wall-single-cfg-116",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-117",
      slug: "bosch-standard-wall-single-cfg-117",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-118",
      slug: "bosch-standard-wall-single-cfg-118",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-119",
      slug: "bosch-standard-wall-single-cfg-119",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-120",
      slug: "bosch-standard-wall-single-cfg-120",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-121",
      slug: "bosch-standard-wall-single-cfg-121",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-122",
      slug: "bosch-standard-wall-single-cfg-122",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-123",
      slug: "bosch-standard-wall-single-cfg-123",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 10800,
      coolingCapacityMaxBtu: 10800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-124",
      slug: "bosch-standard-wall-single-cfg-124",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 10800,
      coolingCapacityMaxBtu: 10800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-125",
      slug: "bosch-standard-wall-single-cfg-125",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-126",
      slug: "bosch-standard-wall-single-cfg-126",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-127",
      slug: "bosch-standard-wall-single-cfg-127",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-128",
      slug: "bosch-standard-wall-single-cfg-128",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
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
      id: "bosch-standard-wall-single-cfg-129",
      slug: "bosch-standard-wall-single-cfg-129",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-130",
      slug: "bosch-standard-wall-single-cfg-130",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-131",
      slug: "bosch-standard-wall-single-cfg-131",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-132",
      slug: "bosch-standard-wall-single-cfg-132",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-133",
      slug: "bosch-standard-wall-single-cfg-133",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-134",
      slug: "bosch-standard-wall-single-cfg-134",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-135",
      slug: "bosch-standard-wall-single-cfg-135",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-136",
      slug: "bosch-standard-wall-single-cfg-136",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-137",
      slug: "bosch-standard-wall-single-cfg-137",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-138",
      slug: "bosch-standard-wall-single-cfg-138",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-139",
      slug: "bosch-standard-wall-single-cfg-139",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-140",
      slug: "bosch-standard-wall-single-cfg-140",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-141",
      slug: "bosch-standard-wall-single-cfg-141",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-142",
      slug: "bosch-standard-wall-single-cfg-142",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-143",
      slug: "bosch-standard-wall-single-cfg-143",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-144",
      slug: "bosch-standard-wall-single-cfg-144",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-145",
      slug: "bosch-standard-wall-single-cfg-145",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-146",
      slug: "bosch-standard-wall-single-cfg-146",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-147",
      slug: "bosch-standard-wall-single-cfg-147",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-148",
      slug: "bosch-standard-wall-single-cfg-148",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-149",
      slug: "bosch-standard-wall-single-cfg-149",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-wall-single-cfg-150",
      slug: "bosch-standard-wall-single-cfg-150",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-151",
      slug: "bosch-standard-wall-single-cfg-151",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-cfg-152",
      slug: "bosch-standard-wall-single-cfg-152",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas036-1csxrd",
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
      id: "bosch-standard-wall-single-cfg-153",
      slug: "bosch-standard-wall-single-cfg-153",
      modelId: "bosch-standard-wall-single",
      outdoorUnitId: "bosch-bms500-aas060-1csxld",
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
      id: "bosch-standard-central-ducted-cfg-1",
      slug: "bosch-standard-central-ducted-cfg-1",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-2",
      slug: "bosch-standard-central-ducted-cfg-2",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-3",
      slug: "bosch-standard-central-ducted-cfg-3",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-4",
      slug: "bosch-standard-central-ducted-cfg-4",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-5",
      slug: "bosch-standard-central-ducted-cfg-5",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-6",
      slug: "bosch-standard-central-ducted-cfg-6",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-7",
      slug: "bosch-standard-central-ducted-cfg-7",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-8",
      slug: "bosch-standard-central-ducted-cfg-8",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-9",
      slug: "bosch-standard-central-ducted-cfg-9",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-10",
      slug: "bosch-standard-central-ducted-cfg-10",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-11",
      slug: "bosch-standard-central-ducted-cfg-11",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-12",
      slug: "bosch-standard-central-ducted-cfg-12",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-13",
      slug: "bosch-standard-central-ducted-cfg-13",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-14",
      slug: "bosch-standard-central-ducted-cfg-14",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-15",
      slug: "bosch-standard-central-ducted-cfg-15",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-16",
      slug: "bosch-standard-central-ducted-cfg-16",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-17",
      slug: "bosch-standard-central-ducted-cfg-17",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-18",
      slug: "bosch-standard-central-ducted-cfg-18",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-19",
      slug: "bosch-standard-central-ducted-cfg-19",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-20",
      slug: "bosch-standard-central-ducted-cfg-20",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-21",
      slug: "bosch-standard-central-ducted-cfg-21",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-22",
      slug: "bosch-standard-central-ducted-cfg-22",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-23",
      slug: "bosch-standard-central-ducted-cfg-23",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-24",
      slug: "bosch-standard-central-ducted-cfg-24",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-25",
      slug: "bosch-standard-central-ducted-cfg-25",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-26",
      slug: "bosch-standard-central-ducted-cfg-26",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-27",
      slug: "bosch-standard-central-ducted-cfg-27",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-28",
      slug: "bosch-standard-central-ducted-cfg-28",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-29",
      slug: "bosch-standard-central-ducted-cfg-29",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-30",
      slug: "bosch-standard-central-ducted-cfg-30",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-31",
      slug: "bosch-standard-central-ducted-cfg-31",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-32",
      slug: "bosch-standard-central-ducted-cfg-32",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-33",
      slug: "bosch-standard-central-ducted-cfg-33",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-34",
      slug: "bosch-standard-central-ducted-cfg-34",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-35",
      slug: "bosch-standard-central-ducted-cfg-35",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-36",
      slug: "bosch-standard-central-ducted-cfg-36",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-37",
      slug: "bosch-standard-central-ducted-cfg-37",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-38",
      slug: "bosch-standard-central-ducted-cfg-38",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-39",
      slug: "bosch-standard-central-ducted-cfg-39",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-40",
      slug: "bosch-standard-central-ducted-cfg-40",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-41",
      slug: "bosch-standard-central-ducted-cfg-41",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-42",
      slug: "bosch-standard-central-ducted-cfg-42",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-43",
      slug: "bosch-standard-central-ducted-cfg-43",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-44",
      slug: "bosch-standard-central-ducted-cfg-44",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-45",
      slug: "bosch-standard-central-ducted-cfg-45",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-46",
      slug: "bosch-standard-central-ducted-cfg-46",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-47",
      slug: "bosch-standard-central-ducted-cfg-47",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-48",
      slug: "bosch-standard-central-ducted-cfg-48",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-49",
      slug: "bosch-standard-central-ducted-cfg-49",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-50",
      slug: "bosch-standard-central-ducted-cfg-50",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-51",
      slug: "bosch-standard-central-ducted-cfg-51",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-52",
      slug: "bosch-standard-central-ducted-cfg-52",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-53",
      slug: "bosch-standard-central-ducted-cfg-53",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-54",
      slug: "bosch-standard-central-ducted-cfg-54",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-55",
      slug: "bosch-standard-central-ducted-cfg-55",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-56",
      slug: "bosch-standard-central-ducted-cfg-56",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-57",
      slug: "bosch-standard-central-ducted-cfg-57",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-58",
      slug: "bosch-standard-central-ducted-cfg-58",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-59",
      slug: "bosch-standard-central-ducted-cfg-59",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-60",
      slug: "bosch-standard-central-ducted-cfg-60",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-61",
      slug: "bosch-standard-central-ducted-cfg-61",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-62",
      slug: "bosch-standard-central-ducted-cfg-62",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-63",
      slug: "bosch-standard-central-ducted-cfg-63",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-64",
      slug: "bosch-standard-central-ducted-cfg-64",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-65",
      slug: "bosch-standard-central-ducted-cfg-65",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-66",
      slug: "bosch-standard-central-ducted-cfg-66",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-67",
      slug: "bosch-standard-central-ducted-cfg-67",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-68",
      slug: "bosch-standard-central-ducted-cfg-68",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-69",
      slug: "bosch-standard-central-ducted-cfg-69",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-70",
      slug: "bosch-standard-central-ducted-cfg-70",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-71",
      slug: "bosch-standard-central-ducted-cfg-71",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-72",
      slug: "bosch-standard-central-ducted-cfg-72",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-73",
      slug: "bosch-standard-central-ducted-cfg-73",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-74",
      slug: "bosch-standard-central-ducted-cfg-74",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-75",
      slug: "bosch-standard-central-ducted-cfg-75",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-76",
      slug: "bosch-standard-central-ducted-cfg-76",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-77",
      slug: "bosch-standard-central-ducted-cfg-77",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-78",
      slug: "bosch-standard-central-ducted-cfg-78",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-79",
      slug: "bosch-standard-central-ducted-cfg-79",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-80",
      slug: "bosch-standard-central-ducted-cfg-80",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-81",
      slug: "bosch-standard-central-ducted-cfg-81",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-82",
      slug: "bosch-standard-central-ducted-cfg-82",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-83",
      slug: "bosch-standard-central-ducted-cfg-83",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-84",
      slug: "bosch-standard-central-ducted-cfg-84",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-85",
      slug: "bosch-standard-central-ducted-cfg-85",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-86",
      slug: "bosch-standard-central-ducted-cfg-86",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-87",
      slug: "bosch-standard-central-ducted-cfg-87",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-88",
      slug: "bosch-standard-central-ducted-cfg-88",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-89",
      slug: "bosch-standard-central-ducted-cfg-89",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-90",
      slug: "bosch-standard-central-ducted-cfg-90",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-91",
      slug: "bosch-standard-central-ducted-cfg-91",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-92",
      slug: "bosch-standard-central-ducted-cfg-92",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-93",
      slug: "bosch-standard-central-ducted-cfg-93",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-94",
      slug: "bosch-standard-central-ducted-cfg-94",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-95",
      slug: "bosch-standard-central-ducted-cfg-95",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-96",
      slug: "bosch-standard-central-ducted-cfg-96",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-97",
      slug: "bosch-standard-central-ducted-cfg-97",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-98",
      slug: "bosch-standard-central-ducted-cfg-98",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-99",
      slug: "bosch-standard-central-ducted-cfg-99",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-100",
      slug: "bosch-standard-central-ducted-cfg-100",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-101",
      slug: "bosch-standard-central-ducted-cfg-101",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-102",
      slug: "bosch-standard-central-ducted-cfg-102",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-103",
      slug: "bosch-standard-central-ducted-cfg-103",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-104",
      slug: "bosch-standard-central-ducted-cfg-104",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-105",
      slug: "bosch-standard-central-ducted-cfg-105",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-106",
      slug: "bosch-standard-central-ducted-cfg-106",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-107",
      slug: "bosch-standard-central-ducted-cfg-107",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-108",
      slug: "bosch-standard-central-ducted-cfg-108",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-109",
      slug: "bosch-standard-central-ducted-cfg-109",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-110",
      slug: "bosch-standard-central-ducted-cfg-110",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-111",
      slug: "bosch-standard-central-ducted-cfg-111",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-112",
      slug: "bosch-standard-central-ducted-cfg-112",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-113",
      slug: "bosch-standard-central-ducted-cfg-113",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
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
      id: "bosch-standard-central-ducted-cfg-114",
      slug: "bosch-standard-central-ducted-cfg-114",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-115",
      slug: "bosch-standard-central-ducted-cfg-115",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-116",
      slug: "bosch-standard-central-ducted-cfg-116",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-117",
      slug: "bosch-standard-central-ducted-cfg-117",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
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
      id: "bosch-standard-central-ducted-cfg-118",
      slug: "bosch-standard-central-ducted-cfg-118",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-119",
      slug: "bosch-standard-central-ducted-cfg-119",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-120",
      slug: "bosch-standard-central-ducted-cfg-120",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-121",
      slug: "bosch-standard-central-ducted-cfg-121",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-122",
      slug: "bosch-standard-central-ducted-cfg-122",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-123",
      slug: "bosch-standard-central-ducted-cfg-123",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-124",
      slug: "bosch-standard-central-ducted-cfg-124",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-125",
      slug: "bosch-standard-central-ducted-cfg-125",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-126",
      slug: "bosch-standard-central-ducted-cfg-126",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-127",
      slug: "bosch-standard-central-ducted-cfg-127",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-128",
      slug: "bosch-standard-central-ducted-cfg-128",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-129",
      slug: "bosch-standard-central-ducted-cfg-129",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-130",
      slug: "bosch-standard-central-ducted-cfg-130",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-131",
      slug: "bosch-standard-central-ducted-cfg-131",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-132",
      slug: "bosch-standard-central-ducted-cfg-132",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-133",
      slug: "bosch-standard-central-ducted-cfg-133",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-134",
      slug: "bosch-standard-central-ducted-cfg-134",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-135",
      slug: "bosch-standard-central-ducted-cfg-135",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-136",
      slug: "bosch-standard-central-ducted-cfg-136",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-137",
      slug: "bosch-standard-central-ducted-cfg-137",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-138",
      slug: "bosch-standard-central-ducted-cfg-138",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-139",
      slug: "bosch-standard-central-ducted-cfg-139",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-140",
      slug: "bosch-standard-central-ducted-cfg-140",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-141",
      slug: "bosch-standard-central-ducted-cfg-141",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-cfg-142",
      slug: "bosch-standard-central-ducted-cfg-142",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-143",
      slug: "bosch-standard-central-ducted-cfg-143",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
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
      id: "bosch-standard-central-ducted-cfg-144",
      slug: "bosch-standard-central-ducted-cfg-144",
      modelId: "bosch-standard-central-ducted",
      outdoorUnitId: "bosch-bpha-36rcb-m16s",
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
      id: "bosch-bms-series-wall-single-cfg-1",
      slug: "bosch-bms-series-wall-single-cfg-1",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-0csxrc",
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
      id: "bosch-bms-series-wall-single-cfg-2",
      slug: "bosch-bms-series-wall-single-cfg-2",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-cfg-3",
      slug: "bosch-bms-series-wall-single-cfg-3",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-4",
      slug: "bosch-bms-series-wall-single-cfg-4",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-cfg-5",
      slug: "bosch-bms-series-wall-single-cfg-5",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-6",
      slug: "bosch-bms-series-wall-single-cfg-6",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-cfg-7",
      slug: "bosch-bms-series-wall-single-cfg-7",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-8",
      slug: "bosch-bms-series-wall-single-cfg-8",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-cfg-9",
      slug: "bosch-bms-series-wall-single-cfg-9",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-10",
      slug: "bosch-bms-series-wall-single-cfg-10",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-cfg-11",
      slug: "bosch-bms-series-wall-single-cfg-11",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-12",
      slug: "bosch-bms-series-wall-single-cfg-12",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.6,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-cfg-13",
      slug: "bosch-bms-series-wall-single-cfg-13",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-14",
      slug: "bosch-bms-series-wall-single-cfg-14",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-cfg-15",
      slug: "bosch-bms-series-wall-single-cfg-15",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-16",
      slug: "bosch-bms-series-wall-single-cfg-16",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-17",
      slug: "bosch-bms-series-wall-single-cfg-17",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-18",
      slug: "bosch-bms-series-wall-single-cfg-18",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-19",
      slug: "bosch-bms-series-wall-single-cfg-19",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-20",
      slug: "bosch-bms-series-wall-single-cfg-20",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-21",
      slug: "bosch-bms-series-wall-single-cfg-21",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-22",
      slug: "bosch-bms-series-wall-single-cfg-22",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-23",
      slug: "bosch-bms-series-wall-single-cfg-23",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-24",
      slug: "bosch-bms-series-wall-single-cfg-24",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-25",
      slug: "bosch-bms-series-wall-single-cfg-25",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-26",
      slug: "bosch-bms-series-wall-single-cfg-26",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-27",
      slug: "bosch-bms-series-wall-single-cfg-27",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-28",
      slug: "bosch-bms-series-wall-single-cfg-28",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-29",
      slug: "bosch-bms-series-wall-single-cfg-29",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-30",
      slug: "bosch-bms-series-wall-single-cfg-30",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-31",
      slug: "bosch-bms-series-wall-single-cfg-31",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-32",
      slug: "bosch-bms-series-wall-single-cfg-32",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-33",
      slug: "bosch-bms-series-wall-single-cfg-33",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas030-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-34",
      slug: "bosch-bms-series-wall-single-cfg-34",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas036-1csxld",
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
      id: "bosch-bms-series-wall-single-cfg-35",
      slug: "bosch-bms-series-wall-single-cfg-35",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas036-1csxld",
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
      id: "bosch-bms-series-wall-single-cfg-36",
      slug: "bosch-bms-series-wall-single-cfg-36",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas048-1csxld",
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
      id: "bosch-bms-series-wall-single-cfg-37",
      slug: "bosch-bms-series-wall-single-cfg-37",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas048-1csxld",
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
      id: "bosch-bms-series-wall-single-cfg-38",
      slug: "bosch-bms-series-wall-single-cfg-38",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-39",
      slug: "bosch-bms-series-wall-single-cfg-39",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-40",
      slug: "bosch-bms-series-wall-single-cfg-40",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-41",
      slug: "bosch-bms-series-wall-single-cfg-41",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-42",
      slug: "bosch-bms-series-wall-single-cfg-42",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-43",
      slug: "bosch-bms-series-wall-single-cfg-43",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-44",
      slug: "bosch-bms-series-wall-single-cfg-44",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-45",
      slug: "bosch-bms-series-wall-single-cfg-45",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-46",
      slug: "bosch-bms-series-wall-single-cfg-46",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-47",
      slug: "bosch-bms-series-wall-single-cfg-47",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-48",
      slug: "bosch-bms-series-wall-single-cfg-48",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-49",
      slug: "bosch-bms-series-wall-single-cfg-49",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxhd",
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
      id: "bosch-bms-series-wall-single-cfg-50",
      slug: "bosch-bms-series-wall-single-cfg-50",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-51",
      slug: "bosch-bms-series-wall-single-cfg-51",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-52",
      slug: "bosch-bms-series-wall-single-cfg-52",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-53",
      slug: "bosch-bms-series-wall-single-cfg-53",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-54",
      slug: "bosch-bms-series-wall-single-cfg-54",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-55",
      slug: "bosch-bms-series-wall-single-cfg-55",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-56",
      slug: "bosch-bms-series-wall-single-cfg-56",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-57",
      slug: "bosch-bms-series-wall-single-cfg-57",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-58",
      slug: "bosch-bms-series-wall-single-cfg-58",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-59",
      slug: "bosch-bms-series-wall-single-cfg-59",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-60",
      slug: "bosch-bms-series-wall-single-cfg-60",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-61",
      slug: "bosch-bms-series-wall-single-cfg-61",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-62",
      slug: "bosch-bms-series-wall-single-cfg-62",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-0csxrd",
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
      id: "bosch-bms-series-wall-single-cfg-63",
      slug: "bosch-bms-series-wall-single-cfg-63",
      modelId: "bosch-bms-series-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
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
      id: "bosch-bms500-wall-single-cfg-1",
      slug: "bosch-bms500-wall-single-cfg-1",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-2",
      slug: "bosch-bms500-wall-single-cfg-2",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-3",
      slug: "bosch-bms500-wall-single-cfg-3",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-4",
      slug: "bosch-bms500-wall-single-cfg-4",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-5",
      slug: "bosch-bms500-wall-single-cfg-5",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-6",
      slug: "bosch-bms500-wall-single-cfg-6",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-7",
      slug: "bosch-bms500-wall-single-cfg-7",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-8",
      slug: "bosch-bms500-wall-single-cfg-8",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-9",
      slug: "bosch-bms500-wall-single-cfg-9",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-10",
      slug: "bosch-bms500-wall-single-cfg-10",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas030-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-cfg-11",
      slug: "bosch-bms500-wall-single-cfg-11",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-12",
      slug: "bosch-bms500-wall-single-cfg-12",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-13",
      slug: "bosch-bms500-wall-single-cfg-13",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-14",
      slug: "bosch-bms500-wall-single-cfg-14",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-15",
      slug: "bosch-bms500-wall-single-cfg-15",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-16",
      slug: "bosch-bms500-wall-single-cfg-16",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-17",
      slug: "bosch-bms500-wall-single-cfg-17",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-18",
      slug: "bosch-bms500-wall-single-cfg-18",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-19",
      slug: "bosch-bms500-wall-single-cfg-19",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-20",
      slug: "bosch-bms500-wall-single-cfg-20",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-21",
      slug: "bosch-bms500-wall-single-cfg-21",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-22",
      slug: "bosch-bms500-wall-single-cfg-22",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-23",
      slug: "bosch-bms500-wall-single-cfg-23",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-24",
      slug: "bosch-bms500-wall-single-cfg-24",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-25",
      slug: "bosch-bms500-wall-single-cfg-25",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-26",
      slug: "bosch-bms500-wall-single-cfg-26",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-27",
      slug: "bosch-bms500-wall-single-cfg-27",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-28",
      slug: "bosch-bms500-wall-single-cfg-28",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-29",
      slug: "bosch-bms500-wall-single-cfg-29",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-30",
      slug: "bosch-bms500-wall-single-cfg-30",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-31",
      slug: "bosch-bms500-wall-single-cfg-31",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-32",
      slug: "bosch-bms500-wall-single-cfg-32",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-33",
      slug: "bosch-bms500-wall-single-cfg-33",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-34",
      slug: "bosch-bms500-wall-single-cfg-34",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-35",
      slug: "bosch-bms500-wall-single-cfg-35",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-36",
      slug: "bosch-bms500-wall-single-cfg-36",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-37",
      slug: "bosch-bms500-wall-single-cfg-37",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam018-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-38",
      slug: "bosch-bms500-wall-single-cfg-38",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-39",
      slug: "bosch-bms500-wall-single-cfg-39",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-40",
      slug: "bosch-bms500-wall-single-cfg-40",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam027-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-41",
      slug: "bosch-bms500-wall-single-cfg-41",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-42",
      slug: "bosch-bms500-wall-single-cfg-42",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam036-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-43",
      slug: "bosch-bms500-wall-single-cfg-43",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-44",
      slug: "bosch-bms500-wall-single-cfg-44",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-45",
      slug: "bosch-bms500-wall-single-cfg-45",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aam048-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-46",
      slug: "bosch-bms500-wall-single-cfg-46",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-47",
      slug: "bosch-bms500-wall-single-cfg-47",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-48",
      slug: "bosch-bms500-wall-single-cfg-48",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-49",
      slug: "bosch-bms500-wall-single-cfg-49",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-50",
      slug: "bosch-bms500-wall-single-cfg-50",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas024-1csxhc",
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
      id: "bosch-bms500-wall-single-cfg-51",
      slug: "bosch-bms500-wall-single-cfg-51",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-52",
      slug: "bosch-bms500-wall-single-cfg-52",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas012-1csxrc",
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
      id: "bosch-bms500-wall-single-cfg-53",
      slug: "bosch-bms500-wall-single-cfg-53",
      modelId: "bosch-bms500-wall-single",
      outdoorUnitId: "bosch-bms500-aas018-1csxrc",
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
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-1",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-1",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-2",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-2",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-3",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-3",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-4",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-4",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-5",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-5",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
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
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-6",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-6",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
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
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-7",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-7",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-8",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-8",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-9",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-9",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-10",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-10",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-11",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-11",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-12",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-12",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-13",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-13",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
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
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-14",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-14",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
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
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-15",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-15",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-16",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-16",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-17",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-17",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-18",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-18",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-19",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-19",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-20",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-20",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-21",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-21",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-22",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-22",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-23",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-23",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-24",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-24",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-25",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-25",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-26",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-26",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-27",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-27",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-28",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-28",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
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
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-29",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-29",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-30",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-30",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-31",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-31",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-32",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-32",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-33",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-33",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-34",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-34",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-35",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-35",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-36",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-36",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-37",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-37",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-1",
      slug: "bosch-ids-ultra-central-ducted-cfg-1",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48500,
      coolingCapacityMaxBtu: 48500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-2",
      slug: "bosch-ids-ultra-central-ducted-cfg-2",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-3",
      slug: "bosch-ids-ultra-central-ducted-cfg-3",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-4",
      slug: "bosch-ids-ultra-central-ducted-cfg-4",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-5",
      slug: "bosch-ids-ultra-central-ducted-cfg-5",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-6",
      slug: "bosch-ids-ultra-central-ducted-cfg-6",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-7",
      slug: "bosch-ids-ultra-central-ducted-cfg-7",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-8",
      slug: "bosch-ids-ultra-central-ducted-cfg-8",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-9",
      slug: "bosch-ids-ultra-central-ducted-cfg-9",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-10",
      slug: "bosch-ids-ultra-central-ducted-cfg-10",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-11",
      slug: "bosch-ids-ultra-central-ducted-cfg-11",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-12",
      slug: "bosch-ids-ultra-central-ducted-cfg-12",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-13",
      slug: "bosch-ids-ultra-central-ducted-cfg-13",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-14",
      slug: "bosch-ids-ultra-central-ducted-cfg-14",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-15",
      slug: "bosch-ids-ultra-central-ducted-cfg-15",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-1",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-1",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-2",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-2",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-3",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-3",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-4",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-4",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-5",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-5",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-6",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-6",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-7",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-7",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-8",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-8",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-9",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-9",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-10",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-10",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-11",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-11",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-12",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-12",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-13",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-13",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-14",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-14",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-15",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-15",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-16",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-16",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-17",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-17",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-18",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-18",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-19",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-19",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-20",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-20",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-21",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-21",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-22",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-22",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-23",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-23",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-24",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-24",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-25",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-25",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-26",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-26",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-27",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-27",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-28",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-28",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-29",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-29",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-30",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-30",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-31",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-31",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-32",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-32",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-33",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-33",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-34",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-34",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-35",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-35",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-36",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-36",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-37",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-37",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-38",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-38",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-39",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-39",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-40",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-40",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-41",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-41",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-42",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-42",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-43",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-43",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-44",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-44",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-45",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-45",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-46",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-46",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-47",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-47",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-48",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-48",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-cfg-1",
      slug: "bosch-idp-premium-lgwp-central-ducted-cfg-1",
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bpba-36rcb-m18s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-cfg-2",
      slug: "bosch-idp-premium-lgwp-central-ducted-cfg-2",
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch-bpba-60rcb-m18s",
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
      id: "bosch-idp-plus-lgwp-central-ducted-cfg-1",
      slug: "bosch-idp-plus-lgwp-central-ducted-cfg-1",
      modelId: "bosch-idp-plus-lgwp-central-ducted",
      outdoorUnitId: "bosch-bpha-60rcb-m16s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "bosch-standard-wall-single-cfg-1",
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
      configurationId: "bosch-standard-wall-single-cfg-2",
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
      configurationId: "bosch-standard-wall-single-cfg-3",
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
      configurationId: "bosch-standard-wall-single-cfg-4",
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
      configurationId: "bosch-standard-wall-single-cfg-5",
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
      configurationId: "bosch-standard-wall-single-cfg-6",
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
      configurationId: "bosch-standard-wall-single-cfg-7",
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
      configurationId: "bosch-standard-wall-single-cfg-8",
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
      configurationId: "bosch-standard-wall-single-cfg-9",
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
      configurationId: "bosch-standard-wall-single-cfg-10",
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
      configurationId: "bosch-standard-wall-single-cfg-11",
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
      configurationId: "bosch-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-13",
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
      configurationId: "bosch-standard-wall-single-cfg-14",
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
      configurationId: "bosch-standard-wall-single-cfg-15",
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
      configurationId: "bosch-standard-wall-single-cfg-16",
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
      configurationId: "bosch-standard-wall-single-cfg-17",
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
      configurationId: "bosch-standard-wall-single-cfg-18",
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
      configurationId: "bosch-standard-wall-single-cfg-19",
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
      configurationId: "bosch-standard-wall-single-cfg-20",
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
      configurationId: "bosch-standard-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-22",
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
      configurationId: "bosch-standard-wall-single-cfg-23",
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
      configurationId: "bosch-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-25",
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
      configurationId: "bosch-standard-wall-single-cfg-26",
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
      configurationId: "bosch-standard-wall-single-cfg-27",
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
      configurationId: "bosch-standard-wall-single-cfg-28",
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
      configurationId: "bosch-standard-wall-single-cfg-29",
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
      configurationId: "bosch-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-31",
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
      configurationId: "bosch-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-33",
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
      configurationId: "bosch-standard-wall-single-cfg-34",
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
      configurationId: "bosch-standard-wall-single-cfg-35",
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
      configurationId: "bosch-standard-wall-single-cfg-36",
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
      configurationId: "bosch-standard-wall-single-cfg-37",
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
      configurationId: "bosch-standard-wall-single-cfg-38",
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
      configurationId: "bosch-standard-wall-single-cfg-39",
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
      configurationId: "bosch-standard-wall-single-cfg-40",
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
      configurationId: "bosch-standard-wall-single-cfg-41",
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
      configurationId: "bosch-standard-wall-single-cfg-42",
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
      configurationId: "bosch-standard-wall-single-cfg-43",
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
      configurationId: "bosch-standard-wall-single-cfg-44",
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
      configurationId: "bosch-standard-wall-single-cfg-45",
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
      configurationId: "bosch-standard-wall-single-cfg-46",
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
      configurationId: "bosch-standard-wall-single-cfg-47",
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
      configurationId: "bosch-standard-wall-single-cfg-48",
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
      configurationId: "bosch-standard-wall-single-cfg-49",
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
      configurationId: "bosch-standard-wall-single-cfg-50",
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
      configurationId: "bosch-standard-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-52",
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
      configurationId: "bosch-standard-wall-single-cfg-53",
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
      configurationId: "bosch-standard-wall-single-cfg-54",
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
      configurationId: "bosch-standard-wall-single-cfg-55",
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
      configurationId: "bosch-standard-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-57",
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
      configurationId: "bosch-standard-wall-single-cfg-58",
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
      configurationId: "bosch-standard-wall-single-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-61",
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
      configurationId: "bosch-standard-wall-single-cfg-62",
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
      configurationId: "bosch-standard-wall-single-cfg-63",
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
      configurationId: "bosch-standard-wall-single-cfg-64",
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
      configurationId: "bosch-standard-wall-single-cfg-65",
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
      configurationId: "bosch-standard-wall-single-cfg-66",
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
      configurationId: "bosch-standard-wall-single-cfg-67",
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
      configurationId: "bosch-standard-wall-single-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-69",
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
      configurationId: "bosch-standard-wall-single-cfg-70",
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
      configurationId: "bosch-standard-wall-single-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-73",
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
      configurationId: "bosch-standard-wall-single-cfg-74",
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
      configurationId: "bosch-standard-wall-single-cfg-75",
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
      configurationId: "bosch-standard-wall-single-cfg-76",
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
      configurationId: "bosch-standard-wall-single-cfg-77",
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
      configurationId: "bosch-standard-wall-single-cfg-78",
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
      configurationId: "bosch-standard-wall-single-cfg-79",
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
      configurationId: "bosch-standard-wall-single-cfg-80",
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
      configurationId: "bosch-standard-wall-single-cfg-81",
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
      configurationId: "bosch-standard-wall-single-cfg-82",
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
      configurationId: "bosch-standard-wall-single-cfg-83",
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
      configurationId: "bosch-standard-wall-single-cfg-84",
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
      configurationId: "bosch-standard-wall-single-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-86",
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
      configurationId: "bosch-standard-wall-single-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-88",
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
      configurationId: "bosch-standard-wall-single-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-90",
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
      configurationId: "bosch-standard-wall-single-cfg-91",
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
      configurationId: "bosch-standard-wall-single-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-93",
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
      configurationId: "bosch-standard-wall-single-cfg-94",
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
      configurationId: "bosch-standard-wall-single-cfg-95",
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
      configurationId: "bosch-standard-wall-single-cfg-96",
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
      configurationId: "bosch-standard-wall-single-cfg-97",
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
      configurationId: "bosch-standard-wall-single-cfg-98",
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
      configurationId: "bosch-standard-wall-single-cfg-99",
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
      configurationId: "bosch-standard-wall-single-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-101",
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
      configurationId: "bosch-standard-wall-single-cfg-102",
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
      configurationId: "bosch-standard-wall-single-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-104",
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
      configurationId: "bosch-standard-wall-single-cfg-105",
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
      configurationId: "bosch-standard-wall-single-cfg-106",
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
      configurationId: "bosch-standard-wall-single-cfg-107",
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
      configurationId: "bosch-standard-wall-single-cfg-108",
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
      configurationId: "bosch-standard-wall-single-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-110",
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
      configurationId: "bosch-standard-wall-single-cfg-111",
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
      configurationId: "bosch-standard-wall-single-cfg-112",
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
      configurationId: "bosch-standard-wall-single-cfg-113",
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
      configurationId: "bosch-standard-wall-single-cfg-114",
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
      configurationId: "bosch-standard-wall-single-cfg-115",
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
      configurationId: "bosch-standard-wall-single-cfg-116",
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
      configurationId: "bosch-standard-wall-single-cfg-117",
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
      configurationId: "bosch-standard-wall-single-cfg-118",
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
      configurationId: "bosch-standard-wall-single-cfg-119",
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
      configurationId: "bosch-standard-wall-single-cfg-120",
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
      configurationId: "bosch-standard-wall-single-cfg-121",
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
      configurationId: "bosch-standard-wall-single-cfg-122",
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
      configurationId: "bosch-standard-wall-single-cfg-123",
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
      configurationId: "bosch-standard-wall-single-cfg-124",
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
      configurationId: "bosch-standard-wall-single-cfg-125",
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
      configurationId: "bosch-standard-wall-single-cfg-126",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-127",
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
      configurationId: "bosch-standard-wall-single-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-130",
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
      configurationId: "bosch-standard-wall-single-cfg-131",
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
      configurationId: "bosch-standard-wall-single-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-133",
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
      configurationId: "bosch-standard-wall-single-cfg-134",
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
      configurationId: "bosch-standard-wall-single-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-cfg-136",
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
      configurationId: "bosch-standard-wall-single-cfg-137",
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
      configurationId: "bosch-standard-wall-single-cfg-138",
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
      configurationId: "bosch-standard-wall-single-cfg-139",
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
      configurationId: "bosch-standard-wall-single-cfg-140",
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
      configurationId: "bosch-standard-wall-single-cfg-141",
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
      configurationId: "bosch-standard-wall-single-cfg-142",
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
      configurationId: "bosch-standard-wall-single-cfg-143",
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
      configurationId: "bosch-standard-wall-single-cfg-144",
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
      configurationId: "bosch-standard-wall-single-cfg-145",
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
      configurationId: "bosch-standard-wall-single-cfg-146",
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
      configurationId: "bosch-standard-wall-single-cfg-147",
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
      configurationId: "bosch-standard-wall-single-cfg-148",
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
      configurationId: "bosch-standard-wall-single-cfg-149",
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
      configurationId: "bosch-standard-wall-single-cfg-150",
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
      configurationId: "bosch-standard-wall-single-cfg-151",
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
      configurationId: "bosch-standard-wall-single-cfg-152",
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
      configurationId: "bosch-standard-wall-single-cfg-153",
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
      configurationId: "bosch-standard-central-ducted-cfg-1",
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
      configurationId: "bosch-standard-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-3",
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
      configurationId: "bosch-standard-central-ducted-cfg-4",
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
      configurationId: "bosch-standard-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-6",
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
      configurationId: "bosch-standard-central-ducted-cfg-7",
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
      configurationId: "bosch-standard-central-ducted-cfg-8",
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
      configurationId: "bosch-standard-central-ducted-cfg-9",
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
      configurationId: "bosch-standard-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-12",
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
      configurationId: "bosch-standard-central-ducted-cfg-13",
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
      configurationId: "bosch-standard-central-ducted-cfg-14",
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
      configurationId: "bosch-standard-central-ducted-cfg-15",
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
      configurationId: "bosch-standard-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-19",
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
      configurationId: "bosch-standard-central-ducted-cfg-20",
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
      configurationId: "bosch-standard-central-ducted-cfg-21",
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
      configurationId: "bosch-standard-central-ducted-cfg-22",
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
      configurationId: "bosch-standard-central-ducted-cfg-23",
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
      configurationId: "bosch-standard-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-25",
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
      configurationId: "bosch-standard-central-ducted-cfg-26",
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
      configurationId: "bosch-standard-central-ducted-cfg-27",
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
      configurationId: "bosch-standard-central-ducted-cfg-28",
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
      configurationId: "bosch-standard-central-ducted-cfg-29",
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
      configurationId: "bosch-standard-central-ducted-cfg-30",
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
      configurationId: "bosch-standard-central-ducted-cfg-31",
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
      configurationId: "bosch-standard-central-ducted-cfg-32",
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
      configurationId: "bosch-standard-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-34",
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
      configurationId: "bosch-standard-central-ducted-cfg-35",
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
      configurationId: "bosch-standard-central-ducted-cfg-36",
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
      configurationId: "bosch-standard-central-ducted-cfg-37",
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
      configurationId: "bosch-standard-central-ducted-cfg-38",
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
      configurationId: "bosch-standard-central-ducted-cfg-39",
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
      configurationId: "bosch-standard-central-ducted-cfg-40",
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
      configurationId: "bosch-standard-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-45",
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
      configurationId: "bosch-standard-central-ducted-cfg-46",
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
      configurationId: "bosch-standard-central-ducted-cfg-47",
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
      configurationId: "bosch-standard-central-ducted-cfg-48",
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
      configurationId: "bosch-standard-central-ducted-cfg-49",
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
      configurationId: "bosch-standard-central-ducted-cfg-50",
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
      configurationId: "bosch-standard-central-ducted-cfg-51",
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
      configurationId: "bosch-standard-central-ducted-cfg-52",
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
      configurationId: "bosch-standard-central-ducted-cfg-53",
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
      configurationId: "bosch-standard-central-ducted-cfg-54",
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
      configurationId: "bosch-standard-central-ducted-cfg-55",
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
      configurationId: "bosch-standard-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-58",
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
      configurationId: "bosch-standard-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-62",
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
      configurationId: "bosch-standard-central-ducted-cfg-63",
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
      configurationId: "bosch-standard-central-ducted-cfg-64",
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
      configurationId: "bosch-standard-central-ducted-cfg-65",
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
      configurationId: "bosch-standard-central-ducted-cfg-66",
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
      configurationId: "bosch-standard-central-ducted-cfg-67",
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
      configurationId: "bosch-standard-central-ducted-cfg-68",
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
      configurationId: "bosch-standard-central-ducted-cfg-69",
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
      configurationId: "bosch-standard-central-ducted-cfg-70",
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
      configurationId: "bosch-standard-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-72",
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
      configurationId: "bosch-standard-central-ducted-cfg-73",
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
      configurationId: "bosch-standard-central-ducted-cfg-74",
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
      configurationId: "bosch-standard-central-ducted-cfg-75",
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
      configurationId: "bosch-standard-central-ducted-cfg-76",
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
      configurationId: "bosch-standard-central-ducted-cfg-77",
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
      configurationId: "bosch-standard-central-ducted-cfg-78",
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
      configurationId: "bosch-standard-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-81",
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
      configurationId: "bosch-standard-central-ducted-cfg-82",
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
      configurationId: "bosch-standard-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-84",
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
      configurationId: "bosch-standard-central-ducted-cfg-85",
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
      configurationId: "bosch-standard-central-ducted-cfg-86",
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
      configurationId: "bosch-standard-central-ducted-cfg-87",
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
      configurationId: "bosch-standard-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-90",
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
      configurationId: "bosch-standard-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-94",
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
      configurationId: "bosch-standard-central-ducted-cfg-95",
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
      configurationId: "bosch-standard-central-ducted-cfg-96",
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
      configurationId: "bosch-standard-central-ducted-cfg-97",
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
      configurationId: "bosch-standard-central-ducted-cfg-98",
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
      configurationId: "bosch-standard-central-ducted-cfg-99",
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
      configurationId: "bosch-standard-central-ducted-cfg-100",
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
      configurationId: "bosch-standard-central-ducted-cfg-101",
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
      configurationId: "bosch-standard-central-ducted-cfg-102",
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
      configurationId: "bosch-standard-central-ducted-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-104",
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
      configurationId: "bosch-standard-central-ducted-cfg-105",
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
      configurationId: "bosch-standard-central-ducted-cfg-106",
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
      configurationId: "bosch-standard-central-ducted-cfg-107",
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
      configurationId: "bosch-standard-central-ducted-cfg-108",
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
      configurationId: "bosch-standard-central-ducted-cfg-109",
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
      configurationId: "bosch-standard-central-ducted-cfg-110",
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
      configurationId: "bosch-standard-central-ducted-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-113",
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
      configurationId: "bosch-standard-central-ducted-cfg-114",
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
      configurationId: "bosch-standard-central-ducted-cfg-115",
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
      configurationId: "bosch-standard-central-ducted-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-118",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-122",
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
      configurationId: "bosch-standard-central-ducted-cfg-123",
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
      configurationId: "bosch-standard-central-ducted-cfg-124",
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
      configurationId: "bosch-standard-central-ducted-cfg-125",
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
      configurationId: "bosch-standard-central-ducted-cfg-126",
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
      configurationId: "bosch-standard-central-ducted-cfg-127",
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
      configurationId: "bosch-standard-central-ducted-cfg-128",
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
      configurationId: "bosch-standard-central-ducted-cfg-129",
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
      configurationId: "bosch-standard-central-ducted-cfg-130",
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
      configurationId: "bosch-standard-central-ducted-cfg-131",
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
      configurationId: "bosch-standard-central-ducted-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-cfg-134",
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
      configurationId: "bosch-standard-central-ducted-cfg-135",
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
      configurationId: "bosch-standard-central-ducted-cfg-136",
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
      configurationId: "bosch-standard-central-ducted-cfg-137",
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
      configurationId: "bosch-standard-central-ducted-cfg-138",
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
      configurationId: "bosch-standard-central-ducted-cfg-139",
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
      configurationId: "bosch-standard-central-ducted-cfg-140",
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
      configurationId: "bosch-standard-central-ducted-cfg-141",
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
      configurationId: "bosch-standard-central-ducted-cfg-142",
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
      configurationId: "bosch-standard-central-ducted-cfg-143",
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
      configurationId: "bosch-standard-central-ducted-cfg-144",
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
      configurationId: "bosch-bms-series-wall-single-cfg-1",
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
      configurationId: "bosch-bms-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-cfg-3",
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
      configurationId: "bosch-bms-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-cfg-5",
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
      configurationId: "bosch-bms-series-wall-single-cfg-6",
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
      configurationId: "bosch-bms-series-wall-single-cfg-7",
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
      configurationId: "bosch-bms-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-cfg-9",
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
      configurationId: "bosch-bms-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-cfg-13",
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
      configurationId: "bosch-bms-series-wall-single-cfg-14",
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
      configurationId: "bosch-bms-series-wall-single-cfg-15",
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
      configurationId: "bosch-bms-series-wall-single-cfg-16",
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
      configurationId: "bosch-bms-series-wall-single-cfg-17",
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
      configurationId: "bosch-bms-series-wall-single-cfg-18",
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
      configurationId: "bosch-bms-series-wall-single-cfg-19",
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
      configurationId: "bosch-bms-series-wall-single-cfg-20",
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
      configurationId: "bosch-bms-series-wall-single-cfg-21",
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
      configurationId: "bosch-bms-series-wall-single-cfg-22",
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
      configurationId: "bosch-bms-series-wall-single-cfg-23",
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
      configurationId: "bosch-bms-series-wall-single-cfg-24",
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
      configurationId: "bosch-bms-series-wall-single-cfg-25",
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
      configurationId: "bosch-bms-series-wall-single-cfg-26",
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
      configurationId: "bosch-bms-series-wall-single-cfg-27",
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
      configurationId: "bosch-bms-series-wall-single-cfg-28",
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
      configurationId: "bosch-bms-series-wall-single-cfg-29",
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
      configurationId: "bosch-bms-series-wall-single-cfg-30",
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
      configurationId: "bosch-bms-series-wall-single-cfg-31",
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
      configurationId: "bosch-bms-series-wall-single-cfg-32",
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
      configurationId: "bosch-bms-series-wall-single-cfg-33",
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
      configurationId: "bosch-bms-series-wall-single-cfg-34",
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
      configurationId: "bosch-bms-series-wall-single-cfg-35",
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
      configurationId: "bosch-bms-series-wall-single-cfg-36",
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
      configurationId: "bosch-bms-series-wall-single-cfg-37",
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
      configurationId: "bosch-bms-series-wall-single-cfg-38",
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
      configurationId: "bosch-bms-series-wall-single-cfg-39",
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
      configurationId: "bosch-bms-series-wall-single-cfg-40",
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
      configurationId: "bosch-bms-series-wall-single-cfg-41",
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
      configurationId: "bosch-bms-series-wall-single-cfg-42",
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
      configurationId: "bosch-bms-series-wall-single-cfg-43",
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
      configurationId: "bosch-bms-series-wall-single-cfg-44",
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
      configurationId: "bosch-bms-series-wall-single-cfg-45",
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
      configurationId: "bosch-bms-series-wall-single-cfg-46",
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
      configurationId: "bosch-bms-series-wall-single-cfg-47",
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
      configurationId: "bosch-bms-series-wall-single-cfg-48",
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
      configurationId: "bosch-bms-series-wall-single-cfg-49",
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
      configurationId: "bosch-bms-series-wall-single-cfg-50",
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
      configurationId: "bosch-bms-series-wall-single-cfg-51",
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
      configurationId: "bosch-bms-series-wall-single-cfg-52",
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
      configurationId: "bosch-bms-series-wall-single-cfg-53",
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
      configurationId: "bosch-bms-series-wall-single-cfg-54",
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
      configurationId: "bosch-bms-series-wall-single-cfg-55",
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
      configurationId: "bosch-bms-series-wall-single-cfg-56",
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
      configurationId: "bosch-bms-series-wall-single-cfg-57",
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
      configurationId: "bosch-bms-series-wall-single-cfg-58",
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
      configurationId: "bosch-bms-series-wall-single-cfg-59",
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
      configurationId: "bosch-bms-series-wall-single-cfg-60",
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
      configurationId: "bosch-bms-series-wall-single-cfg-61",
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
      configurationId: "bosch-bms-series-wall-single-cfg-62",
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
      configurationId: "bosch-bms-series-wall-single-cfg-63",
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
      configurationId: "bosch-bms500-wall-single-cfg-1",
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
      configurationId: "bosch-bms500-wall-single-cfg-2",
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
      configurationId: "bosch-bms500-wall-single-cfg-3",
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
      configurationId: "bosch-bms500-wall-single-cfg-4",
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
      configurationId: "bosch-bms500-wall-single-cfg-5",
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
      configurationId: "bosch-bms500-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-cfg-7",
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
      configurationId: "bosch-bms500-wall-single-cfg-8",
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
      configurationId: "bosch-bms500-wall-single-cfg-9",
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
      configurationId: "bosch-bms500-wall-single-cfg-10",
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
      configurationId: "bosch-bms500-wall-single-cfg-11",
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
      configurationId: "bosch-bms500-wall-single-cfg-12",
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
      configurationId: "bosch-bms500-wall-single-cfg-13",
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
      configurationId: "bosch-bms500-wall-single-cfg-14",
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
      configurationId: "bosch-bms500-wall-single-cfg-15",
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
      configurationId: "bosch-bms500-wall-single-cfg-16",
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
      configurationId: "bosch-bms500-wall-single-cfg-17",
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
      configurationId: "bosch-bms500-wall-single-cfg-18",
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
      configurationId: "bosch-bms500-wall-single-cfg-19",
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
      configurationId: "bosch-bms500-wall-single-cfg-20",
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
      configurationId: "bosch-bms500-wall-single-cfg-21",
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
      configurationId: "bosch-bms500-wall-single-cfg-22",
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
      configurationId: "bosch-bms500-wall-single-cfg-23",
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
      configurationId: "bosch-bms500-wall-single-cfg-24",
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
      configurationId: "bosch-bms500-wall-single-cfg-25",
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
      configurationId: "bosch-bms500-wall-single-cfg-26",
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
      configurationId: "bosch-bms500-wall-single-cfg-27",
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
      configurationId: "bosch-bms500-wall-single-cfg-28",
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
      configurationId: "bosch-bms500-wall-single-cfg-29",
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
      configurationId: "bosch-bms500-wall-single-cfg-30",
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
      configurationId: "bosch-bms500-wall-single-cfg-31",
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
      configurationId: "bosch-bms500-wall-single-cfg-32",
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
      configurationId: "bosch-bms500-wall-single-cfg-33",
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
      configurationId: "bosch-bms500-wall-single-cfg-34",
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
      configurationId: "bosch-bms500-wall-single-cfg-35",
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
      configurationId: "bosch-bms500-wall-single-cfg-36",
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
      configurationId: "bosch-bms500-wall-single-cfg-37",
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
      configurationId: "bosch-bms500-wall-single-cfg-38",
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
      configurationId: "bosch-bms500-wall-single-cfg-39",
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
      configurationId: "bosch-bms500-wall-single-cfg-40",
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
      configurationId: "bosch-bms500-wall-single-cfg-41",
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
      configurationId: "bosch-bms500-wall-single-cfg-42",
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
      configurationId: "bosch-bms500-wall-single-cfg-43",
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
      configurationId: "bosch-bms500-wall-single-cfg-44",
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
      configurationId: "bosch-bms500-wall-single-cfg-45",
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
      configurationId: "bosch-bms500-wall-single-cfg-46",
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
      configurationId: "bosch-bms500-wall-single-cfg-47",
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
      configurationId: "bosch-bms500-wall-single-cfg-48",
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
      configurationId: "bosch-bms500-wall-single-cfg-49",
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
      configurationId: "bosch-bms500-wall-single-cfg-50",
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
      configurationId: "bosch-bms500-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6100,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-1",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-2",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-5",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-6",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-7",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-8",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-14",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-17",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-24",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-25",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-26",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-30",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-33",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-34",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-36",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-37",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 55000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 53000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 53000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-2",
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
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-25",
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
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-26",
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
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-27",
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
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-48",
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
      configurationId: "bosch-idp-premium-lgwp-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-idp-premium-lgwp-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-idp-plus-lgwp-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
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
