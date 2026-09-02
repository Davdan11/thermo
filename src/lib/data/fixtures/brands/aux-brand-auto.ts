import type { BrandDataset } from "../../types";

export const auxbrandDataset: BrandDataset = {
  brand: {
    id: "aux-brand",
    slug: "aux-brand",
    name: "AUX",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "aux-brand-c-series",
      slug: "aux-brand-c-series",
      name: "C-Series",
      brandId: "aux-brand",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-standard",
      slug: "aux-brand-standard",
      name: "Standard",
      brandId: "aux-brand",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "aux-brand-c-series-wall-single",
      slug: "aux-brand-c-series-wall-single",
      name: "C-Series",
      seriesId: "aux-brand-c-series",
      brandId: "aux-brand",
      modelNumber: "C-Series",
      normalizedModelNumber: "c-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 33600,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 20,
      seer2Max: 25,
      hspf2Min: 8.5,
      hspf2Max: 10.5,
      cop5FMin: 1.83,
      cop5FMax: 2.52,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-standard-wall-single",
      slug: "aux-brand-standard-wall-single",
      name: "Standard",
      seriesId: "aux-brand-standard",
      brandId: "aux-brand",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 48000,
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
    }
  ],
  outdoorUnits: [
    {
      id: "aux-brand-ajan09hp230v1co",
      modelNumber: "AJAN09HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-afeb09hp230v1co",
      modelNumber: "AFEB09HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-amar09hp230v1co",
      modelNumber: "AMAR09HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-amar09hp115v1co",
      modelNumber: "AMAR09HP115V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-afeb09hp115v1co",
      modelNumber: "AFEB09HP115V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-amar12hp115v1co",
      modelNumber: "AMAR12HP115V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-afeb12hp115v1co",
      modelNumber: "AFEB12HP115V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-afeb12hp230v1co",
      modelNumber: "AFEB12HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-amar12hp230v1co",
      modelNumber: "AMAR12HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-amar18hp230v1co",
      modelNumber: "AMAR18HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-afeb24hp230v1co",
      modelNumber: "AFEB24HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-amar24hp230v1co",
      modelNumber: "AMAR24HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ajan09hp115v1co",
      modelNumber: "AJAN09HP115V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ajan12hp115v1co",
      modelNumber: "AJAN12HP115V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ajan18hp230v1co",
      modelNumber: "AJAN18HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ajan24hp230v1co",
      modelNumber: "AJAN24HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ajan36hp230v1co",
      modelNumber: "AJAN36HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ajan12hp230v1co",
      modelNumber: "AJAN12HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-afeb18hp230v2co",
      modelNumber: "AFEB18HP230V2CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-amar24hp230v2co",
      modelNumber: "AMAR24HP230V2CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aum20sw12hp115v1-o",
      modelNumber: "AUM20SW12HP115V1/O",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aum20sw24hp230v1-o",
      modelNumber: "AUM20SW24HP230V1/O",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aum20sw09hp230v1-o",
      modelNumber: "AUM20SW09HP230V1/O",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aum20sw09hp115v1-o",
      modelNumber: "AUM20SW09HP115V1/O",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aum20sw12hp230v1-o",
      modelNumber: "AUM20SW12HP230V1/O",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aum20sw18hp230v1-o",
      modelNumber: "AUM20SW18HP230V1/O",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-afeb18hp230v1co",
      modelNumber: "AFEB18HP230V1CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aspr18hpmulo",
      modelNumber: "ASPR18HPMULO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aspr24hpmulo",
      modelNumber: "ASPR24HPMULO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aspr30hpmulo",
      modelNumber: "ASPR30HPMULO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aspr36hpmulo",
      modelNumber: "ASPR36HPMULO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-aspr42hpmulo",
      modelNumber: "ASPR42HPMULO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-asum18hpmulo",
      modelNumber: "ASUM18HPMULO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-asum36hpmulo",
      modelNumber: "ASUM36HPMULO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-asum42hpmulo",
      modelNumber: "ASUM42HPMULO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-asum24hpmulo",
      modelNumber: "ASUM24HPMULO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-asw-h36i9b2-r3di-b8",
      modelNumber: "ASW-H36I9B2/*R3DI-B8",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ajan36hp230v2co",
      modelNumber: "AJAN36HP230V2CO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu24hpv1ao",
      modelNumber: "AHU24HPV1AO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu30hpv1ao",
      modelNumber: "AHU30HPV1AO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu36hpv1ao",
      modelNumber: "AHU36HPV1AO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu48hpv1ao",
      modelNumber: "AHU48HPV1AO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu60hpv1ao",
      modelNumber: "AHU60HPV1AO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu18hpv1ao",
      modelNumber: "AHU18HPV1AO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu18hpv1bo",
      modelNumber: "AHU18HPV1BO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu24hpv1bo",
      modelNumber: "AHU24HPV1BO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu30hpv1bo",
      modelNumber: "AHU30HPV1BO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu36hpv1bo",
      modelNumber: "AHU36HPV1BO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu48hpv1bo",
      modelNumber: "AHU48HPV1BO",
      brandId: "aux-brand",
      refrigerant: null as any,
    },
    {
      id: "aux-brand-ahu60hpv1bo",
      modelNumber: "AHU60HPV1BO",
      brandId: "aux-brand",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "aux-brand-c-series-wall-single-cfg-1",
      slug: "aux-brand-c-series-wall-single-cfg-1",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-ajan09hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 22,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-2",
      slug: "aux-brand-c-series-wall-single-cfg-2",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-afeb09hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-3",
      slug: "aux-brand-c-series-wall-single-cfg-3",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-amar09hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9200,
      coolingCapacityMaxBtu: 9200,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-4",
      slug: "aux-brand-c-series-wall-single-cfg-4",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-amar09hp115v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9200,
      coolingCapacityMaxBtu: 9200,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-5",
      slug: "aux-brand-c-series-wall-single-cfg-5",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-afeb09hp115v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-6",
      slug: "aux-brand-c-series-wall-single-cfg-6",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-amar12hp115v1co",
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
      id: "aux-brand-c-series-wall-single-cfg-7",
      slug: "aux-brand-c-series-wall-single-cfg-7",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-afeb12hp115v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-8",
      slug: "aux-brand-c-series-wall-single-cfg-8",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-afeb12hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-9",
      slug: "aux-brand-c-series-wall-single-cfg-9",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-amar12hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-10",
      slug: "aux-brand-c-series-wall-single-cfg-10",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-amar18hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-11",
      slug: "aux-brand-c-series-wall-single-cfg-11",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-afeb24hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-12",
      slug: "aux-brand-c-series-wall-single-cfg-12",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-amar24hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-13",
      slug: "aux-brand-c-series-wall-single-cfg-13",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-ajan09hp115v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-14",
      slug: "aux-brand-c-series-wall-single-cfg-14",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-ajan12hp115v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-15",
      slug: "aux-brand-c-series-wall-single-cfg-15",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-ajan18hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-16",
      slug: "aux-brand-c-series-wall-single-cfg-16",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-ajan24hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-17",
      slug: "aux-brand-c-series-wall-single-cfg-17",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-ajan36hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 20,
      hspf2: 8.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-18",
      slug: "aux-brand-c-series-wall-single-cfg-18",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-ajan12hp230v1co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-19",
      slug: "aux-brand-c-series-wall-single-cfg-19",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-afeb18hp230v2co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-20",
      slug: "aux-brand-c-series-wall-single-cfg-20",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-amar24hp230v2co",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-21",
      slug: "aux-brand-c-series-wall-single-cfg-21",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-aum20sw12hp115v1-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-22",
      slug: "aux-brand-c-series-wall-single-cfg-22",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-aum20sw24hp230v1-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-23",
      slug: "aux-brand-c-series-wall-single-cfg-23",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-aum20sw09hp230v1-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 22,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-24",
      slug: "aux-brand-c-series-wall-single-cfg-24",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-aum20sw09hp115v1-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-25",
      slug: "aux-brand-c-series-wall-single-cfg-25",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-aum20sw12hp230v1-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-c-series-wall-single-cfg-26",
      slug: "aux-brand-c-series-wall-single-cfg-26",
      modelId: "aux-brand-c-series-wall-single",
      outdoorUnitId: "aux-brand-aum20sw18hp230v1-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-standard-wall-single-cfg-1",
      slug: "aux-brand-standard-wall-single-cfg-1",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-afeb18hp230v1co",
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
      id: "aux-brand-standard-wall-single-cfg-2",
      slug: "aux-brand-standard-wall-single-cfg-2",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr18hpmulo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17700,
      coolingCapacityMaxBtu: 17700,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-standard-wall-single-cfg-3",
      slug: "aux-brand-standard-wall-single-cfg-3",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr24hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-4",
      slug: "aux-brand-standard-wall-single-cfg-4",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr30hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-5",
      slug: "aux-brand-standard-wall-single-cfg-5",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr36hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-6",
      slug: "aux-brand-standard-wall-single-cfg-6",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr42hpmulo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 37000,
      coolingCapacityMaxBtu: 37000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-standard-wall-single-cfg-7",
      slug: "aux-brand-standard-wall-single-cfg-7",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum18hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-8",
      slug: "aux-brand-standard-wall-single-cfg-8",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum36hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-9",
      slug: "aux-brand-standard-wall-single-cfg-9",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum42hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-10",
      slug: "aux-brand-standard-wall-single-cfg-10",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum24hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-11",
      slug: "aux-brand-standard-wall-single-cfg-11",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asw-h36i9b2-r3di-b8",
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
      id: "aux-brand-standard-wall-single-cfg-12",
      slug: "aux-brand-standard-wall-single-cfg-12",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ajan36hp230v2co",
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
      id: "aux-brand-standard-wall-single-cfg-13",
      slug: "aux-brand-standard-wall-single-cfg-13",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu24hpv1ao",
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
      id: "aux-brand-standard-wall-single-cfg-14",
      slug: "aux-brand-standard-wall-single-cfg-14",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu30hpv1ao",
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
      id: "aux-brand-standard-wall-single-cfg-15",
      slug: "aux-brand-standard-wall-single-cfg-15",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu36hpv1ao",
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
      id: "aux-brand-standard-wall-single-cfg-16",
      slug: "aux-brand-standard-wall-single-cfg-16",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu48hpv1ao",
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
      id: "aux-brand-standard-wall-single-cfg-17",
      slug: "aux-brand-standard-wall-single-cfg-17",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu60hpv1ao",
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
      id: "aux-brand-standard-wall-single-cfg-18",
      slug: "aux-brand-standard-wall-single-cfg-18",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu18hpv1ao",
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
      id: "aux-brand-standard-wall-single-cfg-19",
      slug: "aux-brand-standard-wall-single-cfg-19",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu18hpv1bo",
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
      id: "aux-brand-standard-wall-single-cfg-20",
      slug: "aux-brand-standard-wall-single-cfg-20",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu24hpv1bo",
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
      id: "aux-brand-standard-wall-single-cfg-21",
      slug: "aux-brand-standard-wall-single-cfg-21",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu30hpv1bo",
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
      id: "aux-brand-standard-wall-single-cfg-22",
      slug: "aux-brand-standard-wall-single-cfg-22",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu36hpv1bo",
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
      id: "aux-brand-standard-wall-single-cfg-23",
      slug: "aux-brand-standard-wall-single-cfg-23",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu48hpv1bo",
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
      id: "aux-brand-standard-wall-single-cfg-24",
      slug: "aux-brand-standard-wall-single-cfg-24",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-ahu60hpv1bo",
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
      id: "aux-brand-standard-wall-single-cfg-25",
      slug: "aux-brand-standard-wall-single-cfg-25",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr18hpmulo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17700,
      coolingCapacityMaxBtu: 17700,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-standard-wall-single-cfg-26",
      slug: "aux-brand-standard-wall-single-cfg-26",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr24hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-27",
      slug: "aux-brand-standard-wall-single-cfg-27",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr30hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-28",
      slug: "aux-brand-standard-wall-single-cfg-28",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr36hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-29",
      slug: "aux-brand-standard-wall-single-cfg-29",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr42hpmulo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 37000,
      coolingCapacityMaxBtu: 37000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-standard-wall-single-cfg-30",
      slug: "aux-brand-standard-wall-single-cfg-30",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum18hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-31",
      slug: "aux-brand-standard-wall-single-cfg-31",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum24hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-32",
      slug: "aux-brand-standard-wall-single-cfg-32",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum36hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-33",
      slug: "aux-brand-standard-wall-single-cfg-33",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum42hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-34",
      slug: "aux-brand-standard-wall-single-cfg-34",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr18hpmulo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17700,
      coolingCapacityMaxBtu: 17700,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-standard-wall-single-cfg-35",
      slug: "aux-brand-standard-wall-single-cfg-35",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr24hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-36",
      slug: "aux-brand-standard-wall-single-cfg-36",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr30hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-37",
      slug: "aux-brand-standard-wall-single-cfg-37",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr36hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-38",
      slug: "aux-brand-standard-wall-single-cfg-38",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-aspr42hpmulo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 37000,
      coolingCapacityMaxBtu: 37000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aux-brand-standard-wall-single-cfg-39",
      slug: "aux-brand-standard-wall-single-cfg-39",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum18hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-40",
      slug: "aux-brand-standard-wall-single-cfg-40",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum24hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-41",
      slug: "aux-brand-standard-wall-single-cfg-41",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum36hpmulo",
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
      id: "aux-brand-standard-wall-single-cfg-42",
      slug: "aux-brand-standard-wall-single-cfg-42",
      modelId: "aux-brand-standard-wall-single",
      outdoorUnitId: "aux-brand-asum42hpmulo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-8",
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
      configurationId: "aux-brand-c-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-10",
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
      configurationId: "aux-brand-c-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.09,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-15",
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
      configurationId: "aux-brand-c-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-17",
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
      configurationId: "aux-brand-c-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.09,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-c-series-wall-single-cfg-26",
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
      configurationId: "aux-brand-standard-wall-single-cfg-1",
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
      configurationId: "aux-brand-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-3",
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
      configurationId: "aux-brand-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-6",
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
      configurationId: "aux-brand-standard-wall-single-cfg-7",
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
      configurationId: "aux-brand-standard-wall-single-cfg-8",
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
      configurationId: "aux-brand-standard-wall-single-cfg-9",
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
      configurationId: "aux-brand-standard-wall-single-cfg-10",
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
      configurationId: "aux-brand-standard-wall-single-cfg-11",
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
      configurationId: "aux-brand-standard-wall-single-cfg-12",
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
      configurationId: "aux-brand-standard-wall-single-cfg-13",
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
      configurationId: "aux-brand-standard-wall-single-cfg-14",
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
      configurationId: "aux-brand-standard-wall-single-cfg-15",
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
      configurationId: "aux-brand-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-18",
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
      configurationId: "aux-brand-standard-wall-single-cfg-19",
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
      configurationId: "aux-brand-standard-wall-single-cfg-20",
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
      configurationId: "aux-brand-standard-wall-single-cfg-21",
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
      configurationId: "aux-brand-standard-wall-single-cfg-22",
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
      configurationId: "aux-brand-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-25",
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
      configurationId: "aux-brand-standard-wall-single-cfg-26",
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
      configurationId: "aux-brand-standard-wall-single-cfg-27",
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
      configurationId: "aux-brand-standard-wall-single-cfg-28",
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
      configurationId: "aux-brand-standard-wall-single-cfg-29",
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
      configurationId: "aux-brand-standard-wall-single-cfg-30",
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
      configurationId: "aux-brand-standard-wall-single-cfg-31",
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
      configurationId: "aux-brand-standard-wall-single-cfg-32",
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
      configurationId: "aux-brand-standard-wall-single-cfg-33",
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
      configurationId: "aux-brand-standard-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-35",
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
      configurationId: "aux-brand-standard-wall-single-cfg-36",
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
      configurationId: "aux-brand-standard-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aux-brand-standard-wall-single-cfg-39",
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
      configurationId: "aux-brand-standard-wall-single-cfg-40",
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
      configurationId: "aux-brand-standard-wall-single-cfg-41",
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
      configurationId: "aux-brand-standard-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
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
