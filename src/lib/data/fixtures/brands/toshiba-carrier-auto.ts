import type { BrandDataset } from "../../types";

export const toshibacarrierDataset: BrandDataset = {
  brand: {
    id: "toshiba-carrier",
    slug: "toshiba-carrier",
    name: "TOSHIBA CARRIER",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "toshiba-carrier-standard",
      slug: "toshiba-carrier-standard",
      name: "Standard",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0367hs-ul",
      slug: "toshiba-carrier-mcy-map0367hs-ul",
      name: "MCY-MAP0367HS-UL",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0487hs-ul",
      slug: "toshiba-carrier-mcy-map0487hs-ul",
      name: "MCY-MAP0487HS-UL*",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0607hs-ul",
      slug: "toshiba-carrier-mcy-map0607hs-ul",
      name: "MCY-MAP0607HS-UL*",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp121at2p-ul",
      slug: "toshiba-carrier-rav-bp121at2p-ul",
      name: "RAV-BP121AT2P-UL",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp181at2p-ul",
      slug: "toshiba-carrier-rav-bp181at2p-ul",
      name: "RAV-BP181AT2P-UL",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp241at2p-ul",
      slug: "toshiba-carrier-rav-bp241at2p-ul",
      name: "RAV-BP241AT2P-UL",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp301at2p-ul",
      slug: "toshiba-carrier-rav-bp301at2p-ul",
      name: "RAV-BP301AT2P-UL",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp361at2p-ul",
      slug: "toshiba-carrier-rav-bp361at2p-ul",
      name: "RAV-BP361AT2P-UL",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp421at2p-ul",
      slug: "toshiba-carrier-rav-bp421at2p-ul",
      name: "RAV-BP421AT2P-UL",
      brandId: "toshiba-carrier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "toshiba-carrier-standard-wall-single",
      slug: "toshiba-carrier-standard-wall-single",
      name: "Standard",
      seriesId: "toshiba-carrier-standard",
      brandId: "toshiba-carrier",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8400,
      heatingCapacity5FMaxBtu: 35400,
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
      id: "toshiba-carrier-mcy-map0367hs-ul-wall-single",
      slug: "toshiba-carrier-mcy-map0367hs-ul-wall-single",
      name: "MCY-MAP0367HS-UL",
      seriesId: "toshiba-carrier-mcy-map0367hs-ul",
      brandId: "toshiba-carrier",
      modelNumber: "MCY-MAP0367HS-UL",
      normalizedModelNumber: "mcy-map0367hs-ul",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 22.8,
      seer2Max: 22.8,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0487hs-ul-wall-single",
      slug: "toshiba-carrier-mcy-map0487hs-ul-wall-single",
      name: "MCY-MAP0487HS-UL*",
      seriesId: "toshiba-carrier-mcy-map0487hs-ul",
      brandId: "toshiba-carrier",
      modelNumber: "MCY-MAP0487HS-UL*",
      normalizedModelNumber: "mcy-map0487hs-ul",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 32000,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 20.25,
      seer2Max: 20.25,
      hspf2Min: 10.15,
      hspf2Max: 10.15,
      cop5FMin: 2.55,
      cop5FMax: 2.55,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0607hs-ul-wall-single",
      slug: "toshiba-carrier-mcy-map0607hs-ul-wall-single",
      name: "MCY-MAP0607HS-UL*",
      seriesId: "toshiba-carrier-mcy-map0607hs-ul",
      brandId: "toshiba-carrier",
      modelNumber: "MCY-MAP0607HS-UL*",
      normalizedModelNumber: "mcy-map0607hs-ul",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      heatingCapacity5FMinBtu: 40000,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 23.1,
      seer2Max: 23.1,
      hspf2Min: 10.6,
      hspf2Max: 10.6,
      cop5FMin: 2.4,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp121at2p-ul-wall-single",
      slug: "toshiba-carrier-rav-bp121at2p-ul-wall-single",
      name: "RAV-BP121AT2P-UL",
      seriesId: "toshiba-carrier-rav-bp121at2p-ul",
      brandId: "toshiba-carrier",
      modelNumber: "RAV-BP121AT2P-UL",
      normalizedModelNumber: "rav-bp121at2p-ul",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 8800,
      seer2Min: 17.1,
      seer2Max: 26,
      hspf2Min: 9.2,
      hspf2Max: 12,
      cop5FMin: 1.9,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp181at2p-ul-wall-single",
      slug: "toshiba-carrier-rav-bp181at2p-ul-wall-single",
      name: "RAV-BP181AT2P-UL",
      seriesId: "toshiba-carrier-rav-bp181at2p-ul",
      brandId: "toshiba-carrier",
      modelNumber: "RAV-BP181AT2P-UL",
      normalizedModelNumber: "rav-bp181at2p-ul",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 12300,
      heatingCapacity5FMaxBtu: 12600,
      seer2Min: 17.1,
      seer2Max: 25.5,
      hspf2Min: 10,
      hspf2Max: 11.3,
      cop5FMin: 1.9,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp241at2p-ul-wall-single",
      slug: "toshiba-carrier-rav-bp241at2p-ul-wall-single",
      name: "RAV-BP241AT2P-UL",
      seriesId: "toshiba-carrier-rav-bp241at2p-ul",
      brandId: "toshiba-carrier",
      modelNumber: "RAV-BP241AT2P-UL",
      normalizedModelNumber: "rav-bp241at2p-ul",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 17100,
      seer2Min: 19.4,
      seer2Max: 24.2,
      hspf2Min: 10.4,
      hspf2Max: 11.1,
      cop5FMin: 2.1,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp301at2p-ul-wall-single",
      slug: "toshiba-carrier-rav-bp301at2p-ul-wall-single",
      name: "RAV-BP301AT2P-UL",
      seriesId: "toshiba-carrier-rav-bp301at2p-ul",
      brandId: "toshiba-carrier",
      modelNumber: "RAV-BP301AT2P-UL",
      normalizedModelNumber: "rav-bp301at2p-ul",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 23000,
      seer2Min: 19.5,
      seer2Max: 24.5,
      hspf2Min: 10.7,
      hspf2Max: 11.8,
      cop5FMin: 2.1,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp361at2p-ul-wall-single",
      slug: "toshiba-carrier-rav-bp361at2p-ul-wall-single",
      name: "RAV-BP361AT2P-UL",
      seriesId: "toshiba-carrier-rav-bp361at2p-ul",
      brandId: "toshiba-carrier",
      modelNumber: "RAV-BP361AT2P-UL",
      normalizedModelNumber: "rav-bp361at2p-ul",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 18.1,
      seer2Max: 24.8,
      hspf2Min: 10.1,
      hspf2Max: 11.3,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp421at2p-ul-wall-single",
      slug: "toshiba-carrier-rav-bp421at2p-ul-wall-single",
      name: "RAV-BP421AT2P-UL",
      seriesId: "toshiba-carrier-rav-bp421at2p-ul",
      brandId: "toshiba-carrier",
      modelNumber: "RAV-BP421AT2P-UL",
      normalizedModelNumber: "rav-bp421at2p-ul",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 29800,
      heatingCapacity5FMaxBtu: 30600,
      seer2Min: 22.6,
      seer2Max: 22.6,
      hspf2Min: 11.2,
      hspf2Max: 11.2,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "toshiba-carrier-rav-sp180at2-ul",
      modelNumber: "RAV-SP180AT2-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp240at2-ul",
      modelNumber: "RAV-SP240AT2-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp300at2-ul",
      modelNumber: "RAV-SP300AT2-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp360at2-ul",
      modelNumber: "RAV-SP360AT2-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp420at2-ul",
      modelNumber: "RAV-SP420AT2-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp122at2p-ul",
      modelNumber: "RAV-SP122AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp182at2p-ul",
      modelNumber: "RAV-SP182AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp242at2p-ul",
      modelNumber: "RAV-SP242AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp302at2p-ul",
      modelNumber: "RAV-SP302AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp362at2p-ul",
      modelNumber: "RAV-SP362AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp422at2p-ul",
      modelNumber: "RAV-SP422AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-sp482at2p-ul",
      modelNumber: "RAV-SP482AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-bp481at2p-ul",
      modelNumber: "RAV-BP481AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-mcy-map0367hs-ul",
      modelNumber: "MCY-MAP0367HS-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-mcy-map0487hs-ul",
      modelNumber: "MCY-MAP0487HS-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-mcy-map0607hs-ul",
      modelNumber: "MCY-MAP0607HS-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-bp121at2p-ul",
      modelNumber: "RAV-BP121AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-bp181at2p-ul",
      modelNumber: "RAV-BP181AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-bp241at2p-ul",
      modelNumber: "RAV-BP241AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-bp301at2p-ul",
      modelNumber: "RAV-BP301AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-bp361at2p-ul",
      modelNumber: "RAV-BP361AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    },
    {
      id: "toshiba-carrier-rav-bp421at2p-ul",
      modelNumber: "RAV-BP421AT2P-UL",
      brandId: "toshiba-carrier",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "toshiba-carrier-standard-wall-single-cfg-1",
      slug: "toshiba-carrier-standard-wall-single-cfg-1",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp180at2-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-2",
      slug: "toshiba-carrier-standard-wall-single-cfg-2",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp180at2-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-3",
      slug: "toshiba-carrier-standard-wall-single-cfg-3",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp180at2-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-4",
      slug: "toshiba-carrier-standard-wall-single-cfg-4",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp240at2-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-5",
      slug: "toshiba-carrier-standard-wall-single-cfg-5",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp300at2-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-6",
      slug: "toshiba-carrier-standard-wall-single-cfg-6",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp360at2-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36400,
      coolingCapacityMaxBtu: 36400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-7",
      slug: "toshiba-carrier-standard-wall-single-cfg-7",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp360at2-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-8",
      slug: "toshiba-carrier-standard-wall-single-cfg-8",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp420at2-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-9",
      slug: "toshiba-carrier-standard-wall-single-cfg-9",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp420at2-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-10",
      slug: "toshiba-carrier-standard-wall-single-cfg-10",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp180at2-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-11",
      slug: "toshiba-carrier-standard-wall-single-cfg-11",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp240at2-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-12",
      slug: "toshiba-carrier-standard-wall-single-cfg-12",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp300at2-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-13",
      slug: "toshiba-carrier-standard-wall-single-cfg-13",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp360at2-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-14",
      slug: "toshiba-carrier-standard-wall-single-cfg-14",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp420at2-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-15",
      slug: "toshiba-carrier-standard-wall-single-cfg-15",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp122at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-16",
      slug: "toshiba-carrier-standard-wall-single-cfg-16",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp182at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-17",
      slug: "toshiba-carrier-standard-wall-single-cfg-17",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp242at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-18",
      slug: "toshiba-carrier-standard-wall-single-cfg-18",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp302at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-19",
      slug: "toshiba-carrier-standard-wall-single-cfg-19",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp362at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-20",
      slug: "toshiba-carrier-standard-wall-single-cfg-20",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp422at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-21",
      slug: "toshiba-carrier-standard-wall-single-cfg-21",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp482at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-22",
      slug: "toshiba-carrier-standard-wall-single-cfg-22",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp122at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-23",
      slug: "toshiba-carrier-standard-wall-single-cfg-23",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp182at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-24",
      slug: "toshiba-carrier-standard-wall-single-cfg-24",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp182at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-25",
      slug: "toshiba-carrier-standard-wall-single-cfg-25",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp182at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-26",
      slug: "toshiba-carrier-standard-wall-single-cfg-26",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp242at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-27",
      slug: "toshiba-carrier-standard-wall-single-cfg-27",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp242at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-28",
      slug: "toshiba-carrier-standard-wall-single-cfg-28",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp302at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-29",
      slug: "toshiba-carrier-standard-wall-single-cfg-29",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp302at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-30",
      slug: "toshiba-carrier-standard-wall-single-cfg-30",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp302at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-31",
      slug: "toshiba-carrier-standard-wall-single-cfg-31",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp362at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-32",
      slug: "toshiba-carrier-standard-wall-single-cfg-32",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp362at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-33",
      slug: "toshiba-carrier-standard-wall-single-cfg-33",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp362at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-34",
      slug: "toshiba-carrier-standard-wall-single-cfg-34",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp422at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-35",
      slug: "toshiba-carrier-standard-wall-single-cfg-35",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp422at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-standard-wall-single-cfg-36",
      slug: "toshiba-carrier-standard-wall-single-cfg-36",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp482at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-37",
      slug: "toshiba-carrier-standard-wall-single-cfg-37",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp242at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-38",
      slug: "toshiba-carrier-standard-wall-single-cfg-38",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-sp482at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-39",
      slug: "toshiba-carrier-standard-wall-single-cfg-39",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp481at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-40",
      slug: "toshiba-carrier-standard-wall-single-cfg-40",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp481at2p-ul",
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
      id: "toshiba-carrier-standard-wall-single-cfg-41",
      slug: "toshiba-carrier-standard-wall-single-cfg-41",
      modelId: "toshiba-carrier-standard-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp481at2p-ul",
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
      id: "toshiba-carrier-mcy-map0367hs-ul-wall-single-cfg-1",
      slug: "toshiba-carrier-mcy-map0367hs-ul-wall-single-cfg-1",
      modelId: "toshiba-carrier-mcy-map0367hs-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-mcy-map0367hs-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.8,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0487hs-ul-wall-single-cfg-1",
      slug: "toshiba-carrier-mcy-map0487hs-ul-wall-single-cfg-1",
      modelId: "toshiba-carrier-mcy-map0487hs-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-mcy-map0487hs-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 20.25,
      hspf2: 10.15,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0487hs-ul-wall-single-cfg-2",
      slug: "toshiba-carrier-mcy-map0487hs-ul-wall-single-cfg-2",
      modelId: "toshiba-carrier-mcy-map0487hs-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-mcy-map0487hs-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 20.25,
      hspf2: 10.15,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0487hs-ul-wall-single-cfg-3",
      slug: "toshiba-carrier-mcy-map0487hs-ul-wall-single-cfg-3",
      modelId: "toshiba-carrier-mcy-map0487hs-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-mcy-map0487hs-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 20.25,
      hspf2: 10.15,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0607hs-ul-wall-single-cfg-1",
      slug: "toshiba-carrier-mcy-map0607hs-ul-wall-single-cfg-1",
      modelId: "toshiba-carrier-mcy-map0607hs-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-mcy-map0607hs-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 23.1,
      hspf2: 10.6,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0607hs-ul-wall-single-cfg-2",
      slug: "toshiba-carrier-mcy-map0607hs-ul-wall-single-cfg-2",
      modelId: "toshiba-carrier-mcy-map0607hs-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-mcy-map0607hs-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 23.1,
      hspf2: 10.6,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-mcy-map0607hs-ul-wall-single-cfg-3",
      slug: "toshiba-carrier-mcy-map0607hs-ul-wall-single-cfg-3",
      modelId: "toshiba-carrier-mcy-map0607hs-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-mcy-map0607hs-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 23.1,
      hspf2: 10.6,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp121at2p-ul-wall-single-cfg-1",
      slug: "toshiba-carrier-rav-bp121at2p-ul-wall-single-cfg-1",
      modelId: "toshiba-carrier-rav-bp121at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp121at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.2,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp121at2p-ul-wall-single-cfg-2",
      slug: "toshiba-carrier-rav-bp121at2p-ul-wall-single-cfg-2",
      modelId: "toshiba-carrier-rav-bp121at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp121at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 26,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp121at2p-ul-wall-single-cfg-3",
      slug: "toshiba-carrier-rav-bp121at2p-ul-wall-single-cfg-3",
      modelId: "toshiba-carrier-rav-bp121at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp121at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 17.1,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-1",
      slug: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-1",
      modelId: "toshiba-carrier-rav-bp181at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp181at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.8,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-2",
      slug: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-2",
      modelId: "toshiba-carrier-rav-bp181at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp181at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-3",
      slug: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-3",
      modelId: "toshiba-carrier-rav-bp181at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp181at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.9,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-4",
      slug: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-4",
      modelId: "toshiba-carrier-rav-bp181at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp181at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-1",
      slug: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-1",
      modelId: "toshiba-carrier-rav-bp241at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp241at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.7,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-2",
      slug: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-2",
      modelId: "toshiba-carrier-rav-bp241at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp241at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24.2,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-3",
      slug: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-3",
      modelId: "toshiba-carrier-rav-bp241at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp241at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.3,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-4",
      slug: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-4",
      modelId: "toshiba-carrier-rav-bp241at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp241at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-1",
      slug: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-1",
      modelId: "toshiba-carrier-rav-bp301at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp301at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 23.6,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-2",
      slug: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-2",
      modelId: "toshiba-carrier-rav-bp301at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp301at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 24.5,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-3",
      slug: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-3",
      modelId: "toshiba-carrier-rav-bp301at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp301at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-4",
      slug: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-4",
      modelId: "toshiba-carrier-rav-bp301at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp301at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-1",
      slug: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-1",
      modelId: "toshiba-carrier-rav-bp361at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp361at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 22.4,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-2",
      slug: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-2",
      modelId: "toshiba-carrier-rav-bp361at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp361at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 24.8,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-3",
      slug: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-3",
      modelId: "toshiba-carrier-rav-bp361at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp361at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.6,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-4",
      slug: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-4",
      modelId: "toshiba-carrier-rav-bp361at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp361at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18.1,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp421at2p-ul-wall-single-cfg-1",
      slug: "toshiba-carrier-rav-bp421at2p-ul-wall-single-cfg-1",
      modelId: "toshiba-carrier-rav-bp421at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp421at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 22.6,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp421at2p-ul-wall-single-cfg-2",
      slug: "toshiba-carrier-rav-bp421at2p-ul-wall-single-cfg-2",
      modelId: "toshiba-carrier-rav-bp421at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp421at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 22.6,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "toshiba-carrier-rav-bp421at2p-ul-wall-single-cfg-3",
      slug: "toshiba-carrier-rav-bp421at2p-ul-wall-single-cfg-3",
      modelId: "toshiba-carrier-rav-bp421at2p-ul-wall-single",
      outdoorUnitId: "toshiba-carrier-rav-bp421at2p-ul",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 22.6,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-6",
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
      configurationId: "toshiba-carrier-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-10",
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
      configurationId: "toshiba-carrier-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-18",
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
      configurationId: "toshiba-carrier-standard-wall-single-cfg-19",
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
      configurationId: "toshiba-carrier-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-21",
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
      configurationId: "toshiba-carrier-standard-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-24",
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
      configurationId: "toshiba-carrier-standard-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-29",
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
      configurationId: "toshiba-carrier-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-31",
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
      configurationId: "toshiba-carrier-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-standard-wall-single-cfg-40",
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
      configurationId: "toshiba-carrier-standard-wall-single-cfg-41",
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
      configurationId: "toshiba-carrier-mcy-map0367hs-ul-wall-single-cfg-1",
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
      configurationId: "toshiba-carrier-mcy-map0487hs-ul-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.55,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-mcy-map0487hs-ul-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.55,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-mcy-map0487hs-ul-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32500,
          cop: 2.55,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-mcy-map0607hs-ul-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-mcy-map0607hs-ul-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-mcy-map0607hs-ul-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp121at2p-ul-wall-single-cfg-1",
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
      configurationId: "toshiba-carrier-rav-bp121at2p-ul-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp121at2p-ul-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp181at2p-ul-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp241at2p-ul-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp301at2p-ul-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp361at2p-ul-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp421at2p-ul-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "toshiba-carrier-rav-bp421at2p-ul-wall-single-cfg-2",
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
      configurationId: "toshiba-carrier-rav-bp421at2p-ul-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
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
