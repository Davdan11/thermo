import type { BrandDataset } from "../../types";

export const fujiecoDataset: BrandDataset = {
  brand: {
    id: "fujieco",
    slug: "fujieco",
    name: "FUJIECO",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "fujieco-standard",
      slug: "fujieco-standard",
      name: "Standard",
      brandId: "fujieco",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujieco-t-pro",
      slug: "fujieco-t-pro",
      name: "T-PRO",
      brandId: "fujieco",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "fujieco-standard-wall-single",
      slug: "fujieco-standard-wall-single",
      name: "Standard",
      seriesId: "fujieco-standard",
      brandId: "fujieco",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 25200,
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
      id: "fujieco-t-pro-wall-single",
      slug: "fujieco-t-pro-wall-single",
      name: "T-PRO",
      seriesId: "fujieco-t-pro",
      brandId: "fujieco",
      modelNumber: "T-PRO",
      normalizedModelNumber: "t-pro",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 13900,
      heatingCapacity5FMaxBtu: 21200,
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
      id: "fujieco-fefs-36h2md01-o",
      modelNumber: "FEFS-36H2MD01(O)",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-12h2tk-es-o",
      modelNumber: "FES-12H2TK-ES(O)",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-18h2tk-m2o",
      modelNumber: "FES-18H2TK-M2O",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-09h2tk-es-o",
      modelNumber: "FES-09H2TK-ES(O)",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-24h2t-o",
      modelNumber: "FES-24H2T*(O)",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-09h1tq-o",
      modelNumber: "FES-09H1TQ(O)",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-12h1tq-o",
      modelNumber: "FES-12H1TQ(O)",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-24h2tq-o",
      modelNumber: "FES-24H2TQ(O)",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-24h2tk-es-o",
      modelNumber: "FES-24H2TK-ES(O)",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-27h2tk-m3o",
      modelNumber: "FES-27H2TK-M3O",
      brandId: "fujieco",
      refrigerant: null as any,
    },
    {
      id: "fujieco-fes-36h2tk-m4o",
      modelNumber: "FES-36H2TK-M4O",
      brandId: "fujieco",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "fujieco-standard-wall-single-cfg-1",
      slug: "fujieco-standard-wall-single-cfg-1",
      modelId: "fujieco-standard-wall-single",
      outdoorUnitId: "fujieco-fefs-36h2md01-o",
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
      id: "fujieco-standard-wall-single-cfg-2",
      slug: "fujieco-standard-wall-single-cfg-2",
      modelId: "fujieco-standard-wall-single",
      outdoorUnitId: "fujieco-fes-12h2tk-es-o",
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
      id: "fujieco-standard-wall-single-cfg-3",
      slug: "fujieco-standard-wall-single-cfg-3",
      modelId: "fujieco-standard-wall-single",
      outdoorUnitId: "fujieco-fes-18h2tk-m2o",
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
      id: "fujieco-standard-wall-single-cfg-4",
      slug: "fujieco-standard-wall-single-cfg-4",
      modelId: "fujieco-standard-wall-single",
      outdoorUnitId: "fujieco-fes-09h2tk-es-o",
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
      id: "fujieco-standard-wall-single-cfg-5",
      slug: "fujieco-standard-wall-single-cfg-5",
      modelId: "fujieco-standard-wall-single",
      outdoorUnitId: "fujieco-fes-24h2t-o",
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
      id: "fujieco-standard-wall-single-cfg-6",
      slug: "fujieco-standard-wall-single-cfg-6",
      modelId: "fujieco-standard-wall-single",
      outdoorUnitId: "fujieco-fes-09h1tq-o",
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
      id: "fujieco-standard-wall-single-cfg-7",
      slug: "fujieco-standard-wall-single-cfg-7",
      modelId: "fujieco-standard-wall-single",
      outdoorUnitId: "fujieco-fes-12h1tq-o",
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
      id: "fujieco-standard-wall-single-cfg-8",
      slug: "fujieco-standard-wall-single-cfg-8",
      modelId: "fujieco-standard-wall-single",
      outdoorUnitId: "fujieco-fes-24h2tq-o",
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
      id: "fujieco-t-pro-wall-single-cfg-1",
      slug: "fujieco-t-pro-wall-single-cfg-1",
      modelId: "fujieco-t-pro-wall-single",
      outdoorUnitId: "fujieco-fes-24h2tk-es-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujieco-t-pro-wall-single-cfg-2",
      slug: "fujieco-t-pro-wall-single-cfg-2",
      modelId: "fujieco-t-pro-wall-single",
      outdoorUnitId: "fujieco-fes-27h2tk-m3o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujieco-t-pro-wall-single-cfg-3",
      slug: "fujieco-t-pro-wall-single-cfg-3",
      modelId: "fujieco-t-pro-wall-single",
      outdoorUnitId: "fujieco-fes-36h2tk-m4o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "fujieco-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujieco-standard-wall-single-cfg-2",
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
      configurationId: "fujieco-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujieco-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujieco-standard-wall-single-cfg-5",
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
      configurationId: "fujieco-standard-wall-single-cfg-6",
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
      configurationId: "fujieco-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujieco-standard-wall-single-cfg-8",
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
      configurationId: "fujieco-t-pro-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujieco-t-pro-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujieco-t-pro-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
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
