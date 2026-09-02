import type { BrandDataset } from "../../types";

export const maxiairDataset: BrandDataset = {
  brand: {
    id: "maxi-air",
    slug: "maxi-air",
    name: "MAXI AIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "maxi-air-ys-series",
      slug: "maxi-air-ys-series",
      name: "YS series",
      brandId: "maxi-air",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maxi-air-maxs-series",
      slug: "maxi-air-maxs-series",
      name: "MAXS series",
      brandId: "maxi-air",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maxi-air-ne-series",
      slug: "maxi-air-ne-series",
      name: "NE series",
      brandId: "maxi-air",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "maxi-air-ys-series-wall-single",
      slug: "maxi-air-ys-series-wall-single",
      name: "YS series",
      seriesId: "maxi-air-ys-series",
      brandId: "maxi-air",
      modelNumber: "YS series",
      normalizedModelNumber: "ys-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 8200,
      heatingCapacity5FMaxBtu: 14000,
      seer2Min: 23.1,
      seer2Max: 23.7,
      hspf2Min: 9.3,
      hspf2Max: 10.3,
      cop5FMin: 2.24,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maxi-air-maxs-series-central-ducted",
      slug: "maxi-air-maxs-series-central-ducted",
      name: "MAXS series",
      seriesId: "maxi-air-maxs-series",
      brandId: "maxi-air",
      modelNumber: "MAXS series",
      normalizedModelNumber: "maxs-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.3,
      seer2Max: 16.2,
      hspf2Min: 8.9,
      hspf2Max: 9.4,
      cop5FMin: 1.8,
      cop5FMax: 1.91,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maxi-air-ne-series-wall-single",
      slug: "maxi-air-ne-series-wall-single",
      name: "NE series",
      seriesId: "maxi-air-ne-series",
      brandId: "maxi-air",
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
      id: "maxi-air-ys21f-12hrdn1",
      modelNumber: "YS21F-12HRDN1",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-ys21f-18hrdn1",
      modelNumber: "YS21F-18HRDN1",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-maxs-2430",
      modelNumber: "MAXS-2430",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-maxs-4260",
      modelNumber: "MAXS-4260",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-ne-t52-supae12e",
      modelNumber: "NE-T52-SUPAE12E",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-ne-t52-pla12int",
      modelNumber: "NE-T52-PLA12INT",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-ne-t52-supae18e",
      modelNumber: "NE-T52-SUPAE18E",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-ne-t52-pla18int",
      modelNumber: "NE-T52-PLA18INT",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-ne-t53-aeg12ext",
      modelNumber: "NE-T53-AEG12EXT",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-ne-t53-aeg18ext",
      modelNumber: "NE-T53-AEG18EXT",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-ne-t53-multi28e",
      modelNumber: "NE-T53-MULTI28E",
      brandId: "maxi-air",
      refrigerant: null as any,
    },
    {
      id: "maxi-air-ne-t53-multi36e",
      modelNumber: "NE-T53-MULTI36E",
      brandId: "maxi-air",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "maxi-air-ys-series-wall-single-cfg-1",
      slug: "maxi-air-ys-series-wall-single-cfg-1",
      modelId: "maxi-air-ys-series-wall-single",
      outdoorUnitId: "maxi-air-ys21f-12hrdn1",
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
      id: "maxi-air-ys-series-wall-single-cfg-2",
      slug: "maxi-air-ys-series-wall-single-cfg-2",
      modelId: "maxi-air-ys-series-wall-single",
      outdoorUnitId: "maxi-air-ys21f-18hrdn1",
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
      id: "maxi-air-maxs-series-central-ducted-cfg-1",
      slug: "maxi-air-maxs-series-central-ducted-cfg-1",
      modelId: "maxi-air-maxs-series-central-ducted",
      outdoorUnitId: "maxi-air-maxs-2430",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maxi-air-maxs-series-central-ducted-cfg-2",
      slug: "maxi-air-maxs-series-central-ducted-cfg-2",
      modelId: "maxi-air-maxs-series-central-ducted",
      outdoorUnitId: "maxi-air-maxs-4260",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maxi-air-maxs-series-central-ducted-cfg-3",
      slug: "maxi-air-maxs-series-central-ducted-cfg-3",
      modelId: "maxi-air-maxs-series-central-ducted",
      outdoorUnitId: "maxi-air-maxs-2430",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "maxi-air-ne-series-wall-single-cfg-1",
      slug: "maxi-air-ne-series-wall-single-cfg-1",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t52-supae12e",
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
      id: "maxi-air-ne-series-wall-single-cfg-2",
      slug: "maxi-air-ne-series-wall-single-cfg-2",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t52-pla12int",
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
      id: "maxi-air-ne-series-wall-single-cfg-3",
      slug: "maxi-air-ne-series-wall-single-cfg-3",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t52-supae18e",
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
      id: "maxi-air-ne-series-wall-single-cfg-4",
      slug: "maxi-air-ne-series-wall-single-cfg-4",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t52-pla18int",
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
      id: "maxi-air-ne-series-wall-single-cfg-5",
      slug: "maxi-air-ne-series-wall-single-cfg-5",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t53-aeg12ext",
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
      id: "maxi-air-ne-series-wall-single-cfg-6",
      slug: "maxi-air-ne-series-wall-single-cfg-6",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t53-aeg18ext",
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
      id: "maxi-air-ne-series-wall-single-cfg-7",
      slug: "maxi-air-ne-series-wall-single-cfg-7",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t53-multi28e",
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
      id: "maxi-air-ne-series-wall-single-cfg-8",
      slug: "maxi-air-ne-series-wall-single-cfg-8",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t53-multi28e",
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
      id: "maxi-air-ne-series-wall-single-cfg-9",
      slug: "maxi-air-ne-series-wall-single-cfg-9",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t53-multi28e",
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
      id: "maxi-air-ne-series-wall-single-cfg-10",
      slug: "maxi-air-ne-series-wall-single-cfg-10",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t53-multi36e",
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
      id: "maxi-air-ne-series-wall-single-cfg-11",
      slug: "maxi-air-ne-series-wall-single-cfg-11",
      modelId: "maxi-air-ne-series-wall-single",
      outdoorUnitId: "maxi-air-ne-t53-multi36e",
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
      configurationId: "maxi-air-ys-series-wall-single-cfg-1",
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
      configurationId: "maxi-air-ys-series-wall-single-cfg-2",
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
      configurationId: "maxi-air-maxs-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "maxi-air-maxs-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "maxi-air-maxs-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "maxi-air-ne-series-wall-single-cfg-1",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-2",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-3",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-4",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-5",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-6",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-7",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-8",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-9",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-10",
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
      configurationId: "maxi-air-ne-series-wall-single-cfg-11",
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
