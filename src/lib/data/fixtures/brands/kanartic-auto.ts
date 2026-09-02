import type { BrandDataset } from "../../types";

export const kanarticDataset: BrandDataset = {
  brand: {
    id: "kanartic",
    slug: "kanartic",
    name: "KANARTIC",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "kanartic-keos-series",
      slug: "kanartic-keos-series",
      name: "KEOS series",
      brandId: "kanartic",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "kanartic-keos-series-wall-single",
      slug: "kanartic-keos-series-wall-single",
      name: "KEOS series",
      seriesId: "kanartic-keos-series",
      brandId: "kanartic",
      modelNumber: "KEOS series",
      normalizedModelNumber: "keos-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 9300,
      heatingCapacity5FMaxBtu: 11100,
      seer2Min: 22,
      seer2Max: 26.4,
      hspf2Min: 10.5,
      hspf2Max: 11.6,
      cop5FMin: 1.85,
      cop5FMax: 1.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "kanartic-keos-18uhe-na",
      modelNumber: "KEOS-18UHE-NA",
      brandId: "kanartic",
      refrigerant: null as any,
    },
    {
      id: "kanartic-keos-12uhe-na",
      modelNumber: "KEOS-12UHE-NA",
      brandId: "kanartic",
      refrigerant: null as any,
    },
    {
      id: "kanartic-keos-09uhe-na",
      modelNumber: "KEOS-09UHE-NA",
      brandId: "kanartic",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "kanartic-keos-series-wall-single-cfg-1",
      slug: "kanartic-keos-series-wall-single-cfg-1",
      modelId: "kanartic-keos-series-wall-single",
      outdoorUnitId: "kanartic-keos-18uhe-na",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanartic-keos-series-wall-single-cfg-2",
      slug: "kanartic-keos-series-wall-single-cfg-2",
      modelId: "kanartic-keos-series-wall-single",
      outdoorUnitId: "kanartic-keos-12uhe-na",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanartic-keos-series-wall-single-cfg-3",
      slug: "kanartic-keos-series-wall-single-cfg-3",
      modelId: "kanartic-keos-series-wall-single",
      outdoorUnitId: "kanartic-keos-09uhe-na",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.4,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "kanartic-keos-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanartic-keos-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanartic-keos-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.85,
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
