import type { BrandDataset } from "../../types";

export const jkuDataset: BrandDataset = {
  brand: {
    id: "j-ku",
    slug: "j-ku",
    name: "J-KU",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "j-ku-standard",
      slug: "j-ku-standard",
      name: "Standard",
      brandId: "j-ku",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "j-ku-standard-wall-single",
      slug: "j-ku-standard-wall-single",
      name: "Standard",
      seriesId: "j-ku-standard",
      brandId: "j-ku",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 14500,
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
      id: "j-ku-jks09hp230v1xc",
      modelNumber: "JKS09HP230V1XC",
      brandId: "j-ku",
      refrigerant: null as any,
    },
    {
      id: "j-ku-jks12hp230v1xc",
      modelNumber: "JKS12HP230V1XC",
      brandId: "j-ku",
      refrigerant: null as any,
    },
    {
      id: "j-ku-jks24hp230v1xc",
      modelNumber: "JKS24HP230V1XC",
      brandId: "j-ku",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "j-ku-standard-wall-single-cfg-1",
      slug: "j-ku-standard-wall-single-cfg-1",
      modelId: "j-ku-standard-wall-single",
      outdoorUnitId: "j-ku-jks09hp230v1xc",
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
      id: "j-ku-standard-wall-single-cfg-2",
      slug: "j-ku-standard-wall-single-cfg-2",
      modelId: "j-ku-standard-wall-single",
      outdoorUnitId: "j-ku-jks12hp230v1xc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "j-ku-standard-wall-single-cfg-3",
      slug: "j-ku-standard-wall-single-cfg-3",
      modelId: "j-ku-standard-wall-single",
      outdoorUnitId: "j-ku-jks24hp230v1xc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "j-ku-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "j-ku-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "j-ku-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
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
