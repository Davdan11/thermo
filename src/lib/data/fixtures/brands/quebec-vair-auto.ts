import type { BrandDataset } from "../../types";

export const quebecvairDataset: BrandDataset = {
  brand: {
    id: "quebec-vair",
    slug: "quebec-vair",
    name: "QUEBEC VAIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "quebec-vair-ne-t52-series",
      slug: "quebec-vair-ne-t52-series",
      name: "NE-T52 series",
      brandId: "quebec-vair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series",
      slug: "quebec-vair-ne-series",
      name: "NE series",
      brandId: "quebec-vair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "quebec-vair-ne-t52-series-wall-single",
      slug: "quebec-vair-ne-t52-series-wall-single",
      name: "NE-T52 series",
      seriesId: "quebec-vair-ne-t52-series",
      brandId: "quebec-vair",
      modelNumber: "NE-T52 series",
      normalizedModelNumber: "ne-t52-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 8200,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 21.5,
      seer2Max: 25.5,
      hspf2Min: 9.3,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single",
      slug: "quebec-vair-ne-series-wall-single",
      name: "NE series",
      seriesId: "quebec-vair-ne-series",
      brandId: "quebec-vair",
      modelNumber: "NE series",
      normalizedModelNumber: "ne-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 8200,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 21.5,
      seer2Max: 25.5,
      hspf2Min: 9.3,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "quebec-vair-ne-t52-pla18ext",
      modelNumber: "NE-T52-PLA18EXT",
      brandId: "quebec-vair",
      refrigerant: null as any,
    },
    {
      id: "quebec-vair-ne-t52-pla12ext",
      modelNumber: "NE-T52-PLA12EXT",
      brandId: "quebec-vair",
      refrigerant: null as any,
    },
    {
      id: "quebec-vair-ne-t52-qvair3012e",
      modelNumber: "NE-T52-QVAIR3012E",
      brandId: "quebec-vair",
      refrigerant: null as any,
    },
    {
      id: "quebec-vair-ne-t52-qvair3018e",
      modelNumber: "NE-T52-QVAIR3018E",
      brandId: "quebec-vair",
      refrigerant: null as any,
    },
    {
      id: "quebec-vair-ne-t52-qvair12e",
      modelNumber: "NE-T52-QVAIR12E",
      brandId: "quebec-vair",
      refrigerant: null as any,
    },
    {
      id: "quebec-vair-ne-t52-qvair18e",
      modelNumber: "NE-T52-QVAIR18E",
      brandId: "quebec-vair",
      refrigerant: null as any,
    },
    {
      id: "quebec-vair-ne-t53-aeg12ext",
      modelNumber: "NE-T53-AEG12EXT",
      brandId: "quebec-vair",
      refrigerant: null as any,
    },
    {
      id: "quebec-vair-ne-t53-aeg18ext",
      modelNumber: "NE-T53-AEG18EXT",
      brandId: "quebec-vair",
      refrigerant: null as any,
    },
    {
      id: "quebec-vair-ne-t53-multi28e",
      modelNumber: "NE-T53-MULTI28E",
      brandId: "quebec-vair",
      refrigerant: null as any,
    },
    {
      id: "quebec-vair-ne-t53-multi36e",
      modelNumber: "NE-T53-MULTI36E",
      brandId: "quebec-vair",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "quebec-vair-ne-t52-series-wall-single-cfg-1",
      slug: "quebec-vair-ne-t52-series-wall-single-cfg-1",
      modelId: "quebec-vair-ne-t52-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t52-pla18ext",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.7,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-t52-series-wall-single-cfg-2",
      slug: "quebec-vair-ne-t52-series-wall-single-cfg-2",
      modelId: "quebec-vair-ne-t52-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t52-pla12ext",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-t52-series-wall-single-cfg-3",
      slug: "quebec-vair-ne-t52-series-wall-single-cfg-3",
      modelId: "quebec-vair-ne-t52-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t52-qvair3012e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-t52-series-wall-single-cfg-4",
      slug: "quebec-vair-ne-t52-series-wall-single-cfg-4",
      modelId: "quebec-vair-ne-t52-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t52-qvair3018e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single-cfg-1",
      slug: "quebec-vair-ne-series-wall-single-cfg-1",
      modelId: "quebec-vair-ne-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t52-qvair12e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single-cfg-2",
      slug: "quebec-vair-ne-series-wall-single-cfg-2",
      modelId: "quebec-vair-ne-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t52-qvair18e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.7,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single-cfg-3",
      slug: "quebec-vair-ne-series-wall-single-cfg-3",
      modelId: "quebec-vair-ne-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t53-aeg12ext",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single-cfg-4",
      slug: "quebec-vair-ne-series-wall-single-cfg-4",
      modelId: "quebec-vair-ne-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t53-aeg18ext",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single-cfg-5",
      slug: "quebec-vair-ne-series-wall-single-cfg-5",
      modelId: "quebec-vair-ne-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t53-multi28e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 23,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single-cfg-6",
      slug: "quebec-vair-ne-series-wall-single-cfg-6",
      modelId: "quebec-vair-ne-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t53-multi28e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 23,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single-cfg-7",
      slug: "quebec-vair-ne-series-wall-single-cfg-7",
      modelId: "quebec-vair-ne-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t53-multi28e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 23,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single-cfg-8",
      slug: "quebec-vair-ne-series-wall-single-cfg-8",
      modelId: "quebec-vair-ne-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t53-multi36e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "quebec-vair-ne-series-wall-single-cfg-9",
      slug: "quebec-vair-ne-series-wall-single-cfg-9",
      modelId: "quebec-vair-ne-series-wall-single",
      outdoorUnitId: "quebec-vair-ne-t53-multi36e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "quebec-vair-ne-t52-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "quebec-vair-ne-t52-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "quebec-vair-ne-t52-series-wall-single-cfg-3",
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
      configurationId: "quebec-vair-ne-t52-series-wall-single-cfg-4",
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
      configurationId: "quebec-vair-ne-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "quebec-vair-ne-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "quebec-vair-ne-series-wall-single-cfg-3",
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
      configurationId: "quebec-vair-ne-series-wall-single-cfg-4",
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
      configurationId: "quebec-vair-ne-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "quebec-vair-ne-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "quebec-vair-ne-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "quebec-vair-ne-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "quebec-vair-ne-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.9,
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
