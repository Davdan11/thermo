import type { BrandDataset } from "../../types";

export const thermalzoneDataset: BrandDataset = {
  brand: {
    id: "thermal-zone",
    slug: "thermal-zone",
    name: "THERMAL ZONE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "thermal-zone-tzp-series",
      slug: "thermal-zone-tzp-series",
      name: "TZP Series",
      brandId: "thermal-zone",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-standard",
      slug: "thermal-zone-standard",
      name: "Standard",
      brandId: "thermal-zone",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "thermal-zone-tzp-series-central-ducted",
      slug: "thermal-zone-tzp-series-central-ducted",
      name: "TZP Series",
      seriesId: "thermal-zone-tzp-series",
      brandId: "thermal-zone",
      modelNumber: "TZP Series",
      normalizedModelNumber: "tzp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.6,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-standard-wall-single",
      slug: "thermal-zone-standard-wall-single",
      name: "Standard",
      seriesId: "thermal-zone-standard",
      brandId: "thermal-zone",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 37000,
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
      id: "thermal-zone-tzplv242aa",
      modelNumber: "TZPLV242AA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv242pa",
      modelNumber: "TZPLV242PA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv602pa",
      modelNumber: "TZPLV602PA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv302pa",
      modelNumber: "TZPLV302PA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv182pa",
      modelNumber: "TZPLV182PA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv362pa",
      modelNumber: "TZPLV362PA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv482pa",
      modelNumber: "TZPLV482PA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv602aa",
      modelNumber: "TZPLV602AA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv182aa",
      modelNumber: "TZPLV182AA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv362aa",
      modelNumber: "TZPLV362AA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv482aa",
      modelNumber: "TZPLV482AA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    },
    {
      id: "thermal-zone-tzplv302aa",
      modelNumber: "TZPLV302AA",
      brandId: "thermal-zone",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-1",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-1",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv242aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-2",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-2",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv242pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-3",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-3",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv602pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-4",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-4",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv302pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-5",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-5",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv182pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-6",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-6",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv362pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-7",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-7",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv482pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-8",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-8",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv182pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-9",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-9",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv242pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-10",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-10",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv302pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-11",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-11",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv362pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-12",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-12",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv362pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-13",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-13",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv482pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-14",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-14",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv482pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-15",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-15",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv602pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-tzp-series-central-ducted-cfg-16",
      slug: "thermal-zone-tzp-series-central-ducted-cfg-16",
      modelId: "thermal-zone-tzp-series-central-ducted",
      outdoorUnitId: "thermal-zone-tzplv242pa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-standard-wall-single-cfg-1",
      slug: "thermal-zone-standard-wall-single-cfg-1",
      modelId: "thermal-zone-standard-wall-single",
      outdoorUnitId: "thermal-zone-tzplv602aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-standard-wall-single-cfg-2",
      slug: "thermal-zone-standard-wall-single-cfg-2",
      modelId: "thermal-zone-standard-wall-single",
      outdoorUnitId: "thermal-zone-tzplv182aa",
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
      id: "thermal-zone-standard-wall-single-cfg-3",
      slug: "thermal-zone-standard-wall-single-cfg-3",
      modelId: "thermal-zone-standard-wall-single",
      outdoorUnitId: "thermal-zone-tzplv362aa",
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
      id: "thermal-zone-standard-wall-single-cfg-4",
      slug: "thermal-zone-standard-wall-single-cfg-4",
      modelId: "thermal-zone-standard-wall-single",
      outdoorUnitId: "thermal-zone-tzplv482aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-standard-wall-single-cfg-5",
      slug: "thermal-zone-standard-wall-single-cfg-5",
      modelId: "thermal-zone-standard-wall-single",
      outdoorUnitId: "thermal-zone-tzplv302aa",
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
      id: "thermal-zone-standard-wall-single-cfg-6",
      slug: "thermal-zone-standard-wall-single-cfg-6",
      modelId: "thermal-zone-standard-wall-single",
      outdoorUnitId: "thermal-zone-tzplv362aa",
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
      id: "thermal-zone-standard-wall-single-cfg-7",
      slug: "thermal-zone-standard-wall-single-cfg-7",
      modelId: "thermal-zone-standard-wall-single",
      outdoorUnitId: "thermal-zone-tzplv362aa",
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
      id: "thermal-zone-standard-wall-single-cfg-8",
      slug: "thermal-zone-standard-wall-single-cfg-8",
      modelId: "thermal-zone-standard-wall-single",
      outdoorUnitId: "thermal-zone-tzplv482aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "thermal-zone-standard-wall-single-cfg-9",
      slug: "thermal-zone-standard-wall-single-cfg-9",
      modelId: "thermal-zone-standard-wall-single",
      outdoorUnitId: "thermal-zone-tzplv602aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-tzp-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-standard-wall-single-cfg-2",
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
      configurationId: "thermal-zone-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-standard-wall-single-cfg-5",
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
      configurationId: "thermal-zone-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "thermal-zone-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
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
