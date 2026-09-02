import type { BrandDataset } from "../../types";

export const slimairDataset: BrandDataset = {
  brand: {
    id: "slimair",
    slug: "slimair",
    name: "SLIMAIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "slimair-shc-series",
      slug: "slimair-shc-series",
      name: "SHC series",
      brandId: "slimair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard",
      slug: "slimair-standard",
      name: "Standard",
      brandId: "slimair",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series",
      slug: "slimair-shd-series",
      name: "SHD Series",
      brandId: "slimair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "slimair-shc-series-wall-single",
      slug: "slimair-shc-series-wall-single",
      name: "SHC series",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC series",
      normalizedModelNumber: "shc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 26.4,
      hspf2Min: 8.5,
      hspf2Max: 14.6,
      cop5FMin: 1.68,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single",
      slug: "slimair-standard-wall-single",
      name: "Standard",
      seriesId: "slimair-standard",
      brandId: "slimair",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
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
      id: "slimair-shd-series-wall-single",
      slug: "slimair-shd-series-wall-single",
      name: "SHD Series",
      seriesId: "slimair-shd-series",
      brandId: "slimair",
      modelNumber: "SHD Series",
      normalizedModelNumber: "shd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 15.8,
      seer2Max: 20.2,
      hspf2Min: 9.5,
      hspf2Max: 12,
      cop5FMin: 1.85,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted",
      slug: "slimair-shc-series-central-ducted",
      name: "SHC Series",
      seriesId: "slimair-shc-series",
      brandId: "slimair",
      modelNumber: "SHC Series",
      normalizedModelNumber: "shc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.4,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
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
      id: "slimair-shc09vc1ag",
      modelNumber: "SHC09VC1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09vc2ag",
      modelNumber: "SHC09VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18vc2ag",
      modelNumber: "SHC18VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ve1ag",
      modelNumber: "SHC09VE1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ve1ag",
      modelNumber: "SHC12VE1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ve2ag",
      modelNumber: "SHC09VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ve2ag",
      modelNumber: "SHC12VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ve2ag",
      modelNumber: "SHC18VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ve2ag",
      modelNumber: "SHC24VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shcd09vc2ag",
      modelNumber: "SHCD09VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shcd12vc2ag",
      modelNumber: "SHCD12VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shcd18vc2ag",
      modelNumber: "SHCD18VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shcd24vc2ag",
      modelNumber: "SHCD24VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc2z18vc2ag",
      modelNumber: "SHC2Z18VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc3z27vc2ag",
      modelNumber: "SHC3Z27VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc4z36vc2ag",
      modelNumber: "SHC4Z36VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z48vc2ag",
      modelNumber: "SHC5Z48VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09vh2ag",
      modelNumber: "SHC09VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12vh2ag",
      modelNumber: "SHC12VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18vh2ag",
      modelNumber: "SHC18VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24vh2ag",
      modelNumber: "SHC24VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc2z18ve2ag",
      modelNumber: "SHC2Z18VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc3z27ve2ag",
      modelNumber: "SHC3Z27VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc4z36ve2ag",
      modelNumber: "SHC4Z36VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z48ve2ag",
      modelNumber: "SHC5Z48VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z55ve2ag",
      modelNumber: "SHC5Z55VE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30vh2ag",
      modelNumber: "SHC30VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ac1ag",
      modelNumber: "SHC09AC1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ac2ag",
      modelNumber: "SHC09AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ac2ag",
      modelNumber: "SHC18AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ac2ag",
      modelNumber: "SHC24AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30ab2ab",
      modelNumber: "SHC30AB2AB",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ae1ag",
      modelNumber: "SHC09AE1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ae1ag",
      modelNumber: "SHC12AE1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ae2ag",
      modelNumber: "SHC09AE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ae2ag",
      modelNumber: "SHC12AE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ae2ag",
      modelNumber: "SHC18AE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ae2ag",
      modelNumber: "SHC24AE2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc09ah2ag",
      modelNumber: "SHC09AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ah2ag",
      modelNumber: "SHC12AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ah2ag",
      modelNumber: "SHC18AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ah2ag",
      modelNumber: "SHC24AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30ah2ag",
      modelNumber: "SHC30AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ah2ag",
      modelNumber: "SHC36AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48ah2ag",
      modelNumber: "SHC48AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc55ah2ag",
      modelNumber: "SHC55AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ac2ag",
      modelNumber: "SHC36AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48ac2ag",
      modelNumber: "SHC48AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc3z18ac2ag",
      modelNumber: "SHC3Z18AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc4z27ac2ag",
      modelNumber: "SHC4Z27AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z36ac2ag",
      modelNumber: "SHC5Z36AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc6z48ac2ag",
      modelNumber: "SHC6Z48AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc3z18ah2ag",
      modelNumber: "SHC3Z18AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc4z27ah2ag",
      modelNumber: "SHC4Z27AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z36ah2ag",
      modelNumber: "SHC5Z36AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc6z48ah2ag",
      modelNumber: "SHC6Z48AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc6z55ah2ag",
      modelNumber: "SHC6Z55AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc06ah2ag",
      modelNumber: "SHC06AH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12vc1ag",
      modelNumber: "SHC12VC1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12vc2ag",
      modelNumber: "SHC12VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24vc2ag",
      modelNumber: "SHC24VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36vb2ab",
      modelNumber: "SHC36VB2AB",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc5z55vc2ag",
      modelNumber: "SHC5Z55VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36vc2ag",
      modelNumber: "SHC36VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48vc2ag",
      modelNumber: "SHC48VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc60vc2ag",
      modelNumber: "SHC60VC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ac1ag",
      modelNumber: "SHC12AC1AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc12ac2ag",
      modelNumber: "SHC12AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ab2ab",
      modelNumber: "SHC36AB2AB",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc60ac2ag",
      modelNumber: "SHC60AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30ae224v",
      modelNumber: "SHC30AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc6z55ac2ag",
      modelNumber: "SHC6Z55AC2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36vh2ag",
      modelNumber: "SHC36VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48vh2ag",
      modelNumber: "SHC48VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc55vh2ag",
      modelNumber: "SHC55VH2AG",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ae224v",
      modelNumber: "SHC18AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ae224v",
      modelNumber: "SHC24AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ae224v",
      modelNumber: "SHC36AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48ae224v",
      modelNumber: "SHC48AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc60ae224v",
      modelNumber: "SHC60AE224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc18ah224v",
      modelNumber: "SHC18AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc24ah224v",
      modelNumber: "SHC24AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc30ah224v",
      modelNumber: "SHC30AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc36ah224v",
      modelNumber: "SHC36AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc48ah224v",
      modelNumber: "SHC48AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    },
    {
      id: "slimair-shc60ah224v",
      modelNumber: "SHC60AH224V",
      brandId: "slimair",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "slimair-shc-series-wall-single-cfg-1",
      slug: "slimair-shc-series-wall-single-cfg-1",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09vc1ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-2",
      slug: "slimair-shc-series-wall-single-cfg-2",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09vc2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-3",
      slug: "slimair-shc-series-wall-single-cfg-3",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18vc2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-4",
      slug: "slimair-shc-series-wall-single-cfg-4",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ve1ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-5",
      slug: "slimair-shc-series-wall-single-cfg-5",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ve1ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-6",
      slug: "slimair-shc-series-wall-single-cfg-6",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-7",
      slug: "slimair-shc-series-wall-single-cfg-7",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-8",
      slug: "slimair-shc-series-wall-single-cfg-8",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-9",
      slug: "slimair-shc-series-wall-single-cfg-9",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-10",
      slug: "slimair-shc-series-wall-single-cfg-10",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shcd09vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-11",
      slug: "slimair-shc-series-wall-single-cfg-11",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shcd12vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-12",
      slug: "slimair-shc-series-wall-single-cfg-12",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shcd18vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-13",
      slug: "slimair-shc-series-wall-single-cfg-13",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shcd24vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-14",
      slug: "slimair-shc-series-wall-single-cfg-14",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-15",
      slug: "slimair-shc-series-wall-single-cfg-15",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-16",
      slug: "slimair-shc-series-wall-single-cfg-16",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-17",
      slug: "slimair-shc-series-wall-single-cfg-17",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-18",
      slug: "slimair-shc-series-wall-single-cfg-18",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc2z18vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-19",
      slug: "slimair-shc-series-wall-single-cfg-19",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc2z18vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-20",
      slug: "slimair-shc-series-wall-single-cfg-20",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc2z18vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-21",
      slug: "slimair-shc-series-wall-single-cfg-21",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z27vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-22",
      slug: "slimair-shc-series-wall-single-cfg-22",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z27vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-23",
      slug: "slimair-shc-series-wall-single-cfg-23",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z27vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-24",
      slug: "slimair-shc-series-wall-single-cfg-24",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc4z36vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-25",
      slug: "slimair-shc-series-wall-single-cfg-25",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z48vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-26",
      slug: "slimair-shc-series-wall-single-cfg-26",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z48vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-27",
      slug: "slimair-shc-series-wall-single-cfg-27",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z48vc2ag",
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
      id: "slimair-shc-series-wall-single-cfg-28",
      slug: "slimair-shc-series-wall-single-cfg-28",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-29",
      slug: "slimair-shc-series-wall-single-cfg-29",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-30",
      slug: "slimair-shc-series-wall-single-cfg-30",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-31",
      slug: "slimair-shc-series-wall-single-cfg-31",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-32",
      slug: "slimair-shc-series-wall-single-cfg-32",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09vh2ag",
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
      id: "slimair-shc-series-wall-single-cfg-33",
      slug: "slimair-shc-series-wall-single-cfg-33",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12vh2ag",
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
      id: "slimair-shc-series-wall-single-cfg-34",
      slug: "slimair-shc-series-wall-single-cfg-34",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18vh2ag",
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
      id: "slimair-shc-series-wall-single-cfg-35",
      slug: "slimair-shc-series-wall-single-cfg-35",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24vh2ag",
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
      id: "slimair-shc-series-wall-single-cfg-36",
      slug: "slimair-shc-series-wall-single-cfg-36",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc2z18ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-37",
      slug: "slimair-shc-series-wall-single-cfg-37",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc2z18ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-38",
      slug: "slimair-shc-series-wall-single-cfg-38",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc2z18ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19.75,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-39",
      slug: "slimair-shc-series-wall-single-cfg-39",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z27ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.6,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-40",
      slug: "slimair-shc-series-wall-single-cfg-40",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z27ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-41",
      slug: "slimair-shc-series-wall-single-cfg-41",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z27ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.3,
      hspf2: 9.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-42",
      slug: "slimair-shc-series-wall-single-cfg-42",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc4z36ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-43",
      slug: "slimair-shc-series-wall-single-cfg-43",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc4z36ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-44",
      slug: "slimair-shc-series-wall-single-cfg-44",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z48ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-45",
      slug: "slimair-shc-series-wall-single-cfg-45",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z48ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-46",
      slug: "slimair-shc-series-wall-single-cfg-46",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z48ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.05,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-47",
      slug: "slimair-shc-series-wall-single-cfg-47",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z55ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-48",
      slug: "slimair-shc-series-wall-single-cfg-48",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z55ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-49",
      slug: "slimair-shc-series-wall-single-cfg-49",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z55ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 19.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-50",
      slug: "slimair-shc-series-wall-single-cfg-50",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc30vh2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-51",
      slug: "slimair-shc-series-wall-single-cfg-51",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-52",
      slug: "slimair-shc-series-wall-single-cfg-52",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ve2ag",
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
      id: "slimair-shc-series-wall-single-cfg-53",
      slug: "slimair-shc-series-wall-single-cfg-53",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-54",
      slug: "slimair-shc-series-wall-single-cfg-54",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-55",
      slug: "slimair-shc-series-wall-single-cfg-55",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09vh2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-56",
      slug: "slimair-shc-series-wall-single-cfg-56",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12vh2ag",
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
      id: "slimair-shc-series-wall-single-cfg-57",
      slug: "slimair-shc-series-wall-single-cfg-57",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18vh2ag",
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
      id: "slimair-shc-series-wall-single-cfg-58",
      slug: "slimair-shc-series-wall-single-cfg-58",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24vh2ag",
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
      id: "slimair-shc-series-wall-single-cfg-59",
      slug: "slimair-shc-series-wall-single-cfg-59",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18vh2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-60",
      slug: "slimair-shc-series-wall-single-cfg-60",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24vh2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-61",
      slug: "slimair-shc-series-wall-single-cfg-61",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ac1ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-62",
      slug: "slimair-shc-series-wall-single-cfg-62",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-63",
      slug: "slimair-shc-series-wall-single-cfg-63",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-64",
      slug: "slimair-shc-series-wall-single-cfg-64",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-65",
      slug: "slimair-shc-series-wall-single-cfg-65",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc30ab2ab",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-66",
      slug: "slimair-shc-series-wall-single-cfg-66",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ae1ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-67",
      slug: "slimair-shc-series-wall-single-cfg-67",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ae1ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.2,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-68",
      slug: "slimair-shc-series-wall-single-cfg-68",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ae2ag",
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
      id: "slimair-shc-series-wall-single-cfg-69",
      slug: "slimair-shc-series-wall-single-cfg-69",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-70",
      slug: "slimair-shc-series-wall-single-cfg-70",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-71",
      slug: "slimair-shc-series-wall-single-cfg-71",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-72",
      slug: "slimair-shc-series-wall-single-cfg-72",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-73",
      slug: "slimair-shc-series-wall-single-cfg-73",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-74",
      slug: "slimair-shc-series-wall-single-cfg-74",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-75",
      slug: "slimair-shc-series-wall-single-cfg-75",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-76",
      slug: "slimair-shc-series-wall-single-cfg-76",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc30ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-77",
      slug: "slimair-shc-series-wall-single-cfg-77",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-78",
      slug: "slimair-shc-series-wall-single-cfg-78",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-79",
      slug: "slimair-shc-series-wall-single-cfg-79",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-80",
      slug: "slimair-shc-series-wall-single-cfg-80",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-81",
      slug: "slimair-shc-series-wall-single-cfg-81",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc36ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-82",
      slug: "slimair-shc-series-wall-single-cfg-82",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc48ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-83",
      slug: "slimair-shc-series-wall-single-cfg-83",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc55ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-84",
      slug: "slimair-shc-series-wall-single-cfg-84",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-85",
      slug: "slimair-shc-series-wall-single-cfg-85",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-86",
      slug: "slimair-shc-series-wall-single-cfg-86",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-87",
      slug: "slimair-shc-series-wall-single-cfg-87",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-88",
      slug: "slimair-shc-series-wall-single-cfg-88",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc36ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-89",
      slug: "slimair-shc-series-wall-single-cfg-89",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc48ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-90",
      slug: "slimair-shc-series-wall-single-cfg-90",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-91",
      slug: "slimair-shc-series-wall-single-cfg-91",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.4,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-92",
      slug: "slimair-shc-series-wall-single-cfg-92",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc36ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36400,
      coolingCapacityMaxBtu: 36400,
      seer2: 20,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-93",
      slug: "slimair-shc-series-wall-single-cfg-93",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc48ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.5,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-94",
      slug: "slimair-shc-series-wall-single-cfg-94",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc55ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-95",
      slug: "slimair-shc-series-wall-single-cfg-95",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-96",
      slug: "slimair-shc-series-wall-single-cfg-96",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-97",
      slug: "slimair-shc-series-wall-single-cfg-97",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc36ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-98",
      slug: "slimair-shc-series-wall-single-cfg-98",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc48ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19.8,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-99",
      slug: "slimair-shc-series-wall-single-cfg-99",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-100",
      slug: "slimair-shc-series-wall-single-cfg-100",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-101",
      slug: "slimair-shc-series-wall-single-cfg-101",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-102",
      slug: "slimair-shc-series-wall-single-cfg-102",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-103",
      slug: "slimair-shc-series-wall-single-cfg-103",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc36ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36600,
      coolingCapacityMaxBtu: 36600,
      seer2: 21.2,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-104",
      slug: "slimair-shc-series-wall-single-cfg-104",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc48ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-105",
      slug: "slimair-shc-series-wall-single-cfg-105",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc09ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-106",
      slug: "slimair-shc-series-wall-single-cfg-106",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc12ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-107",
      slug: "slimair-shc-series-wall-single-cfg-107",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc18ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-108",
      slug: "slimair-shc-series-wall-single-cfg-108",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc24ae2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-109",
      slug: "slimair-shc-series-wall-single-cfg-109",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc36ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-110",
      slug: "slimair-shc-series-wall-single-cfg-110",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc48ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-111",
      slug: "slimair-shc-series-wall-single-cfg-111",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z18ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-112",
      slug: "slimair-shc-series-wall-single-cfg-112",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z18ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-113",
      slug: "slimair-shc-series-wall-single-cfg-113",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z18ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-114",
      slug: "slimair-shc-series-wall-single-cfg-114",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc4z27ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-115",
      slug: "slimair-shc-series-wall-single-cfg-115",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc4z27ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-116",
      slug: "slimair-shc-series-wall-single-cfg-116",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc4z27ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-117",
      slug: "slimair-shc-series-wall-single-cfg-117",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z36ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-118",
      slug: "slimair-shc-series-wall-single-cfg-118",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z36ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-119",
      slug: "slimair-shc-series-wall-single-cfg-119",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z36ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 21.55,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-120",
      slug: "slimair-shc-series-wall-single-cfg-120",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc6z48ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-121",
      slug: "slimair-shc-series-wall-single-cfg-121",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc6z48ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-122",
      slug: "slimair-shc-series-wall-single-cfg-122",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc6z48ac2ag",
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
      id: "slimair-shc-series-wall-single-cfg-123",
      slug: "slimair-shc-series-wall-single-cfg-123",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z18ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-124",
      slug: "slimair-shc-series-wall-single-cfg-124",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z18ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-125",
      slug: "slimair-shc-series-wall-single-cfg-125",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc3z18ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-126",
      slug: "slimair-shc-series-wall-single-cfg-126",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc4z27ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-127",
      slug: "slimair-shc-series-wall-single-cfg-127",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc4z27ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-128",
      slug: "slimair-shc-series-wall-single-cfg-128",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc4z27ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 20,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-129",
      slug: "slimair-shc-series-wall-single-cfg-129",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z36ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-130",
      slug: "slimair-shc-series-wall-single-cfg-130",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z36ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-131",
      slug: "slimair-shc-series-wall-single-cfg-131",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc5z36ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.45,
      hspf2: 10.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-132",
      slug: "slimair-shc-series-wall-single-cfg-132",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc6z48ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-133",
      slug: "slimair-shc-series-wall-single-cfg-133",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc6z48ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-134",
      slug: "slimair-shc-series-wall-single-cfg-134",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc6z48ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 20.8,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-135",
      slug: "slimair-shc-series-wall-single-cfg-135",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc6z55ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 21.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-136",
      slug: "slimair-shc-series-wall-single-cfg-136",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc6z55ah2ag",
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
      id: "slimair-shc-series-wall-single-cfg-137",
      slug: "slimair-shc-series-wall-single-cfg-137",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc6z55ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 20.7,
      hspf2: 10.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-wall-single-cfg-138",
      slug: "slimair-shc-series-wall-single-cfg-138",
      modelId: "slimair-shc-series-wall-single",
      outdoorUnitId: "slimair-shc06ah2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-cfg-1",
      slug: "slimair-standard-wall-single-cfg-1",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc12vc1ag",
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
      id: "slimair-standard-wall-single-cfg-2",
      slug: "slimair-standard-wall-single-cfg-2",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc12vc2ag",
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
      id: "slimair-standard-wall-single-cfg-3",
      slug: "slimair-standard-wall-single-cfg-3",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc24vc2ag",
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
      id: "slimair-standard-wall-single-cfg-4",
      slug: "slimair-standard-wall-single-cfg-4",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc36vb2ab",
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
      id: "slimair-standard-wall-single-cfg-5",
      slug: "slimair-standard-wall-single-cfg-5",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc5z55vc2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-cfg-6",
      slug: "slimair-standard-wall-single-cfg-6",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc5z55vc2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-cfg-7",
      slug: "slimair-standard-wall-single-cfg-7",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc36vc2ag",
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
      id: "slimair-standard-wall-single-cfg-8",
      slug: "slimair-standard-wall-single-cfg-8",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc48vc2ag",
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
      id: "slimair-standard-wall-single-cfg-9",
      slug: "slimair-standard-wall-single-cfg-9",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc60vc2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 59000,
      coolingCapacityMaxBtu: 59000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-cfg-10",
      slug: "slimair-standard-wall-single-cfg-10",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc12ac1ag",
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
      id: "slimair-standard-wall-single-cfg-11",
      slug: "slimair-standard-wall-single-cfg-11",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc12ac2ag",
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
      id: "slimair-standard-wall-single-cfg-12",
      slug: "slimair-standard-wall-single-cfg-12",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc36ab2ab",
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
      id: "slimair-standard-wall-single-cfg-13",
      slug: "slimair-standard-wall-single-cfg-13",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc60ac2ag",
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
      id: "slimair-standard-wall-single-cfg-14",
      slug: "slimair-standard-wall-single-cfg-14",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc60ac2ag",
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
      id: "slimair-standard-wall-single-cfg-15",
      slug: "slimair-standard-wall-single-cfg-15",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc30ae224v",
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
      id: "slimair-standard-wall-single-cfg-16",
      slug: "slimair-standard-wall-single-cfg-16",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc6z55ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-cfg-17",
      slug: "slimair-standard-wall-single-cfg-17",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc6z55ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-standard-wall-single-cfg-18",
      slug: "slimair-standard-wall-single-cfg-18",
      modelId: "slimair-standard-wall-single",
      outdoorUnitId: "slimair-shc6z55ac2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-cfg-1",
      slug: "slimair-shd-series-wall-single-cfg-1",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc09ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-cfg-2",
      slug: "slimair-shd-series-wall-single-cfg-2",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc12ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-cfg-3",
      slug: "slimair-shd-series-wall-single-cfg-3",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc18ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-cfg-4",
      slug: "slimair-shd-series-wall-single-cfg-4",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc24ve2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-cfg-5",
      slug: "slimair-shd-series-wall-single-cfg-5",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc09vh2ag",
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
      id: "slimair-shd-series-wall-single-cfg-6",
      slug: "slimair-shd-series-wall-single-cfg-6",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc12vh2ag",
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
      id: "slimair-shd-series-wall-single-cfg-7",
      slug: "slimair-shd-series-wall-single-cfg-7",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc18vh2ag",
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
      id: "slimair-shd-series-wall-single-cfg-8",
      slug: "slimair-shd-series-wall-single-cfg-8",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc24vh2ag",
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
      id: "slimair-shd-series-wall-single-cfg-9",
      slug: "slimair-shd-series-wall-single-cfg-9",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc36vh2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-cfg-10",
      slug: "slimair-shd-series-wall-single-cfg-10",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc48vh2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shd-series-wall-single-cfg-11",
      slug: "slimair-shd-series-wall-single-cfg-11",
      modelId: "slimair-shd-series-wall-single",
      outdoorUnitId: "slimair-shc55vh2ag",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-cfg-1",
      slug: "slimair-shc-series-central-ducted-cfg-1",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc18ae224v",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-cfg-2",
      slug: "slimair-shc-series-central-ducted-cfg-2",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc24ae224v",
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
      id: "slimair-shc-series-central-ducted-cfg-3",
      slug: "slimair-shc-series-central-ducted-cfg-3",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc36ae224v",
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
      id: "slimair-shc-series-central-ducted-cfg-4",
      slug: "slimair-shc-series-central-ducted-cfg-4",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc48ae224v",
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
      id: "slimair-shc-series-central-ducted-cfg-5",
      slug: "slimair-shc-series-central-ducted-cfg-5",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc60ae224v",
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
      id: "slimair-shc-series-central-ducted-cfg-6",
      slug: "slimair-shc-series-central-ducted-cfg-6",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc18ah224v",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "slimair-shc-series-central-ducted-cfg-7",
      slug: "slimair-shc-series-central-ducted-cfg-7",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc24ah224v",
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
      id: "slimair-shc-series-central-ducted-cfg-8",
      slug: "slimair-shc-series-central-ducted-cfg-8",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc30ah224v",
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
      id: "slimair-shc-series-central-ducted-cfg-9",
      slug: "slimair-shc-series-central-ducted-cfg-9",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc36ah224v",
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
      id: "slimair-shc-series-central-ducted-cfg-10",
      slug: "slimair-shc-series-central-ducted-cfg-10",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc48ah224v",
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
      id: "slimair-shc-series-central-ducted-cfg-11",
      slug: "slimair-shc-series-central-ducted-cfg-11",
      modelId: "slimair-shc-series-central-ducted",
      outdoorUnitId: "slimair-shc60ah224v",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "slimair-shc-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.41,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-10",
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
      configurationId: "slimair-shc-series-wall-single-cfg-11",
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
      configurationId: "slimair-shc-series-wall-single-cfg-12",
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
      configurationId: "slimair-shc-series-wall-single-cfg-13",
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
      configurationId: "slimair-shc-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.41,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-18",
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
      configurationId: "slimair-shc-series-wall-single-cfg-19",
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
      configurationId: "slimair-shc-series-wall-single-cfg-20",
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
      configurationId: "slimair-shc-series-wall-single-cfg-21",
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
      configurationId: "slimair-shc-series-wall-single-cfg-22",
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
      configurationId: "slimair-shc-series-wall-single-cfg-23",
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
      configurationId: "slimair-shc-series-wall-single-cfg-24",
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
      configurationId: "slimair-shc-series-wall-single-cfg-25",
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
      configurationId: "slimair-shc-series-wall-single-cfg-26",
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
      configurationId: "slimair-shc-series-wall-single-cfg-27",
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
      configurationId: "slimair-shc-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-31",
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
      configurationId: "slimair-shc-series-wall-single-cfg-32",
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
      configurationId: "slimair-shc-series-wall-single-cfg-33",
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
      configurationId: "slimair-shc-series-wall-single-cfg-34",
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
      configurationId: "slimair-shc-series-wall-single-cfg-35",
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
      configurationId: "slimair-shc-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-48",
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
      configurationId: "slimair-shc-series-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-52",
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
      configurationId: "slimair-shc-series-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-56",
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
      configurationId: "slimair-shc-series-wall-single-cfg-57",
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
      configurationId: "slimair-shc-series-wall-single-cfg-58",
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
      configurationId: "slimair-shc-series-wall-single-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-62",
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
      configurationId: "slimair-shc-series-wall-single-cfg-63",
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
      configurationId: "slimair-shc-series-wall-single-cfg-64",
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
      configurationId: "slimair-shc-series-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-72",
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
      configurationId: "slimair-shc-series-wall-single-cfg-73",
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
      configurationId: "slimair-shc-series-wall-single-cfg-74",
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
      configurationId: "slimair-shc-series-wall-single-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-77",
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
      configurationId: "slimair-shc-series-wall-single-cfg-78",
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
      configurationId: "slimair-shc-series-wall-single-cfg-79",
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
      configurationId: "slimair-shc-series-wall-single-cfg-80",
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
      configurationId: "slimair-shc-series-wall-single-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-83",
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
      configurationId: "slimair-shc-series-wall-single-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-99",
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
      configurationId: "slimair-shc-series-wall-single-cfg-100",
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
      configurationId: "slimair-shc-series-wall-single-cfg-101",
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
      configurationId: "slimair-shc-series-wall-single-cfg-102",
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
      configurationId: "slimair-shc-series-wall-single-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-107",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-110",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-113",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-114",
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
      configurationId: "slimair-shc-series-wall-single-cfg-115",
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
      configurationId: "slimair-shc-series-wall-single-cfg-116",
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
      configurationId: "slimair-shc-series-wall-single-cfg-117",
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
      configurationId: "slimair-shc-series-wall-single-cfg-118",
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
      configurationId: "slimair-shc-series-wall-single-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-120",
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
      configurationId: "slimair-shc-series-wall-single-cfg-121",
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
      configurationId: "slimair-shc-series-wall-single-cfg-122",
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
      configurationId: "slimair-shc-series-wall-single-cfg-123",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-124",
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
      configurationId: "slimair-shc-series-wall-single-cfg-125",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-126",
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
      configurationId: "slimair-shc-series-wall-single-cfg-127",
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
      configurationId: "slimair-shc-series-wall-single-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-130",
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
      configurationId: "slimair-shc-series-wall-single-cfg-131",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-133",
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
      configurationId: "slimair-shc-series-wall-single-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-136",
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
      configurationId: "slimair-shc-series-wall-single-cfg-137",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-wall-single-cfg-138",
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
      configurationId: "slimair-standard-wall-single-cfg-1",
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
      configurationId: "slimair-standard-wall-single-cfg-2",
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
      configurationId: "slimair-standard-wall-single-cfg-3",
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
      configurationId: "slimair-standard-wall-single-cfg-4",
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
      configurationId: "slimair-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-standard-wall-single-cfg-7",
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
      configurationId: "slimair-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-standard-wall-single-cfg-10",
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
      configurationId: "slimair-standard-wall-single-cfg-11",
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
      configurationId: "slimair-standard-wall-single-cfg-12",
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
      configurationId: "slimair-standard-wall-single-cfg-13",
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
      configurationId: "slimair-standard-wall-single-cfg-14",
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
      configurationId: "slimair-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-standard-wall-single-cfg-16",
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
      configurationId: "slimair-standard-wall-single-cfg-17",
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
      configurationId: "slimair-standard-wall-single-cfg-18",
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
      configurationId: "slimair-shd-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shd-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shd-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shd-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shd-series-wall-single-cfg-5",
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
      configurationId: "slimair-shd-series-wall-single-cfg-6",
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
      configurationId: "slimair-shd-series-wall-single-cfg-7",
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
      configurationId: "slimair-shd-series-wall-single-cfg-8",
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
      configurationId: "slimair-shd-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shd-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shd-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-central-ducted-cfg-2",
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
      configurationId: "slimair-shc-series-central-ducted-cfg-3",
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
      configurationId: "slimair-shc-series-central-ducted-cfg-4",
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
      configurationId: "slimair-shc-series-central-ducted-cfg-5",
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
      configurationId: "slimair-shc-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "slimair-shc-series-central-ducted-cfg-7",
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
      configurationId: "slimair-shc-series-central-ducted-cfg-8",
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
      configurationId: "slimair-shc-series-central-ducted-cfg-9",
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
      configurationId: "slimair-shc-series-central-ducted-cfg-10",
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
      configurationId: "slimair-shc-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
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
