import type { BrandDataset } from "../../types";

export const ultramaxiairDataset: BrandDataset = {
  brand: {
    id: "ultra-maxi-air",
    slug: "ultra-maxi-air",
    name: "ULTRA MAXI AIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ultra-maxi-air-standard",
      slug: "ultra-maxi-air-standard",
      name: "Standard",
      brandId: "ultra-maxi-air",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ultra-maxi-air-standard-wall-single-18000",
      slug: "ultra-maxi-air-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "ultra-maxi-air-standard",
      brandId: "ultra-maxi-air",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11500,
      heatingCapacity5FMaxBtu: 11500,
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
      id: "ultra-maxi-air-lsab-18hrdn1",
      modelNumber: "LSAB-18HRDN1",
      brandId: "ultra-maxi-air",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ultra-maxi-air-standard-wall-single-18000-cfg-1",
      slug: "ultra-maxi-air-standard-wall-single-18000-cfg-1",
      modelId: "ultra-maxi-air-standard-wall-single-18000",
      outdoorUnitId: "ultra-maxi-air-lsab-18hrdn1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ultra-maxi-air-standard-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
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
