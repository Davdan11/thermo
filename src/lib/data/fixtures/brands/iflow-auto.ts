import type { BrandDataset } from "../../types";

export const iflowDataset: BrandDataset = {
  brand: {
    id: "iflow",
    slug: "iflow",
    name: "IFLOW",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "iflow-standard",
      slug: "iflow-standard",
      name: "Standard",
      brandId: "iflow",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "iflow-standard-wall-single",
      slug: "iflow-standard-wall-single",
      name: "Standard",
      seriesId: "iflow-standard",
      brandId: "iflow",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 34000,
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
      id: "iflow-70hpic24a",
      modelNumber: "70HPIC24A",
      brandId: "iflow",
      refrigerant: null as any,
    },
    {
      id: "iflow-70hpic30a",
      modelNumber: "70HPIC30A",
      brandId: "iflow",
      refrigerant: null as any,
    },
    {
      id: "iflow-70hpic36a",
      modelNumber: "70HPIC36A",
      brandId: "iflow",
      refrigerant: null as any,
    },
    {
      id: "iflow-70hpic48a",
      modelNumber: "70HPIC48A",
      brandId: "iflow",
      refrigerant: null as any,
    },
    {
      id: "iflow-70hpic60a",
      modelNumber: "70HPIC60A",
      brandId: "iflow",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "iflow-standard-wall-single-cfg-1",
      slug: "iflow-standard-wall-single-cfg-1",
      modelId: "iflow-standard-wall-single",
      outdoorUnitId: "iflow-70hpic24a",
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
      id: "iflow-standard-wall-single-cfg-2",
      slug: "iflow-standard-wall-single-cfg-2",
      modelId: "iflow-standard-wall-single",
      outdoorUnitId: "iflow-70hpic30a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "iflow-standard-wall-single-cfg-3",
      slug: "iflow-standard-wall-single-cfg-3",
      modelId: "iflow-standard-wall-single",
      outdoorUnitId: "iflow-70hpic36a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "iflow-standard-wall-single-cfg-4",
      slug: "iflow-standard-wall-single-cfg-4",
      modelId: "iflow-standard-wall-single",
      outdoorUnitId: "iflow-70hpic48a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "iflow-standard-wall-single-cfg-5",
      slug: "iflow-standard-wall-single-cfg-5",
      modelId: "iflow-standard-wall-single",
      outdoorUnitId: "iflow-70hpic60a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "iflow-standard-wall-single-cfg-6",
      slug: "iflow-standard-wall-single-cfg-6",
      modelId: "iflow-standard-wall-single",
      outdoorUnitId: "iflow-70hpic36a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "iflow-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "iflow-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "iflow-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "iflow-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "iflow-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "iflow-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
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
