import type { BrandDataset } from "../../types";

export const ecoerDataset: BrandDataset = {
  brand: {
    id: "ecoer",
    slug: "ecoer",
    name: "ECOER",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ecoer-standard",
      slug: "ecoer-standard",
      name: "Standard",
      brandId: "ecoer",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-decades-extreme",
      slug: "ecoer-sdi-decades-extreme",
      name: "SDi Decades Extreme",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme",
      slug: "ecoer-esi-decades-extreme",
      name: "ESi Decades Extreme",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro",
      slug: "ecoer-tdi-pro",
      name: "TDi Pro",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti",
      slug: "ecoer-rti",
      name: "RTi",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2",
      slug: "ecoer-tdi-pro-2",
      name: "TDi Pro 2",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2",
      slug: "ecoer-sdi-extreme-2",
      name: "SDi Extreme 2",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2",
      slug: "ecoer-sdi-pro-2",
      name: "SDi Pro 2",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti-2",
      slug: "ecoer-rti-2",
      name: "RTi 2",
      brandId: "ecoer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ecoer-standard-wall-single",
      slug: "ecoer-standard-wall-single",
      name: "Standard",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 42000,
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
      id: "ecoer-standard-central-ducted",
      slug: "ecoer-standard-central-ducted",
      name: "Standard",
      seriesId: "ecoer-standard",
      brandId: "ecoer",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 18600,
      heatingCapacity5FMaxBtu: 41000,
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
      id: "ecoer-sdi-decades-extreme-central-ducted",
      slug: "ecoer-sdi-decades-extreme-central-ducted",
      name: "SDi Decades Extreme",
      seriesId: "ecoer-sdi-decades-extreme",
      brandId: "ecoer",
      modelNumber: "SDi Decades Extreme",
      normalizedModelNumber: "sdi-decades-extreme",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 30400,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 16,
      hspf2Min: 9.2,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted",
      slug: "ecoer-esi-decades-extreme-central-ducted",
      name: "ESi Decades Extreme",
      seriesId: "ecoer-esi-decades-extreme",
      brandId: "ecoer",
      modelNumber: "ESi Decades Extreme",
      normalizedModelNumber: "esi-decades-extreme",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 33600,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 27600,
      seer2Min: 17.2,
      seer2Max: 18.5,
      hspf2Min: 8.8,
      hspf2Max: 9,
      cop5FMin: 1.9,
      cop5FMax: 1.95,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted",
      slug: "ecoer-tdi-pro-central-ducted",
      name: "TDi Pro",
      seriesId: "ecoer-tdi-pro",
      brandId: "ecoer",
      modelNumber: "TDi Pro",
      normalizedModelNumber: "tdi-pro",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 43500,
      seer2Min: 15.2,
      seer2Max: 20.5,
      hspf2Min: 8.3,
      hspf2Max: 9.5,
      cop5FMin: 1.85,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti-central-ducted",
      slug: "ecoer-rti-central-ducted",
      name: "RTi",
      seriesId: "ecoer-rti",
      brandId: "ecoer",
      modelNumber: "RTi",
      normalizedModelNumber: "rti",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 44500,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 18.5,
      seer2Max: 18.5,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted",
      slug: "ecoer-tdi-pro-2-central-ducted",
      name: "TDi Pro 2",
      seriesId: "ecoer-tdi-pro-2",
      brandId: "ecoer",
      modelNumber: "TDi Pro 2",
      normalizedModelNumber: "tdi-pro-2",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 23200,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 16,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted",
      slug: "ecoer-sdi-extreme-2-central-ducted",
      name: "SDi Extreme 2",
      seriesId: "ecoer-sdi-extreme-2",
      brandId: "ecoer",
      modelNumber: "SDi Extreme 2",
      normalizedModelNumber: "sdi-extreme-2",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 18.3,
      hspf2Min: 8.5,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted",
      slug: "ecoer-sdi-pro-2-central-ducted",
      name: "SDi Pro 2",
      seriesId: "ecoer-sdi-pro-2",
      brandId: "ecoer",
      modelNumber: "SDi Pro 2",
      normalizedModelNumber: "sdi-pro-2",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 18.1,
      hspf2Min: 8.4,
      hspf2Max: 9.7,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti-2-central-ducted",
      slug: "ecoer-rti-2-central-ducted",
      name: "RTi 2",
      seriesId: "ecoer-rti-2",
      brandId: "ecoer",
      modelNumber: "RTi 2",
      normalizedModelNumber: "rti-2",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      heatingCapacity5FMinBtu: 45000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ecoer-eoda18h-2436",
      modelNumber: "EODA18H-2436",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-4860",
      modelNumber: "EODA18H-4860",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-2436b",
      modelNumber: "EODA18H-2436B",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-4860b",
      modelNumber: "EODA18H-4860B",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-4860baa",
      modelNumber: "EODA18H-4860BAA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-36",
      modelNumber: "ESCA16H-36",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-60",
      modelNumber: "ESCA16H-60",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda18h-2436baa",
      modelNumber: "EODA18H-2436BAA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda19h-2436aa",
      modelNumber: "EODA19H-2436AA*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda19h-4860aa",
      modelNumber: "EODA19H-4860AA*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-erda19h-60aa",
      modelNumber: "ERDA19H-60AA*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda19h-2436ab",
      modelNumber: "EODA19H-2436AB*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-eoda19h-4860ab",
      modelNumber: "EODA19H-4860AB*",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca17h-24aba",
      modelNumber: "ESCA17H-24ABA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca17h-48aba",
      modelNumber: "ESCA17H-48ABA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca17h-36aba",
      modelNumber: "ESCA17H-36ABA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca17h-60aba",
      modelNumber: "ESCA17H-60ABA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-24bba",
      modelNumber: "ESCA16H-24BBA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-48bba",
      modelNumber: "ESCA16H-48BBA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-36bba",
      modelNumber: "ESCA16H-36BBA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-esca16h-60bba",
      modelNumber: "ESCA16H-60BBA",
      brandId: "ecoer",
      refrigerant: null as any,
    },
    {
      id: "ecoer-erda19h-60ab",
      modelNumber: "ERDA19H-60AB*",
      brandId: "ecoer",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ecoer-standard-wall-single-cfg-1",
      slug: "ecoer-standard-wall-single-cfg-1",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-2",
      slug: "ecoer-standard-wall-single-cfg-2",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-3",
      slug: "ecoer-standard-wall-single-cfg-3",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-cfg-4",
      slug: "ecoer-standard-wall-single-cfg-4",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-cfg-5",
      slug: "ecoer-standard-wall-single-cfg-5",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-cfg-6",
      slug: "ecoer-standard-wall-single-cfg-6",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-cfg-7",
      slug: "ecoer-standard-wall-single-cfg-7",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-8",
      slug: "ecoer-standard-wall-single-cfg-8",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-9",
      slug: "ecoer-standard-wall-single-cfg-9",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-10",
      slug: "ecoer-standard-wall-single-cfg-10",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
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
      id: "ecoer-standard-wall-single-cfg-11",
      slug: "ecoer-standard-wall-single-cfg-11",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-12",
      slug: "ecoer-standard-wall-single-cfg-12",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-13",
      slug: "ecoer-standard-wall-single-cfg-13",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-14",
      slug: "ecoer-standard-wall-single-cfg-14",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-15",
      slug: "ecoer-standard-wall-single-cfg-15",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436b",
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
      id: "ecoer-standard-wall-single-cfg-16",
      slug: "ecoer-standard-wall-single-cfg-16",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-17",
      slug: "ecoer-standard-wall-single-cfg-17",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-18",
      slug: "ecoer-standard-wall-single-cfg-18",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-19",
      slug: "ecoer-standard-wall-single-cfg-19",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-wall-single-cfg-20",
      slug: "ecoer-standard-wall-single-cfg-20",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-21",
      slug: "ecoer-standard-wall-single-cfg-21",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-22",
      slug: "ecoer-standard-wall-single-cfg-22",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-23",
      slug: "ecoer-standard-wall-single-cfg-23",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-24",
      slug: "ecoer-standard-wall-single-cfg-24",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-25",
      slug: "ecoer-standard-wall-single-cfg-25",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-26",
      slug: "ecoer-standard-wall-single-cfg-26",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-27",
      slug: "ecoer-standard-wall-single-cfg-27",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-28",
      slug: "ecoer-standard-wall-single-cfg-28",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-cfg-29",
      slug: "ecoer-standard-wall-single-cfg-29",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-30",
      slug: "ecoer-standard-wall-single-cfg-30",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-cfg-31",
      slug: "ecoer-standard-wall-single-cfg-31",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436b",
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
      id: "ecoer-standard-wall-single-cfg-32",
      slug: "ecoer-standard-wall-single-cfg-32",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-33",
      slug: "ecoer-standard-wall-single-cfg-33",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-34",
      slug: "ecoer-standard-wall-single-cfg-34",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-35",
      slug: "ecoer-standard-wall-single-cfg-35",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860b",
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
      id: "ecoer-standard-wall-single-cfg-36",
      slug: "ecoer-standard-wall-single-cfg-36",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-37",
      slug: "ecoer-standard-wall-single-cfg-37",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-38",
      slug: "ecoer-standard-wall-single-cfg-38",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-39",
      slug: "ecoer-standard-wall-single-cfg-39",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-40",
      slug: "ecoer-standard-wall-single-cfg-40",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-41",
      slug: "ecoer-standard-wall-single-cfg-41",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-42",
      slug: "ecoer-standard-wall-single-cfg-42",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-43",
      slug: "ecoer-standard-wall-single-cfg-43",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-cfg-44",
      slug: "ecoer-standard-wall-single-cfg-44",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-45",
      slug: "ecoer-standard-wall-single-cfg-45",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-46",
      slug: "ecoer-standard-wall-single-cfg-46",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-47",
      slug: "ecoer-standard-wall-single-cfg-47",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-48",
      slug: "ecoer-standard-wall-single-cfg-48",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-49",
      slug: "ecoer-standard-wall-single-cfg-49",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-wall-single-cfg-50",
      slug: "ecoer-standard-wall-single-cfg-50",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-wall-single-cfg-51",
      slug: "ecoer-standard-wall-single-cfg-51",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860",
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
      id: "ecoer-standard-wall-single-cfg-52",
      slug: "ecoer-standard-wall-single-cfg-52",
      modelId: "ecoer-standard-wall-single",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
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
      id: "ecoer-standard-central-ducted-cfg-1",
      slug: "ecoer-standard-central-ducted-cfg-1",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-2",
      slug: "ecoer-standard-central-ducted-cfg-2",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-3",
      slug: "ecoer-standard-central-ducted-cfg-3",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-4",
      slug: "ecoer-standard-central-ducted-cfg-4",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-5",
      slug: "ecoer-standard-central-ducted-cfg-5",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-6",
      slug: "ecoer-standard-central-ducted-cfg-6",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-7",
      slug: "ecoer-standard-central-ducted-cfg-7",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-8",
      slug: "ecoer-standard-central-ducted-cfg-8",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-9",
      slug: "ecoer-standard-central-ducted-cfg-9",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-10",
      slug: "ecoer-standard-central-ducted-cfg-10",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-11",
      slug: "ecoer-standard-central-ducted-cfg-11",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-12",
      slug: "ecoer-standard-central-ducted-cfg-12",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-13",
      slug: "ecoer-standard-central-ducted-cfg-13",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-14",
      slug: "ecoer-standard-central-ducted-cfg-14",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-15",
      slug: "ecoer-standard-central-ducted-cfg-15",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436b",
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
      id: "ecoer-standard-central-ducted-cfg-16",
      slug: "ecoer-standard-central-ducted-cfg-16",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436b",
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
      id: "ecoer-standard-central-ducted-cfg-17",
      slug: "ecoer-standard-central-ducted-cfg-17",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-18",
      slug: "ecoer-standard-central-ducted-cfg-18",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-19",
      slug: "ecoer-standard-central-ducted-cfg-19",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-20",
      slug: "ecoer-standard-central-ducted-cfg-20",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-21",
      slug: "ecoer-standard-central-ducted-cfg-21",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-22",
      slug: "ecoer-standard-central-ducted-cfg-22",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-23",
      slug: "ecoer-standard-central-ducted-cfg-23",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-24",
      slug: "ecoer-standard-central-ducted-cfg-24",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-25",
      slug: "ecoer-standard-central-ducted-cfg-25",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-26",
      slug: "ecoer-standard-central-ducted-cfg-26",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-27",
      slug: "ecoer-standard-central-ducted-cfg-27",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-28",
      slug: "ecoer-standard-central-ducted-cfg-28",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-29",
      slug: "ecoer-standard-central-ducted-cfg-29",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-30",
      slug: "ecoer-standard-central-ducted-cfg-30",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-31",
      slug: "ecoer-standard-central-ducted-cfg-31",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-32",
      slug: "ecoer-standard-central-ducted-cfg-32",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-33",
      slug: "ecoer-standard-central-ducted-cfg-33",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-34",
      slug: "ecoer-standard-central-ducted-cfg-34",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-35",
      slug: "ecoer-standard-central-ducted-cfg-35",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-36",
      slug: "ecoer-standard-central-ducted-cfg-36",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-37",
      slug: "ecoer-standard-central-ducted-cfg-37",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-38",
      slug: "ecoer-standard-central-ducted-cfg-38",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-39",
      slug: "ecoer-standard-central-ducted-cfg-39",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-40",
      slug: "ecoer-standard-central-ducted-cfg-40",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-41",
      slug: "ecoer-standard-central-ducted-cfg-41",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-42",
      slug: "ecoer-standard-central-ducted-cfg-42",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-43",
      slug: "ecoer-standard-central-ducted-cfg-43",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-44",
      slug: "ecoer-standard-central-ducted-cfg-44",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-45",
      slug: "ecoer-standard-central-ducted-cfg-45",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-46",
      slug: "ecoer-standard-central-ducted-cfg-46",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-47",
      slug: "ecoer-standard-central-ducted-cfg-47",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-48",
      slug: "ecoer-standard-central-ducted-cfg-48",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
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
      id: "ecoer-standard-central-ducted-cfg-49",
      slug: "ecoer-standard-central-ducted-cfg-49",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436",
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
      id: "ecoer-standard-central-ducted-cfg-50",
      slug: "ecoer-standard-central-ducted-cfg-50",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-51",
      slug: "ecoer-standard-central-ducted-cfg-51",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-52",
      slug: "ecoer-standard-central-ducted-cfg-52",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-53",
      slug: "ecoer-standard-central-ducted-cfg-53",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-standard-central-ducted-cfg-54",
      slug: "ecoer-standard-central-ducted-cfg-54",
      modelId: "ecoer-standard-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-4860",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-decades-extreme-central-ducted-cfg-1",
      slug: "ecoer-sdi-decades-extreme-central-ducted-cfg-1",
      modelId: "ecoer-sdi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-esca16h-36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-decades-extreme-central-ducted-cfg-2",
      slug: "ecoer-sdi-decades-extreme-central-ducted-cfg-2",
      modelId: "ecoer-sdi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-esca16h-60",
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
      id: "ecoer-sdi-decades-extreme-central-ducted-cfg-3",
      slug: "ecoer-sdi-decades-extreme-central-ducted-cfg-3",
      modelId: "ecoer-sdi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-esca16h-36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-decades-extreme-central-ducted-cfg-4",
      slug: "ecoer-sdi-decades-extreme-central-ducted-cfg-4",
      modelId: "ecoer-sdi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-esca16h-60",
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
      id: "ecoer-sdi-decades-extreme-central-ducted-cfg-5",
      slug: "ecoer-sdi-decades-extreme-central-ducted-cfg-5",
      modelId: "ecoer-sdi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-esca16h-60",
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
      id: "ecoer-sdi-decades-extreme-central-ducted-cfg-6",
      slug: "ecoer-sdi-decades-extreme-central-ducted-cfg-6",
      modelId: "ecoer-sdi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-esca16h-60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-1",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-1",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-2",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-2",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-3",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-3",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-4",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-4",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-5",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-5",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-6",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-6",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-7",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-7",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-8",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-8",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-9",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-9",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-10",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-10",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-11",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-11",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-12",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-12",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-13",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-13",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-14",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-14",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-15",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-15",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-16",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-16",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-17",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-17",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-18",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-18",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-19",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-19",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-20",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-20",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-21",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-21",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-22",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-22",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-23",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-23",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-24",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-24",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-25",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-25",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-26",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-26",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-27",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-27",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-28",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-28",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-29",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-29",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-30",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-30",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-31",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-31",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-esi-decades-extreme-central-ducted-cfg-32",
      slug: "ecoer-esi-decades-extreme-central-ducted-cfg-32",
      modelId: "ecoer-esi-decades-extreme-central-ducted",
      outdoorUnitId: "ecoer-eoda18h-2436baa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-1",
      slug: "ecoer-tdi-pro-central-ducted-cfg-1",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-2",
      slug: "ecoer-tdi-pro-central-ducted-cfg-2",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-3",
      slug: "ecoer-tdi-pro-central-ducted-cfg-3",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-4",
      slug: "ecoer-tdi-pro-central-ducted-cfg-4",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-5",
      slug: "ecoer-tdi-pro-central-ducted-cfg-5",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 15.2,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-6",
      slug: "ecoer-tdi-pro-central-ducted-cfg-6",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-7",
      slug: "ecoer-tdi-pro-central-ducted-cfg-7",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-8",
      slug: "ecoer-tdi-pro-central-ducted-cfg-8",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 15.2,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-9",
      slug: "ecoer-tdi-pro-central-ducted-cfg-9",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-10",
      slug: "ecoer-tdi-pro-central-ducted-cfg-10",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-11",
      slug: "ecoer-tdi-pro-central-ducted-cfg-11",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-12",
      slug: "ecoer-tdi-pro-central-ducted-cfg-12",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-13",
      slug: "ecoer-tdi-pro-central-ducted-cfg-13",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-14",
      slug: "ecoer-tdi-pro-central-ducted-cfg-14",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-15",
      slug: "ecoer-tdi-pro-central-ducted-cfg-15",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-16",
      slug: "ecoer-tdi-pro-central-ducted-cfg-16",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-17",
      slug: "ecoer-tdi-pro-central-ducted-cfg-17",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-18",
      slug: "ecoer-tdi-pro-central-ducted-cfg-18",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-19",
      slug: "ecoer-tdi-pro-central-ducted-cfg-19",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-20",
      slug: "ecoer-tdi-pro-central-ducted-cfg-20",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-21",
      slug: "ecoer-tdi-pro-central-ducted-cfg-21",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-22",
      slug: "ecoer-tdi-pro-central-ducted-cfg-22",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-23",
      slug: "ecoer-tdi-pro-central-ducted-cfg-23",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-24",
      slug: "ecoer-tdi-pro-central-ducted-cfg-24",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-25",
      slug: "ecoer-tdi-pro-central-ducted-cfg-25",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-26",
      slug: "ecoer-tdi-pro-central-ducted-cfg-26",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-27",
      slug: "ecoer-tdi-pro-central-ducted-cfg-27",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-28",
      slug: "ecoer-tdi-pro-central-ducted-cfg-28",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-29",
      slug: "ecoer-tdi-pro-central-ducted-cfg-29",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-30",
      slug: "ecoer-tdi-pro-central-ducted-cfg-30",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-31",
      slug: "ecoer-tdi-pro-central-ducted-cfg-31",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-32",
      slug: "ecoer-tdi-pro-central-ducted-cfg-32",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-33",
      slug: "ecoer-tdi-pro-central-ducted-cfg-33",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-34",
      slug: "ecoer-tdi-pro-central-ducted-cfg-34",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-35",
      slug: "ecoer-tdi-pro-central-ducted-cfg-35",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-36",
      slug: "ecoer-tdi-pro-central-ducted-cfg-36",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 17,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-37",
      slug: "ecoer-tdi-pro-central-ducted-cfg-37",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 17,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-38",
      slug: "ecoer-tdi-pro-central-ducted-cfg-38",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16.5,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-39",
      slug: "ecoer-tdi-pro-central-ducted-cfg-39",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16.5,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-40",
      slug: "ecoer-tdi-pro-central-ducted-cfg-40",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-41",
      slug: "ecoer-tdi-pro-central-ducted-cfg-41",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-42",
      slug: "ecoer-tdi-pro-central-ducted-cfg-42",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-43",
      slug: "ecoer-tdi-pro-central-ducted-cfg-43",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-44",
      slug: "ecoer-tdi-pro-central-ducted-cfg-44",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-45",
      slug: "ecoer-tdi-pro-central-ducted-cfg-45",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-46",
      slug: "ecoer-tdi-pro-central-ducted-cfg-46",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-47",
      slug: "ecoer-tdi-pro-central-ducted-cfg-47",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-48",
      slug: "ecoer-tdi-pro-central-ducted-cfg-48",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-49",
      slug: "ecoer-tdi-pro-central-ducted-cfg-49",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-50",
      slug: "ecoer-tdi-pro-central-ducted-cfg-50",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-51",
      slug: "ecoer-tdi-pro-central-ducted-cfg-51",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 18.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-52",
      slug: "ecoer-tdi-pro-central-ducted-cfg-52",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-53",
      slug: "ecoer-tdi-pro-central-ducted-cfg-53",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-54",
      slug: "ecoer-tdi-pro-central-ducted-cfg-54",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-55",
      slug: "ecoer-tdi-pro-central-ducted-cfg-55",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-56",
      slug: "ecoer-tdi-pro-central-ducted-cfg-56",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-57",
      slug: "ecoer-tdi-pro-central-ducted-cfg-57",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-58",
      slug: "ecoer-tdi-pro-central-ducted-cfg-58",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-59",
      slug: "ecoer-tdi-pro-central-ducted-cfg-59",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-60",
      slug: "ecoer-tdi-pro-central-ducted-cfg-60",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-61",
      slug: "ecoer-tdi-pro-central-ducted-cfg-61",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-62",
      slug: "ecoer-tdi-pro-central-ducted-cfg-62",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-63",
      slug: "ecoer-tdi-pro-central-ducted-cfg-63",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50000,
      coolingCapacityMaxBtu: 50000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-64",
      slug: "ecoer-tdi-pro-central-ducted-cfg-64",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50000,
      coolingCapacityMaxBtu: 50000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-65",
      slug: "ecoer-tdi-pro-central-ducted-cfg-65",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-66",
      slug: "ecoer-tdi-pro-central-ducted-cfg-66",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-67",
      slug: "ecoer-tdi-pro-central-ducted-cfg-67",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-68",
      slug: "ecoer-tdi-pro-central-ducted-cfg-68",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-central-ducted-cfg-69",
      slug: "ecoer-tdi-pro-central-ducted-cfg-69",
      modelId: "ecoer-tdi-pro-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti-central-ducted-cfg-1",
      slug: "ecoer-rti-central-ducted-cfg-1",
      modelId: "ecoer-rti-central-ducted",
      outdoorUnitId: "ecoer-erda19h-60aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-cfg-1",
      slug: "ecoer-tdi-pro-2-central-ducted-cfg-1",
      modelId: "ecoer-tdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-cfg-2",
      slug: "ecoer-tdi-pro-2-central-ducted-cfg-2",
      modelId: "ecoer-tdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436ab",
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
      id: "ecoer-tdi-pro-2-central-ducted-cfg-3",
      slug: "ecoer-tdi-pro-2-central-ducted-cfg-3",
      modelId: "ecoer-tdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-cfg-4",
      slug: "ecoer-tdi-pro-2-central-ducted-cfg-4",
      modelId: "ecoer-tdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-cfg-5",
      slug: "ecoer-tdi-pro-2-central-ducted-cfg-5",
      modelId: "ecoer-tdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-cfg-6",
      slug: "ecoer-tdi-pro-2-central-ducted-cfg-6",
      modelId: "ecoer-tdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31000,
      coolingCapacityMaxBtu: 31000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-cfg-7",
      slug: "ecoer-tdi-pro-2-central-ducted-cfg-7",
      modelId: "ecoer-tdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-2436ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-cfg-8",
      slug: "ecoer-tdi-pro-2-central-ducted-cfg-8",
      modelId: "ecoer-tdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-tdi-pro-2-central-ducted-cfg-9",
      slug: "ecoer-tdi-pro-2-central-ducted-cfg-9",
      modelId: "ecoer-tdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-eoda19h-4860ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-cfg-1",
      slug: "ecoer-sdi-extreme-2-central-ducted-cfg-1",
      modelId: "ecoer-sdi-extreme-2-central-ducted",
      outdoorUnitId: "ecoer-esca17h-24aba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-cfg-2",
      slug: "ecoer-sdi-extreme-2-central-ducted-cfg-2",
      modelId: "ecoer-sdi-extreme-2-central-ducted",
      outdoorUnitId: "ecoer-esca17h-48aba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-cfg-3",
      slug: "ecoer-sdi-extreme-2-central-ducted-cfg-3",
      modelId: "ecoer-sdi-extreme-2-central-ducted",
      outdoorUnitId: "ecoer-esca17h-36aba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-cfg-4",
      slug: "ecoer-sdi-extreme-2-central-ducted-cfg-4",
      modelId: "ecoer-sdi-extreme-2-central-ducted",
      outdoorUnitId: "ecoer-esca17h-60aba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-cfg-5",
      slug: "ecoer-sdi-extreme-2-central-ducted-cfg-5",
      modelId: "ecoer-sdi-extreme-2-central-ducted",
      outdoorUnitId: "ecoer-esca17h-36aba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-cfg-6",
      slug: "ecoer-sdi-extreme-2-central-ducted-cfg-6",
      modelId: "ecoer-sdi-extreme-2-central-ducted",
      outdoorUnitId: "ecoer-esca17h-60aba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-cfg-7",
      slug: "ecoer-sdi-extreme-2-central-ducted-cfg-7",
      modelId: "ecoer-sdi-extreme-2-central-ducted",
      outdoorUnitId: "ecoer-esca17h-36aba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-extreme-2-central-ducted-cfg-8",
      slug: "ecoer-sdi-extreme-2-central-ducted-cfg-8",
      modelId: "ecoer-sdi-extreme-2-central-ducted",
      outdoorUnitId: "ecoer-esca17h-60aba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted-cfg-1",
      slug: "ecoer-sdi-pro-2-central-ducted-cfg-1",
      modelId: "ecoer-sdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-esca16h-24bba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.1,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted-cfg-2",
      slug: "ecoer-sdi-pro-2-central-ducted-cfg-2",
      modelId: "ecoer-sdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-esca16h-48bba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted-cfg-3",
      slug: "ecoer-sdi-pro-2-central-ducted-cfg-3",
      modelId: "ecoer-sdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-esca16h-36bba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted-cfg-4",
      slug: "ecoer-sdi-pro-2-central-ducted-cfg-4",
      modelId: "ecoer-sdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-esca16h-36bba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted-cfg-5",
      slug: "ecoer-sdi-pro-2-central-ducted-cfg-5",
      modelId: "ecoer-sdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-esca16h-60bba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted-cfg-6",
      slug: "ecoer-sdi-pro-2-central-ducted-cfg-6",
      modelId: "ecoer-sdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-esca16h-36bba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-sdi-pro-2-central-ducted-cfg-7",
      slug: "ecoer-sdi-pro-2-central-ducted-cfg-7",
      modelId: "ecoer-sdi-pro-2-central-ducted",
      outdoorUnitId: "ecoer-esca16h-60bba",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ecoer-rti-2-central-ducted-cfg-1",
      slug: "ecoer-rti-2-central-ducted-cfg-1",
      modelId: "ecoer-rti-2-central-ducted",
      outdoorUnitId: "ecoer-erda19h-60ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ecoer-standard-wall-single-cfg-1",
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
      configurationId: "ecoer-standard-wall-single-cfg-2",
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
      configurationId: "ecoer-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-5",
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
      configurationId: "ecoer-standard-wall-single-cfg-6",
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
      configurationId: "ecoer-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-9",
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
      configurationId: "ecoer-standard-wall-single-cfg-10",
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
      configurationId: "ecoer-standard-wall-single-cfg-11",
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
      configurationId: "ecoer-standard-wall-single-cfg-12",
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
      configurationId: "ecoer-standard-wall-single-cfg-13",
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
      configurationId: "ecoer-standard-wall-single-cfg-14",
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
      configurationId: "ecoer-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-18",
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
      configurationId: "ecoer-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-20",
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
      configurationId: "ecoer-standard-wall-single-cfg-21",
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
      configurationId: "ecoer-standard-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-27",
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
      configurationId: "ecoer-standard-wall-single-cfg-28",
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
      configurationId: "ecoer-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-34",
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
      configurationId: "ecoer-standard-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-37",
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
      configurationId: "ecoer-standard-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-42",
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
      configurationId: "ecoer-standard-wall-single-cfg-43",
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
      configurationId: "ecoer-standard-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-45",
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
      configurationId: "ecoer-standard-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-1",
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
      configurationId: "ecoer-standard-central-ducted-cfg-2",
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
      configurationId: "ecoer-standard-central-ducted-cfg-3",
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
      configurationId: "ecoer-standard-central-ducted-cfg-4",
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
      configurationId: "ecoer-standard-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-7",
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
      configurationId: "ecoer-standard-central-ducted-cfg-8",
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
      configurationId: "ecoer-standard-central-ducted-cfg-9",
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
      configurationId: "ecoer-standard-central-ducted-cfg-10",
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
      configurationId: "ecoer-standard-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-19",
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
      configurationId: "ecoer-standard-central-ducted-cfg-20",
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
      configurationId: "ecoer-standard-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-26",
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
      configurationId: "ecoer-standard-central-ducted-cfg-27",
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
      configurationId: "ecoer-standard-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-33",
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
      configurationId: "ecoer-standard-central-ducted-cfg-34",
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
      configurationId: "ecoer-standard-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-38",
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
      configurationId: "ecoer-standard-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-48",
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
      configurationId: "ecoer-standard-central-ducted-cfg-49",
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
      configurationId: "ecoer-standard-central-ducted-cfg-50",
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
      configurationId: "ecoer-standard-central-ducted-cfg-51",
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
      configurationId: "ecoer-standard-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-standard-central-ducted-cfg-54",
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
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-cfg-2",
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
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-decades-extreme-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-esi-decades-extreme-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-12",
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
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-14",
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
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-28",
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
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-29",
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
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-41",
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
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-rti-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-cfg-3",
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
      configurationId: "ecoer-tdi-pro-2-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-tdi-pro-2-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-extreme-2-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-extreme-2-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-extreme-2-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-extreme-2-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-extreme-2-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-extreme-2-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-extreme-2-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-extreme-2-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-pro-2-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-pro-2-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-pro-2-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-pro-2-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-pro-2-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-pro-2-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-sdi-pro-2-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ecoer-rti-2-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
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
