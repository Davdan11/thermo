import type { BrandDataset } from "../../types";

export const ouelletDataset: BrandDataset = {
  brand: {
    id: "ouellet",
    slug: "ouellet",
    name: "OUELLET",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ouellet-flexx",
      slug: "ouellet-flexx",
      name: "Flexx",
      brandId: "ouellet",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad",
      slug: "ouellet-myriad",
      name: "Myriad",
      brandId: "ouellet",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia",
      slug: "ouellet-olympia",
      name: "Olympia",
      brandId: "ouellet",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific",
      slug: "ouellet-pacific",
      name: "Pacific",
      brandId: "ouellet",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-harmony",
      slug: "ouellet-harmony",
      name: "Harmony",
      brandId: "ouellet",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ouellet-flexx-central-ducted",
      slug: "ouellet-flexx-central-ducted",
      name: "Flexx",
      seriesId: "ouellet-flexx",
      brandId: "ouellet",
      modelNumber: "Flexx",
      normalizedModelNumber: "flexx",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single",
      slug: "ouellet-myriad-wall-single",
      name: "Myriad",
      seriesId: "ouellet-myriad",
      brandId: "ouellet",
      modelNumber: "Myriad",
      normalizedModelNumber: "myriad",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 18,
      seer2Max: 21,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single",
      slug: "ouellet-olympia-wall-single",
      name: "Olympia",
      seriesId: "ouellet-olympia",
      brandId: "ouellet",
      modelNumber: "Olympia",
      normalizedModelNumber: "olympia",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 8900,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 22.3,
      seer2Max: 30,
      hspf2Min: 9.5,
      hspf2Max: 11.2,
      cop5FMin: 1.8,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single",
      slug: "ouellet-pacific-wall-single",
      name: "Pacific",
      seriesId: "ouellet-pacific",
      brandId: "ouellet",
      modelNumber: "Pacific",
      normalizedModelNumber: "pacific",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 8800,
      heatingCapacity5FMaxBtu: 19800,
      seer2Min: 21,
      seer2Max: 26,
      hspf2Min: 9,
      hspf2Max: 10.4,
      cop5FMin: 1.8,
      cop5FMax: 2.15,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-harmony-wall-single",
      slug: "ouellet-harmony-wall-single",
      name: "Harmony",
      seriesId: "ouellet-harmony",
      brandId: "ouellet",
      modelNumber: "Harmony",
      normalizedModelNumber: "harmony",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 33600,
      heatingCapacity5FMinBtu: 8100,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 19,
      seer2Max: 22,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.94,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ouellet-oflx1-h24a-o",
      modelNumber: "OFLX1-H24A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-oflx1-h36a-o",
      modelNumber: "OFLX1-H36A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-oflx1-h48a-o",
      modelNumber: "OFLX1-H48A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-oflx1-h60a-o",
      modelNumber: "OFLX1-H60A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ofrm2x1-h18a-o",
      modelNumber: "OFRM2X1-H18A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ofrm3x1-h24a-o",
      modelNumber: "OFRM3X1-H24A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ofrm4x1-h30a-o",
      modelNumber: "OFRM4X1-H30A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ofrm4x1-h36a-o",
      modelNumber: "OFRM4X1-H36A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ofrm5x1-h42a-o",
      modelNumber: "OFRM5X1-H42A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-oarx-h09a-o",
      modelNumber: "OARX-H09A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-oarx-h12a-o",
      modelNumber: "OARX-H12A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-oarx-h24a-o",
      modelNumber: "OARX-H24A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-oarx-h18a-o",
      modelNumber: "OARX-H18A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ocvx-h09a-o",
      modelNumber: "OCVX-H09A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ocvx-h12a-o",
      modelNumber: "OCVX-H12A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ocvx-h18a-o",
      modelNumber: "OCVX-H18A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ocvx-h24a-o",
      modelNumber: "OCVX-H24A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ochx-h09a-o",
      modelNumber: "OCHX-H09A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ochx-h12a-o",
      modelNumber: "OCHX-H12A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ochx-h18a-o",
      modelNumber: "OCHX-H18A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ochx-h24a-o",
      modelNumber: "OCHX-H24A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ochx-h30a-o",
      modelNumber: "OCHX-H30A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    },
    {
      id: "ouellet-ochx-h36a-o",
      modelNumber: "OCHX-H36A-O",
      brandId: "ouellet",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ouellet-flexx-central-ducted-cfg-1",
      slug: "ouellet-flexx-central-ducted-cfg-1",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-2",
      slug: "ouellet-flexx-central-ducted-cfg-2",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-3",
      slug: "ouellet-flexx-central-ducted-cfg-3",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h48a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-4",
      slug: "ouellet-flexx-central-ducted-cfg-4",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h60a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 18.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-5",
      slug: "ouellet-flexx-central-ducted-cfg-5",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-6",
      slug: "ouellet-flexx-central-ducted-cfg-6",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h60a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-7",
      slug: "ouellet-flexx-central-ducted-cfg-7",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-8",
      slug: "ouellet-flexx-central-ducted-cfg-8",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-9",
      slug: "ouellet-flexx-central-ducted-cfg-9",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h60a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-10",
      slug: "ouellet-flexx-central-ducted-cfg-10",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h60a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-11",
      slug: "ouellet-flexx-central-ducted-cfg-11",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-12",
      slug: "ouellet-flexx-central-ducted-cfg-12",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-13",
      slug: "ouellet-flexx-central-ducted-cfg-13",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h60a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-flexx-central-ducted-cfg-14",
      slug: "ouellet-flexx-central-ducted-cfg-14",
      modelId: "ouellet-flexx-central-ducted",
      outdoorUnitId: "ouellet-oflx1-h60a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 18.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-1",
      slug: "ouellet-myriad-wall-single-cfg-1",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm2x1-h18a-o",
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
      id: "ouellet-myriad-wall-single-cfg-2",
      slug: "ouellet-myriad-wall-single-cfg-2",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm3x1-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-3",
      slug: "ouellet-myriad-wall-single-cfg-3",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm4x1-h30a-o",
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
      id: "ouellet-myriad-wall-single-cfg-4",
      slug: "ouellet-myriad-wall-single-cfg-4",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm4x1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-5",
      slug: "ouellet-myriad-wall-single-cfg-5",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm5x1-h42a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-6",
      slug: "ouellet-myriad-wall-single-cfg-6",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm2x1-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-7",
      slug: "ouellet-myriad-wall-single-cfg-7",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm3x1-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-8",
      slug: "ouellet-myriad-wall-single-cfg-8",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm4x1-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-9",
      slug: "ouellet-myriad-wall-single-cfg-9",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm4x1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-10",
      slug: "ouellet-myriad-wall-single-cfg-10",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm5x1-h42a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-11",
      slug: "ouellet-myriad-wall-single-cfg-11",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm2x1-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-12",
      slug: "ouellet-myriad-wall-single-cfg-12",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm3x1-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-13",
      slug: "ouellet-myriad-wall-single-cfg-13",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm4x1-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-14",
      slug: "ouellet-myriad-wall-single-cfg-14",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm4x1-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-myriad-wall-single-cfg-15",
      slug: "ouellet-myriad-wall-single-cfg-15",
      modelId: "ouellet-myriad-wall-single",
      outdoorUnitId: "ouellet-ofrm5x1-h42a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-1",
      slug: "ouellet-olympia-wall-single-cfg-1",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 30,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-2",
      slug: "ouellet-olympia-wall-single-cfg-2",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-3",
      slug: "ouellet-olympia-wall-single-cfg-3",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 27,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-4",
      slug: "ouellet-olympia-wall-single-cfg-4",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 27.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-5",
      slug: "ouellet-olympia-wall-single-cfg-5",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 22.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-6",
      slug: "ouellet-olympia-wall-single-cfg-6",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 24.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-7",
      slug: "ouellet-olympia-wall-single-cfg-7",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-8",
      slug: "ouellet-olympia-wall-single-cfg-8",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-9",
      slug: "ouellet-olympia-wall-single-cfg-9",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 27.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-10",
      slug: "ouellet-olympia-wall-single-cfg-10",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 27.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-11",
      slug: "ouellet-olympia-wall-single-cfg-11",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 27,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-olympia-wall-single-cfg-12",
      slug: "ouellet-olympia-wall-single-cfg-12",
      modelId: "ouellet-olympia-wall-single",
      outdoorUnitId: "ouellet-oarx-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 27,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-1",
      slug: "ouellet-pacific-wall-single-cfg-1",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 26,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-2",
      slug: "ouellet-pacific-wall-single-cfg-2",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-3",
      slug: "ouellet-pacific-wall-single-cfg-3",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-4",
      slug: "ouellet-pacific-wall-single-cfg-4",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 23.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-5",
      slug: "ouellet-pacific-wall-single-cfg-5",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 24,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-6",
      slug: "ouellet-pacific-wall-single-cfg-6",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 22,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-7",
      slug: "ouellet-pacific-wall-single-cfg-7",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-8",
      slug: "ouellet-pacific-wall-single-cfg-8",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-9",
      slug: "ouellet-pacific-wall-single-cfg-9",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 23.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-10",
      slug: "ouellet-pacific-wall-single-cfg-10",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 23.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-11",
      slug: "ouellet-pacific-wall-single-cfg-11",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-pacific-wall-single-cfg-12",
      slug: "ouellet-pacific-wall-single-cfg-12",
      modelId: "ouellet-pacific-wall-single",
      outdoorUnitId: "ouellet-ocvx-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-harmony-wall-single-cfg-1",
      slug: "ouellet-harmony-wall-single-cfg-1",
      modelId: "ouellet-harmony-wall-single",
      outdoorUnitId: "ouellet-ochx-h09a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-harmony-wall-single-cfg-2",
      slug: "ouellet-harmony-wall-single-cfg-2",
      modelId: "ouellet-harmony-wall-single",
      outdoorUnitId: "ouellet-ochx-h12a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-harmony-wall-single-cfg-3",
      slug: "ouellet-harmony-wall-single-cfg-3",
      modelId: "ouellet-harmony-wall-single",
      outdoorUnitId: "ouellet-ochx-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-harmony-wall-single-cfg-4",
      slug: "ouellet-harmony-wall-single-cfg-4",
      modelId: "ouellet-harmony-wall-single",
      outdoorUnitId: "ouellet-ochx-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-harmony-wall-single-cfg-5",
      slug: "ouellet-harmony-wall-single-cfg-5",
      modelId: "ouellet-harmony-wall-single",
      outdoorUnitId: "ouellet-ochx-h30a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ouellet-harmony-wall-single-cfg-6",
      slug: "ouellet-harmony-wall-single-cfg-6",
      modelId: "ouellet-harmony-wall-single",
      outdoorUnitId: "ouellet-ochx-h36a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-4",
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
      configurationId: "ouellet-flexx-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-7",
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
      configurationId: "ouellet-flexx-central-ducted-cfg-8",
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
      configurationId: "ouellet-flexx-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-flexx-central-ducted-cfg-14",
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
      configurationId: "ouellet-myriad-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.07,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-5",
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
      configurationId: "ouellet-myriad-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-myriad-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-olympia-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-pacific-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-harmony-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-harmony-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-harmony-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-harmony-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ouellet-harmony-wall-single-cfg-5",
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
      configurationId: "ouellet-harmony-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
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
