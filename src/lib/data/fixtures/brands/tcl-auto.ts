import type { BrandDataset } from "../../types";

export const tclDataset: BrandDataset = {
  brand: {
    id: "tcl",
    slug: "tcl",
    name: "TCL",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "tcl-t-pro",
      slug: "tcl-t-pro",
      name: "T-Pro",
      brandId: "tcl",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-elite",
      slug: "tcl-elite",
      name: "Elite",
      brandId: "tcl",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1",
      slug: "tcl-ts1",
      name: "TS1",
      brandId: "tcl",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-standard",
      slug: "tcl-standard",
      name: "Standard",
      brandId: "tcl",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein",
      slug: "tcl-breezein",
      name: "BREEZEIN",
      brandId: "tcl",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-mulit-zone",
      slug: "tcl-mulit-zone",
      name: "MULIT ZONE",
      brandId: "tcl",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ivs-18",
      slug: "tcl-ivs-18",
      name: "IVS 18",
      brandId: "tcl",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-exheat",
      slug: "tcl-exheat",
      name: "EXHEAT",
      brandId: "tcl",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-freshin",
      slug: "tcl-freshin",
      name: "FreshIn",
      brandId: "tcl",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-celling-floor-single",
      slug: "tcl-celling-floor-single",
      name: "CELLING FLOOR-single",
      brandId: "tcl",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "tcl-t-pro-wall-single",
      slug: "tcl-t-pro-wall-single",
      name: "T-Pro",
      seriesId: "tcl-t-pro",
      brandId: "tcl",
      modelNumber: "T-Pro",
      normalizedModelNumber: "t-pro",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 5800,
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
    },
    {
      id: "tcl-elite-wall-single",
      slug: "tcl-elite-wall-single",
      name: "Elite",
      seriesId: "tcl-elite",
      brandId: "tcl",
      modelNumber: "Elite",
      normalizedModelNumber: "elite",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 19,
      seer2Max: 22,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1-central-ducted",
      slug: "tcl-ts1-central-ducted",
      name: "TS1",
      seriesId: "tcl-ts1",
      brandId: "tcl",
      modelNumber: "TS1",
      normalizedModelNumber: "ts1",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 8.1,
      hspf2Max: 8.5,
      cop5FMin: 1.75,
      cop5FMax: 1.94,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-standard-wall-single",
      slug: "tcl-standard-wall-single",
      name: "Standard",
      seriesId: "tcl-standard",
      brandId: "tcl",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6200,
      heatingCapacity5FMaxBtu: 21800,
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
      id: "tcl-breezein-wall-single",
      slug: "tcl-breezein-wall-single",
      name: "BREEZEIN",
      seriesId: "tcl-breezein",
      brandId: "tcl",
      modelNumber: "BREEZEIN",
      normalizedModelNumber: "breezein",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 15300,
      seer2Min: 19,
      seer2Max: 24,
      hspf2Min: 8.4,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-mulit-zone-wall-single",
      slug: "tcl-mulit-zone-wall-single",
      name: "MULIT ZONE",
      seriesId: "tcl-mulit-zone",
      brandId: "tcl",
      modelNumber: "MULIT ZONE",
      normalizedModelNumber: "mulit-zone",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 17400,
      heatingCapacity5FMaxBtu: 29400,
      seer2Min: 19.5,
      seer2Max: 24,
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
      id: "tcl-ivs-18-central-ducted",
      slug: "tcl-ivs-18-central-ducted",
      name: "IVS 18",
      seriesId: "tcl-ivs-18",
      brandId: "tcl",
      modelNumber: "IVS 18",
      normalizedModelNumber: "ivs-18",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.2,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-exheat-wall-single",
      slug: "tcl-exheat-wall-single",
      name: "EXHEAT",
      seriesId: "tcl-exheat",
      brandId: "tcl",
      modelNumber: "EXHEAT",
      normalizedModelNumber: "exheat",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 15500,
      seer2Min: 23,
      seer2Max: 25,
      hspf2Min: 10,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-freshin-wall-single",
      slug: "tcl-freshin-wall-single",
      name: "FreshIn",
      seriesId: "tcl-freshin",
      brandId: "tcl",
      modelNumber: "FreshIn",
      normalizedModelNumber: "freshin",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 8000,
      seer2Min: 24,
      seer2Max: 24,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-celling-floor-single-wall-single",
      slug: "tcl-celling-floor-single-wall-single",
      name: "CELLING FLOOR-single",
      seriesId: "tcl-celling-floor-single",
      brandId: "tcl",
      modelNumber: "CELLING FLOOR-single",
      normalizedModelNumber: "celling-floor-single",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 22200,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 14400,
      seer2Min: 20,
      seer2Max: 20.5,
      hspf2Min: 9,
      hspf2Max: 9.5,
      cop5FMin: 1.85,
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
      id: "tcl-tsc-09ha1-i3ti22",
      modelNumber: "TSC-09HA1/I3TI22",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsc-12ha1-i3ti22",
      modelNumber: "TSC-12HA1/I3TI22",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsc-09ha2-i3ti23",
      modelNumber: "TSC-09HA2/I3TI23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsc-12ha2-i3ti23",
      modelNumber: "TSC-12HA2/I3TI23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsc-18ha2-i3ti21",
      modelNumber: "TSC-18HA2/I3TI21",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsc-24ha2-i3ti20",
      modelNumber: "TSC-24HA2/I3TI20",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsh09hdi1nan0t23",
      modelNumber: "TSH09HDI1NAN0T23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsh12hdi1nan0t23",
      modelNumber: "TSH12HDI1NAN0T23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tum-18ha2-i2i22-21es",
      modelNumber: "TUM-18HA2/I2I22-21ES",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tum-27ha2-i2i21-21es",
      modelNumber: "TUM-27HA2/I2I21-21ES",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tum-36ha2-i2i21-21es",
      modelNumber: "TUM-36HA2/I2I21-21ES",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h09seh19bac",
      modelNumber: "H09SEH19BAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h09seh19xac",
      modelNumber: "H09SEH19XAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-thh24hai2naf2u23",
      modelNumber: "THH24HAI2NAF2U23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-thh36hai2naf2u23",
      modelNumber: "THH36HAI2NAF2U23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-thh48hai2naf2u23",
      modelNumber: "THH48HAI2NAF2U23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-thh60hai2naf2u23",
      modelNumber: "THH60HAI2NAF2U23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-thh18hai2naf2u23",
      modelNumber: "THH18HAI2NAF2U23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-thh30hai2naf2u23",
      modelNumber: "THH30HAI2NAF2U23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-thh42hai2naf2u23",
      modelNumber: "THH42HAI2NAF2U23",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsh09hei1naj0t24",
      modelNumber: "TSH09HEI1NAJ0T24",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsh12hei2naj0t24",
      modelNumber: "TSH12HEI2NAJ0T24",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsh18hei2naj0t24",
      modelNumber: "TSH18HEI2NAJ0T24",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsh24hei2naj0t24",
      modelNumber: "TSH24HEI2NAJ0T24",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h12seh19bac",
      modelNumber: "H12SEH19BAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h12seh19xac",
      modelNumber: "H12SEH19XAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h18seh19xac",
      modelNumber: "H18SEH19XAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h24seh19xac",
      modelNumber: "H24SEH19XAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h36seh19xac",
      modelNumber: "H36SEH19XAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsh17hei2nal0x24",
      modelNumber: "TSH17HEI2NAL0X24",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-tsh22hei2nal0x24",
      modelNumber: "TSH22HEI2NAL0X24",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h09sbh23bpc",
      modelNumber: "H09SBH23BPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h12sbh22bpc",
      modelNumber: "H12SBH22BPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h09sbh23xpc",
      modelNumber: "H09SBH23XPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h12sbh23xpc",
      modelNumber: "H12SBH23XPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h18sbh22xpc",
      modelNumber: "H18SBH22XPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h24sbh20xpc",
      modelNumber: "H24SBH20XPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h18fmh22xpc",
      modelNumber: "H18FMH22XPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h27fmh22xpc",
      modelNumber: "H27FMH22XPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h36fmh21xpc",
      modelNumber: "H36FMH21XPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h42fmh20xpc",
      modelNumber: "H42FMH20XPC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h36tdh18xac",
      modelNumber: "H36TDH18XAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h60tdh16xac",
      modelNumber: "H60TDH16XAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h48tdh18xac",
      modelNumber: "H48TDH18XAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h24tdh17xac",
      modelNumber: "H24TDH17XAC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h09suh25xgc",
      modelNumber: "H09SUH25XGC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h12suh25xgc",
      modelNumber: "H12SUH25XGC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h18suh23xgc",
      modelNumber: "H18SUH23XGC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h24suh23xgc",
      modelNumber: "H24SUH23XGC",
      brandId: "tcl",
      refrigerant: null as any,
    },
    {
      id: "tcl-h12sfh25xpc",
      modelNumber: "H12SFH25XPC",
      brandId: "tcl",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "tcl-t-pro-wall-single-cfg-1",
      slug: "tcl-t-pro-wall-single-cfg-1",
      modelId: "tcl-t-pro-wall-single",
      outdoorUnitId: "tcl-tsc-09ha1-i3ti22",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-t-pro-wall-single-cfg-2",
      slug: "tcl-t-pro-wall-single-cfg-2",
      modelId: "tcl-t-pro-wall-single",
      outdoorUnitId: "tcl-tsc-12ha1-i3ti22",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-t-pro-wall-single-cfg-3",
      slug: "tcl-t-pro-wall-single-cfg-3",
      modelId: "tcl-t-pro-wall-single",
      outdoorUnitId: "tcl-tsc-09ha2-i3ti23",
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
      id: "tcl-t-pro-wall-single-cfg-4",
      slug: "tcl-t-pro-wall-single-cfg-4",
      modelId: "tcl-t-pro-wall-single",
      outdoorUnitId: "tcl-tsc-12ha2-i3ti23",
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
      id: "tcl-t-pro-wall-single-cfg-5",
      slug: "tcl-t-pro-wall-single-cfg-5",
      modelId: "tcl-t-pro-wall-single",
      outdoorUnitId: "tcl-tsc-18ha2-i3ti21",
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
      id: "tcl-t-pro-wall-single-cfg-6",
      slug: "tcl-t-pro-wall-single-cfg-6",
      modelId: "tcl-t-pro-wall-single",
      outdoorUnitId: "tcl-tsc-24ha2-i3ti20",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-t-pro-wall-single-cfg-7",
      slug: "tcl-t-pro-wall-single-cfg-7",
      modelId: "tcl-t-pro-wall-single",
      outdoorUnitId: "tcl-tsh09hdi1nan0t23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-t-pro-wall-single-cfg-8",
      slug: "tcl-t-pro-wall-single-cfg-8",
      modelId: "tcl-t-pro-wall-single",
      outdoorUnitId: "tcl-tsh12hdi1nan0t23",
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
      id: "tcl-elite-wall-single-cfg-1",
      slug: "tcl-elite-wall-single-cfg-1",
      modelId: "tcl-elite-wall-single",
      outdoorUnitId: "tcl-tum-18ha2-i2i22-21es",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-elite-wall-single-cfg-2",
      slug: "tcl-elite-wall-single-cfg-2",
      modelId: "tcl-elite-wall-single",
      outdoorUnitId: "tcl-tum-27ha2-i2i21-21es",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-elite-wall-single-cfg-3",
      slug: "tcl-elite-wall-single-cfg-3",
      modelId: "tcl-elite-wall-single",
      outdoorUnitId: "tcl-tum-36ha2-i2i21-21es",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-elite-wall-single-cfg-4",
      slug: "tcl-elite-wall-single-cfg-4",
      modelId: "tcl-elite-wall-single",
      outdoorUnitId: "tcl-h09seh19bac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-elite-wall-single-cfg-5",
      slug: "tcl-elite-wall-single-cfg-5",
      modelId: "tcl-elite-wall-single",
      outdoorUnitId: "tcl-h09seh19xac",
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
      id: "tcl-ts1-central-ducted-cfg-1",
      slug: "tcl-ts1-central-ducted-cfg-1",
      modelId: "tcl-ts1-central-ducted",
      outdoorUnitId: "tcl-thh24hai2naf2u23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1-central-ducted-cfg-2",
      slug: "tcl-ts1-central-ducted-cfg-2",
      modelId: "tcl-ts1-central-ducted",
      outdoorUnitId: "tcl-thh36hai2naf2u23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1-central-ducted-cfg-3",
      slug: "tcl-ts1-central-ducted-cfg-3",
      modelId: "tcl-ts1-central-ducted",
      outdoorUnitId: "tcl-thh48hai2naf2u23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1-central-ducted-cfg-4",
      slug: "tcl-ts1-central-ducted-cfg-4",
      modelId: "tcl-ts1-central-ducted",
      outdoorUnitId: "tcl-thh60hai2naf2u23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1-central-ducted-cfg-5",
      slug: "tcl-ts1-central-ducted-cfg-5",
      modelId: "tcl-ts1-central-ducted",
      outdoorUnitId: "tcl-thh18hai2naf2u23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1-central-ducted-cfg-6",
      slug: "tcl-ts1-central-ducted-cfg-6",
      modelId: "tcl-ts1-central-ducted",
      outdoorUnitId: "tcl-thh30hai2naf2u23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1-central-ducted-cfg-7",
      slug: "tcl-ts1-central-ducted-cfg-7",
      modelId: "tcl-ts1-central-ducted",
      outdoorUnitId: "tcl-thh42hai2naf2u23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1-central-ducted-cfg-8",
      slug: "tcl-ts1-central-ducted-cfg-8",
      modelId: "tcl-ts1-central-ducted",
      outdoorUnitId: "tcl-thh48hai2naf2u23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ts1-central-ducted-cfg-9",
      slug: "tcl-ts1-central-ducted-cfg-9",
      modelId: "tcl-ts1-central-ducted",
      outdoorUnitId: "tcl-thh42hai2naf2u23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-standard-wall-single-cfg-1",
      slug: "tcl-standard-wall-single-cfg-1",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-tsh09hei1naj0t24",
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
      id: "tcl-standard-wall-single-cfg-2",
      slug: "tcl-standard-wall-single-cfg-2",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-tsh12hei2naj0t24",
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
      id: "tcl-standard-wall-single-cfg-3",
      slug: "tcl-standard-wall-single-cfg-3",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-tsh18hei2naj0t24",
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
      id: "tcl-standard-wall-single-cfg-4",
      slug: "tcl-standard-wall-single-cfg-4",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-tsh24hei2naj0t24",
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
      id: "tcl-standard-wall-single-cfg-5",
      slug: "tcl-standard-wall-single-cfg-5",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-h12seh19bac",
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
      id: "tcl-standard-wall-single-cfg-6",
      slug: "tcl-standard-wall-single-cfg-6",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-h12seh19xac",
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
      id: "tcl-standard-wall-single-cfg-7",
      slug: "tcl-standard-wall-single-cfg-7",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-h18seh19xac",
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
      id: "tcl-standard-wall-single-cfg-8",
      slug: "tcl-standard-wall-single-cfg-8",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-h24seh19xac",
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
      id: "tcl-standard-wall-single-cfg-9",
      slug: "tcl-standard-wall-single-cfg-9",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-h36seh19xac",
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
      id: "tcl-standard-wall-single-cfg-10",
      slug: "tcl-standard-wall-single-cfg-10",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-tsh17hei2nal0x24",
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
      id: "tcl-standard-wall-single-cfg-11",
      slug: "tcl-standard-wall-single-cfg-11",
      modelId: "tcl-standard-wall-single",
      outdoorUnitId: "tcl-tsh22hei2nal0x24",
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
      id: "tcl-breezein-wall-single-cfg-1",
      slug: "tcl-breezein-wall-single-cfg-1",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h09sbh23bpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-2",
      slug: "tcl-breezein-wall-single-cfg-2",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h12sbh22bpc",
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
      id: "tcl-breezein-wall-single-cfg-3",
      slug: "tcl-breezein-wall-single-cfg-3",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h09sbh23xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-4",
      slug: "tcl-breezein-wall-single-cfg-4",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h12sbh23xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-5",
      slug: "tcl-breezein-wall-single-cfg-5",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h18sbh22xpc",
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
      id: "tcl-breezein-wall-single-cfg-6",
      slug: "tcl-breezein-wall-single-cfg-6",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h24sbh20xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-7",
      slug: "tcl-breezein-wall-single-cfg-7",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h09sbh23xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9500,
      coolingCapacityMaxBtu: 9500,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-8",
      slug: "tcl-breezein-wall-single-cfg-8",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h09sbh23xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9500,
      coolingCapacityMaxBtu: 9500,
      seer2: 19.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-9",
      slug: "tcl-breezein-wall-single-cfg-9",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h12sbh23xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-10",
      slug: "tcl-breezein-wall-single-cfg-10",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h12sbh23xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11000,
      coolingCapacityMaxBtu: 11000,
      seer2: 19,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-11",
      slug: "tcl-breezein-wall-single-cfg-11",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h18sbh22xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-12",
      slug: "tcl-breezein-wall-single-cfg-12",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h18sbh22xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-13",
      slug: "tcl-breezein-wall-single-cfg-13",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h24sbh20xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-breezein-wall-single-cfg-14",
      slug: "tcl-breezein-wall-single-cfg-14",
      modelId: "tcl-breezein-wall-single",
      outdoorUnitId: "tcl-h24sbh20xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-mulit-zone-wall-single-cfg-1",
      slug: "tcl-mulit-zone-wall-single-cfg-1",
      modelId: "tcl-mulit-zone-wall-single",
      outdoorUnitId: "tcl-h18fmh22xpc",
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
      id: "tcl-mulit-zone-wall-single-cfg-2",
      slug: "tcl-mulit-zone-wall-single-cfg-2",
      modelId: "tcl-mulit-zone-wall-single",
      outdoorUnitId: "tcl-h27fmh22xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-mulit-zone-wall-single-cfg-3",
      slug: "tcl-mulit-zone-wall-single-cfg-3",
      modelId: "tcl-mulit-zone-wall-single",
      outdoorUnitId: "tcl-h36fmh21xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 22.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-mulit-zone-wall-single-cfg-4",
      slug: "tcl-mulit-zone-wall-single-cfg-4",
      modelId: "tcl-mulit-zone-wall-single",
      outdoorUnitId: "tcl-h42fmh20xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-mulit-zone-wall-single-cfg-5",
      slug: "tcl-mulit-zone-wall-single-cfg-5",
      modelId: "tcl-mulit-zone-wall-single",
      outdoorUnitId: "tcl-h18fmh22xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-mulit-zone-wall-single-cfg-6",
      slug: "tcl-mulit-zone-wall-single-cfg-6",
      modelId: "tcl-mulit-zone-wall-single",
      outdoorUnitId: "tcl-h27fmh22xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-mulit-zone-wall-single-cfg-7",
      slug: "tcl-mulit-zone-wall-single-cfg-7",
      modelId: "tcl-mulit-zone-wall-single",
      outdoorUnitId: "tcl-h36fmh21xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-mulit-zone-wall-single-cfg-8",
      slug: "tcl-mulit-zone-wall-single-cfg-8",
      modelId: "tcl-mulit-zone-wall-single",
      outdoorUnitId: "tcl-h42fmh20xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 19.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ivs-18-central-ducted-cfg-1",
      slug: "tcl-ivs-18-central-ducted-cfg-1",
      modelId: "tcl-ivs-18-central-ducted",
      outdoorUnitId: "tcl-h36tdh18xac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ivs-18-central-ducted-cfg-2",
      slug: "tcl-ivs-18-central-ducted-cfg-2",
      modelId: "tcl-ivs-18-central-ducted",
      outdoorUnitId: "tcl-h60tdh16xac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 17,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ivs-18-central-ducted-cfg-3",
      slug: "tcl-ivs-18-central-ducted-cfg-3",
      modelId: "tcl-ivs-18-central-ducted",
      outdoorUnitId: "tcl-h48tdh18xac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-ivs-18-central-ducted-cfg-4",
      slug: "tcl-ivs-18-central-ducted-cfg-4",
      modelId: "tcl-ivs-18-central-ducted",
      outdoorUnitId: "tcl-h36tdh18xac",
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
      id: "tcl-ivs-18-central-ducted-cfg-5",
      slug: "tcl-ivs-18-central-ducted-cfg-5",
      modelId: "tcl-ivs-18-central-ducted",
      outdoorUnitId: "tcl-h24tdh17xac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-exheat-wall-single-cfg-1",
      slug: "tcl-exheat-wall-single-cfg-1",
      modelId: "tcl-exheat-wall-single",
      outdoorUnitId: "tcl-h09suh25xgc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-exheat-wall-single-cfg-2",
      slug: "tcl-exheat-wall-single-cfg-2",
      modelId: "tcl-exheat-wall-single",
      outdoorUnitId: "tcl-h12suh25xgc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-exheat-wall-single-cfg-3",
      slug: "tcl-exheat-wall-single-cfg-3",
      modelId: "tcl-exheat-wall-single",
      outdoorUnitId: "tcl-h18suh23xgc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-exheat-wall-single-cfg-4",
      slug: "tcl-exheat-wall-single-cfg-4",
      modelId: "tcl-exheat-wall-single",
      outdoorUnitId: "tcl-h24suh23xgc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-freshin-wall-single-cfg-1",
      slug: "tcl-freshin-wall-single-cfg-1",
      modelId: "tcl-freshin-wall-single",
      outdoorUnitId: "tcl-h12sfh25xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-celling-floor-single-wall-single-cfg-1",
      slug: "tcl-celling-floor-single-wall-single-cfg-1",
      modelId: "tcl-celling-floor-single-wall-single",
      outdoorUnitId: "tcl-h24sbh20xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tcl-celling-floor-single-wall-single-cfg-2",
      slug: "tcl-celling-floor-single-wall-single-cfg-2",
      modelId: "tcl-celling-floor-single-wall-single",
      outdoorUnitId: "tcl-h18sbh22xpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "tcl-t-pro-wall-single-cfg-1",
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
      configurationId: "tcl-t-pro-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-t-pro-wall-single-cfg-3",
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
      configurationId: "tcl-t-pro-wall-single-cfg-4",
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
      configurationId: "tcl-t-pro-wall-single-cfg-5",
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
      configurationId: "tcl-t-pro-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-t-pro-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-t-pro-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-elite-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-elite-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-elite-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-elite-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-elite-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ts1-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ts1-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ts1-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ts1-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ts1-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ts1-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ts1-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ts1-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ts1-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-standard-wall-single-cfg-3",
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
      configurationId: "tcl-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-standard-wall-single-cfg-6",
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
      configurationId: "tcl-standard-wall-single-cfg-7",
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
      configurationId: "tcl-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-standard-wall-single-cfg-11",
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
      configurationId: "tcl-breezein-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6100,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-breezein-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-mulit-zone-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-mulit-zone-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-mulit-zone-wall-single-cfg-3",
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
      configurationId: "tcl-mulit-zone-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-mulit-zone-wall-single-cfg-5",
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
      configurationId: "tcl-mulit-zone-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-mulit-zone-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-mulit-zone-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ivs-18-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-ivs-18-central-ducted-cfg-2",
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
      configurationId: "tcl-ivs-18-central-ducted-cfg-3",
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
      configurationId: "tcl-ivs-18-central-ducted-cfg-4",
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
      configurationId: "tcl-ivs-18-central-ducted-cfg-5",
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
      configurationId: "tcl-exheat-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-exheat-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-exheat-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-exheat-wall-single-cfg-4",
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
      configurationId: "tcl-freshin-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tcl-celling-floor-single-wall-single-cfg-1",
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
      configurationId: "tcl-celling-floor-single-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 1.85,
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
