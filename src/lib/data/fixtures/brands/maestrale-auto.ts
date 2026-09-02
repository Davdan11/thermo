import type { BrandDataset } from "../../types";

export const maestraleDataset: BrandDataset = {
  brand: {
    id: "maestrale",
    slug: "maestrale",
    name: "Maestrale",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "maestrale-standard",
      slug: "maestrale-standard",
      name: "Standard",
      brandId: "maestrale",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maestrale-boreas-series",
      slug: "maestrale-boreas-series",
      name: "Boreas series",
      brandId: "maestrale",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "maestrale-standard-wall-single",
      slug: "maestrale-standard-wall-single",
      name: "Standard",
      seriesId: "maestrale-standard",
      brandId: "maestrale",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 10500,
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
      id: "maestrale-boreas-series-wall-single",
      slug: "maestrale-boreas-series-wall-single",
      name: "Boreas series",
      seriesId: "maestrale-boreas-series",
      brandId: "maestrale",
      modelNumber: "Boreas series",
      normalizedModelNumber: "boreas-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 22400,
      seer2Min: 22.5,
      seer2Max: 24,
      hspf2Min: 10,
      hspf2Max: 10.5,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "maestrale-tsa12maqui1j0x24-0",
      modelNumber: "TSA12MAQUI1J0X24-0",
      brandId: "maestrale",
      refrigerant: null as any,
    },
    {
      id: "maestrale-tsa18maqui1j0x24-0",
      modelNumber: "TSA18MAQUI1J0X24-0",
      brandId: "maestrale",
      refrigerant: null as any,
    },
    {
      id: "maestrale-tsb24mbor3j0x24",
      modelNumber: "TSB24MBOR3J0X24",
      brandId: "maestrale",
      refrigerant: null as any,
    },
    {
      id: "maestrale-tsb36mbor4j0x24",
      modelNumber: "TSB36MBOR4J0X24",
      brandId: "maestrale",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "maestrale-standard-wall-single-cfg-1",
      slug: "maestrale-standard-wall-single-cfg-1",
      modelId: "maestrale-standard-wall-single",
      outdoorUnitId: "maestrale-tsa12maqui1j0x24-0",
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
      id: "maestrale-standard-wall-single-cfg-2",
      slug: "maestrale-standard-wall-single-cfg-2",
      modelId: "maestrale-standard-wall-single",
      outdoorUnitId: "maestrale-tsa18maqui1j0x24-0",
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
      id: "maestrale-boreas-series-wall-single-cfg-1",
      slug: "maestrale-boreas-series-wall-single-cfg-1",
      modelId: "maestrale-boreas-series-wall-single",
      outdoorUnitId: "maestrale-tsb24mbor3j0x24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maestrale-boreas-series-wall-single-cfg-2",
      slug: "maestrale-boreas-series-wall-single-cfg-2",
      modelId: "maestrale-boreas-series-wall-single",
      outdoorUnitId: "maestrale-tsb36mbor4j0x24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 22.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "maestrale-standard-wall-single-cfg-1",
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
      configurationId: "maestrale-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "maestrale-boreas-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "maestrale-boreas-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
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
