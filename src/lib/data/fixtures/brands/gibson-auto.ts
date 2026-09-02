import type { BrandDataset } from "../../types";

export const gibsonDataset: BrandDataset = {
  brand: {
    id: "gibson",
    slug: "gibson",
    name: "GIBSON",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "gibson-ultra-side-discharge",
      slug: "gibson-ultra-side-discharge",
      name: "Ultra Side Discharge",
      brandId: "gibson",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-flex-match",
      slug: "gibson-flex-match",
      name: "Flex Match",
      brandId: "gibson",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-standard",
      slug: "gibson-standard",
      name: "Standard",
      brandId: "gibson",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-lomo",
      slug: "gibson-lomo",
      name: "Lomo",
      brandId: "gibson",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-multizone-outdoors",
      slug: "gibson-multizone-outdoors",
      name: "Multizone Outdoors",
      brandId: "gibson",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-19-20-5-seer2-minisplits",
      slug: "gibson-19-20-5-seer2-minisplits",
      name: "(19-20.5 SEER2) Minisplits",
      brandId: "gibson",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-24-26-seer2-minisplits",
      slug: "gibson-24-26-seer2-minisplits",
      name: "(24-26 SEER2) Minisplits",
      brandId: "gibson",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-multizone-indoors-eight-way-compact-cassettes",
      slug: "gibson-multizone-indoors-eight-way-compact-cassettes",
      name: "Multizone Indoors Eight-way Compact Cassettes",
      brandId: "gibson",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-e-series",
      slug: "gibson-e-series",
      name: "E Series",
      brandId: "gibson",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "gibson-ultra-side-discharge-central-ducted",
      slug: "gibson-ultra-side-discharge-central-ducted",
      name: "Ultra Side Discharge",
      seriesId: "gibson-ultra-side-discharge",
      brandId: "gibson",
      modelNumber: "Ultra Side Discharge",
      normalizedModelNumber: "ultra-side-discharge",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 44000,
      seer2Min: 16,
      seer2Max: 17,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-flex-match-wall-single",
      slug: "gibson-flex-match-wall-single",
      name: "Flex Match",
      seriesId: "gibson-flex-match",
      brandId: "gibson",
      modelNumber: "Flex Match",
      normalizedModelNumber: "flex-match",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 35600,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.82,
      cop5FMax: 2.22,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-standard-wall-single",
      slug: "gibson-standard-wall-single",
      name: "Standard",
      seriesId: "gibson-standard",
      brandId: "gibson",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8100,
      heatingCapacity5FMaxBtu: 27800,
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
      id: "gibson-lomo-wall-single",
      slug: "gibson-lomo-wall-single",
      name: "Lomo",
      seriesId: "gibson-lomo",
      brandId: "gibson",
      modelNumber: "Lomo",
      normalizedModelNumber: "lomo",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 10000,
      heatingCapacity5FMaxBtu: 10000,
      seer2Min: 24,
      seer2Max: 24,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-multizone-outdoors-wall-single",
      slug: "gibson-multizone-outdoors-wall-single",
      name: "Multizone Outdoors",
      seriesId: "gibson-multizone-outdoors",
      brandId: "gibson",
      modelNumber: "Multizone Outdoors",
      normalizedModelNumber: "multizone-outdoors",
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
      id: "gibson-19-20-5-seer2-minisplits-wall-single",
      slug: "gibson-19-20-5-seer2-minisplits-wall-single",
      name: "(19-20.5 SEER2) Minisplits",
      seriesId: "gibson-19-20-5-seer2-minisplits",
      brandId: "gibson",
      modelNumber: "(19-20.5 SEER2) Minisplits",
      normalizedModelNumber: "19-20-5-seer2-minisplits",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      heatingCapacity5FMinBtu: 27400,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-24-26-seer2-minisplits-wall-single",
      slug: "gibson-24-26-seer2-minisplits-wall-single",
      name: "(24-26 SEER2) Minisplits",
      seriesId: "gibson-24-26-seer2-minisplits",
      brandId: "gibson",
      modelNumber: "(24-26 SEER2) Minisplits",
      normalizedModelNumber: "24-26-seer2-minisplits",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 8800,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 24.5,
      seer2Max: 26,
      hspf2Min: 9,
      hspf2Max: 10.4,
      cop5FMin: 1.8,
      cop5FMax: 1.95,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single",
      slug: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single",
      name: "Multizone Indoors Eight-way Compact Cassettes",
      seriesId: "gibson-multizone-indoors-eight-way-compact-cassettes",
      brandId: "gibson",
      modelNumber: "Multizone Indoors Eight-way Compact Cassettes",
      normalizedModelNumber: "multizone-indoors-eight-way-compact-cassettes",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8800,
      heatingCapacity5FMaxBtu: 10000,
      seer2Min: 23,
      seer2Max: 24,
      hspf2Min: 9,
      hspf2Max: 9.2,
      cop5FMin: 1.9,
      cop5FMax: 1.94,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-e-series-central-ducted",
      slug: "gibson-e-series-central-ducted",
      name: "E Series",
      seriesId: "gibson-e-series",
      brandId: "gibson",
      modelNumber: "E Series",
      normalizedModelNumber: "e-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 20600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "gibson-gxh24-36msk4dh",
      modelNumber: "GXH24-36MSK4DH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh48-60msk4dh",
      modelNumber: "GXH48-60MSK4DH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh36-10-6-fmk4dh-1",
      modelNumber: "GXH36(10.6)FMK4DH-1",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh42-12-3-fmk4dh-1",
      modelNumber: "GXH42(12.3)FMK4DH-1",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh18-5-3-fmk4dh-1",
      modelNumber: "GXH18(5.3)FMK4DH-1",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh24-7-0-fmk4dh-1",
      modelNumber: "GXH24(7.0)FMK4DH-1",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh30-8-8-fmk4dh-1",
      modelNumber: "GXH30(8.8)FMK4DH-1",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh09-2-6-lsk4dh2",
      modelNumber: "GXH09(2.6)LSK4DH2",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh24-7-0-lsk4dh2",
      modelNumber: "GXH24(7.0)LSK4DH2",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh30-8-8-lsk4dh2",
      modelNumber: "GXH30(8.8)LSK4DH2",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh36-10-6-lsk4dh2",
      modelNumber: "GXH36(10.6)LSK4DH2",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh18-5-3-lsk4dh2",
      modelNumber: "GXH18(5.3)LSK4DH2",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh09esk3il",
      modelNumber: "DXH09ESK3IL",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh09esa3il",
      modelNumber: "DXH09ESA3IL",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh24esk3il",
      modelNumber: "DXH24ESK3IL",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh12esk3il",
      modelNumber: "DXH12ESK3IL",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh12esa3il",
      modelNumber: "DXH12ESA3IL",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh18esk3il",
      modelNumber: "DXH18ESK3IL",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh30esk3il",
      modelNumber: "DXH30ESK3IL",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-gxh12-3-5-lsk4dh2",
      modelNumber: "GXH12(3.5)LSK4DH2",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh18fmk3ih",
      modelNumber: "DXH18FMK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh24fmk3ih",
      modelNumber: "DXH24FMK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh30fmk3ih",
      modelNumber: "DXH30FMK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh36fmk3ih",
      modelNumber: "DXH36FMK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh42fmk3ih",
      modelNumber: "DXH42FMK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh36esk3il",
      modelNumber: "DXH36ESK3IL",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh09psk3ih",
      modelNumber: "DXH09PSK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh12psk3ih",
      modelNumber: "DXH12PSK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh24psk3ih",
      modelNumber: "DXH24PSK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-dxh18psk3ih",
      modelNumber: "DXH18PSK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-uxh24-36msk3ih",
      modelNumber: "UXH24-36MSK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    },
    {
      id: "gibson-uxh48-60msk3ih",
      modelNumber: "UXH48-60MSK3IH",
      brandId: "gibson",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "gibson-ultra-side-discharge-central-ducted-cfg-1",
      slug: "gibson-ultra-side-discharge-central-ducted-cfg-1",
      modelId: "gibson-ultra-side-discharge-central-ducted",
      outdoorUnitId: "gibson-gxh24-36msk4dh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-ultra-side-discharge-central-ducted-cfg-2",
      slug: "gibson-ultra-side-discharge-central-ducted-cfg-2",
      modelId: "gibson-ultra-side-discharge-central-ducted",
      outdoorUnitId: "gibson-gxh48-60msk4dh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-ultra-side-discharge-central-ducted-cfg-3",
      slug: "gibson-ultra-side-discharge-central-ducted-cfg-3",
      modelId: "gibson-ultra-side-discharge-central-ducted",
      outdoorUnitId: "gibson-gxh48-60msk4dh",
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
      id: "gibson-ultra-side-discharge-central-ducted-cfg-4",
      slug: "gibson-ultra-side-discharge-central-ducted-cfg-4",
      modelId: "gibson-ultra-side-discharge-central-ducted",
      outdoorUnitId: "gibson-gxh24-36msk4dh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-flex-match-wall-single-cfg-1",
      slug: "gibson-flex-match-wall-single-cfg-1",
      modelId: "gibson-flex-match-wall-single",
      outdoorUnitId: "gibson-gxh36-10-6-fmk4dh-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-flex-match-wall-single-cfg-2",
      slug: "gibson-flex-match-wall-single-cfg-2",
      modelId: "gibson-flex-match-wall-single",
      outdoorUnitId: "gibson-gxh42-12-3-fmk4dh-1",
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
      id: "gibson-flex-match-wall-single-cfg-3",
      slug: "gibson-flex-match-wall-single-cfg-3",
      modelId: "gibson-flex-match-wall-single",
      outdoorUnitId: "gibson-gxh18-5-3-fmk4dh-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-flex-match-wall-single-cfg-4",
      slug: "gibson-flex-match-wall-single-cfg-4",
      modelId: "gibson-flex-match-wall-single",
      outdoorUnitId: "gibson-gxh24-7-0-fmk4dh-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-flex-match-wall-single-cfg-5",
      slug: "gibson-flex-match-wall-single-cfg-5",
      modelId: "gibson-flex-match-wall-single",
      outdoorUnitId: "gibson-gxh30-8-8-fmk4dh-1",
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
      id: "gibson-standard-wall-single-cfg-1",
      slug: "gibson-standard-wall-single-cfg-1",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-gxh09-2-6-lsk4dh2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-standard-wall-single-cfg-2",
      slug: "gibson-standard-wall-single-cfg-2",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-gxh24-7-0-lsk4dh2",
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
      id: "gibson-standard-wall-single-cfg-3",
      slug: "gibson-standard-wall-single-cfg-3",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-gxh30-8-8-lsk4dh2",
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
      id: "gibson-standard-wall-single-cfg-4",
      slug: "gibson-standard-wall-single-cfg-4",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-gxh36-10-6-lsk4dh2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-standard-wall-single-cfg-5",
      slug: "gibson-standard-wall-single-cfg-5",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-gxh18-5-3-lsk4dh2",
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
      id: "gibson-standard-wall-single-cfg-6",
      slug: "gibson-standard-wall-single-cfg-6",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-gxh18-5-3-lsk4dh2",
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
      id: "gibson-standard-wall-single-cfg-7",
      slug: "gibson-standard-wall-single-cfg-7",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-dxh09esk3il",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-standard-wall-single-cfg-8",
      slug: "gibson-standard-wall-single-cfg-8",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-dxh09esa3il",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-standard-wall-single-cfg-9",
      slug: "gibson-standard-wall-single-cfg-9",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-dxh24esk3il",
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
      id: "gibson-standard-wall-single-cfg-10",
      slug: "gibson-standard-wall-single-cfg-10",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-dxh12esk3il",
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
      id: "gibson-standard-wall-single-cfg-11",
      slug: "gibson-standard-wall-single-cfg-11",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-dxh12esa3il",
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
      id: "gibson-standard-wall-single-cfg-12",
      slug: "gibson-standard-wall-single-cfg-12",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-dxh18esk3il",
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
      id: "gibson-standard-wall-single-cfg-13",
      slug: "gibson-standard-wall-single-cfg-13",
      modelId: "gibson-standard-wall-single",
      outdoorUnitId: "gibson-dxh30esk3il",
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
      id: "gibson-lomo-wall-single-cfg-1",
      slug: "gibson-lomo-wall-single-cfg-1",
      modelId: "gibson-lomo-wall-single",
      outdoorUnitId: "gibson-gxh12-3-5-lsk4dh2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-lomo-wall-single-cfg-2",
      slug: "gibson-lomo-wall-single-cfg-2",
      modelId: "gibson-lomo-wall-single",
      outdoorUnitId: "gibson-gxh12-3-5-lsk4dh2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-multizone-outdoors-wall-single-cfg-1",
      slug: "gibson-multizone-outdoors-wall-single-cfg-1",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh18fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-2",
      slug: "gibson-multizone-outdoors-wall-single-cfg-2",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh24fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-3",
      slug: "gibson-multizone-outdoors-wall-single-cfg-3",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh30fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-4",
      slug: "gibson-multizone-outdoors-wall-single-cfg-4",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh36fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-5",
      slug: "gibson-multizone-outdoors-wall-single-cfg-5",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh42fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-6",
      slug: "gibson-multizone-outdoors-wall-single-cfg-6",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh18fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-7",
      slug: "gibson-multizone-outdoors-wall-single-cfg-7",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh18fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-8",
      slug: "gibson-multizone-outdoors-wall-single-cfg-8",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh24fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-9",
      slug: "gibson-multizone-outdoors-wall-single-cfg-9",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh30fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-10",
      slug: "gibson-multizone-outdoors-wall-single-cfg-10",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh36fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-11",
      slug: "gibson-multizone-outdoors-wall-single-cfg-11",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh42fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-12",
      slug: "gibson-multizone-outdoors-wall-single-cfg-12",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh24fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-13",
      slug: "gibson-multizone-outdoors-wall-single-cfg-13",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh30fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-14",
      slug: "gibson-multizone-outdoors-wall-single-cfg-14",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh36fmk3ih",
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
      id: "gibson-multizone-outdoors-wall-single-cfg-15",
      slug: "gibson-multizone-outdoors-wall-single-cfg-15",
      modelId: "gibson-multizone-outdoors-wall-single",
      outdoorUnitId: "gibson-dxh42fmk3ih",
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
      id: "gibson-19-20-5-seer2-minisplits-wall-single-cfg-1",
      slug: "gibson-19-20-5-seer2-minisplits-wall-single-cfg-1",
      modelId: "gibson-19-20-5-seer2-minisplits-wall-single",
      outdoorUnitId: "gibson-dxh36esk3il",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-24-26-seer2-minisplits-wall-single-cfg-1",
      slug: "gibson-24-26-seer2-minisplits-wall-single-cfg-1",
      modelId: "gibson-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "gibson-dxh09psk3ih",
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
      id: "gibson-24-26-seer2-minisplits-wall-single-cfg-2",
      slug: "gibson-24-26-seer2-minisplits-wall-single-cfg-2",
      modelId: "gibson-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "gibson-dxh12psk3ih",
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
      id: "gibson-24-26-seer2-minisplits-wall-single-cfg-3",
      slug: "gibson-24-26-seer2-minisplits-wall-single-cfg-3",
      modelId: "gibson-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "gibson-dxh24psk3ih",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 26,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-24-26-seer2-minisplits-wall-single-cfg-4",
      slug: "gibson-24-26-seer2-minisplits-wall-single-cfg-4",
      modelId: "gibson-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "gibson-dxh18psk3ih",
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
      id: "gibson-24-26-seer2-minisplits-wall-single-cfg-5",
      slug: "gibson-24-26-seer2-minisplits-wall-single-cfg-5",
      modelId: "gibson-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "gibson-dxh24psk3ih",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 26,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "gibson-24-26-seer2-minisplits-wall-single-cfg-6",
      slug: "gibson-24-26-seer2-minisplits-wall-single-cfg-6",
      modelId: "gibson-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "gibson-dxh18psk3ih",
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
      id: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-1",
      slug: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-1",
      modelId: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single",
      outdoorUnitId: "gibson-dxh09psk3ih",
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
      id: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-2",
      slug: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-2",
      modelId: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single",
      outdoorUnitId: "gibson-dxh12psk3ih",
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
      id: "gibson-e-series-central-ducted-cfg-1",
      slug: "gibson-e-series-central-ducted-cfg-1",
      modelId: "gibson-e-series-central-ducted",
      outdoorUnitId: "gibson-uxh24-36msk3ih",
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
      id: "gibson-e-series-central-ducted-cfg-2",
      slug: "gibson-e-series-central-ducted-cfg-2",
      modelId: "gibson-e-series-central-ducted",
      outdoorUnitId: "gibson-uxh24-36msk3ih",
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
      id: "gibson-e-series-central-ducted-cfg-3",
      slug: "gibson-e-series-central-ducted-cfg-3",
      modelId: "gibson-e-series-central-ducted",
      outdoorUnitId: "gibson-uxh48-60msk3ih",
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
      id: "gibson-e-series-central-ducted-cfg-4",
      slug: "gibson-e-series-central-ducted-cfg-4",
      modelId: "gibson-e-series-central-ducted",
      outdoorUnitId: "gibson-uxh48-60msk3ih",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 18.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "gibson-ultra-side-discharge-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-ultra-side-discharge-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-ultra-side-discharge-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-ultra-side-discharge-central-ducted-cfg-4",
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
      configurationId: "gibson-flex-match-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-flex-match-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-flex-match-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-flex-match-wall-single-cfg-4",
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
      configurationId: "gibson-flex-match-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-standard-wall-single-cfg-3",
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
      configurationId: "gibson-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-standard-wall-single-cfg-7",
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
      configurationId: "gibson-standard-wall-single-cfg-8",
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
      configurationId: "gibson-standard-wall-single-cfg-9",
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
      configurationId: "gibson-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-standard-wall-single-cfg-13",
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
      configurationId: "gibson-lomo-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-lomo-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-1",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-2",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-3",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-4",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-5",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-6",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-7",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-8",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-9",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-10",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-11",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-12",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-13",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-14",
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
      configurationId: "gibson-multizone-outdoors-wall-single-cfg-15",
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
      configurationId: "gibson-19-20-5-seer2-minisplits-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "gibson-24-26-seer2-minisplits-wall-single-cfg-1",
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
      configurationId: "gibson-24-26-seer2-minisplits-wall-single-cfg-2",
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
      configurationId: "gibson-24-26-seer2-minisplits-wall-single-cfg-3",
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
      configurationId: "gibson-24-26-seer2-minisplits-wall-single-cfg-4",
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
      configurationId: "gibson-24-26-seer2-minisplits-wall-single-cfg-5",
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
      configurationId: "gibson-24-26-seer2-minisplits-wall-single-cfg-6",
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
      configurationId: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-1",
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
      configurationId: "gibson-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-2",
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
      configurationId: "gibson-e-series-central-ducted-cfg-1",
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
      configurationId: "gibson-e-series-central-ducted-cfg-2",
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
      configurationId: "gibson-e-series-central-ducted-cfg-3",
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
      configurationId: "gibson-e-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.1,
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
