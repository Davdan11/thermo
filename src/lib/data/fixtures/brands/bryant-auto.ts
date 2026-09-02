import type { BrandDataset } from "../../types";

export const bryantDataset: BrandDataset = {
  brand: {
    id: "bryant",
    slug: "bryant",
    name: "Bryant",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "bryant-38m-series",
      slug: "bryant-38m-series",
      name: "38M series",
      brandId: "bryant",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "bryant-38m-series-wall-single-30000",
      slug: "bryant-38m-series-wall-single-30000",
      name: "38M series 30 000 BTU",
      seriesId: "bryant-38m-series",
      brandId: "bryant",
      modelNumber: "38M series 30k",
      normalizedModelNumber: "38m-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 19000,
      seer2Min: 20,
      seer2Max: 20.1,
      hspf2Min: 9,
      hspf2Max: 9.2,
      cop5FMin: 1.92,
      cop5FMax: 1.95,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "bryant-38marbq30aa3",
      modelNumber: "38MARBQ30AA3",
      brandId: "bryant",
      refrigerant: null as any,
    },
    {
      id: "bryant-38marbq30aa311",
      modelNumber: "38MARBQ30AA311",
      brandId: "bryant",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "bryant-38m-series-wall-single-30000-cfg-1",
      slug: "bryant-38m-series-wall-single-30000-cfg-1",
      modelId: "bryant-38m-series-wall-single-30000",
      outdoorUnitId: "bryant-38marbq30aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bryant-38m-series-wall-single-30000-cfg-2",
      slug: "bryant-38m-series-wall-single-30000-cfg-2",
      modelId: "bryant-38m-series-wall-single-30000",
      outdoorUnitId: "bryant-38marbq30aa311",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.1,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "bryant-38m-series-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bryant-38m-series-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.92,
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
