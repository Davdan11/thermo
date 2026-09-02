import type { BrandDataset } from "../../types";

export const hotpointDataset: BrandDataset = {
  brand: {
    id: "hotpoint",
    slug: "hotpoint",
    name: "HOTPOINT",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "hotpoint-hotpoint",
      slug: "hotpoint-hotpoint",
      name: "Hotpoint",
      brandId: "hotpoint",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "hotpoint-hotpoint-wall-single",
      slug: "hotpoint-hotpoint-wall-single",
      name: "Hotpoint",
      seriesId: "hotpoint-hotpoint",
      brandId: "hotpoint",
      modelNumber: "Hotpoint",
      normalizedModelNumber: "hotpoint",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6400,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
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
      id: "hotpoint-1h09hn2da",
      modelNumber: "1H09HN2DA**",
      brandId: "hotpoint",
      refrigerant: null as any,
    },
    {
      id: "hotpoint-1h12hn2da",
      modelNumber: "1H12HN2DA**",
      brandId: "hotpoint",
      refrigerant: null as any,
    },
    {
      id: "hotpoint-1h18hn2da",
      modelNumber: "1H18HN2DA**",
      brandId: "hotpoint",
      refrigerant: null as any,
    },
    {
      id: "hotpoint-1h24hn2da",
      modelNumber: "1H24HN2DA**",
      brandId: "hotpoint",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "hotpoint-hotpoint-wall-single-cfg-1",
      slug: "hotpoint-hotpoint-wall-single-cfg-1",
      modelId: "hotpoint-hotpoint-wall-single",
      outdoorUnitId: "hotpoint-1h09hn2da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hotpoint-hotpoint-wall-single-cfg-2",
      slug: "hotpoint-hotpoint-wall-single-cfg-2",
      modelId: "hotpoint-hotpoint-wall-single",
      outdoorUnitId: "hotpoint-1h12hn2da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hotpoint-hotpoint-wall-single-cfg-3",
      slug: "hotpoint-hotpoint-wall-single-cfg-3",
      modelId: "hotpoint-hotpoint-wall-single",
      outdoorUnitId: "hotpoint-1h18hn2da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hotpoint-hotpoint-wall-single-cfg-4",
      slug: "hotpoint-hotpoint-wall-single-cfg-4",
      modelId: "hotpoint-hotpoint-wall-single",
      outdoorUnitId: "hotpoint-1h24hn2da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "hotpoint-hotpoint-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hotpoint-hotpoint-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hotpoint-hotpoint-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hotpoint-hotpoint-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
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
