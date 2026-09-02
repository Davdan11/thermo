import type { BrandDataset } from "../../types";

export const connectmDataset: BrandDataset = {
  brand: {
    id: "connect-m",
    slug: "connect-m",
    name: "CONNECT M",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "connect-m-cntm-series",
      slug: "connect-m-cntm-series",
      name: "CNTM Series",
      brandId: "connect-m",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "connect-m-cntm-series-central-ducted",
      slug: "connect-m-cntm-series-central-ducted",
      name: "CNTM Series",
      seriesId: "connect-m-cntm-series",
      brandId: "connect-m",
      modelNumber: "CNTM Series",
      normalizedModelNumber: "cntm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 9.3,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "connect-m-cntm16dhp18aa",
      modelNumber: "CNTM16DHP18AA",
      brandId: "connect-m",
      refrigerant: null as any,
    },
    {
      id: "connect-m-cntm16dhp24aa",
      modelNumber: "CNTM16DHP24AA",
      brandId: "connect-m",
      refrigerant: null as any,
    },
    {
      id: "connect-m-cntm16dhp36aa",
      modelNumber: "CNTM16DHP36AA",
      brandId: "connect-m",
      refrigerant: null as any,
    },
    {
      id: "connect-m-cntm16dhp48aa",
      modelNumber: "CNTM16DHP48AA",
      brandId: "connect-m",
      refrigerant: null as any,
    },
    {
      id: "connect-m-cntm16dhp60aa",
      modelNumber: "CNTM16DHP60AA",
      brandId: "connect-m",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "connect-m-cntm-series-central-ducted-cfg-1",
      slug: "connect-m-cntm-series-central-ducted-cfg-1",
      modelId: "connect-m-cntm-series-central-ducted",
      outdoorUnitId: "connect-m-cntm16dhp18aa",
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
      id: "connect-m-cntm-series-central-ducted-cfg-2",
      slug: "connect-m-cntm-series-central-ducted-cfg-2",
      modelId: "connect-m-cntm-series-central-ducted",
      outdoorUnitId: "connect-m-cntm16dhp24aa",
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
      id: "connect-m-cntm-series-central-ducted-cfg-3",
      slug: "connect-m-cntm-series-central-ducted-cfg-3",
      modelId: "connect-m-cntm-series-central-ducted",
      outdoorUnitId: "connect-m-cntm16dhp36aa",
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
      id: "connect-m-cntm-series-central-ducted-cfg-4",
      slug: "connect-m-cntm-series-central-ducted-cfg-4",
      modelId: "connect-m-cntm-series-central-ducted",
      outdoorUnitId: "connect-m-cntm16dhp48aa",
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
      id: "connect-m-cntm-series-central-ducted-cfg-5",
      slug: "connect-m-cntm-series-central-ducted-cfg-5",
      modelId: "connect-m-cntm-series-central-ducted",
      outdoorUnitId: "connect-m-cntm16dhp60aa",
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
      id: "connect-m-cntm-series-central-ducted-cfg-6",
      slug: "connect-m-cntm-series-central-ducted-cfg-6",
      modelId: "connect-m-cntm-series-central-ducted",
      outdoorUnitId: "connect-m-cntm16dhp18aa",
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
      id: "connect-m-cntm-series-central-ducted-cfg-7",
      slug: "connect-m-cntm-series-central-ducted-cfg-7",
      modelId: "connect-m-cntm-series-central-ducted",
      outdoorUnitId: "connect-m-cntm16dhp36aa",
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
      id: "connect-m-cntm-series-central-ducted-cfg-8",
      slug: "connect-m-cntm-series-central-ducted-cfg-8",
      modelId: "connect-m-cntm-series-central-ducted",
      outdoorUnitId: "connect-m-cntm16dhp48aa",
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
      id: "connect-m-cntm-series-central-ducted-cfg-9",
      slug: "connect-m-cntm-series-central-ducted-cfg-9",
      modelId: "connect-m-cntm-series-central-ducted",
      outdoorUnitId: "connect-m-cntm16dhp60aa",
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
      configurationId: "connect-m-cntm-series-central-ducted-cfg-1",
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
      configurationId: "connect-m-cntm-series-central-ducted-cfg-2",
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
      configurationId: "connect-m-cntm-series-central-ducted-cfg-3",
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
      configurationId: "connect-m-cntm-series-central-ducted-cfg-4",
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
      configurationId: "connect-m-cntm-series-central-ducted-cfg-5",
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
      configurationId: "connect-m-cntm-series-central-ducted-cfg-6",
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
      configurationId: "connect-m-cntm-series-central-ducted-cfg-7",
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
      configurationId: "connect-m-cntm-series-central-ducted-cfg-8",
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
      configurationId: "connect-m-cntm-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
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
