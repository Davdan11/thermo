import type { BrandDataset } from "../../types";

export const novairplusDataset: BrandDataset = {
  brand: {
    id: "novair-plus",
    slug: "novair-plus",
    name: "NOVAIR PLUS",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "novair-plus-standard",
      slug: "novair-plus-standard",
      name: "Standard",
      brandId: "novair-plus",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "novair-plus-standard-wall-single",
      slug: "novair-plus-standard-wall-single",
      name: "Standard",
      seriesId: "novair-plus-standard",
      brandId: "novair-plus",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 17200,
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
      id: "novair-plus-09evanvo",
      modelNumber: "09EVANVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-12evonvo",
      modelNumber: "12EVONVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-18evanvo",
      modelNumber: "18EVANVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-24evanvo",
      modelNumber: "24EVANVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-09evonvo",
      modelNumber: "09EVONVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-24evonvo",
      modelNumber: "24EVONVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "novair-plus-standard-wall-single-cfg-1",
      slug: "novair-plus-standard-wall-single-cfg-1",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-09evanvo",
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
      id: "novair-plus-standard-wall-single-cfg-2",
      slug: "novair-plus-standard-wall-single-cfg-2",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-12evonvo",
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
      id: "novair-plus-standard-wall-single-cfg-3",
      slug: "novair-plus-standard-wall-single-cfg-3",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-18evanvo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "novair-plus-standard-wall-single-cfg-4",
      slug: "novair-plus-standard-wall-single-cfg-4",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-24evanvo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "novair-plus-standard-wall-single-cfg-5",
      slug: "novair-plus-standard-wall-single-cfg-5",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-09evonvo",
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
      id: "novair-plus-standard-wall-single-cfg-6",
      slug: "novair-plus-standard-wall-single-cfg-6",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-09evanvo",
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
      id: "novair-plus-standard-wall-single-cfg-7",
      slug: "novair-plus-standard-wall-single-cfg-7",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-12evonvo",
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
      id: "novair-plus-standard-wall-single-cfg-8",
      slug: "novair-plus-standard-wall-single-cfg-8",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-18evanvo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "novair-plus-standard-wall-single-cfg-9",
      slug: "novair-plus-standard-wall-single-cfg-9",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-24evonvo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "novair-plus-standard-wall-single-cfg-10",
      slug: "novair-plus-standard-wall-single-cfg-10",
      modelId: "novair-plus-standard-wall-single",
      outdoorUnitId: "novair-plus-24evanvo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "novair-plus-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
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
