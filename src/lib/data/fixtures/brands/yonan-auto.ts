import type { BrandDataset } from "../../types";

export const yonanDataset: BrandDataset = {
  brand: {
    id: "yonan",
    slug: "yonan",
    name: "YONAN",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "yonan-standard",
      slug: "yonan-standard",
      name: "Standard",
      brandId: "yonan",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "yonan-standard-wall-single",
      slug: "yonan-standard-wall-single",
      name: "Standard",
      seriesId: "yonan-standard",
      brandId: "yonan",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6000,
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
    }
  ],
  outdoorUnits: [
    {
      id: "yonan-ysa19-09hrn1b",
      modelNumber: "YSA19-09HRN1B",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa19-09hrn1",
      modelNumber: "YSA19-09HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa19-18hrn1",
      modelNumber: "YSA19-18HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa21-09hrn1b",
      modelNumber: "YSA21-09HRN1B",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa21-12hrn1b",
      modelNumber: "YSA21-12HRN1B",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa21-09hrn1",
      modelNumber: "YSA21-09HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa21-12hrn1",
      modelNumber: "YSA21-12HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa21-18hrn1",
      modelNumber: "YSA21-18HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa21-24hrn1",
      modelNumber: "YSA21-24HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa25-09hrn1",
      modelNumber: "YSA25-09HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa25-12hrn1",
      modelNumber: "YSA25-12HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa25-18hrn1",
      modelNumber: "YSA25-18HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa25-24hrn1",
      modelNumber: "YSA25-24HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysa19-36hrn1",
      modelNumber: "YSA19-36HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysmo-18hrn1",
      modelNumber: "YSMO-18HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysmo-36hrn1",
      modelNumber: "YSMO-36HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysmo-48hrn1",
      modelNumber: "YSMO-48HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysmo-30hrn1",
      modelNumber: "YSMO-30HRN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-yox-09hfn1",
      modelNumber: "YOX-09HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-yox-12hfn1",
      modelNumber: "YOX-12HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-yox-18hfn1",
      modelNumber: "YOX-18HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-yod-24hfn1",
      modelNumber: "YOD-24HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-yod-36hfn1",
      modelNumber: "YOD-36HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-yoe-48hfn1",
      modelNumber: "YOE-48HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-yoe-60hfn1",
      modelNumber: "YOE-60HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-12hrfn1b-c1ou",
      modelNumber: "YS-12HRFN1B-C1OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-09hrfn1-c1ou",
      modelNumber: "YS-09HRFN1-C1OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-12hrfn1-c1ou",
      modelNumber: "YS-12HRFN1-C1OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-18hrfn1-c1ou",
      modelNumber: "YS-18HRFN1-C1OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-24hrfn1-c1ou",
      modelNumber: "YS-24HRFN1-C1OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-09hrfn1-c5ou",
      modelNumber: "YS-09HRFN1-C5OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-12hrfn1-c5ou",
      modelNumber: "YS-12HRFN1-C5OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-18hrfn1-c5ou",
      modelNumber: "YS-18HRFN1-C5OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-24hrfn1-c5ou",
      modelNumber: "YS-24HRFN1-C5OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-09hrfn1-e0ou",
      modelNumber: "YS-09HRFN1-E0OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ys-12hrfn1-e0ou",
      modelNumber: "YS-12HRFN1-E0OU",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysmo-18hfn1",
      modelNumber: "YSMO-18HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysmo-27hfn1",
      modelNumber: "YSMO-27HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysmo-36hfn1",
      modelNumber: "YSMO-36HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysmo-48hfn1",
      modelNumber: "YSMO-48HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    },
    {
      id: "yonan-ysmo-55hfn1",
      modelNumber: "YSMO-55HFN1",
      brandId: "yonan",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "yonan-standard-wall-single-cfg-1",
      slug: "yonan-standard-wall-single-cfg-1",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa19-09hrn1b",
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
      id: "yonan-standard-wall-single-cfg-2",
      slug: "yonan-standard-wall-single-cfg-2",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa19-09hrn1",
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
      id: "yonan-standard-wall-single-cfg-3",
      slug: "yonan-standard-wall-single-cfg-3",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa19-18hrn1",
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
      id: "yonan-standard-wall-single-cfg-4",
      slug: "yonan-standard-wall-single-cfg-4",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa21-09hrn1b",
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
      id: "yonan-standard-wall-single-cfg-5",
      slug: "yonan-standard-wall-single-cfg-5",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa21-12hrn1b",
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
      id: "yonan-standard-wall-single-cfg-6",
      slug: "yonan-standard-wall-single-cfg-6",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa21-09hrn1",
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
      id: "yonan-standard-wall-single-cfg-7",
      slug: "yonan-standard-wall-single-cfg-7",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa21-12hrn1",
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
      id: "yonan-standard-wall-single-cfg-8",
      slug: "yonan-standard-wall-single-cfg-8",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa21-18hrn1",
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
      id: "yonan-standard-wall-single-cfg-9",
      slug: "yonan-standard-wall-single-cfg-9",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa21-24hrn1",
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
      id: "yonan-standard-wall-single-cfg-10",
      slug: "yonan-standard-wall-single-cfg-10",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa25-09hrn1",
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
      id: "yonan-standard-wall-single-cfg-11",
      slug: "yonan-standard-wall-single-cfg-11",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa25-12hrn1",
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
      id: "yonan-standard-wall-single-cfg-12",
      slug: "yonan-standard-wall-single-cfg-12",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa25-18hrn1",
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
      id: "yonan-standard-wall-single-cfg-13",
      slug: "yonan-standard-wall-single-cfg-13",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa25-24hrn1",
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
      id: "yonan-standard-wall-single-cfg-14",
      slug: "yonan-standard-wall-single-cfg-14",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysa19-36hrn1",
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
      id: "yonan-standard-wall-single-cfg-15",
      slug: "yonan-standard-wall-single-cfg-15",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-18hrn1",
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
      id: "yonan-standard-wall-single-cfg-16",
      slug: "yonan-standard-wall-single-cfg-16",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-18hrn1",
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
      id: "yonan-standard-wall-single-cfg-17",
      slug: "yonan-standard-wall-single-cfg-17",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-18hrn1",
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
      id: "yonan-standard-wall-single-cfg-18",
      slug: "yonan-standard-wall-single-cfg-18",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-36hrn1",
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
      id: "yonan-standard-wall-single-cfg-19",
      slug: "yonan-standard-wall-single-cfg-19",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-48hrn1",
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
      id: "yonan-standard-wall-single-cfg-20",
      slug: "yonan-standard-wall-single-cfg-20",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-48hrn1",
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
      id: "yonan-standard-wall-single-cfg-21",
      slug: "yonan-standard-wall-single-cfg-21",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-30hrn1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "yonan-standard-wall-single-cfg-22",
      slug: "yonan-standard-wall-single-cfg-22",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-30hrn1",
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
      id: "yonan-standard-wall-single-cfg-23",
      slug: "yonan-standard-wall-single-cfg-23",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-30hrn1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "yonan-standard-wall-single-cfg-24",
      slug: "yonan-standard-wall-single-cfg-24",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yox-09hfn1",
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
      id: "yonan-standard-wall-single-cfg-25",
      slug: "yonan-standard-wall-single-cfg-25",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yox-09hfn1",
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
      id: "yonan-standard-wall-single-cfg-26",
      slug: "yonan-standard-wall-single-cfg-26",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yox-12hfn1",
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
      id: "yonan-standard-wall-single-cfg-27",
      slug: "yonan-standard-wall-single-cfg-27",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yox-12hfn1",
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
      id: "yonan-standard-wall-single-cfg-28",
      slug: "yonan-standard-wall-single-cfg-28",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yox-18hfn1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "yonan-standard-wall-single-cfg-29",
      slug: "yonan-standard-wall-single-cfg-29",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yox-18hfn1",
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
      id: "yonan-standard-wall-single-cfg-30",
      slug: "yonan-standard-wall-single-cfg-30",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yox-18hfn1",
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
      id: "yonan-standard-wall-single-cfg-31",
      slug: "yonan-standard-wall-single-cfg-31",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yod-24hfn1",
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
      id: "yonan-standard-wall-single-cfg-32",
      slug: "yonan-standard-wall-single-cfg-32",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yod-24hfn1",
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
      id: "yonan-standard-wall-single-cfg-33",
      slug: "yonan-standard-wall-single-cfg-33",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yod-24hfn1",
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
      id: "yonan-standard-wall-single-cfg-34",
      slug: "yonan-standard-wall-single-cfg-34",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yod-36hfn1",
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
      id: "yonan-standard-wall-single-cfg-35",
      slug: "yonan-standard-wall-single-cfg-35",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yod-36hfn1",
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
      id: "yonan-standard-wall-single-cfg-36",
      slug: "yonan-standard-wall-single-cfg-36",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yod-36hfn1",
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
      id: "yonan-standard-wall-single-cfg-37",
      slug: "yonan-standard-wall-single-cfg-37",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yoe-48hfn1",
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
      id: "yonan-standard-wall-single-cfg-38",
      slug: "yonan-standard-wall-single-cfg-38",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yoe-48hfn1",
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
      id: "yonan-standard-wall-single-cfg-39",
      slug: "yonan-standard-wall-single-cfg-39",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yoe-48hfn1",
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
      id: "yonan-standard-wall-single-cfg-40",
      slug: "yonan-standard-wall-single-cfg-40",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yoe-60hfn1",
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
      id: "yonan-standard-wall-single-cfg-41",
      slug: "yonan-standard-wall-single-cfg-41",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-yoe-60hfn1",
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
      id: "yonan-standard-wall-single-cfg-42",
      slug: "yonan-standard-wall-single-cfg-42",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-12hrfn1b-c1ou",
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
      id: "yonan-standard-wall-single-cfg-43",
      slug: "yonan-standard-wall-single-cfg-43",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-09hrfn1-c1ou",
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
      id: "yonan-standard-wall-single-cfg-44",
      slug: "yonan-standard-wall-single-cfg-44",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-12hrfn1-c1ou",
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
      id: "yonan-standard-wall-single-cfg-45",
      slug: "yonan-standard-wall-single-cfg-45",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-18hrfn1-c1ou",
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
      id: "yonan-standard-wall-single-cfg-46",
      slug: "yonan-standard-wall-single-cfg-46",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-24hrfn1-c1ou",
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
      id: "yonan-standard-wall-single-cfg-47",
      slug: "yonan-standard-wall-single-cfg-47",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-09hrfn1-c5ou",
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
      id: "yonan-standard-wall-single-cfg-48",
      slug: "yonan-standard-wall-single-cfg-48",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-12hrfn1-c5ou",
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
      id: "yonan-standard-wall-single-cfg-49",
      slug: "yonan-standard-wall-single-cfg-49",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-18hrfn1-c5ou",
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
      id: "yonan-standard-wall-single-cfg-50",
      slug: "yonan-standard-wall-single-cfg-50",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-24hrfn1-c5ou",
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
      id: "yonan-standard-wall-single-cfg-51",
      slug: "yonan-standard-wall-single-cfg-51",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-09hrfn1-e0ou",
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
      id: "yonan-standard-wall-single-cfg-52",
      slug: "yonan-standard-wall-single-cfg-52",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ys-12hrfn1-e0ou",
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
      id: "yonan-standard-wall-single-cfg-53",
      slug: "yonan-standard-wall-single-cfg-53",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-18hfn1",
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
      id: "yonan-standard-wall-single-cfg-54",
      slug: "yonan-standard-wall-single-cfg-54",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-18hfn1",
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
      id: "yonan-standard-wall-single-cfg-55",
      slug: "yonan-standard-wall-single-cfg-55",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-18hfn1",
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
      id: "yonan-standard-wall-single-cfg-56",
      slug: "yonan-standard-wall-single-cfg-56",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-27hfn1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "yonan-standard-wall-single-cfg-57",
      slug: "yonan-standard-wall-single-cfg-57",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-27hfn1",
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
      id: "yonan-standard-wall-single-cfg-58",
      slug: "yonan-standard-wall-single-cfg-58",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-27hfn1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "yonan-standard-wall-single-cfg-59",
      slug: "yonan-standard-wall-single-cfg-59",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-36hfn1",
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
      id: "yonan-standard-wall-single-cfg-60",
      slug: "yonan-standard-wall-single-cfg-60",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-48hfn1",
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
      id: "yonan-standard-wall-single-cfg-61",
      slug: "yonan-standard-wall-single-cfg-61",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-48hfn1",
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
      id: "yonan-standard-wall-single-cfg-62",
      slug: "yonan-standard-wall-single-cfg-62",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-55hfn1",
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
      id: "yonan-standard-wall-single-cfg-63",
      slug: "yonan-standard-wall-single-cfg-63",
      modelId: "yonan-standard-wall-single",
      outdoorUnitId: "yonan-ysmo-55hfn1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "yonan-standard-wall-single-cfg-1",
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
      configurationId: "yonan-standard-wall-single-cfg-2",
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
      configurationId: "yonan-standard-wall-single-cfg-3",
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
      configurationId: "yonan-standard-wall-single-cfg-4",
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
      configurationId: "yonan-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-6",
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
      configurationId: "yonan-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-8",
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
      configurationId: "yonan-standard-wall-single-cfg-9",
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
      configurationId: "yonan-standard-wall-single-cfg-10",
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
      configurationId: "yonan-standard-wall-single-cfg-11",
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
      configurationId: "yonan-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-14",
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
      configurationId: "yonan-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-17",
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
      configurationId: "yonan-standard-wall-single-cfg-18",
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
      configurationId: "yonan-standard-wall-single-cfg-19",
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
      configurationId: "yonan-standard-wall-single-cfg-20",
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
      configurationId: "yonan-standard-wall-single-cfg-21",
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
      configurationId: "yonan-standard-wall-single-cfg-22",
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
      configurationId: "yonan-standard-wall-single-cfg-23",
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
      configurationId: "yonan-standard-wall-single-cfg-24",
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
      configurationId: "yonan-standard-wall-single-cfg-25",
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
      configurationId: "yonan-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-28",
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
      configurationId: "yonan-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-31",
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
      configurationId: "yonan-standard-wall-single-cfg-32",
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
      configurationId: "yonan-standard-wall-single-cfg-33",
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
      configurationId: "yonan-standard-wall-single-cfg-34",
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
      configurationId: "yonan-standard-wall-single-cfg-35",
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
      configurationId: "yonan-standard-wall-single-cfg-36",
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
      configurationId: "yonan-standard-wall-single-cfg-37",
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
      configurationId: "yonan-standard-wall-single-cfg-38",
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
      configurationId: "yonan-standard-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-40",
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
      configurationId: "yonan-standard-wall-single-cfg-41",
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
      configurationId: "yonan-standard-wall-single-cfg-42",
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
      configurationId: "yonan-standard-wall-single-cfg-43",
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
      configurationId: "yonan-standard-wall-single-cfg-44",
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
      configurationId: "yonan-standard-wall-single-cfg-45",
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
      configurationId: "yonan-standard-wall-single-cfg-46",
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
      configurationId: "yonan-standard-wall-single-cfg-47",
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
      configurationId: "yonan-standard-wall-single-cfg-48",
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
      configurationId: "yonan-standard-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-51",
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
      configurationId: "yonan-standard-wall-single-cfg-52",
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
      configurationId: "yonan-standard-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "yonan-standard-wall-single-cfg-55",
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
      configurationId: "yonan-standard-wall-single-cfg-56",
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
      configurationId: "yonan-standard-wall-single-cfg-57",
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
      configurationId: "yonan-standard-wall-single-cfg-58",
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
      configurationId: "yonan-standard-wall-single-cfg-59",
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
      configurationId: "yonan-standard-wall-single-cfg-60",
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
      configurationId: "yonan-standard-wall-single-cfg-61",
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
      configurationId: "yonan-standard-wall-single-cfg-62",
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
      configurationId: "yonan-standard-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
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
