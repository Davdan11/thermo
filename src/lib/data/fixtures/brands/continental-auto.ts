import type { BrandDataset } from "../../types";

export const continentalDataset: BrandDataset = {
  brand: {
    id: "continental",
    slug: "continental",
    name: "CONTINENTAL",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "continental-standard",
      slug: "continental-standard",
      name: "Standard",
      brandId: "continental",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-wse-series",
      slug: "continental-wse-series",
      name: "WSE Series",
      brandId: "continental",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat",
      slug: "continental-hyper-heat",
      name: "Hyper Heat",
      brandId: "continental",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdha-series",
      slug: "continental-cdha-series",
      name: "CDHA series",
      brandId: "continental",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdh-series",
      slug: "continental-cdh-series",
      name: "CDH Series",
      brandId: "continental",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "continental-standard-wall-single",
      slug: "continental-standard-wall-single",
      name: "Standard",
      seriesId: "continental-standard",
      brandId: "continental",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
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
      id: "continental-wse-series-central-ducted",
      slug: "continental-wse-series-central-ducted",
      name: "WSE Series",
      seriesId: "continental-wse-series",
      brandId: "continental",
      modelNumber: "WSE Series",
      normalizedModelNumber: "wse-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 15100,
      heatingCapacity5FMaxBtu: 44500,
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
      id: "continental-standard-central-ducted",
      slug: "continental-standard-central-ducted",
      name: "Standard",
      seriesId: "continental-standard",
      brandId: "continental",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 33000,
      heatingCapacity5FMaxBtu: 38000,
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
      id: "continental-hyper-heat-central-ducted",
      slug: "continental-hyper-heat-central-ducted",
      name: "Hyper Heat",
      seriesId: "continental-hyper-heat",
      brandId: "continental",
      modelNumber: "Hyper Heat",
      normalizedModelNumber: "hyper-heat",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 38000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 17,
      seer2Max: 17,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdha-series-wall-single",
      slug: "continental-cdha-series-wall-single",
      name: "CDHA series",
      seriesId: "continental-cdha-series",
      brandId: "continental",
      modelNumber: "CDHA series",
      normalizedModelNumber: "cdha-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 10000,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 19.5,
      seer2Max: 25.5,
      hspf2Min: 8.5,
      hspf2Max: 11.4,
      cop5FMin: 1.8,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdh-series-wall-single",
      slug: "continental-cdh-series-wall-single",
      name: "CDH Series",
      seriesId: "continental-cdh-series",
      brandId: "continental",
      modelNumber: "CDH Series",
      normalizedModelNumber: "cdh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 9600,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 19,
      seer2Max: 27.4,
      hspf2Min: 9.5,
      hspf2Max: 16.2,
      cop5FMin: 1.8,
      cop5FMax: 2.35,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "continental-cmzh-27-o",
      modelNumber: "CMZH-27-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-ch25-09-o",
      modelNumber: "CH25-09-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-ch25-12-o",
      modelNumber: "CH25-12-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-ch21-18-o",
      modelNumber: "CH21-18-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-ch21-12-o",
      modelNumber: "CH21-12-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-ch21-24-o",
      modelNumber: "CH21-24-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cmzh-36-o",
      modelNumber: "CMZH-36-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cs18hv48a60",
      modelNumber: "CS18HV48A60",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26b-36-o",
      modelNumber: "CDHAS26B-36-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-ndhas26b-33-o",
      modelNumber: "NDHAS26B-33-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cs18hv24a36",
      modelNumber: "CS18HV24A36",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-wsehv2436ra1-c",
      modelNumber: "WSEHV2436RA1-C",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-wsehv4860ra1-c",
      modelNumber: "WSEHV4860RA1-C",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas22-24-o",
      modelNumber: "CDHAS22-24-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26-18-o",
      modelNumber: "CDHAS26-18-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26-24-o",
      modelNumber: "CDHAS26-24-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas22-12-o",
      modelNumber: "CDHAS22-12-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26-12-o",
      modelNumber: "CDHAS26-12-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas22-18-o",
      modelNumber: "CDHAS22-18-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdham-28-o",
      modelNumber: "CDHAM-28-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdham-36-o",
      modelNumber: "CDHAM-36-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26b-33-o",
      modelNumber: "CDHAS26B-33-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas22b-12-o",
      modelNumber: "CDHAS22B-12-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas22b-18-o",
      modelNumber: "CDHAS22B-18-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas22b-24-o",
      modelNumber: "CDHAS22B-24-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26b-09-o",
      modelNumber: "CDHAS26B-09-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26b-12-o",
      modelNumber: "CDHAS26B-12-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26b-18-o",
      modelNumber: "CDHAS26B-18-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26b-24-o",
      modelNumber: "CDHAS26B-24-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhamb-27-o",
      modelNumber: "CDHAMB-27-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhamb-36-o",
      modelNumber: "CDHAMB-36-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-ndhamb-36-o",
      modelNumber: "NDHAMB-36-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas22ba-12-o",
      modelNumber: "CDHAS22BA-12-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas22ba-18-o",
      modelNumber: "CDHAS22BA-18-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas22ba-24-o",
      modelNumber: "CDHAS22BA-24-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26ba-09-o",
      modelNumber: "CDHAS26BA-09-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26ba-12-o",
      modelNumber: "CDHAS26BA-12-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26ba-18-o",
      modelNumber: "CDHAS26BA-18-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26ba-24-o",
      modelNumber: "CDHAS26BA-24-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhas26ba-33-o",
      modelNumber: "CDHAS26BA-33-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhambb-18-o",
      modelNumber: "CDHAMBB-18-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhambb-27-o",
      modelNumber: "CDHAMBB-27-O",
      brandId: "continental",
      refrigerant: null as any,
    },
    {
      id: "continental-cdhambb-36-o",
      modelNumber: "CDHAMBB-36-O",
      brandId: "continental",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "continental-standard-wall-single-cfg-1",
      slug: "continental-standard-wall-single-cfg-1",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-cmzh-27-o",
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
      id: "continental-standard-wall-single-cfg-2",
      slug: "continental-standard-wall-single-cfg-2",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-ch25-09-o",
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
      id: "continental-standard-wall-single-cfg-3",
      slug: "continental-standard-wall-single-cfg-3",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-ch25-12-o",
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
      id: "continental-standard-wall-single-cfg-4",
      slug: "continental-standard-wall-single-cfg-4",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-ch21-18-o",
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
      id: "continental-standard-wall-single-cfg-5",
      slug: "continental-standard-wall-single-cfg-5",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-ch21-12-o",
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
      id: "continental-standard-wall-single-cfg-6",
      slug: "continental-standard-wall-single-cfg-6",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-ch21-18-o",
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
      id: "continental-standard-wall-single-cfg-7",
      slug: "continental-standard-wall-single-cfg-7",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-ch21-24-o",
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
      id: "continental-standard-wall-single-cfg-8",
      slug: "continental-standard-wall-single-cfg-8",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-cmzh-36-o",
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
      id: "continental-standard-wall-single-cfg-9",
      slug: "continental-standard-wall-single-cfg-9",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-cs18hv48a60",
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
      id: "continental-standard-wall-single-cfg-10",
      slug: "continental-standard-wall-single-cfg-10",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-cs18hv48a60",
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
      id: "continental-standard-wall-single-cfg-11",
      slug: "continental-standard-wall-single-cfg-11",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-cdhas26b-36-o",
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
      id: "continental-standard-wall-single-cfg-12",
      slug: "continental-standard-wall-single-cfg-12",
      modelId: "continental-standard-wall-single",
      outdoorUnitId: "continental-ndhas26b-33-o",
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
      id: "continental-wse-series-central-ducted-cfg-1",
      slug: "continental-wse-series-central-ducted-cfg-1",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-2",
      slug: "continental-wse-series-central-ducted-cfg-2",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-3",
      slug: "continental-wse-series-central-ducted-cfg-3",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-4",
      slug: "continental-wse-series-central-ducted-cfg-4",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-5",
      slug: "continental-wse-series-central-ducted-cfg-5",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-6",
      slug: "continental-wse-series-central-ducted-cfg-6",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-7",
      slug: "continental-wse-series-central-ducted-cfg-7",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-8",
      slug: "continental-wse-series-central-ducted-cfg-8",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-9",
      slug: "continental-wse-series-central-ducted-cfg-9",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-10",
      slug: "continental-wse-series-central-ducted-cfg-10",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-11",
      slug: "continental-wse-series-central-ducted-cfg-11",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-12",
      slug: "continental-wse-series-central-ducted-cfg-12",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-13",
      slug: "continental-wse-series-central-ducted-cfg-13",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-14",
      slug: "continental-wse-series-central-ducted-cfg-14",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-15",
      slug: "continental-wse-series-central-ducted-cfg-15",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-16",
      slug: "continental-wse-series-central-ducted-cfg-16",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-17",
      slug: "continental-wse-series-central-ducted-cfg-17",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-18",
      slug: "continental-wse-series-central-ducted-cfg-18",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-19",
      slug: "continental-wse-series-central-ducted-cfg-19",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-20",
      slug: "continental-wse-series-central-ducted-cfg-20",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-21",
      slug: "continental-wse-series-central-ducted-cfg-21",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-22",
      slug: "continental-wse-series-central-ducted-cfg-22",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-23",
      slug: "continental-wse-series-central-ducted-cfg-23",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-24",
      slug: "continental-wse-series-central-ducted-cfg-24",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-cs18hv24a36",
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
      id: "continental-wse-series-central-ducted-cfg-25",
      slug: "continental-wse-series-central-ducted-cfg-25",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-26",
      slug: "continental-wse-series-central-ducted-cfg-26",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-27",
      slug: "continental-wse-series-central-ducted-cfg-27",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-wse-series-central-ducted-cfg-28",
      slug: "continental-wse-series-central-ducted-cfg-28",
      modelId: "continental-wse-series-central-ducted",
      outdoorUnitId: "continental-wsehv4860ra1-c",
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
      id: "continental-standard-central-ducted-cfg-1",
      slug: "continental-standard-central-ducted-cfg-1",
      modelId: "continental-standard-central-ducted",
      outdoorUnitId: "continental-cs18hv48a60",
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
      id: "continental-standard-central-ducted-cfg-2",
      slug: "continental-standard-central-ducted-cfg-2",
      modelId: "continental-standard-central-ducted",
      outdoorUnitId: "continental-cs18hv48a60",
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
      id: "continental-standard-central-ducted-cfg-3",
      slug: "continental-standard-central-ducted-cfg-3",
      modelId: "continental-standard-central-ducted",
      outdoorUnitId: "continental-cs18hv48a60",
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
      id: "continental-standard-central-ducted-cfg-4",
      slug: "continental-standard-central-ducted-cfg-4",
      modelId: "continental-standard-central-ducted",
      outdoorUnitId: "continental-cs18hv48a60",
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
      id: "continental-standard-central-ducted-cfg-5",
      slug: "continental-standard-central-ducted-cfg-5",
      modelId: "continental-standard-central-ducted",
      outdoorUnitId: "continental-cs18hv48a60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-standard-central-ducted-cfg-6",
      slug: "continental-standard-central-ducted-cfg-6",
      modelId: "continental-standard-central-ducted",
      outdoorUnitId: "continental-cs18hv48a60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-standard-central-ducted-cfg-7",
      slug: "continental-standard-central-ducted-cfg-7",
      modelId: "continental-standard-central-ducted",
      outdoorUnitId: "continental-cs18hv48a60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-standard-central-ducted-cfg-8",
      slug: "continental-standard-central-ducted-cfg-8",
      modelId: "continental-standard-central-ducted",
      outdoorUnitId: "continental-cs18hv48a60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-1",
      slug: "continental-hyper-heat-central-ducted-cfg-1",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-2",
      slug: "continental-hyper-heat-central-ducted-cfg-2",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-3",
      slug: "continental-hyper-heat-central-ducted-cfg-3",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-4",
      slug: "continental-hyper-heat-central-ducted-cfg-4",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-5",
      slug: "continental-hyper-heat-central-ducted-cfg-5",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-6",
      slug: "continental-hyper-heat-central-ducted-cfg-6",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-7",
      slug: "continental-hyper-heat-central-ducted-cfg-7",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 38000,
      coolingCapacityMaxBtu: 38000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-8",
      slug: "continental-hyper-heat-central-ducted-cfg-8",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 38000,
      coolingCapacityMaxBtu: 38000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-9",
      slug: "continental-hyper-heat-central-ducted-cfg-9",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 38000,
      coolingCapacityMaxBtu: 38000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-hyper-heat-central-ducted-cfg-10",
      slug: "continental-hyper-heat-central-ducted-cfg-10",
      modelId: "continental-hyper-heat-central-ducted",
      outdoorUnitId: "continental-wsehv2436ra1-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 38000,
      coolingCapacityMaxBtu: 38000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdha-series-wall-single-cfg-1",
      slug: "continental-cdha-series-wall-single-cfg-1",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdhas22-24-o",
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
      id: "continental-cdha-series-wall-single-cfg-2",
      slug: "continental-cdha-series-wall-single-cfg-2",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdhas26-18-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdha-series-wall-single-cfg-3",
      slug: "continental-cdha-series-wall-single-cfg-3",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdhas26-24-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdha-series-wall-single-cfg-4",
      slug: "continental-cdha-series-wall-single-cfg-4",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdhas22-12-o",
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
      id: "continental-cdha-series-wall-single-cfg-5",
      slug: "continental-cdha-series-wall-single-cfg-5",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdhas26-12-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdha-series-wall-single-cfg-6",
      slug: "continental-cdha-series-wall-single-cfg-6",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdhas22-18-o",
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
      id: "continental-cdha-series-wall-single-cfg-7",
      slug: "continental-cdha-series-wall-single-cfg-7",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdham-28-o",
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
      id: "continental-cdha-series-wall-single-cfg-8",
      slug: "continental-cdha-series-wall-single-cfg-8",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdham-28-o",
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
      id: "continental-cdha-series-wall-single-cfg-9",
      slug: "continental-cdha-series-wall-single-cfg-9",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdham-28-o",
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
      id: "continental-cdha-series-wall-single-cfg-10",
      slug: "continental-cdha-series-wall-single-cfg-10",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdham-36-o",
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
      id: "continental-cdha-series-wall-single-cfg-11",
      slug: "continental-cdha-series-wall-single-cfg-11",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdham-36-o",
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
      id: "continental-cdha-series-wall-single-cfg-12",
      slug: "continental-cdha-series-wall-single-cfg-12",
      modelId: "continental-cdha-series-wall-single",
      outdoorUnitId: "continental-cdhas26b-33-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdh-series-wall-single-cfg-1",
      slug: "continental-cdh-series-wall-single-cfg-1",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas22b-12-o",
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
      id: "continental-cdh-series-wall-single-cfg-2",
      slug: "continental-cdh-series-wall-single-cfg-2",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas22b-18-o",
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
      id: "continental-cdh-series-wall-single-cfg-3",
      slug: "continental-cdh-series-wall-single-cfg-3",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas22b-24-o",
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
      id: "continental-cdh-series-wall-single-cfg-4",
      slug: "continental-cdh-series-wall-single-cfg-4",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas26b-09-o",
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
      id: "continental-cdh-series-wall-single-cfg-5",
      slug: "continental-cdh-series-wall-single-cfg-5",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas26b-12-o",
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
      id: "continental-cdh-series-wall-single-cfg-6",
      slug: "continental-cdh-series-wall-single-cfg-6",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas26b-18-o",
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
      id: "continental-cdh-series-wall-single-cfg-7",
      slug: "continental-cdh-series-wall-single-cfg-7",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas26b-24-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.6,
      hspf2: 16.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdh-series-wall-single-cfg-8",
      slug: "continental-cdh-series-wall-single-cfg-8",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhamb-27-o",
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
      id: "continental-cdh-series-wall-single-cfg-9",
      slug: "continental-cdh-series-wall-single-cfg-9",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhamb-27-o",
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
      id: "continental-cdh-series-wall-single-cfg-10",
      slug: "continental-cdh-series-wall-single-cfg-10",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhamb-27-o",
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
      id: "continental-cdh-series-wall-single-cfg-11",
      slug: "continental-cdh-series-wall-single-cfg-11",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhamb-36-o",
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
      id: "continental-cdh-series-wall-single-cfg-12",
      slug: "continental-cdh-series-wall-single-cfg-12",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-ndhamb-36-o",
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
      id: "continental-cdh-series-wall-single-cfg-13",
      slug: "continental-cdh-series-wall-single-cfg-13",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-ndhamb-36-o",
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
      id: "continental-cdh-series-wall-single-cfg-14",
      slug: "continental-cdh-series-wall-single-cfg-14",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas22ba-12-o",
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
      id: "continental-cdh-series-wall-single-cfg-15",
      slug: "continental-cdh-series-wall-single-cfg-15",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas22ba-18-o",
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
      id: "continental-cdh-series-wall-single-cfg-16",
      slug: "continental-cdh-series-wall-single-cfg-16",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas22ba-24-o",
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
      id: "continental-cdh-series-wall-single-cfg-17",
      slug: "continental-cdh-series-wall-single-cfg-17",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas26ba-09-o",
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
      id: "continental-cdh-series-wall-single-cfg-18",
      slug: "continental-cdh-series-wall-single-cfg-18",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas26ba-12-o",
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
      id: "continental-cdh-series-wall-single-cfg-19",
      slug: "continental-cdh-series-wall-single-cfg-19",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas26ba-18-o",
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
      id: "continental-cdh-series-wall-single-cfg-20",
      slug: "continental-cdh-series-wall-single-cfg-20",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas26ba-24-o",
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
      id: "continental-cdh-series-wall-single-cfg-21",
      slug: "continental-cdh-series-wall-single-cfg-21",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhas26ba-33-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "continental-cdh-series-wall-single-cfg-22",
      slug: "continental-cdh-series-wall-single-cfg-22",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhambb-18-o",
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
      id: "continental-cdh-series-wall-single-cfg-23",
      slug: "continental-cdh-series-wall-single-cfg-23",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhambb-27-o",
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
      id: "continental-cdh-series-wall-single-cfg-24",
      slug: "continental-cdh-series-wall-single-cfg-24",
      modelId: "continental-cdh-series-wall-single",
      outdoorUnitId: "continental-cdhambb-36-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "continental-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-standard-wall-single-cfg-3",
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
      configurationId: "continental-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-standard-wall-single-cfg-5",
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
      configurationId: "continental-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-standard-wall-single-cfg-7",
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
      configurationId: "continental-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-standard-wall-single-cfg-10",
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
      configurationId: "continental-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-standard-wall-single-cfg-12",
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
      configurationId: "continental-wse-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-wse-series-central-ducted-cfg-2",
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
      configurationId: "continental-wse-series-central-ducted-cfg-3",
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
      configurationId: "continental-wse-series-central-ducted-cfg-4",
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
      configurationId: "continental-wse-series-central-ducted-cfg-5",
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
      configurationId: "continental-wse-series-central-ducted-cfg-6",
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
      configurationId: "continental-wse-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-wse-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-wse-series-central-ducted-cfg-9",
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
      configurationId: "continental-wse-series-central-ducted-cfg-10",
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
      configurationId: "continental-wse-series-central-ducted-cfg-11",
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
      configurationId: "continental-wse-series-central-ducted-cfg-12",
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
      configurationId: "continental-wse-series-central-ducted-cfg-13",
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
      configurationId: "continental-wse-series-central-ducted-cfg-14",
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
      configurationId: "continental-wse-series-central-ducted-cfg-15",
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
      configurationId: "continental-wse-series-central-ducted-cfg-16",
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
      configurationId: "continental-wse-series-central-ducted-cfg-17",
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
      configurationId: "continental-wse-series-central-ducted-cfg-18",
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
      configurationId: "continental-wse-series-central-ducted-cfg-19",
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
      configurationId: "continental-wse-series-central-ducted-cfg-20",
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
      configurationId: "continental-wse-series-central-ducted-cfg-21",
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
      configurationId: "continental-wse-series-central-ducted-cfg-22",
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
      configurationId: "continental-wse-series-central-ducted-cfg-23",
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
      configurationId: "continental-wse-series-central-ducted-cfg-24",
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
      configurationId: "continental-wse-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-wse-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-wse-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-wse-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-standard-central-ducted-cfg-1",
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
      configurationId: "continental-standard-central-ducted-cfg-2",
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
      configurationId: "continental-standard-central-ducted-cfg-3",
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
      configurationId: "continental-standard-central-ducted-cfg-4",
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
      configurationId: "continental-standard-central-ducted-cfg-5",
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
      configurationId: "continental-standard-central-ducted-cfg-6",
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
      configurationId: "continental-standard-central-ducted-cfg-7",
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
      configurationId: "continental-standard-central-ducted-cfg-8",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-1",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-2",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-3",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-4",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-5",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-6",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-7",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-8",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-9",
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
      configurationId: "continental-hyper-heat-central-ducted-cfg-10",
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
      configurationId: "continental-cdha-series-wall-single-cfg-1",
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
      configurationId: "continental-cdha-series-wall-single-cfg-2",
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
      configurationId: "continental-cdha-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-cdha-series-wall-single-cfg-4",
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
      configurationId: "continental-cdha-series-wall-single-cfg-5",
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
      configurationId: "continental-cdha-series-wall-single-cfg-6",
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
      configurationId: "continental-cdha-series-wall-single-cfg-7",
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
      configurationId: "continental-cdha-series-wall-single-cfg-8",
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
      configurationId: "continental-cdha-series-wall-single-cfg-9",
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
      configurationId: "continental-cdha-series-wall-single-cfg-10",
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
      configurationId: "continental-cdha-series-wall-single-cfg-11",
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
      configurationId: "continental-cdha-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-cdh-series-wall-single-cfg-1",
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
      configurationId: "continental-cdh-series-wall-single-cfg-2",
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
      configurationId: "continental-cdh-series-wall-single-cfg-3",
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
      configurationId: "continental-cdh-series-wall-single-cfg-4",
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
      configurationId: "continental-cdh-series-wall-single-cfg-5",
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
      configurationId: "continental-cdh-series-wall-single-cfg-6",
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
      configurationId: "continental-cdh-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19300,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-cdh-series-wall-single-cfg-8",
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
      configurationId: "continental-cdh-series-wall-single-cfg-9",
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
      configurationId: "continental-cdh-series-wall-single-cfg-10",
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
      configurationId: "continental-cdh-series-wall-single-cfg-11",
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
      configurationId: "continental-cdh-series-wall-single-cfg-12",
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
      configurationId: "continental-cdh-series-wall-single-cfg-13",
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
      configurationId: "continental-cdh-series-wall-single-cfg-14",
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
      configurationId: "continental-cdh-series-wall-single-cfg-15",
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
      configurationId: "continental-cdh-series-wall-single-cfg-16",
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
      configurationId: "continental-cdh-series-wall-single-cfg-17",
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
      configurationId: "continental-cdh-series-wall-single-cfg-18",
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
      configurationId: "continental-cdh-series-wall-single-cfg-19",
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
      configurationId: "continental-cdh-series-wall-single-cfg-20",
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
      configurationId: "continental-cdh-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "continental-cdh-series-wall-single-cfg-22",
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
      configurationId: "continental-cdh-series-wall-single-cfg-23",
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
      configurationId: "continental-cdh-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
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
