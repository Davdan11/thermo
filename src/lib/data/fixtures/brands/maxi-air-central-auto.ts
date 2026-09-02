import type { BrandDataset } from "../../types";

export const maxiaircentralDataset: BrandDataset = {
  brand: {
    id: "maxi-air-central",
    slug: "maxi-air-central",
    name: "MAXI AIR CENTRAL",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "maxi-air-central-standard",
      slug: "maxi-air-central-standard",
      name: "Standard",
      brandId: "maxi-air-central",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "maxi-air-central-standard-wall-single",
      slug: "maxi-air-central-standard-wall-single",
      name: "Standard",
      seriesId: "maxi-air-central-standard",
      brandId: "maxi-air-central",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 18000,
      heatingCapacity5FMaxBtu: 21000,
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
      id: "maxi-air-central-class36cc",
      modelNumber: "CLASS36CC",
      brandId: "maxi-air-central",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-central-class30cc",
      modelNumber: "CLASS30CC",
      brandId: "maxi-air-central",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "maxi-air-central-standard-wall-single-cfg-1",
      slug: "maxi-air-central-standard-wall-single-cfg-1",
      modelId: "maxi-air-central-standard-wall-single",
      outdoorUnitId: "maxi-air-central-class36cc",
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
      id: "maxi-air-central-standard-wall-single-cfg-2",
      slug: "maxi-air-central-standard-wall-single-cfg-2",
      modelId: "maxi-air-central-standard-wall-single",
      outdoorUnitId: "maxi-air-central-class30cc",
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
      id: "maxi-air-central-standard-wall-single-cfg-3",
      slug: "maxi-air-central-standard-wall-single-cfg-3",
      modelId: "maxi-air-central-standard-wall-single",
      outdoorUnitId: "maxi-air-central-class30cc",
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
      id: "maxi-air-central-standard-wall-single-cfg-4",
      slug: "maxi-air-central-standard-wall-single-cfg-4",
      modelId: "maxi-air-central-standard-wall-single",
      outdoorUnitId: "maxi-air-central-class30cc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "maxi-air-central-standard-wall-single-cfg-1",
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
      configurationId: "maxi-air-central-standard-wall-single-cfg-2",
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
      configurationId: "maxi-air-central-standard-wall-single-cfg-3",
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
      configurationId: "maxi-air-central-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
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
