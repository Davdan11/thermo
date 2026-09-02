import type { BrandDataset } from "../../types";

export const azurDataset: BrandDataset = {
  brand: {
    id: "azur",
    slug: "azur",
    name: "AZUR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "azur-standard",
      slug: "azur-standard",
      name: "Standard",
      brandId: "azur",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-hi-multi-xtreme",
      slug: "azur-hi-multi-xtreme",
      name: "Hi MULTI Xtreme",
      brandId: "azur",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-hi-ultra-hd",
      slug: "azur-hi-ultra-hd",
      name: "Hi ULTRA HD",
      brandId: "azur",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "azur-standard-wall-single",
      slug: "azur-standard-wall-single",
      name: "Standard",
      seriesId: "azur-standard",
      brandId: "azur",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 40000,
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
      id: "azur-hi-multi-xtreme-wall-single",
      slug: "azur-hi-multi-xtreme-wall-single",
      name: "Hi MULTI Xtreme",
      seriesId: "azur-hi-multi-xtreme",
      brandId: "azur",
      modelNumber: "Hi MULTI Xtreme",
      normalizedModelNumber: "hi-multi-xtreme",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 24000,
      seer2Min: 20,
      seer2Max: 22,
      hspf2Min: 8.95,
      hspf2Max: 9.05,
      cop5FMin: 1.84,
      cop5FMax: 1.84,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-hi-ultra-hd-central-ducted",
      slug: "azur-hi-ultra-hd-central-ducted",
      name: "Hi ULTRA HD",
      seriesId: "azur-hi-ultra-hd",
      brandId: "azur",
      modelNumber: "Hi ULTRA HD",
      normalizedModelNumber: "hi-ultra-hd",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 31000,
      seer2Min: 16.5,
      seer2Max: 17.5,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.9,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "azur-az-09da17ext",
      modelNumber: "AZ-09DA17EXT",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-12ca22ext",
      modelNumber: "AZ-12CA22EXT",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-18ca17ext",
      modelNumber: "AZ-18CA17EXT",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-18ca22ext",
      modelNumber: "AZ-18CA22EXT",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-24hpa",
      modelNumber: "AZ-24HPA",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-36hpa",
      modelNumber: "AZ-36HPA",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-60hpa",
      modelNumber: "AZ-60HPA",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-36hpb",
      modelNumber: "AZ-36HPB",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-60hpb",
      modelNumber: "AZ-60HPB",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-24m322sco",
      modelNumber: "AZ-24M322SCO",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-42m522sco",
      modelNumber: "AZ-42M522SCO",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-36m422sco",
      modelNumber: "AZ-36M422SCO",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-24hpb",
      modelNumber: "AZ-24HPB",
      brandId: "azur",
      refrigerant: null as any,
    },
    {
      id: "azur-az-48hpb",
      modelNumber: "AZ-48HPB",
      brandId: "azur",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "azur-standard-wall-single-cfg-1",
      slug: "azur-standard-wall-single-cfg-1",
      modelId: "azur-standard-wall-single",
      outdoorUnitId: "azur-az-09da17ext",
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
      id: "azur-standard-wall-single-cfg-2",
      slug: "azur-standard-wall-single-cfg-2",
      modelId: "azur-standard-wall-single",
      outdoorUnitId: "azur-az-12ca22ext",
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
      id: "azur-standard-wall-single-cfg-3",
      slug: "azur-standard-wall-single-cfg-3",
      modelId: "azur-standard-wall-single",
      outdoorUnitId: "azur-az-18ca17ext",
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
      id: "azur-standard-wall-single-cfg-4",
      slug: "azur-standard-wall-single-cfg-4",
      modelId: "azur-standard-wall-single",
      outdoorUnitId: "azur-az-18ca22ext",
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
      id: "azur-standard-wall-single-cfg-5",
      slug: "azur-standard-wall-single-cfg-5",
      modelId: "azur-standard-wall-single",
      outdoorUnitId: "azur-az-24hpa",
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
      id: "azur-standard-wall-single-cfg-6",
      slug: "azur-standard-wall-single-cfg-6",
      modelId: "azur-standard-wall-single",
      outdoorUnitId: "azur-az-36hpa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-standard-wall-single-cfg-7",
      slug: "azur-standard-wall-single-cfg-7",
      modelId: "azur-standard-wall-single",
      outdoorUnitId: "azur-az-60hpa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-standard-wall-single-cfg-8",
      slug: "azur-standard-wall-single-cfg-8",
      modelId: "azur-standard-wall-single",
      outdoorUnitId: "azur-az-36hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-standard-wall-single-cfg-9",
      slug: "azur-standard-wall-single-cfg-9",
      modelId: "azur-standard-wall-single",
      outdoorUnitId: "azur-az-60hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-hi-multi-xtreme-wall-single-cfg-1",
      slug: "azur-hi-multi-xtreme-wall-single-cfg-1",
      modelId: "azur-hi-multi-xtreme-wall-single",
      outdoorUnitId: "azur-az-24m322sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-hi-multi-xtreme-wall-single-cfg-2",
      slug: "azur-hi-multi-xtreme-wall-single-cfg-2",
      modelId: "azur-hi-multi-xtreme-wall-single",
      outdoorUnitId: "azur-az-42m522sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-hi-multi-xtreme-wall-single-cfg-3",
      slug: "azur-hi-multi-xtreme-wall-single-cfg-3",
      modelId: "azur-hi-multi-xtreme-wall-single",
      outdoorUnitId: "azur-az-36m422sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-hi-ultra-hd-central-ducted-cfg-1",
      slug: "azur-hi-ultra-hd-central-ducted-cfg-1",
      modelId: "azur-hi-ultra-hd-central-ducted",
      outdoorUnitId: "azur-az-24hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "azur-hi-ultra-hd-central-ducted-cfg-2",
      slug: "azur-hi-ultra-hd-central-ducted-cfg-2",
      modelId: "azur-hi-ultra-hd-central-ducted",
      outdoorUnitId: "azur-az-48hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "azur-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-standard-wall-single-cfg-2",
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
      configurationId: "azur-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-hi-multi-xtreme-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-hi-multi-xtreme-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-hi-multi-xtreme-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-hi-ultra-hd-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "azur-hi-ultra-hd-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.9,
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
