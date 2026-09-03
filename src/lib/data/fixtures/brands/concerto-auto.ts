import type { BrandDataset } from "../../types";

export const concertoDataset: BrandDataset = {
  brand: {
    id: "concerto",
    slug: "concerto",
    name: "CONCERTO",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: false,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "concerto-standard",
      slug: "concerto-standard",
      name: "Standard",
      brandId: "concerto",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "concerto-standard-wall-single-12000",
      slug: "concerto-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "concerto-standard",
      brandId: "concerto",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8400,
      heatingCapacity5FMaxBtu: 8400,
      seer2Min: 21.7,
      seer2Max: 29.1,
      hspf2Min: 10.0,
      hspf2Max: 11.8,
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
      id: "concerto-mob30-12hfn1-mv0w",
      modelNumber: "MOB30-12HFN1-MV0W",
      brandId: "concerto",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "concerto-standard-wall-single-12000-cfg-1",
      slug: "concerto-standard-wall-single-12000-cfg-1",
      modelId: "concerto-standard-wall-single-12000",
      outdoorUnitId: "concerto-mob30-12hfn1-mv0w",
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
      configurationId: "concerto-standard-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
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
