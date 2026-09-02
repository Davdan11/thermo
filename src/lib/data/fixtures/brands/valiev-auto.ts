import type { BrandDataset } from "../../types";

export const valievDataset: BrandDataset = {
  brand: {
    id: "valiev",
    slug: "valiev",
    name: "VALIEV",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "valiev-standard",
      slug: "valiev-standard",
      name: "Standard",
      brandId: "valiev",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "valiev-standard-wall-single",
      slug: "valiev-standard-wall-single",
      name: "Standard",
      seriesId: "valiev-standard",
      brandId: "valiev",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7100,
      heatingCapacity5FMaxBtu: 10400,
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
      id: "valiev-vwsm-18ir410ahs21",
      modelNumber: "VWSM-18IR410AHS21",
      brandId: "valiev",
      refrigerant: null as any,
    },
    {
      id: "valiev-vwsm-12ir410ahs21l",
      modelNumber: "VWSM-12IR410AHS21L",
      brandId: "valiev",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "valiev-standard-wall-single-cfg-1",
      slug: "valiev-standard-wall-single-cfg-1",
      modelId: "valiev-standard-wall-single",
      outdoorUnitId: "valiev-vwsm-18ir410ahs21",
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
      id: "valiev-standard-wall-single-cfg-2",
      slug: "valiev-standard-wall-single-cfg-2",
      modelId: "valiev-standard-wall-single",
      outdoorUnitId: "valiev-vwsm-12ir410ahs21l",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "valiev-standard-wall-single-cfg-1",
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
      configurationId: "valiev-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
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
