import type { BrandDataset } from "../../types";

export const mitsubishielectricDataset: BrandDataset = {
  brand: {
    id: "mitsubishi-electric",
    slug: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "mitsubishi-electric-p-series",
      slug: "mitsubishi-electric-p-series",
      name: "P series",
      brandId: "mitsubishi-electric",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series",
      slug: "mitsubishi-electric-m-series",
      name: "M series",
      brandId: "mitsubishi-electric",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-standard",
      slug: "mitsubishi-electric-standard",
      name: "Standard",
      brandId: "mitsubishi-electric",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "mitsubishi-electric-p-series-wall-single",
      slug: "mitsubishi-electric-p-series-wall-single",
      name: "P series",
      seriesId: "mitsubishi-electric-p-series",
      brandId: "mitsubishi-electric",
      modelNumber: "P series",
      normalizedModelNumber: "p-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 10200,
      heatingCapacity5FMaxBtu: 32200,
      seer2Min: 18.6,
      seer2Max: 21.9,
      hspf2Min: 8.6,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-wall-single",
      slug: "mitsubishi-electric-m-series-wall-single",
      name: "M series",
      seriesId: "mitsubishi-electric-m-series",
      brandId: "mitsubishi-electric",
      modelNumber: "M series",
      normalizedModelNumber: "m-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 9300,
      heatingCapacity5FMaxBtu: 25800,
      seer2Min: 15.2,
      seer2Max: 18.6,
      hspf2Min: 8.6,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-standard-wall-single",
      slug: "mitsubishi-electric-standard-wall-single",
      name: "Standard",
      seriesId: "mitsubishi-electric-standard",
      brandId: "mitsubishi-electric",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 9700,
      heatingCapacity5FMaxBtu: 20800,
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
      id: "mitsubishi-electric-puz-ak12nl",
      modelNumber: "PUZ-AK12NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-puz-ak18nl",
      modelNumber: "PUZ-AK18NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-puz-ah24nl",
      modelNumber: "PUZ-AH24NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-puz-ak36nl",
      modelNumber: "PUZ-AK36NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-puz-ak24nlhz",
      modelNumber: "PUZ-AK24NLHZ***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-puz-ak30nlhz",
      modelNumber: "PUZ-AK30NLHZ***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-puz-ak36nlhz",
      modelNumber: "PUZ-AK36NLHZ***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-puz-ak42nlhz",
      modelNumber: "PUZ-AK42NLHZ***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-puz-ah30nl",
      modelNumber: "PUZ-AH30NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-puz-ak42nl",
      modelNumber: "PUZ-AK42NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-ak24nlhz",
      modelNumber: "SUZ-AK24NLHZ***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-ak30nlhz",
      modelNumber: "SUZ-AK30NLHZ***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-ak36nlhz",
      modelNumber: "SUZ-AK36NLHZ***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-aa12nlhz",
      modelNumber: "SUZ-AA12NLHZ***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-aa18nlhz",
      modelNumber: "SUZ-AA18NLHZ***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-aa12nl",
      modelNumber: "SUZ-AA12NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-aa24nl",
      modelNumber: "SUZ-AA24NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-aa18nl",
      modelNumber: "SUZ-AA18NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-aa36nl",
      modelNumber: "SUZ-AA36NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    },
    {
      id: "mitsubishi-electric-suz-aa30nl",
      modelNumber: "SUZ-AA30NL***",
      brandId: "mitsubishi-electric",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-1",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-1",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ak12nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-2",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-2",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ak18nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.6,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-3",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-3",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ah24nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-4",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-4",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ak36nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-5",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-5",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ak24nlhz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.7,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-6",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-6",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ak30nlhz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-7",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-7",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ak36nlhz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-8",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-8",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ak42nlhz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18.7,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-9",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-9",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ah30nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21.9,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-wall-single-cfg-10",
      slug: "mitsubishi-electric-p-series-wall-single-cfg-10",
      modelId: "mitsubishi-electric-p-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-puz-ak42nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 19.1,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-wall-single-cfg-1",
      slug: "mitsubishi-electric-m-series-wall-single-cfg-1",
      modelId: "mitsubishi-electric-m-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-ak24nlhz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18.6,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-wall-single-cfg-2",
      slug: "mitsubishi-electric-m-series-wall-single-cfg-2",
      modelId: "mitsubishi-electric-m-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-ak30nlhz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 17.1,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-wall-single-cfg-3",
      slug: "mitsubishi-electric-m-series-wall-single-cfg-3",
      modelId: "mitsubishi-electric-m-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-ak36nlhz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.2,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-wall-single-cfg-4",
      slug: "mitsubishi-electric-m-series-wall-single-cfg-4",
      modelId: "mitsubishi-electric-m-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-aa12nlhz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 16.2,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-wall-single-cfg-5",
      slug: "mitsubishi-electric-m-series-wall-single-cfg-5",
      modelId: "mitsubishi-electric-m-series-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-aa18nlhz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-standard-wall-single-cfg-1",
      slug: "mitsubishi-electric-standard-wall-single-cfg-1",
      modelId: "mitsubishi-electric-standard-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-aa12nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11400,
      coolingCapacityMaxBtu: 11400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-standard-wall-single-cfg-2",
      slug: "mitsubishi-electric-standard-wall-single-cfg-2",
      modelId: "mitsubishi-electric-standard-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-aa24nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-standard-wall-single-cfg-3",
      slug: "mitsubishi-electric-standard-wall-single-cfg-3",
      modelId: "mitsubishi-electric-standard-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-aa18nl",
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
      id: "mitsubishi-electric-standard-wall-single-cfg-4",
      slug: "mitsubishi-electric-standard-wall-single-cfg-4",
      modelId: "mitsubishi-electric-standard-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-aa36nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-standard-wall-single-cfg-5",
      slug: "mitsubishi-electric-standard-wall-single-cfg-5",
      modelId: "mitsubishi-electric-standard-wall-single",
      outdoorUnitId: "mitsubishi-electric-suz-aa30nl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12100,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
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
