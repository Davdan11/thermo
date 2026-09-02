import type { BrandDataset } from "../../types";

export const comforttempsDataset: BrandDataset = {
  brand: {
    id: "comfort-temps",
    slug: "comfort-temps",
    name: "COMFORT TEMPS",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "comfort-temps-standard",
      slug: "comfort-temps-standard",
      name: "Standard",
      brandId: "comfort-temps",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-temps-t-pro-series",
      slug: "comfort-temps-t-pro-series",
      name: "T-PRO Series",
      brandId: "comfort-temps",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "comfort-temps-standard-wall-single",
      slug: "comfort-temps-standard-wall-single",
      name: "Standard",
      seriesId: "comfort-temps-standard",
      brandId: "comfort-temps",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 15500,
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
      id: "comfort-temps-t-pro-series-wall-single",
      slug: "comfort-temps-t-pro-series-wall-single",
      name: "T-PRO Series",
      seriesId: "comfort-temps-t-pro-series",
      brandId: "comfort-temps",
      modelNumber: "T-PRO Series",
      normalizedModelNumber: "t-pro-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 14000,
      seer2Min: 23,
      seer2Max: 24,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "comfort-temps-cel-bh091a-o",
      modelNumber: "CEL-BH091A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-cel-bh121a-o",
      modelNumber: "CEL-BH121A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-cel-bh092a-o",
      modelNumber: "CEL-BH092A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-cel-bh122a-o",
      modelNumber: "CEL-BH122A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-cel-bh182a-o",
      modelNumber: "CEL-BH182A-O*",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-cel-bh242a-o",
      modelNumber: "CEL-BH242A-O*",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-ctp-bh091a-o",
      modelNumber: "CTP-BH091A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-ctp-bh121a-o",
      modelNumber: "CTP-BH121A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-ctp-bh092a-o",
      modelNumber: "CTP-BH092A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-ctp-bh122a-o",
      modelNumber: "CTP-BH122A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-ctp-bh182a-o",
      modelNumber: "CTP-BH182A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    },
    {
      id: "comfort-temps-ctp-bh242a-o",
      modelNumber: "CTP-BH242A-O",
      brandId: "comfort-temps",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "comfort-temps-standard-wall-single-cfg-1",
      slug: "comfort-temps-standard-wall-single-cfg-1",
      modelId: "comfort-temps-standard-wall-single",
      outdoorUnitId: "comfort-temps-cel-bh091a-o",
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
      id: "comfort-temps-standard-wall-single-cfg-2",
      slug: "comfort-temps-standard-wall-single-cfg-2",
      modelId: "comfort-temps-standard-wall-single",
      outdoorUnitId: "comfort-temps-cel-bh121a-o",
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
      id: "comfort-temps-standard-wall-single-cfg-3",
      slug: "comfort-temps-standard-wall-single-cfg-3",
      modelId: "comfort-temps-standard-wall-single",
      outdoorUnitId: "comfort-temps-cel-bh092a-o",
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
      id: "comfort-temps-standard-wall-single-cfg-4",
      slug: "comfort-temps-standard-wall-single-cfg-4",
      modelId: "comfort-temps-standard-wall-single",
      outdoorUnitId: "comfort-temps-cel-bh122a-o",
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
      id: "comfort-temps-standard-wall-single-cfg-5",
      slug: "comfort-temps-standard-wall-single-cfg-5",
      modelId: "comfort-temps-standard-wall-single",
      outdoorUnitId: "comfort-temps-cel-bh182a-o",
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
      id: "comfort-temps-standard-wall-single-cfg-6",
      slug: "comfort-temps-standard-wall-single-cfg-6",
      modelId: "comfort-temps-standard-wall-single",
      outdoorUnitId: "comfort-temps-cel-bh242a-o",
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
      id: "comfort-temps-t-pro-series-wall-single-cfg-1",
      slug: "comfort-temps-t-pro-series-wall-single-cfg-1",
      modelId: "comfort-temps-t-pro-series-wall-single",
      outdoorUnitId: "comfort-temps-ctp-bh091a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-temps-t-pro-series-wall-single-cfg-2",
      slug: "comfort-temps-t-pro-series-wall-single-cfg-2",
      modelId: "comfort-temps-t-pro-series-wall-single",
      outdoorUnitId: "comfort-temps-ctp-bh121a-o",
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
      id: "comfort-temps-t-pro-series-wall-single-cfg-3",
      slug: "comfort-temps-t-pro-series-wall-single-cfg-3",
      modelId: "comfort-temps-t-pro-series-wall-single",
      outdoorUnitId: "comfort-temps-ctp-bh092a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-temps-t-pro-series-wall-single-cfg-4",
      slug: "comfort-temps-t-pro-series-wall-single-cfg-4",
      modelId: "comfort-temps-t-pro-series-wall-single",
      outdoorUnitId: "comfort-temps-ctp-bh122a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-temps-t-pro-series-wall-single-cfg-5",
      slug: "comfort-temps-t-pro-series-wall-single-cfg-5",
      modelId: "comfort-temps-t-pro-series-wall-single",
      outdoorUnitId: "comfort-temps-ctp-bh182a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-temps-t-pro-series-wall-single-cfg-6",
      slug: "comfort-temps-t-pro-series-wall-single-cfg-6",
      modelId: "comfort-temps-t-pro-series-wall-single",
      outdoorUnitId: "comfort-temps-ctp-bh242a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "comfort-temps-standard-wall-single-cfg-1",
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
      configurationId: "comfort-temps-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-temps-standard-wall-single-cfg-3",
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
      configurationId: "comfort-temps-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-temps-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-temps-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-temps-t-pro-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-temps-t-pro-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-temps-t-pro-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-temps-t-pro-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-temps-t-pro-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-temps-t-pro-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
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
