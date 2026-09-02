import type { BrandDataset } from "../../types";

export const convectairDataset: BrandDataset = {
  brand: {
    id: "convectair",
    slug: "convectair",
    name: "CONVECTAIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "convectair-standard",
      slug: "convectair-standard",
      name: "Standard",
      brandId: "convectair",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-500-series",
      slug: "convectair-500-series",
      name: "500 Series",
      brandId: "convectair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "convectair-standard-wall-single",
      slug: "convectair-standard-wall-single",
      name: "Standard",
      seriesId: "convectair-standard",
      brandId: "convectair",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7100,
      heatingCapacity5FMaxBtu: 36000,
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
      id: "convectair-500-series-wall-single",
      slug: "convectair-500-series-wall-single",
      name: "500 Series",
      seriesId: "convectair-500-series",
      brandId: "convectair",
      modelNumber: "500 Series",
      normalizedModelNumber: "500-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 10000,
      heatingCapacity5FMaxBtu: 21600,
      seer2Min: 21.7,
      seer2Max: 26,
      hspf2Min: 10.5,
      hspf2Max: 13.3,
      cop5FMin: 1.8,
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
      id: "convectair-8090-o",
      modelNumber: "8090-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8120-o",
      modelNumber: "8120-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8180-o",
      modelNumber: "8180-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8240-o",
      modelNumber: "8240-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8222-c18-o",
      modelNumber: "8222-C18-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8322-c27-o",
      modelNumber: "8322-C27-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8522-c48-o",
      modelNumber: "8522-C48-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8422-c36-o",
      modelNumber: "8422-C36-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8028-c09-o",
      modelNumber: "8028-C09-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8028-c12-o",
      modelNumber: "8028-C12-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8028-c18-o",
      modelNumber: "8028-C18-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-8028-c24-o",
      modelNumber: "8028-C24-O",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-500004490",
      modelNumber: "500004490",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-500004492",
      modelNumber: "500004492",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-500004494",
      modelNumber: "500004494",
      brandId: "convectair",
      refrigerant: null as any,
    },
    {
      id: "convectair-500004496",
      modelNumber: "500004496",
      brandId: "convectair",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "convectair-standard-wall-single-cfg-1",
      slug: "convectair-standard-wall-single-cfg-1",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8090-o",
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
      id: "convectair-standard-wall-single-cfg-2",
      slug: "convectair-standard-wall-single-cfg-2",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8120-o",
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
      id: "convectair-standard-wall-single-cfg-3",
      slug: "convectair-standard-wall-single-cfg-3",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8180-o",
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
      id: "convectair-standard-wall-single-cfg-4",
      slug: "convectair-standard-wall-single-cfg-4",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8240-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-standard-wall-single-cfg-5",
      slug: "convectair-standard-wall-single-cfg-5",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8222-c18-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-standard-wall-single-cfg-6",
      slug: "convectair-standard-wall-single-cfg-6",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8222-c18-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-standard-wall-single-cfg-7",
      slug: "convectair-standard-wall-single-cfg-7",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8222-c18-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-standard-wall-single-cfg-8",
      slug: "convectair-standard-wall-single-cfg-8",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8322-c27-o",
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
      id: "convectair-standard-wall-single-cfg-9",
      slug: "convectair-standard-wall-single-cfg-9",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8322-c27-o",
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
      id: "convectair-standard-wall-single-cfg-10",
      slug: "convectair-standard-wall-single-cfg-10",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8322-c27-o",
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
      id: "convectair-standard-wall-single-cfg-11",
      slug: "convectair-standard-wall-single-cfg-11",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8522-c48-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-standard-wall-single-cfg-12",
      slug: "convectair-standard-wall-single-cfg-12",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8522-c48-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-standard-wall-single-cfg-13",
      slug: "convectair-standard-wall-single-cfg-13",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8522-c48-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-standard-wall-single-cfg-14",
      slug: "convectair-standard-wall-single-cfg-14",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8422-c36-o",
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
      id: "convectair-standard-wall-single-cfg-15",
      slug: "convectair-standard-wall-single-cfg-15",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8422-c36-o",
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
      id: "convectair-standard-wall-single-cfg-16",
      slug: "convectair-standard-wall-single-cfg-16",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8422-c36-o",
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
      id: "convectair-standard-wall-single-cfg-17",
      slug: "convectair-standard-wall-single-cfg-17",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8028-c09-o",
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
      id: "convectair-standard-wall-single-cfg-18",
      slug: "convectair-standard-wall-single-cfg-18",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8028-c12-o",
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
      id: "convectair-standard-wall-single-cfg-19",
      slug: "convectair-standard-wall-single-cfg-19",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8028-c18-o",
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
      id: "convectair-standard-wall-single-cfg-20",
      slug: "convectair-standard-wall-single-cfg-20",
      modelId: "convectair-standard-wall-single",
      outdoorUnitId: "convectair-8028-c24-o",
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
      id: "convectair-500-series-wall-single-cfg-1",
      slug: "convectair-500-series-wall-single-cfg-1",
      modelId: "convectair-500-series-wall-single",
      outdoorUnitId: "convectair-500004490",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-500-series-wall-single-cfg-2",
      slug: "convectair-500-series-wall-single-cfg-2",
      modelId: "convectair-500-series-wall-single",
      outdoorUnitId: "convectair-500004492",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-500-series-wall-single-cfg-3",
      slug: "convectair-500-series-wall-single-cfg-3",
      modelId: "convectair-500-series-wall-single",
      outdoorUnitId: "convectair-500004494",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "convectair-500-series-wall-single-cfg-4",
      slug: "convectair-500-series-wall-single-cfg-4",
      modelId: "convectair-500-series-wall-single",
      outdoorUnitId: "convectair-500004496",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "convectair-standard-wall-single-cfg-1",
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
      configurationId: "convectair-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-500-series-wall-single-cfg-1",
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
      configurationId: "convectair-500-series-wall-single-cfg-2",
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
      configurationId: "convectair-500-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "convectair-500-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
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
