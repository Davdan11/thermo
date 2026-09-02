import type { BrandDataset } from "../../types";

export const perfectaireDataset: BrandDataset = {
  brand: {
    id: "perfectaire",
    slug: "perfectaire",
    name: "PERFECTAIRE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "perfectaire-standard",
      slug: "perfectaire-standard",
      name: "Standard",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-hiultra",
      slug: "perfectaire-hiultra",
      name: "HiULTRA",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-karda",
      slug: "perfectaire-karda",
      name: "KARDA",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-hi-multi-xtreme",
      slug: "perfectaire-hi-multi-xtreme",
      name: "Hi MULTI Xtreme",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-1pams",
      slug: "perfectaire-1pams",
      name: "1PAMS",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams",
      slug: "perfectaire-3pams",
      name: "3PAMS",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pam",
      slug: "perfectaire-3pam",
      name: "3PAM",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pahh-series",
      slug: "perfectaire-3pahh-series",
      name: "3PAHH series",
      brandId: "perfectaire",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pam-series",
      slug: "perfectaire-3pam-series",
      name: "3PAM series",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pamshh-series",
      slug: "perfectaire-3pamshh-series",
      name: "3PAMSHH series",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series",
      slug: "perfectaire-4pam-series",
      name: "4PAM Series",
      brandId: "perfectaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "perfectaire-standard-wall-single",
      slug: "perfectaire-standard-wall-single",
      name: "Standard",
      seriesId: "perfectaire-standard",
      brandId: "perfectaire",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 36400,
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
      id: "perfectaire-hiultra-wall-single",
      slug: "perfectaire-hiultra-wall-single",
      name: "HiULTRA",
      seriesId: "perfectaire-hiultra",
      brandId: "perfectaire",
      modelNumber: "HiULTRA",
      normalizedModelNumber: "hiultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 14500,
      seer2Min: 18.5,
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
      id: "perfectaire-karda-wall-single",
      slug: "perfectaire-karda-wall-single",
      name: "KARDA",
      seriesId: "perfectaire-karda",
      brandId: "perfectaire",
      modelNumber: "KARDA",
      normalizedModelNumber: "karda",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 18,
      seer2Max: 19.2,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 1.85,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-hi-multi-xtreme-wall-single",
      slug: "perfectaire-hi-multi-xtreme-wall-single",
      name: "Hi MULTI Xtreme",
      seriesId: "perfectaire-hi-multi-xtreme",
      brandId: "perfectaire",
      modelNumber: "Hi MULTI Xtreme",
      normalizedModelNumber: "hi-multi-xtreme",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 12200,
      heatingCapacity5FMaxBtu: 15400,
      seer2Min: 21,
      seer2Max: 22,
      hspf2Min: 9.05,
      hspf2Max: 9.5,
      cop5FMin: 1.84,
      cop5FMax: 1.84,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-1pams-wall-single",
      slug: "perfectaire-1pams-wall-single",
      name: "1PAMS",
      seriesId: "perfectaire-1pams",
      brandId: "perfectaire",
      modelNumber: "1PAMS",
      normalizedModelNumber: "1pams",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 14500,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 19.2,
      seer2Max: 19.2,
      hspf2Min: 10.5,
      hspf2Max: 10.5,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single",
      slug: "perfectaire-3pams-wall-single",
      name: "3PAMS",
      seriesId: "perfectaire-3pams",
      brandId: "perfectaire",
      modelNumber: "3PAMS",
      normalizedModelNumber: "3pams",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 9300,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 18,
      seer2Max: 26.4,
      hspf2Min: 9,
      hspf2Max: 12,
      cop5FMin: 1.68,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pam-wall-single",
      slug: "perfectaire-3pam-wall-single",
      name: "3PAM",
      seriesId: "perfectaire-3pam",
      brandId: "perfectaire",
      modelNumber: "3PAM",
      normalizedModelNumber: "3pam",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11100,
      heatingCapacity5FMaxBtu: 11100,
      seer2Min: 22,
      seer2Max: 22,
      hspf2Min: 10.6,
      hspf2Max: 10.6,
      cop5FMin: 1.89,
      cop5FMax: 1.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pahh-series-central-ducted",
      slug: "perfectaire-3pahh-series-central-ducted",
      name: "3PAHH series",
      seriesId: "perfectaire-3pahh-series",
      brandId: "perfectaire",
      modelNumber: "3PAHH series",
      normalizedModelNumber: "3pahh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.3,
      seer2Max: 18,
      hspf2Min: 8.9,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.04,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pam-series-wall-single",
      slug: "perfectaire-3pam-series-wall-single",
      name: "3PAM series",
      seriesId: "perfectaire-3pam-series",
      brandId: "perfectaire",
      modelNumber: "3PAM series",
      normalizedModelNumber: "3pam-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 7500,
      seer2Min: 23.5,
      seer2Max: 23.5,
      hspf2Min: 12,
      hspf2Max: 12,
      cop5FMin: 1.84,
      cop5FMax: 1.84,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pamshh-series-wall-single",
      slug: "perfectaire-3pamshh-series-wall-single",
      name: "3PAMSHH series",
      seriesId: "perfectaire-3pamshh-series",
      brandId: "perfectaire",
      modelNumber: "3PAMSHH series",
      normalizedModelNumber: "3pamshh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 11100,
      heatingCapacity5FMaxBtu: 18900,
      seer2Min: 22,
      seer2Max: 22.3,
      hspf2Min: 10.3,
      hspf2Max: 10.6,
      cop5FMin: 1.8,
      cop5FMax: 1.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single",
      slug: "perfectaire-4pam-series-wall-single",
      name: "4PAM Series",
      seriesId: "perfectaire-4pam-series",
      brandId: "perfectaire",
      modelNumber: "4PAM Series",
      normalizedModelNumber: "4pam-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 7600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 17,
      seer2Max: 26,
      hspf2Min: 8.5,
      hspf2Max: 14.6,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "perfectaire-1pamshh09-szo-25",
      modelNumber: "1PAMSHH09-SZO-25",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-1pamshh12-szo-22-5",
      modelNumber: "1PAMSHH12-SZO-22.5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-1pamshh24-szo-20-5",
      modelNumber: "1PAMSHH24-SZO-20.5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-2pamsh48-mzo5",
      modelNumber: "2PAMSH48-MZO5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-2pamsh27-mzo3",
      modelNumber: "2PAMSH27-MZO3",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-2pamsh18-mzo2",
      modelNumber: "2PAMSH18-MZO2",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-2pams27-hh-mzo3",
      modelNumber: "2PAMS27-HH-MZO3",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-2pams36-hh-mzo4",
      modelNumber: "2PAMS36-HH-MZO4",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-2pams48-hh-mzo5",
      modelNumber: "2PAMS48-HH-MZO5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-2pamsh18-mzo",
      modelNumber: "2PAMSH18-MZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamsh55-mzo5",
      modelNumber: "3PAMSH55-MZO5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamsh09a-szo",
      modelNumber: "4PAMSH09A-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamsh12aa-szo",
      modelNumber: "4PAMSH12AA-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamsh12b-szo",
      modelNumber: "4PAMSH12B-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamsh18b-szo",
      modelNumber: "4PAMSH18B-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshqco09",
      modelNumber: "3PAMSHQCO09",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshqco12",
      modelNumber: "3PAMSHQCO12",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshqco18",
      modelNumber: "3PAMSHQCO18",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshqco24",
      modelNumber: "3PAMSHQCO24",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-2karda18szo20",
      modelNumber: "2KARDA18SZO20",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-1karda24szo20-5",
      modelNumber: "1KARDA24SZO20.5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshhqc18-mzo2",
      modelNumber: "3PAMSHHQC18-MZO2",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshhqc24-mzo3",
      modelNumber: "3PAMSHHQC24-MZO3",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-1pamshh24-szw-20-5",
      modelNumber: "1PAMSHH24-SZW-20.5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshh18-szo-20-5",
      modelNumber: "3PAMSHH18-SZO-20.5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshh09-szo",
      modelNumber: "3PAMSHH09-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshh12-szo",
      modelNumber: "3PAMSHH12-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshh24-szo",
      modelNumber: "3PAMSHH24-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pams18-hh-mzo2",
      modelNumber: "3PAMS18-HH-MZO2",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pams27-hh-mzo3",
      modelNumber: "3PAMS27-HH-MZO3",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pams36-hh-mzo4",
      modelNumber: "3PAMS36-HH-MZO4",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pams48-hh-mzo5",
      modelNumber: "3PAMS48-HH-MZO5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamsh18-mzo2",
      modelNumber: "3PAMSH18-MZO2",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamsh27-mzo3",
      modelNumber: "3PAMSH27-MZO3",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamsh36-mzo4",
      modelNumber: "3PAMSH36-MZO4",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamsh48-mzo5",
      modelNumber: "3PAMSH48-MZO5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshh18-szo",
      modelNumber: "3PAMSHH18-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pams55-hh-mzo5",
      modelNumber: "3PAMS55-HH-MZO5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pahhsd18-szo",
      modelNumber: "3PAHHSD18-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pahhsd24-szo",
      modelNumber: "3PAHHSD24-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pahhsd30-szo",
      modelNumber: "3PAHHSD30-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pahhsd36-szo",
      modelNumber: "3PAHHSD36-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pahhsd48-szo",
      modelNumber: "3PAHHSD48-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pahhsd60-szo",
      modelNumber: "3PAHHSD60-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshh06-szo",
      modelNumber: "3PAMSHH06-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-3pamshh24-szo-21",
      modelNumber: "3PAMSHH24-SZO-21",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamsh09b-szo",
      modelNumber: "4PAMSH09B-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamsh24b-szo",
      modelNumber: "4PAMSH24B-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamshh06-szo",
      modelNumber: "4PAMSHH06-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamshh09-szo",
      modelNumber: "4PAMSHH09-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamshh12-szo",
      modelNumber: "4PAMSHH12-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamshh18-szo",
      modelNumber: "4PAMSHH18-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pamshh24-szo",
      modelNumber: "4PAMSHH24-SZO",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams18-hh-mzo2",
      modelNumber: "4PAMS18-HH-MZO2",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams27-hh-mzo3",
      modelNumber: "4PAMS27-HH-MZO3",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams36-hh-mzo4",
      modelNumber: "4PAMS36-HH-MZO4",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams48-hh-mzo5",
      modelNumber: "4PAMS48-HH-MZO5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams55-hh-mzo5",
      modelNumber: "4PAMS55-HH-MZO5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams18-hh-mzo3",
      modelNumber: "4PAMS18-HH-MZO3",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams27-hh-mzo4",
      modelNumber: "4PAMS27-HH-MZO4",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams36-hh-mzo5",
      modelNumber: "4PAMS36-HH-MZO5",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams48-hh-mzo6",
      modelNumber: "4PAMS48-HH-MZO6",
      brandId: "perfectaire",
      refrigerant: null as any,
    },
    {
      id: "perfectaire-4pams55-hh-mzo6",
      modelNumber: "4PAMS55-HH-MZO6",
      brandId: "perfectaire",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "perfectaire-standard-wall-single-cfg-1",
      slug: "perfectaire-standard-wall-single-cfg-1",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-1pamshh09-szo-25",
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
      id: "perfectaire-standard-wall-single-cfg-2",
      slug: "perfectaire-standard-wall-single-cfg-2",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-1pamshh12-szo-22-5",
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
      id: "perfectaire-standard-wall-single-cfg-3",
      slug: "perfectaire-standard-wall-single-cfg-3",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-1pamshh24-szo-20-5",
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
      id: "perfectaire-standard-wall-single-cfg-4",
      slug: "perfectaire-standard-wall-single-cfg-4",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-2pamsh48-mzo5",
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
      id: "perfectaire-standard-wall-single-cfg-5",
      slug: "perfectaire-standard-wall-single-cfg-5",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-2pamsh27-mzo3",
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
      id: "perfectaire-standard-wall-single-cfg-6",
      slug: "perfectaire-standard-wall-single-cfg-6",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-2pamsh18-mzo2",
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
      id: "perfectaire-standard-wall-single-cfg-7",
      slug: "perfectaire-standard-wall-single-cfg-7",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-2pams27-hh-mzo3",
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
      id: "perfectaire-standard-wall-single-cfg-8",
      slug: "perfectaire-standard-wall-single-cfg-8",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-2pams36-hh-mzo4",
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
      id: "perfectaire-standard-wall-single-cfg-9",
      slug: "perfectaire-standard-wall-single-cfg-9",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-2pams36-hh-mzo4",
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
      id: "perfectaire-standard-wall-single-cfg-10",
      slug: "perfectaire-standard-wall-single-cfg-10",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-2pams48-hh-mzo5",
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
      id: "perfectaire-standard-wall-single-cfg-11",
      slug: "perfectaire-standard-wall-single-cfg-11",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-2pams48-hh-mzo5",
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
      id: "perfectaire-standard-wall-single-cfg-12",
      slug: "perfectaire-standard-wall-single-cfg-12",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-2pamsh18-mzo",
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
      id: "perfectaire-standard-wall-single-cfg-13",
      slug: "perfectaire-standard-wall-single-cfg-13",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-1pamshh12-szo-22-5",
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
      id: "perfectaire-standard-wall-single-cfg-14",
      slug: "perfectaire-standard-wall-single-cfg-14",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-1pamshh09-szo-25",
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
      id: "perfectaire-standard-wall-single-cfg-15",
      slug: "perfectaire-standard-wall-single-cfg-15",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-1pamshh12-szo-22-5",
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
      id: "perfectaire-standard-wall-single-cfg-16",
      slug: "perfectaire-standard-wall-single-cfg-16",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-3pamsh55-mzo5",
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
      id: "perfectaire-standard-wall-single-cfg-17",
      slug: "perfectaire-standard-wall-single-cfg-17",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-3pamsh55-mzo5",
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
      id: "perfectaire-standard-wall-single-cfg-18",
      slug: "perfectaire-standard-wall-single-cfg-18",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-4pamsh09a-szo",
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
      id: "perfectaire-standard-wall-single-cfg-19",
      slug: "perfectaire-standard-wall-single-cfg-19",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-4pamsh12aa-szo",
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
      id: "perfectaire-standard-wall-single-cfg-20",
      slug: "perfectaire-standard-wall-single-cfg-20",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-4pamsh12b-szo",
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
      id: "perfectaire-standard-wall-single-cfg-21",
      slug: "perfectaire-standard-wall-single-cfg-21",
      modelId: "perfectaire-standard-wall-single",
      outdoorUnitId: "perfectaire-4pamsh18b-szo",
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
      id: "perfectaire-hiultra-wall-single-cfg-1",
      slug: "perfectaire-hiultra-wall-single-cfg-1",
      modelId: "perfectaire-hiultra-wall-single",
      outdoorUnitId: "perfectaire-3pamshqco09",
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
      id: "perfectaire-hiultra-wall-single-cfg-2",
      slug: "perfectaire-hiultra-wall-single-cfg-2",
      modelId: "perfectaire-hiultra-wall-single",
      outdoorUnitId: "perfectaire-3pamshqco12",
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
      id: "perfectaire-hiultra-wall-single-cfg-3",
      slug: "perfectaire-hiultra-wall-single-cfg-3",
      modelId: "perfectaire-hiultra-wall-single",
      outdoorUnitId: "perfectaire-3pamshqco18",
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
      id: "perfectaire-hiultra-wall-single-cfg-4",
      slug: "perfectaire-hiultra-wall-single-cfg-4",
      modelId: "perfectaire-hiultra-wall-single",
      outdoorUnitId: "perfectaire-3pamshqco24",
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
      id: "perfectaire-karda-wall-single-cfg-1",
      slug: "perfectaire-karda-wall-single-cfg-1",
      modelId: "perfectaire-karda-wall-single",
      outdoorUnitId: "perfectaire-2karda18szo20",
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
      id: "perfectaire-karda-wall-single-cfg-2",
      slug: "perfectaire-karda-wall-single-cfg-2",
      modelId: "perfectaire-karda-wall-single",
      outdoorUnitId: "perfectaire-1karda24szo20-5",
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
      id: "perfectaire-hi-multi-xtreme-wall-single-cfg-1",
      slug: "perfectaire-hi-multi-xtreme-wall-single-cfg-1",
      modelId: "perfectaire-hi-multi-xtreme-wall-single",
      outdoorUnitId: "perfectaire-3pamshhqc18-mzo2",
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
      id: "perfectaire-hi-multi-xtreme-wall-single-cfg-2",
      slug: "perfectaire-hi-multi-xtreme-wall-single-cfg-2",
      modelId: "perfectaire-hi-multi-xtreme-wall-single",
      outdoorUnitId: "perfectaire-3pamshhqc24-mzo3",
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
      id: "perfectaire-1pams-wall-single-cfg-1",
      slug: "perfectaire-1pams-wall-single-cfg-1",
      modelId: "perfectaire-1pams-wall-single",
      outdoorUnitId: "perfectaire-1pamshh24-szw-20-5",
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
      id: "perfectaire-1pams-wall-single-cfg-2",
      slug: "perfectaire-1pams-wall-single-cfg-2",
      modelId: "perfectaire-1pams-wall-single",
      outdoorUnitId: "perfectaire-1pamshh24-szw-20-5",
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
      id: "perfectaire-3pams-wall-single-cfg-1",
      slug: "perfectaire-3pams-wall-single-cfg-1",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh18-szo-20-5",
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
      id: "perfectaire-3pams-wall-single-cfg-2",
      slug: "perfectaire-3pams-wall-single-cfg-2",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh09-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-3",
      slug: "perfectaire-3pams-wall-single-cfg-3",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh12-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-4",
      slug: "perfectaire-3pams-wall-single-cfg-4",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh24-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-5",
      slug: "perfectaire-3pams-wall-single-cfg-5",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams18-hh-mzo2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-6",
      slug: "perfectaire-3pams-wall-single-cfg-6",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams18-hh-mzo2",
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
      id: "perfectaire-3pams-wall-single-cfg-7",
      slug: "perfectaire-3pams-wall-single-cfg-7",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams18-hh-mzo2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19.75,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-8",
      slug: "perfectaire-3pams-wall-single-cfg-8",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams27-hh-mzo3",
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
      id: "perfectaire-3pams-wall-single-cfg-9",
      slug: "perfectaire-3pams-wall-single-cfg-9",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams27-hh-mzo3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.6,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-10",
      slug: "perfectaire-3pams-wall-single-cfg-10",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams27-hh-mzo3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.3,
      hspf2: 9.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-11",
      slug: "perfectaire-3pams-wall-single-cfg-11",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams36-hh-mzo4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-12",
      slug: "perfectaire-3pams-wall-single-cfg-12",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams36-hh-mzo4",
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
      id: "perfectaire-3pams-wall-single-cfg-13",
      slug: "perfectaire-3pams-wall-single-cfg-13",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams36-hh-mzo4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-14",
      slug: "perfectaire-3pams-wall-single-cfg-14",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams48-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-15",
      slug: "perfectaire-3pams-wall-single-cfg-15",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams48-hh-mzo5",
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
      id: "perfectaire-3pams-wall-single-cfg-16",
      slug: "perfectaire-3pams-wall-single-cfg-16",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams48-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.05,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-17",
      slug: "perfectaire-3pams-wall-single-cfg-17",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh18-mzo2",
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
      id: "perfectaire-3pams-wall-single-cfg-18",
      slug: "perfectaire-3pams-wall-single-cfg-18",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh18-mzo2",
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
      id: "perfectaire-3pams-wall-single-cfg-19",
      slug: "perfectaire-3pams-wall-single-cfg-19",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh18-mzo2",
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
      id: "perfectaire-3pams-wall-single-cfg-20",
      slug: "perfectaire-3pams-wall-single-cfg-20",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh27-mzo3",
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
      id: "perfectaire-3pams-wall-single-cfg-21",
      slug: "perfectaire-3pams-wall-single-cfg-21",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh27-mzo3",
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
      id: "perfectaire-3pams-wall-single-cfg-22",
      slug: "perfectaire-3pams-wall-single-cfg-22",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh27-mzo3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-23",
      slug: "perfectaire-3pams-wall-single-cfg-23",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh36-mzo4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-24",
      slug: "perfectaire-3pams-wall-single-cfg-24",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh48-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-25",
      slug: "perfectaire-3pams-wall-single-cfg-25",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh48-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-26",
      slug: "perfectaire-3pams-wall-single-cfg-26",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamsh48-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-27",
      slug: "perfectaire-3pams-wall-single-cfg-27",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh09-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-28",
      slug: "perfectaire-3pams-wall-single-cfg-28",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh12-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-29",
      slug: "perfectaire-3pams-wall-single-cfg-29",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh12-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-30",
      slug: "perfectaire-3pams-wall-single-cfg-30",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh12-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-31",
      slug: "perfectaire-3pams-wall-single-cfg-31",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh18-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-32",
      slug: "perfectaire-3pams-wall-single-cfg-32",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh18-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-33",
      slug: "perfectaire-3pams-wall-single-cfg-33",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh18-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-34",
      slug: "perfectaire-3pams-wall-single-cfg-34",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh24-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-35",
      slug: "perfectaire-3pams-wall-single-cfg-35",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh24-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-36",
      slug: "perfectaire-3pams-wall-single-cfg-36",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pamshh12-szo",
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
      id: "perfectaire-3pams-wall-single-cfg-37",
      slug: "perfectaire-3pams-wall-single-cfg-37",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams55-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pams-wall-single-cfg-38",
      slug: "perfectaire-3pams-wall-single-cfg-38",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams55-hh-mzo5",
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
      id: "perfectaire-3pams-wall-single-cfg-39",
      slug: "perfectaire-3pams-wall-single-cfg-39",
      modelId: "perfectaire-3pams-wall-single",
      outdoorUnitId: "perfectaire-3pams55-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 19.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-3pam-wall-single-cfg-1",
      slug: "perfectaire-3pam-wall-single-cfg-1",
      modelId: "perfectaire-3pam-wall-single",
      outdoorUnitId: "perfectaire-3pamshh18-szo",
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
      id: "perfectaire-3pahh-series-central-ducted-cfg-1",
      slug: "perfectaire-3pahh-series-central-ducted-cfg-1",
      modelId: "perfectaire-3pahh-series-central-ducted",
      outdoorUnitId: "perfectaire-3pahhsd18-szo",
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
      id: "perfectaire-3pahh-series-central-ducted-cfg-2",
      slug: "perfectaire-3pahh-series-central-ducted-cfg-2",
      modelId: "perfectaire-3pahh-series-central-ducted",
      outdoorUnitId: "perfectaire-3pahhsd24-szo",
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
      id: "perfectaire-3pahh-series-central-ducted-cfg-3",
      slug: "perfectaire-3pahh-series-central-ducted-cfg-3",
      modelId: "perfectaire-3pahh-series-central-ducted",
      outdoorUnitId: "perfectaire-3pahhsd30-szo",
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
      id: "perfectaire-3pahh-series-central-ducted-cfg-4",
      slug: "perfectaire-3pahh-series-central-ducted-cfg-4",
      modelId: "perfectaire-3pahh-series-central-ducted",
      outdoorUnitId: "perfectaire-3pahhsd36-szo",
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
      id: "perfectaire-3pahh-series-central-ducted-cfg-5",
      slug: "perfectaire-3pahh-series-central-ducted-cfg-5",
      modelId: "perfectaire-3pahh-series-central-ducted",
      outdoorUnitId: "perfectaire-3pahhsd48-szo",
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
      id: "perfectaire-3pahh-series-central-ducted-cfg-6",
      slug: "perfectaire-3pahh-series-central-ducted-cfg-6",
      modelId: "perfectaire-3pahh-series-central-ducted",
      outdoorUnitId: "perfectaire-3pahhsd60-szo",
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
      id: "perfectaire-3pam-series-wall-single-cfg-1",
      slug: "perfectaire-3pam-series-wall-single-cfg-1",
      modelId: "perfectaire-3pam-series-wall-single",
      outdoorUnitId: "perfectaire-3pamshh06-szo",
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
      id: "perfectaire-3pamshh-series-wall-single-cfg-1",
      slug: "perfectaire-3pamshh-series-wall-single-cfg-1",
      modelId: "perfectaire-3pamshh-series-wall-single",
      outdoorUnitId: "perfectaire-3pamshh18-szo-20-5",
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
      id: "perfectaire-3pamshh-series-wall-single-cfg-2",
      slug: "perfectaire-3pamshh-series-wall-single-cfg-2",
      modelId: "perfectaire-3pamshh-series-wall-single",
      outdoorUnitId: "perfectaire-3pamshh24-szo-21",
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
      id: "perfectaire-4pam-series-wall-single-cfg-1",
      slug: "perfectaire-4pam-series-wall-single-cfg-1",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pamsh09b-szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-2",
      slug: "perfectaire-4pam-series-wall-single-cfg-2",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pamsh24b-szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-3",
      slug: "perfectaire-4pam-series-wall-single-cfg-3",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pamshh06-szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-4",
      slug: "perfectaire-4pam-series-wall-single-cfg-4",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pamshh09-szo",
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
      id: "perfectaire-4pam-series-wall-single-cfg-5",
      slug: "perfectaire-4pam-series-wall-single-cfg-5",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pamshh12-szo",
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
      id: "perfectaire-4pam-series-wall-single-cfg-6",
      slug: "perfectaire-4pam-series-wall-single-cfg-6",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pamshh18-szo",
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
      id: "perfectaire-4pam-series-wall-single-cfg-7",
      slug: "perfectaire-4pam-series-wall-single-cfg-7",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pamshh24-szo",
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
      id: "perfectaire-4pam-series-wall-single-cfg-8",
      slug: "perfectaire-4pam-series-wall-single-cfg-8",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams18-hh-mzo2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-9",
      slug: "perfectaire-4pam-series-wall-single-cfg-9",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams18-hh-mzo2",
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
      id: "perfectaire-4pam-series-wall-single-cfg-10",
      slug: "perfectaire-4pam-series-wall-single-cfg-10",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams18-hh-mzo2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-11",
      slug: "perfectaire-4pam-series-wall-single-cfg-11",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams27-hh-mzo3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-12",
      slug: "perfectaire-4pam-series-wall-single-cfg-12",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams27-hh-mzo3",
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
      id: "perfectaire-4pam-series-wall-single-cfg-13",
      slug: "perfectaire-4pam-series-wall-single-cfg-13",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams27-hh-mzo3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 20,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-14",
      slug: "perfectaire-4pam-series-wall-single-cfg-14",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams36-hh-mzo4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-15",
      slug: "perfectaire-4pam-series-wall-single-cfg-15",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams36-hh-mzo4",
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
      id: "perfectaire-4pam-series-wall-single-cfg-16",
      slug: "perfectaire-4pam-series-wall-single-cfg-16",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams36-hh-mzo4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.45,
      hspf2: 10.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-17",
      slug: "perfectaire-4pam-series-wall-single-cfg-17",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams48-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-18",
      slug: "perfectaire-4pam-series-wall-single-cfg-18",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams48-hh-mzo5",
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
      id: "perfectaire-4pam-series-wall-single-cfg-19",
      slug: "perfectaire-4pam-series-wall-single-cfg-19",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams48-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 20.8,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-20",
      slug: "perfectaire-4pam-series-wall-single-cfg-20",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams55-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 21.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-21",
      slug: "perfectaire-4pam-series-wall-single-cfg-21",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams55-hh-mzo5",
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
      id: "perfectaire-4pam-series-wall-single-cfg-22",
      slug: "perfectaire-4pam-series-wall-single-cfg-22",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams55-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 20.7,
      hspf2: 10.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-23",
      slug: "perfectaire-4pam-series-wall-single-cfg-23",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams18-hh-mzo3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-24",
      slug: "perfectaire-4pam-series-wall-single-cfg-24",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams18-hh-mzo3",
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
      id: "perfectaire-4pam-series-wall-single-cfg-25",
      slug: "perfectaire-4pam-series-wall-single-cfg-25",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams18-hh-mzo3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-26",
      slug: "perfectaire-4pam-series-wall-single-cfg-26",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams27-hh-mzo4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-27",
      slug: "perfectaire-4pam-series-wall-single-cfg-27",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams27-hh-mzo4",
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
      id: "perfectaire-4pam-series-wall-single-cfg-28",
      slug: "perfectaire-4pam-series-wall-single-cfg-28",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams27-hh-mzo4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 20,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-29",
      slug: "perfectaire-4pam-series-wall-single-cfg-29",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams36-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-30",
      slug: "perfectaire-4pam-series-wall-single-cfg-30",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams36-hh-mzo5",
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
      id: "perfectaire-4pam-series-wall-single-cfg-31",
      slug: "perfectaire-4pam-series-wall-single-cfg-31",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams36-hh-mzo5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.45,
      hspf2: 10.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-32",
      slug: "perfectaire-4pam-series-wall-single-cfg-32",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams48-hh-mzo6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-33",
      slug: "perfectaire-4pam-series-wall-single-cfg-33",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams48-hh-mzo6",
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
      id: "perfectaire-4pam-series-wall-single-cfg-34",
      slug: "perfectaire-4pam-series-wall-single-cfg-34",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams48-hh-mzo6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 20.8,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-35",
      slug: "perfectaire-4pam-series-wall-single-cfg-35",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams55-hh-mzo6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 21.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "perfectaire-4pam-series-wall-single-cfg-36",
      slug: "perfectaire-4pam-series-wall-single-cfg-36",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams55-hh-mzo6",
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
      id: "perfectaire-4pam-series-wall-single-cfg-37",
      slug: "perfectaire-4pam-series-wall-single-cfg-37",
      modelId: "perfectaire-4pam-series-wall-single",
      outdoorUnitId: "perfectaire-4pams55-hh-mzo6",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 20.7,
      hspf2: 10.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "perfectaire-standard-wall-single-cfg-1",
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
      configurationId: "perfectaire-standard-wall-single-cfg-2",
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
      configurationId: "perfectaire-standard-wall-single-cfg-3",
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
      configurationId: "perfectaire-standard-wall-single-cfg-4",
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
      configurationId: "perfectaire-standard-wall-single-cfg-5",
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
      configurationId: "perfectaire-standard-wall-single-cfg-6",
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
      configurationId: "perfectaire-standard-wall-single-cfg-7",
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
      configurationId: "perfectaire-standard-wall-single-cfg-8",
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
      configurationId: "perfectaire-standard-wall-single-cfg-9",
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
      configurationId: "perfectaire-standard-wall-single-cfg-10",
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
      configurationId: "perfectaire-standard-wall-single-cfg-11",
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
      configurationId: "perfectaire-standard-wall-single-cfg-12",
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
      configurationId: "perfectaire-standard-wall-single-cfg-13",
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
      configurationId: "perfectaire-standard-wall-single-cfg-14",
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
      configurationId: "perfectaire-standard-wall-single-cfg-15",
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
      configurationId: "perfectaire-standard-wall-single-cfg-16",
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
      configurationId: "perfectaire-standard-wall-single-cfg-17",
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
      configurationId: "perfectaire-standard-wall-single-cfg-18",
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
      configurationId: "perfectaire-standard-wall-single-cfg-19",
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
      configurationId: "perfectaire-standard-wall-single-cfg-20",
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
      configurationId: "perfectaire-standard-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-hiultra-wall-single-cfg-1",
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
      configurationId: "perfectaire-hiultra-wall-single-cfg-2",
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
      configurationId: "perfectaire-hiultra-wall-single-cfg-3",
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
      configurationId: "perfectaire-hiultra-wall-single-cfg-4",
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
      configurationId: "perfectaire-karda-wall-single-cfg-1",
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
      configurationId: "perfectaire-karda-wall-single-cfg-2",
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
      configurationId: "perfectaire-hi-multi-xtreme-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-hi-multi-xtreme-wall-single-cfg-2",
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
      configurationId: "perfectaire-1pams-wall-single-cfg-1",
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
      configurationId: "perfectaire-1pams-wall-single-cfg-2",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-1",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-2",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-3",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-4",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pams-wall-single-cfg-6",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pams-wall-single-cfg-8",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pams-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pams-wall-single-cfg-11",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-12",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-13",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-14",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-15",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pams-wall-single-cfg-17",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-18",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-19",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-20",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-21",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-22",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 1.68,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pams-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pams-wall-single-cfg-25",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pams-wall-single-cfg-27",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-28",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-29",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-30",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-31",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-32",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-33",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-34",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-35",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-36",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pams-wall-single-cfg-38",
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
      configurationId: "perfectaire-3pams-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-3pam-wall-single-cfg-1",
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
      configurationId: "perfectaire-3pahh-series-central-ducted-cfg-1",
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
      configurationId: "perfectaire-3pahh-series-central-ducted-cfg-2",
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
      configurationId: "perfectaire-3pahh-series-central-ducted-cfg-3",
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
      configurationId: "perfectaire-3pahh-series-central-ducted-cfg-4",
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
      configurationId: "perfectaire-3pahh-series-central-ducted-cfg-5",
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
      configurationId: "perfectaire-3pahh-series-central-ducted-cfg-6",
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
      configurationId: "perfectaire-3pam-series-wall-single-cfg-1",
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
      configurationId: "perfectaire-3pamshh-series-wall-single-cfg-1",
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
      configurationId: "perfectaire-3pamshh-series-wall-single-cfg-2",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.01,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-3",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-4",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-5",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-6",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-7",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-9",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-11",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-12",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-15",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-18",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-20",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-21",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-24",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-26",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-27",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-30",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-33",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "perfectaire-4pam-series-wall-single-cfg-35",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-36",
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
      configurationId: "perfectaire-4pam-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.05,
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
