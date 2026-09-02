import type { BrandDataset } from "../../types";

export const airconDataset: BrandDataset = {
  brand: {
    id: "air-con",
    slug: "air-con",
    name: "AIR-CON",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "air-con-blizzard",
      slug: "air-con-blizzard",
      name: "Blizzard",
      brandId: "air-con",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-blue-series-iii",
      slug: "air-con-blue-series-iii",
      name: "Blue Series III",
      brandId: "air-con",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-standard",
      slug: "air-con-standard",
      name: "Standard",
      brandId: "air-con",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split",
      slug: "air-con-multi-split",
      name: "Multi Split",
      brandId: "air-con",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sky-pro",
      slug: "air-con-sky-pro",
      name: "Sky Pro",
      brandId: "air-con",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sd-premium",
      slug: "air-con-sd-premium",
      name: "SD Premium",
      brandId: "air-con",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-blue-series-4",
      slug: "air-con-blue-series-4",
      name: "Blue Series 4",
      brandId: "air-con",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "air-con-blizzard-wall-single",
      slug: "air-con-blizzard-wall-single",
      name: "Blizzard",
      seriesId: "air-con-blizzard",
      brandId: "air-con",
      modelNumber: "Blizzard",
      normalizedModelNumber: "blizzard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 7000,
      seer2Min: 23.5,
      seer2Max: 27.5,
      hspf2Min: 9.8,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-blue-series-iii-wall-single",
      slug: "air-con-blue-series-iii-wall-single",
      name: "Blue Series III",
      seriesId: "air-con-blue-series-iii",
      brandId: "air-con",
      modelNumber: "Blue Series III",
      normalizedModelNumber: "blue-series-iii",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 12500,
      seer2Min: 20.5,
      seer2Max: 22.5,
      hspf2Min: 8.6,
      hspf2Max: 9,
      cop5FMin: 1.75,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-standard-wall-single",
      slug: "air-con-standard-wall-single",
      name: "Standard",
      seriesId: "air-con-standard",
      brandId: "air-con",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5500,
      heatingCapacity5FMaxBtu: 40000,
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
      id: "air-con-multi-split-wall-single",
      slug: "air-con-multi-split-wall-single",
      name: "Multi Split",
      seriesId: "air-con-multi-split",
      brandId: "air-con",
      modelNumber: "Multi Split",
      normalizedModelNumber: "multi-split",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 12700,
      heatingCapacity5FMaxBtu: 28400,
      seer2Min: 18,
      seer2Max: 22,
      hspf2Min: 8.8,
      hspf2Max: 9.5,
      cop5FMin: 1.84,
      cop5FMax: 1.84,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sky-pro-wall-single",
      slug: "air-con-sky-pro-wall-single",
      name: "Sky Pro",
      seriesId: "air-con-sky-pro",
      brandId: "air-con",
      modelNumber: "Sky Pro",
      normalizedModelNumber: "sky-pro",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 19000,
      seer2Min: 18,
      seer2Max: 20.5,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 2.1,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sd-premium-central-ducted",
      slug: "air-con-sd-premium-central-ducted",
      name: "SD Premium",
      seriesId: "air-con-sd-premium",
      brandId: "air-con",
      modelNumber: "SD Premium",
      normalizedModelNumber: "sd-premium",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 31000,
      seer2Min: 16.5,
      seer2Max: 17.5,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.9,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-blue-series-4-wall-single",
      slug: "air-con-blue-series-4-wall-single",
      name: "Blue Series 4",
      seriesId: "air-con-blue-series-4",
      brandId: "air-con",
      modelNumber: "Blue Series 4",
      normalizedModelNumber: "blue-series-4",
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
      id: "air-con-abzci4h4s09",
      modelNumber: "ABZCI4H4S09",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-abzci4h4s12",
      modelNumber: "ABZCI4H4S12",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-abxci4h4s09",
      modelNumber: "ABXCI4H4S09",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-abxci4h4s18",
      modelNumber: "ABXCI4H4S18",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-abxci4h4s24",
      modelNumber: "ABXCI4H4S24",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-abxci4h4s12",
      modelNumber: "ABXCI4H4S12",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-aslci4h4s36",
      modelNumber: "ASLCI4H4S36",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-abhci4h4s18",
      modelNumber: "ABHCI4H4S18",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-abhci4h4s24",
      modelNumber: "ABHCI4H4S24",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-abhci4h4s09",
      modelNumber: "ABHCI4H4S09",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-abhci4h4s12",
      modelNumber: "ABHCI4H4S12",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-asgci8h4m18",
      modelNumber: "ASGCI8H4M18",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-asgci8h4m24",
      modelNumber: "ASGCI8H4M24",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-asgci8h4m36",
      modelNumber: "ASGCI8H4M36",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-asgci8h4m48",
      modelNumber: "ASGCI8H4M48",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-asgci8h4m60",
      modelNumber: "ASGCI8H4M60",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-amsci4h4s24",
      modelNumber: "AMSCI4H4S24",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-amsci4h4s36",
      modelNumber: "AMSCI4H4S36",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-amsci4h4s42",
      modelNumber: "AMSCI4H4S42",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-amsci4h4s18",
      modelNumber: "AMSCI4H4S18",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-aslci4h4s09",
      modelNumber: "ASLCI4H4S09",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-aslci4h4s12",
      modelNumber: "ASLCI4H4S12",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-aslci4h4s18",
      modelNumber: "ASLCI4H4S18",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-aslci4h4s24",
      modelNumber: "ASLCI4H4S24",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-asddi4h4s24",
      modelNumber: "ASDDI4H4S24",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-asddi4h4s48",
      modelNumber: "ASDDI4H4S48",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-alpci4h4e09",
      modelNumber: "ALPCI4H4E09",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-alpci4h4e12",
      modelNumber: "ALPCI4H4E12",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-alpci4h4e18",
      modelNumber: "ALPCI4H4E18",
      brandId: "air-con",
      refrigerant: null as any,
    },
    {
      id: "air-con-alpci4h4e24",
      modelNumber: "ALPCI4H4E24",
      brandId: "air-con",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "air-con-blizzard-wall-single-cfg-1",
      slug: "air-con-blizzard-wall-single-cfg-1",
      modelId: "air-con-blizzard-wall-single",
      outdoorUnitId: "air-con-abzci4h4s09",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-blizzard-wall-single-cfg-2",
      slug: "air-con-blizzard-wall-single-cfg-2",
      modelId: "air-con-blizzard-wall-single",
      outdoorUnitId: "air-con-abzci4h4s12",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-blue-series-iii-wall-single-cfg-1",
      slug: "air-con-blue-series-iii-wall-single-cfg-1",
      modelId: "air-con-blue-series-iii-wall-single",
      outdoorUnitId: "air-con-abxci4h4s09",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-blue-series-iii-wall-single-cfg-2",
      slug: "air-con-blue-series-iii-wall-single-cfg-2",
      modelId: "air-con-blue-series-iii-wall-single",
      outdoorUnitId: "air-con-abxci4h4s18",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-blue-series-iii-wall-single-cfg-3",
      slug: "air-con-blue-series-iii-wall-single-cfg-3",
      modelId: "air-con-blue-series-iii-wall-single",
      outdoorUnitId: "air-con-abxci4h4s24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-standard-wall-single-cfg-1",
      slug: "air-con-standard-wall-single-cfg-1",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-abxci4h4s12",
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
      id: "air-con-standard-wall-single-cfg-2",
      slug: "air-con-standard-wall-single-cfg-2",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-aslci4h4s36",
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
      id: "air-con-standard-wall-single-cfg-3",
      slug: "air-con-standard-wall-single-cfg-3",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-abhci4h4s18",
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
      id: "air-con-standard-wall-single-cfg-4",
      slug: "air-con-standard-wall-single-cfg-4",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-abhci4h4s24",
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
      id: "air-con-standard-wall-single-cfg-5",
      slug: "air-con-standard-wall-single-cfg-5",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-abhci4h4s09",
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
      id: "air-con-standard-wall-single-cfg-6",
      slug: "air-con-standard-wall-single-cfg-6",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-abhci4h4s12",
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
      id: "air-con-standard-wall-single-cfg-7",
      slug: "air-con-standard-wall-single-cfg-7",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m18",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-standard-wall-single-cfg-8",
      slug: "air-con-standard-wall-single-cfg-8",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m18",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-standard-wall-single-cfg-9",
      slug: "air-con-standard-wall-single-cfg-9",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m18",
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
      id: "air-con-standard-wall-single-cfg-10",
      slug: "air-con-standard-wall-single-cfg-10",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m24",
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
      id: "air-con-standard-wall-single-cfg-11",
      slug: "air-con-standard-wall-single-cfg-11",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m24",
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
      id: "air-con-standard-wall-single-cfg-12",
      slug: "air-con-standard-wall-single-cfg-12",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m36",
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
      id: "air-con-standard-wall-single-cfg-13",
      slug: "air-con-standard-wall-single-cfg-13",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m36",
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
      id: "air-con-standard-wall-single-cfg-14",
      slug: "air-con-standard-wall-single-cfg-14",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m48",
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
      id: "air-con-standard-wall-single-cfg-15",
      slug: "air-con-standard-wall-single-cfg-15",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m48",
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
      id: "air-con-standard-wall-single-cfg-16",
      slug: "air-con-standard-wall-single-cfg-16",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m48",
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
      id: "air-con-standard-wall-single-cfg-17",
      slug: "air-con-standard-wall-single-cfg-17",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-standard-wall-single-cfg-18",
      slug: "air-con-standard-wall-single-cfg-18",
      modelId: "air-con-standard-wall-single",
      outdoorUnitId: "air-con-asgci8h4m60",
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
      id: "air-con-multi-split-wall-single-cfg-1",
      slug: "air-con-multi-split-wall-single-cfg-1",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-2",
      slug: "air-con-multi-split-wall-single-cfg-2",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-3",
      slug: "air-con-multi-split-wall-single-cfg-3",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 8.83,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-4",
      slug: "air-con-multi-split-wall-single-cfg-4",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 20.25,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-5",
      slug: "air-con-multi-split-wall-single-cfg-5",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-6",
      slug: "air-con-multi-split-wall-single-cfg-6",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s42",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-7",
      slug: "air-con-multi-split-wall-single-cfg-7",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s42",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-8",
      slug: "air-con-multi-split-wall-single-cfg-8",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s42",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 8.88,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-9",
      slug: "air-con-multi-split-wall-single-cfg-9",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s18",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-10",
      slug: "air-con-multi-split-wall-single-cfg-10",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s18",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-multi-split-wall-single-cfg-11",
      slug: "air-con-multi-split-wall-single-cfg-11",
      modelId: "air-con-multi-split-wall-single",
      outdoorUnitId: "air-con-amsci4h4s18",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sky-pro-wall-single-cfg-1",
      slug: "air-con-sky-pro-wall-single-cfg-1",
      modelId: "air-con-sky-pro-wall-single",
      outdoorUnitId: "air-con-aslci4h4s09",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sky-pro-wall-single-cfg-2",
      slug: "air-con-sky-pro-wall-single-cfg-2",
      modelId: "air-con-sky-pro-wall-single",
      outdoorUnitId: "air-con-aslci4h4s09",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sky-pro-wall-single-cfg-3",
      slug: "air-con-sky-pro-wall-single-cfg-3",
      modelId: "air-con-sky-pro-wall-single",
      outdoorUnitId: "air-con-aslci4h4s12",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sky-pro-wall-single-cfg-4",
      slug: "air-con-sky-pro-wall-single-cfg-4",
      modelId: "air-con-sky-pro-wall-single",
      outdoorUnitId: "air-con-aslci4h4s18",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sky-pro-wall-single-cfg-5",
      slug: "air-con-sky-pro-wall-single-cfg-5",
      modelId: "air-con-sky-pro-wall-single",
      outdoorUnitId: "air-con-aslci4h4s24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sd-premium-central-ducted-cfg-1",
      slug: "air-con-sd-premium-central-ducted-cfg-1",
      modelId: "air-con-sd-premium-central-ducted",
      outdoorUnitId: "air-con-asddi4h4s24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-sd-premium-central-ducted-cfg-2",
      slug: "air-con-sd-premium-central-ducted-cfg-2",
      modelId: "air-con-sd-premium-central-ducted",
      outdoorUnitId: "air-con-asddi4h4s48",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "air-con-blue-series-4-wall-single-cfg-1",
      slug: "air-con-blue-series-4-wall-single-cfg-1",
      modelId: "air-con-blue-series-4-wall-single",
      outdoorUnitId: "air-con-alpci4h4e09",
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
      id: "air-con-blue-series-4-wall-single-cfg-2",
      slug: "air-con-blue-series-4-wall-single-cfg-2",
      modelId: "air-con-blue-series-4-wall-single",
      outdoorUnitId: "air-con-alpci4h4e12",
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
      id: "air-con-blue-series-4-wall-single-cfg-3",
      slug: "air-con-blue-series-4-wall-single-cfg-3",
      modelId: "air-con-blue-series-4-wall-single",
      outdoorUnitId: "air-con-alpci4h4e18",
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
      id: "air-con-blue-series-4-wall-single-cfg-4",
      slug: "air-con-blue-series-4-wall-single-cfg-4",
      modelId: "air-con-blue-series-4-wall-single",
      outdoorUnitId: "air-con-alpci4h4e24",
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
      configurationId: "air-con-blizzard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-blizzard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-blue-series-iii-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-blue-series-iii-wall-single-cfg-2",
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
      configurationId: "air-con-blue-series-iii-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-1",
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
      configurationId: "air-con-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-3",
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
      configurationId: "air-con-standard-wall-single-cfg-4",
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
      configurationId: "air-con-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-6",
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
      configurationId: "air-con-standard-wall-single-cfg-7",
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
      configurationId: "air-con-standard-wall-single-cfg-8",
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
      configurationId: "air-con-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-11",
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
      configurationId: "air-con-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-13",
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
      configurationId: "air-con-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-multi-split-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-sky-pro-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-sky-pro-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-sky-pro-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-sky-pro-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-sky-pro-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-sd-premium-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-sd-premium-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "air-con-blue-series-4-wall-single-cfg-1",
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
      configurationId: "air-con-blue-series-4-wall-single-cfg-2",
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
      configurationId: "air-con-blue-series-4-wall-single-cfg-3",
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
      configurationId: "air-con-blue-series-4-wall-single-cfg-4",
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
