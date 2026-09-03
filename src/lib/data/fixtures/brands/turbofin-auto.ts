import type { BrandDataset } from "../../types";

export const turbofinDataset: BrandDataset = {
  brand: {
    id: "turbofin",
    slug: "turbofin",
    name: "TURBOFIN",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: false,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "turbofin-standard",
      slug: "turbofin-standard",
      name: "Standard",
      brandId: "turbofin",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "turbofin-standard-wall-single-30000",
      slug: "turbofin-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "turbofin-standard",
      brandId: "turbofin",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 24000,
      heatingCapacity5FMaxBtu: 24000,
      seer2Min: 19.5,
      seer2Max: 20.1,
      hspf2Min: 11.3,
      hspf2Max: 9.3,
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
      id: "turbofin-thtu-heatpump24",
      modelNumber: "THTU-HEATPUMP24",
      brandId: "turbofin",
      refrigerant: null as any,
    },
    {
      id: "turbofin-hp36r410a",
      modelNumber: "HP36R410A",
      brandId: "turbofin",
      refrigerant: null as any,
    },
    {
      id: "turbofin-hp36r",
      modelNumber: "HP36R",
      brandId: "turbofin",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "turbofin-standard-wall-single-30000-cfg-1",
      slug: "turbofin-standard-wall-single-30000-cfg-1",
      modelId: "turbofin-standard-wall-single-30000",
      outdoorUnitId: "turbofin-thtu-heatpump24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27600,
      coolingCapacityMaxBtu: 27600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "turbofin-standard-wall-single-30000-cfg-2",
      slug: "turbofin-standard-wall-single-30000-cfg-2",
      modelId: "turbofin-standard-wall-single-30000",
      outdoorUnitId: "turbofin-hp36r410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27600,
      coolingCapacityMaxBtu: 27600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "turbofin-standard-wall-single-30000-cfg-3",
      slug: "turbofin-standard-wall-single-30000-cfg-3",
      modelId: "turbofin-standard-wall-single-30000",
      outdoorUnitId: "turbofin-hp36r",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27600,
      coolingCapacityMaxBtu: 27600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "turbofin-standard-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "turbofin-standard-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "turbofin-standard-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
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
