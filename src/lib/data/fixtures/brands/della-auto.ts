import type { BrandDataset } from "../../types";

export const dellaDataset: BrandDataset = {
  brand: {
    id: "della",
    slug: "della",
    name: "DELLA",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "della-tp",
      slug: "della-tp",
      name: "TP",
      brandId: "della",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "della-tp-wall-single",
      slug: "della-tp-wall-single",
      name: "TP",
      seriesId: "della-tp",
      brandId: "della",
      modelNumber: "TP",
      normalizedModelNumber: "tp",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 5900,
      heatingCapacity5FMaxBtu: 13900,
      seer2Min: 20,
      seer2Max: 23.5,
      hspf2Min: 9,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "della-048-tp-9k1v-23s-out",
      modelNumber: "048-TP-9K1V-23S-OUT",
      brandId: "della",
      refrigerant: null as any,
    },
    {
      id: "della-048-tp-9k2v-23s-out",
      modelNumber: "048-TP-9K2V-23S-OUT",
      brandId: "della",
      refrigerant: null as any,
    },
    {
      id: "della-048-tp-12k1v-22s-out",
      modelNumber: "048-TP-12K1V-22S-OUT",
      brandId: "della",
      refrigerant: null as any,
    },
    {
      id: "della-048-tp-12k2v-23s-out",
      modelNumber: "048-TP-12K2V-23S-OUT",
      brandId: "della",
      refrigerant: null as any,
    },
    {
      id: "della-048-tp-18k2v-22s-out",
      modelNumber: "048-TP-18K2V-22S-OUT",
      brandId: "della",
      refrigerant: null as any,
    },
    {
      id: "della-048-tp-24k2v-20s-out",
      modelNumber: "048-TP-24K2V-20S-OUT",
      brandId: "della",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "della-tp-wall-single-cfg-1",
      slug: "della-tp-wall-single-cfg-1",
      modelId: "della-tp-wall-single",
      outdoorUnitId: "della-048-tp-9k1v-23s-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "della-tp-wall-single-cfg-2",
      slug: "della-tp-wall-single-cfg-2",
      modelId: "della-tp-wall-single",
      outdoorUnitId: "della-048-tp-9k2v-23s-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "della-tp-wall-single-cfg-3",
      slug: "della-tp-wall-single-cfg-3",
      modelId: "della-tp-wall-single",
      outdoorUnitId: "della-048-tp-12k1v-22s-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "della-tp-wall-single-cfg-4",
      slug: "della-tp-wall-single-cfg-4",
      modelId: "della-tp-wall-single",
      outdoorUnitId: "della-048-tp-12k2v-23s-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "della-tp-wall-single-cfg-5",
      slug: "della-tp-wall-single-cfg-5",
      modelId: "della-tp-wall-single",
      outdoorUnitId: "della-048-tp-18k2v-22s-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "della-tp-wall-single-cfg-6",
      slug: "della-tp-wall-single-cfg-6",
      modelId: "della-tp-wall-single",
      outdoorUnitId: "della-048-tp-24k2v-20s-out",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "della-tp-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "della-tp-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "della-tp-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "della-tp-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "della-tp-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "della-tp-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
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
