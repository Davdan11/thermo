import type { BrandDataset } from "../../types";

export const climasmartDataset: BrandDataset = {
  brand: {
    id: "clima-smart",
    slug: "clima-smart",
    name: "CLIMA SMART",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "clima-smart-standard",
      slug: "clima-smart-standard",
      name: "Standard",
      brandId: "clima-smart",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "clima-smart-t-pro",
      slug: "clima-smart-t-pro",
      name: "T-PRO",
      brandId: "clima-smart",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "clima-smart-standard-wall-single",
      slug: "clima-smart-standard-wall-single",
      name: "Standard",
      seriesId: "clima-smart-standard",
      brandId: "clima-smart",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7100,
      heatingCapacity5FMaxBtu: 7600,
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
      id: "clima-smart-t-pro-wall-single",
      slug: "clima-smart-t-pro-wall-single",
      name: "T-PRO",
      seriesId: "clima-smart-t-pro",
      brandId: "clima-smart",
      modelNumber: "T-PRO",
      normalizedModelNumber: "t-pro",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 10000,
      heatingCapacity5FMaxBtu: 13900,
      seer2Min: 20,
      seer2Max: 22,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "clima-smart-mch12-cs-s23-o",
      modelNumber: "MCH12-CS-S23-O",
      brandId: "clima-smart",
      refrigerant: null as any,
    },
    {
      id: "clima-smart-mch12-cs-s23-230v-o",
      modelNumber: "MCH12-CS-S23-230V-O",
      brandId: "clima-smart",
      refrigerant: null as any,
    },
    {
      id: "clima-smart-mch18-cs-s23-o",
      modelNumber: "MCH18-CS-S23-O",
      brandId: "clima-smart",
      refrigerant: null as any,
    },
    {
      id: "clima-smart-mch24-cs-s23-o",
      modelNumber: "MCH24-CS-S23-O",
      brandId: "clima-smart",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "clima-smart-standard-wall-single-cfg-1",
      slug: "clima-smart-standard-wall-single-cfg-1",
      modelId: "clima-smart-standard-wall-single",
      outdoorUnitId: "clima-smart-mch12-cs-s23-o",
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
      id: "clima-smart-standard-wall-single-cfg-2",
      slug: "clima-smart-standard-wall-single-cfg-2",
      modelId: "clima-smart-standard-wall-single",
      outdoorUnitId: "clima-smart-mch12-cs-s23-230v-o",
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
      id: "clima-smart-t-pro-wall-single-cfg-1",
      slug: "clima-smart-t-pro-wall-single-cfg-1",
      modelId: "clima-smart-t-pro-wall-single",
      outdoorUnitId: "clima-smart-mch18-cs-s23-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "clima-smart-t-pro-wall-single-cfg-2",
      slug: "clima-smart-t-pro-wall-single-cfg-2",
      modelId: "clima-smart-t-pro-wall-single",
      outdoorUnitId: "clima-smart-mch24-cs-s23-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "clima-smart-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "clima-smart-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "clima-smart-t-pro-wall-single-cfg-1",
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
      configurationId: "clima-smart-t-pro-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
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
