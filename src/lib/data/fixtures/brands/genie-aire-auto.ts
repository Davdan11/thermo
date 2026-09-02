import type { BrandDataset } from "../../types";

export const genieaireDataset: BrandDataset = {
  brand: {
    id: "genie-aire",
    slug: "genie-aire",
    name: "GENIE AIRE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "genie-aire-ga-series",
      slug: "genie-aire-ga-series",
      name: "GA series",
      brandId: "genie-aire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "genie-aire-standard",
      slug: "genie-aire-standard",
      name: "Standard",
      brandId: "genie-aire",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "genie-aire-ga-series-wall-single",
      slug: "genie-aire-ga-series-wall-single",
      name: "GA series",
      seriesId: "genie-aire-ga-series",
      brandId: "genie-aire",
      modelNumber: "GA series",
      normalizedModelNumber: "ga-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 6300,
      heatingCapacity5FMaxBtu: 11400,
      seer2Min: 19.5,
      seer2Max: 21.5,
      hspf2Min: 8.7,
      hspf2Max: 9.1,
      cop5FMin: 2.06,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "genie-aire-standard-wall-single",
      slug: "genie-aire-standard-wall-single",
      name: "Standard",
      seriesId: "genie-aire-standard",
      brandId: "genie-aire",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 16500,
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
      id: "genie-aire-ga-09hp115v-o",
      modelNumber: "GA-09HP115V/O",
      brandId: "genie-aire",
      refrigerant: null as any,
    },
    {
      id: "genie-aire-ga-18hp230v-o",
      modelNumber: "GA-18HP230V/O",
      brandId: "genie-aire",
      refrigerant: null as any,
    },
    {
      id: "genie-aire-ga-12hp115v-o",
      modelNumber: "GA-12HP115V/O",
      brandId: "genie-aire",
      refrigerant: null as any,
    },
    {
      id: "genie-aire-ga-12hp230v-o",
      modelNumber: "GA-12HP230V/O",
      brandId: "genie-aire",
      refrigerant: null as any,
    },
    {
      id: "genie-aire-ga-24hp230v-o",
      modelNumber: "GA-24HP230V/O",
      brandId: "genie-aire",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "genie-aire-ga-series-wall-single-cfg-1",
      slug: "genie-aire-ga-series-wall-single-cfg-1",
      modelId: "genie-aire-ga-series-wall-single",
      outdoorUnitId: "genie-aire-ga-09hp115v-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "genie-aire-ga-series-wall-single-cfg-2",
      slug: "genie-aire-ga-series-wall-single-cfg-2",
      modelId: "genie-aire-ga-series-wall-single",
      outdoorUnitId: "genie-aire-ga-18hp230v-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "genie-aire-standard-wall-single-cfg-1",
      slug: "genie-aire-standard-wall-single-cfg-1",
      modelId: "genie-aire-standard-wall-single",
      outdoorUnitId: "genie-aire-ga-12hp115v-o",
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
      id: "genie-aire-standard-wall-single-cfg-2",
      slug: "genie-aire-standard-wall-single-cfg-2",
      modelId: "genie-aire-standard-wall-single",
      outdoorUnitId: "genie-aire-ga-12hp230v-o",
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
      id: "genie-aire-standard-wall-single-cfg-3",
      slug: "genie-aire-standard-wall-single-cfg-3",
      modelId: "genie-aire-standard-wall-single",
      outdoorUnitId: "genie-aire-ga-24hp230v-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "genie-aire-ga-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "genie-aire-ga-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "genie-aire-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "genie-aire-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "genie-aire-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
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
