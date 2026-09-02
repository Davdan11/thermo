import type { BrandDataset } from "../../types";

export const premiumlevellaDataset: BrandDataset = {
  brand: {
    id: "premium-levella",
    slug: "premium-levella",
    name: "PREMIUM LEVELLA",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "premium-levella-standard",
      slug: "premium-levella-standard",
      name: "Standard",
      brandId: "premium-levella",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-piaw-series",
      slug: "premium-levella-piaw-series",
      name: "PIAW series",
      brandId: "premium-levella",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-piacwmz-series",
      slug: "premium-levella-piacwmz-series",
      name: "PIACWMZ series",
      brandId: "premium-levella",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "premium-levella-standard-wall-single",
      slug: "premium-levella-standard-wall-single",
      name: "Standard",
      seriesId: "premium-levella-standard",
      brandId: "premium-levella",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6000,
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
      id: "premium-levella-piaw-series-wall-single",
      slug: "premium-levella-piaw-series-wall-single",
      name: "PIAW series",
      seriesId: "premium-levella-piaw-series",
      brandId: "premium-levella",
      modelNumber: "PIAW series",
      normalizedModelNumber: "piaw-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 9300,
      heatingCapacity5FMaxBtu: 18900,
      seer2Min: 22,
      seer2Max: 26.4,
      hspf2Min: 10.3,
      hspf2Max: 11.6,
      cop5FMin: 1.8,
      cop5FMax: 1.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-piacwmz-series-wall-single",
      slug: "premium-levella-piacwmz-series-wall-single",
      name: "PIACWMZ series",
      seriesId: "premium-levella-piacwmz-series",
      brandId: "premium-levella",
      modelNumber: "PIACWMZ series",
      normalizedModelNumber: "piacwmz-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 8000,
      seer2Min: 22,
      seer2Max: 22.5,
      hspf2Min: 9.8,
      hspf2Max: 11.5,
      cop5FMin: 2.21,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "premium-levella-piaw92800b",
      modelNumber: "PIAW92800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw182800b",
      modelNumber: "PIAW182800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw362800b",
      modelNumber: "PIAW362800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw92700b",
      modelNumber: "PIAW92700B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw123800b",
      modelNumber: "PIAW123800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw183800b",
      modelNumber: "PIAW183800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw123700b",
      modelNumber: "PIAW123700B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw243800b",
      modelNumber: "PIAW243800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw93700b",
      modelNumber: "PIAW93700B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw93800b",
      modelNumber: "PIAW93800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piawmz188800b",
      modelNumber: "PIAWMZ188800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piawmz278800b",
      modelNumber: "PIAWMZ278800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piawmz368800b",
      modelNumber: "PIAWMZ368800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piawmz488800b",
      modelNumber: "PIAWMZ488800B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw1232580b",
      modelNumber: "PIAW1232580B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw2432580b",
      modelNumber: "PIAW2432580B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw932580b",
      modelNumber: "PIAW932580B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piaw1832580b",
      modelNumber: "PIAW1832580B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piacwmz9082280b",
      modelNumber: "PIACWMZ9082280B",
      brandId: "premium-levella",
      refrigerant: null as any,
    },
    {
      id: "premium-levella-piacwmz1282280b",
      modelNumber: "PIACWMZ1282280B",
      brandId: "premium-levella",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "premium-levella-standard-wall-single-cfg-1",
      slug: "premium-levella-standard-wall-single-cfg-1",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw92800b",
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
      id: "premium-levella-standard-wall-single-cfg-2",
      slug: "premium-levella-standard-wall-single-cfg-2",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw182800b",
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
      id: "premium-levella-standard-wall-single-cfg-3",
      slug: "premium-levella-standard-wall-single-cfg-3",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw362800b",
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
      id: "premium-levella-standard-wall-single-cfg-4",
      slug: "premium-levella-standard-wall-single-cfg-4",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw92700b",
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
      id: "premium-levella-standard-wall-single-cfg-5",
      slug: "premium-levella-standard-wall-single-cfg-5",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw123800b",
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
      id: "premium-levella-standard-wall-single-cfg-6",
      slug: "premium-levella-standard-wall-single-cfg-6",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw183800b",
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
      id: "premium-levella-standard-wall-single-cfg-7",
      slug: "premium-levella-standard-wall-single-cfg-7",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw123700b",
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
      id: "premium-levella-standard-wall-single-cfg-8",
      slug: "premium-levella-standard-wall-single-cfg-8",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw243800b",
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
      id: "premium-levella-standard-wall-single-cfg-9",
      slug: "premium-levella-standard-wall-single-cfg-9",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw93700b",
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
      id: "premium-levella-standard-wall-single-cfg-10",
      slug: "premium-levella-standard-wall-single-cfg-10",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piaw93800b",
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
      id: "premium-levella-standard-wall-single-cfg-11",
      slug: "premium-levella-standard-wall-single-cfg-11",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piawmz188800b",
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
      id: "premium-levella-standard-wall-single-cfg-12",
      slug: "premium-levella-standard-wall-single-cfg-12",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piawmz188800b",
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
      id: "premium-levella-standard-wall-single-cfg-13",
      slug: "premium-levella-standard-wall-single-cfg-13",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piawmz188800b",
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
      id: "premium-levella-standard-wall-single-cfg-14",
      slug: "premium-levella-standard-wall-single-cfg-14",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piawmz278800b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-standard-wall-single-cfg-15",
      slug: "premium-levella-standard-wall-single-cfg-15",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piawmz278800b",
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
      id: "premium-levella-standard-wall-single-cfg-16",
      slug: "premium-levella-standard-wall-single-cfg-16",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piawmz278800b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-standard-wall-single-cfg-17",
      slug: "premium-levella-standard-wall-single-cfg-17",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piawmz368800b",
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
      id: "premium-levella-standard-wall-single-cfg-18",
      slug: "premium-levella-standard-wall-single-cfg-18",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piawmz488800b",
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
      id: "premium-levella-standard-wall-single-cfg-19",
      slug: "premium-levella-standard-wall-single-cfg-19",
      modelId: "premium-levella-standard-wall-single",
      outdoorUnitId: "premium-levella-piawmz488800b",
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
      id: "premium-levella-piaw-series-wall-single-cfg-1",
      slug: "premium-levella-piaw-series-wall-single-cfg-1",
      modelId: "premium-levella-piaw-series-wall-single",
      outdoorUnitId: "premium-levella-piaw1232580b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-piaw-series-wall-single-cfg-2",
      slug: "premium-levella-piaw-series-wall-single-cfg-2",
      modelId: "premium-levella-piaw-series-wall-single",
      outdoorUnitId: "premium-levella-piaw2432580b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-piaw-series-wall-single-cfg-3",
      slug: "premium-levella-piaw-series-wall-single-cfg-3",
      modelId: "premium-levella-piaw-series-wall-single",
      outdoorUnitId: "premium-levella-piaw932580b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.4,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-piaw-series-wall-single-cfg-4",
      slug: "premium-levella-piaw-series-wall-single-cfg-4",
      modelId: "premium-levella-piaw-series-wall-single",
      outdoorUnitId: "premium-levella-piaw1832580b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-piacwmz-series-wall-single-cfg-1",
      slug: "premium-levella-piacwmz-series-wall-single-cfg-1",
      modelId: "premium-levella-piacwmz-series-wall-single",
      outdoorUnitId: "premium-levella-piacwmz9082280b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "premium-levella-piacwmz-series-wall-single-cfg-2",
      slug: "premium-levella-piacwmz-series-wall-single-cfg-2",
      modelId: "premium-levella-piacwmz-series-wall-single",
      outdoorUnitId: "premium-levella-piacwmz1282280b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "premium-levella-standard-wall-single-cfg-1",
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
      configurationId: "premium-levella-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-4",
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
      configurationId: "premium-levella-standard-wall-single-cfg-5",
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
      configurationId: "premium-levella-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-7",
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
      configurationId: "premium-levella-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-standard-wall-single-cfg-18",
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
      configurationId: "premium-levella-standard-wall-single-cfg-19",
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
      configurationId: "premium-levella-piaw-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-piaw-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-piaw-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-piaw-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-piacwmz-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "premium-levella-piacwmz-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.21,
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
