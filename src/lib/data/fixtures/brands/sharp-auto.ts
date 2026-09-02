import type { BrandDataset } from "../../types";

export const sharpDataset: BrandDataset = {
  brand: {
    id: "sharp",
    slug: "sharp",
    name: "SHARP",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "sharp-standard",
      slug: "sharp-standard",
      name: "Standard",
      brandId: "sharp",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series",
      slug: "sharp-single-zone-series",
      name: "Single Zone series",
      brandId: "sharp",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-multi-zone-series",
      slug: "sharp-multi-zone-series",
      name: "Multi Zone series",
      brandId: "sharp",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "sharp-standard-wall-single",
      slug: "sharp-standard-wall-single",
      name: "Standard",
      seriesId: "sharp-standard",
      brandId: "sharp",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8400,
      heatingCapacity5FMaxBtu: 22600,
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
      id: "sharp-single-zone-series-wall-single",
      slug: "sharp-single-zone-series-wall-single",
      name: "Single Zone series",
      seriesId: "sharp-single-zone-series",
      brandId: "sharp",
      modelNumber: "Single Zone series",
      normalizedModelNumber: "single-zone-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 22400,
      seer2Min: 21,
      seer2Max: 25,
      hspf2Min: 10.5,
      hspf2Max: 11.5,
      cop5FMin: 2.1,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-multi-zone-series-wall-single",
      slug: "sharp-multi-zone-series-wall-single",
      name: "Multi Zone series",
      seriesId: "sharp-multi-zone-series",
      brandId: "sharp",
      modelNumber: "Multi Zone series",
      normalizedModelNumber: "multi-zone-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 24,
      seer2Max: 24,
      hspf2Min: 11.5,
      hspf2Max: 11.5,
      cop5FMin: 2.3,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "sharp-ae-x18tu",
      modelNumber: "AE-X18TU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x24tu",
      modelNumber: "AE-X24TU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x12tu",
      modelNumber: "AE-X12TU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x12thu",
      modelNumber: "AE-X12THU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x18thu",
      modelNumber: "AE-X18THU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x2m20tu",
      modelNumber: "AE-X2M20TU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x12zu",
      modelNumber: "AE-X12ZU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x12zhu",
      modelNumber: "AE-X12ZHU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x15zu",
      modelNumber: "AE-X15ZU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x18zu",
      modelNumber: "AE-X18ZU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x24zu",
      modelNumber: "AE-X24ZU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x18zhu1",
      modelNumber: "AE-X18ZHU1",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x18zhu",
      modelNumber: "AE-X18ZHU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x12zu1",
      modelNumber: "AE-X12ZU1",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x12zhu1",
      modelNumber: "AE-X12ZHU1",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x15zu1",
      modelNumber: "AE-X15ZU1",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x18zu1",
      modelNumber: "AE-X18ZU1",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x24zu1",
      modelNumber: "AE-X24ZU1",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x12cpu",
      modelNumber: "AE-X12CPU",
      brandId: "sharp",
      refrigerant: null as any,
    },
    {
      id: "sharp-ae-x3m24bu",
      modelNumber: "AE-X3M24BU",
      brandId: "sharp",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "sharp-standard-wall-single-cfg-1",
      slug: "sharp-standard-wall-single-cfg-1",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x18tu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-standard-wall-single-cfg-2",
      slug: "sharp-standard-wall-single-cfg-2",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x24tu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-standard-wall-single-cfg-3",
      slug: "sharp-standard-wall-single-cfg-3",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x12tu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-standard-wall-single-cfg-4",
      slug: "sharp-standard-wall-single-cfg-4",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x12thu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-standard-wall-single-cfg-5",
      slug: "sharp-standard-wall-single-cfg-5",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x18thu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-standard-wall-single-cfg-6",
      slug: "sharp-standard-wall-single-cfg-6",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x2m20tu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-standard-wall-single-cfg-7",
      slug: "sharp-standard-wall-single-cfg-7",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x12zu",
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
      id: "sharp-standard-wall-single-cfg-8",
      slug: "sharp-standard-wall-single-cfg-8",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x12zhu",
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
      id: "sharp-standard-wall-single-cfg-9",
      slug: "sharp-standard-wall-single-cfg-9",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x15zu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14000,
      coolingCapacityMaxBtu: 14000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-standard-wall-single-cfg-10",
      slug: "sharp-standard-wall-single-cfg-10",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x18zu",
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
      id: "sharp-standard-wall-single-cfg-11",
      slug: "sharp-standard-wall-single-cfg-11",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x24zu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-standard-wall-single-cfg-12",
      slug: "sharp-standard-wall-single-cfg-12",
      modelId: "sharp-standard-wall-single",
      outdoorUnitId: "sharp-ae-x18zhu1",
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
      id: "sharp-single-zone-series-wall-single-cfg-1",
      slug: "sharp-single-zone-series-wall-single-cfg-1",
      modelId: "sharp-single-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x18zhu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-wall-single-cfg-2",
      slug: "sharp-single-zone-series-wall-single-cfg-2",
      modelId: "sharp-single-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x12zu1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-wall-single-cfg-3",
      slug: "sharp-single-zone-series-wall-single-cfg-3",
      modelId: "sharp-single-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x12zhu1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-wall-single-cfg-4",
      slug: "sharp-single-zone-series-wall-single-cfg-4",
      modelId: "sharp-single-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x15zu1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 24,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-wall-single-cfg-5",
      slug: "sharp-single-zone-series-wall-single-cfg-5",
      modelId: "sharp-single-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x18zu1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-wall-single-cfg-6",
      slug: "sharp-single-zone-series-wall-single-cfg-6",
      modelId: "sharp-single-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x24zu1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 22,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-wall-single-cfg-7",
      slug: "sharp-single-zone-series-wall-single-cfg-7",
      modelId: "sharp-single-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x12cpu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12500,
      coolingCapacityMaxBtu: 12500,
      seer2: 21,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-wall-single-cfg-8",
      slug: "sharp-single-zone-series-wall-single-cfg-8",
      modelId: "sharp-single-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x18zu1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-single-zone-series-wall-single-cfg-9",
      slug: "sharp-single-zone-series-wall-single-cfg-9",
      modelId: "sharp-single-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x15zu1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 24,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "sharp-multi-zone-series-wall-single-cfg-1",
      slug: "sharp-multi-zone-series-wall-single-cfg-1",
      modelId: "sharp-multi-zone-series-wall-single",
      outdoorUnitId: "sharp-ae-x3m24bu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "sharp-standard-wall-single-cfg-1",
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
      configurationId: "sharp-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-standard-wall-single-cfg-4",
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
      configurationId: "sharp-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-standard-wall-single-cfg-12",
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
      configurationId: "sharp-single-zone-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-single-zone-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "sharp-multi-zone-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
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
