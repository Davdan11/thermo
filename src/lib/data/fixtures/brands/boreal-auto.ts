import type { BrandDataset } from "../../types";

export const borealDataset: BrandDataset = {
  brand: {
    id: "boreal",
    slug: "boreal",
    name: "BOREAL",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "boreal-standard",
      slug: "boreal-standard",
      name: "Standard",
      brandId: "boreal",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-unix-high-efficiency-series",
      slug: "boreal-unix-high-efficiency-series",
      name: "Unix High-efficiency Series",
      brandId: "boreal",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-e-series",
      slug: "boreal-e-series",
      name: "E Series",
      brandId: "boreal",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "boreal-standard-wall-single",
      slug: "boreal-standard-wall-single",
      name: "Standard",
      seriesId: "boreal-standard",
      brandId: "boreal",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 14600,
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
      id: "boreal-unix-high-efficiency-series-central-ducted",
      slug: "boreal-unix-high-efficiency-series-central-ducted",
      name: "Unix High-efficiency Series",
      seriesId: "boreal-unix-high-efficiency-series",
      brandId: "boreal",
      modelNumber: "Unix High-efficiency Series",
      normalizedModelNumber: "unix-high-efficiency-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 16,
      seer2Max: 17,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-e-series-central-ducted",
      slug: "boreal-e-series-central-ducted",
      name: "E Series",
      seriesId: "boreal-e-series",
      brandId: "boreal",
      modelNumber: "E Series",
      normalizedModelNumber: "e-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 20600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "boreal-eqx09hpj1ob",
      modelNumber: "EQX09HPJ1OB",
      brandId: "boreal",
      refrigerant: null as any,
    },
    {
      id: "boreal-eqx12hpj1ob",
      modelNumber: "EQX12HPJ1OB",
      brandId: "boreal",
      refrigerant: null as any,
    },
    {
      id: "boreal-eqx18hpj1ob",
      modelNumber: "EQX18HPJ1OB",
      brandId: "boreal",
      refrigerant: null as any,
    },
    {
      id: "boreal-eqx24hpj1ob",
      modelNumber: "EQX24HPJ1OB",
      brandId: "boreal",
      refrigerant: null as any,
    },
    {
      id: "boreal-envbr36hpj1oa",
      modelNumber: "ENVBR36HPJ1OA",
      brandId: "boreal",
      refrigerant: null as any,
    },
    {
      id: "boreal-envbr60hpj1oa",
      modelNumber: "ENVBR60HPJ1OA",
      brandId: "boreal",
      refrigerant: null as any,
    },
    {
      id: "boreal-enx36hpj132oa",
      modelNumber: "ENX36HPJ132OA",
      brandId: "boreal",
      refrigerant: null as any,
    },
    {
      id: "boreal-enx60hpj132oa",
      modelNumber: "ENX60HPJ132OA",
      brandId: "boreal",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "boreal-standard-wall-single-cfg-1",
      slug: "boreal-standard-wall-single-cfg-1",
      modelId: "boreal-standard-wall-single",
      outdoorUnitId: "boreal-eqx09hpj1ob",
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
      id: "boreal-standard-wall-single-cfg-2",
      slug: "boreal-standard-wall-single-cfg-2",
      modelId: "boreal-standard-wall-single",
      outdoorUnitId: "boreal-eqx12hpj1ob",
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
      id: "boreal-standard-wall-single-cfg-3",
      slug: "boreal-standard-wall-single-cfg-3",
      modelId: "boreal-standard-wall-single",
      outdoorUnitId: "boreal-eqx18hpj1ob",
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
      id: "boreal-standard-wall-single-cfg-4",
      slug: "boreal-standard-wall-single-cfg-4",
      modelId: "boreal-standard-wall-single",
      outdoorUnitId: "boreal-eqx24hpj1ob",
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
      id: "boreal-unix-high-efficiency-series-central-ducted-cfg-1",
      slug: "boreal-unix-high-efficiency-series-central-ducted-cfg-1",
      modelId: "boreal-unix-high-efficiency-series-central-ducted",
      outdoorUnitId: "boreal-envbr36hpj1oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-unix-high-efficiency-series-central-ducted-cfg-2",
      slug: "boreal-unix-high-efficiency-series-central-ducted-cfg-2",
      modelId: "boreal-unix-high-efficiency-series-central-ducted",
      outdoorUnitId: "boreal-envbr36hpj1oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-unix-high-efficiency-series-central-ducted-cfg-3",
      slug: "boreal-unix-high-efficiency-series-central-ducted-cfg-3",
      modelId: "boreal-unix-high-efficiency-series-central-ducted",
      outdoorUnitId: "boreal-envbr60hpj1oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-unix-high-efficiency-series-central-ducted-cfg-4",
      slug: "boreal-unix-high-efficiency-series-central-ducted-cfg-4",
      modelId: "boreal-unix-high-efficiency-series-central-ducted",
      outdoorUnitId: "boreal-envbr60hpj1oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-unix-high-efficiency-series-central-ducted-cfg-5",
      slug: "boreal-unix-high-efficiency-series-central-ducted-cfg-5",
      modelId: "boreal-unix-high-efficiency-series-central-ducted",
      outdoorUnitId: "boreal-envbr36hpj1oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-unix-high-efficiency-series-central-ducted-cfg-6",
      slug: "boreal-unix-high-efficiency-series-central-ducted-cfg-6",
      modelId: "boreal-unix-high-efficiency-series-central-ducted",
      outdoorUnitId: "boreal-envbr36hpj1oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-unix-high-efficiency-series-central-ducted-cfg-7",
      slug: "boreal-unix-high-efficiency-series-central-ducted-cfg-7",
      modelId: "boreal-unix-high-efficiency-series-central-ducted",
      outdoorUnitId: "boreal-envbr60hpj1oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-unix-high-efficiency-series-central-ducted-cfg-8",
      slug: "boreal-unix-high-efficiency-series-central-ducted-cfg-8",
      modelId: "boreal-unix-high-efficiency-series-central-ducted",
      outdoorUnitId: "boreal-envbr60hpj1oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-e-series-central-ducted-cfg-1",
      slug: "boreal-e-series-central-ducted-cfg-1",
      modelId: "boreal-e-series-central-ducted",
      outdoorUnitId: "boreal-enx36hpj132oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-e-series-central-ducted-cfg-2",
      slug: "boreal-e-series-central-ducted-cfg-2",
      modelId: "boreal-e-series-central-ducted",
      outdoorUnitId: "boreal-enx36hpj132oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-e-series-central-ducted-cfg-3",
      slug: "boreal-e-series-central-ducted-cfg-3",
      modelId: "boreal-e-series-central-ducted",
      outdoorUnitId: "boreal-enx60hpj132oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "boreal-e-series-central-ducted-cfg-4",
      slug: "boreal-e-series-central-ducted-cfg-4",
      modelId: "boreal-e-series-central-ducted",
      outdoorUnitId: "boreal-enx60hpj132oa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 18.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "boreal-standard-wall-single-cfg-1",
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
      configurationId: "boreal-standard-wall-single-cfg-2",
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
      configurationId: "boreal-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-unix-high-efficiency-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-unix-high-efficiency-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-unix-high-efficiency-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-unix-high-efficiency-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-unix-high-efficiency-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-unix-high-efficiency-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-unix-high-efficiency-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-unix-high-efficiency-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-e-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-e-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-e-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "boreal-e-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.1,
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
