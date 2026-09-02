import type { BrandDataset } from "../../types";

export const k2Dataset: BrandDataset = {
  brand: {
    id: "k2",
    slug: "k2",
    name: "K2",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "k2-standard",
      slug: "k2-standard",
      name: "Standard",
      brandId: "k2",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "k2-standard-wall-single-30000",
      slug: "k2-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "k2-standard",
      brandId: "k2",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 24000,
      heatingCapacity5FMaxBtu: 24000,
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
      id: "k2-thtu-heatpump24",
      modelNumber: "THTU-HEATPUMP24",
      brandId: "k2",
      refrigerant: null as any,
    },
    {
      id: "k2-hp36r410a",
      modelNumber: "HP36R410A",
      brandId: "k2",
      refrigerant: null as any,
    },
    {
      id: "k2-hp36r",
      modelNumber: "HP36R",
      brandId: "k2",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "k2-standard-wall-single-30000-cfg-1",
      slug: "k2-standard-wall-single-30000-cfg-1",
      modelId: "k2-standard-wall-single-30000",
      outdoorUnitId: "k2-thtu-heatpump24",
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
      id: "k2-standard-wall-single-30000-cfg-2",
      slug: "k2-standard-wall-single-30000-cfg-2",
      modelId: "k2-standard-wall-single-30000",
      outdoorUnitId: "k2-hp36r410a",
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
      id: "k2-standard-wall-single-30000-cfg-3",
      slug: "k2-standard-wall-single-30000-cfg-3",
      modelId: "k2-standard-wall-single-30000",
      outdoorUnitId: "k2-hp36r",
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
      configurationId: "k2-standard-wall-single-30000-cfg-1",
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
      configurationId: "k2-standard-wall-single-30000-cfg-2",
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
      configurationId: "k2-standard-wall-single-30000-cfg-3",
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
