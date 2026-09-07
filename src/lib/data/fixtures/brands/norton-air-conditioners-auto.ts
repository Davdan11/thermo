import type { BrandDataset } from "../../types";

export const nortonairconditionersDataset: BrandDataset = {
  brand: {
    id: "norton-air-conditioners",
    slug: "norton-air-conditioners",
    name: "NORTON AIR CONDITIONERS",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "norton-air-conditioners-ohp-series",
      slug: "norton-air-conditioners-ohp-series",
      name: "OHP Series",
      brandId: "norton-air-conditioners",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "norton-air-conditioners-ohp-series-wall-single-12000",
      slug: "norton-air-conditioners-ohp-series-wall-single-12000",
      name: "OHP Series 12 000 BTU",
      seriesId: "norton-air-conditioners-ohp-series",
      brandId: "norton-air-conditioners",
      modelNumber: "OHP Series 12k",
      normalizedModelNumber: "ohp-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 10000,
      heatingCapacity5FMaxBtu: 10000,
      seer2Min: 25.5,
      seer2Max: 25.5,
      hspf2Min: 10.4,
      hspf2Max: 10.4,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "norton-air-conditioners-ohp-series-wall-single-9000",
      slug: "norton-air-conditioners-ohp-series-wall-single-9000",
      name: "OHP Series 9 000 BTU",
      seriesId: "norton-air-conditioners-ohp-series",
      brandId: "norton-air-conditioners",
      modelNumber: "OHP Series 9k",
      normalizedModelNumber: "ohp-series-9000",
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
    }
  ],
  outdoorUnits: [
    {
      id: "norton-air-conditioners-ohp-12-22-23-a",
      modelNumber: "OHP-12-22-23-A",
      brandId: "norton-air-conditioners",
      refrigerant: null as any,
    },
    {
      id: "norton-air-conditioners-ohp-09-22-23-a",
      modelNumber: "OHP-09-22-23-A",
      brandId: "norton-air-conditioners",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "norton-air-conditioners-ohp-series-wall-single-12000-cfg-1",
      slug: "norton-air-conditioners-ohp-series-wall-single-12000-cfg-1",
      modelId: "norton-air-conditioners-ohp-series-wall-single-12000",
      outdoorUnitId: "norton-air-conditioners-ohp-12-22-23-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "norton-air-conditioners-ohp-series-wall-single-9000-cfg-1",
      slug: "norton-air-conditioners-ohp-series-wall-single-9000-cfg-1",
      modelId: "norton-air-conditioners-ohp-series-wall-single-9000",
      outdoorUnitId: "norton-air-conditioners-ohp-09-22-23-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "norton-air-conditioners-ohp-series-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "norton-air-conditioners-ohp-series-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.33,
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
