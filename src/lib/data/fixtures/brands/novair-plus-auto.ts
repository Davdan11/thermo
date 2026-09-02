import type { BrandDataset } from "../../types";

export const novairplusDataset: BrandDataset = {
  brand: {
    id: "novair-plus",
    slug: "novair-plus",
    name: "NOVAIR PLUS",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "novair-plus-standard",
      slug: "novair-plus-standard",
      name: "Standard",
      brandId: "novair-plus",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "novair-plus-standard-wall-single-9000",
      slug: "novair-plus-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "novair-plus-standard",
      brandId: "novair-plus",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 7200,
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
      id: "novair-plus-standard-wall-single-12000",
      slug: "novair-plus-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "novair-plus-standard",
      brandId: "novair-plus",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 8700,
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
      id: "novair-plus-standard-wall-single-18000",
      slug: "novair-plus-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "novair-plus-standard",
      brandId: "novair-plus",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 12000,
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
      id: "novair-plus-standard-wall-single-24000",
      slug: "novair-plus-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "novair-plus-standard",
      brandId: "novair-plus",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 15800,
      heatingCapacity5FMaxBtu: 17200,
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
      id: "novair-plus-09evanvo",
      modelNumber: "09EVANVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-09evonvo",
      modelNumber: "09EVONVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-12evonvo",
      modelNumber: "12EVONVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-18evanvo",
      modelNumber: "18EVANVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-24evanvo",
      modelNumber: "24EVANVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    },
    {
      id: "novair-plus-24evonvo",
      modelNumber: "24EVONVO",
      brandId: "novair-plus",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "novair-plus-standard-wall-single-9000-cfg-1",
      slug: "novair-plus-standard-wall-single-9000-cfg-1",
      modelId: "novair-plus-standard-wall-single-9000",
      outdoorUnitId: "novair-plus-09evanvo",
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
      id: "novair-plus-standard-wall-single-9000-cfg-2",
      slug: "novair-plus-standard-wall-single-9000-cfg-2",
      modelId: "novair-plus-standard-wall-single-9000",
      outdoorUnitId: "novair-plus-09evonvo",
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
      id: "novair-plus-standard-wall-single-9000-cfg-3",
      slug: "novair-plus-standard-wall-single-9000-cfg-3",
      modelId: "novair-plus-standard-wall-single-9000",
      outdoorUnitId: "novair-plus-09evanvo",
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
      id: "novair-plus-standard-wall-single-12000-cfg-1",
      slug: "novair-plus-standard-wall-single-12000-cfg-1",
      modelId: "novair-plus-standard-wall-single-12000",
      outdoorUnitId: "novair-plus-12evonvo",
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
      id: "novair-plus-standard-wall-single-12000-cfg-2",
      slug: "novair-plus-standard-wall-single-12000-cfg-2",
      modelId: "novair-plus-standard-wall-single-12000",
      outdoorUnitId: "novair-plus-12evonvo",
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
      id: "novair-plus-standard-wall-single-18000-cfg-1",
      slug: "novair-plus-standard-wall-single-18000-cfg-1",
      modelId: "novair-plus-standard-wall-single-18000",
      outdoorUnitId: "novair-plus-18evanvo",
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
      id: "novair-plus-standard-wall-single-18000-cfg-2",
      slug: "novair-plus-standard-wall-single-18000-cfg-2",
      modelId: "novair-plus-standard-wall-single-18000",
      outdoorUnitId: "novair-plus-18evanvo",
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
      id: "novair-plus-standard-wall-single-24000-cfg-1",
      slug: "novair-plus-standard-wall-single-24000-cfg-1",
      modelId: "novair-plus-standard-wall-single-24000",
      outdoorUnitId: "novair-plus-24evanvo",
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
      id: "novair-plus-standard-wall-single-24000-cfg-2",
      slug: "novair-plus-standard-wall-single-24000-cfg-2",
      modelId: "novair-plus-standard-wall-single-24000",
      outdoorUnitId: "novair-plus-24evonvo",
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
      id: "novair-plus-standard-wall-single-24000-cfg-3",
      slug: "novair-plus-standard-wall-single-24000-cfg-3",
      modelId: "novair-plus-standard-wall-single-24000",
      outdoorUnitId: "novair-plus-24evanvo",
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
      configurationId: "novair-plus-standard-wall-single-9000-cfg-1",
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
      configurationId: "novair-plus-standard-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-9000-cfg-3",
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
      configurationId: "novair-plus-standard-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-18000-cfg-1",
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
      configurationId: "novair-plus-standard-wall-single-18000-cfg-2",
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
      configurationId: "novair-plus-standard-wall-single-24000-cfg-1",
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
      configurationId: "novair-plus-standard-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-plus-standard-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
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
