import type { BrandDataset } from "../../types";

export const kerrkapstoneDataset: BrandDataset = {
  brand: {
    id: "kerr-kapstone",
    slug: "kerr-kapstone",
    name: "KERR KAPSTONE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "kerr-kapstone-a-series",
      slug: "kerr-kapstone-a-series",
      name: "A Series",
      brandId: "kerr-kapstone",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "kerr-kapstone-a-series-wall-single",
      slug: "kerr-kapstone-a-series-wall-single",
      name: "A Series",
      seriesId: "kerr-kapstone-a-series",
      brandId: "kerr-kapstone",
      modelNumber: "A Series",
      normalizedModelNumber: "a-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11000,
      heatingCapacity5FMaxBtu: 19300,
      seer2Min: 25.6,
      seer2Max: 35,
      hspf2Min: 12.7,
      hspf2Max: 16.2,
      cop5FMin: 2,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kapstone-a-series-central-ducted",
      slug: "kerr-kapstone-a-series-central-ducted",
      name: "A Series",
      seriesId: "kerr-kapstone-a-series",
      brandId: "kerr-kapstone",
      modelNumber: "A Series",
      normalizedModelNumber: "a-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 9,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "kerr-kapstone-a-kzp06sa-1",
      modelNumber: "A-KZP06SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    },
    {
      id: "kerr-kapstone-a-kzp09sa-1",
      modelNumber: "A-KZP09SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    },
    {
      id: "kerr-kapstone-a-kzp12sa-1",
      modelNumber: "A-KZP12SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    },
    {
      id: "kerr-kapstone-a-kzp18sa-1",
      modelNumber: "A-KZP18SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    },
    {
      id: "kerr-kapstone-a-kx12p18sa-1",
      modelNumber: "A-KX12P18SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    },
    {
      id: "kerr-kapstone-a-kx12p24sa-1",
      modelNumber: "A-KX12P24SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    },
    {
      id: "kerr-kapstone-a-kx12p30sa-1",
      modelNumber: "A-KX12P30SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    },
    {
      id: "kerr-kapstone-a-kx12p36sa-1",
      modelNumber: "A-KX12P36SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    },
    {
      id: "kerr-kapstone-a-kx12p48sa-1",
      modelNumber: "A-KX12P48SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    },
    {
      id: "kerr-kapstone-a-kx12p60sa-1",
      modelNumber: "A-KX12P60SA-1",
      brandId: "kerr-kapstone",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "kerr-kapstone-a-series-wall-single-cfg-1",
      slug: "kerr-kapstone-a-series-wall-single-cfg-1",
      modelId: "kerr-kapstone-a-series-wall-single",
      outdoorUnitId: "kerr-kapstone-a-kzp06sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 35,
      hspf2: 15.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kapstone-a-series-wall-single-cfg-2",
      slug: "kerr-kapstone-a-series-wall-single-cfg-2",
      modelId: "kerr-kapstone-a-series-wall-single",
      outdoorUnitId: "kerr-kapstone-a-kzp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kapstone-a-series-wall-single-cfg-3",
      slug: "kerr-kapstone-a-series-wall-single-cfg-3",
      modelId: "kerr-kapstone-a-series-wall-single",
      outdoorUnitId: "kerr-kapstone-a-kzp12sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.4,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kapstone-a-series-wall-single-cfg-4",
      slug: "kerr-kapstone-a-series-wall-single-cfg-4",
      modelId: "kerr-kapstone-a-series-wall-single",
      outdoorUnitId: "kerr-kapstone-a-kzp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.6,
      hspf2: 16.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kapstone-a-series-central-ducted-cfg-1",
      slug: "kerr-kapstone-a-series-central-ducted-cfg-1",
      modelId: "kerr-kapstone-a-series-central-ducted",
      outdoorUnitId: "kerr-kapstone-a-kx12p18sa-1",
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
      id: "kerr-kapstone-a-series-central-ducted-cfg-2",
      slug: "kerr-kapstone-a-series-central-ducted-cfg-2",
      modelId: "kerr-kapstone-a-series-central-ducted",
      outdoorUnitId: "kerr-kapstone-a-kx12p24sa-1",
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
      id: "kerr-kapstone-a-series-central-ducted-cfg-3",
      slug: "kerr-kapstone-a-series-central-ducted-cfg-3",
      modelId: "kerr-kapstone-a-series-central-ducted",
      outdoorUnitId: "kerr-kapstone-a-kx12p30sa-1",
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
      id: "kerr-kapstone-a-series-central-ducted-cfg-4",
      slug: "kerr-kapstone-a-series-central-ducted-cfg-4",
      modelId: "kerr-kapstone-a-series-central-ducted",
      outdoorUnitId: "kerr-kapstone-a-kx12p36sa-1",
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
      id: "kerr-kapstone-a-series-central-ducted-cfg-5",
      slug: "kerr-kapstone-a-series-central-ducted-cfg-5",
      modelId: "kerr-kapstone-a-series-central-ducted",
      outdoorUnitId: "kerr-kapstone-a-kx12p48sa-1",
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
      id: "kerr-kapstone-a-series-central-ducted-cfg-6",
      slug: "kerr-kapstone-a-series-central-ducted-cfg-6",
      modelId: "kerr-kapstone-a-series-central-ducted",
      outdoorUnitId: "kerr-kapstone-a-kx12p60sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "kerr-kapstone-a-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kapstone-a-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kapstone-a-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kapstone-a-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19300,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kapstone-a-series-central-ducted-cfg-1",
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
      configurationId: "kerr-kapstone-a-series-central-ducted-cfg-2",
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
      configurationId: "kerr-kapstone-a-series-central-ducted-cfg-3",
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
      configurationId: "kerr-kapstone-a-series-central-ducted-cfg-4",
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
      configurationId: "kerr-kapstone-a-series-central-ducted-cfg-5",
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
      configurationId: "kerr-kapstone-a-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
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
