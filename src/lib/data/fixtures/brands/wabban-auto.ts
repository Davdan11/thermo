import type { BrandDataset } from "../../types";

export const wabbanDataset: BrandDataset = {
  brand: {
    id: "wabban",
    slug: "wabban",
    name: "WABBAN",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "wabban-standard",
      slug: "wabban-standard",
      name: "Standard",
      brandId: "wabban",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-lomo-plus",
      slug: "wabban-lomo-plus",
      name: "LOMO Plus",
      brandId: "wabban",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-pular-25",
      slug: "wabban-pular-25",
      name: "Pular 25",
      brandId: "wabban",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-multi-zone",
      slug: "wabban-multi-zone",
      name: "Multi-zone",
      brandId: "wabban",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "wabban-standard-wall-single",
      slug: "wabban-standard-wall-single",
      name: "Standard",
      seriesId: "wabban-standard",
      brandId: "wabban",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5600,
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
      id: "wabban-lomo-plus-wall-single",
      slug: "wabban-lomo-plus-wall-single",
      name: "LOMO Plus",
      seriesId: "wabban-lomo-plus",
      brandId: "wabban",
      modelNumber: "LOMO Plus",
      normalizedModelNumber: "lomo-plus",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 8300,
      heatingCapacity5FMaxBtu: 15500,
      seer2Min: 21.5,
      seer2Max: 24,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 1.91,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-pular-25-wall-single",
      slug: "wabban-pular-25-wall-single",
      name: "Pular 25",
      seriesId: "wabban-pular-25",
      brandId: "wabban",
      modelNumber: "Pular 25",
      normalizedModelNumber: "pular-25",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 11000,
      seer2Min: 23.5,
      seer2Max: 24,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-multi-zone-wall-single",
      slug: "wabban-multi-zone-wall-single",
      name: "Multi-zone",
      seriesId: "wabban-multi-zone",
      brandId: "wabban",
      modelNumber: "Multi-zone",
      normalizedModelNumber: "multi-zone",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 14700,
      heatingCapacity5FMaxBtu: 35600,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.82,
      cop5FMax: 2.22,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "wabban-bb09hq2a3do",
      modelNumber: "BB09HQ2A3DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb12hq2a3do",
      modelNumber: "BB12HQ2A3DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb18hq2a3do",
      modelNumber: "BB18HQ2A3DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb24hq2a3do",
      modelNumber: "BB24HQ2A3DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb09hq3d6do",
      modelNumber: "BB09HQ3D6DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb18hq3d6do",
      modelNumber: "BB18HQ3D6DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm18h4o",
      modelNumber: "BBM18H4O",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm24h4o",
      modelNumber: "BBM24H4O",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm30h4o",
      modelNumber: "BBM30H4O",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm36h4o",
      modelNumber: "BBM36H4O",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm42h4o",
      modelNumber: "BBM42H4O",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb36-24wadu",
      modelNumber: "BB36-24WADU",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb60-48wadu",
      modelNumber: "BB60-48WADU",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb09hxp2a1do",
      modelNumber: "BB09HXP2A1DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb24hxp2a1do",
      modelNumber: "BB24HXP2A1DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb09hxca5do",
      modelNumber: "BB09HXCA5DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb12hxca5do",
      modelNumber: "BB12HXCA5DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb12hxca5ao",
      modelNumber: "BB12HXCA5AO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb18hxca5do",
      modelNumber: "BB18HXCA5DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb09hxca5ao",
      modelNumber: "BB09HXCA5AO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb24hxca5do",
      modelNumber: "BB24HXCA5DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb30hxq2b2do",
      modelNumber: "BB30HXQ2B2DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb36hxq2b2do",
      modelNumber: "BB36HXQ2B2DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbd24w2ddu",
      modelNumber: "BBD24W2DDU",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbd30w2ddu",
      modelNumber: "BBD30W2DDU",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbd36w2ddu",
      modelNumber: "BBD36W2DDU",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbd42w2ddu",
      modelNumber: "BBD42W2DDU",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbd48w2ddu",
      modelNumber: "BBD48W2DDU",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbd60w2ddu",
      modelNumber: "BBD60W2DDU",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb12hq3d6do",
      modelNumber: "BB12HQ3D6DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb24hq3d6do",
      modelNumber: "BB24HQ3D6DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb12hxp2a1do",
      modelNumber: "BB12HXP2A1DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bb18hxp2a1do",
      modelNumber: "BB18HXP2A1DO",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm18hx4o",
      modelNumber: "BBM18HX4O",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm24hx4o",
      modelNumber: "BBM24HX4O",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm30hx4o",
      modelNumber: "BBM30HX4O",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm36hx4o",
      modelNumber: "BBM36HX4O",
      brandId: "wabban",
      refrigerant: null as any,
    },
    {
      id: "wabban-bbm42hx4o",
      modelNumber: "BBM42HX4O",
      brandId: "wabban",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "wabban-standard-wall-single-cfg-1",
      slug: "wabban-standard-wall-single-cfg-1",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb09hq2a3do",
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
      id: "wabban-standard-wall-single-cfg-2",
      slug: "wabban-standard-wall-single-cfg-2",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb12hq2a3do",
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
      id: "wabban-standard-wall-single-cfg-3",
      slug: "wabban-standard-wall-single-cfg-3",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb18hq2a3do",
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
      id: "wabban-standard-wall-single-cfg-4",
      slug: "wabban-standard-wall-single-cfg-4",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb24hq2a3do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-5",
      slug: "wabban-standard-wall-single-cfg-5",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb09hq3d6do",
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
      id: "wabban-standard-wall-single-cfg-6",
      slug: "wabban-standard-wall-single-cfg-6",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb18hq3d6do",
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
      id: "wabban-standard-wall-single-cfg-7",
      slug: "wabban-standard-wall-single-cfg-7",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbm18h4o",
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
      id: "wabban-standard-wall-single-cfg-8",
      slug: "wabban-standard-wall-single-cfg-8",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbm24h4o",
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
      id: "wabban-standard-wall-single-cfg-9",
      slug: "wabban-standard-wall-single-cfg-9",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbm30h4o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-10",
      slug: "wabban-standard-wall-single-cfg-10",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbm36h4o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-11",
      slug: "wabban-standard-wall-single-cfg-11",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbm42h4o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39000,
      coolingCapacityMaxBtu: 39000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-12",
      slug: "wabban-standard-wall-single-cfg-12",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb36-24wadu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-13",
      slug: "wabban-standard-wall-single-cfg-13",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb60-48wadu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-14",
      slug: "wabban-standard-wall-single-cfg-14",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb60-48wadu",
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
      id: "wabban-standard-wall-single-cfg-15",
      slug: "wabban-standard-wall-single-cfg-15",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb36-24wadu",
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
      id: "wabban-standard-wall-single-cfg-16",
      slug: "wabban-standard-wall-single-cfg-16",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb09hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-17",
      slug: "wabban-standard-wall-single-cfg-17",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb24hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-18",
      slug: "wabban-standard-wall-single-cfg-18",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb09hxca5do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-19",
      slug: "wabban-standard-wall-single-cfg-19",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb12hxca5do",
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
      id: "wabban-standard-wall-single-cfg-20",
      slug: "wabban-standard-wall-single-cfg-20",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb12hxca5ao",
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
      id: "wabban-standard-wall-single-cfg-21",
      slug: "wabban-standard-wall-single-cfg-21",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb18hxca5do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17600,
      coolingCapacityMaxBtu: 17600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-22",
      slug: "wabban-standard-wall-single-cfg-22",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb09hxca5ao",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-23",
      slug: "wabban-standard-wall-single-cfg-23",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb24hxca5do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-24",
      slug: "wabban-standard-wall-single-cfg-24",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb30hxq2b2do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-25",
      slug: "wabban-standard-wall-single-cfg-25",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb36hxq2b2do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-26",
      slug: "wabban-standard-wall-single-cfg-26",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbd24w2ddu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-27",
      slug: "wabban-standard-wall-single-cfg-27",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbd30w2ddu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-28",
      slug: "wabban-standard-wall-single-cfg-28",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbd36w2ddu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-29",
      slug: "wabban-standard-wall-single-cfg-29",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbd42w2ddu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40000,
      coolingCapacityMaxBtu: 40000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-30",
      slug: "wabban-standard-wall-single-cfg-30",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbd48w2ddu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-31",
      slug: "wabban-standard-wall-single-cfg-31",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bbd60w2ddu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-32",
      slug: "wabban-standard-wall-single-cfg-32",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb36-24wadu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-33",
      slug: "wabban-standard-wall-single-cfg-33",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb36-24wadu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-34",
      slug: "wabban-standard-wall-single-cfg-34",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb60-48wadu",
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
      id: "wabban-standard-wall-single-cfg-35",
      slug: "wabban-standard-wall-single-cfg-35",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb60-48wadu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-36",
      slug: "wabban-standard-wall-single-cfg-36",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb09hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-37",
      slug: "wabban-standard-wall-single-cfg-37",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb09hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-38",
      slug: "wabban-standard-wall-single-cfg-38",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb24hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-39",
      slug: "wabban-standard-wall-single-cfg-39",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb24hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-standard-wall-single-cfg-40",
      slug: "wabban-standard-wall-single-cfg-40",
      modelId: "wabban-standard-wall-single",
      outdoorUnitId: "wabban-bb24hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-lomo-plus-wall-single-cfg-1",
      slug: "wabban-lomo-plus-wall-single-cfg-1",
      modelId: "wabban-lomo-plus-wall-single",
      outdoorUnitId: "wabban-bb12hq3d6do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-lomo-plus-wall-single-cfg-2",
      slug: "wabban-lomo-plus-wall-single-cfg-2",
      modelId: "wabban-lomo-plus-wall-single",
      outdoorUnitId: "wabban-bb24hq3d6do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-pular-25-wall-single-cfg-1",
      slug: "wabban-pular-25-wall-single-cfg-1",
      modelId: "wabban-pular-25-wall-single",
      outdoorUnitId: "wabban-bb12hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-pular-25-wall-single-cfg-2",
      slug: "wabban-pular-25-wall-single-cfg-2",
      modelId: "wabban-pular-25-wall-single",
      outdoorUnitId: "wabban-bb18hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-pular-25-wall-single-cfg-3",
      slug: "wabban-pular-25-wall-single-cfg-3",
      modelId: "wabban-pular-25-wall-single",
      outdoorUnitId: "wabban-bb12hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-pular-25-wall-single-cfg-4",
      slug: "wabban-pular-25-wall-single-cfg-4",
      modelId: "wabban-pular-25-wall-single",
      outdoorUnitId: "wabban-bb12hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-pular-25-wall-single-cfg-5",
      slug: "wabban-pular-25-wall-single-cfg-5",
      modelId: "wabban-pular-25-wall-single",
      outdoorUnitId: "wabban-bb12hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-pular-25-wall-single-cfg-6",
      slug: "wabban-pular-25-wall-single-cfg-6",
      modelId: "wabban-pular-25-wall-single",
      outdoorUnitId: "wabban-bb18hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-pular-25-wall-single-cfg-7",
      slug: "wabban-pular-25-wall-single-cfg-7",
      modelId: "wabban-pular-25-wall-single",
      outdoorUnitId: "wabban-bb18hxp2a1do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-multi-zone-wall-single-cfg-1",
      slug: "wabban-multi-zone-wall-single-cfg-1",
      modelId: "wabban-multi-zone-wall-single",
      outdoorUnitId: "wabban-bbm18hx4o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-multi-zone-wall-single-cfg-2",
      slug: "wabban-multi-zone-wall-single-cfg-2",
      modelId: "wabban-multi-zone-wall-single",
      outdoorUnitId: "wabban-bbm24hx4o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-multi-zone-wall-single-cfg-3",
      slug: "wabban-multi-zone-wall-single-cfg-3",
      modelId: "wabban-multi-zone-wall-single",
      outdoorUnitId: "wabban-bbm30hx4o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-multi-zone-wall-single-cfg-4",
      slug: "wabban-multi-zone-wall-single-cfg-4",
      modelId: "wabban-multi-zone-wall-single",
      outdoorUnitId: "wabban-bbm36hx4o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wabban-multi-zone-wall-single-cfg-5",
      slug: "wabban-multi-zone-wall-single-cfg-5",
      modelId: "wabban-multi-zone-wall-single",
      outdoorUnitId: "wabban-bbm42hx4o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "wabban-standard-wall-single-cfg-1",
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
      configurationId: "wabban-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-4",
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
      configurationId: "wabban-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-9",
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
      configurationId: "wabban-standard-wall-single-cfg-10",
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
      configurationId: "wabban-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-12",
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
      configurationId: "wabban-standard-wall-single-cfg-13",
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
      configurationId: "wabban-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-15",
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
      configurationId: "wabban-standard-wall-single-cfg-16",
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
      configurationId: "wabban-standard-wall-single-cfg-17",
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
      configurationId: "wabban-standard-wall-single-cfg-18",
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
      configurationId: "wabban-standard-wall-single-cfg-19",
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
      configurationId: "wabban-standard-wall-single-cfg-20",
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
      configurationId: "wabban-standard-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-22",
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
      configurationId: "wabban-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-25",
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
      configurationId: "wabban-standard-wall-single-cfg-26",
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
      configurationId: "wabban-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-32",
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
      configurationId: "wabban-standard-wall-single-cfg-33",
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
      configurationId: "wabban-standard-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-36",
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
      configurationId: "wabban-standard-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-standard-wall-single-cfg-39",
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
      configurationId: "wabban-standard-wall-single-cfg-40",
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
      configurationId: "wabban-lomo-plus-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-lomo-plus-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-pular-25-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-pular-25-wall-single-cfg-2",
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
      configurationId: "wabban-pular-25-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-pular-25-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-pular-25-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-pular-25-wall-single-cfg-6",
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
      configurationId: "wabban-pular-25-wall-single-cfg-7",
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
      configurationId: "wabban-multi-zone-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-multi-zone-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-multi-zone-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-multi-zone-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wabban-multi-zone-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.92,
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
