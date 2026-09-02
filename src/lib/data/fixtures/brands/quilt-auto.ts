import type { BrandDataset } from "../../types";

export const quiltDataset: BrandDataset = {
  brand: {
    id: "quilt",
    slug: "quilt",
    name: "QUILT",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "quilt-quilt",
      slug: "quilt-quilt",
      name: "Quilt",
      brandId: "quilt",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "quilt-quilt-wall-single-15000",
      slug: "quilt-quilt-wall-single-15000",
      name: "Quilt 15 000 BTU",
      seriesId: "quilt-quilt",
      brandId: "quilt",
      modelNumber: "Quilt 15k",
      normalizedModelNumber: "quilt-15000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 12000,
      seer2Min: 25,
      seer2Max: 25,
      hspf2Min: 12,
      hspf2Max: 12,
      cop5FMin: 2,
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
      id: "quilt-qo1-m2z18-nc-na",
      modelNumber: "QO1-M2Z18-NC-NA",
      brandId: "quilt",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "quilt-quilt-wall-single-15000-cfg-1",
      slug: "quilt-quilt-wall-single-15000-cfg-1",
      modelId: "quilt-quilt-wall-single-15000",
      outdoorUnitId: "quilt-qo1-m2z18-nc-na",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 25,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "quilt-quilt-wall-single-15000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2,
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
