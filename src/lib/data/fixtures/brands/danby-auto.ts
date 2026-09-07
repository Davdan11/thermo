import type { BrandDataset } from "../../types";

export const danbyDataset: BrandDataset = {
  brand: {
    id: "danby",
    slug: "danby",
    name: "DANBY",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "danby-da-series",
      slug: "danby-da-series",
      name: "DA series",
      brandId: "danby",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "danby-da-series-wall-single-9000",
      slug: "danby-da-series-wall-single-9000",
      name: "DA series 9 000 BTU",
      seriesId: "danby-da-series",
      brandId: "danby",
      modelNumber: "DA series 9k",
      normalizedModelNumber: "da-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 8600,
      heatingCapacity5FMaxBtu: 8600,
      seer2Min: 24.6,
      seer2Max: 24.6,
      hspf2Min: 13,
      hspf2Max: 13,
      cop5FMin: 2.33,
      cop5FMax: 2.33,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "danby-da-series-wall-single-12000",
      slug: "danby-da-series-wall-single-12000",
      name: "DA series 12 000 BTU",
      seriesId: "danby-da-series",
      brandId: "danby",
      modelNumber: "DA series 12k",
      normalizedModelNumber: "da-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 9600,
      heatingCapacity5FMaxBtu: 9600,
      seer2Min: 23.1,
      seer2Max: 23.1,
      hspf2Min: 11.5,
      hspf2Max: 11.5,
      cop5FMin: 2.35,
      cop5FMax: 2.35,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "danby-das090agbahwdb-o",
      modelNumber: "DAS090AGBAHWDB-O",
      brandId: "danby",
      refrigerant: null as any,
    },
    {
      id: "danby-das120agbahwdb-o",
      modelNumber: "DAS120AGBAHWDB-O",
      brandId: "danby",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "danby-da-series-wall-single-9000-cfg-1",
      slug: "danby-da-series-wall-single-9000-cfg-1",
      modelId: "danby-da-series-wall-single-9000",
      outdoorUnitId: "danby-das090agbahwdb-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "danby-da-series-wall-single-12000-cfg-1",
      slug: "danby-da-series-wall-single-12000-cfg-1",
      modelId: "danby-da-series-wall-single-12000",
      outdoorUnitId: "danby-das120agbahwdb-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "danby-da-series-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "danby-da-series-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.35,
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
