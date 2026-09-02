import type { BrandDataset } from "../../types";

export const denaliaireDataset: BrandDataset = {
  brand: {
    id: "denali-aire",
    slug: "denali-aire",
    name: "DENALI AIRE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "denali-aire-hiultra",
      slug: "denali-aire-hiultra",
      name: "HiULTRA",
      brandId: "denali-aire",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "denali-aire-hi-multi",
      slug: "denali-aire-hi-multi",
      name: "Hi MULTI",
      brandId: "denali-aire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "denali-aire-hiultra-wall-single",
      slug: "denali-aire-hiultra-wall-single",
      name: "HiULTRA",
      seriesId: "denali-aire-hiultra",
      brandId: "denali-aire",
      modelNumber: "HiULTRA",
      normalizedModelNumber: "hiultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 7500,
      seer2Min: 21.7,
      seer2Max: 21.7,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "denali-aire-hi-multi-wall-single",
      slug: "denali-aire-hi-multi-wall-single",
      name: "Hi MULTI",
      seriesId: "denali-aire-hi-multi",
      brandId: "denali-aire",
      modelNumber: "Hi MULTI",
      normalizedModelNumber: "hi-multi",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 14500,
      seer2Min: 18.5,
      seer2Max: 22.5,
      hspf2Min: 8.6,
      hspf2Max: 9,
      cop5FMin: 1.75,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "denali-aire-dnmshqco12a",
      modelNumber: "DNMSHQCO12A",
      brandId: "denali-aire",
      refrigerant: null as any,
    },
    {
      id: "denali-aire-dnmshqco9a",
      modelNumber: "DNMSHQCO9A",
      brandId: "denali-aire",
      refrigerant: null as any,
    },
    {
      id: "denali-aire-dnmshqco18",
      modelNumber: "DNMSHQCO18",
      brandId: "denali-aire",
      refrigerant: null as any,
    },
    {
      id: "denali-aire-dnmshqco24",
      modelNumber: "DNMSHQCO24",
      brandId: "denali-aire",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "denali-aire-hiultra-wall-single-cfg-1",
      slug: "denali-aire-hiultra-wall-single-cfg-1",
      modelId: "denali-aire-hiultra-wall-single",
      outdoorUnitId: "denali-aire-dnmshqco12a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.7,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "denali-aire-hi-multi-wall-single-cfg-1",
      slug: "denali-aire-hi-multi-wall-single-cfg-1",
      modelId: "denali-aire-hi-multi-wall-single",
      outdoorUnitId: "denali-aire-dnmshqco9a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "denali-aire-hi-multi-wall-single-cfg-2",
      slug: "denali-aire-hi-multi-wall-single-cfg-2",
      modelId: "denali-aire-hi-multi-wall-single",
      outdoorUnitId: "denali-aire-dnmshqco18",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "denali-aire-hi-multi-wall-single-cfg-3",
      slug: "denali-aire-hi-multi-wall-single-cfg-3",
      modelId: "denali-aire-hi-multi-wall-single",
      outdoorUnitId: "denali-aire-dnmshqco24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "denali-aire-hiultra-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "denali-aire-hi-multi-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "denali-aire-hi-multi-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "denali-aire-hi-multi-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.75,
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
