import type { BrandDataset } from "../../types";

export const whynterDataset: BrandDataset = {
  brand: {
    id: "whynter",
    slug: "whynter",
    name: "WHYNTER",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "whynter-standard",
      slug: "whynter-standard",
      name: "Standard",
      brandId: "whynter",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "whynter-standard-wall-single-9000",
      slug: "whynter-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "whynter-standard",
      brandId: "whynter",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8600,
      heatingCapacity5FMaxBtu: 8600,
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
      id: "whynter-standard-wall-single-12000",
      slug: "whynter-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "whynter-standard",
      brandId: "whynter",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 9600,
      heatingCapacity5FMaxBtu: 9600,
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
      id: "whynter-mso-009h11522-01esag",
      modelNumber: "MSO-009H11522-01ESAG",
      brandId: "whynter",
      refrigerant: null as any,
    },
    {
      id: "whynter-mso-012h11522-01esag",
      modelNumber: "MSO-012H11522-01ESAG",
      brandId: "whynter",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "whynter-standard-wall-single-9000-cfg-1",
      slug: "whynter-standard-wall-single-9000-cfg-1",
      modelId: "whynter-standard-wall-single-9000",
      outdoorUnitId: "whynter-mso-009h11522-01esag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "whynter-standard-wall-single-12000-cfg-1",
      slug: "whynter-standard-wall-single-12000-cfg-1",
      modelId: "whynter-standard-wall-single-12000",
      outdoorUnitId: "whynter-mso-012h11522-01esag",
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
      configurationId: "whynter-standard-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "whynter-standard-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
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
