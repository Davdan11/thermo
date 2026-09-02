import type { BrandDataset } from "../../types";

export const russellDataset: BrandDataset = {
  brand: {
    id: "russell",
    slug: "russell",
    name: "RUSSELL",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "russell-vantix",
      slug: "russell-vantix",
      name: "VANTIX",
      brandId: "russell",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus",
      slug: "russell-f-series-plus",
      name: "F - SERIES PLUS",
      brandId: "russell",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series",
      slug: "russell-f-series",
      name: "F Series",
      brandId: "russell",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series",
      slug: "russell-k-series",
      name: "K-SERIES",
      brandId: "russell",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard",
      slug: "russell-standard",
      name: "Standard",
      brandId: "russell",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "russell-vantix-central-ducted",
      slug: "russell-vantix-central-ducted",
      name: "VANTIX",
      seriesId: "russell-vantix",
      brandId: "russell",
      modelNumber: "VANTIX",
      normalizedModelNumber: "vantix",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 55500,
      heatingCapacity5FMinBtu: 15100,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: 16,
      seer2Max: 21,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 1.75,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted",
      slug: "russell-f-series-plus-central-ducted",
      name: "F - SERIES PLUS",
      seriesId: "russell-f-series-plus",
      brandId: "russell",
      modelNumber: "F - SERIES PLUS",
      normalizedModelNumber: "f-series-plus",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 40500,
      heatingCapacity5FMinBtu: 15800,
      heatingCapacity5FMaxBtu: 31600,
      seer2Min: 16,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted",
      slug: "russell-f-series-central-ducted",
      name: "F Series",
      seriesId: "russell-f-series",
      brandId: "russell",
      modelNumber: "F Series",
      normalizedModelNumber: "f-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 32200,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: 16,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted",
      slug: "russell-k-series-central-ducted",
      name: "K-SERIES",
      seriesId: "russell-k-series",
      brandId: "russell",
      modelNumber: "K-SERIES",
      normalizedModelNumber: "k-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 15200,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 17,
      seer2Max: 18,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-central-ducted",
      slug: "russell-standard-central-ducted",
      name: "Standard",
      seriesId: "russell-standard",
      brandId: "russell",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 51000,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-wall-single",
      slug: "russell-standard-wall-single",
      name: "Standard",
      seriesId: "russell-standard",
      brandId: "russell",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 23200,
      heatingCapacity5FMaxBtu: 23200,
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
      id: "russell-rd17az36aj3n",
      modelNumber: "RD17AZ36AJ3N",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-rd17az60aj3n",
      modelNumber: "RD17AZ60AJ3N",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-rd17az24aj3n",
      modelNumber: "RD17AZ24AJ3N",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-sp19ay36ajvc",
      modelNumber: "SP19AY36AJVC",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-sp19ay48ajvc",
      modelNumber: "SP19AY48AJVC",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-rd18ay24ajvc",
      modelNumber: "RD18AY24AJVC",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-rd18ay60ajvc",
      modelNumber: "RD18AY60AJVC",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-rd16ay24ajvc",
      modelNumber: "RD16AY24AJVC",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-rd16ay48ajvc",
      modelNumber: "RD16AY48AJVC",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-rd17az48aj3n",
      modelNumber: "RD17AZ48AJ3N",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-sp19ay60ajvc",
      modelNumber: "SP19AY60AJVC",
      brandId: "russell",
      refrigerant: null as any,
    },
    {
      id: "russell-rd16ay36ajvc",
      modelNumber: "RD16AY36AJVC",
      brandId: "russell",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "russell-vantix-central-ducted-cfg-1",
      slug: "russell-vantix-central-ducted-cfg-1",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-2",
      slug: "russell-vantix-central-ducted-cfg-2",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-3",
      slug: "russell-vantix-central-ducted-cfg-3",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-4",
      slug: "russell-vantix-central-ducted-cfg-4",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-5",
      slug: "russell-vantix-central-ducted-cfg-5",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-6",
      slug: "russell-vantix-central-ducted-cfg-6",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-7",
      slug: "russell-vantix-central-ducted-cfg-7",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-8",
      slug: "russell-vantix-central-ducted-cfg-8",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-9",
      slug: "russell-vantix-central-ducted-cfg-9",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-10",
      slug: "russell-vantix-central-ducted-cfg-10",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-11",
      slug: "russell-vantix-central-ducted-cfg-11",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-12",
      slug: "russell-vantix-central-ducted-cfg-12",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-13",
      slug: "russell-vantix-central-ducted-cfg-13",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-14",
      slug: "russell-vantix-central-ducted-cfg-14",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-15",
      slug: "russell-vantix-central-ducted-cfg-15",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-16",
      slug: "russell-vantix-central-ducted-cfg-16",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-17",
      slug: "russell-vantix-central-ducted-cfg-17",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-18",
      slug: "russell-vantix-central-ducted-cfg-18",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-19",
      slug: "russell-vantix-central-ducted-cfg-19",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-20",
      slug: "russell-vantix-central-ducted-cfg-20",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-21",
      slug: "russell-vantix-central-ducted-cfg-21",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-22",
      slug: "russell-vantix-central-ducted-cfg-22",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-23",
      slug: "russell-vantix-central-ducted-cfg-23",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-24",
      slug: "russell-vantix-central-ducted-cfg-24",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-25",
      slug: "russell-vantix-central-ducted-cfg-25",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-26",
      slug: "russell-vantix-central-ducted-cfg-26",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-27",
      slug: "russell-vantix-central-ducted-cfg-27",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-28",
      slug: "russell-vantix-central-ducted-cfg-28",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-29",
      slug: "russell-vantix-central-ducted-cfg-29",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-30",
      slug: "russell-vantix-central-ducted-cfg-30",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-31",
      slug: "russell-vantix-central-ducted-cfg-31",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-32",
      slug: "russell-vantix-central-ducted-cfg-32",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-33",
      slug: "russell-vantix-central-ducted-cfg-33",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-34",
      slug: "russell-vantix-central-ducted-cfg-34",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-35",
      slug: "russell-vantix-central-ducted-cfg-35",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-36",
      slug: "russell-vantix-central-ducted-cfg-36",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-37",
      slug: "russell-vantix-central-ducted-cfg-37",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-38",
      slug: "russell-vantix-central-ducted-cfg-38",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-39",
      slug: "russell-vantix-central-ducted-cfg-39",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-40",
      slug: "russell-vantix-central-ducted-cfg-40",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-41",
      slug: "russell-vantix-central-ducted-cfg-41",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-42",
      slug: "russell-vantix-central-ducted-cfg-42",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-43",
      slug: "russell-vantix-central-ducted-cfg-43",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-44",
      slug: "russell-vantix-central-ducted-cfg-44",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-45",
      slug: "russell-vantix-central-ducted-cfg-45",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-46",
      slug: "russell-vantix-central-ducted-cfg-46",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-47",
      slug: "russell-vantix-central-ducted-cfg-47",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-48",
      slug: "russell-vantix-central-ducted-cfg-48",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-49",
      slug: "russell-vantix-central-ducted-cfg-49",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-50",
      slug: "russell-vantix-central-ducted-cfg-50",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-51",
      slug: "russell-vantix-central-ducted-cfg-51",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-52",
      slug: "russell-vantix-central-ducted-cfg-52",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-53",
      slug: "russell-vantix-central-ducted-cfg-53",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-54",
      slug: "russell-vantix-central-ducted-cfg-54",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-55",
      slug: "russell-vantix-central-ducted-cfg-55",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-56",
      slug: "russell-vantix-central-ducted-cfg-56",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-57",
      slug: "russell-vantix-central-ducted-cfg-57",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-58",
      slug: "russell-vantix-central-ducted-cfg-58",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-59",
      slug: "russell-vantix-central-ducted-cfg-59",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-60",
      slug: "russell-vantix-central-ducted-cfg-60",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-61",
      slug: "russell-vantix-central-ducted-cfg-61",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-62",
      slug: "russell-vantix-central-ducted-cfg-62",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-63",
      slug: "russell-vantix-central-ducted-cfg-63",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-64",
      slug: "russell-vantix-central-ducted-cfg-64",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-65",
      slug: "russell-vantix-central-ducted-cfg-65",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-66",
      slug: "russell-vantix-central-ducted-cfg-66",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-67",
      slug: "russell-vantix-central-ducted-cfg-67",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-68",
      slug: "russell-vantix-central-ducted-cfg-68",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-69",
      slug: "russell-vantix-central-ducted-cfg-69",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-70",
      slug: "russell-vantix-central-ducted-cfg-70",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-71",
      slug: "russell-vantix-central-ducted-cfg-71",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-72",
      slug: "russell-vantix-central-ducted-cfg-72",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-73",
      slug: "russell-vantix-central-ducted-cfg-73",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-74",
      slug: "russell-vantix-central-ducted-cfg-74",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-75",
      slug: "russell-vantix-central-ducted-cfg-75",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-76",
      slug: "russell-vantix-central-ducted-cfg-76",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-77",
      slug: "russell-vantix-central-ducted-cfg-77",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-78",
      slug: "russell-vantix-central-ducted-cfg-78",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-sp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-79",
      slug: "russell-vantix-central-ducted-cfg-79",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-80",
      slug: "russell-vantix-central-ducted-cfg-80",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-81",
      slug: "russell-vantix-central-ducted-cfg-81",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-82",
      slug: "russell-vantix-central-ducted-cfg-82",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-83",
      slug: "russell-vantix-central-ducted-cfg-83",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-84",
      slug: "russell-vantix-central-ducted-cfg-84",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-85",
      slug: "russell-vantix-central-ducted-cfg-85",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-86",
      slug: "russell-vantix-central-ducted-cfg-86",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-87",
      slug: "russell-vantix-central-ducted-cfg-87",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-88",
      slug: "russell-vantix-central-ducted-cfg-88",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-89",
      slug: "russell-vantix-central-ducted-cfg-89",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-90",
      slug: "russell-vantix-central-ducted-cfg-90",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-91",
      slug: "russell-vantix-central-ducted-cfg-91",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-92",
      slug: "russell-vantix-central-ducted-cfg-92",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-93",
      slug: "russell-vantix-central-ducted-cfg-93",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-94",
      slug: "russell-vantix-central-ducted-cfg-94",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-95",
      slug: "russell-vantix-central-ducted-cfg-95",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-96",
      slug: "russell-vantix-central-ducted-cfg-96",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-97",
      slug: "russell-vantix-central-ducted-cfg-97",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-98",
      slug: "russell-vantix-central-ducted-cfg-98",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-99",
      slug: "russell-vantix-central-ducted-cfg-99",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-100",
      slug: "russell-vantix-central-ducted-cfg-100",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-vantix-central-ducted-cfg-101",
      slug: "russell-vantix-central-ducted-cfg-101",
      modelId: "russell-vantix-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-1",
      slug: "russell-f-series-plus-central-ducted-cfg-1",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-2",
      slug: "russell-f-series-plus-central-ducted-cfg-2",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-3",
      slug: "russell-f-series-plus-central-ducted-cfg-3",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-4",
      slug: "russell-f-series-plus-central-ducted-cfg-4",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-5",
      slug: "russell-f-series-plus-central-ducted-cfg-5",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-6",
      slug: "russell-f-series-plus-central-ducted-cfg-6",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-7",
      slug: "russell-f-series-plus-central-ducted-cfg-7",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-8",
      slug: "russell-f-series-plus-central-ducted-cfg-8",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-9",
      slug: "russell-f-series-plus-central-ducted-cfg-9",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-10",
      slug: "russell-f-series-plus-central-ducted-cfg-10",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-11",
      slug: "russell-f-series-plus-central-ducted-cfg-11",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-12",
      slug: "russell-f-series-plus-central-ducted-cfg-12",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-13",
      slug: "russell-f-series-plus-central-ducted-cfg-13",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-14",
      slug: "russell-f-series-plus-central-ducted-cfg-14",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-15",
      slug: "russell-f-series-plus-central-ducted-cfg-15",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-16",
      slug: "russell-f-series-plus-central-ducted-cfg-16",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-17",
      slug: "russell-f-series-plus-central-ducted-cfg-17",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-18",
      slug: "russell-f-series-plus-central-ducted-cfg-18",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-19",
      slug: "russell-f-series-plus-central-ducted-cfg-19",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-20",
      slug: "russell-f-series-plus-central-ducted-cfg-20",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-21",
      slug: "russell-f-series-plus-central-ducted-cfg-21",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-22",
      slug: "russell-f-series-plus-central-ducted-cfg-22",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-23",
      slug: "russell-f-series-plus-central-ducted-cfg-23",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-24",
      slug: "russell-f-series-plus-central-ducted-cfg-24",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-25",
      slug: "russell-f-series-plus-central-ducted-cfg-25",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-26",
      slug: "russell-f-series-plus-central-ducted-cfg-26",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-27",
      slug: "russell-f-series-plus-central-ducted-cfg-27",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-28",
      slug: "russell-f-series-plus-central-ducted-cfg-28",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-29",
      slug: "russell-f-series-plus-central-ducted-cfg-29",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-30",
      slug: "russell-f-series-plus-central-ducted-cfg-30",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-31",
      slug: "russell-f-series-plus-central-ducted-cfg-31",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-32",
      slug: "russell-f-series-plus-central-ducted-cfg-32",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-33",
      slug: "russell-f-series-plus-central-ducted-cfg-33",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-34",
      slug: "russell-f-series-plus-central-ducted-cfg-34",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-35",
      slug: "russell-f-series-plus-central-ducted-cfg-35",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-36",
      slug: "russell-f-series-plus-central-ducted-cfg-36",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-37",
      slug: "russell-f-series-plus-central-ducted-cfg-37",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-38",
      slug: "russell-f-series-plus-central-ducted-cfg-38",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-39",
      slug: "russell-f-series-plus-central-ducted-cfg-39",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-40",
      slug: "russell-f-series-plus-central-ducted-cfg-40",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-41",
      slug: "russell-f-series-plus-central-ducted-cfg-41",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd16ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-plus-central-ducted-cfg-42",
      slug: "russell-f-series-plus-central-ducted-cfg-42",
      modelId: "russell-f-series-plus-central-ducted",
      outdoorUnitId: "russell-rd16ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-1",
      slug: "russell-f-series-central-ducted-cfg-1",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-2",
      slug: "russell-f-series-central-ducted-cfg-2",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-3",
      slug: "russell-f-series-central-ducted-cfg-3",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-4",
      slug: "russell-f-series-central-ducted-cfg-4",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-5",
      slug: "russell-f-series-central-ducted-cfg-5",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-6",
      slug: "russell-f-series-central-ducted-cfg-6",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-7",
      slug: "russell-f-series-central-ducted-cfg-7",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-8",
      slug: "russell-f-series-central-ducted-cfg-8",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-9",
      slug: "russell-f-series-central-ducted-cfg-9",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-10",
      slug: "russell-f-series-central-ducted-cfg-10",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-11",
      slug: "russell-f-series-central-ducted-cfg-11",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-12",
      slug: "russell-f-series-central-ducted-cfg-12",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-13",
      slug: "russell-f-series-central-ducted-cfg-13",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-14",
      slug: "russell-f-series-central-ducted-cfg-14",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-15",
      slug: "russell-f-series-central-ducted-cfg-15",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-16",
      slug: "russell-f-series-central-ducted-cfg-16",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-17",
      slug: "russell-f-series-central-ducted-cfg-17",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-18",
      slug: "russell-f-series-central-ducted-cfg-18",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-19",
      slug: "russell-f-series-central-ducted-cfg-19",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-20",
      slug: "russell-f-series-central-ducted-cfg-20",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-21",
      slug: "russell-f-series-central-ducted-cfg-21",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-22",
      slug: "russell-f-series-central-ducted-cfg-22",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-23",
      slug: "russell-f-series-central-ducted-cfg-23",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-24",
      slug: "russell-f-series-central-ducted-cfg-24",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-25",
      slug: "russell-f-series-central-ducted-cfg-25",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-26",
      slug: "russell-f-series-central-ducted-cfg-26",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-27",
      slug: "russell-f-series-central-ducted-cfg-27",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-28",
      slug: "russell-f-series-central-ducted-cfg-28",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-29",
      slug: "russell-f-series-central-ducted-cfg-29",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-30",
      slug: "russell-f-series-central-ducted-cfg-30",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-31",
      slug: "russell-f-series-central-ducted-cfg-31",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-32",
      slug: "russell-f-series-central-ducted-cfg-32",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-33",
      slug: "russell-f-series-central-ducted-cfg-33",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-34",
      slug: "russell-f-series-central-ducted-cfg-34",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-35",
      slug: "russell-f-series-central-ducted-cfg-35",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-36",
      slug: "russell-f-series-central-ducted-cfg-36",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-37",
      slug: "russell-f-series-central-ducted-cfg-37",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-38",
      slug: "russell-f-series-central-ducted-cfg-38",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-39",
      slug: "russell-f-series-central-ducted-cfg-39",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-40",
      slug: "russell-f-series-central-ducted-cfg-40",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-41",
      slug: "russell-f-series-central-ducted-cfg-41",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-42",
      slug: "russell-f-series-central-ducted-cfg-42",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-43",
      slug: "russell-f-series-central-ducted-cfg-43",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-44",
      slug: "russell-f-series-central-ducted-cfg-44",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-45",
      slug: "russell-f-series-central-ducted-cfg-45",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-46",
      slug: "russell-f-series-central-ducted-cfg-46",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-47",
      slug: "russell-f-series-central-ducted-cfg-47",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-48",
      slug: "russell-f-series-central-ducted-cfg-48",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-49",
      slug: "russell-f-series-central-ducted-cfg-49",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-50",
      slug: "russell-f-series-central-ducted-cfg-50",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-51",
      slug: "russell-f-series-central-ducted-cfg-51",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-52",
      slug: "russell-f-series-central-ducted-cfg-52",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-53",
      slug: "russell-f-series-central-ducted-cfg-53",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-54",
      slug: "russell-f-series-central-ducted-cfg-54",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-55",
      slug: "russell-f-series-central-ducted-cfg-55",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-56",
      slug: "russell-f-series-central-ducted-cfg-56",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-57",
      slug: "russell-f-series-central-ducted-cfg-57",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-58",
      slug: "russell-f-series-central-ducted-cfg-58",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-59",
      slug: "russell-f-series-central-ducted-cfg-59",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-60",
      slug: "russell-f-series-central-ducted-cfg-60",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-61",
      slug: "russell-f-series-central-ducted-cfg-61",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-62",
      slug: "russell-f-series-central-ducted-cfg-62",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-63",
      slug: "russell-f-series-central-ducted-cfg-63",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-64",
      slug: "russell-f-series-central-ducted-cfg-64",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-65",
      slug: "russell-f-series-central-ducted-cfg-65",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-66",
      slug: "russell-f-series-central-ducted-cfg-66",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-67",
      slug: "russell-f-series-central-ducted-cfg-67",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-68",
      slug: "russell-f-series-central-ducted-cfg-68",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-69",
      slug: "russell-f-series-central-ducted-cfg-69",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-70",
      slug: "russell-f-series-central-ducted-cfg-70",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-71",
      slug: "russell-f-series-central-ducted-cfg-71",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-72",
      slug: "russell-f-series-central-ducted-cfg-72",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-73",
      slug: "russell-f-series-central-ducted-cfg-73",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-74",
      slug: "russell-f-series-central-ducted-cfg-74",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-75",
      slug: "russell-f-series-central-ducted-cfg-75",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-76",
      slug: "russell-f-series-central-ducted-cfg-76",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-f-series-central-ducted-cfg-77",
      slug: "russell-f-series-central-ducted-cfg-77",
      modelId: "russell-f-series-central-ducted",
      outdoorUnitId: "russell-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-1",
      slug: "russell-k-series-central-ducted-cfg-1",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-2",
      slug: "russell-k-series-central-ducted-cfg-2",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-3",
      slug: "russell-k-series-central-ducted-cfg-3",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-4",
      slug: "russell-k-series-central-ducted-cfg-4",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-5",
      slug: "russell-k-series-central-ducted-cfg-5",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-6",
      slug: "russell-k-series-central-ducted-cfg-6",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-7",
      slug: "russell-k-series-central-ducted-cfg-7",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-8",
      slug: "russell-k-series-central-ducted-cfg-8",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-9",
      slug: "russell-k-series-central-ducted-cfg-9",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-10",
      slug: "russell-k-series-central-ducted-cfg-10",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-11",
      slug: "russell-k-series-central-ducted-cfg-11",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-12",
      slug: "russell-k-series-central-ducted-cfg-12",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-13",
      slug: "russell-k-series-central-ducted-cfg-13",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-14",
      slug: "russell-k-series-central-ducted-cfg-14",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-15",
      slug: "russell-k-series-central-ducted-cfg-15",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-16",
      slug: "russell-k-series-central-ducted-cfg-16",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-17",
      slug: "russell-k-series-central-ducted-cfg-17",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-18",
      slug: "russell-k-series-central-ducted-cfg-18",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-19",
      slug: "russell-k-series-central-ducted-cfg-19",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-20",
      slug: "russell-k-series-central-ducted-cfg-20",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-21",
      slug: "russell-k-series-central-ducted-cfg-21",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-22",
      slug: "russell-k-series-central-ducted-cfg-22",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-23",
      slug: "russell-k-series-central-ducted-cfg-23",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-24",
      slug: "russell-k-series-central-ducted-cfg-24",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-25",
      slug: "russell-k-series-central-ducted-cfg-25",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-26",
      slug: "russell-k-series-central-ducted-cfg-26",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-27",
      slug: "russell-k-series-central-ducted-cfg-27",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-28",
      slug: "russell-k-series-central-ducted-cfg-28",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-29",
      slug: "russell-k-series-central-ducted-cfg-29",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-30",
      slug: "russell-k-series-central-ducted-cfg-30",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-31",
      slug: "russell-k-series-central-ducted-cfg-31",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-32",
      slug: "russell-k-series-central-ducted-cfg-32",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-33",
      slug: "russell-k-series-central-ducted-cfg-33",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-34",
      slug: "russell-k-series-central-ducted-cfg-34",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-35",
      slug: "russell-k-series-central-ducted-cfg-35",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-36",
      slug: "russell-k-series-central-ducted-cfg-36",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-37",
      slug: "russell-k-series-central-ducted-cfg-37",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-38",
      slug: "russell-k-series-central-ducted-cfg-38",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-39",
      slug: "russell-k-series-central-ducted-cfg-39",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-40",
      slug: "russell-k-series-central-ducted-cfg-40",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-41",
      slug: "russell-k-series-central-ducted-cfg-41",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-42",
      slug: "russell-k-series-central-ducted-cfg-42",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-43",
      slug: "russell-k-series-central-ducted-cfg-43",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-44",
      slug: "russell-k-series-central-ducted-cfg-44",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-45",
      slug: "russell-k-series-central-ducted-cfg-45",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-46",
      slug: "russell-k-series-central-ducted-cfg-46",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-47",
      slug: "russell-k-series-central-ducted-cfg-47",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-48",
      slug: "russell-k-series-central-ducted-cfg-48",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-49",
      slug: "russell-k-series-central-ducted-cfg-49",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-50",
      slug: "russell-k-series-central-ducted-cfg-50",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-51",
      slug: "russell-k-series-central-ducted-cfg-51",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-52",
      slug: "russell-k-series-central-ducted-cfg-52",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-53",
      slug: "russell-k-series-central-ducted-cfg-53",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-54",
      slug: "russell-k-series-central-ducted-cfg-54",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-55",
      slug: "russell-k-series-central-ducted-cfg-55",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-56",
      slug: "russell-k-series-central-ducted-cfg-56",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-57",
      slug: "russell-k-series-central-ducted-cfg-57",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-58",
      slug: "russell-k-series-central-ducted-cfg-58",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-k-series-central-ducted-cfg-59",
      slug: "russell-k-series-central-ducted-cfg-59",
      modelId: "russell-k-series-central-ducted",
      outdoorUnitId: "russell-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-central-ducted-cfg-1",
      slug: "russell-standard-central-ducted-cfg-1",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
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
      id: "russell-standard-central-ducted-cfg-2",
      slug: "russell-standard-central-ducted-cfg-2",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-central-ducted-cfg-3",
      slug: "russell-standard-central-ducted-cfg-3",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
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
      id: "russell-standard-central-ducted-cfg-4",
      slug: "russell-standard-central-ducted-cfg-4",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-central-ducted-cfg-5",
      slug: "russell-standard-central-ducted-cfg-5",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-central-ducted-cfg-6",
      slug: "russell-standard-central-ducted-cfg-6",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-central-ducted-cfg-7",
      slug: "russell-standard-central-ducted-cfg-7",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-central-ducted-cfg-8",
      slug: "russell-standard-central-ducted-cfg-8",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-central-ducted-cfg-9",
      slug: "russell-standard-central-ducted-cfg-9",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
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
      id: "russell-standard-central-ducted-cfg-10",
      slug: "russell-standard-central-ducted-cfg-10",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-central-ducted-cfg-11",
      slug: "russell-standard-central-ducted-cfg-11",
      modelId: "russell-standard-central-ducted",
      outdoorUnitId: "russell-sp19ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "russell-standard-wall-single-cfg-1",
      slug: "russell-standard-wall-single-cfg-1",
      modelId: "russell-standard-wall-single",
      outdoorUnitId: "russell-rd16ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "russell-vantix-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-vantix-central-ducted-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-plus-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-f-series-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-3",
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
      configurationId: "russell-k-series-central-ducted-cfg-4",
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
      configurationId: "russell-k-series-central-ducted-cfg-5",
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
      configurationId: "russell-k-series-central-ducted-cfg-6",
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
      configurationId: "russell-k-series-central-ducted-cfg-7",
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
      configurationId: "russell-k-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-10",
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
      configurationId: "russell-k-series-central-ducted-cfg-11",
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
      configurationId: "russell-k-series-central-ducted-cfg-12",
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
      configurationId: "russell-k-series-central-ducted-cfg-13",
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
      configurationId: "russell-k-series-central-ducted-cfg-14",
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
      configurationId: "russell-k-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-16",
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
      configurationId: "russell-k-series-central-ducted-cfg-17",
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
      configurationId: "russell-k-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-19",
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
      configurationId: "russell-k-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-23",
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
      configurationId: "russell-k-series-central-ducted-cfg-24",
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
      configurationId: "russell-k-series-central-ducted-cfg-25",
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
      configurationId: "russell-k-series-central-ducted-cfg-26",
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
      configurationId: "russell-k-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-29",
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
      configurationId: "russell-k-series-central-ducted-cfg-30",
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
      configurationId: "russell-k-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-32",
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
      configurationId: "russell-k-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-35",
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
      configurationId: "russell-k-series-central-ducted-cfg-36",
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
      configurationId: "russell-k-series-central-ducted-cfg-37",
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
      configurationId: "russell-k-series-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-43",
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
      configurationId: "russell-k-series-central-ducted-cfg-44",
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
      configurationId: "russell-k-series-central-ducted-cfg-45",
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
      configurationId: "russell-k-series-central-ducted-cfg-46",
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
      configurationId: "russell-k-series-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-k-series-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "russell-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
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
