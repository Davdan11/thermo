import type { BrandDataset } from "../../types";

export const maxrDataset: BrandDataset = {
  brand: {
    id: "max-r",
    slug: "max-r",
    name: "MAX-R",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "max-r-standard",
      slug: "max-r-standard",
      name: "Standard",
      brandId: "max-r",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "max-r-standard-wall-single",
      slug: "max-r-standard-wall-single",
      name: "Standard",
      seriesId: "max-r-standard",
      brandId: "max-r",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 23200,
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
      id: "max-r-max-r-9k30-out",
      modelNumber: "MAX-R/9K30-OUT",
      brandId: "max-r",
      refrigerant: null as any,
    },
    {
      id: "max-r-max-r-12k30-out",
      modelNumber: "MAX-R/12K30-OUT",
      brandId: "max-r",
      refrigerant: null as any,
    },
    {
      id: "max-r-max-r-18k20-out",
      modelNumber: "MAX-R/18K20-OUT",
      brandId: "max-r",
      refrigerant: null as any,
    },
    {
      id: "max-r-max-r-mz-27k30",
      modelNumber: "MAX-R(MZ)27K30",
      brandId: "max-r",
      refrigerant: null as any,
    },
    {
      id: "max-r-max-r-mz-36k30",
      modelNumber: "MAX-R(MZ)36K30",
      brandId: "max-r",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "max-r-standard-wall-single-cfg-1",
      slug: "max-r-standard-wall-single-cfg-1",
      modelId: "max-r-standard-wall-single",
      outdoorUnitId: "max-r-max-r-9k30-out",
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
      id: "max-r-standard-wall-single-cfg-2",
      slug: "max-r-standard-wall-single-cfg-2",
      modelId: "max-r-standard-wall-single",
      outdoorUnitId: "max-r-max-r-12k30-out",
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
      id: "max-r-standard-wall-single-cfg-3",
      slug: "max-r-standard-wall-single-cfg-3",
      modelId: "max-r-standard-wall-single",
      outdoorUnitId: "max-r-max-r-18k20-out",
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
      id: "max-r-standard-wall-single-cfg-4",
      slug: "max-r-standard-wall-single-cfg-4",
      modelId: "max-r-standard-wall-single",
      outdoorUnitId: "max-r-max-r-mz-27k30",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "max-r-standard-wall-single-cfg-5",
      slug: "max-r-standard-wall-single-cfg-5",
      modelId: "max-r-standard-wall-single",
      outdoorUnitId: "max-r-max-r-mz-36k30",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "max-r-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "max-r-standard-wall-single-cfg-2",
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
      configurationId: "max-r-standard-wall-single-cfg-3",
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
      configurationId: "max-r-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "max-r-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
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
