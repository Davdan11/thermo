import type { BrandDataset } from "../../types";

export const emiDataset: BrandDataset = {
  brand: {
    id: "emi",
    slug: "emi",
    name: "EMI",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "emi-standard",
      slug: "emi-standard",
      name: "Standard",
      brandId: "emi",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series",
      slug: "emi-mh-series",
      name: "MH series",
      brandId: "emi",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-eco-series",
      slug: "emi-eco-series",
      name: "ECO Series",
      brandId: "emi",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-emx-series",
      slug: "emi-emx-series",
      name: "EMX Series",
      brandId: "emi",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mhah-series",
      slug: "emi-mhah-series",
      name: "MHAH Series",
      brandId: "emi",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "emi-standard-wall-single",
      slug: "emi-standard-wall-single",
      name: "Standard",
      seriesId: "emi-standard",
      brandId: "emi",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 29600,
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
      id: "emi-mh-series-wall-single",
      slug: "emi-mh-series-wall-single",
      name: "MH series",
      seriesId: "emi-mh-series",
      brandId: "emi",
      modelNumber: "MH series",
      normalizedModelNumber: "mh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 19,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 13.6,
      cop5FMin: 1.7,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-eco-series-wall-single",
      slug: "emi-eco-series-wall-single",
      name: "ECO Series",
      seriesId: "emi-eco-series",
      brandId: "emi",
      modelNumber: "ECO Series",
      normalizedModelNumber: "eco-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 19000,
      seer2Min: 18.5,
      seer2Max: 21.6,
      hspf2Min: 9,
      hspf2Max: 9.4,
      cop5FMin: 1.88,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-emx-series-wall-single",
      slug: "emi-emx-series-wall-single",
      name: "EMX Series",
      seriesId: "emi-emx-series",
      brandId: "emi",
      modelNumber: "EMX Series",
      normalizedModelNumber: "emx-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 19,
      seer2Max: 27.4,
      hspf2Min: 9.5,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mhah-series-central-ducted",
      slug: "emi-mhah-series-central-ducted",
      name: "MHAH Series",
      seriesId: "emi-mhah-series",
      brandId: "emi",
      modelNumber: "MHAH Series",
      normalizedModelNumber: "mhah-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.3,
      seer2Max: 18,
      hspf2Min: 8.9,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.04,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "emi-sz1h09daa",
      modelNumber: "SZ1H09DAA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-sz1h18daa",
      modelNumber: "SZ1H18DAA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-dhsz109da",
      modelNumber: "DHSZ109DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-dhsz112da",
      modelNumber: "DHSZ112DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-dhmz436da",
      modelNumber: "DHMZ436DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-dhmz327da",
      modelNumber: "DHMZ327DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-sz1h12aaa",
      modelNumber: "SZ1H12AAA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mz2h18daa",
      modelNumber: "MZ2H18DAA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mz3h27daa",
      modelNumber: "MZ3H27DAA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mz5h45daa",
      modelNumber: "MZ5H45DAA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mz4h36daa",
      modelNumber: "MZ4H36DAA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-adsz136da",
      modelNumber: "ADSZ136DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-ecosz112da",
      modelNumber: "ECOSZ112DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-ecosz136da",
      modelNumber: "ECOSZ136DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsz106da",
      modelNumber: "MHSZ106DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsz109da",
      modelNumber: "MHSZ109DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsz112da",
      modelNumber: "MHSZ112DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsz118da",
      modelNumber: "MHSZ118DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsz124da",
      modelNumber: "MHSZ124DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhmz218da",
      modelNumber: "MHMZ218DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhmz327da",
      modelNumber: "MHMZ327DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhmz436da",
      modelNumber: "MHMZ436DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhmz548da",
      modelNumber: "MHMZ548DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-ecosz109da",
      modelNumber: "ECOSZ109DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-ecosz118da",
      modelNumber: "ECOSZ118DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-ecosz124da",
      modelNumber: "ECOSZ124DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-ecosz130da",
      modelNumber: "ECOSZ130DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-emxsz106da",
      modelNumber: "EMXSZ106DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-emxsz109da",
      modelNumber: "EMXSZ109DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-emxsz112da",
      modelNumber: "EMXSZ112DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-emxsz118da",
      modelNumber: "EMXSZ118DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-emxsz124da",
      modelNumber: "EMXSZ124DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-emxmz218da",
      modelNumber: "EMXMZ218DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-emxmz327da",
      modelNumber: "EMXMZ327DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-emxmz436da",
      modelNumber: "EMXMZ436DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-emxmz548da",
      modelNumber: "EMXMZ548DA",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsd118dacfc",
      modelNumber: "MHSD118DACFC",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsd124dacfc",
      modelNumber: "MHSD124DACFC",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsd130dacfc",
      modelNumber: "MHSD130DACFC",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsd136dacfc",
      modelNumber: "MHSD136DACFC",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsd148dacfc",
      modelNumber: "MHSD148DACFC",
      brandId: "emi",
      refrigerant: null as any,
    },
    {
      id: "emi-mhsd160dacfc",
      modelNumber: "MHSD160DACFC",
      brandId: "emi",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "emi-standard-wall-single-cfg-1",
      slug: "emi-standard-wall-single-cfg-1",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-sz1h09daa",
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
      id: "emi-standard-wall-single-cfg-2",
      slug: "emi-standard-wall-single-cfg-2",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-sz1h09daa",
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
      id: "emi-standard-wall-single-cfg-3",
      slug: "emi-standard-wall-single-cfg-3",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-sz1h18daa",
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
      id: "emi-standard-wall-single-cfg-4",
      slug: "emi-standard-wall-single-cfg-4",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-sz1h18daa",
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
      id: "emi-standard-wall-single-cfg-5",
      slug: "emi-standard-wall-single-cfg-5",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-dhsz109da",
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
      id: "emi-standard-wall-single-cfg-6",
      slug: "emi-standard-wall-single-cfg-6",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-dhsz112da",
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
      id: "emi-standard-wall-single-cfg-7",
      slug: "emi-standard-wall-single-cfg-7",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-dhmz436da",
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
      id: "emi-standard-wall-single-cfg-8",
      slug: "emi-standard-wall-single-cfg-8",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-dhmz327da",
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
      id: "emi-standard-wall-single-cfg-9",
      slug: "emi-standard-wall-single-cfg-9",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-sz1h12aaa",
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
      id: "emi-standard-wall-single-cfg-10",
      slug: "emi-standard-wall-single-cfg-10",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-mz2h18daa",
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
      id: "emi-standard-wall-single-cfg-11",
      slug: "emi-standard-wall-single-cfg-11",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-mz3h27daa",
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
      id: "emi-standard-wall-single-cfg-12",
      slug: "emi-standard-wall-single-cfg-12",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-mz5h45daa",
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
      id: "emi-standard-wall-single-cfg-13",
      slug: "emi-standard-wall-single-cfg-13",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-mz4h36daa",
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
      id: "emi-standard-wall-single-cfg-14",
      slug: "emi-standard-wall-single-cfg-14",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-adsz136da",
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
      id: "emi-standard-wall-single-cfg-15",
      slug: "emi-standard-wall-single-cfg-15",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-ecosz112da",
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
      id: "emi-standard-wall-single-cfg-16",
      slug: "emi-standard-wall-single-cfg-16",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-ecosz136da",
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
      id: "emi-standard-wall-single-cfg-17",
      slug: "emi-standard-wall-single-cfg-17",
      modelId: "emi-standard-wall-single",
      outdoorUnitId: "emi-ecosz112da",
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
      id: "emi-mh-series-wall-single-cfg-1",
      slug: "emi-mh-series-wall-single-cfg-1",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhsz106da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 26.5,
      hspf2: 13.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series-wall-single-cfg-2",
      slug: "emi-mh-series-wall-single-cfg-2",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhsz109da",
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
      id: "emi-mh-series-wall-single-cfg-3",
      slug: "emi-mh-series-wall-single-cfg-3",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhsz112da",
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
      id: "emi-mh-series-wall-single-cfg-4",
      slug: "emi-mh-series-wall-single-cfg-4",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhsz118da",
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
      id: "emi-mh-series-wall-single-cfg-5",
      slug: "emi-mh-series-wall-single-cfg-5",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhsz124da",
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
      id: "emi-mh-series-wall-single-cfg-6",
      slug: "emi-mh-series-wall-single-cfg-6",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhsz109da",
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
      id: "emi-mh-series-wall-single-cfg-7",
      slug: "emi-mh-series-wall-single-cfg-7",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhsz112da",
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
      id: "emi-mh-series-wall-single-cfg-8",
      slug: "emi-mh-series-wall-single-cfg-8",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhsz118da",
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
      id: "emi-mh-series-wall-single-cfg-9",
      slug: "emi-mh-series-wall-single-cfg-9",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhsz124da",
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
      id: "emi-mh-series-wall-single-cfg-10",
      slug: "emi-mh-series-wall-single-cfg-10",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz218da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series-wall-single-cfg-11",
      slug: "emi-mh-series-wall-single-cfg-11",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz218da",
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
      id: "emi-mh-series-wall-single-cfg-12",
      slug: "emi-mh-series-wall-single-cfg-12",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz218da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series-wall-single-cfg-13",
      slug: "emi-mh-series-wall-single-cfg-13",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz327da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 23,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series-wall-single-cfg-14",
      slug: "emi-mh-series-wall-single-cfg-14",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz327da",
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
      id: "emi-mh-series-wall-single-cfg-15",
      slug: "emi-mh-series-wall-single-cfg-15",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz327da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.5,
      hspf2: 10.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series-wall-single-cfg-16",
      slug: "emi-mh-series-wall-single-cfg-16",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz436da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series-wall-single-cfg-17",
      slug: "emi-mh-series-wall-single-cfg-17",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz436da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series-wall-single-cfg-18",
      slug: "emi-mh-series-wall-single-cfg-18",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz436da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.6,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series-wall-single-cfg-19",
      slug: "emi-mh-series-wall-single-cfg-19",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz548da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.8,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mh-series-wall-single-cfg-20",
      slug: "emi-mh-series-wall-single-cfg-20",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz548da",
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
      id: "emi-mh-series-wall-single-cfg-21",
      slug: "emi-mh-series-wall-single-cfg-21",
      modelId: "emi-mh-series-wall-single",
      outdoorUnitId: "emi-mhmz548da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.35,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-eco-series-wall-single-cfg-1",
      slug: "emi-eco-series-wall-single-cfg-1",
      modelId: "emi-eco-series-wall-single",
      outdoorUnitId: "emi-ecosz109da",
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
      id: "emi-eco-series-wall-single-cfg-2",
      slug: "emi-eco-series-wall-single-cfg-2",
      modelId: "emi-eco-series-wall-single",
      outdoorUnitId: "emi-ecosz118da",
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
      id: "emi-eco-series-wall-single-cfg-3",
      slug: "emi-eco-series-wall-single-cfg-3",
      modelId: "emi-eco-series-wall-single",
      outdoorUnitId: "emi-ecosz124da",
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
      id: "emi-eco-series-wall-single-cfg-4",
      slug: "emi-eco-series-wall-single-cfg-4",
      modelId: "emi-eco-series-wall-single",
      outdoorUnitId: "emi-ecosz130da",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-eco-series-wall-single-cfg-5",
      slug: "emi-eco-series-wall-single-cfg-5",
      modelId: "emi-eco-series-wall-single",
      outdoorUnitId: "emi-ecosz109da",
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
      id: "emi-eco-series-wall-single-cfg-6",
      slug: "emi-eco-series-wall-single-cfg-6",
      modelId: "emi-eco-series-wall-single",
      outdoorUnitId: "emi-ecosz118da",
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
      id: "emi-eco-series-wall-single-cfg-7",
      slug: "emi-eco-series-wall-single-cfg-7",
      modelId: "emi-eco-series-wall-single",
      outdoorUnitId: "emi-ecosz124da",
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
      id: "emi-emx-series-wall-single-cfg-1",
      slug: "emi-emx-series-wall-single-cfg-1",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxsz106da",
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
      id: "emi-emx-series-wall-single-cfg-2",
      slug: "emi-emx-series-wall-single-cfg-2",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxsz109da",
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
      id: "emi-emx-series-wall-single-cfg-3",
      slug: "emi-emx-series-wall-single-cfg-3",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxsz112da",
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
      id: "emi-emx-series-wall-single-cfg-4",
      slug: "emi-emx-series-wall-single-cfg-4",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxsz118da",
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
      id: "emi-emx-series-wall-single-cfg-5",
      slug: "emi-emx-series-wall-single-cfg-5",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxsz124da",
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
      id: "emi-emx-series-wall-single-cfg-6",
      slug: "emi-emx-series-wall-single-cfg-6",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz218da",
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
      id: "emi-emx-series-wall-single-cfg-7",
      slug: "emi-emx-series-wall-single-cfg-7",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz218da",
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
      id: "emi-emx-series-wall-single-cfg-8",
      slug: "emi-emx-series-wall-single-cfg-8",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz218da",
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
      id: "emi-emx-series-wall-single-cfg-9",
      slug: "emi-emx-series-wall-single-cfg-9",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz327da",
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
      id: "emi-emx-series-wall-single-cfg-10",
      slug: "emi-emx-series-wall-single-cfg-10",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz327da",
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
      id: "emi-emx-series-wall-single-cfg-11",
      slug: "emi-emx-series-wall-single-cfg-11",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz327da",
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
      id: "emi-emx-series-wall-single-cfg-12",
      slug: "emi-emx-series-wall-single-cfg-12",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz436da",
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
      id: "emi-emx-series-wall-single-cfg-13",
      slug: "emi-emx-series-wall-single-cfg-13",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz436da",
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
      id: "emi-emx-series-wall-single-cfg-14",
      slug: "emi-emx-series-wall-single-cfg-14",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz436da",
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
      id: "emi-emx-series-wall-single-cfg-15",
      slug: "emi-emx-series-wall-single-cfg-15",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz548da",
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
      id: "emi-emx-series-wall-single-cfg-16",
      slug: "emi-emx-series-wall-single-cfg-16",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz548da",
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
      id: "emi-emx-series-wall-single-cfg-17",
      slug: "emi-emx-series-wall-single-cfg-17",
      modelId: "emi-emx-series-wall-single",
      outdoorUnitId: "emi-emxmz548da",
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
      id: "emi-mhah-series-central-ducted-cfg-1",
      slug: "emi-mhah-series-central-ducted-cfg-1",
      modelId: "emi-mhah-series-central-ducted",
      outdoorUnitId: "emi-mhsd118dacfc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mhah-series-central-ducted-cfg-2",
      slug: "emi-mhah-series-central-ducted-cfg-2",
      modelId: "emi-mhah-series-central-ducted",
      outdoorUnitId: "emi-mhsd124dacfc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mhah-series-central-ducted-cfg-3",
      slug: "emi-mhah-series-central-ducted-cfg-3",
      modelId: "emi-mhah-series-central-ducted",
      outdoorUnitId: "emi-mhsd130dacfc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mhah-series-central-ducted-cfg-4",
      slug: "emi-mhah-series-central-ducted-cfg-4",
      modelId: "emi-mhah-series-central-ducted",
      outdoorUnitId: "emi-mhsd136dacfc",
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
      id: "emi-mhah-series-central-ducted-cfg-5",
      slug: "emi-mhah-series-central-ducted-cfg-5",
      modelId: "emi-mhah-series-central-ducted",
      outdoorUnitId: "emi-mhsd148dacfc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "emi-mhah-series-central-ducted-cfg-6",
      slug: "emi-mhah-series-central-ducted-cfg-6",
      modelId: "emi-mhah-series-central-ducted",
      outdoorUnitId: "emi-mhsd160dacfc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "emi-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-standard-wall-single-cfg-2",
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
      configurationId: "emi-standard-wall-single-cfg-3",
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
      configurationId: "emi-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-standard-wall-single-cfg-5",
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
      configurationId: "emi-standard-wall-single-cfg-6",
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
      configurationId: "emi-standard-wall-single-cfg-7",
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
      configurationId: "emi-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-standard-wall-single-cfg-11",
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
      configurationId: "emi-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-standard-wall-single-cfg-13",
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
      configurationId: "emi-standard-wall-single-cfg-14",
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
      configurationId: "emi-standard-wall-single-cfg-15",
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
      configurationId: "emi-standard-wall-single-cfg-16",
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
      configurationId: "emi-standard-wall-single-cfg-17",
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
      configurationId: "emi-mh-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mh-series-wall-single-cfg-2",
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
      configurationId: "emi-mh-series-wall-single-cfg-3",
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
      configurationId: "emi-mh-series-wall-single-cfg-4",
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
      configurationId: "emi-mh-series-wall-single-cfg-5",
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
      configurationId: "emi-mh-series-wall-single-cfg-6",
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
      configurationId: "emi-mh-series-wall-single-cfg-7",
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
      configurationId: "emi-mh-series-wall-single-cfg-8",
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
      configurationId: "emi-mh-series-wall-single-cfg-9",
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
      configurationId: "emi-mh-series-wall-single-cfg-10",
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
      configurationId: "emi-mh-series-wall-single-cfg-11",
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
      configurationId: "emi-mh-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mh-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mh-series-wall-single-cfg-14",
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
      configurationId: "emi-mh-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mh-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mh-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mh-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mh-series-wall-single-cfg-19",
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
      configurationId: "emi-mh-series-wall-single-cfg-20",
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
      configurationId: "emi-mh-series-wall-single-cfg-21",
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
      configurationId: "emi-eco-series-wall-single-cfg-1",
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
      configurationId: "emi-eco-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-eco-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-eco-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-eco-series-wall-single-cfg-5",
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
      configurationId: "emi-eco-series-wall-single-cfg-6",
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
      configurationId: "emi-eco-series-wall-single-cfg-7",
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
      configurationId: "emi-emx-series-wall-single-cfg-1",
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
      configurationId: "emi-emx-series-wall-single-cfg-2",
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
      configurationId: "emi-emx-series-wall-single-cfg-3",
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
      configurationId: "emi-emx-series-wall-single-cfg-4",
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
      configurationId: "emi-emx-series-wall-single-cfg-5",
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
      configurationId: "emi-emx-series-wall-single-cfg-6",
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
      configurationId: "emi-emx-series-wall-single-cfg-7",
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
      configurationId: "emi-emx-series-wall-single-cfg-8",
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
      configurationId: "emi-emx-series-wall-single-cfg-9",
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
      configurationId: "emi-emx-series-wall-single-cfg-10",
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
      configurationId: "emi-emx-series-wall-single-cfg-11",
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
      configurationId: "emi-emx-series-wall-single-cfg-12",
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
      configurationId: "emi-emx-series-wall-single-cfg-13",
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
      configurationId: "emi-emx-series-wall-single-cfg-14",
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
      configurationId: "emi-emx-series-wall-single-cfg-15",
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
      configurationId: "emi-emx-series-wall-single-cfg-16",
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
      configurationId: "emi-emx-series-wall-single-cfg-17",
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
      configurationId: "emi-mhah-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mhah-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mhah-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "emi-mhah-series-central-ducted-cfg-4",
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
      configurationId: "emi-mhah-series-central-ducted-cfg-5",
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
      configurationId: "emi-mhah-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
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
