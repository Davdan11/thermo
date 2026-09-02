import type { BrandDataset } from "../../types";

export const friedrichDataset: BrandDataset = {
  brand: {
    id: "friedrich",
    slug: "friedrich",
    name: "FRIEDRICH",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "friedrich-standard",
      slug: "friedrich-standard",
      name: "Standard",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-premier",
      slug: "friedrich-premier",
      name: "Premier",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro",
      slug: "friedrich-pro",
      name: "Pro",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze",
      slug: "friedrich-breeze",
      name: "Breeze",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus",
      slug: "friedrich-f-series-plus",
      name: "F - SERIES PLUS",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series",
      slug: "friedrich-f-series",
      name: "F Series",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series",
      slug: "friedrich-k-series",
      name: "K-SERIES",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-select",
      slug: "friedrich-floating-air-select",
      name: "Floating  Air Select",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro",
      slug: "friedrich-floating-air-pro",
      name: "Floating Air Pro",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x",
      slug: "friedrich-floating-air-pro-x",
      name: "Floating Air Pro X",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-select",
      slug: "friedrich-breeze-select",
      name: "Breeze Select",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "friedrich-standard-wall-single",
      slug: "friedrich-standard-wall-single",
      name: "Standard",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6100,
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
      id: "friedrich-premier-wall-single",
      slug: "friedrich-premier-wall-single",
      name: "Premier",
      seriesId: "friedrich-premier",
      brandId: "friedrich",
      modelNumber: "Premier",
      normalizedModelNumber: "premier",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 8000,
      seer2Min: 23.5,
      seer2Max: 23.5,
      hspf2Min: 9.8,
      hspf2Max: 9.8,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single",
      slug: "friedrich-pro-wall-single",
      name: "Pro",
      seriesId: "friedrich-pro",
      brandId: "friedrich",
      modelNumber: "Pro",
      normalizedModelNumber: "pro",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 24000,
      seer2Min: 18.5,
      seer2Max: 22.5,
      hspf2Min: 8.95,
      hspf2Max: 10,
      cop5FMin: 1.75,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted",
      slug: "friedrich-breeze-central-ducted",
      name: "Breeze",
      seriesId: "friedrich-breeze",
      brandId: "friedrich",
      modelNumber: "Breeze",
      normalizedModelNumber: "breeze",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 31200,
      seer2Min: 15.55,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted",
      slug: "friedrich-f-series-plus-central-ducted",
      name: "F - SERIES PLUS",
      seriesId: "friedrich-f-series-plus",
      brandId: "friedrich",
      modelNumber: "F - SERIES PLUS",
      normalizedModelNumber: "f-series-plus",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 40500,
      heatingCapacity5FMinBtu: 15800,
      heatingCapacity5FMaxBtu: 31600,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 8.5,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted",
      slug: "friedrich-f-series-central-ducted",
      name: "F Series",
      seriesId: "friedrich-f-series",
      brandId: "friedrich",
      modelNumber: "F Series",
      normalizedModelNumber: "f-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 55500,
      heatingCapacity5FMinBtu: 23200,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 1.75,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted",
      slug: "friedrich-k-series-central-ducted",
      name: "K-SERIES",
      seriesId: "friedrich-k-series",
      brandId: "friedrich",
      modelNumber: "K-SERIES",
      normalizedModelNumber: "k-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 15100,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 16,
      seer2Max: 21,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-select-wall-single",
      slug: "friedrich-floating-air-select-wall-single",
      name: "Floating  Air Select",
      seriesId: "friedrich-floating-air-select",
      brandId: "friedrich",
      modelNumber: "Floating  Air Select",
      normalizedModelNumber: "floating-air-select",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 14800,
      seer2Min: 20,
      seer2Max: 21,
      hspf2Min: 9,
      hspf2Max: 9.8,
      cop5FMin: 2,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-wall-single",
      slug: "friedrich-floating-air-pro-wall-single",
      name: "Floating Air Pro",
      seriesId: "friedrich-floating-air-pro",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro",
      normalizedModelNumber: "floating-air-pro",
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
      id: "friedrich-standard-central-ducted",
      slug: "friedrich-standard-central-ducted",
      name: "Standard",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
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
      id: "friedrich-floating-air-pro-x-wall-single",
      slug: "friedrich-floating-air-pro-x-wall-single",
      name: "Floating Air Pro X",
      seriesId: "friedrich-floating-air-pro-x",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro X",
      normalizedModelNumber: "floating-air-pro-x",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 8700,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 18.5,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-select-central-ducted",
      slug: "friedrich-breeze-select-central-ducted",
      name: "Breeze Select",
      seriesId: "friedrich-breeze-select",
      brandId: "friedrich",
      modelNumber: "Breeze Select",
      normalizedModelNumber: "breeze-select",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 17000,
      heatingCapacity5FMaxBtu: 32200,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "friedrich-mrh12y3j",
      modelNumber: "MRH12Y3J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrad09y1j",
      modelNumber: "MRAD09Y1J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrad12y1j",
      modelNumber: "MRAD12Y1J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrad18y3j",
      modelNumber: "MRAD18Y3J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrad24y3j",
      modelNumber: "MRAD24Y3J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrh09y3ja",
      modelNumber: "MRH09Y3JA",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrh12y3ja",
      modelNumber: "MRH12Y3JA",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frhsr09a3a",
      modelNumber: "FRHSR09A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frhsr09a3a-a",
      modelNumber: "FRHSR09A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-vrp12k",
      modelNumber: "VRP12K******-*",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-vrp24k",
      modelNumber: "VRP24K******-*",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-vrp12r",
      modelNumber: "VRP12R******-*",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-vrp24r",
      modelNumber: "VRP24R******-*",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17z603c",
      modelNumber: "WFPU17Z603C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fshsr12b1c",
      modelNumber: "FSHSR12B1C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fshsr24b3d",
      modelNumber: "FSHSR24B3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17y363d",
      modelNumber: "WFPU17Y363D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17y603d",
      modelNumber: "WFPU17Y603D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd16ay36ajvc",
      modelNumber: "RD16AY36AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frhsr12a3a",
      modelNumber: "FRHSR12A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frhsr12a3a-a",
      modelNumber: "FRHSR12A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a3a",
      modelNumber: "FPHSR09A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a3a",
      modelNumber: "FPHSR12A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a1a",
      modelNumber: "FPHSR09A1A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a1a",
      modelNumber: "FPHSR12A1A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr18a3a",
      modelNumber: "FPHSR18A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphmr24a3a",
      modelNumber: "FPHMR24A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphmr36a3a",
      modelNumber: "FPHMR36A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr12a3a",
      modelNumber: "FPHFR12A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr18a3a",
      modelNumber: "FPHFR18A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr24a3a",
      modelNumber: "FPHFR24A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphmr42a3a",
      modelNumber: "FPHMR42A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a1a-a",
      modelNumber: "FPHSR09A1A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a1a-a",
      modelNumber: "FPHSR12A1A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a3a-a",
      modelNumber: "FPHSR09A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a3a-a",
      modelNumber: "FPHSR12A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr18a3a-a",
      modelNumber: "FPHSR18A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphmr18a3a",
      modelNumber: "FPHMR18A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17z243c",
      modelNumber: "WFPU17Z243C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu18z363c",
      modelNumber: "WFPU18Z363C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu18z483c",
      modelNumber: "WFPU18Z483C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd17az36aj3n",
      modelNumber: "RD17AZ36AJ3N",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd16ay24ajvc",
      modelNumber: "RD16AY24AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd16ay48ajvc",
      modelNumber: "RD16AY48AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd17az60aj3n",
      modelNumber: "RD17AZ60AJ3N",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd17az48aj3n",
      modelNumber: "RD17AZ48AJ3N",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd17az24aj3n",
      modelNumber: "RD17AZ24AJ3N",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frp19ay36ajvc",
      modelNumber: "FRP19AY36AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd18ay24ajvc",
      modelNumber: "RD18AY24AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd18ay48ajvc",
      modelNumber: "RD18AY48AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd18ay60ajvc",
      modelNumber: "RD18AY60AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd18ay36ajvc",
      modelNumber: "RD18AY36AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fshsr09b1c",
      modelNumber: "FSHSR09B1C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fshsr18b3d",
      modelNumber: "FSHSR18B3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a1c",
      modelNumber: "FPHSR09A1C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a1c",
      modelNumber: "FPHSR12A1C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a3d",
      modelNumber: "FPHSR09A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a3d",
      modelNumber: "FPHSR12A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr18a3d",
      modelNumber: "FPHSR18A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr24a3d",
      modelNumber: "FPHSR24A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frp19ay60ajvc",
      modelNumber: "FRP19AY60AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr09a3d",
      modelNumber: "FPHFR09A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr12a3d",
      modelNumber: "FPHFR12A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr18a3d",
      modelNumber: "FPHFR18A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr24a3d",
      modelNumber: "FPHFR24A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr36a3d",
      modelNumber: "FPHFR36A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17y243d",
      modelNumber: "WFPU17Y243D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17y483d",
      modelNumber: "WFPU17Y483D",
      brandId: "friedrich",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "friedrich-standard-wall-single-cfg-1",
      slug: "friedrich-standard-wall-single-cfg-1",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-mrh12y3j",
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
      id: "friedrich-standard-wall-single-cfg-2",
      slug: "friedrich-standard-wall-single-cfg-2",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-mrad09y1j",
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
      id: "friedrich-standard-wall-single-cfg-3",
      slug: "friedrich-standard-wall-single-cfg-3",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-mrad12y1j",
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
      id: "friedrich-standard-wall-single-cfg-4",
      slug: "friedrich-standard-wall-single-cfg-4",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-mrad18y3j",
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
      id: "friedrich-standard-wall-single-cfg-5",
      slug: "friedrich-standard-wall-single-cfg-5",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-mrad24y3j",
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
      id: "friedrich-standard-wall-single-cfg-6",
      slug: "friedrich-standard-wall-single-cfg-6",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-mrh09y3ja",
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
      id: "friedrich-standard-wall-single-cfg-7",
      slug: "friedrich-standard-wall-single-cfg-7",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-mrh12y3ja",
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
      id: "friedrich-standard-wall-single-cfg-8",
      slug: "friedrich-standard-wall-single-cfg-8",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-frhsr09a3a",
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
      id: "friedrich-standard-wall-single-cfg-9",
      slug: "friedrich-standard-wall-single-cfg-9",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-frhsr09a3a-a",
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
      id: "friedrich-standard-wall-single-cfg-10",
      slug: "friedrich-standard-wall-single-cfg-10",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-vrp12k",
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
      id: "friedrich-standard-wall-single-cfg-11",
      slug: "friedrich-standard-wall-single-cfg-11",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-vrp24k",
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
      id: "friedrich-standard-wall-single-cfg-12",
      slug: "friedrich-standard-wall-single-cfg-12",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-vrp12r",
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
      id: "friedrich-standard-wall-single-cfg-13",
      slug: "friedrich-standard-wall-single-cfg-13",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-vrp24r",
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
      id: "friedrich-standard-wall-single-cfg-14",
      slug: "friedrich-standard-wall-single-cfg-14",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-wfpu17z603c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-cfg-15",
      slug: "friedrich-standard-wall-single-cfg-15",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-fshsr12b1c",
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
      id: "friedrich-standard-wall-single-cfg-16",
      slug: "friedrich-standard-wall-single-cfg-16",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-fshsr24b3d",
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
      id: "friedrich-standard-wall-single-cfg-17",
      slug: "friedrich-standard-wall-single-cfg-17",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-wfpu17y363d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-cfg-18",
      slug: "friedrich-standard-wall-single-cfg-18",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-wfpu17y603d",
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
      id: "friedrich-standard-wall-single-cfg-19",
      slug: "friedrich-standard-wall-single-cfg-19",
      modelId: "friedrich-standard-wall-single",
      outdoorUnitId: "friedrich-rd16ay36ajvc",
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
      id: "friedrich-premier-wall-single-cfg-1",
      slug: "friedrich-premier-wall-single-cfg-1",
      modelId: "friedrich-premier-wall-single",
      outdoorUnitId: "friedrich-frhsr12a3a",
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
      id: "friedrich-premier-wall-single-cfg-2",
      slug: "friedrich-premier-wall-single-cfg-2",
      modelId: "friedrich-premier-wall-single",
      outdoorUnitId: "friedrich-frhsr12a3a-a",
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
      id: "friedrich-pro-wall-single-cfg-1",
      slug: "friedrich-pro-wall-single-cfg-1",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr09a3a",
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
      id: "friedrich-pro-wall-single-cfg-2",
      slug: "friedrich-pro-wall-single-cfg-2",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr12a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-cfg-3",
      slug: "friedrich-pro-wall-single-cfg-3",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr09a1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-cfg-4",
      slug: "friedrich-pro-wall-single-cfg-4",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr12a1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-cfg-5",
      slug: "friedrich-pro-wall-single-cfg-5",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr18a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-cfg-6",
      slug: "friedrich-pro-wall-single-cfg-6",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphmr24a3a",
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
      id: "friedrich-pro-wall-single-cfg-7",
      slug: "friedrich-pro-wall-single-cfg-7",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphmr36a3a",
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
      id: "friedrich-pro-wall-single-cfg-8",
      slug: "friedrich-pro-wall-single-cfg-8",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphfr12a3a",
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
      id: "friedrich-pro-wall-single-cfg-9",
      slug: "friedrich-pro-wall-single-cfg-9",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphfr18a3a",
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
      id: "friedrich-pro-wall-single-cfg-10",
      slug: "friedrich-pro-wall-single-cfg-10",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphfr24a3a",
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
      id: "friedrich-pro-wall-single-cfg-11",
      slug: "friedrich-pro-wall-single-cfg-11",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphmr42a3a",
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
      id: "friedrich-pro-wall-single-cfg-12",
      slug: "friedrich-pro-wall-single-cfg-12",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr09a1a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-cfg-13",
      slug: "friedrich-pro-wall-single-cfg-13",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr12a1a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-cfg-14",
      slug: "friedrich-pro-wall-single-cfg-14",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr09a3a-a",
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
      id: "friedrich-pro-wall-single-cfg-15",
      slug: "friedrich-pro-wall-single-cfg-15",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr12a3a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-cfg-16",
      slug: "friedrich-pro-wall-single-cfg-16",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr18a3a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-cfg-17",
      slug: "friedrich-pro-wall-single-cfg-17",
      modelId: "friedrich-pro-wall-single",
      outdoorUnitId: "friedrich-fphmr18a3a",
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
      id: "friedrich-breeze-central-ducted-cfg-1",
      slug: "friedrich-breeze-central-ducted-cfg-1",
      modelId: "friedrich-breeze-central-ducted",
      outdoorUnitId: "friedrich-wfpu17z243c",
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
      id: "friedrich-breeze-central-ducted-cfg-2",
      slug: "friedrich-breeze-central-ducted-cfg-2",
      modelId: "friedrich-breeze-central-ducted",
      outdoorUnitId: "friedrich-wfpu18z363c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-cfg-3",
      slug: "friedrich-breeze-central-ducted-cfg-3",
      modelId: "friedrich-breeze-central-ducted",
      outdoorUnitId: "friedrich-wfpu18z483c",
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
      id: "friedrich-breeze-central-ducted-cfg-4",
      slug: "friedrich-breeze-central-ducted-cfg-4",
      modelId: "friedrich-breeze-central-ducted",
      outdoorUnitId: "friedrich-wfpu18z363c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-cfg-5",
      slug: "friedrich-breeze-central-ducted-cfg-5",
      modelId: "friedrich-breeze-central-ducted",
      outdoorUnitId: "friedrich-wfpu18z483c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 15.55,
      hspf2: 8.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-cfg-1",
      slug: "friedrich-f-series-plus-central-ducted-cfg-1",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-2",
      slug: "friedrich-f-series-plus-central-ducted-cfg-2",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-3",
      slug: "friedrich-f-series-plus-central-ducted-cfg-3",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-4",
      slug: "friedrich-f-series-plus-central-ducted-cfg-4",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-5",
      slug: "friedrich-f-series-plus-central-ducted-cfg-5",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-6",
      slug: "friedrich-f-series-plus-central-ducted-cfg-6",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-7",
      slug: "friedrich-f-series-plus-central-ducted-cfg-7",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-8",
      slug: "friedrich-f-series-plus-central-ducted-cfg-8",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-9",
      slug: "friedrich-f-series-plus-central-ducted-cfg-9",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-10",
      slug: "friedrich-f-series-plus-central-ducted-cfg-10",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-11",
      slug: "friedrich-f-series-plus-central-ducted-cfg-11",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-12",
      slug: "friedrich-f-series-plus-central-ducted-cfg-12",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-13",
      slug: "friedrich-f-series-plus-central-ducted-cfg-13",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-14",
      slug: "friedrich-f-series-plus-central-ducted-cfg-14",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-15",
      slug: "friedrich-f-series-plus-central-ducted-cfg-15",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-16",
      slug: "friedrich-f-series-plus-central-ducted-cfg-16",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-17",
      slug: "friedrich-f-series-plus-central-ducted-cfg-17",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-18",
      slug: "friedrich-f-series-plus-central-ducted-cfg-18",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-19",
      slug: "friedrich-f-series-plus-central-ducted-cfg-19",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-20",
      slug: "friedrich-f-series-plus-central-ducted-cfg-20",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-21",
      slug: "friedrich-f-series-plus-central-ducted-cfg-21",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-22",
      slug: "friedrich-f-series-plus-central-ducted-cfg-22",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-23",
      slug: "friedrich-f-series-plus-central-ducted-cfg-23",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-24",
      slug: "friedrich-f-series-plus-central-ducted-cfg-24",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-25",
      slug: "friedrich-f-series-plus-central-ducted-cfg-25",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-26",
      slug: "friedrich-f-series-plus-central-ducted-cfg-26",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-27",
      slug: "friedrich-f-series-plus-central-ducted-cfg-27",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-28",
      slug: "friedrich-f-series-plus-central-ducted-cfg-28",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-29",
      slug: "friedrich-f-series-plus-central-ducted-cfg-29",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-30",
      slug: "friedrich-f-series-plus-central-ducted-cfg-30",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-31",
      slug: "friedrich-f-series-plus-central-ducted-cfg-31",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-32",
      slug: "friedrich-f-series-plus-central-ducted-cfg-32",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-33",
      slug: "friedrich-f-series-plus-central-ducted-cfg-33",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-34",
      slug: "friedrich-f-series-plus-central-ducted-cfg-34",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-35",
      slug: "friedrich-f-series-plus-central-ducted-cfg-35",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-36",
      slug: "friedrich-f-series-plus-central-ducted-cfg-36",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-37",
      slug: "friedrich-f-series-plus-central-ducted-cfg-37",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-38",
      slug: "friedrich-f-series-plus-central-ducted-cfg-38",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-39",
      slug: "friedrich-f-series-plus-central-ducted-cfg-39",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-40",
      slug: "friedrich-f-series-plus-central-ducted-cfg-40",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-41",
      slug: "friedrich-f-series-plus-central-ducted-cfg-41",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-42",
      slug: "friedrich-f-series-plus-central-ducted-cfg-42",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-43",
      slug: "friedrich-f-series-plus-central-ducted-cfg-43",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-44",
      slug: "friedrich-f-series-plus-central-ducted-cfg-44",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd16ay24ajvc",
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
      id: "friedrich-f-series-plus-central-ducted-cfg-45",
      slug: "friedrich-f-series-plus-central-ducted-cfg-45",
      modelId: "friedrich-f-series-plus-central-ducted",
      outdoorUnitId: "friedrich-rd16ay48ajvc",
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
      id: "friedrich-f-series-central-ducted-cfg-1",
      slug: "friedrich-f-series-central-ducted-cfg-1",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-2",
      slug: "friedrich-f-series-central-ducted-cfg-2",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-3",
      slug: "friedrich-f-series-central-ducted-cfg-3",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-4",
      slug: "friedrich-f-series-central-ducted-cfg-4",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-5",
      slug: "friedrich-f-series-central-ducted-cfg-5",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-6",
      slug: "friedrich-f-series-central-ducted-cfg-6",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-7",
      slug: "friedrich-f-series-central-ducted-cfg-7",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-8",
      slug: "friedrich-f-series-central-ducted-cfg-8",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-9",
      slug: "friedrich-f-series-central-ducted-cfg-9",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-10",
      slug: "friedrich-f-series-central-ducted-cfg-10",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-11",
      slug: "friedrich-f-series-central-ducted-cfg-11",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-12",
      slug: "friedrich-f-series-central-ducted-cfg-12",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-13",
      slug: "friedrich-f-series-central-ducted-cfg-13",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-14",
      slug: "friedrich-f-series-central-ducted-cfg-14",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-15",
      slug: "friedrich-f-series-central-ducted-cfg-15",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-16",
      slug: "friedrich-f-series-central-ducted-cfg-16",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-17",
      slug: "friedrich-f-series-central-ducted-cfg-17",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-18",
      slug: "friedrich-f-series-central-ducted-cfg-18",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-19",
      slug: "friedrich-f-series-central-ducted-cfg-19",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-20",
      slug: "friedrich-f-series-central-ducted-cfg-20",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-21",
      slug: "friedrich-f-series-central-ducted-cfg-21",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-22",
      slug: "friedrich-f-series-central-ducted-cfg-22",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-23",
      slug: "friedrich-f-series-central-ducted-cfg-23",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-24",
      slug: "friedrich-f-series-central-ducted-cfg-24",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-25",
      slug: "friedrich-f-series-central-ducted-cfg-25",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-26",
      slug: "friedrich-f-series-central-ducted-cfg-26",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-27",
      slug: "friedrich-f-series-central-ducted-cfg-27",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-28",
      slug: "friedrich-f-series-central-ducted-cfg-28",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-29",
      slug: "friedrich-f-series-central-ducted-cfg-29",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-30",
      slug: "friedrich-f-series-central-ducted-cfg-30",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-31",
      slug: "friedrich-f-series-central-ducted-cfg-31",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-32",
      slug: "friedrich-f-series-central-ducted-cfg-32",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-33",
      slug: "friedrich-f-series-central-ducted-cfg-33",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-34",
      slug: "friedrich-f-series-central-ducted-cfg-34",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-35",
      slug: "friedrich-f-series-central-ducted-cfg-35",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-36",
      slug: "friedrich-f-series-central-ducted-cfg-36",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-37",
      slug: "friedrich-f-series-central-ducted-cfg-37",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-38",
      slug: "friedrich-f-series-central-ducted-cfg-38",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-39",
      slug: "friedrich-f-series-central-ducted-cfg-39",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-40",
      slug: "friedrich-f-series-central-ducted-cfg-40",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-41",
      slug: "friedrich-f-series-central-ducted-cfg-41",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-42",
      slug: "friedrich-f-series-central-ducted-cfg-42",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-43",
      slug: "friedrich-f-series-central-ducted-cfg-43",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-44",
      slug: "friedrich-f-series-central-ducted-cfg-44",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-45",
      slug: "friedrich-f-series-central-ducted-cfg-45",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-46",
      slug: "friedrich-f-series-central-ducted-cfg-46",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-47",
      slug: "friedrich-f-series-central-ducted-cfg-47",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-48",
      slug: "friedrich-f-series-central-ducted-cfg-48",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-49",
      slug: "friedrich-f-series-central-ducted-cfg-49",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-50",
      slug: "friedrich-f-series-central-ducted-cfg-50",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-51",
      slug: "friedrich-f-series-central-ducted-cfg-51",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-52",
      slug: "friedrich-f-series-central-ducted-cfg-52",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-53",
      slug: "friedrich-f-series-central-ducted-cfg-53",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-54",
      slug: "friedrich-f-series-central-ducted-cfg-54",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-55",
      slug: "friedrich-f-series-central-ducted-cfg-55",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-56",
      slug: "friedrich-f-series-central-ducted-cfg-56",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-57",
      slug: "friedrich-f-series-central-ducted-cfg-57",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-58",
      slug: "friedrich-f-series-central-ducted-cfg-58",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-59",
      slug: "friedrich-f-series-central-ducted-cfg-59",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-60",
      slug: "friedrich-f-series-central-ducted-cfg-60",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-61",
      slug: "friedrich-f-series-central-ducted-cfg-61",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-62",
      slug: "friedrich-f-series-central-ducted-cfg-62",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-63",
      slug: "friedrich-f-series-central-ducted-cfg-63",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-64",
      slug: "friedrich-f-series-central-ducted-cfg-64",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-65",
      slug: "friedrich-f-series-central-ducted-cfg-65",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-66",
      slug: "friedrich-f-series-central-ducted-cfg-66",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-67",
      slug: "friedrich-f-series-central-ducted-cfg-67",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-68",
      slug: "friedrich-f-series-central-ducted-cfg-68",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-69",
      slug: "friedrich-f-series-central-ducted-cfg-69",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-70",
      slug: "friedrich-f-series-central-ducted-cfg-70",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-71",
      slug: "friedrich-f-series-central-ducted-cfg-71",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-72",
      slug: "friedrich-f-series-central-ducted-cfg-72",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-73",
      slug: "friedrich-f-series-central-ducted-cfg-73",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-74",
      slug: "friedrich-f-series-central-ducted-cfg-74",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-75",
      slug: "friedrich-f-series-central-ducted-cfg-75",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-76",
      slug: "friedrich-f-series-central-ducted-cfg-76",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-77",
      slug: "friedrich-f-series-central-ducted-cfg-77",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-78",
      slug: "friedrich-f-series-central-ducted-cfg-78",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-79",
      slug: "friedrich-f-series-central-ducted-cfg-79",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-80",
      slug: "friedrich-f-series-central-ducted-cfg-80",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-81",
      slug: "friedrich-f-series-central-ducted-cfg-81",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-82",
      slug: "friedrich-f-series-central-ducted-cfg-82",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-83",
      slug: "friedrich-f-series-central-ducted-cfg-83",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-84",
      slug: "friedrich-f-series-central-ducted-cfg-84",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-85",
      slug: "friedrich-f-series-central-ducted-cfg-85",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-86",
      slug: "friedrich-f-series-central-ducted-cfg-86",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-87",
      slug: "friedrich-f-series-central-ducted-cfg-87",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-88",
      slug: "friedrich-f-series-central-ducted-cfg-88",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-89",
      slug: "friedrich-f-series-central-ducted-cfg-89",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-90",
      slug: "friedrich-f-series-central-ducted-cfg-90",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-91",
      slug: "friedrich-f-series-central-ducted-cfg-91",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-92",
      slug: "friedrich-f-series-central-ducted-cfg-92",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-93",
      slug: "friedrich-f-series-central-ducted-cfg-93",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-94",
      slug: "friedrich-f-series-central-ducted-cfg-94",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
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
      id: "friedrich-f-series-central-ducted-cfg-95",
      slug: "friedrich-f-series-central-ducted-cfg-95",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-cfg-96",
      slug: "friedrich-f-series-central-ducted-cfg-96",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-cfg-97",
      slug: "friedrich-f-series-central-ducted-cfg-97",
      modelId: "friedrich-f-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az36aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-1",
      slug: "friedrich-k-series-central-ducted-cfg-1",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-2",
      slug: "friedrich-k-series-central-ducted-cfg-2",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-3",
      slug: "friedrich-k-series-central-ducted-cfg-3",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-4",
      slug: "friedrich-k-series-central-ducted-cfg-4",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-5",
      slug: "friedrich-k-series-central-ducted-cfg-5",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-6",
      slug: "friedrich-k-series-central-ducted-cfg-6",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-7",
      slug: "friedrich-k-series-central-ducted-cfg-7",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-8",
      slug: "friedrich-k-series-central-ducted-cfg-8",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-9",
      slug: "friedrich-k-series-central-ducted-cfg-9",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-10",
      slug: "friedrich-k-series-central-ducted-cfg-10",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-11",
      slug: "friedrich-k-series-central-ducted-cfg-11",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-12",
      slug: "friedrich-k-series-central-ducted-cfg-12",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-13",
      slug: "friedrich-k-series-central-ducted-cfg-13",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-14",
      slug: "friedrich-k-series-central-ducted-cfg-14",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-15",
      slug: "friedrich-k-series-central-ducted-cfg-15",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-16",
      slug: "friedrich-k-series-central-ducted-cfg-16",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-17",
      slug: "friedrich-k-series-central-ducted-cfg-17",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-18",
      slug: "friedrich-k-series-central-ducted-cfg-18",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-19",
      slug: "friedrich-k-series-central-ducted-cfg-19",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-20",
      slug: "friedrich-k-series-central-ducted-cfg-20",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-21",
      slug: "friedrich-k-series-central-ducted-cfg-21",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-22",
      slug: "friedrich-k-series-central-ducted-cfg-22",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-23",
      slug: "friedrich-k-series-central-ducted-cfg-23",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-24",
      slug: "friedrich-k-series-central-ducted-cfg-24",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-25",
      slug: "friedrich-k-series-central-ducted-cfg-25",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-26",
      slug: "friedrich-k-series-central-ducted-cfg-26",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-27",
      slug: "friedrich-k-series-central-ducted-cfg-27",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-28",
      slug: "friedrich-k-series-central-ducted-cfg-28",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-29",
      slug: "friedrich-k-series-central-ducted-cfg-29",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-30",
      slug: "friedrich-k-series-central-ducted-cfg-30",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-31",
      slug: "friedrich-k-series-central-ducted-cfg-31",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-32",
      slug: "friedrich-k-series-central-ducted-cfg-32",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-33",
      slug: "friedrich-k-series-central-ducted-cfg-33",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-34",
      slug: "friedrich-k-series-central-ducted-cfg-34",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-35",
      slug: "friedrich-k-series-central-ducted-cfg-35",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-36",
      slug: "friedrich-k-series-central-ducted-cfg-36",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-37",
      slug: "friedrich-k-series-central-ducted-cfg-37",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd17az24aj3n",
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
      id: "friedrich-k-series-central-ducted-cfg-38",
      slug: "friedrich-k-series-central-ducted-cfg-38",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-39",
      slug: "friedrich-k-series-central-ducted-cfg-39",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-40",
      slug: "friedrich-k-series-central-ducted-cfg-40",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-41",
      slug: "friedrich-k-series-central-ducted-cfg-41",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-42",
      slug: "friedrich-k-series-central-ducted-cfg-42",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-43",
      slug: "friedrich-k-series-central-ducted-cfg-43",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-44",
      slug: "friedrich-k-series-central-ducted-cfg-44",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-45",
      slug: "friedrich-k-series-central-ducted-cfg-45",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-46",
      slug: "friedrich-k-series-central-ducted-cfg-46",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-47",
      slug: "friedrich-k-series-central-ducted-cfg-47",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-48",
      slug: "friedrich-k-series-central-ducted-cfg-48",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-49",
      slug: "friedrich-k-series-central-ducted-cfg-49",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-50",
      slug: "friedrich-k-series-central-ducted-cfg-50",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-51",
      slug: "friedrich-k-series-central-ducted-cfg-51",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-52",
      slug: "friedrich-k-series-central-ducted-cfg-52",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-53",
      slug: "friedrich-k-series-central-ducted-cfg-53",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-54",
      slug: "friedrich-k-series-central-ducted-cfg-54",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-55",
      slug: "friedrich-k-series-central-ducted-cfg-55",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-56",
      slug: "friedrich-k-series-central-ducted-cfg-56",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-57",
      slug: "friedrich-k-series-central-ducted-cfg-57",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-58",
      slug: "friedrich-k-series-central-ducted-cfg-58",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-59",
      slug: "friedrich-k-series-central-ducted-cfg-59",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-60",
      slug: "friedrich-k-series-central-ducted-cfg-60",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-61",
      slug: "friedrich-k-series-central-ducted-cfg-61",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-62",
      slug: "friedrich-k-series-central-ducted-cfg-62",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-63",
      slug: "friedrich-k-series-central-ducted-cfg-63",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-64",
      slug: "friedrich-k-series-central-ducted-cfg-64",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-65",
      slug: "friedrich-k-series-central-ducted-cfg-65",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-66",
      slug: "friedrich-k-series-central-ducted-cfg-66",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-67",
      slug: "friedrich-k-series-central-ducted-cfg-67",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-68",
      slug: "friedrich-k-series-central-ducted-cfg-68",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-69",
      slug: "friedrich-k-series-central-ducted-cfg-69",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-70",
      slug: "friedrich-k-series-central-ducted-cfg-70",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-71",
      slug: "friedrich-k-series-central-ducted-cfg-71",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-72",
      slug: "friedrich-k-series-central-ducted-cfg-72",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-73",
      slug: "friedrich-k-series-central-ducted-cfg-73",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-74",
      slug: "friedrich-k-series-central-ducted-cfg-74",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-75",
      slug: "friedrich-k-series-central-ducted-cfg-75",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-76",
      slug: "friedrich-k-series-central-ducted-cfg-76",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-77",
      slug: "friedrich-k-series-central-ducted-cfg-77",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-78",
      slug: "friedrich-k-series-central-ducted-cfg-78",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-79",
      slug: "friedrich-k-series-central-ducted-cfg-79",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-80",
      slug: "friedrich-k-series-central-ducted-cfg-80",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-81",
      slug: "friedrich-k-series-central-ducted-cfg-81",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-82",
      slug: "friedrich-k-series-central-ducted-cfg-82",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-83",
      slug: "friedrich-k-series-central-ducted-cfg-83",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-84",
      slug: "friedrich-k-series-central-ducted-cfg-84",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-85",
      slug: "friedrich-k-series-central-ducted-cfg-85",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-86",
      slug: "friedrich-k-series-central-ducted-cfg-86",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-87",
      slug: "friedrich-k-series-central-ducted-cfg-87",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-88",
      slug: "friedrich-k-series-central-ducted-cfg-88",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-89",
      slug: "friedrich-k-series-central-ducted-cfg-89",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-90",
      slug: "friedrich-k-series-central-ducted-cfg-90",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-91",
      slug: "friedrich-k-series-central-ducted-cfg-91",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-92",
      slug: "friedrich-k-series-central-ducted-cfg-92",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-93",
      slug: "friedrich-k-series-central-ducted-cfg-93",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-94",
      slug: "friedrich-k-series-central-ducted-cfg-94",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-95",
      slug: "friedrich-k-series-central-ducted-cfg-95",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-96",
      slug: "friedrich-k-series-central-ducted-cfg-96",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-97",
      slug: "friedrich-k-series-central-ducted-cfg-97",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-98",
      slug: "friedrich-k-series-central-ducted-cfg-98",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-99",
      slug: "friedrich-k-series-central-ducted-cfg-99",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-100",
      slug: "friedrich-k-series-central-ducted-cfg-100",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-101",
      slug: "friedrich-k-series-central-ducted-cfg-101",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-102",
      slug: "friedrich-k-series-central-ducted-cfg-102",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-103",
      slug: "friedrich-k-series-central-ducted-cfg-103",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-104",
      slug: "friedrich-k-series-central-ducted-cfg-104",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-105",
      slug: "friedrich-k-series-central-ducted-cfg-105",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-106",
      slug: "friedrich-k-series-central-ducted-cfg-106",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-107",
      slug: "friedrich-k-series-central-ducted-cfg-107",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-108",
      slug: "friedrich-k-series-central-ducted-cfg-108",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-109",
      slug: "friedrich-k-series-central-ducted-cfg-109",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-110",
      slug: "friedrich-k-series-central-ducted-cfg-110",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-111",
      slug: "friedrich-k-series-central-ducted-cfg-111",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-112",
      slug: "friedrich-k-series-central-ducted-cfg-112",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-113",
      slug: "friedrich-k-series-central-ducted-cfg-113",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-114",
      slug: "friedrich-k-series-central-ducted-cfg-114",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-115",
      slug: "friedrich-k-series-central-ducted-cfg-115",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-116",
      slug: "friedrich-k-series-central-ducted-cfg-116",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-117",
      slug: "friedrich-k-series-central-ducted-cfg-117",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-118",
      slug: "friedrich-k-series-central-ducted-cfg-118",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-119",
      slug: "friedrich-k-series-central-ducted-cfg-119",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-120",
      slug: "friedrich-k-series-central-ducted-cfg-120",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-121",
      slug: "friedrich-k-series-central-ducted-cfg-121",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-122",
      slug: "friedrich-k-series-central-ducted-cfg-122",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-123",
      slug: "friedrich-k-series-central-ducted-cfg-123",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-124",
      slug: "friedrich-k-series-central-ducted-cfg-124",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-125",
      slug: "friedrich-k-series-central-ducted-cfg-125",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-126",
      slug: "friedrich-k-series-central-ducted-cfg-126",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-127",
      slug: "friedrich-k-series-central-ducted-cfg-127",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-128",
      slug: "friedrich-k-series-central-ducted-cfg-128",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-129",
      slug: "friedrich-k-series-central-ducted-cfg-129",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-130",
      slug: "friedrich-k-series-central-ducted-cfg-130",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-131",
      slug: "friedrich-k-series-central-ducted-cfg-131",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-132",
      slug: "friedrich-k-series-central-ducted-cfg-132",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-133",
      slug: "friedrich-k-series-central-ducted-cfg-133",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-134",
      slug: "friedrich-k-series-central-ducted-cfg-134",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-135",
      slug: "friedrich-k-series-central-ducted-cfg-135",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-136",
      slug: "friedrich-k-series-central-ducted-cfg-136",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-137",
      slug: "friedrich-k-series-central-ducted-cfg-137",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-138",
      slug: "friedrich-k-series-central-ducted-cfg-138",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
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
      id: "friedrich-k-series-central-ducted-cfg-139",
      slug: "friedrich-k-series-central-ducted-cfg-139",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-140",
      slug: "friedrich-k-series-central-ducted-cfg-140",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-141",
      slug: "friedrich-k-series-central-ducted-cfg-141",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-142",
      slug: "friedrich-k-series-central-ducted-cfg-142",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-143",
      slug: "friedrich-k-series-central-ducted-cfg-143",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-144",
      slug: "friedrich-k-series-central-ducted-cfg-144",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-145",
      slug: "friedrich-k-series-central-ducted-cfg-145",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-146",
      slug: "friedrich-k-series-central-ducted-cfg-146",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-147",
      slug: "friedrich-k-series-central-ducted-cfg-147",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-148",
      slug: "friedrich-k-series-central-ducted-cfg-148",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-149",
      slug: "friedrich-k-series-central-ducted-cfg-149",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-150",
      slug: "friedrich-k-series-central-ducted-cfg-150",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-151",
      slug: "friedrich-k-series-central-ducted-cfg-151",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-152",
      slug: "friedrich-k-series-central-ducted-cfg-152",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-153",
      slug: "friedrich-k-series-central-ducted-cfg-153",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-154",
      slug: "friedrich-k-series-central-ducted-cfg-154",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-155",
      slug: "friedrich-k-series-central-ducted-cfg-155",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-156",
      slug: "friedrich-k-series-central-ducted-cfg-156",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-157",
      slug: "friedrich-k-series-central-ducted-cfg-157",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-158",
      slug: "friedrich-k-series-central-ducted-cfg-158",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-159",
      slug: "friedrich-k-series-central-ducted-cfg-159",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-160",
      slug: "friedrich-k-series-central-ducted-cfg-160",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-161",
      slug: "friedrich-k-series-central-ducted-cfg-161",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-162",
      slug: "friedrich-k-series-central-ducted-cfg-162",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-163",
      slug: "friedrich-k-series-central-ducted-cfg-163",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-164",
      slug: "friedrich-k-series-central-ducted-cfg-164",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-165",
      slug: "friedrich-k-series-central-ducted-cfg-165",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-166",
      slug: "friedrich-k-series-central-ducted-cfg-166",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-167",
      slug: "friedrich-k-series-central-ducted-cfg-167",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-168",
      slug: "friedrich-k-series-central-ducted-cfg-168",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-169",
      slug: "friedrich-k-series-central-ducted-cfg-169",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-170",
      slug: "friedrich-k-series-central-ducted-cfg-170",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-171",
      slug: "friedrich-k-series-central-ducted-cfg-171",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-172",
      slug: "friedrich-k-series-central-ducted-cfg-172",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-173",
      slug: "friedrich-k-series-central-ducted-cfg-173",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-174",
      slug: "friedrich-k-series-central-ducted-cfg-174",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-175",
      slug: "friedrich-k-series-central-ducted-cfg-175",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-176",
      slug: "friedrich-k-series-central-ducted-cfg-176",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-177",
      slug: "friedrich-k-series-central-ducted-cfg-177",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-178",
      slug: "friedrich-k-series-central-ducted-cfg-178",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-179",
      slug: "friedrich-k-series-central-ducted-cfg-179",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-180",
      slug: "friedrich-k-series-central-ducted-cfg-180",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-181",
      slug: "friedrich-k-series-central-ducted-cfg-181",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-182",
      slug: "friedrich-k-series-central-ducted-cfg-182",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-183",
      slug: "friedrich-k-series-central-ducted-cfg-183",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-184",
      slug: "friedrich-k-series-central-ducted-cfg-184",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-185",
      slug: "friedrich-k-series-central-ducted-cfg-185",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-186",
      slug: "friedrich-k-series-central-ducted-cfg-186",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-187",
      slug: "friedrich-k-series-central-ducted-cfg-187",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-188",
      slug: "friedrich-k-series-central-ducted-cfg-188",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-189",
      slug: "friedrich-k-series-central-ducted-cfg-189",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-190",
      slug: "friedrich-k-series-central-ducted-cfg-190",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-191",
      slug: "friedrich-k-series-central-ducted-cfg-191",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-192",
      slug: "friedrich-k-series-central-ducted-cfg-192",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-193",
      slug: "friedrich-k-series-central-ducted-cfg-193",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-194",
      slug: "friedrich-k-series-central-ducted-cfg-194",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-195",
      slug: "friedrich-k-series-central-ducted-cfg-195",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-196",
      slug: "friedrich-k-series-central-ducted-cfg-196",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-197",
      slug: "friedrich-k-series-central-ducted-cfg-197",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-198",
      slug: "friedrich-k-series-central-ducted-cfg-198",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-199",
      slug: "friedrich-k-series-central-ducted-cfg-199",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-200",
      slug: "friedrich-k-series-central-ducted-cfg-200",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-201",
      slug: "friedrich-k-series-central-ducted-cfg-201",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-202",
      slug: "friedrich-k-series-central-ducted-cfg-202",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-203",
      slug: "friedrich-k-series-central-ducted-cfg-203",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-204",
      slug: "friedrich-k-series-central-ducted-cfg-204",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-205",
      slug: "friedrich-k-series-central-ducted-cfg-205",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-206",
      slug: "friedrich-k-series-central-ducted-cfg-206",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-207",
      slug: "friedrich-k-series-central-ducted-cfg-207",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-208",
      slug: "friedrich-k-series-central-ducted-cfg-208",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-209",
      slug: "friedrich-k-series-central-ducted-cfg-209",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-210",
      slug: "friedrich-k-series-central-ducted-cfg-210",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-211",
      slug: "friedrich-k-series-central-ducted-cfg-211",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-212",
      slug: "friedrich-k-series-central-ducted-cfg-212",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-213",
      slug: "friedrich-k-series-central-ducted-cfg-213",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-214",
      slug: "friedrich-k-series-central-ducted-cfg-214",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-215",
      slug: "friedrich-k-series-central-ducted-cfg-215",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-216",
      slug: "friedrich-k-series-central-ducted-cfg-216",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-217",
      slug: "friedrich-k-series-central-ducted-cfg-217",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-218",
      slug: "friedrich-k-series-central-ducted-cfg-218",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-219",
      slug: "friedrich-k-series-central-ducted-cfg-219",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-220",
      slug: "friedrich-k-series-central-ducted-cfg-220",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-221",
      slug: "friedrich-k-series-central-ducted-cfg-221",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-222",
      slug: "friedrich-k-series-central-ducted-cfg-222",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-223",
      slug: "friedrich-k-series-central-ducted-cfg-223",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-224",
      slug: "friedrich-k-series-central-ducted-cfg-224",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-225",
      slug: "friedrich-k-series-central-ducted-cfg-225",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-226",
      slug: "friedrich-k-series-central-ducted-cfg-226",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-227",
      slug: "friedrich-k-series-central-ducted-cfg-227",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-228",
      slug: "friedrich-k-series-central-ducted-cfg-228",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-229",
      slug: "friedrich-k-series-central-ducted-cfg-229",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-230",
      slug: "friedrich-k-series-central-ducted-cfg-230",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-231",
      slug: "friedrich-k-series-central-ducted-cfg-231",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-232",
      slug: "friedrich-k-series-central-ducted-cfg-232",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-233",
      slug: "friedrich-k-series-central-ducted-cfg-233",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-234",
      slug: "friedrich-k-series-central-ducted-cfg-234",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-235",
      slug: "friedrich-k-series-central-ducted-cfg-235",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-236",
      slug: "friedrich-k-series-central-ducted-cfg-236",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-237",
      slug: "friedrich-k-series-central-ducted-cfg-237",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-238",
      slug: "friedrich-k-series-central-ducted-cfg-238",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-239",
      slug: "friedrich-k-series-central-ducted-cfg-239",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-240",
      slug: "friedrich-k-series-central-ducted-cfg-240",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-241",
      slug: "friedrich-k-series-central-ducted-cfg-241",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-242",
      slug: "friedrich-k-series-central-ducted-cfg-242",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-243",
      slug: "friedrich-k-series-central-ducted-cfg-243",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-244",
      slug: "friedrich-k-series-central-ducted-cfg-244",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-245",
      slug: "friedrich-k-series-central-ducted-cfg-245",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31600,
      coolingCapacityMaxBtu: 31600,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-246",
      slug: "friedrich-k-series-central-ducted-cfg-246",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31800,
      coolingCapacityMaxBtu: 31800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-247",
      slug: "friedrich-k-series-central-ducted-cfg-247",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-248",
      slug: "friedrich-k-series-central-ducted-cfg-248",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-249",
      slug: "friedrich-k-series-central-ducted-cfg-249",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-250",
      slug: "friedrich-k-series-central-ducted-cfg-250",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-cfg-251",
      slug: "friedrich-k-series-central-ducted-cfg-251",
      modelId: "friedrich-k-series-central-ducted",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
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
      id: "friedrich-floating-air-select-wall-single-cfg-1",
      slug: "friedrich-floating-air-select-wall-single-cfg-1",
      modelId: "friedrich-floating-air-select-wall-single",
      outdoorUnitId: "friedrich-fshsr09b1c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-select-wall-single-cfg-2",
      slug: "friedrich-floating-air-select-wall-single-cfg-2",
      modelId: "friedrich-floating-air-select-wall-single",
      outdoorUnitId: "friedrich-fshsr18b3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-wall-single-cfg-1",
      slug: "friedrich-floating-air-pro-wall-single-cfg-1",
      modelId: "friedrich-floating-air-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr09a1c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-wall-single-cfg-2",
      slug: "friedrich-floating-air-pro-wall-single-cfg-2",
      modelId: "friedrich-floating-air-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr12a1c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-wall-single-cfg-3",
      slug: "friedrich-floating-air-pro-wall-single-cfg-3",
      modelId: "friedrich-floating-air-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr09a3d",
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
      id: "friedrich-floating-air-pro-wall-single-cfg-4",
      slug: "friedrich-floating-air-pro-wall-single-cfg-4",
      modelId: "friedrich-floating-air-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr12a3d",
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
      id: "friedrich-floating-air-pro-wall-single-cfg-5",
      slug: "friedrich-floating-air-pro-wall-single-cfg-5",
      modelId: "friedrich-floating-air-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr18a3d",
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
      id: "friedrich-floating-air-pro-wall-single-cfg-6",
      slug: "friedrich-floating-air-pro-wall-single-cfg-6",
      modelId: "friedrich-floating-air-pro-wall-single",
      outdoorUnitId: "friedrich-fphsr24a3d",
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
      id: "friedrich-standard-central-ducted-cfg-1",
      slug: "friedrich-standard-central-ducted-cfg-1",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-2",
      slug: "friedrich-standard-central-ducted-cfg-2",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-3",
      slug: "friedrich-standard-central-ducted-cfg-3",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-4",
      slug: "friedrich-standard-central-ducted-cfg-4",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-5",
      slug: "friedrich-standard-central-ducted-cfg-5",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-6",
      slug: "friedrich-standard-central-ducted-cfg-6",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-7",
      slug: "friedrich-standard-central-ducted-cfg-7",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-8",
      slug: "friedrich-standard-central-ducted-cfg-8",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-9",
      slug: "friedrich-standard-central-ducted-cfg-9",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-10",
      slug: "friedrich-standard-central-ducted-cfg-10",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-cfg-11",
      slug: "friedrich-standard-central-ducted-cfg-11",
      modelId: "friedrich-standard-central-ducted",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-floating-air-pro-x-wall-single-cfg-1",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-1",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr09a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-cfg-2",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-2",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr12a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-cfg-3",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-3",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr09a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-cfg-4",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-4",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr12a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-cfg-5",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-5",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr18a3d",
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
      id: "friedrich-floating-air-pro-x-wall-single-cfg-6",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-6",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr24a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-cfg-7",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-7",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr18a3d",
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
      id: "friedrich-floating-air-pro-x-wall-single-cfg-8",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-8",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr24a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-cfg-9",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-9",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr36a3d",
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
      id: "friedrich-floating-air-pro-x-wall-single-cfg-10",
      slug: "friedrich-floating-air-pro-x-wall-single-cfg-10",
      modelId: "friedrich-floating-air-pro-x-wall-single",
      outdoorUnitId: "friedrich-fphfr36a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-select-central-ducted-cfg-1",
      slug: "friedrich-breeze-select-central-ducted-cfg-1",
      modelId: "friedrich-breeze-select-central-ducted",
      outdoorUnitId: "friedrich-wfpu17y243d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-select-central-ducted-cfg-2",
      slug: "friedrich-breeze-select-central-ducted-cfg-2",
      modelId: "friedrich-breeze-select-central-ducted",
      outdoorUnitId: "friedrich-wfpu17y483d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "friedrich-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-2",
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
      configurationId: "friedrich-standard-wall-single-cfg-3",
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
      configurationId: "friedrich-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12471,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-7",
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
      configurationId: "friedrich-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-10",
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
      configurationId: "friedrich-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-12",
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
      configurationId: "friedrich-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-14",
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
      configurationId: "friedrich-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-16",
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
      configurationId: "friedrich-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-premier-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-premier-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-1",
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
      configurationId: "friedrich-pro-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-3",
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
      configurationId: "friedrich-pro-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-12",
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
      configurationId: "friedrich-pro-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-14",
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
      configurationId: "friedrich-pro-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-breeze-central-ducted-cfg-1",
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
      configurationId: "friedrich-breeze-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-breeze-central-ducted-cfg-3",
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
      configurationId: "friedrich-breeze-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-breeze-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-1",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-2",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-3",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-4",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-5",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-6",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-7",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-8",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-9",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-10",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-11",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-12",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-13",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-14",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-15",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-16",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-17",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-18",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-19",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-20",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-21",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-22",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-23",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-24",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-25",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-26",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-27",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-28",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-29",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-30",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-31",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-32",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-33",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-34",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-35",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-36",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-37",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-38",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-39",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-40",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-41",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-42",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-43",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-44",
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
      configurationId: "friedrich-f-series-plus-central-ducted-cfg-45",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-1",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-2",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-3",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-4",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-5",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-6",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-7",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-8",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-9",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-10",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-11",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-12",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-13",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-14",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-15",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-16",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-17",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-18",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-19",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-20",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-21",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-f-series-central-ducted-cfg-23",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-24",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-25",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-26",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-27",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-28",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-29",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-30",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-31",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-32",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-33",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-34",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-35",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-36",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-37",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-38",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-39",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-40",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-41",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-42",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-43",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-44",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-f-series-central-ducted-cfg-46",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-47",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-48",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-49",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-50",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-51",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-52",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-53",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-54",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-55",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-56",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-57",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-58",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-59",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-60",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-61",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-62",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-63",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-64",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-65",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-66",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-67",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-68",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-69",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-70",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-71",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-72",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-73",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-74",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-75",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-76",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-77",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-78",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-79",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-80",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-81",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-82",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-83",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-84",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-85",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-86",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-87",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-88",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-89",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-90",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-91",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-92",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-93",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-94",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-95",
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
      configurationId: "friedrich-f-series-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-f-series-central-ducted-cfg-97",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-1",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-2",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-3",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-4",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-5",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-6",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-7",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-8",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-9",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-10",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-11",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-12",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-13",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-14",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-15",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-16",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-17",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-18",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-19",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-20",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-21",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-22",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-23",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-24",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-25",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-26",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-27",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-28",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-29",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-30",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-31",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-32",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-33",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-34",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-36",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-37",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-38",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-39",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-40",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-41",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-42",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-43",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-44",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-45",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-46",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-47",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-48",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-49",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-50",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-51",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-52",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-53",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-54",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-55",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-56",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-57",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-58",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-59",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-60",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-61",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-62",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-63",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-64",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-65",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-66",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-67",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-68",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-69",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-70",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-71",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-72",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-73",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-74",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-75",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-76",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-77",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-78",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-79",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-80",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-81",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-82",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-83",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-84",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-102",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-103",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-104",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-105",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-106",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-107",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-108",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-109",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-110",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-111",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-112",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-113",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-114",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-115",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-116",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-117",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-118",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-119",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-120",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-121",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-122",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-123",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-124",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-125",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-126",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-127",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-128",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-129",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-130",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-131",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-132",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-133",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-134",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-135",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-136",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-137",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-138",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-139",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-140",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-141",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-142",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-143",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-144",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-145",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-146",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-147",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-148",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-149",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-150",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-151",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-152",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-153",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-154",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-155",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-156",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-157",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-158",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-159",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-160",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-161",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-162",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-163",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-164",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-165",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-166",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-167",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-168",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-169",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-170",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-171",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-172",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-173",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-174",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-175",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-176",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-177",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-178",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-179",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-180",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-181",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-182",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-183",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-184",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-185",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-186",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-187",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-188",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-189",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-190",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-191",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-192",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-194",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-196",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-197",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-198",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-199",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-200",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-201",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-202",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-203",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-204",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-205",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-206",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-207",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-208",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-209",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-210",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-211",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-212",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-213",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-214",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-215",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-216",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-217",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-218",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-219",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-220",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-221",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-222",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-223",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-224",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-225",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-226",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-227",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-228",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-229",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-230",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-231",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-232",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-233",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-234",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-235",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-236",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-237",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-238",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-239",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-240",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-241",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-242",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-243",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-244",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-245",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-k-series-central-ducted-cfg-246",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-247",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-248",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-249",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-250",
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
      configurationId: "friedrich-k-series-central-ducted-cfg-251",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-select-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-select-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-pro-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-pro-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-pro-wall-single-cfg-3",
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
      configurationId: "friedrich-floating-air-pro-wall-single-cfg-4",
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
      configurationId: "friedrich-floating-air-pro-wall-single-cfg-5",
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
      configurationId: "friedrich-floating-air-pro-wall-single-cfg-6",
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
      configurationId: "friedrich-standard-central-ducted-cfg-1",
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
      configurationId: "friedrich-standard-central-ducted-cfg-2",
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
      configurationId: "friedrich-standard-central-ducted-cfg-3",
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
      configurationId: "friedrich-standard-central-ducted-cfg-4",
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
      configurationId: "friedrich-standard-central-ducted-cfg-5",
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
      configurationId: "friedrich-standard-central-ducted-cfg-6",
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
      configurationId: "friedrich-standard-central-ducted-cfg-7",
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
      configurationId: "friedrich-standard-central-ducted-cfg-8",
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
      configurationId: "friedrich-standard-central-ducted-cfg-9",
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
      configurationId: "friedrich-standard-central-ducted-cfg-10",
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
      configurationId: "friedrich-standard-central-ducted-cfg-11",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-3",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-4",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-8",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-9",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-cfg-10",
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
      configurationId: "friedrich-breeze-select-central-ducted-cfg-1",
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
      configurationId: "friedrich-breeze-select-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
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
