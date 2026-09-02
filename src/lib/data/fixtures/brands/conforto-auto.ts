import type { BrandDataset } from "../../types";

export const confortoDataset: BrandDataset = {
  brand: {
    id: "conforto",
    slug: "conforto",
    name: "CONFORTO",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "conforto-standard",
      slug: "conforto-standard",
      name: "Standard",
      brandId: "conforto",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "conforto-mh-series",
      slug: "conforto-mh-series",
      name: "MH series",
      brandId: "conforto",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "conforto-mhah-series",
      slug: "conforto-mhah-series",
      name: "MHAH Series",
      brandId: "conforto",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "conforto-standard-wall-single",
      slug: "conforto-standard-wall-single",
      name: "Standard",
      seriesId: "conforto-standard",
      brandId: "conforto",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 24000,
      heatingCapacity5FMaxBtu: 24000,
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
      id: "conforto-mh-series-wall-single",
      slug: "conforto-mh-series-wall-single",
      name: "MH series",
      seriesId: "conforto-mh-series",
      brandId: "conforto",
      modelNumber: "MH series",
      normalizedModelNumber: "mh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 19,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 13.6,
      cop5FMin: 1.75,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "conforto-mhah-series-central-ducted",
      slug: "conforto-mhah-series-central-ducted",
      name: "MHAH Series",
      seriesId: "conforto-mhah-series",
      brandId: "conforto",
      modelNumber: "MHAH Series",
      normalizedModelNumber: "mhah-series",
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
    }
  ],
  outdoorUnits: [
    {
      id: "conforto-adsz136da",
      modelNumber: "ADSZ136DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsz106da",
      modelNumber: "MHSZ106DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsz109da",
      modelNumber: "MHSZ109DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsz112da",
      modelNumber: "MHSZ112DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsz118da",
      modelNumber: "MHSZ118DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsz124da",
      modelNumber: "MHSZ124DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhmz218da",
      modelNumber: "MHMZ218DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhmz327da",
      modelNumber: "MHMZ327DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhmz436da",
      modelNumber: "MHMZ436DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhmz548da",
      modelNumber: "MHMZ548DA",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsd118dacfc",
      modelNumber: "MHSD118DACFC",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsd124dacfc",
      modelNumber: "MHSD124DACFC",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsd130dacfc",
      modelNumber: "MHSD130DACFC",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsd136dacfc",
      modelNumber: "MHSD136DACFC",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsd148dacfc",
      modelNumber: "MHSD148DACFC",
      brandId: "conforto",
      refrigerant: null as any,
    },
    {
      id: "conforto-mhsd160dacfc",
      modelNumber: "MHSD160DACFC",
      brandId: "conforto",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "conforto-standard-wall-single-cfg-1",
      slug: "conforto-standard-wall-single-cfg-1",
      modelId: "conforto-standard-wall-single",
      outdoorUnitId: "conforto-adsz136da",
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
      id: "conforto-mh-series-wall-single-cfg-1",
      slug: "conforto-mh-series-wall-single-cfg-1",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhsz106da",
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
      id: "conforto-mh-series-wall-single-cfg-2",
      slug: "conforto-mh-series-wall-single-cfg-2",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhsz109da",
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
      id: "conforto-mh-series-wall-single-cfg-3",
      slug: "conforto-mh-series-wall-single-cfg-3",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhsz112da",
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
      id: "conforto-mh-series-wall-single-cfg-4",
      slug: "conforto-mh-series-wall-single-cfg-4",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhsz118da",
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
      id: "conforto-mh-series-wall-single-cfg-5",
      slug: "conforto-mh-series-wall-single-cfg-5",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhsz124da",
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
      id: "conforto-mh-series-wall-single-cfg-6",
      slug: "conforto-mh-series-wall-single-cfg-6",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhsz109da",
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
      id: "conforto-mh-series-wall-single-cfg-7",
      slug: "conforto-mh-series-wall-single-cfg-7",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhsz112da",
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
      id: "conforto-mh-series-wall-single-cfg-8",
      slug: "conforto-mh-series-wall-single-cfg-8",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhsz118da",
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
      id: "conforto-mh-series-wall-single-cfg-9",
      slug: "conforto-mh-series-wall-single-cfg-9",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhsz124da",
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
      id: "conforto-mh-series-wall-single-cfg-10",
      slug: "conforto-mh-series-wall-single-cfg-10",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz218da",
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
      id: "conforto-mh-series-wall-single-cfg-11",
      slug: "conforto-mh-series-wall-single-cfg-11",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz218da",
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
      id: "conforto-mh-series-wall-single-cfg-12",
      slug: "conforto-mh-series-wall-single-cfg-12",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz218da",
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
      id: "conforto-mh-series-wall-single-cfg-13",
      slug: "conforto-mh-series-wall-single-cfg-13",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz327da",
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
      id: "conforto-mh-series-wall-single-cfg-14",
      slug: "conforto-mh-series-wall-single-cfg-14",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz327da",
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
      id: "conforto-mh-series-wall-single-cfg-15",
      slug: "conforto-mh-series-wall-single-cfg-15",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz327da",
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
      id: "conforto-mh-series-wall-single-cfg-16",
      slug: "conforto-mh-series-wall-single-cfg-16",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz436da",
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
      id: "conforto-mh-series-wall-single-cfg-17",
      slug: "conforto-mh-series-wall-single-cfg-17",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz436da",
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
      id: "conforto-mh-series-wall-single-cfg-18",
      slug: "conforto-mh-series-wall-single-cfg-18",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz548da",
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
      id: "conforto-mh-series-wall-single-cfg-19",
      slug: "conforto-mh-series-wall-single-cfg-19",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz548da",
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
      id: "conforto-mh-series-wall-single-cfg-20",
      slug: "conforto-mh-series-wall-single-cfg-20",
      modelId: "conforto-mh-series-wall-single",
      outdoorUnitId: "conforto-mhmz548da",
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
      id: "conforto-mhah-series-central-ducted-cfg-1",
      slug: "conforto-mhah-series-central-ducted-cfg-1",
      modelId: "conforto-mhah-series-central-ducted",
      outdoorUnitId: "conforto-mhsd118dacfc",
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
      id: "conforto-mhah-series-central-ducted-cfg-2",
      slug: "conforto-mhah-series-central-ducted-cfg-2",
      modelId: "conforto-mhah-series-central-ducted",
      outdoorUnitId: "conforto-mhsd124dacfc",
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
      id: "conforto-mhah-series-central-ducted-cfg-3",
      slug: "conforto-mhah-series-central-ducted-cfg-3",
      modelId: "conforto-mhah-series-central-ducted",
      outdoorUnitId: "conforto-mhsd130dacfc",
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
      id: "conforto-mhah-series-central-ducted-cfg-4",
      slug: "conforto-mhah-series-central-ducted-cfg-4",
      modelId: "conforto-mhah-series-central-ducted",
      outdoorUnitId: "conforto-mhsd136dacfc",
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
      id: "conforto-mhah-series-central-ducted-cfg-5",
      slug: "conforto-mhah-series-central-ducted-cfg-5",
      modelId: "conforto-mhah-series-central-ducted",
      outdoorUnitId: "conforto-mhsd148dacfc",
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
      id: "conforto-mhah-series-central-ducted-cfg-6",
      slug: "conforto-mhah-series-central-ducted-cfg-6",
      modelId: "conforto-mhah-series-central-ducted",
      outdoorUnitId: "conforto-mhsd160dacfc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "conforto-standard-wall-single-cfg-1",
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
      configurationId: "conforto-mh-series-wall-single-cfg-1",
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
      configurationId: "conforto-mh-series-wall-single-cfg-2",
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
      configurationId: "conforto-mh-series-wall-single-cfg-3",
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
      configurationId: "conforto-mh-series-wall-single-cfg-4",
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
      configurationId: "conforto-mh-series-wall-single-cfg-5",
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
      configurationId: "conforto-mh-series-wall-single-cfg-6",
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
      configurationId: "conforto-mh-series-wall-single-cfg-7",
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
      configurationId: "conforto-mh-series-wall-single-cfg-8",
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
      configurationId: "conforto-mh-series-wall-single-cfg-9",
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
      configurationId: "conforto-mh-series-wall-single-cfg-10",
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
      configurationId: "conforto-mh-series-wall-single-cfg-11",
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
      configurationId: "conforto-mh-series-wall-single-cfg-12",
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
      configurationId: "conforto-mh-series-wall-single-cfg-13",
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
      configurationId: "conforto-mh-series-wall-single-cfg-14",
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
      configurationId: "conforto-mh-series-wall-single-cfg-15",
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
      configurationId: "conforto-mh-series-wall-single-cfg-16",
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
      configurationId: "conforto-mh-series-wall-single-cfg-17",
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
      configurationId: "conforto-mh-series-wall-single-cfg-18",
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
      configurationId: "conforto-mh-series-wall-single-cfg-19",
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
      configurationId: "conforto-mh-series-wall-single-cfg-20",
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
      configurationId: "conforto-mhah-series-central-ducted-cfg-1",
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
      configurationId: "conforto-mhah-series-central-ducted-cfg-2",
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
      configurationId: "conforto-mhah-series-central-ducted-cfg-3",
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
      configurationId: "conforto-mhah-series-central-ducted-cfg-4",
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
      configurationId: "conforto-mhah-series-central-ducted-cfg-5",
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
      configurationId: "conforto-mhah-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
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
