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
      id: "maxi-air-central-standard-wall-single-36000",
      slug: "maxi-air-central-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "maxi-air-central-standard",
      brandId: "maxi-air-central",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 21000,
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
    },
    {
      id: "maxi-air-central-standard-wall-single-30000",
      slug: "maxi-air-central-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "maxi-air-central-standard",
      brandId: "maxi-air-central",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 18000,
      heatingCapacity5FMaxBtu: 19000,
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
      id: "maxi-air-central-standard-wall-single-36000-cfg-1",
      slug: "maxi-air-central-standard-wall-single-36000-cfg-1",
      modelId: "maxi-air-central-standard-wall-single-36000",
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
      id: "maxi-air-central-standard-wall-single-30000-cfg-1",
      slug: "maxi-air-central-standard-wall-single-30000-cfg-1",
      modelId: "maxi-air-central-standard-wall-single-30000",
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
      id: "maxi-air-central-standard-wall-single-30000-cfg-2",
      slug: "maxi-air-central-standard-wall-single-30000-cfg-2",
      modelId: "maxi-air-central-standard-wall-single-30000",
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
      id: "maxi-air-central-standard-wall-single-30000-cfg-3",
      slug: "maxi-air-central-standard-wall-single-30000-cfg-3",
      modelId: "maxi-air-central-standard-wall-single-30000",
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
      configurationId: "maxi-air-central-standard-wall-single-36000-cfg-1",
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
      configurationId: "maxi-air-central-standard-wall-single-30000-cfg-1",
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
      configurationId: "maxi-air-central-standard-wall-single-30000-cfg-2",
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
      configurationId: "maxi-air-central-standard-wall-single-30000-cfg-3",
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
