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
      id: "valiev-standard-wall-single-18000",
      slug: "valiev-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "valiev-standard",
      brandId: "valiev",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 10400,
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
    },
    {
      id: "valiev-standard-wall-single-12000",
      slug: "valiev-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "valiev-standard",
      brandId: "valiev",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7100,
      heatingCapacity5FMaxBtu: 7100,
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
    {
      id: "valiev-vwsm-18ir410ahs21",
      modelNumber: "VWSM-18IR410AHS21",
      brandId: "valiev",
      type: "wall-single",
    },
    {
      id: "valiev-vwsm-12ir410ahs21l",
      modelNumber: "VWSM-12IR410AHS21L",
      brandId: "valiev",
      type: "wall-single",
    }
  ],
  configurations: [
    {
      id: "valiev-standard-wall-single-18000-cfg-1",
      slug: "valiev-standard-wall-single-18000-cfg-1",
      modelId: "valiev-standard-wall-single-18000",
      outdoorUnitId: "valiev-vwsm-18ir410ahs21",
      indoorUnitId: "valiev-vwsm-18ir410ahs21",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "valiev-standard-wall-single-12000-cfg-1",
      slug: "valiev-standard-wall-single-12000-cfg-1",
      modelId: "valiev-standard-wall-single-12000",
      outdoorUnitId: "valiev-vwsm-12ir410ahs21l",
      indoorUnitId: "valiev-vwsm-12ir410ahs21l",
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
      configurationId: "valiev-standard-wall-single-18000-cfg-1",
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
      configurationId: "valiev-standard-wall-single-12000-cfg-1",
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
