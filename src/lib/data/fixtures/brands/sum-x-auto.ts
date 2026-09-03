import type { BrandDataset } from "../../types";

export const sumxDataset: BrandDataset = {
  brand: {
    id: "sum-x",
    slug: "sum-x",
    name: "SUM X",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: false,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "sum-x-hiultra",
      slug: "sum-x-hiultra",
      name: "HiULTRA",
      brandId: "sum-x",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "sum-x-hiultra-wall-single-12000",
      slug: "sum-x-hiultra-wall-single-12000",
      name: "HiULTRA 12 000 BTU",
      seriesId: "sum-x-hiultra",
      brandId: "sum-x",
      modelNumber: "HiULTRA 12k",
      normalizedModelNumber: "hiultra-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 6800,
      seer2Min: 23.5,
      seer2Max: 23.5,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 2.05,
      cop5FMax: 2.05,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sum-x-hiultra-wall-single-18000",
      slug: "sum-x-hiultra-wall-single-18000",
      name: "HiULTRA 18 000 BTU",
      seriesId: "sum-x-hiultra",
      brandId: "sum-x",
      modelNumber: "HiULTRA 18k",
      normalizedModelNumber: "hiultra-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 10500,
      heatingCapacity5FMaxBtu: 10500,
      seer2Min: 20.5,
      seer2Max: 20.5,
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
      id: "sum-x-sm-12hfo2-cu",
      modelNumber: "SM-12HFO2-CU",
      brandId: "sum-x",
      refrigerant: null as any,
    },
    {
      id: "sum-x-sm-18hfo2-cu",
      modelNumber: "SM-18HFO2-CU",
      brandId: "sum-x",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "sum-x-hiultra-wall-single-12000-cfg-1",
      slug: "sum-x-hiultra-wall-single-12000-cfg-1",
      modelId: "sum-x-hiultra-wall-single-12000",
      outdoorUnitId: "sum-x-sm-12hfo2-cu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sum-x-hiultra-wall-single-18000-cfg-1",
      slug: "sum-x-hiultra-wall-single-18000-cfg-1",
      modelId: "sum-x-hiultra-wall-single-18000",
      outdoorUnitId: "sum-x-sm-18hfo2-cu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "sum-x-hiultra-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sum-x-hiultra-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
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
