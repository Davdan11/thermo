import type { BrandDataset } from "../../types";

export const eliosDataset: BrandDataset = {
  brand: {
    id: "elios",
    slug: "elios",
    name: "ELIOS",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "elios-standard",
      slug: "elios-standard",
      name: "Standard",
      brandId: "elios",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-de-series",
      slug: "elios-de-series",
      name: "DE-series",
      brandId: "elios",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-dea-series",
      slug: "elios-dea-series",
      name: "DEA series",
      brandId: "elios",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-dm-series",
      slug: "elios-dm-series",
      name: "DM Series",
      brandId: "elios",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-dub-series",
      slug: "elios-dub-series",
      name: "DUB series",
      brandId: "elios",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series",
      slug: "elios-esh-series",
      name: "ESH Series",
      brandId: "elios",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-exh-series",
      slug: "elios-exh-series",
      name: "EXH Series",
      brandId: "elios",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-mah-series",
      slug: "elios-mah-series",
      name: "MAH Series",
      brandId: "elios",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-msh-series",
      slug: "elios-msh-series",
      name: "MSH Series",
      brandId: "elios",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "elios-standard-wall-single",
      slug: "elios-standard-wall-single",
      name: "Standard",
      seriesId: "elios-standard",
      brandId: "elios",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
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
      id: "elios-de-series-wall-single",
      slug: "elios-de-series-wall-single",
      name: "DE-series",
      seriesId: "elios-de-series",
      brandId: "elios",
      modelNumber: "DE-series",
      normalizedModelNumber: "de-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 16.5,
      seer2Max: 26.5,
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
      id: "elios-dea-series-central-ducted",
      slug: "elios-dea-series-central-ducted",
      name: "DEA series",
      seriesId: "elios-dea-series",
      brandId: "elios",
      modelNumber: "DEA series",
      normalizedModelNumber: "dea-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-dm-series-wall-single",
      slug: "elios-dm-series-wall-single",
      name: "DM Series",
      seriesId: "elios-dm-series",
      brandId: "elios",
      modelNumber: "DM Series",
      normalizedModelNumber: "dm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      heatingCapacity5FMinBtu: 9300,
      heatingCapacity5FMaxBtu: 9300,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 10.3,
      hspf2Max: 10.3,
      cop5FMin: 2.26,
      cop5FMax: 2.26,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-dub-series-wall-single",
      slug: "elios-dub-series-wall-single",
      name: "DUB series",
      seriesId: "elios-dub-series",
      brandId: "elios",
      modelNumber: "DUB series",
      normalizedModelNumber: "dub-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 9200,
      heatingCapacity5FMaxBtu: 10200,
      seer2Min: 24.2,
      seer2Max: 25,
      hspf2Min: 10.7,
      hspf2Max: 11,
      cop5FMin: 1.99,
      cop5FMax: 2.38,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-central-ducted",
      slug: "elios-esh-series-central-ducted",
      name: "ESH Series",
      seriesId: "elios-esh-series",
      brandId: "elios",
      modelNumber: "ESH Series",
      normalizedModelNumber: "esh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 11800,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 18.6,
      hspf2Min: 8.1,
      hspf2Max: 10.4,
      cop5FMin: 1.8,
      cop5FMax: 2.06,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-wall-single",
      slug: "elios-esh-series-wall-single",
      name: "ESH Series",
      seriesId: "elios-esh-series",
      brandId: "elios",
      modelNumber: "ESH Series",
      normalizedModelNumber: "esh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 17.1,
      seer2Max: 26,
      hspf2Min: 9.8,
      hspf2Max: 13.3,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-exh-series-wall-single",
      slug: "elios-exh-series-wall-single",
      name: "EXH Series",
      seriesId: "elios-exh-series",
      brandId: "elios",
      modelNumber: "EXH Series",
      normalizedModelNumber: "exh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 20,
      seer2Max: 23.1,
      hspf2Min: 9,
      hspf2Max: 10.6,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-mah-series-central-ducted",
      slug: "elios-mah-series-central-ducted",
      name: "MAH Series",
      seriesId: "elios-mah-series",
      brandId: "elios",
      modelNumber: "MAH Series",
      normalizedModelNumber: "mah-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 29200,
      heatingCapacity5FMaxBtu: 29200,
      seer2Min: 17.4,
      seer2Max: 17.4,
      hspf2Min: 10.3,
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
      id: "elios-msh-series-central-ducted",
      slug: "elios-msh-series-central-ducted",
      name: "MSH Series",
      seriesId: "elios-msh-series",
      brandId: "elios",
      modelNumber: "MSH Series",
      normalizedModelNumber: "msh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 29200,
      heatingCapacity5FMaxBtu: 29200,
      seer2Min: 15.8,
      seer2Max: 15.8,
      hspf2Min: 9.4,
      hspf2Max: 9.4,
      cop5FMin: 1.9,
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
      id: "elios-de09hos19115s1",
      modelNumber: "DE09HOS19115S1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de18hos19230s1",
      modelNumber: "DE18HOS19230S1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de48hos18230e5",
      modelNumber: "DE48HOS18230E5",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de60hos18230e5",
      modelNumber: "DE60HOS18230E5",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de36hos18230e5",
      modelNumber: "DE36HOS18230E5",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de09hos23230e2",
      modelNumber: "DE09HOS23230E2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de12hos23230e2",
      modelNumber: "DE12HOS23230E2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de18hos23230e2",
      modelNumber: "DE18HOS23230E2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de24hos23230e2",
      modelNumber: "DE24HOS23230E2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de18hom23230x2",
      modelNumber: "DE18HOM23230X2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de27hom23230x2",
      modelNumber: "DE27HOM23230X2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de48hom23230x2",
      modelNumber: "DE48HOM23230X2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de36hom23230x2",
      modelNumber: "DE36HOM23230X2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de09hos25230e3",
      modelNumber: "DE09HOS25230E3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de12hos25230e3",
      modelNumber: "DE12HOS25230E3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de36hom25230x3",
      modelNumber: "DE36HOM25230X3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de27hom25230x3",
      modelNumber: "DE27HOM25230X3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de09hos42230e4",
      modelNumber: "DE09HOS42230E4",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de12hos42230e4",
      modelNumber: "DE12HOS42230E4",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de48hos25230e3",
      modelNumber: "DE48HOS25230E3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea18hos21230s1",
      modelNumber: "DEA18HOS21230S1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea36hos21230s1",
      modelNumber: "DEA36HOS21230S1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea36hos18230s5",
      modelNumber: "DEA36HOS18230S5",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea48hos18230s5",
      modelNumber: "DEA48HOS18230S5",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea60hos18230s5",
      modelNumber: "DEA60HOS18230S5",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea55hom23230x2",
      modelNumber: "DEA55HOM23230X2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea60hos19230e7",
      modelNumber: "DEA60HOS19230E7",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshba12c1an1",
      modelNumber: "ESHBA12C1AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshba09c2an1",
      modelNumber: "ESHBA09C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshba12c2an1",
      modelNumber: "ESHBA12C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshba18c2an1",
      modelNumber: "ESHBA18C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshba24c2an1",
      modelNumber: "ESHBA24C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshba30c2an1",
      modelNumber: "ESHBA30C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshba36c2an1",
      modelNumber: "ESHBA36C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshua60r2an1",
      modelNumber: "ESHUA60R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-exhsa1832av1",
      modelNumber: "EXHSA1832AV1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de24hos25230e3",
      modelNumber: "DE24HOS25230E3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de18hos25230e3a",
      modelNumber: "DE18HOS25230E3A",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de24hos25230e3a",
      modelNumber: "DE24HOS25230E3A",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-de36hos25230e3",
      modelNumber: "DE36HOS25230E3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea09hos21115s1",
      modelNumber: "DEA09HOS21115S1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea09hos25230e8",
      modelNumber: "DEA09HOS25230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea12hos25230e8",
      modelNumber: "DEA12HOS25230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea18hos25230e8",
      modelNumber: "DEA18HOS25230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea24hos25230e8",
      modelNumber: "DEA24HOS25230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea06hos28230e8",
      modelNumber: "DEA06HOS28230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea12hos28230e8",
      modelNumber: "DEA12HOS28230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea18hos28230e8",
      modelNumber: "DEA18HOS28230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea09hos28230e8",
      modelNumber: "DEA09HOS28230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea24hos28230e8",
      modelNumber: "DEA24HOS28230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea36hos28230e8",
      modelNumber: "DEA36HOS28230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea48hos28230e8",
      modelNumber: "DEA48HOS28230E8",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea18hom25230x3",
      modelNumber: "DEA18HOM25230X3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea27hom25230x3",
      modelNumber: "DEA27HOM25230X3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea36hom25230x3",
      modelNumber: "DEA36HOM25230X3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea48hom25230x3",
      modelNumber: "DEA48HOM25230X3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea18hom23230x2",
      modelNumber: "DEA18HOM23230X2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea27hom23230x2",
      modelNumber: "DEA27HOM23230X2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea36hom23230x2",
      modelNumber: "DEA36HOM23230X2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea48hom23230x2",
      modelNumber: "DEA48HOM23230X2",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea55hom25230x3",
      modelNumber: "DEA55HOM25230X3",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea18hos20230e7",
      modelNumber: "DEA18HOS20230E7",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea24hos20230e7",
      modelNumber: "DEA24HOS20230E7",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea30hos20230e7",
      modelNumber: "DEA30HOS20230E7",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea36hos20230e7",
      modelNumber: "DEA36HOS20230E7",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea48hos20230e7",
      modelNumber: "DEA48HOS20230E7",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-dea60hos20230e7",
      modelNumber: "DEA60HOS20230E7",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma24r2an1",
      modelNumber: "ESHMA24R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma30r2an1",
      modelNumber: "ESHMA30R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma48r2an1",
      modelNumber: "ESHMA48R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma60r2an1",
      modelNumber: "ESHMA60R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshmb36r2an1",
      modelNumber: "ESHMB36R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma18r2an1",
      modelNumber: "ESHMA18R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshea18r2an1",
      modelNumber: "ESHEA18R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshea24r2an1",
      modelNumber: "ESHEA24R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshea36r2an1",
      modelNumber: "ESHEA36R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshea30r2an1",
      modelNumber: "ESHEA30R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma09c2an1",
      modelNumber: "ESHMA09C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma12c2an1",
      modelNumber: "ESHMA12C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma18c2an1",
      modelNumber: "ESHMA18C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma24c2an1",
      modelNumber: "ESHMA24C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshma33c2an1",
      modelNumber: "ESHMA33C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshea09c2an1",
      modelNumber: "ESHEA09C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshea12c2an1",
      modelNumber: "ESHEA12C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshea18c2an1",
      modelNumber: "ESHEA18C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshea24c2an1",
      modelNumber: "ESHEA24C2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshua36r2an1",
      modelNumber: "ESHUA36R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-eshua48r2an1",
      modelNumber: "ESHUA48R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-exhsa2742av1",
      modelNumber: "EXHSA2742AV1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-exhsa3652av1",
      modelNumber: "EXHSA3652AV1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-exhsa4862av1",
      modelNumber: "EXHSA4862AV1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-exhsa1832an1",
      modelNumber: "EXHSA1832AN1",
      brandId: "elios",
      refrigerant: null as any,
    },
    {
      id: "elios-mshmb36r2an1",
      modelNumber: "MSHMB36R2AN1",
      brandId: "elios",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "elios-standard-wall-single-cfg-1",
      slug: "elios-standard-wall-single-cfg-1",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos19115s1",
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
      id: "elios-standard-wall-single-cfg-2",
      slug: "elios-standard-wall-single-cfg-2",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de18hos19230s1",
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
      id: "elios-standard-wall-single-cfg-3",
      slug: "elios-standard-wall-single-cfg-3",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de48hos18230e5",
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
      id: "elios-standard-wall-single-cfg-4",
      slug: "elios-standard-wall-single-cfg-4",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de60hos18230e5",
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
      id: "elios-standard-wall-single-cfg-5",
      slug: "elios-standard-wall-single-cfg-5",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de36hos18230e5",
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
      id: "elios-standard-wall-single-cfg-6",
      slug: "elios-standard-wall-single-cfg-6",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de48hos18230e5",
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
      id: "elios-standard-wall-single-cfg-7",
      slug: "elios-standard-wall-single-cfg-7",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de36hos18230e5",
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
      id: "elios-standard-wall-single-cfg-8",
      slug: "elios-standard-wall-single-cfg-8",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos23230e2",
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
      id: "elios-standard-wall-single-cfg-9",
      slug: "elios-standard-wall-single-cfg-9",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos23230e2",
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
      id: "elios-standard-wall-single-cfg-10",
      slug: "elios-standard-wall-single-cfg-10",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de18hos23230e2",
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
      id: "elios-standard-wall-single-cfg-11",
      slug: "elios-standard-wall-single-cfg-11",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de24hos23230e2",
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
      id: "elios-standard-wall-single-cfg-12",
      slug: "elios-standard-wall-single-cfg-12",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos23230e2",
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
      id: "elios-standard-wall-single-cfg-13",
      slug: "elios-standard-wall-single-cfg-13",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de18hos23230e2",
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
      id: "elios-standard-wall-single-cfg-14",
      slug: "elios-standard-wall-single-cfg-14",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de24hos23230e2",
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
      id: "elios-standard-wall-single-cfg-15",
      slug: "elios-standard-wall-single-cfg-15",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos23230e2",
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
      id: "elios-standard-wall-single-cfg-16",
      slug: "elios-standard-wall-single-cfg-16",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos23230e2",
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
      id: "elios-standard-wall-single-cfg-17",
      slug: "elios-standard-wall-single-cfg-17",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de18hos23230e2",
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
      id: "elios-standard-wall-single-cfg-18",
      slug: "elios-standard-wall-single-cfg-18",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de24hos23230e2",
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
      id: "elios-standard-wall-single-cfg-19",
      slug: "elios-standard-wall-single-cfg-19",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de18hom23230x2",
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
      id: "elios-standard-wall-single-cfg-20",
      slug: "elios-standard-wall-single-cfg-20",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de27hom23230x2",
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
      id: "elios-standard-wall-single-cfg-21",
      slug: "elios-standard-wall-single-cfg-21",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de48hom23230x2",
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
      id: "elios-standard-wall-single-cfg-22",
      slug: "elios-standard-wall-single-cfg-22",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de36hom23230x2",
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
      id: "elios-standard-wall-single-cfg-23",
      slug: "elios-standard-wall-single-cfg-23",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos25230e3",
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
      id: "elios-standard-wall-single-cfg-24",
      slug: "elios-standard-wall-single-cfg-24",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos25230e3",
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
      id: "elios-standard-wall-single-cfg-25",
      slug: "elios-standard-wall-single-cfg-25",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos25230e3",
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
      id: "elios-standard-wall-single-cfg-26",
      slug: "elios-standard-wall-single-cfg-26",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos25230e3",
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
      id: "elios-standard-wall-single-cfg-27",
      slug: "elios-standard-wall-single-cfg-27",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos25230e3",
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
      id: "elios-standard-wall-single-cfg-28",
      slug: "elios-standard-wall-single-cfg-28",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de36hom25230x3",
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
      id: "elios-standard-wall-single-cfg-29",
      slug: "elios-standard-wall-single-cfg-29",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de27hom25230x3",
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
      id: "elios-standard-wall-single-cfg-30",
      slug: "elios-standard-wall-single-cfg-30",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de36hom25230x3",
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
      id: "elios-standard-wall-single-cfg-31",
      slug: "elios-standard-wall-single-cfg-31",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos23230e2",
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
      id: "elios-standard-wall-single-cfg-32",
      slug: "elios-standard-wall-single-cfg-32",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de18hos23230e2",
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
      id: "elios-standard-wall-single-cfg-33",
      slug: "elios-standard-wall-single-cfg-33",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de24hos23230e2",
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
      id: "elios-standard-wall-single-cfg-34",
      slug: "elios-standard-wall-single-cfg-34",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de36hos18230e5",
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
      id: "elios-standard-wall-single-cfg-35",
      slug: "elios-standard-wall-single-cfg-35",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de48hos18230e5",
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
      id: "elios-standard-wall-single-cfg-36",
      slug: "elios-standard-wall-single-cfg-36",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de60hos18230e5",
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
      id: "elios-standard-wall-single-cfg-37",
      slug: "elios-standard-wall-single-cfg-37",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos25230e3",
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
      id: "elios-standard-wall-single-cfg-38",
      slug: "elios-standard-wall-single-cfg-38",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos25230e3",
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
      id: "elios-standard-wall-single-cfg-39",
      slug: "elios-standard-wall-single-cfg-39",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos23230e2",
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
      id: "elios-standard-wall-single-cfg-40",
      slug: "elios-standard-wall-single-cfg-40",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos23230e2",
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
      id: "elios-standard-wall-single-cfg-41",
      slug: "elios-standard-wall-single-cfg-41",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de18hos23230e2",
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
      id: "elios-standard-wall-single-cfg-42",
      slug: "elios-standard-wall-single-cfg-42",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de24hos23230e2",
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
      id: "elios-standard-wall-single-cfg-43",
      slug: "elios-standard-wall-single-cfg-43",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de36hos18230e5",
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
      id: "elios-standard-wall-single-cfg-44",
      slug: "elios-standard-wall-single-cfg-44",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de48hos18230e5",
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
      id: "elios-standard-wall-single-cfg-45",
      slug: "elios-standard-wall-single-cfg-45",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos25230e3",
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
      id: "elios-standard-wall-single-cfg-46",
      slug: "elios-standard-wall-single-cfg-46",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos23230e2",
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
      id: "elios-standard-wall-single-cfg-47",
      slug: "elios-standard-wall-single-cfg-47",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de09hos42230e4",
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
      id: "elios-standard-wall-single-cfg-48",
      slug: "elios-standard-wall-single-cfg-48",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de12hos42230e4",
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
      id: "elios-standard-wall-single-cfg-49",
      slug: "elios-standard-wall-single-cfg-49",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de48hos25230e3",
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
      id: "elios-standard-wall-single-cfg-50",
      slug: "elios-standard-wall-single-cfg-50",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-de48hos25230e3",
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
      id: "elios-standard-wall-single-cfg-51",
      slug: "elios-standard-wall-single-cfg-51",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea18hos21230s1",
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
      id: "elios-standard-wall-single-cfg-52",
      slug: "elios-standard-wall-single-cfg-52",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea36hos21230s1",
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
      id: "elios-standard-wall-single-cfg-53",
      slug: "elios-standard-wall-single-cfg-53",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea36hos18230s5",
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
      id: "elios-standard-wall-single-cfg-54",
      slug: "elios-standard-wall-single-cfg-54",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea48hos18230s5",
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
      id: "elios-standard-wall-single-cfg-55",
      slug: "elios-standard-wall-single-cfg-55",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea36hos18230s5",
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
      id: "elios-standard-wall-single-cfg-56",
      slug: "elios-standard-wall-single-cfg-56",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea48hos18230s5",
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
      id: "elios-standard-wall-single-cfg-57",
      slug: "elios-standard-wall-single-cfg-57",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea60hos18230s5",
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
      id: "elios-standard-wall-single-cfg-58",
      slug: "elios-standard-wall-single-cfg-58",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea55hom23230x2",
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
      id: "elios-standard-wall-single-cfg-59",
      slug: "elios-standard-wall-single-cfg-59",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea55hom23230x2",
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
      id: "elios-standard-wall-single-cfg-60",
      slug: "elios-standard-wall-single-cfg-60",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea55hom23230x2",
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
      id: "elios-standard-wall-single-cfg-61",
      slug: "elios-standard-wall-single-cfg-61",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-dea60hos19230e7",
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
      id: "elios-standard-wall-single-cfg-62",
      slug: "elios-standard-wall-single-cfg-62",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-eshba12c1an1",
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
      id: "elios-standard-wall-single-cfg-63",
      slug: "elios-standard-wall-single-cfg-63",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-eshba09c2an1",
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
      id: "elios-standard-wall-single-cfg-64",
      slug: "elios-standard-wall-single-cfg-64",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-eshba12c2an1",
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
      id: "elios-standard-wall-single-cfg-65",
      slug: "elios-standard-wall-single-cfg-65",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-eshba18c2an1",
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
      id: "elios-standard-wall-single-cfg-66",
      slug: "elios-standard-wall-single-cfg-66",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-eshba24c2an1",
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
      id: "elios-standard-wall-single-cfg-67",
      slug: "elios-standard-wall-single-cfg-67",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-eshba30c2an1",
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
      id: "elios-standard-wall-single-cfg-68",
      slug: "elios-standard-wall-single-cfg-68",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-eshba36c2an1",
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
      id: "elios-standard-wall-single-cfg-69",
      slug: "elios-standard-wall-single-cfg-69",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-eshua60r2an1",
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
      id: "elios-standard-wall-single-cfg-70",
      slug: "elios-standard-wall-single-cfg-70",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-exhsa1832av1",
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
      id: "elios-standard-wall-single-cfg-71",
      slug: "elios-standard-wall-single-cfg-71",
      modelId: "elios-standard-wall-single",
      outdoorUnitId: "elios-exhsa1832av1",
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
      id: "elios-de-series-wall-single-cfg-1",
      slug: "elios-de-series-wall-single-cfg-1",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de24hos25230e3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-de-series-wall-single-cfg-2",
      slug: "elios-de-series-wall-single-cfg-2",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de24hos25230e3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-de-series-wall-single-cfg-3",
      slug: "elios-de-series-wall-single-cfg-3",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de18hos25230e3a",
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
      id: "elios-de-series-wall-single-cfg-4",
      slug: "elios-de-series-wall-single-cfg-4",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de18hos25230e3a",
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
      id: "elios-de-series-wall-single-cfg-5",
      slug: "elios-de-series-wall-single-cfg-5",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de18hos25230e3a",
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
      id: "elios-de-series-wall-single-cfg-6",
      slug: "elios-de-series-wall-single-cfg-6",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de24hos25230e3a",
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
      id: "elios-de-series-wall-single-cfg-7",
      slug: "elios-de-series-wall-single-cfg-7",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de24hos25230e3a",
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
      id: "elios-de-series-wall-single-cfg-8",
      slug: "elios-de-series-wall-single-cfg-8",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de24hos25230e3a",
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
      id: "elios-de-series-wall-single-cfg-9",
      slug: "elios-de-series-wall-single-cfg-9",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de36hos25230e3",
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
      id: "elios-de-series-wall-single-cfg-10",
      slug: "elios-de-series-wall-single-cfg-10",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-de36hos25230e3",
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
      id: "elios-de-series-wall-single-cfg-11",
      slug: "elios-de-series-wall-single-cfg-11",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea09hos21115s1",
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
      id: "elios-de-series-wall-single-cfg-12",
      slug: "elios-de-series-wall-single-cfg-12",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea09hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-13",
      slug: "elios-de-series-wall-single-cfg-13",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea12hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-14",
      slug: "elios-de-series-wall-single-cfg-14",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-15",
      slug: "elios-de-series-wall-single-cfg-15",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea24hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-16",
      slug: "elios-de-series-wall-single-cfg-16",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea06hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-17",
      slug: "elios-de-series-wall-single-cfg-17",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea12hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-18",
      slug: "elios-de-series-wall-single-cfg-18",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-19",
      slug: "elios-de-series-wall-single-cfg-19",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea09hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-20",
      slug: "elios-de-series-wall-single-cfg-20",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea12hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-21",
      slug: "elios-de-series-wall-single-cfg-21",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-22",
      slug: "elios-de-series-wall-single-cfg-22",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea24hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-23",
      slug: "elios-de-series-wall-single-cfg-23",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea09hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-24",
      slug: "elios-de-series-wall-single-cfg-24",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea12hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-25",
      slug: "elios-de-series-wall-single-cfg-25",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-26",
      slug: "elios-de-series-wall-single-cfg-26",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea24hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-27",
      slug: "elios-de-series-wall-single-cfg-27",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea36hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-28",
      slug: "elios-de-series-wall-single-cfg-28",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea48hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-29",
      slug: "elios-de-series-wall-single-cfg-29",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea09hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-30",
      slug: "elios-de-series-wall-single-cfg-30",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea12hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-31",
      slug: "elios-de-series-wall-single-cfg-31",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-32",
      slug: "elios-de-series-wall-single-cfg-32",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea24hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-33",
      slug: "elios-de-series-wall-single-cfg-33",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea09hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-34",
      slug: "elios-de-series-wall-single-cfg-34",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea12hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-35",
      slug: "elios-de-series-wall-single-cfg-35",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-36",
      slug: "elios-de-series-wall-single-cfg-36",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea24hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-37",
      slug: "elios-de-series-wall-single-cfg-37",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea36hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-38",
      slug: "elios-de-series-wall-single-cfg-38",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea48hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-39",
      slug: "elios-de-series-wall-single-cfg-39",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea12hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-40",
      slug: "elios-de-series-wall-single-cfg-40",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea12hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-41",
      slug: "elios-de-series-wall-single-cfg-41",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-42",
      slug: "elios-de-series-wall-single-cfg-42",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-43",
      slug: "elios-de-series-wall-single-cfg-43",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-44",
      slug: "elios-de-series-wall-single-cfg-44",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea27hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-45",
      slug: "elios-de-series-wall-single-cfg-45",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea27hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-46",
      slug: "elios-de-series-wall-single-cfg-46",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea27hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-47",
      slug: "elios-de-series-wall-single-cfg-47",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea36hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-48",
      slug: "elios-de-series-wall-single-cfg-48",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea36hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-49",
      slug: "elios-de-series-wall-single-cfg-49",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea36hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-50",
      slug: "elios-de-series-wall-single-cfg-50",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea48hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-51",
      slug: "elios-de-series-wall-single-cfg-51",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea48hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-52",
      slug: "elios-de-series-wall-single-cfg-52",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea48hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-53",
      slug: "elios-de-series-wall-single-cfg-53",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-54",
      slug: "elios-de-series-wall-single-cfg-54",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-55",
      slug: "elios-de-series-wall-single-cfg-55",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-56",
      slug: "elios-de-series-wall-single-cfg-56",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea27hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-57",
      slug: "elios-de-series-wall-single-cfg-57",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea27hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-58",
      slug: "elios-de-series-wall-single-cfg-58",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea27hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-59",
      slug: "elios-de-series-wall-single-cfg-59",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea36hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-60",
      slug: "elios-de-series-wall-single-cfg-60",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea48hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-61",
      slug: "elios-de-series-wall-single-cfg-61",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea48hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-62",
      slug: "elios-de-series-wall-single-cfg-62",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea48hom23230x2",
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
      id: "elios-de-series-wall-single-cfg-63",
      slug: "elios-de-series-wall-single-cfg-63",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hos28230e8",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-de-series-wall-single-cfg-64",
      slug: "elios-de-series-wall-single-cfg-64",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea09hos25230e8",
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
      id: "elios-de-series-wall-single-cfg-65",
      slug: "elios-de-series-wall-single-cfg-65",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea09hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-66",
      slug: "elios-de-series-wall-single-cfg-66",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea12hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-67",
      slug: "elios-de-series-wall-single-cfg-67",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea18hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-68",
      slug: "elios-de-series-wall-single-cfg-68",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea24hos28230e8",
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
      id: "elios-de-series-wall-single-cfg-69",
      slug: "elios-de-series-wall-single-cfg-69",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea55hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-70",
      slug: "elios-de-series-wall-single-cfg-70",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea55hom25230x3",
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
      id: "elios-de-series-wall-single-cfg-71",
      slug: "elios-de-series-wall-single-cfg-71",
      modelId: "elios-de-series-wall-single",
      outdoorUnitId: "elios-dea55hom25230x3",
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
      id: "elios-dea-series-central-ducted-cfg-1",
      slug: "elios-dea-series-central-ducted-cfg-1",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea18hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-2",
      slug: "elios-dea-series-central-ducted-cfg-2",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea24hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-3",
      slug: "elios-dea-series-central-ducted-cfg-3",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea30hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-4",
      slug: "elios-dea-series-central-ducted-cfg-4",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea36hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-5",
      slug: "elios-dea-series-central-ducted-cfg-5",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea48hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-6",
      slug: "elios-dea-series-central-ducted-cfg-6",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea60hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-7",
      slug: "elios-dea-series-central-ducted-cfg-7",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea18hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-8",
      slug: "elios-dea-series-central-ducted-cfg-8",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea24hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-9",
      slug: "elios-dea-series-central-ducted-cfg-9",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea30hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-10",
      slug: "elios-dea-series-central-ducted-cfg-10",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea36hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-11",
      slug: "elios-dea-series-central-ducted-cfg-11",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea36hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-12",
      slug: "elios-dea-series-central-ducted-cfg-12",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea48hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-13",
      slug: "elios-dea-series-central-ducted-cfg-13",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea60hos20230e7",
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
      id: "elios-dea-series-central-ducted-cfg-14",
      slug: "elios-dea-series-central-ducted-cfg-14",
      modelId: "elios-dea-series-central-ducted",
      outdoorUnitId: "elios-dea30hos20230e7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-dm-series-wall-single-cfg-1",
      slug: "elios-dm-series-wall-single-cfg-1",
      modelId: "elios-dm-series-wall-single",
      outdoorUnitId: "elios-dea12hos25230e8",
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
      id: "elios-dub-series-wall-single-cfg-1",
      slug: "elios-dub-series-wall-single-cfg-1",
      modelId: "elios-dub-series-wall-single",
      outdoorUnitId: "elios-dea12hos25230e8",
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
      id: "elios-dub-series-wall-single-cfg-2",
      slug: "elios-dub-series-wall-single-cfg-2",
      modelId: "elios-dub-series-wall-single",
      outdoorUnitId: "elios-dea12hos28230e8",
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
      id: "elios-esh-series-central-ducted-cfg-1",
      slug: "elios-esh-series-central-ducted-cfg-1",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma24r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-2",
      slug: "elios-esh-series-central-ducted-cfg-2",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma30r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-3",
      slug: "elios-esh-series-central-ducted-cfg-3",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma48r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-4",
      slug: "elios-esh-series-central-ducted-cfg-4",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma60r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-5",
      slug: "elios-esh-series-central-ducted-cfg-5",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshmb36r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-6",
      slug: "elios-esh-series-central-ducted-cfg-6",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma18r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-7",
      slug: "elios-esh-series-central-ducted-cfg-7",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma24r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-8",
      slug: "elios-esh-series-central-ducted-cfg-8",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma30r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-9",
      slug: "elios-esh-series-central-ducted-cfg-9",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma30r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-10",
      slug: "elios-esh-series-central-ducted-cfg-10",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma60r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-11",
      slug: "elios-esh-series-central-ducted-cfg-11",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea18r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-12",
      slug: "elios-esh-series-central-ducted-cfg-12",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea24r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-13",
      slug: "elios-esh-series-central-ducted-cfg-13",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma18r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-14",
      slug: "elios-esh-series-central-ducted-cfg-14",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma24r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-15",
      slug: "elios-esh-series-central-ducted-cfg-15",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma30r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-16",
      slug: "elios-esh-series-central-ducted-cfg-16",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma30r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-17",
      slug: "elios-esh-series-central-ducted-cfg-17",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea36r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-central-ducted-cfg-18",
      slug: "elios-esh-series-central-ducted-cfg-18",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea36r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-central-ducted-cfg-19",
      slug: "elios-esh-series-central-ducted-cfg-19",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshma48r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-20",
      slug: "elios-esh-series-central-ducted-cfg-20",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea30r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-central-ducted-cfg-21",
      slug: "elios-esh-series-central-ducted-cfg-21",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea30r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-central-ducted-cfg-22",
      slug: "elios-esh-series-central-ducted-cfg-22",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshmb36r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-23",
      slug: "elios-esh-series-central-ducted-cfg-23",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshmb36r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-24",
      slug: "elios-esh-series-central-ducted-cfg-24",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea18r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-25",
      slug: "elios-esh-series-central-ducted-cfg-25",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea24r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-central-ducted-cfg-26",
      slug: "elios-esh-series-central-ducted-cfg-26",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea30r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-central-ducted-cfg-27",
      slug: "elios-esh-series-central-ducted-cfg-27",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea36r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-central-ducted-cfg-28",
      slug: "elios-esh-series-central-ducted-cfg-28",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea18r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-29",
      slug: "elios-esh-series-central-ducted-cfg-29",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea24r2an1",
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
      id: "elios-esh-series-central-ducted-cfg-30",
      slug: "elios-esh-series-central-ducted-cfg-30",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea30r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-central-ducted-cfg-31",
      slug: "elios-esh-series-central-ducted-cfg-31",
      modelId: "elios-esh-series-central-ducted",
      outdoorUnitId: "elios-eshea36r2an1",
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
      id: "elios-esh-series-wall-single-cfg-1",
      slug: "elios-esh-series-wall-single-cfg-1",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshma09c2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-wall-single-cfg-2",
      slug: "elios-esh-series-wall-single-cfg-2",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshma12c2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-wall-single-cfg-3",
      slug: "elios-esh-series-wall-single-cfg-3",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshma18c2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-wall-single-cfg-4",
      slug: "elios-esh-series-wall-single-cfg-4",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshma24c2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-wall-single-cfg-5",
      slug: "elios-esh-series-wall-single-cfg-5",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshma33c2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "elios-esh-series-wall-single-cfg-6",
      slug: "elios-esh-series-wall-single-cfg-6",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea09c2an1",
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
      id: "elios-esh-series-wall-single-cfg-7",
      slug: "elios-esh-series-wall-single-cfg-7",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea12c2an1",
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
      id: "elios-esh-series-wall-single-cfg-8",
      slug: "elios-esh-series-wall-single-cfg-8",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea18c2an1",
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
      id: "elios-esh-series-wall-single-cfg-9",
      slug: "elios-esh-series-wall-single-cfg-9",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea24c2an1",
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
      id: "elios-esh-series-wall-single-cfg-10",
      slug: "elios-esh-series-wall-single-cfg-10",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshua36r2an1",
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
      id: "elios-esh-series-wall-single-cfg-11",
      slug: "elios-esh-series-wall-single-cfg-11",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshua48r2an1",
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
      id: "elios-esh-series-wall-single-cfg-12",
      slug: "elios-esh-series-wall-single-cfg-12",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea18c2an1",
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
      id: "elios-esh-series-wall-single-cfg-13",
      slug: "elios-esh-series-wall-single-cfg-13",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea09c2an1",
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
      id: "elios-esh-series-wall-single-cfg-14",
      slug: "elios-esh-series-wall-single-cfg-14",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea12c2an1",
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
      id: "elios-esh-series-wall-single-cfg-15",
      slug: "elios-esh-series-wall-single-cfg-15",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea18c2an1",
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
      id: "elios-esh-series-wall-single-cfg-16",
      slug: "elios-esh-series-wall-single-cfg-16",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea24c2an1",
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
      id: "elios-esh-series-wall-single-cfg-17",
      slug: "elios-esh-series-wall-single-cfg-17",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshua36r2an1",
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
      id: "elios-esh-series-wall-single-cfg-18",
      slug: "elios-esh-series-wall-single-cfg-18",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshua48r2an1",
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
      id: "elios-esh-series-wall-single-cfg-19",
      slug: "elios-esh-series-wall-single-cfg-19",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea12c2an1",
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
      id: "elios-esh-series-wall-single-cfg-20",
      slug: "elios-esh-series-wall-single-cfg-20",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshua36r2an1",
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
      id: "elios-esh-series-wall-single-cfg-21",
      slug: "elios-esh-series-wall-single-cfg-21",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshua48r2an1",
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
      id: "elios-esh-series-wall-single-cfg-22",
      slug: "elios-esh-series-wall-single-cfg-22",
      modelId: "elios-esh-series-wall-single",
      outdoorUnitId: "elios-eshea12c2an1",
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
      id: "elios-exh-series-wall-single-cfg-1",
      slug: "elios-exh-series-wall-single-cfg-1",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa2742av1",
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
      id: "elios-exh-series-wall-single-cfg-2",
      slug: "elios-exh-series-wall-single-cfg-2",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa2742av1",
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
      id: "elios-exh-series-wall-single-cfg-3",
      slug: "elios-exh-series-wall-single-cfg-3",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa2742av1",
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
      id: "elios-exh-series-wall-single-cfg-4",
      slug: "elios-exh-series-wall-single-cfg-4",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa3652av1",
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
      id: "elios-exh-series-wall-single-cfg-5",
      slug: "elios-exh-series-wall-single-cfg-5",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa3652av1",
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
      id: "elios-exh-series-wall-single-cfg-6",
      slug: "elios-exh-series-wall-single-cfg-6",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa3652av1",
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
      id: "elios-exh-series-wall-single-cfg-7",
      slug: "elios-exh-series-wall-single-cfg-7",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa4862av1",
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
      id: "elios-exh-series-wall-single-cfg-8",
      slug: "elios-exh-series-wall-single-cfg-8",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa4862av1",
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
      id: "elios-exh-series-wall-single-cfg-9",
      slug: "elios-exh-series-wall-single-cfg-9",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa4862av1",
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
      id: "elios-exh-series-wall-single-cfg-10",
      slug: "elios-exh-series-wall-single-cfg-10",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa1832an1",
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
      id: "elios-exh-series-wall-single-cfg-11",
      slug: "elios-exh-series-wall-single-cfg-11",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa1832an1",
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
      id: "elios-exh-series-wall-single-cfg-12",
      slug: "elios-exh-series-wall-single-cfg-12",
      modelId: "elios-exh-series-wall-single",
      outdoorUnitId: "elios-exhsa1832an1",
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
      id: "elios-mah-series-central-ducted-cfg-1",
      slug: "elios-mah-series-central-ducted-cfg-1",
      modelId: "elios-mah-series-central-ducted",
      outdoorUnitId: "elios-mshmb36r2an1",
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
      id: "elios-msh-series-central-ducted-cfg-1",
      slug: "elios-msh-series-central-ducted-cfg-1",
      modelId: "elios-msh-series-central-ducted",
      outdoorUnitId: "elios-eshmb36r2an1",
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
      id: "elios-msh-series-central-ducted-cfg-2",
      slug: "elios-msh-series-central-ducted-cfg-2",
      modelId: "elios-msh-series-central-ducted",
      outdoorUnitId: "elios-eshmb36r2an1",
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
      configurationId: "elios-standard-wall-single-cfg-1",
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
      configurationId: "elios-standard-wall-single-cfg-2",
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
      configurationId: "elios-standard-wall-single-cfg-3",
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
      configurationId: "elios-standard-wall-single-cfg-4",
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
      configurationId: "elios-standard-wall-single-cfg-5",
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
      configurationId: "elios-standard-wall-single-cfg-6",
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
      configurationId: "elios-standard-wall-single-cfg-7",
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
      configurationId: "elios-standard-wall-single-cfg-8",
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
      configurationId: "elios-standard-wall-single-cfg-9",
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
      configurationId: "elios-standard-wall-single-cfg-10",
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
      configurationId: "elios-standard-wall-single-cfg-11",
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
      configurationId: "elios-standard-wall-single-cfg-12",
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
      configurationId: "elios-standard-wall-single-cfg-13",
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
      configurationId: "elios-standard-wall-single-cfg-14",
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
      configurationId: "elios-standard-wall-single-cfg-15",
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
      configurationId: "elios-standard-wall-single-cfg-16",
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
      configurationId: "elios-standard-wall-single-cfg-17",
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
      configurationId: "elios-standard-wall-single-cfg-18",
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
      configurationId: "elios-standard-wall-single-cfg-19",
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
      configurationId: "elios-standard-wall-single-cfg-20",
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
      configurationId: "elios-standard-wall-single-cfg-21",
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
      configurationId: "elios-standard-wall-single-cfg-22",
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
      configurationId: "elios-standard-wall-single-cfg-23",
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
      configurationId: "elios-standard-wall-single-cfg-24",
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
      configurationId: "elios-standard-wall-single-cfg-25",
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
      configurationId: "elios-standard-wall-single-cfg-26",
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
      configurationId: "elios-standard-wall-single-cfg-27",
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
      configurationId: "elios-standard-wall-single-cfg-28",
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
      configurationId: "elios-standard-wall-single-cfg-29",
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
      configurationId: "elios-standard-wall-single-cfg-30",
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
      configurationId: "elios-standard-wall-single-cfg-31",
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
      configurationId: "elios-standard-wall-single-cfg-32",
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
      configurationId: "elios-standard-wall-single-cfg-33",
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
      configurationId: "elios-standard-wall-single-cfg-34",
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
      configurationId: "elios-standard-wall-single-cfg-35",
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
      configurationId: "elios-standard-wall-single-cfg-36",
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
      configurationId: "elios-standard-wall-single-cfg-37",
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
      configurationId: "elios-standard-wall-single-cfg-38",
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
      configurationId: "elios-standard-wall-single-cfg-39",
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
      configurationId: "elios-standard-wall-single-cfg-40",
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
      configurationId: "elios-standard-wall-single-cfg-41",
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
      configurationId: "elios-standard-wall-single-cfg-42",
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
      configurationId: "elios-standard-wall-single-cfg-43",
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
      configurationId: "elios-standard-wall-single-cfg-44",
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
      configurationId: "elios-standard-wall-single-cfg-45",
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
      configurationId: "elios-standard-wall-single-cfg-46",
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
      configurationId: "elios-standard-wall-single-cfg-47",
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
      configurationId: "elios-standard-wall-single-cfg-48",
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
      configurationId: "elios-standard-wall-single-cfg-49",
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
      configurationId: "elios-standard-wall-single-cfg-50",
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
      configurationId: "elios-standard-wall-single-cfg-51",
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
      configurationId: "elios-standard-wall-single-cfg-52",
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
      configurationId: "elios-standard-wall-single-cfg-53",
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
      configurationId: "elios-standard-wall-single-cfg-54",
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
      configurationId: "elios-standard-wall-single-cfg-55",
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
      configurationId: "elios-standard-wall-single-cfg-56",
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
      configurationId: "elios-standard-wall-single-cfg-57",
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
      configurationId: "elios-standard-wall-single-cfg-58",
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
      configurationId: "elios-standard-wall-single-cfg-59",
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
      configurationId: "elios-standard-wall-single-cfg-60",
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
      configurationId: "elios-standard-wall-single-cfg-61",
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
      configurationId: "elios-standard-wall-single-cfg-62",
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
      configurationId: "elios-standard-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-standard-wall-single-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-standard-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-standard-wall-single-cfg-66",
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
      configurationId: "elios-standard-wall-single-cfg-67",
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
      configurationId: "elios-standard-wall-single-cfg-68",
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
      configurationId: "elios-standard-wall-single-cfg-69",
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
      configurationId: "elios-standard-wall-single-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-standard-wall-single-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-de-series-wall-single-cfg-1",
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
      configurationId: "elios-de-series-wall-single-cfg-2",
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
      configurationId: "elios-de-series-wall-single-cfg-3",
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
      configurationId: "elios-de-series-wall-single-cfg-4",
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
      configurationId: "elios-de-series-wall-single-cfg-5",
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
      configurationId: "elios-de-series-wall-single-cfg-6",
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
      configurationId: "elios-de-series-wall-single-cfg-7",
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
      configurationId: "elios-de-series-wall-single-cfg-8",
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
      configurationId: "elios-de-series-wall-single-cfg-9",
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
      configurationId: "elios-de-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-de-series-wall-single-cfg-11",
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
      configurationId: "elios-de-series-wall-single-cfg-12",
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
      configurationId: "elios-de-series-wall-single-cfg-13",
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
      configurationId: "elios-de-series-wall-single-cfg-14",
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
      configurationId: "elios-de-series-wall-single-cfg-15",
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
      configurationId: "elios-de-series-wall-single-cfg-16",
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
      configurationId: "elios-de-series-wall-single-cfg-17",
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
      configurationId: "elios-de-series-wall-single-cfg-18",
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
      configurationId: "elios-de-series-wall-single-cfg-19",
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
      configurationId: "elios-de-series-wall-single-cfg-20",
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
      configurationId: "elios-de-series-wall-single-cfg-21",
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
      configurationId: "elios-de-series-wall-single-cfg-22",
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
      configurationId: "elios-de-series-wall-single-cfg-23",
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
      configurationId: "elios-de-series-wall-single-cfg-24",
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
      configurationId: "elios-de-series-wall-single-cfg-25",
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
      configurationId: "elios-de-series-wall-single-cfg-26",
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
      configurationId: "elios-de-series-wall-single-cfg-27",
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
      configurationId: "elios-de-series-wall-single-cfg-28",
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
      configurationId: "elios-de-series-wall-single-cfg-29",
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
      configurationId: "elios-de-series-wall-single-cfg-30",
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
      configurationId: "elios-de-series-wall-single-cfg-31",
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
      configurationId: "elios-de-series-wall-single-cfg-32",
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
      configurationId: "elios-de-series-wall-single-cfg-33",
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
      configurationId: "elios-de-series-wall-single-cfg-34",
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
      configurationId: "elios-de-series-wall-single-cfg-35",
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
      configurationId: "elios-de-series-wall-single-cfg-36",
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
      configurationId: "elios-de-series-wall-single-cfg-37",
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
      configurationId: "elios-de-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-de-series-wall-single-cfg-39",
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
      configurationId: "elios-de-series-wall-single-cfg-40",
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
      configurationId: "elios-de-series-wall-single-cfg-41",
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
      configurationId: "elios-de-series-wall-single-cfg-42",
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
      configurationId: "elios-de-series-wall-single-cfg-43",
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
      configurationId: "elios-de-series-wall-single-cfg-44",
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
      configurationId: "elios-de-series-wall-single-cfg-45",
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
      configurationId: "elios-de-series-wall-single-cfg-46",
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
      configurationId: "elios-de-series-wall-single-cfg-47",
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
      configurationId: "elios-de-series-wall-single-cfg-48",
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
      configurationId: "elios-de-series-wall-single-cfg-49",
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
      configurationId: "elios-de-series-wall-single-cfg-50",
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
      configurationId: "elios-de-series-wall-single-cfg-51",
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
      configurationId: "elios-de-series-wall-single-cfg-52",
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
      configurationId: "elios-de-series-wall-single-cfg-53",
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
      configurationId: "elios-de-series-wall-single-cfg-54",
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
      configurationId: "elios-de-series-wall-single-cfg-55",
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
      configurationId: "elios-de-series-wall-single-cfg-56",
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
      configurationId: "elios-de-series-wall-single-cfg-57",
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
      configurationId: "elios-de-series-wall-single-cfg-58",
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
      configurationId: "elios-de-series-wall-single-cfg-59",
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
      configurationId: "elios-de-series-wall-single-cfg-60",
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
      configurationId: "elios-de-series-wall-single-cfg-61",
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
      configurationId: "elios-de-series-wall-single-cfg-62",
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
      configurationId: "elios-de-series-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-de-series-wall-single-cfg-64",
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
      configurationId: "elios-de-series-wall-single-cfg-65",
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
      configurationId: "elios-de-series-wall-single-cfg-66",
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
      configurationId: "elios-de-series-wall-single-cfg-67",
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
      configurationId: "elios-de-series-wall-single-cfg-68",
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
      configurationId: "elios-de-series-wall-single-cfg-69",
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
      configurationId: "elios-de-series-wall-single-cfg-70",
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
      configurationId: "elios-de-series-wall-single-cfg-71",
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
      configurationId: "elios-dea-series-central-ducted-cfg-1",
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
      configurationId: "elios-dea-series-central-ducted-cfg-2",
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
      configurationId: "elios-dea-series-central-ducted-cfg-3",
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
      configurationId: "elios-dea-series-central-ducted-cfg-4",
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
      configurationId: "elios-dea-series-central-ducted-cfg-5",
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
      configurationId: "elios-dea-series-central-ducted-cfg-6",
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
      configurationId: "elios-dea-series-central-ducted-cfg-7",
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
      configurationId: "elios-dea-series-central-ducted-cfg-8",
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
      configurationId: "elios-dea-series-central-ducted-cfg-9",
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
      configurationId: "elios-dea-series-central-ducted-cfg-10",
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
      configurationId: "elios-dea-series-central-ducted-cfg-11",
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
      configurationId: "elios-dea-series-central-ducted-cfg-12",
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
      configurationId: "elios-dea-series-central-ducted-cfg-13",
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
      configurationId: "elios-dea-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-dm-series-wall-single-cfg-1",
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
      configurationId: "elios-dub-series-wall-single-cfg-1",
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
      configurationId: "elios-dub-series-wall-single-cfg-2",
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
      configurationId: "elios-esh-series-central-ducted-cfg-1",
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
      configurationId: "elios-esh-series-central-ducted-cfg-2",
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
      configurationId: "elios-esh-series-central-ducted-cfg-3",
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
      configurationId: "elios-esh-series-central-ducted-cfg-4",
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
      configurationId: "elios-esh-series-central-ducted-cfg-5",
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
      configurationId: "elios-esh-series-central-ducted-cfg-6",
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
      configurationId: "elios-esh-series-central-ducted-cfg-7",
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
      configurationId: "elios-esh-series-central-ducted-cfg-8",
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
      configurationId: "elios-esh-series-central-ducted-cfg-9",
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
      configurationId: "elios-esh-series-central-ducted-cfg-10",
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
      configurationId: "elios-esh-series-central-ducted-cfg-11",
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
      configurationId: "elios-esh-series-central-ducted-cfg-12",
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
      configurationId: "elios-esh-series-central-ducted-cfg-13",
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
      configurationId: "elios-esh-series-central-ducted-cfg-14",
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
      configurationId: "elios-esh-series-central-ducted-cfg-15",
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
      configurationId: "elios-esh-series-central-ducted-cfg-16",
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
      configurationId: "elios-esh-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-central-ducted-cfg-19",
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
      configurationId: "elios-esh-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-central-ducted-cfg-22",
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
      configurationId: "elios-esh-series-central-ducted-cfg-23",
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
      configurationId: "elios-esh-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-central-ducted-cfg-28",
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
      configurationId: "elios-esh-series-central-ducted-cfg-29",
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
      configurationId: "elios-esh-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-central-ducted-cfg-31",
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
      configurationId: "elios-esh-series-wall-single-cfg-1",
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
      configurationId: "elios-esh-series-wall-single-cfg-2",
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
      configurationId: "elios-esh-series-wall-single-cfg-3",
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
      configurationId: "elios-esh-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "elios-esh-series-wall-single-cfg-6",
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
      configurationId: "elios-esh-series-wall-single-cfg-7",
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
      configurationId: "elios-esh-series-wall-single-cfg-8",
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
      configurationId: "elios-esh-series-wall-single-cfg-9",
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
      configurationId: "elios-esh-series-wall-single-cfg-10",
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
      configurationId: "elios-esh-series-wall-single-cfg-11",
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
      configurationId: "elios-esh-series-wall-single-cfg-12",
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
      configurationId: "elios-esh-series-wall-single-cfg-13",
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
      configurationId: "elios-esh-series-wall-single-cfg-14",
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
      configurationId: "elios-esh-series-wall-single-cfg-15",
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
      configurationId: "elios-esh-series-wall-single-cfg-16",
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
      configurationId: "elios-esh-series-wall-single-cfg-17",
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
      configurationId: "elios-esh-series-wall-single-cfg-18",
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
      configurationId: "elios-esh-series-wall-single-cfg-19",
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
      configurationId: "elios-esh-series-wall-single-cfg-20",
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
      configurationId: "elios-esh-series-wall-single-cfg-21",
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
      configurationId: "elios-esh-series-wall-single-cfg-22",
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
      configurationId: "elios-exh-series-wall-single-cfg-1",
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
      configurationId: "elios-exh-series-wall-single-cfg-2",
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
      configurationId: "elios-exh-series-wall-single-cfg-3",
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
      configurationId: "elios-exh-series-wall-single-cfg-4",
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
      configurationId: "elios-exh-series-wall-single-cfg-5",
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
      configurationId: "elios-exh-series-wall-single-cfg-6",
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
      configurationId: "elios-exh-series-wall-single-cfg-7",
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
      configurationId: "elios-exh-series-wall-single-cfg-8",
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
      configurationId: "elios-exh-series-wall-single-cfg-9",
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
      configurationId: "elios-exh-series-wall-single-cfg-10",
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
      configurationId: "elios-exh-series-wall-single-cfg-11",
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
      configurationId: "elios-exh-series-wall-single-cfg-12",
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
      configurationId: "elios-mah-series-central-ducted-cfg-1",
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
      configurationId: "elios-msh-series-central-ducted-cfg-1",
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
      configurationId: "elios-msh-series-central-ducted-cfg-2",
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
