import type { BrandDataset } from "../../types";

export const interthermDataset: BrandDataset = {
  brand: {
    id: "intertherm",
    slug: "intertherm",
    name: "INTERTHERM",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "intertherm-multizone-outdoors",
      slug: "intertherm-multizone-outdoors",
      name: "Multizone Outdoors",
      brandId: "intertherm",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "intertherm-standard",
      slug: "intertherm-standard",
      name: "Standard",
      brandId: "intertherm",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "intertherm-19-20-5-seer2-minisplits",
      slug: "intertherm-19-20-5-seer2-minisplits",
      name: "(19-20.5 SEER2) Minisplits",
      brandId: "intertherm",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "intertherm-24-26-seer2-minisplits",
      slug: "intertherm-24-26-seer2-minisplits",
      name: "(24-26 SEER2) Minisplits",
      brandId: "intertherm",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "intertherm-multizone-indoors-eight-way-compact-cassettes",
      slug: "intertherm-multizone-indoors-eight-way-compact-cassettes",
      name: "Multizone Indoors Eight-way Compact Cassettes",
      brandId: "intertherm",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "intertherm-e-series",
      slug: "intertherm-e-series",
      name: "E Series",
      brandId: "intertherm",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "intertherm-multizone-outdoors-wall-single",
      slug: "intertherm-multizone-outdoors-wall-single",
      name: "Multizone Outdoors",
      seriesId: "intertherm-multizone-outdoors",
      brandId: "intertherm",
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
      id: "intertherm-standard-wall-single",
      slug: "intertherm-standard-wall-single",
      name: "Standard",
      seriesId: "intertherm-standard",
      brandId: "intertherm",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8100,
      heatingCapacity5FMaxBtu: 24000,
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
      id: "intertherm-19-20-5-seer2-minisplits-wall-single",
      slug: "intertherm-19-20-5-seer2-minisplits-wall-single",
      name: "(19-20.5 SEER2) Minisplits",
      seriesId: "intertherm-19-20-5-seer2-minisplits",
      brandId: "intertherm",
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
      id: "intertherm-24-26-seer2-minisplits-wall-single",
      slug: "intertherm-24-26-seer2-minisplits-wall-single",
      name: "(24-26 SEER2) Minisplits",
      seriesId: "intertherm-24-26-seer2-minisplits",
      brandId: "intertherm",
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
      id: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single",
      slug: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single",
      name: "Multizone Indoors Eight-way Compact Cassettes",
      seriesId: "intertherm-multizone-indoors-eight-way-compact-cassettes",
      brandId: "intertherm",
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
      id: "intertherm-e-series-central-ducted",
      slug: "intertherm-e-series-central-ducted",
      name: "E Series",
      seriesId: "intertherm-e-series",
      brandId: "intertherm",
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
      id: "intertherm-dxh18fmk3ih",
      modelNumber: "DXH18FMK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh24fmk3ih",
      modelNumber: "DXH24FMK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh30fmk3ih",
      modelNumber: "DXH30FMK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh36fmk3ih",
      modelNumber: "DXH36FMK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh42fmk3ih",
      modelNumber: "DXH42FMK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh09esk3il",
      modelNumber: "DXH09ESK3IL",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh09esa3il",
      modelNumber: "DXH09ESA3IL",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh24esk3il",
      modelNumber: "DXH24ESK3IL",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh12esk3il",
      modelNumber: "DXH12ESK3IL",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh12esa3il",
      modelNumber: "DXH12ESA3IL",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh18esk3il",
      modelNumber: "DXH18ESK3IL",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh30esk3il",
      modelNumber: "DXH30ESK3IL",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh36esk3il",
      modelNumber: "DXH36ESK3IL",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh09psk3ih",
      modelNumber: "DXH09PSK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh12psk3ih",
      modelNumber: "DXH12PSK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh24psk3ih",
      modelNumber: "DXH24PSK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-dxh18psk3ih",
      modelNumber: "DXH18PSK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-uxh24-36msk3ih",
      modelNumber: "UXH24-36MSK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    },
    {
      id: "intertherm-uxh48-60msk3ih",
      modelNumber: "UXH48-60MSK3IH",
      brandId: "intertherm",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "intertherm-multizone-outdoors-wall-single-cfg-1",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-1",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh18fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-2",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-2",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh24fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-3",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-3",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh30fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-4",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-4",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh36fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-5",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-5",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh42fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-6",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-6",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh18fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-7",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-7",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh18fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-8",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-8",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh24fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-9",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-9",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh30fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-10",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-10",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh36fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-11",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-11",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh42fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-12",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-12",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh24fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-13",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-13",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh30fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-14",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-14",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh36fmk3ih",
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
      id: "intertherm-multizone-outdoors-wall-single-cfg-15",
      slug: "intertherm-multizone-outdoors-wall-single-cfg-15",
      modelId: "intertherm-multizone-outdoors-wall-single",
      outdoorUnitId: "intertherm-dxh42fmk3ih",
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
      id: "intertherm-standard-wall-single-cfg-1",
      slug: "intertherm-standard-wall-single-cfg-1",
      modelId: "intertherm-standard-wall-single",
      outdoorUnitId: "intertherm-dxh09esk3il",
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
      id: "intertherm-standard-wall-single-cfg-2",
      slug: "intertherm-standard-wall-single-cfg-2",
      modelId: "intertherm-standard-wall-single",
      outdoorUnitId: "intertherm-dxh09esa3il",
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
      id: "intertherm-standard-wall-single-cfg-3",
      slug: "intertherm-standard-wall-single-cfg-3",
      modelId: "intertherm-standard-wall-single",
      outdoorUnitId: "intertherm-dxh24esk3il",
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
      id: "intertherm-standard-wall-single-cfg-4",
      slug: "intertherm-standard-wall-single-cfg-4",
      modelId: "intertherm-standard-wall-single",
      outdoorUnitId: "intertherm-dxh12esk3il",
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
      id: "intertherm-standard-wall-single-cfg-5",
      slug: "intertherm-standard-wall-single-cfg-5",
      modelId: "intertherm-standard-wall-single",
      outdoorUnitId: "intertherm-dxh12esa3il",
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
      id: "intertherm-standard-wall-single-cfg-6",
      slug: "intertherm-standard-wall-single-cfg-6",
      modelId: "intertherm-standard-wall-single",
      outdoorUnitId: "intertherm-dxh18esk3il",
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
      id: "intertherm-standard-wall-single-cfg-7",
      slug: "intertherm-standard-wall-single-cfg-7",
      modelId: "intertherm-standard-wall-single",
      outdoorUnitId: "intertherm-dxh30esk3il",
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
      id: "intertherm-19-20-5-seer2-minisplits-wall-single-cfg-1",
      slug: "intertherm-19-20-5-seer2-minisplits-wall-single-cfg-1",
      modelId: "intertherm-19-20-5-seer2-minisplits-wall-single",
      outdoorUnitId: "intertherm-dxh36esk3il",
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
      id: "intertherm-24-26-seer2-minisplits-wall-single-cfg-1",
      slug: "intertherm-24-26-seer2-minisplits-wall-single-cfg-1",
      modelId: "intertherm-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "intertherm-dxh09psk3ih",
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
      id: "intertherm-24-26-seer2-minisplits-wall-single-cfg-2",
      slug: "intertherm-24-26-seer2-minisplits-wall-single-cfg-2",
      modelId: "intertherm-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "intertherm-dxh12psk3ih",
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
      id: "intertherm-24-26-seer2-minisplits-wall-single-cfg-3",
      slug: "intertherm-24-26-seer2-minisplits-wall-single-cfg-3",
      modelId: "intertherm-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "intertherm-dxh24psk3ih",
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
      id: "intertherm-24-26-seer2-minisplits-wall-single-cfg-4",
      slug: "intertherm-24-26-seer2-minisplits-wall-single-cfg-4",
      modelId: "intertherm-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "intertherm-dxh18psk3ih",
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
      id: "intertherm-24-26-seer2-minisplits-wall-single-cfg-5",
      slug: "intertherm-24-26-seer2-minisplits-wall-single-cfg-5",
      modelId: "intertherm-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "intertherm-dxh24psk3ih",
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
      id: "intertherm-24-26-seer2-minisplits-wall-single-cfg-6",
      slug: "intertherm-24-26-seer2-minisplits-wall-single-cfg-6",
      modelId: "intertherm-24-26-seer2-minisplits-wall-single",
      outdoorUnitId: "intertherm-dxh18psk3ih",
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
      id: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-1",
      slug: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-1",
      modelId: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single",
      outdoorUnitId: "intertherm-dxh09psk3ih",
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
      id: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-2",
      slug: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-2",
      modelId: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single",
      outdoorUnitId: "intertherm-dxh12psk3ih",
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
      id: "intertherm-e-series-central-ducted-cfg-1",
      slug: "intertherm-e-series-central-ducted-cfg-1",
      modelId: "intertherm-e-series-central-ducted",
      outdoorUnitId: "intertherm-uxh24-36msk3ih",
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
      id: "intertherm-e-series-central-ducted-cfg-2",
      slug: "intertherm-e-series-central-ducted-cfg-2",
      modelId: "intertherm-e-series-central-ducted",
      outdoorUnitId: "intertherm-uxh24-36msk3ih",
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
      id: "intertherm-e-series-central-ducted-cfg-3",
      slug: "intertherm-e-series-central-ducted-cfg-3",
      modelId: "intertherm-e-series-central-ducted",
      outdoorUnitId: "intertherm-uxh48-60msk3ih",
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
      id: "intertherm-e-series-central-ducted-cfg-4",
      slug: "intertherm-e-series-central-ducted-cfg-4",
      modelId: "intertherm-e-series-central-ducted",
      outdoorUnitId: "intertherm-uxh48-60msk3ih",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-1",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-2",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-3",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-4",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-5",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-6",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-7",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-8",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-9",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-10",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-11",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-12",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-13",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-14",
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
      configurationId: "intertherm-multizone-outdoors-wall-single-cfg-15",
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
      configurationId: "intertherm-standard-wall-single-cfg-1",
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
      configurationId: "intertherm-standard-wall-single-cfg-2",
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
      configurationId: "intertherm-standard-wall-single-cfg-3",
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
      configurationId: "intertherm-standard-wall-single-cfg-4",
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
      configurationId: "intertherm-standard-wall-single-cfg-5",
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
      configurationId: "intertherm-standard-wall-single-cfg-6",
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
      configurationId: "intertherm-standard-wall-single-cfg-7",
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
      configurationId: "intertherm-19-20-5-seer2-minisplits-wall-single-cfg-1",
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
      configurationId: "intertherm-24-26-seer2-minisplits-wall-single-cfg-1",
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
      configurationId: "intertherm-24-26-seer2-minisplits-wall-single-cfg-2",
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
      configurationId: "intertherm-24-26-seer2-minisplits-wall-single-cfg-3",
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
      configurationId: "intertherm-24-26-seer2-minisplits-wall-single-cfg-4",
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
      configurationId: "intertherm-24-26-seer2-minisplits-wall-single-cfg-5",
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
      configurationId: "intertherm-24-26-seer2-minisplits-wall-single-cfg-6",
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
      configurationId: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-1",
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
      configurationId: "intertherm-multizone-indoors-eight-way-compact-cassettes-wall-single-cfg-2",
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
      configurationId: "intertherm-e-series-central-ducted-cfg-1",
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
      configurationId: "intertherm-e-series-central-ducted-cfg-2",
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
      configurationId: "intertherm-e-series-central-ducted-cfg-3",
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
      configurationId: "intertherm-e-series-central-ducted-cfg-4",
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
