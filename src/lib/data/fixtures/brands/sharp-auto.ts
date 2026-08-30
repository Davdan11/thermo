import type { BrandDataset } from "../../types";

export const sharpDataset: BrandDataset = {
  brand: {
    id: "sharp",
    slug: "sharp",
    name: "Sharp",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "sharp-single-zone-series",
      slug: "sharp-single-zone-series",
      name: "Single Zone series",
      brandId: "sharp",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-multi-zone-series",
      slug: "sharp-multi-zone-series",
      name: "Multi Zone series",
      brandId: "sharp",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "sharp-single-zone-series-multi-zone",
      slug: "sharp-single-zone-series-multi-zone",
      name: "Single Zone series",
      seriesId: "sharp-single-zone-series",
      brandId: "sharp",
      modelNumber: "Single Zone series",
      normalizedModelNumber: "single-zone-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 19500,
      seer2Min: 21,
      seer2Max: 25,
      hspf2Min: 10.5,
      hspf2Max: 11.5,
      cop5FMin: 1.9,
      cop5FMax: 2.2,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-multi-zone-series-multi-zone",
      slug: "sharp-multi-zone-series-multi-zone",
      name: "Multi Zone series",
      seriesId: "sharp-multi-zone-series",
      brandId: "sharp",
      modelNumber: "Multi Zone series",
      normalizedModelNumber: "multi-zone-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 21200,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 24,
      seer2Max: 24,
      hspf2Min: 11.5,
      hspf2Max: 11.5,
      cop5FMin: 2.3,
      cop5FMax: 2.3,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "sharp",
      modelNumber: "  -      ",
      brandId: "sharp",
      refrigerant: "R-32" as any,
    }
  ],
  indoorUnits: [
    {
      id: "sharp",
      modelNumber: "  -       ",
      brandId: "sharp",
      type: "multi-zone",
    }
  ],
  configurations: [
    {
      id: "sharp-single-zone-series-multi-zone-cfg-1",
      slug: "sharp-single-zone-series-multi-zone-cfg-1",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-2",
      slug: "sharp-single-zone-series-multi-zone-cfg-2",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-3",
      slug: "sharp-single-zone-series-multi-zone-cfg-3",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 12500,
      coolingCapacityMaxBtu: 12500,
      seer2: 21,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-4",
      slug: "sharp-single-zone-series-multi-zone-cfg-4",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-5",
      slug: "sharp-single-zone-series-multi-zone-cfg-5",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-6",
      slug: "sharp-single-zone-series-multi-zone-cfg-6",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-7",
      slug: "sharp-single-zone-series-multi-zone-cfg-7",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-8",
      slug: "sharp-single-zone-series-multi-zone-cfg-8",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 24,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-9",
      slug: "sharp-single-zone-series-multi-zone-cfg-9",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 24,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-10",
      slug: "sharp-single-zone-series-multi-zone-cfg-10",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 24,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-11",
      slug: "sharp-single-zone-series-multi-zone-cfg-11",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 24,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-12",
      slug: "sharp-single-zone-series-multi-zone-cfg-12",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25,
      hspf2: 11.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-13",
      slug: "sharp-single-zone-series-multi-zone-cfg-13",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-14",
      slug: "sharp-single-zone-series-multi-zone-cfg-14",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-15",
      slug: "sharp-single-zone-series-multi-zone-cfg-15",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-16",
      slug: "sharp-single-zone-series-multi-zone-cfg-16",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-17",
      slug: "sharp-single-zone-series-multi-zone-cfg-17",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 22,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-multi-zone-cfg-18",
      slug: "sharp-single-zone-series-multi-zone-cfg-18",
      modelId: "sharp-single-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 22,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-multi-zone-series-multi-zone-cfg-1",
      slug: "sharp-multi-zone-series-multi-zone-cfg-1",
      modelId: "sharp-multi-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24,
      hspf2: 11.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-multi-zone-series-multi-zone-cfg-2",
      slug: "sharp-multi-zone-series-multi-zone-cfg-2",
      modelId: "sharp-multi-zone-series-multi-zone",
      outdoorUnitId: "sharp",
      indoorUnitId: "sharp",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24,
      hspf2: 11.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-multi-zone-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-multi-zone-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-multi-zone-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.3,
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
