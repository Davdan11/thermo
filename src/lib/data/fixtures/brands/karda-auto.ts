import type { BrandDataset } from "../../types";

export const kardaDataset: BrandDataset = {
  brand: {
    id: "karda",
    slug: "karda",
    name: "KARDA",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "karda-standard",
      slug: "karda-standard",
      name: "Standard",
      brandId: "karda",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda",
      slug: "karda-karda",
      name: "KARDA",
      brandId: "karda",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series",
      slug: "karda-3kar-series",
      name: "3KAR series",
      brandId: "karda",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "karda-standard-wall-single",
      slug: "karda-standard-wall-single",
      name: "Standard",
      seriesId: "karda-standard",
      brandId: "karda",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 29600,
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
      id: "karda-karda-wall-single",
      slug: "karda-karda-wall-single",
      name: "KARDA",
      seriesId: "karda-karda",
      brandId: "karda",
      modelNumber: "KARDA",
      normalizedModelNumber: "karda",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 7600,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 18,
      seer2Max: 26.4,
      hspf2Min: 9.2,
      hspf2Max: 12,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series-wall-single",
      slug: "karda-3kar-series-wall-single",
      name: "3KAR series",
      seriesId: "karda-3kar-series",
      brandId: "karda",
      modelNumber: "3KAR series",
      normalizedModelNumber: "3kar-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 9600,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 20,
      seer2Max: 23.6,
      hspf2Min: 9.2,
      hspf2Max: 11.5,
      cop5FMin: 1.68,
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
      id: "karda-1pamshh09-szo-25",
      modelNumber: "1PAMSHH09-SZO-25",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-1pamshh12-szo-22-5",
      modelNumber: "1PAMSHH12-SZO-22.5",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-1pamshh24-szo-20-5",
      modelNumber: "1PAMSHH24-SZO-20.5",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-2pamsh27-mzo3",
      modelNumber: "2PAMSH27-MZO3",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-2pamsh48-mzo5",
      modelNumber: "2PAMSH48-MZO5",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-2pamsh18-mzo2",
      modelNumber: "2PAMSH18-MZO2",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-2karda27mz3",
      modelNumber: "2KARDA27MZ3",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-1karda09szo25",
      modelNumber: "1KARDA09SZO25",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-1karda12szo22-5",
      modelNumber: "1KARDA12SZO22.5",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-2karda36mz4",
      modelNumber: "2KARDA36MZ4",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-2karda18mz2",
      modelNumber: "2KARDA18MZ2",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-2karda48mz5",
      modelNumber: "2KARDA48MZ5",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-2karda18szo20",
      modelNumber: "2KARDA18SZO20",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-1karda24szo20-5",
      modelNumber: "1KARDA24SZO20.5",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-3karda09szo",
      modelNumber: "3KARDA09SZO",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-3karda18szo",
      modelNumber: "3KARDA18SZO",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-3karda24szo",
      modelNumber: "3KARDA24SZO",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-3karda12szo",
      modelNumber: "3KARDA12SZO",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-3karda18mz2",
      modelNumber: "3KARDA18MZ2",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-3karda27mz3",
      modelNumber: "3KARDA27MZ3",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-3karda36mz4",
      modelNumber: "3KARDA36MZ4",
      brandId: "karda",
      refrigerant: null as any,
    },
    {
      id: "karda-3karda48mz5",
      modelNumber: "3KARDA48MZ5",
      brandId: "karda",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "karda-standard-wall-single-cfg-1",
      slug: "karda-standard-wall-single-cfg-1",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1pamshh09-szo-25",
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
      id: "karda-standard-wall-single-cfg-2",
      slug: "karda-standard-wall-single-cfg-2",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1pamshh12-szo-22-5",
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
      id: "karda-standard-wall-single-cfg-3",
      slug: "karda-standard-wall-single-cfg-3",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1pamshh24-szo-20-5",
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
      id: "karda-standard-wall-single-cfg-4",
      slug: "karda-standard-wall-single-cfg-4",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-2pamsh27-mzo3",
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
      id: "karda-standard-wall-single-cfg-5",
      slug: "karda-standard-wall-single-cfg-5",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-2pamsh48-mzo5",
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
      id: "karda-standard-wall-single-cfg-6",
      slug: "karda-standard-wall-single-cfg-6",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-2pamsh18-mzo2",
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
      id: "karda-standard-wall-single-cfg-7",
      slug: "karda-standard-wall-single-cfg-7",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-2karda27mz3",
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
      id: "karda-standard-wall-single-cfg-8",
      slug: "karda-standard-wall-single-cfg-8",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1karda09szo25",
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
      id: "karda-standard-wall-single-cfg-9",
      slug: "karda-standard-wall-single-cfg-9",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1karda12szo22-5",
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
      id: "karda-standard-wall-single-cfg-10",
      slug: "karda-standard-wall-single-cfg-10",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-2karda36mz4",
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
      id: "karda-standard-wall-single-cfg-11",
      slug: "karda-standard-wall-single-cfg-11",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-2karda18mz2",
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
      id: "karda-standard-wall-single-cfg-12",
      slug: "karda-standard-wall-single-cfg-12",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-2karda48mz5",
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
      id: "karda-standard-wall-single-cfg-13",
      slug: "karda-standard-wall-single-cfg-13",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1pamshh24-szo-20-5",
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
      id: "karda-standard-wall-single-cfg-14",
      slug: "karda-standard-wall-single-cfg-14",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1pamshh12-szo-22-5",
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
      id: "karda-standard-wall-single-cfg-15",
      slug: "karda-standard-wall-single-cfg-15",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1pamshh12-szo-22-5",
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
      id: "karda-standard-wall-single-cfg-16",
      slug: "karda-standard-wall-single-cfg-16",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1karda09szo25",
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
      id: "karda-standard-wall-single-cfg-17",
      slug: "karda-standard-wall-single-cfg-17",
      modelId: "karda-standard-wall-single",
      outdoorUnitId: "karda-1karda09szo25",
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
      id: "karda-karda-wall-single-cfg-1",
      slug: "karda-karda-wall-single-cfg-1",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-2karda18szo20",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-2",
      slug: "karda-karda-wall-single-cfg-2",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-1karda24szo20-5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-3",
      slug: "karda-karda-wall-single-cfg-3",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda09szo",
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
      id: "karda-karda-wall-single-cfg-4",
      slug: "karda-karda-wall-single-cfg-4",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda18szo",
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
      id: "karda-karda-wall-single-cfg-5",
      slug: "karda-karda-wall-single-cfg-5",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda24szo",
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
      id: "karda-karda-wall-single-cfg-6",
      slug: "karda-karda-wall-single-cfg-6",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda12szo",
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
      id: "karda-karda-wall-single-cfg-7",
      slug: "karda-karda-wall-single-cfg-7",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda12szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-8",
      slug: "karda-karda-wall-single-cfg-8",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda18mz2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-9",
      slug: "karda-karda-wall-single-cfg-9",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda18mz2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-10",
      slug: "karda-karda-wall-single-cfg-10",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda18mz2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-11",
      slug: "karda-karda-wall-single-cfg-11",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda27mz3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-12",
      slug: "karda-karda-wall-single-cfg-12",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda27mz3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-13",
      slug: "karda-karda-wall-single-cfg-13",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda27mz3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-14",
      slug: "karda-karda-wall-single-cfg-14",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda09szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-15",
      slug: "karda-karda-wall-single-cfg-15",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda12szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-16",
      slug: "karda-karda-wall-single-cfg-16",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda12szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-17",
      slug: "karda-karda-wall-single-cfg-17",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda12szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-18",
      slug: "karda-karda-wall-single-cfg-18",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda18szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-19",
      slug: "karda-karda-wall-single-cfg-19",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda18szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-20",
      slug: "karda-karda-wall-single-cfg-20",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda24szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-karda-wall-single-cfg-21",
      slug: "karda-karda-wall-single-cfg-21",
      modelId: "karda-karda-wall-single",
      outdoorUnitId: "karda-3karda12szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.2,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series-wall-single-cfg-1",
      slug: "karda-3kar-series-wall-single-cfg-1",
      modelId: "karda-3kar-series-wall-single",
      outdoorUnitId: "karda-3karda36mz4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series-wall-single-cfg-2",
      slug: "karda-3kar-series-wall-single-cfg-2",
      modelId: "karda-3kar-series-wall-single",
      outdoorUnitId: "karda-3karda48mz5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series-wall-single-cfg-3",
      slug: "karda-3kar-series-wall-single-cfg-3",
      modelId: "karda-3kar-series-wall-single",
      outdoorUnitId: "karda-3karda48mz5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series-wall-single-cfg-4",
      slug: "karda-3kar-series-wall-single-cfg-4",
      modelId: "karda-3kar-series-wall-single",
      outdoorUnitId: "karda-3karda48mz5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series-wall-single-cfg-5",
      slug: "karda-3kar-series-wall-single-cfg-5",
      modelId: "karda-3kar-series-wall-single",
      outdoorUnitId: "karda-3karda24szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series-wall-single-cfg-6",
      slug: "karda-3kar-series-wall-single-cfg-6",
      modelId: "karda-3kar-series-wall-single",
      outdoorUnitId: "karda-3karda12szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series-wall-single-cfg-7",
      slug: "karda-3kar-series-wall-single-cfg-7",
      modelId: "karda-3kar-series-wall-single",
      outdoorUnitId: "karda-3karda12szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "karda-3kar-series-wall-single-cfg-8",
      slug: "karda-3kar-series-wall-single-cfg-8",
      modelId: "karda-3kar-series-wall-single",
      outdoorUnitId: "karda-3karda18szo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "karda-standard-wall-single-cfg-1",
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
      configurationId: "karda-standard-wall-single-cfg-2",
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
      configurationId: "karda-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-standard-wall-single-cfg-4",
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
      configurationId: "karda-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-standard-wall-single-cfg-6",
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
      configurationId: "karda-standard-wall-single-cfg-7",
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
      configurationId: "karda-standard-wall-single-cfg-8",
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
      configurationId: "karda-standard-wall-single-cfg-9",
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
      configurationId: "karda-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-standard-wall-single-cfg-11",
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
      configurationId: "karda-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-standard-wall-single-cfg-13",
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
      configurationId: "karda-standard-wall-single-cfg-14",
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
      configurationId: "karda-standard-wall-single-cfg-15",
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
      configurationId: "karda-standard-wall-single-cfg-16",
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
      configurationId: "karda-standard-wall-single-cfg-17",
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
      configurationId: "karda-karda-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-3",
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
      configurationId: "karda-karda-wall-single-cfg-4",
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
      configurationId: "karda-karda-wall-single-cfg-5",
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
      configurationId: "karda-karda-wall-single-cfg-6",
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
      configurationId: "karda-karda-wall-single-cfg-7",
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
      configurationId: "karda-karda-wall-single-cfg-8",
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
      configurationId: "karda-karda-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9900,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-karda-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-3kar-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 1.68,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-3kar-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-3kar-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-3kar-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-3kar-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-3kar-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-3kar-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9900,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "karda-3kar-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.75,
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
