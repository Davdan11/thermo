import type { BrandDataset } from "../../types";

export const stelproDataset: BrandDataset = {
  brand: {
    id: "stelpro",
    slug: "stelpro",
    name: "STELPRO",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "stelpro-sahb-series",
      slug: "stelpro-sahb-series",
      name: "SAHB Series",
      brandId: "stelpro",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sinb-series",
      slug: "stelpro-sinb-series",
      name: "SINB Series",
      brandId: "stelpro",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-standard",
      slug: "stelpro-standard",
      name: "Standard",
      brandId: "stelpro",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sepb-series",
      slug: "stelpro-sepb-series",
      name: "SEPB Series",
      brandId: "stelpro",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sicb1-series",
      slug: "stelpro-sicb1-series",
      name: "SICB1 Series",
      brandId: "stelpro",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sfcb1-series",
      slug: "stelpro-sfcb1-series",
      name: "SFCB1 Series",
      brandId: "stelpro",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-elite-b",
      slug: "stelpro-elite-b",
      name: "Elite B",
      brandId: "stelpro",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series",
      slug: "stelpro-smz-series",
      name: "SMZ Series",
      brandId: "stelpro",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-cahb-series",
      slug: "stelpro-cahb-series",
      name: "CAHB Series",
      brandId: "stelpro",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sdb-series",
      slug: "stelpro-sdb-series",
      name: "SDB Series",
      brandId: "stelpro",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "stelpro-sahb-series-central-ducted",
      slug: "stelpro-sahb-series-central-ducted",
      name: "SAHB Series",
      seriesId: "stelpro-sahb-series",
      brandId: "stelpro",
      modelNumber: "SAHB Series",
      normalizedModelNumber: "sahb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16,
      seer2Max: 18.3,
      hspf2Min: 9,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 1.96,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sinb-series-wall-single",
      slug: "stelpro-sinb-series-wall-single",
      name: "SINB Series",
      seriesId: "stelpro-sinb-series",
      brandId: "stelpro",
      modelNumber: "SINB Series",
      normalizedModelNumber: "sinb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 17200,
      seer2Min: 18.5,
      seer2Max: 21.6,
      hspf2Min: 9,
      hspf2Max: 9.4,
      cop5FMin: 2,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-standard-wall-single",
      slug: "stelpro-standard-wall-single",
      name: "Standard",
      seriesId: "stelpro-standard",
      brandId: "stelpro",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8300,
      heatingCapacity5FMaxBtu: 8300,
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
      id: "stelpro-sepb-series-wall-single",
      slug: "stelpro-sepb-series-wall-single",
      name: "SEPB Series",
      seriesId: "stelpro-sepb-series",
      brandId: "stelpro",
      modelNumber: "SEPB Series",
      normalizedModelNumber: "sepb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 9800,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 21,
      seer2Max: 27.4,
      hspf2Min: 10.5,
      hspf2Max: 13.5,
      cop5FMin: 1.8,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sicb1-series-wall-single",
      slug: "stelpro-sicb1-series-wall-single",
      name: "SICB1 Series",
      seriesId: "stelpro-sicb1-series",
      brandId: "stelpro",
      modelNumber: "SICB1 Series",
      normalizedModelNumber: "sicb1-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23400,
      heatingCapacity5FMinBtu: 9700,
      heatingCapacity5FMaxBtu: 20400,
      seer2Min: 20,
      seer2Max: 22.6,
      hspf2Min: 11.6,
      hspf2Max: 12.3,
      cop5FMin: 1.84,
      cop5FMax: 2.23,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sfcb1-series-wall-single",
      slug: "stelpro-sfcb1-series-wall-single",
      name: "SFCB1 Series",
      seriesId: "stelpro-sfcb1-series",
      brandId: "stelpro",
      modelNumber: "SFCB1 Series",
      normalizedModelNumber: "sfcb1-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 10200,
      heatingCapacity5FMaxBtu: 21600,
      seer2Min: 18.4,
      seer2Max: 20.5,
      hspf2Min: 10.6,
      hspf2Max: 13.8,
      cop5FMin: 1.85,
      cop5FMax: 2.18,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-elite-b-wall-single",
      slug: "stelpro-elite-b-wall-single",
      name: "Elite B",
      seriesId: "stelpro-elite-b",
      brandId: "stelpro",
      modelNumber: "Elite B",
      normalizedModelNumber: "elite-b",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 9000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 21,
      seer2Max: 25,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single",
      slug: "stelpro-smz-series-wall-single",
      name: "SMZ Series",
      seriesId: "stelpro-smz-series",
      brandId: "stelpro",
      modelNumber: "SMZ Series",
      normalizedModelNumber: "smz-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 17000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19,
      seer2Max: 25,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-cahb-series-central-ducted",
      slug: "stelpro-cahb-series-central-ducted",
      name: "CAHB Series",
      seriesId: "stelpro-cahb-series",
      brandId: "stelpro",
      modelNumber: "CAHB Series",
      normalizedModelNumber: "cahb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 19700,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 16,
      seer2Max: 18.3,
      hspf2Min: 9,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 1.96,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sdb-series-central-ducted",
      slug: "stelpro-sdb-series-central-ducted",
      name: "SDB Series",
      seriesId: "stelpro-sdb-series",
      brandId: "stelpro",
      modelNumber: "SDB Series",
      normalizedModelNumber: "sdb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 19700,
      heatingCapacity5FMaxBtu: 37800,
      seer2Min: 15.2,
      seer2Max: 16,
      hspf2Min: 8.1,
      hspf2Max: 9.6,
      cop5FMin: 1.8,
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
      id: "stelpro-sdb1-h24a-o",
      modelNumber: "SDB1-H24A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sdb1-h30a-o",
      modelNumber: "SDB1-H30A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sdb1-h36a-o",
      modelNumber: "SDB1-H36A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sdb1-h48a-o",
      modelNumber: "SDB1-H48A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sdb1-h60a-o",
      modelNumber: "SDB1-H60A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sinb-h09a-o",
      modelNumber: "SINB-H09A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sinb-h18a-o",
      modelNumber: "SINB-H18A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sinb-h24a-o",
      modelNumber: "SINB-H24A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sinb-h12a-o",
      modelNumber: "SINB-H12A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sepb-h09a-o",
      modelNumber: "SEPB-H09A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sepb-h12a-o",
      modelNumber: "SEPB-H12A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sepb-h18a-o",
      modelNumber: "SEPB-H18A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-sepb-h24a-o",
      modelNumber: "SEPB-H24A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-selb-h09a-o",
      modelNumber: "SELB-H09A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-selb-h12a-o",
      modelNumber: "SELB-H12A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-selb-h18a-o",
      modelNumber: "SELB-H18A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-selb-h24a-o",
      modelNumber: "SELB-H24A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz2b1-h18a-o",
      modelNumber: "SMZ2B1-H18A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz3b1-h27a-o",
      modelNumber: "SMZ3B1-H27A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz4b1-h36a-o",
      modelNumber: "SMZ4B1-H36A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz5b1-h48a-o",
      modelNumber: "SMZ5B1-H48A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz5b1-h55a-o",
      modelNumber: "SMZ5B1-H55A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz2b1v-h18a-o",
      modelNumber: "SMZ2B1V-H18A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz3b1v-h27a-o",
      modelNumber: "SMZ3B1V-H27A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz4b1v-h36a-o",
      modelNumber: "SMZ4B1V-H36A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz5b1v-h48a-o",
      modelNumber: "SMZ5B1V-H48A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-smz5b1v-h55a-o",
      modelNumber: "SMZ5B1V-H55A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-ccb1-h24a-o",
      modelNumber: "CCB1-H24A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-ccb1-h30a-o",
      modelNumber: "CCB1-H30A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-ccb1-h36a-o",
      modelNumber: "CCB1-H36A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-ccb1-h60a-o",
      modelNumber: "CCB1-H60A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    },
    {
      id: "stelpro-ccb1-h48a-o",
      modelNumber: "CCB1-H48A-O",
      brandId: "stelpro",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "stelpro-sahb-series-central-ducted-cfg-1",
      slug: "stelpro-sahb-series-central-ducted-cfg-1",
      modelId: "stelpro-sahb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h24a-o",
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
      id: "stelpro-sahb-series-central-ducted-cfg-2",
      slug: "stelpro-sahb-series-central-ducted-cfg-2",
      modelId: "stelpro-sahb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sahb-series-central-ducted-cfg-3",
      slug: "stelpro-sahb-series-central-ducted-cfg-3",
      modelId: "stelpro-sahb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h36a-o",
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
      id: "stelpro-sahb-series-central-ducted-cfg-4",
      slug: "stelpro-sahb-series-central-ducted-cfg-4",
      modelId: "stelpro-sahb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h48a-o",
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
      id: "stelpro-sahb-series-central-ducted-cfg-5",
      slug: "stelpro-sahb-series-central-ducted-cfg-5",
      modelId: "stelpro-sahb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h60a-o",
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
      id: "stelpro-sahb-series-central-ducted-cfg-6",
      slug: "stelpro-sahb-series-central-ducted-cfg-6",
      modelId: "stelpro-sahb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h48a-o",
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
      id: "stelpro-sinb-series-wall-single-cfg-1",
      slug: "stelpro-sinb-series-wall-single-cfg-1",
      modelId: "stelpro-sinb-series-wall-single",
      outdoorUnitId: "stelpro-sinb-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sinb-series-wall-single-cfg-2",
      slug: "stelpro-sinb-series-wall-single-cfg-2",
      modelId: "stelpro-sinb-series-wall-single",
      outdoorUnitId: "stelpro-sinb-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.2,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sinb-series-wall-single-cfg-3",
      slug: "stelpro-sinb-series-wall-single-cfg-3",
      modelId: "stelpro-sinb-series-wall-single",
      outdoorUnitId: "stelpro-sinb-h24a-o",
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
      id: "stelpro-standard-wall-single-cfg-1",
      slug: "stelpro-standard-wall-single-cfg-1",
      modelId: "stelpro-standard-wall-single",
      outdoorUnitId: "stelpro-sinb-h12a-o",
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
      id: "stelpro-sepb-series-wall-single-cfg-1",
      slug: "stelpro-sepb-series-wall-single-cfg-1",
      modelId: "stelpro-sepb-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sepb-series-wall-single-cfg-2",
      slug: "stelpro-sepb-series-wall-single-cfg-2",
      modelId: "stelpro-sepb-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sepb-series-wall-single-cfg-3",
      slug: "stelpro-sepb-series-wall-single-cfg-3",
      modelId: "stelpro-sepb-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sepb-series-wall-single-cfg-4",
      slug: "stelpro-sepb-series-wall-single-cfg-4",
      modelId: "stelpro-sepb-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sicb1-series-wall-single-cfg-1",
      slug: "stelpro-sicb1-series-wall-single-cfg-1",
      modelId: "stelpro-sicb1-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sicb1-series-wall-single-cfg-2",
      slug: "stelpro-sicb1-series-wall-single-cfg-2",
      modelId: "stelpro-sicb1-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sicb1-series-wall-single-cfg-3",
      slug: "stelpro-sicb1-series-wall-single-cfg-3",
      modelId: "stelpro-sicb1-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sicb1-series-wall-single-cfg-4",
      slug: "stelpro-sicb1-series-wall-single-cfg-4",
      modelId: "stelpro-sicb1-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sfcb1-series-wall-single-cfg-1",
      slug: "stelpro-sfcb1-series-wall-single-cfg-1",
      modelId: "stelpro-sfcb1-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sfcb1-series-wall-single-cfg-2",
      slug: "stelpro-sfcb1-series-wall-single-cfg-2",
      modelId: "stelpro-sfcb1-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sfcb1-series-wall-single-cfg-3",
      slug: "stelpro-sfcb1-series-wall-single-cfg-3",
      modelId: "stelpro-sfcb1-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18.4,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sfcb1-series-wall-single-cfg-4",
      slug: "stelpro-sfcb1-series-wall-single-cfg-4",
      modelId: "stelpro-sfcb1-series-wall-single",
      outdoorUnitId: "stelpro-sepb-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-elite-b-wall-single-cfg-1",
      slug: "stelpro-elite-b-wall-single-cfg-1",
      modelId: "stelpro-elite-b-wall-single",
      outdoorUnitId: "stelpro-selb-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-elite-b-wall-single-cfg-2",
      slug: "stelpro-elite-b-wall-single-cfg-2",
      modelId: "stelpro-elite-b-wall-single",
      outdoorUnitId: "stelpro-selb-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-elite-b-wall-single-cfg-3",
      slug: "stelpro-elite-b-wall-single-cfg-3",
      modelId: "stelpro-elite-b-wall-single",
      outdoorUnitId: "stelpro-selb-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-elite-b-wall-single-cfg-4",
      slug: "stelpro-elite-b-wall-single-cfg-4",
      modelId: "stelpro-elite-b-wall-single",
      outdoorUnitId: "stelpro-selb-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-1",
      slug: "stelpro-smz-series-wall-single-cfg-1",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz2b1-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 25,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-2",
      slug: "stelpro-smz-series-wall-single-cfg-2",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz2b1-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-3",
      slug: "stelpro-smz-series-wall-single-cfg-3",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz2b1-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-4",
      slug: "stelpro-smz-series-wall-single-cfg-4",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz3b1-h27a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-5",
      slug: "stelpro-smz-series-wall-single-cfg-5",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz3b1-h27a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-6",
      slug: "stelpro-smz-series-wall-single-cfg-6",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz3b1-h27a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-7",
      slug: "stelpro-smz-series-wall-single-cfg-7",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz4b1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-8",
      slug: "stelpro-smz-series-wall-single-cfg-8",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz4b1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-9",
      slug: "stelpro-smz-series-wall-single-cfg-9",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz4b1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.2,
      hspf2: 10.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-10",
      slug: "stelpro-smz-series-wall-single-cfg-10",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1-h48a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-11",
      slug: "stelpro-smz-series-wall-single-cfg-11",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1-h48a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-12",
      slug: "stelpro-smz-series-wall-single-cfg-12",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1-h48a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 21.7,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-13",
      slug: "stelpro-smz-series-wall-single-cfg-13",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1-h55a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 22.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-14",
      slug: "stelpro-smz-series-wall-single-cfg-14",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1-h55a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 20,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-15",
      slug: "stelpro-smz-series-wall-single-cfg-15",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1-h55a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 21.1,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-16",
      slug: "stelpro-smz-series-wall-single-cfg-16",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz2b1v-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 25,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-17",
      slug: "stelpro-smz-series-wall-single-cfg-17",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz2b1v-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-18",
      slug: "stelpro-smz-series-wall-single-cfg-18",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz2b1v-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-19",
      slug: "stelpro-smz-series-wall-single-cfg-19",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz3b1v-h27a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-20",
      slug: "stelpro-smz-series-wall-single-cfg-20",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz3b1v-h27a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-21",
      slug: "stelpro-smz-series-wall-single-cfg-21",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz3b1v-h27a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-22",
      slug: "stelpro-smz-series-wall-single-cfg-22",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz4b1v-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-23",
      slug: "stelpro-smz-series-wall-single-cfg-23",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz4b1v-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-24",
      slug: "stelpro-smz-series-wall-single-cfg-24",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz4b1v-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.2,
      hspf2: 10.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-25",
      slug: "stelpro-smz-series-wall-single-cfg-25",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1v-h48a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-26",
      slug: "stelpro-smz-series-wall-single-cfg-26",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1v-h48a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-27",
      slug: "stelpro-smz-series-wall-single-cfg-27",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1v-h48a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 21.7,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-28",
      slug: "stelpro-smz-series-wall-single-cfg-28",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1v-h55a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 22.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-29",
      slug: "stelpro-smz-series-wall-single-cfg-29",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1v-h55a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 20,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-smz-series-wall-single-cfg-30",
      slug: "stelpro-smz-series-wall-single-cfg-30",
      modelId: "stelpro-smz-series-wall-single",
      outdoorUnitId: "stelpro-smz5b1v-h55a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 21.1,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-cahb-series-central-ducted-cfg-1",
      slug: "stelpro-cahb-series-central-ducted-cfg-1",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h24a-o",
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
      id: "stelpro-cahb-series-central-ducted-cfg-2",
      slug: "stelpro-cahb-series-central-ducted-cfg-2",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h24a-o",
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
      id: "stelpro-cahb-series-central-ducted-cfg-3",
      slug: "stelpro-cahb-series-central-ducted-cfg-3",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-cahb-series-central-ducted-cfg-4",
      slug: "stelpro-cahb-series-central-ducted-cfg-4",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-cahb-series-central-ducted-cfg-5",
      slug: "stelpro-cahb-series-central-ducted-cfg-5",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-cahb-series-central-ducted-cfg-6",
      slug: "stelpro-cahb-series-central-ducted-cfg-6",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h36a-o",
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
      id: "stelpro-cahb-series-central-ducted-cfg-7",
      slug: "stelpro-cahb-series-central-ducted-cfg-7",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h36a-o",
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
      id: "stelpro-cahb-series-central-ducted-cfg-8",
      slug: "stelpro-cahb-series-central-ducted-cfg-8",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h60a-o",
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
      id: "stelpro-cahb-series-central-ducted-cfg-9",
      slug: "stelpro-cahb-series-central-ducted-cfg-9",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h60a-o",
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
      id: "stelpro-cahb-series-central-ducted-cfg-10",
      slug: "stelpro-cahb-series-central-ducted-cfg-10",
      modelId: "stelpro-cahb-series-central-ducted",
      outdoorUnitId: "stelpro-ccb1-h48a-o",
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
      id: "stelpro-sdb-series-central-ducted-cfg-1",
      slug: "stelpro-sdb-series-central-ducted-cfg-1",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sdb-series-central-ducted-cfg-2",
      slug: "stelpro-sdb-series-central-ducted-cfg-2",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sdb-series-central-ducted-cfg-3",
      slug: "stelpro-sdb-series-central-ducted-cfg-3",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.3,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sdb-series-central-ducted-cfg-4",
      slug: "stelpro-sdb-series-central-ducted-cfg-4",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sdb-series-central-ducted-cfg-5",
      slug: "stelpro-sdb-series-central-ducted-cfg-5",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sdb-series-central-ducted-cfg-6",
      slug: "stelpro-sdb-series-central-ducted-cfg-6",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h36a-o",
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
      id: "stelpro-sdb-series-central-ducted-cfg-7",
      slug: "stelpro-sdb-series-central-ducted-cfg-7",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h36a-o",
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
      id: "stelpro-sdb-series-central-ducted-cfg-8",
      slug: "stelpro-sdb-series-central-ducted-cfg-8",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h48a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "stelpro-sdb-series-central-ducted-cfg-9",
      slug: "stelpro-sdb-series-central-ducted-cfg-9",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h60a-o",
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
      id: "stelpro-sdb-series-central-ducted-cfg-10",
      slug: "stelpro-sdb-series-central-ducted-cfg-10",
      modelId: "stelpro-sdb-series-central-ducted",
      outdoorUnitId: "stelpro-sdb1-h60a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "stelpro-sahb-series-central-ducted-cfg-1",
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
      configurationId: "stelpro-sahb-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sahb-series-central-ducted-cfg-3",
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
      configurationId: "stelpro-sahb-series-central-ducted-cfg-4",
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
      configurationId: "stelpro-sahb-series-central-ducted-cfg-5",
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
      configurationId: "stelpro-sahb-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sinb-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sinb-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sinb-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sepb-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sepb-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sepb-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sepb-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sicb1-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sicb1-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sicb1-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sicb1-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sfcb1-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sfcb1-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sfcb1-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sfcb1-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-elite-b-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-elite-b-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-elite-b-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-elite-b-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-7",
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
      configurationId: "stelpro-smz-series-wall-single-cfg-8",
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
      configurationId: "stelpro-smz-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-22",
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
      configurationId: "stelpro-smz-series-wall-single-cfg-23",
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
      configurationId: "stelpro-smz-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-smz-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-cahb-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-cahb-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-cahb-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-cahb-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-cahb-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-cahb-series-central-ducted-cfg-6",
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
      configurationId: "stelpro-cahb-series-central-ducted-cfg-7",
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
      configurationId: "stelpro-cahb-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-cahb-series-central-ducted-cfg-9",
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
      configurationId: "stelpro-cahb-series-central-ducted-cfg-10",
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
      configurationId: "stelpro-sdb-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sdb-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sdb-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sdb-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sdb-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sdb-series-central-ducted-cfg-6",
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
      configurationId: "stelpro-sdb-series-central-ducted-cfg-7",
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
      configurationId: "stelpro-sdb-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "stelpro-sdb-series-central-ducted-cfg-9",
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
      configurationId: "stelpro-sdb-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.83,
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
