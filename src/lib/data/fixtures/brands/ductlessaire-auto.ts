import type { BrandDataset } from "../../types";

export const ductlessaireDataset: BrandDataset = {
  brand: {
    id: "ductlessaire",
    slug: "ductlessaire",
    name: "DUCTLESSAIRE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ductlessaire-da-series",
      slug: "ductlessaire-da-series",
      name: "DA series",
      brandId: "ductlessaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-standard",
      slug: "ductlessaire-standard",
      name: "Standard",
      brandId: "ductlessaire",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series",
      slug: "ductlessaire-454-series",
      name: "454 Series",
      brandId: "ductlessaire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ductlessaire-da-series-wall-single",
      slug: "ductlessaire-da-series-wall-single",
      name: "DA series",
      seriesId: "ductlessaire-da-series",
      brandId: "ductlessaire",
      modelNumber: "DA series",
      normalizedModelNumber: "da-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 26600,
      heatingCapacity5FMinBtu: 8200,
      heatingCapacity5FMaxBtu: 18400,
      seer2Min: 21,
      seer2Max: 24,
      hspf2Min: 9,
      hspf2Max: 11.4,
      cop5FMin: 2,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-standard-wall-single",
      slug: "ductlessaire-standard-wall-single",
      name: "Standard",
      seriesId: "ductlessaire-standard",
      brandId: "ductlessaire",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7800,
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
      id: "ductlessaire-454-series-wall-single",
      slug: "ductlessaire-454-series-wall-single",
      name: "454 Series",
      seriesId: "ductlessaire-454-series",
      brandId: "ductlessaire",
      modelNumber: "454 Series",
      normalizedModelNumber: "454-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 8600,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 17,
      seer2Max: 24.6,
      hspf2Min: 8.5,
      hspf2Max: 13,
      cop5FMin: 2,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ductlessaire-da1821-h2-o",
      modelNumber: "DA1821-H2-O",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-da0921-h2-o",
      modelNumber: "DA0921-H2-O*",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-da1221-h2-o",
      modelNumber: "DA1221-H2-O*",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-da27-4z-o",
      modelNumber: "DA27-4Z-O",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-da2421-h2-o",
      modelNumber: "DA2421-H2-O*",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-da27-3z-0",
      modelNumber: "DA27-3Z-0*",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-da-115-12-20-o",
      modelNumber: "DA-115-12-20-O",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-da48-5z-o",
      modelNumber: "DA48-5Z-O",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-12-o-ps",
      modelNumber: "454-12-O-PS",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-18-o-ps",
      modelNumber: "454-18-O-PS",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-24-o-ps",
      modelNumber: "454-24-O-PS",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-9-o-da",
      modelNumber: "454-9-O-DA",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-12-o-da",
      modelNumber: "454-12-O-DA",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-18-o-da",
      modelNumber: "454-18-O-DA",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-24-o-da",
      modelNumber: "454-24-O-DA",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-28-4z-o",
      modelNumber: "454-28-4Z-O",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-48-6z-o",
      modelNumber: "454-48-6Z-O",
      brandId: "ductlessaire",
      refrigerant: null as any,
    },
    {
      id: "ductlessaire-454-36-5z-o",
      modelNumber: "454-36-5Z-O",
      brandId: "ductlessaire",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ductlessaire-da-series-wall-single-cfg-1",
      slug: "ductlessaire-da-series-wall-single-cfg-1",
      modelId: "ductlessaire-da-series-wall-single",
      outdoorUnitId: "ductlessaire-da1821-h2-o",
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
      id: "ductlessaire-da-series-wall-single-cfg-2",
      slug: "ductlessaire-da-series-wall-single-cfg-2",
      modelId: "ductlessaire-da-series-wall-single",
      outdoorUnitId: "ductlessaire-da0921-h2-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-da-series-wall-single-cfg-3",
      slug: "ductlessaire-da-series-wall-single-cfg-3",
      modelId: "ductlessaire-da-series-wall-single",
      outdoorUnitId: "ductlessaire-da1221-h2-o",
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
      id: "ductlessaire-da-series-wall-single-cfg-4",
      slug: "ductlessaire-da-series-wall-single-cfg-4",
      modelId: "ductlessaire-da-series-wall-single",
      outdoorUnitId: "ductlessaire-da1821-h2-o",
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
      id: "ductlessaire-da-series-wall-single-cfg-5",
      slug: "ductlessaire-da-series-wall-single-cfg-5",
      modelId: "ductlessaire-da-series-wall-single",
      outdoorUnitId: "ductlessaire-da27-4z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-da-series-wall-single-cfg-6",
      slug: "ductlessaire-da-series-wall-single-cfg-6",
      modelId: "ductlessaire-da-series-wall-single",
      outdoorUnitId: "ductlessaire-da27-4z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-da-series-wall-single-cfg-7",
      slug: "ductlessaire-da-series-wall-single-cfg-7",
      modelId: "ductlessaire-da-series-wall-single",
      outdoorUnitId: "ductlessaire-da27-4z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26200,
      coolingCapacityMaxBtu: 26200,
      seer2: 22,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-standard-wall-single-cfg-1",
      slug: "ductlessaire-standard-wall-single-cfg-1",
      modelId: "ductlessaire-standard-wall-single",
      outdoorUnitId: "ductlessaire-da2421-h2-o",
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
      id: "ductlessaire-standard-wall-single-cfg-2",
      slug: "ductlessaire-standard-wall-single-cfg-2",
      modelId: "ductlessaire-standard-wall-single",
      outdoorUnitId: "ductlessaire-da27-3z-0",
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
      id: "ductlessaire-standard-wall-single-cfg-3",
      slug: "ductlessaire-standard-wall-single-cfg-3",
      modelId: "ductlessaire-standard-wall-single",
      outdoorUnitId: "ductlessaire-da27-3z-0",
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
      id: "ductlessaire-standard-wall-single-cfg-4",
      slug: "ductlessaire-standard-wall-single-cfg-4",
      modelId: "ductlessaire-standard-wall-single",
      outdoorUnitId: "ductlessaire-da27-3z-0",
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
      id: "ductlessaire-standard-wall-single-cfg-5",
      slug: "ductlessaire-standard-wall-single-cfg-5",
      modelId: "ductlessaire-standard-wall-single",
      outdoorUnitId: "ductlessaire-da-115-12-20-o",
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
      id: "ductlessaire-standard-wall-single-cfg-6",
      slug: "ductlessaire-standard-wall-single-cfg-6",
      modelId: "ductlessaire-standard-wall-single",
      outdoorUnitId: "ductlessaire-da48-5z-o",
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
      id: "ductlessaire-standard-wall-single-cfg-7",
      slug: "ductlessaire-standard-wall-single-cfg-7",
      modelId: "ductlessaire-standard-wall-single",
      outdoorUnitId: "ductlessaire-da48-5z-o",
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
      id: "ductlessaire-standard-wall-single-cfg-8",
      slug: "ductlessaire-standard-wall-single-cfg-8",
      modelId: "ductlessaire-standard-wall-single",
      outdoorUnitId: "ductlessaire-454-12-o-ps",
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
      id: "ductlessaire-standard-wall-single-cfg-9",
      slug: "ductlessaire-standard-wall-single-cfg-9",
      modelId: "ductlessaire-standard-wall-single",
      outdoorUnitId: "ductlessaire-454-18-o-ps",
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
      id: "ductlessaire-454-series-wall-single-cfg-1",
      slug: "ductlessaire-454-series-wall-single-cfg-1",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-24-o-ps",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-2",
      slug: "ductlessaire-454-series-wall-single-cfg-2",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-9-o-da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-3",
      slug: "ductlessaire-454-series-wall-single-cfg-3",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-12-o-da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-4",
      slug: "ductlessaire-454-series-wall-single-cfg-4",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-18-o-da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.7,
      hspf2: 11.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-5",
      slug: "ductlessaire-454-series-wall-single-cfg-5",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-24-o-da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-6",
      slug: "ductlessaire-454-series-wall-single-cfg-6",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-28-4z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-7",
      slug: "ductlessaire-454-series-wall-single-cfg-7",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-28-4z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-8",
      slug: "ductlessaire-454-series-wall-single-cfg-8",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-28-4z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26200,
      coolingCapacityMaxBtu: 26200,
      seer2: 22,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-9",
      slug: "ductlessaire-454-series-wall-single-cfg-9",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-48-6z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-10",
      slug: "ductlessaire-454-series-wall-single-cfg-10",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-48-6z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-11",
      slug: "ductlessaire-454-series-wall-single-cfg-11",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-48-6z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.85,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-12",
      slug: "ductlessaire-454-series-wall-single-cfg-12",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-36-5z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 23.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-13",
      slug: "ductlessaire-454-series-wall-single-cfg-13",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-36-5z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ductlessaire-454-series-wall-single-cfg-14",
      slug: "ductlessaire-454-series-wall-single-cfg-14",
      modelId: "ductlessaire-454-series-wall-single",
      outdoorUnitId: "ductlessaire-454-36-5z-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 21.55,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ductlessaire-da-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10400,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-da-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-da-series-wall-single-cfg-3",
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
      configurationId: "ductlessaire-da-series-wall-single-cfg-4",
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
      configurationId: "ductlessaire-da-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-da-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-da-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-standard-wall-single-cfg-1",
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
      configurationId: "ductlessaire-standard-wall-single-cfg-2",
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
      configurationId: "ductlessaire-standard-wall-single-cfg-3",
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
      configurationId: "ductlessaire-standard-wall-single-cfg-4",
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
      configurationId: "ductlessaire-standard-wall-single-cfg-5",
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
      configurationId: "ductlessaire-standard-wall-single-cfg-6",
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
      configurationId: "ductlessaire-standard-wall-single-cfg-7",
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
      configurationId: "ductlessaire-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-standard-wall-single-cfg-9",
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
      configurationId: "ductlessaire-454-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.01,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 2.13,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ductlessaire-454-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
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
