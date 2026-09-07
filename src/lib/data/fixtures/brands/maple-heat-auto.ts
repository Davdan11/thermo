import type { BrandDataset } from "../../types";

export const mapleheatDataset: BrandDataset = {
  brand: {
    id: "maple-heat",
    slug: "maple-heat",
    name: "MAPLE HEAT",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "maple-heat-ne-t52-series",
      slug: "maple-heat-ne-t52-series",
      name: "NE-T52 Series",
      brandId: "maple-heat",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "maple-heat-ne-t52-series-wall-single-18000",
      slug: "maple-heat-ne-t52-series-wall-single-18000",
      name: "NE-T52 Series 18 000 BTU",
      seriesId: "maple-heat-ne-t52-series",
      brandId: "maple-heat",
      modelNumber: "NE-T52 Series 18k",
      normalizedModelNumber: "ne-t52-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 21.5,
      seer2Max: 21.5,
      hspf2Min: 11.3,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maple-heat-ne-t52-series-wall-single-12000",
      slug: "maple-heat-ne-t52-series-wall-single-12000",
      name: "NE-T52 Series 12 000 BTU",
      seriesId: "maple-heat-ne-t52-series",
      brandId: "maple-heat",
      modelNumber: "NE-T52 Series 12k",
      normalizedModelNumber: "ne-t52-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 10000,
      heatingCapacity5FMaxBtu: 10000,
      seer2Min: 25.5,
      seer2Max: 25.5,
      hspf2Min: 10.4,
      hspf2Max: 10.4,
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
      id: "maple-heat-ne-t52-mheat3018e",
      modelNumber: "NE-T52-MHEAT3018E",
      brandId: "maple-heat",
      refrigerant: null as any,
    },
    {
      id: "maple-heat-ne-t52-mheat3012e",
      modelNumber: "NE-T52-MHEAT3012E",
      brandId: "maple-heat",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "maple-heat-ne-t52-mheat3018i",
      modelNumber: "NE-T52-MHEAT3018I",
      brandId: "maple-heat",
      type: "wall-single",
    },
    {
      id: "maple-heat-ne-t52-mheat3012i",
      modelNumber: "NE-T52-MHEAT3012I",
      brandId: "maple-heat",
      type: "wall-single",
    }
  ],
  configurations: [
    {
      id: "maple-heat-ne-t52-series-wall-single-18000-cfg-1",
      slug: "maple-heat-ne-t52-series-wall-single-18000-cfg-1",
      modelId: "maple-heat-ne-t52-series-wall-single-18000",
      outdoorUnitId: "maple-heat-ne-t52-mheat3018e",
      indoorUnitId: "maple-heat-ne-t52-mheat3018i",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maple-heat-ne-t52-series-wall-single-12000-cfg-1",
      slug: "maple-heat-ne-t52-series-wall-single-12000-cfg-1",
      modelId: "maple-heat-ne-t52-series-wall-single-12000",
      outdoorUnitId: "maple-heat-ne-t52-mheat3012e",
      indoorUnitId: "maple-heat-ne-t52-mheat3012i",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "maple-heat-ne-t52-series-wall-single-18000-cfg-1",
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
      configurationId: "maple-heat-ne-t52-series-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
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
