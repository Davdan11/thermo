import type { BrandDataset } from "../../types";

export const innovaDataset: BrandDataset = {
  brand: {
    id: "innova",
    slug: "innova",
    name: "INNOVA",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "innova-standard",
      slug: "innova-standard",
      name: "Standard",
      brandId: "innova",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "innova-standard-wall-single-30000",
      slug: "innova-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "innova-standard",
      brandId: "innova",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
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
      id: "innova-thtu-heatpump24",
      modelNumber: "THTU-HEATPUMP24",
      brandId: "innova",
      refrigerant: null as any,
    },
    {
      id: "innova-hp36r410a",
      modelNumber: "HP36R410A",
      brandId: "innova",
      refrigerant: null as any,
    },
    {
      id: "innova-hp36r",
      modelNumber: "HP36R",
      brandId: "innova",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "innova-thah-airhandler36",
      modelNumber: "THAH-AIRHANDLER36",
      brandId: "innova",
      type: "wall-single",
    }
  ],
  configurations: [
    {
      id: "innova-standard-wall-single-30000-cfg-1",
      slug: "innova-standard-wall-single-30000-cfg-1",
      modelId: "innova-standard-wall-single-30000",
      outdoorUnitId: "innova-thtu-heatpump24",
      indoorUnitId: "innova-thah-airhandler36",
      coolingCapacityMinBtu: 27600,
      coolingCapacityMaxBtu: 27600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "innova-standard-wall-single-30000-cfg-2",
      slug: "innova-standard-wall-single-30000-cfg-2",
      modelId: "innova-standard-wall-single-30000",
      outdoorUnitId: "innova-hp36r410a",
      indoorUnitId: "innova-thah-airhandler36",
      coolingCapacityMinBtu: 27600,
      coolingCapacityMaxBtu: 27600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "innova-standard-wall-single-30000-cfg-3",
      slug: "innova-standard-wall-single-30000-cfg-3",
      modelId: "innova-standard-wall-single-30000",
      outdoorUnitId: "innova-hp36r",
      indoorUnitId: "innova-thah-airhandler36",
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
      configurationId: "innova-standard-wall-single-30000-cfg-1",
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
      configurationId: "innova-standard-wall-single-30000-cfg-2",
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
      configurationId: "innova-standard-wall-single-30000-cfg-3",
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
