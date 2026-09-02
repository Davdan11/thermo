import type { BrandDataset } from "../../types";

export const kwiikDataset: BrandDataset = {
  brand: {
    id: "kwiik",
    slug: "kwiik",
    name: "KWIIK",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "kwiik-hiultra",
      slug: "kwiik-hiultra",
      name: "HiULTRA",
      brandId: "kwiik",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "kwiik-hiultra-wall-single",
      slug: "kwiik-hiultra-wall-single",
      name: "HiULTRA",
      seriesId: "kwiik-hiultra",
      brandId: "kwiik",
      modelNumber: "HiULTRA",
      normalizedModelNumber: "hiultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 10800,
      heatingCapacity5FMaxBtu: 18000,
      seer2Min: 21,
      seer2Max: 23,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "kwiik-kkca-12ex2-scu",
      modelNumber: "KKCA-12EX2-SCU",
      brandId: "kwiik",
      refrigerant: null as any,
    },
    {
      id: "kwiik-kkca-18ex2-scu",
      modelNumber: "KKCA-18EX2-SCU",
      brandId: "kwiik",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "kwiik-hiultra-wall-single-cfg-1",
      slug: "kwiik-hiultra-wall-single-cfg-1",
      modelId: "kwiik-hiultra-wall-single",
      outdoorUnitId: "kwiik-kkca-12ex2-scu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kwiik-hiultra-wall-single-cfg-2",
      slug: "kwiik-hiultra-wall-single-cfg-2",
      modelId: "kwiik-hiultra-wall-single",
      outdoorUnitId: "kwiik-kkca-18ex2-scu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "kwiik-hiultra-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kwiik-hiultra-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.9,
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
