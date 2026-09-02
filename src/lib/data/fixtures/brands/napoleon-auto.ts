import type { BrandDataset } from "../../types";

export const napoleonDataset: BrandDataset = {
  brand: {
    id: "napoleon",
    slug: "napoleon",
    name: "NAPOLEON",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "napoleon-standard",
      slug: "napoleon-standard",
      name: "Standard",
      brandId: "napoleon",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-nh-series",
      slug: "napoleon-nh-series",
      name: "NH series",
      brandId: "napoleon",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series",
      slug: "napoleon-ndh-series",
      name: "NDH series",
      brandId: "napoleon",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndha-series",
      slug: "napoleon-ndha-series",
      name: "NDHA Series",
      brandId: "napoleon",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-wse-series",
      slug: "napoleon-wse-series",
      name: "WSE Series",
      brandId: "napoleon",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-hyper-heat",
      slug: "napoleon-hyper-heat",
      name: "Hyper Heat",
      brandId: "napoleon",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-cdh-series",
      slug: "napoleon-cdh-series",
      name: "CDH Series",
      brandId: "napoleon",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-cdha-series",
      slug: "napoleon-cdha-series",
      name: "CDHA Series",
      brandId: "napoleon",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series",
      slug: "napoleon-f-series",
      name: "F Series",
      brandId: "napoleon",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "napoleon-standard-wall-single",
      slug: "napoleon-standard-wall-single",
      name: "Standard",
      seriesId: "napoleon-standard",
      brandId: "napoleon",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 45000,
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
      id: "napoleon-nh-series-wall-single",
      slug: "napoleon-nh-series-wall-single",
      name: "NH series",
      seriesId: "napoleon-nh-series",
      brandId: "napoleon",
      modelNumber: "NH series",
      normalizedModelNumber: "nh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 21600,
      heatingCapacity5FMinBtu: 10900,
      heatingCapacity5FMaxBtu: 19400,
      seer2Min: 18.9,
      seer2Max: 19.4,
      hspf2Min: 10,
      hspf2Max: 10.4,
      cop5FMin: 1.89,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-wall-single",
      slug: "napoleon-ndh-series-wall-single",
      name: "NDH series",
      seriesId: "napoleon-ndh-series",
      brandId: "napoleon",
      modelNumber: "NDH series",
      normalizedModelNumber: "ndh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 18.4,
      seer2Max: 28.1,
      hspf2Min: 9.5,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndha-series-wall-single",
      slug: "napoleon-ndha-series-wall-single",
      name: "NDHA Series",
      seriesId: "napoleon-ndha-series",
      brandId: "napoleon",
      modelNumber: "NDHA Series",
      normalizedModelNumber: "ndha-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 17400,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 21,
      seer2Max: 21.5,
      hspf2Min: 8.5,
      hspf2Max: 11.4,
      cop5FMin: 1.9,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-wse-series-central-ducted",
      slug: "napoleon-wse-series-central-ducted",
      name: "WSE Series",
      seriesId: "napoleon-wse-series",
      brandId: "napoleon",
      modelNumber: "WSE Series",
      normalizedModelNumber: "wse-series",
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
      id: "napoleon-standard-central-ducted",
      slug: "napoleon-standard-central-ducted",
      name: "Standard",
      seriesId: "napoleon-standard",
      brandId: "napoleon",
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
      id: "napoleon-hyper-heat-central-ducted",
      slug: "napoleon-hyper-heat-central-ducted",
      name: "Hyper Heat",
      seriesId: "napoleon-hyper-heat",
      brandId: "napoleon",
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
      id: "napoleon-cdh-series-wall-single",
      slug: "napoleon-cdh-series-wall-single",
      name: "CDH Series",
      seriesId: "napoleon-cdh-series",
      brandId: "napoleon",
      modelNumber: "CDH Series",
      normalizedModelNumber: "cdh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 19.4,
      seer2Max: 19.4,
      hspf2Min: 10.4,
      hspf2Max: 10.4,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-cdha-series-wall-single",
      slug: "napoleon-cdha-series-wall-single",
      name: "CDHA Series",
      seriesId: "napoleon-cdha-series",
      brandId: "napoleon",
      modelNumber: "CDHA Series",
      normalizedModelNumber: "cdha-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19.5,
      seer2Max: 19.5,
      hspf2Min: 10.5,
      hspf2Max: 10.5,
      cop5FMin: 1.98,
      cop5FMax: 1.98,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted",
      slug: "napoleon-f-series-central-ducted",
      name: "F Series",
      seriesId: "napoleon-f-series",
      brandId: "napoleon",
      modelNumber: "F Series",
      normalizedModelNumber: "f-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 18000,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 1.75,
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
      id: "napoleon-nh25-09f-o",
      modelNumber: "NH25-09F-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nh25-12f-o",
      modelNumber: "NH25-12F-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nh21-18f-o",
      modelNumber: "NH21-18F-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nmzo-27f-b",
      modelNumber: "NMZO-27F-B",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nhas-18-o",
      modelNumber: "NHAS-18-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nh21-09f-o",
      modelNumber: "NH21-09F-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nh21-12f-o",
      modelNumber: "NH21-12F-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nh21-24f-o",
      modelNumber: "NH21-24F-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nmzo-36f-b",
      modelNumber: "NMZO-36F-B",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ns18hv48a60",
      modelNumber: "NS18HV48A60",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhbs20-12-o",
      modelNumber: "NDHBS20-12-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas22b-12-o",
      modelNumber: "NDHAS22B-12-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas22b-18-o",
      modelNumber: "NDHAS22B-18-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas22b-24-o",
      modelNumber: "NDHAS22B-24-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26b-09-o",
      modelNumber: "NDHAS26B-09-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26b-12-o",
      modelNumber: "NDHAS26B-12-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26b-18-o",
      modelNumber: "NDHAS26B-18-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26b-24-o",
      modelNumber: "NDHAS26B-24-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26b-36-o",
      modelNumber: "NDHAS26B-36-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhamb-27-o",
      modelNumber: "NDHAMB-27-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26b-33-o",
      modelNumber: "NDHAS26B-33-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhambb-53-o",
      modelNumber: "NDHAMBB-53-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nh25-18h-o",
      modelNumber: "NH25-18H-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-nh25-24h-o",
      modelNumber: "NH25-24H-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas22-12-o",
      modelNumber: "NDHAS22-12-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas22-18-o",
      modelNumber: "NDHAS22-18-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26-09-o",
      modelNumber: "NDHAS26-09-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26-12-o",
      modelNumber: "NDHAS26-12-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26-18-o",
      modelNumber: "NDHAS26-18-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndham-28-o",
      modelNumber: "NDHAM-28-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndham-36-o",
      modelNumber: "NDHAM-36-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas22ba-12-o",
      modelNumber: "NDHAS22BA-12-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas22ba-18-o",
      modelNumber: "NDHAS22BA-18-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas22ba-24-o",
      modelNumber: "NDHAS22BA-24-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26ba-09-o",
      modelNumber: "NDHAS26BA-09-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26ba-12-o",
      modelNumber: "NDHAS26BA-12-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26ba-18-o",
      modelNumber: "NDHAS26BA-18-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26ba-24-o",
      modelNumber: "NDHAS26BA-24-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26ba-33-o",
      modelNumber: "NDHAS26BA-33-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhambb-18-o",
      modelNumber: "NDHAMBB-18-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhambb-27-o",
      modelNumber: "NDHAMBB-27-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhambb-36-o",
      modelNumber: "NDHAMBB-36-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26ba-06-o",
      modelNumber: "NDHAS26BA-06-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhambb-48-o",
      modelNumber: "NDHAMBB-48-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas22-24-o",
      modelNumber: "NDHAS22-24-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhas26-24-o",
      modelNumber: "NDHAS26-24-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-wsehv2436ra1-n",
      modelNumber: "WSEHV2436RA1-N",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-wsehv4860ra1-n",
      modelNumber: "WSEHV4860RA1-N",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-ndhamb-36-o",
      modelNumber: "NDHAMB-36-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-cdhas26b-33-o",
      modelNumber: "CDHAS26B-33-O",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-wsehv2436ba1-n",
      modelNumber: "WSEHV2436BA1-N",
      brandId: "napoleon",
      refrigerant: null as any,
    },
    {
      id: "napoleon-wsehv4860ba1-n",
      modelNumber: "WSEHV4860BA1-N",
      brandId: "napoleon",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "napoleon-standard-wall-single-cfg-1",
      slug: "napoleon-standard-wall-single-cfg-1",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nh25-09f-o",
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
      id: "napoleon-standard-wall-single-cfg-2",
      slug: "napoleon-standard-wall-single-cfg-2",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nh25-12f-o",
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
      id: "napoleon-standard-wall-single-cfg-3",
      slug: "napoleon-standard-wall-single-cfg-3",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nh21-18f-o",
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
      id: "napoleon-standard-wall-single-cfg-4",
      slug: "napoleon-standard-wall-single-cfg-4",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nmzo-27f-b",
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
      id: "napoleon-standard-wall-single-cfg-5",
      slug: "napoleon-standard-wall-single-cfg-5",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nhas-18-o",
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
      id: "napoleon-standard-wall-single-cfg-6",
      slug: "napoleon-standard-wall-single-cfg-6",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nh21-09f-o",
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
      id: "napoleon-standard-wall-single-cfg-7",
      slug: "napoleon-standard-wall-single-cfg-7",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nh21-12f-o",
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
      id: "napoleon-standard-wall-single-cfg-8",
      slug: "napoleon-standard-wall-single-cfg-8",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nh21-18f-o",
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
      id: "napoleon-standard-wall-single-cfg-9",
      slug: "napoleon-standard-wall-single-cfg-9",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nh21-24f-o",
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
      id: "napoleon-standard-wall-single-cfg-10",
      slug: "napoleon-standard-wall-single-cfg-10",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-nmzo-36f-b",
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
      id: "napoleon-standard-wall-single-cfg-11",
      slug: "napoleon-standard-wall-single-cfg-11",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-standard-wall-single-cfg-12",
      slug: "napoleon-standard-wall-single-cfg-12",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-standard-wall-single-cfg-13",
      slug: "napoleon-standard-wall-single-cfg-13",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhbs20-12-o",
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
      id: "napoleon-standard-wall-single-cfg-14",
      slug: "napoleon-standard-wall-single-cfg-14",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhas22b-12-o",
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
      id: "napoleon-standard-wall-single-cfg-15",
      slug: "napoleon-standard-wall-single-cfg-15",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhas22b-18-o",
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
      id: "napoleon-standard-wall-single-cfg-16",
      slug: "napoleon-standard-wall-single-cfg-16",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhas22b-24-o",
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
      id: "napoleon-standard-wall-single-cfg-17",
      slug: "napoleon-standard-wall-single-cfg-17",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhas26b-09-o",
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
      id: "napoleon-standard-wall-single-cfg-18",
      slug: "napoleon-standard-wall-single-cfg-18",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhas26b-12-o",
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
      id: "napoleon-standard-wall-single-cfg-19",
      slug: "napoleon-standard-wall-single-cfg-19",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhas26b-18-o",
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
      id: "napoleon-standard-wall-single-cfg-20",
      slug: "napoleon-standard-wall-single-cfg-20",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhas26b-24-o",
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
      id: "napoleon-standard-wall-single-cfg-21",
      slug: "napoleon-standard-wall-single-cfg-21",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhas26b-36-o",
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
      id: "napoleon-standard-wall-single-cfg-22",
      slug: "napoleon-standard-wall-single-cfg-22",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhamb-27-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-standard-wall-single-cfg-23",
      slug: "napoleon-standard-wall-single-cfg-23",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhamb-27-o",
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
      id: "napoleon-standard-wall-single-cfg-24",
      slug: "napoleon-standard-wall-single-cfg-24",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhamb-27-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-standard-wall-single-cfg-25",
      slug: "napoleon-standard-wall-single-cfg-25",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhas26b-33-o",
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
      id: "napoleon-standard-wall-single-cfg-26",
      slug: "napoleon-standard-wall-single-cfg-26",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhambb-53-o",
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
      id: "napoleon-standard-wall-single-cfg-27",
      slug: "napoleon-standard-wall-single-cfg-27",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhambb-53-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-standard-wall-single-cfg-28",
      slug: "napoleon-standard-wall-single-cfg-28",
      modelId: "napoleon-standard-wall-single",
      outdoorUnitId: "napoleon-ndhambb-53-o",
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
      id: "napoleon-nh-series-wall-single-cfg-1",
      slug: "napoleon-nh-series-wall-single-cfg-1",
      modelId: "napoleon-nh-series-wall-single",
      outdoorUnitId: "napoleon-nh25-18h-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-nh-series-wall-single-cfg-2",
      slug: "napoleon-nh-series-wall-single-cfg-2",
      modelId: "napoleon-nh-series-wall-single",
      outdoorUnitId: "napoleon-nh25-18h-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-nh-series-wall-single-cfg-3",
      slug: "napoleon-nh-series-wall-single-cfg-3",
      modelId: "napoleon-nh-series-wall-single",
      outdoorUnitId: "napoleon-nh25-24h-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-wall-single-cfg-1",
      slug: "napoleon-ndh-series-wall-single-cfg-1",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas22-12-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-2",
      slug: "napoleon-ndh-series-wall-single-cfg-2",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas22-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-3",
      slug: "napoleon-ndh-series-wall-single-cfg-3",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26-09-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 28.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-wall-single-cfg-4",
      slug: "napoleon-ndh-series-wall-single-cfg-4",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26-12-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-5",
      slug: "napoleon-ndh-series-wall-single-cfg-5",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-6",
      slug: "napoleon-ndh-series-wall-single-cfg-6",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndham-28-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-7",
      slug: "napoleon-ndh-series-wall-single-cfg-7",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndham-28-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-8",
      slug: "napoleon-ndh-series-wall-single-cfg-8",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndham-28-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-9",
      slug: "napoleon-ndh-series-wall-single-cfg-9",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndham-36-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-10",
      slug: "napoleon-ndh-series-wall-single-cfg-10",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndham-36-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-11",
      slug: "napoleon-ndh-series-wall-single-cfg-11",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndham-36-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-12",
      slug: "napoleon-ndh-series-wall-single-cfg-12",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas22ba-12-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-13",
      slug: "napoleon-ndh-series-wall-single-cfg-13",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas22ba-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-14",
      slug: "napoleon-ndh-series-wall-single-cfg-14",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas22ba-24-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-15",
      slug: "napoleon-ndh-series-wall-single-cfg-15",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-09-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-16",
      slug: "napoleon-ndh-series-wall-single-cfg-16",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-12-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-17",
      slug: "napoleon-ndh-series-wall-single-cfg-17",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-18",
      slug: "napoleon-ndh-series-wall-single-cfg-18",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-24-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-19",
      slug: "napoleon-ndh-series-wall-single-cfg-19",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-33-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-20",
      slug: "napoleon-ndh-series-wall-single-cfg-20",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-21",
      slug: "napoleon-ndh-series-wall-single-cfg-21",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-27-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-22",
      slug: "napoleon-ndh-series-wall-single-cfg-22",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-36-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-23",
      slug: "napoleon-ndh-series-wall-single-cfg-23",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-06-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.5,
      hspf2: 14.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-wall-single-cfg-24",
      slug: "napoleon-ndh-series-wall-single-cfg-24",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-09-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-25",
      slug: "napoleon-ndh-series-wall-single-cfg-25",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-12-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-26",
      slug: "napoleon-ndh-series-wall-single-cfg-26",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-27",
      slug: "napoleon-ndh-series-wall-single-cfg-27",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-24-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-28",
      slug: "napoleon-ndh-series-wall-single-cfg-28",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-33-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-29",
      slug: "napoleon-ndh-series-wall-single-cfg-29",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-09-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-30",
      slug: "napoleon-ndh-series-wall-single-cfg-30",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-12-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-31",
      slug: "napoleon-ndh-series-wall-single-cfg-31",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-32",
      slug: "napoleon-ndh-series-wall-single-cfg-32",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-24-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-33",
      slug: "napoleon-ndh-series-wall-single-cfg-33",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-09-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-34",
      slug: "napoleon-ndh-series-wall-single-cfg-34",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-12-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-35",
      slug: "napoleon-ndh-series-wall-single-cfg-35",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-36",
      slug: "napoleon-ndh-series-wall-single-cfg-36",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-24-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-37",
      slug: "napoleon-ndh-series-wall-single-cfg-37",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-09-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.2,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-wall-single-cfg-38",
      slug: "napoleon-ndh-series-wall-single-cfg-38",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-12-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-39",
      slug: "napoleon-ndh-series-wall-single-cfg-39",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26ba-18-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-wall-single-cfg-40",
      slug: "napoleon-ndh-series-wall-single-cfg-40",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-41",
      slug: "napoleon-ndh-series-wall-single-cfg-41",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-18-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-42",
      slug: "napoleon-ndh-series-wall-single-cfg-42",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-27-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-43",
      slug: "napoleon-ndh-series-wall-single-cfg-43",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-27-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-44",
      slug: "napoleon-ndh-series-wall-single-cfg-44",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-36-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-45",
      slug: "napoleon-ndh-series-wall-single-cfg-45",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-36-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-46",
      slug: "napoleon-ndh-series-wall-single-cfg-46",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-48-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-47",
      slug: "napoleon-ndh-series-wall-single-cfg-47",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-48-o",
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
      id: "napoleon-ndh-series-wall-single-cfg-48",
      slug: "napoleon-ndh-series-wall-single-cfg-48",
      modelId: "napoleon-ndh-series-wall-single",
      outdoorUnitId: "napoleon-ndhambb-48-o",
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
      id: "napoleon-ndha-series-wall-single-cfg-1",
      slug: "napoleon-ndha-series-wall-single-cfg-1",
      modelId: "napoleon-ndha-series-wall-single",
      outdoorUnitId: "napoleon-ndhas22-24-o",
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
      id: "napoleon-ndha-series-wall-single-cfg-2",
      slug: "napoleon-ndha-series-wall-single-cfg-2",
      modelId: "napoleon-ndha-series-wall-single",
      outdoorUnitId: "napoleon-ndhas26-24-o",
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
      id: "napoleon-wse-series-central-ducted-cfg-1",
      slug: "napoleon-wse-series-central-ducted-cfg-1",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-2",
      slug: "napoleon-wse-series-central-ducted-cfg-2",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-3",
      slug: "napoleon-wse-series-central-ducted-cfg-3",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-4",
      slug: "napoleon-wse-series-central-ducted-cfg-4",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-5",
      slug: "napoleon-wse-series-central-ducted-cfg-5",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-6",
      slug: "napoleon-wse-series-central-ducted-cfg-6",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-7",
      slug: "napoleon-wse-series-central-ducted-cfg-7",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-8",
      slug: "napoleon-wse-series-central-ducted-cfg-8",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-9",
      slug: "napoleon-wse-series-central-ducted-cfg-9",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-10",
      slug: "napoleon-wse-series-central-ducted-cfg-10",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-11",
      slug: "napoleon-wse-series-central-ducted-cfg-11",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-wse-series-central-ducted-cfg-12",
      slug: "napoleon-wse-series-central-ducted-cfg-12",
      modelId: "napoleon-wse-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ra1-n",
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
      id: "napoleon-standard-central-ducted-cfg-1",
      slug: "napoleon-standard-central-ducted-cfg-1",
      modelId: "napoleon-standard-central-ducted",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-standard-central-ducted-cfg-2",
      slug: "napoleon-standard-central-ducted-cfg-2",
      modelId: "napoleon-standard-central-ducted",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-standard-central-ducted-cfg-3",
      slug: "napoleon-standard-central-ducted-cfg-3",
      modelId: "napoleon-standard-central-ducted",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-standard-central-ducted-cfg-4",
      slug: "napoleon-standard-central-ducted-cfg-4",
      modelId: "napoleon-standard-central-ducted",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-standard-central-ducted-cfg-5",
      slug: "napoleon-standard-central-ducted-cfg-5",
      modelId: "napoleon-standard-central-ducted",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-standard-central-ducted-cfg-6",
      slug: "napoleon-standard-central-ducted-cfg-6",
      modelId: "napoleon-standard-central-ducted",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-standard-central-ducted-cfg-7",
      slug: "napoleon-standard-central-ducted-cfg-7",
      modelId: "napoleon-standard-central-ducted",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-standard-central-ducted-cfg-8",
      slug: "napoleon-standard-central-ducted-cfg-8",
      modelId: "napoleon-standard-central-ducted",
      outdoorUnitId: "napoleon-ns18hv48a60",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-1",
      slug: "napoleon-hyper-heat-central-ducted-cfg-1",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-2",
      slug: "napoleon-hyper-heat-central-ducted-cfg-2",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-3",
      slug: "napoleon-hyper-heat-central-ducted-cfg-3",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-4",
      slug: "napoleon-hyper-heat-central-ducted-cfg-4",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-5",
      slug: "napoleon-hyper-heat-central-ducted-cfg-5",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-6",
      slug: "napoleon-hyper-heat-central-ducted-cfg-6",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-7",
      slug: "napoleon-hyper-heat-central-ducted-cfg-7",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-8",
      slug: "napoleon-hyper-heat-central-ducted-cfg-8",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-9",
      slug: "napoleon-hyper-heat-central-ducted-cfg-9",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-hyper-heat-central-ducted-cfg-10",
      slug: "napoleon-hyper-heat-central-ducted-cfg-10",
      modelId: "napoleon-hyper-heat-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ra1-n",
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
      id: "napoleon-cdh-series-wall-single-cfg-1",
      slug: "napoleon-cdh-series-wall-single-cfg-1",
      modelId: "napoleon-cdh-series-wall-single",
      outdoorUnitId: "napoleon-ndhamb-36-o",
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
      id: "napoleon-cdh-series-wall-single-cfg-2",
      slug: "napoleon-cdh-series-wall-single-cfg-2",
      modelId: "napoleon-cdh-series-wall-single",
      outdoorUnitId: "napoleon-ndhamb-36-o",
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
      id: "napoleon-cdh-series-wall-single-cfg-3",
      slug: "napoleon-cdh-series-wall-single-cfg-3",
      modelId: "napoleon-cdh-series-wall-single",
      outdoorUnitId: "napoleon-ndhamb-36-o",
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
      id: "napoleon-cdha-series-wall-single-cfg-1",
      slug: "napoleon-cdha-series-wall-single-cfg-1",
      modelId: "napoleon-cdha-series-wall-single",
      outdoorUnitId: "napoleon-cdhas26b-33-o",
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
      id: "napoleon-f-series-central-ducted-cfg-1",
      slug: "napoleon-f-series-central-ducted-cfg-1",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ba1-n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-2",
      slug: "napoleon-f-series-central-ducted-cfg-2",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ba1-n",
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
      id: "napoleon-f-series-central-ducted-cfg-3",
      slug: "napoleon-f-series-central-ducted-cfg-3",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv2436ba1-n",
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
      id: "napoleon-f-series-central-ducted-cfg-4",
      slug: "napoleon-f-series-central-ducted-cfg-4",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon-wsehv4860ba1-n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "napoleon-standard-wall-single-cfg-1",
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
      configurationId: "napoleon-standard-wall-single-cfg-2",
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
      configurationId: "napoleon-standard-wall-single-cfg-3",
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
      configurationId: "napoleon-standard-wall-single-cfg-4",
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
      configurationId: "napoleon-standard-wall-single-cfg-5",
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
      configurationId: "napoleon-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-7",
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
      configurationId: "napoleon-standard-wall-single-cfg-8",
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
      configurationId: "napoleon-standard-wall-single-cfg-9",
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
      configurationId: "napoleon-standard-wall-single-cfg-10",
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
      configurationId: "napoleon-standard-wall-single-cfg-11",
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
      configurationId: "napoleon-standard-wall-single-cfg-12",
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
      configurationId: "napoleon-standard-wall-single-cfg-13",
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
      configurationId: "napoleon-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-15",
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
      configurationId: "napoleon-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-21",
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
      configurationId: "napoleon-standard-wall-single-cfg-22",
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
      configurationId: "napoleon-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-24",
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
      configurationId: "napoleon-standard-wall-single-cfg-25",
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
      configurationId: "napoleon-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-nh-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-nh-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-nh-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-wall-single-cfg-1",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-2",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-wall-single-cfg-4",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-5",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-6",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-7",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-8",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-9",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-wall-single-cfg-11",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-12",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-13",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-14",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-15",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-16",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-17",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-18",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-19",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-20",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-21",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-22",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-wall-single-cfg-24",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-25",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-wall-single-cfg-27",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-28",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-29",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-30",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-31",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-wall-single-cfg-33",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-34",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-35",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-36",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-wall-single-cfg-40",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-41",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-42",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-43",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-44",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-45",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-46",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-47",
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
      configurationId: "napoleon-ndh-series-wall-single-cfg-48",
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
      configurationId: "napoleon-ndha-series-wall-single-cfg-1",
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
      configurationId: "napoleon-ndha-series-wall-single-cfg-2",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-1",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-2",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-3",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-4",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-5",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-6",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-7",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-8",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-9",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-10",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-11",
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
      configurationId: "napoleon-wse-series-central-ducted-cfg-12",
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
      configurationId: "napoleon-standard-central-ducted-cfg-1",
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
      configurationId: "napoleon-standard-central-ducted-cfg-2",
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
      configurationId: "napoleon-standard-central-ducted-cfg-3",
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
      configurationId: "napoleon-standard-central-ducted-cfg-4",
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
      configurationId: "napoleon-standard-central-ducted-cfg-5",
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
      configurationId: "napoleon-standard-central-ducted-cfg-6",
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
      configurationId: "napoleon-standard-central-ducted-cfg-7",
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
      configurationId: "napoleon-standard-central-ducted-cfg-8",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-1",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-2",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-3",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-4",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-5",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-6",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-7",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-8",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-9",
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
      configurationId: "napoleon-hyper-heat-central-ducted-cfg-10",
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
      configurationId: "napoleon-cdh-series-wall-single-cfg-1",
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
      configurationId: "napoleon-cdh-series-wall-single-cfg-2",
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
      configurationId: "napoleon-cdh-series-wall-single-cfg-3",
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
      configurationId: "napoleon-cdha-series-wall-single-cfg-1",
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
      configurationId: "napoleon-f-series-central-ducted-cfg-1",
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
      configurationId: "napoleon-f-series-central-ducted-cfg-2",
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
      configurationId: "napoleon-f-series-central-ducted-cfg-3",
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
      configurationId: "napoleon-f-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
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
