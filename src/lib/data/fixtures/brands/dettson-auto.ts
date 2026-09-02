import type { BrandDataset } from "../../types";

export const dettsonDataset: BrandDataset = {
  brand: {
    id: "dettson",
    slug: "dettson",
    name: "DETTSON",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "dettson-mhd-series",
      slug: "dettson-mhd-series",
      name: "MHD series",
      brandId: "dettson",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "dettson-evd-series",
      slug: "dettson-evd-series",
      name: "EVD series",
      brandId: "dettson",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "dettson-mhd-series-central-ducted",
      slug: "dettson-mhd-series-central-ducted",
      name: "MHD series",
      seriesId: "dettson-mhd-series",
      brandId: "dettson",
      modelNumber: "MHD series",
      normalizedModelNumber: "mhd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 13000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 9.5,
      hspf2Max: 9.8,
      cop5FMin: 2.08,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "dettson-evd-series-central-ducted",
      slug: "dettson-evd-series-central-ducted",
      name: "EVD series",
      seriesId: "dettson-evd-series",
      brandId: "dettson",
      modelNumber: "EVD series",
      normalizedModelNumber: "evd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 10.2,
      cop5FMin: 1.8,
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
      id: "dettson-mhd-18",
      modelNumber: "MHD-18",
      brandId: "dettson",
      refrigerant: null as any,
    },
    {
      id: "dettson-mhd-24",
      modelNumber: "MHD-24",
      brandId: "dettson",
      refrigerant: null as any,
    },
    {
      id: "dettson-evd-18-o",
      modelNumber: "EVD-18-O",
      brandId: "dettson",
      refrigerant: null as any,
    },
    {
      id: "dettson-evd-24-o",
      modelNumber: "EVD-24-O",
      brandId: "dettson",
      refrigerant: null as any,
    },
    {
      id: "dettson-evd-30-o",
      modelNumber: "EVD-30-O",
      brandId: "dettson",
      refrigerant: null as any,
    },
    {
      id: "dettson-evd-36-o",
      modelNumber: "EVD-36-O",
      brandId: "dettson",
      refrigerant: null as any,
    },
    {
      id: "dettson-evd-48-o",
      modelNumber: "EVD-48-O",
      brandId: "dettson",
      refrigerant: null as any,
    },
    {
      id: "dettson-evd-60-o",
      modelNumber: "EVD-60-O",
      brandId: "dettson",
      refrigerant: null as any,
    },
    {
      id: "dettson-evd-36-o-s",
      modelNumber: "EVD-36-O-S",
      brandId: "dettson",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "dettson-mhd-series-central-ducted-cfg-1",
      slug: "dettson-mhd-series-central-ducted-cfg-1",
      modelId: "dettson-mhd-series-central-ducted",
      outdoorUnitId: "dettson-mhd-18",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "dettson-mhd-series-central-ducted-cfg-2",
      slug: "dettson-mhd-series-central-ducted-cfg-2",
      modelId: "dettson-mhd-series-central-ducted",
      outdoorUnitId: "dettson-mhd-24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 15.2,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "dettson-evd-series-central-ducted-cfg-1",
      slug: "dettson-evd-series-central-ducted-cfg-1",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-18-o",
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
      id: "dettson-evd-series-central-ducted-cfg-2",
      slug: "dettson-evd-series-central-ducted-cfg-2",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-24-o",
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
      id: "dettson-evd-series-central-ducted-cfg-3",
      slug: "dettson-evd-series-central-ducted-cfg-3",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-30-o",
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
      id: "dettson-evd-series-central-ducted-cfg-4",
      slug: "dettson-evd-series-central-ducted-cfg-4",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-36-o",
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
      id: "dettson-evd-series-central-ducted-cfg-5",
      slug: "dettson-evd-series-central-ducted-cfg-5",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-48-o",
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
      id: "dettson-evd-series-central-ducted-cfg-6",
      slug: "dettson-evd-series-central-ducted-cfg-6",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-60-o",
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
      id: "dettson-evd-series-central-ducted-cfg-7",
      slug: "dettson-evd-series-central-ducted-cfg-7",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-18-o",
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
      id: "dettson-evd-series-central-ducted-cfg-8",
      slug: "dettson-evd-series-central-ducted-cfg-8",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-24-o",
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
      id: "dettson-evd-series-central-ducted-cfg-9",
      slug: "dettson-evd-series-central-ducted-cfg-9",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-36-o",
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
      id: "dettson-evd-series-central-ducted-cfg-10",
      slug: "dettson-evd-series-central-ducted-cfg-10",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-30-o",
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
      id: "dettson-evd-series-central-ducted-cfg-11",
      slug: "dettson-evd-series-central-ducted-cfg-11",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-36-o",
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
      id: "dettson-evd-series-central-ducted-cfg-12",
      slug: "dettson-evd-series-central-ducted-cfg-12",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-48-o",
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
      id: "dettson-evd-series-central-ducted-cfg-13",
      slug: "dettson-evd-series-central-ducted-cfg-13",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-60-o",
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
      id: "dettson-evd-series-central-ducted-cfg-14",
      slug: "dettson-evd-series-central-ducted-cfg-14",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-36-o-s",
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
      id: "dettson-evd-series-central-ducted-cfg-15",
      slug: "dettson-evd-series-central-ducted-cfg-15",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-36-o-s",
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
      id: "dettson-evd-series-central-ducted-cfg-16",
      slug: "dettson-evd-series-central-ducted-cfg-16",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-24-o",
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
      id: "dettson-evd-series-central-ducted-cfg-17",
      slug: "dettson-evd-series-central-ducted-cfg-17",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-24-o",
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
      id: "dettson-evd-series-central-ducted-cfg-18",
      slug: "dettson-evd-series-central-ducted-cfg-18",
      modelId: "dettson-evd-series-central-ducted",
      outdoorUnitId: "dettson-evd-36-o-s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 16.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "dettson-mhd-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "dettson-mhd-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "dettson-evd-series-central-ducted-cfg-1",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-2",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-3",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-4",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-5",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-6",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-7",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-8",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-9",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-10",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-11",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-12",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-13",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-14",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-15",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-16",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-17",
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
      configurationId: "dettson-evd-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
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
