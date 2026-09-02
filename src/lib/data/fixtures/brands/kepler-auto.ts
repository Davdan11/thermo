import type { BrandDataset } from "../../types";

export const keplerDataset: BrandDataset = {
  brand: {
    id: "kepler",
    slug: "kepler",
    name: "KEPLER",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "kepler-azpn-series",
      slug: "kepler-azpn-series",
      name: "AZPN Series",
      brandId: "kepler",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-standard",
      slug: "kepler-standard",
      name: "Standard",
      brandId: "kepler",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series",
      slug: "kepler-idu-series",
      name: "IDU Series",
      brandId: "kepler",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-odu-series",
      slug: "kepler-odu-series",
      name: "ODU Series",
      brandId: "kepler",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "kepler-azpn-series-central-ducted",
      slug: "kepler-azpn-series-central-ducted",
      name: "AZPN Series",
      seriesId: "kepler-azpn-series",
      brandId: "kepler",
      modelNumber: "AZPN Series",
      normalizedModelNumber: "azpn-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 10.2,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-standard-wall-single",
      slug: "kepler-standard-wall-single",
      name: "Standard",
      seriesId: "kepler-standard",
      brandId: "kepler",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 37000,
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
      id: "kepler-idu-series-wall-single",
      slug: "kepler-idu-series-wall-single",
      name: "IDU Series",
      seriesId: "kepler-idu-series",
      brandId: "kepler",
      modelNumber: "IDU Series",
      normalizedModelNumber: "idu-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 18,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 13.6,
      cop5FMin: 1.75,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-odu-series-wall-single",
      slug: "kepler-odu-series-wall-single",
      name: "ODU Series",
      seriesId: "kepler-odu-series",
      brandId: "kepler",
      modelNumber: "ODU Series",
      normalizedModelNumber: "odu-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 19,
      seer2Max: 24.6,
      hspf2Min: 8.7,
      hspf2Max: 10.6,
      cop5FMin: 1.75,
      cop5FMax: 2.06,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "kepler-azpn-18wd",
      modelNumber: "AZPN/18WD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-24wd",
      modelNumber: "AZPN/24WD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-36wac",
      modelNumber: "AZPN/36WAC",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-30wd",
      modelNumber: "AZPN/30WD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-36wd",
      modelNumber: "AZPN/36WD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-60wd",
      modelNumber: "AZPN/60WD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-48wd",
      modelNumber: "AZPN/48WD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpns-24rod",
      modelNumber: "AZPNS/24ROD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-b36wduid",
      modelNumber: "AZPN/B36WDUID",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-c36wduid",
      modelNumber: "AZPN/C36WDUID",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn48wd",
      modelNumber: "AZPN48WD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-45wd",
      modelNumber: "AZPN/45WD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpns-18rod",
      modelNumber: "AZPNS/18ROD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpns-30rod",
      modelNumber: "AZPNS/30ROD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpn-36rod",
      modelNumber: "AZPN/36ROD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpns-48rod",
      modelNumber: "AZPNS/48ROD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpns-60rod",
      modelNumber: "AZPNS/60ROD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-azpns-36rod",
      modelNumber: "AZPNS/36ROD",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumod31-36hfn1-mp0w",
      modelNumber: "ODUMOD31-36HFN1-MP0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox230-12hfn1-bs8w",
      modelNumber: "ODUMOX230-12HFN1-BS8W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox230-12hfn1-ms8w",
      modelNumber: "ODUMOX230-12HFN1-MS8W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox430-24hfn1-mr0w",
      modelNumber: "ODUMOX430-24HFN1-MR0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum5oa-55hfn1-m",
      modelNumber: "ODUM5OA-55HFN1-M",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox230-09hfn1mw5w",
      modelNumber: "ODUMOX230-09HFN1MW5W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox330-09hfn1my5w",
      modelNumber: "ODUMOX330-09HFN1MY5W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox330-12hfn1mw5w",
      modelNumber: "ODUMOX330-12HFN1MW5W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox430-17hfn1mt0w",
      modelNumber: "ODUMOX430-17HFN1MT0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumod30-24hfn1mu0w",
      modelNumber: "ODUMOD30-24HFN1MU0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumod30-33hfn1msr0w",
      modelNumber: "ODUMOD30-33HFN1MSR0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox230-09hfn1-bs5w",
      modelNumber: "ODUMOX230-09HFN1-BS5W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox230-09hfn1-mt0w",
      modelNumber: "ODUMOX230-09HFN1-MT0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum2oi-18hfn1-m",
      modelNumber: "ODUM2OI-18HFN1-M",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum3ok-27hfn1-m",
      modelNumber: "ODUM3OK-27HFN1-M",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum4oi-36hfn1-m",
      modelNumber: "ODUM4OI-36HFN1-M",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum4ox630-36hfn1-m1x",
      modelNumber: "ODUM4OX630-36HFN1-M1X",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum5og-48hfn1-m-x",
      modelNumber: "ODUM5OG-48HFN1-M-[X]",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum5oa-55hfn1-m-x",
      modelNumber: "ODUM5OA-55HFN1-M-[X]",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox230-09hfn1-bw0w",
      modelNumber: "ODUMOX230-09HFN1-BW0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox230-12hfn1-bw0w",
      modelNumber: "ODUMOX230-12HFN1-BW0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox230-09hfn1-mw5w",
      modelNumber: "ODUMOX230-09HFN1-MW5W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox230-12hfn1-mv5w",
      modelNumber: "ODUMOX230-12HFN1-MV5W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox430-18hfn1-mu0w",
      modelNumber: "ODUMOX430-18HFN1-MU0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumod33-24hfn1-mt0w",
      modelNumber: "ODUMOD33-24HFN1-MT0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odumox330-18hfn1-ms0w",
      modelNumber: "ODUMOX330-18HFN1-MS0W",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum2oa-18hfn1-m",
      modelNumber: "ODUM2OA-18HFN1-M",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum3oj-27hfn1-m",
      modelNumber: "ODUM3OJ-27HFN1-M",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum4og-36hfn1-m",
      modelNumber: "ODUM4OG-36HFN1-M",
      brandId: "kepler",
      refrigerant: null as any,
    },
    {
      id: "kepler-odum5og-48hfn1-m",
      modelNumber: "ODUM5OG-48HFN1-M",
      brandId: "kepler",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "kepler-azpn-series-central-ducted-cfg-1",
      slug: "kepler-azpn-series-central-ducted-cfg-1",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-18wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-2",
      slug: "kepler-azpn-series-central-ducted-cfg-2",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-24wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-3",
      slug: "kepler-azpn-series-central-ducted-cfg-3",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-36wac",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-4",
      slug: "kepler-azpn-series-central-ducted-cfg-4",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-30wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-5",
      slug: "kepler-azpn-series-central-ducted-cfg-5",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-36wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-6",
      slug: "kepler-azpn-series-central-ducted-cfg-6",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-60wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-7",
      slug: "kepler-azpn-series-central-ducted-cfg-7",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-18wd",
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
      id: "kepler-azpn-series-central-ducted-cfg-8",
      slug: "kepler-azpn-series-central-ducted-cfg-8",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-24wd",
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
      id: "kepler-azpn-series-central-ducted-cfg-9",
      slug: "kepler-azpn-series-central-ducted-cfg-9",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-30wd",
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
      id: "kepler-azpn-series-central-ducted-cfg-10",
      slug: "kepler-azpn-series-central-ducted-cfg-10",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-36wd",
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
      id: "kepler-azpn-series-central-ducted-cfg-11",
      slug: "kepler-azpn-series-central-ducted-cfg-11",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-48wd",
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
      id: "kepler-azpn-series-central-ducted-cfg-12",
      slug: "kepler-azpn-series-central-ducted-cfg-12",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-60wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-13",
      slug: "kepler-azpn-series-central-ducted-cfg-13",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpns-24rod",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-14",
      slug: "kepler-azpn-series-central-ducted-cfg-14",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpns-24rod",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-15",
      slug: "kepler-azpn-series-central-ducted-cfg-15",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-24wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 16.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-16",
      slug: "kepler-azpn-series-central-ducted-cfg-16",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-24wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-17",
      slug: "kepler-azpn-series-central-ducted-cfg-17",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-30wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-18",
      slug: "kepler-azpn-series-central-ducted-cfg-18",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-b36wduid",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-19",
      slug: "kepler-azpn-series-central-ducted-cfg-19",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-c36wduid",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-20",
      slug: "kepler-azpn-series-central-ducted-cfg-20",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn48wd",
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
      id: "kepler-azpn-series-central-ducted-cfg-21",
      slug: "kepler-azpn-series-central-ducted-cfg-21",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-b36wduid",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 16.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-22",
      slug: "kepler-azpn-series-central-ducted-cfg-22",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-b36wduid",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-23",
      slug: "kepler-azpn-series-central-ducted-cfg-23",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-45wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-24",
      slug: "kepler-azpn-series-central-ducted-cfg-24",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-18wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-25",
      slug: "kepler-azpn-series-central-ducted-cfg-25",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-24wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 16.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-26",
      slug: "kepler-azpn-series-central-ducted-cfg-26",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-24wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-27",
      slug: "kepler-azpn-series-central-ducted-cfg-27",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-24wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-28",
      slug: "kepler-azpn-series-central-ducted-cfg-28",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-30wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-29",
      slug: "kepler-azpn-series-central-ducted-cfg-29",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-30wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-30",
      slug: "kepler-azpn-series-central-ducted-cfg-30",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-36wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-31",
      slug: "kepler-azpn-series-central-ducted-cfg-31",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-36wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-32",
      slug: "kepler-azpn-series-central-ducted-cfg-32",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-b36wduid",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-33",
      slug: "kepler-azpn-series-central-ducted-cfg-33",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-b36wduid",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-34",
      slug: "kepler-azpn-series-central-ducted-cfg-34",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-48wd",
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
      id: "kepler-azpn-series-central-ducted-cfg-35",
      slug: "kepler-azpn-series-central-ducted-cfg-35",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-45wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-36",
      slug: "kepler-azpn-series-central-ducted-cfg-36",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpn-60wd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-37",
      slug: "kepler-azpn-series-central-ducted-cfg-37",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpns-24rod",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-azpn-series-central-ducted-cfg-38",
      slug: "kepler-azpn-series-central-ducted-cfg-38",
      modelId: "kepler-azpn-series-central-ducted",
      outdoorUnitId: "kepler-azpns-24rod",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-standard-wall-single-cfg-1",
      slug: "kepler-standard-wall-single-cfg-1",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-18rod",
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
      id: "kepler-standard-wall-single-cfg-2",
      slug: "kepler-standard-wall-single-cfg-2",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-30rod",
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
      id: "kepler-standard-wall-single-cfg-3",
      slug: "kepler-standard-wall-single-cfg-3",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpn-36rod",
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
      id: "kepler-standard-wall-single-cfg-4",
      slug: "kepler-standard-wall-single-cfg-4",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-48rod",
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
      id: "kepler-standard-wall-single-cfg-5",
      slug: "kepler-standard-wall-single-cfg-5",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-60rod",
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
      id: "kepler-standard-wall-single-cfg-6",
      slug: "kepler-standard-wall-single-cfg-6",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-18rod",
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
      id: "kepler-standard-wall-single-cfg-7",
      slug: "kepler-standard-wall-single-cfg-7",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-36rod",
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
      id: "kepler-standard-wall-single-cfg-8",
      slug: "kepler-standard-wall-single-cfg-8",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-48rod",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-standard-wall-single-cfg-9",
      slug: "kepler-standard-wall-single-cfg-9",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-60rod",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-standard-wall-single-cfg-10",
      slug: "kepler-standard-wall-single-cfg-10",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-36rod",
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
      id: "kepler-standard-wall-single-cfg-11",
      slug: "kepler-standard-wall-single-cfg-11",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-odumod31-36hfn1-mp0w",
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
      id: "kepler-standard-wall-single-cfg-12",
      slug: "kepler-standard-wall-single-cfg-12",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-odumox230-12hfn1-bs8w",
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
      id: "kepler-standard-wall-single-cfg-13",
      slug: "kepler-standard-wall-single-cfg-13",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-odumox230-12hfn1-ms8w",
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
      id: "kepler-standard-wall-single-cfg-14",
      slug: "kepler-standard-wall-single-cfg-14",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-odumox430-24hfn1-mr0w",
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
      id: "kepler-standard-wall-single-cfg-15",
      slug: "kepler-standard-wall-single-cfg-15",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-18rod",
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
      id: "kepler-standard-wall-single-cfg-16",
      slug: "kepler-standard-wall-single-cfg-16",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-18rod",
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
      id: "kepler-standard-wall-single-cfg-17",
      slug: "kepler-standard-wall-single-cfg-17",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-30rod",
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
      id: "kepler-standard-wall-single-cfg-18",
      slug: "kepler-standard-wall-single-cfg-18",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-36rod",
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
      id: "kepler-standard-wall-single-cfg-19",
      slug: "kepler-standard-wall-single-cfg-19",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-36rod",
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
      id: "kepler-standard-wall-single-cfg-20",
      slug: "kepler-standard-wall-single-cfg-20",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-48rod",
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
      id: "kepler-standard-wall-single-cfg-21",
      slug: "kepler-standard-wall-single-cfg-21",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-azpns-60rod",
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
      id: "kepler-standard-wall-single-cfg-22",
      slug: "kepler-standard-wall-single-cfg-22",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-odum5oa-55hfn1-m",
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
      id: "kepler-standard-wall-single-cfg-23",
      slug: "kepler-standard-wall-single-cfg-23",
      modelId: "kepler-standard-wall-single",
      outdoorUnitId: "kepler-odum5oa-55hfn1-m",
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
      id: "kepler-idu-series-wall-single-cfg-1",
      slug: "kepler-idu-series-wall-single-cfg-1",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-09hfn1mw5w",
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
      id: "kepler-idu-series-wall-single-cfg-2",
      slug: "kepler-idu-series-wall-single-cfg-2",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox330-09hfn1my5w",
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
      id: "kepler-idu-series-wall-single-cfg-3",
      slug: "kepler-idu-series-wall-single-cfg-3",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox330-12hfn1mw5w",
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
      id: "kepler-idu-series-wall-single-cfg-4",
      slug: "kepler-idu-series-wall-single-cfg-4",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox430-17hfn1mt0w",
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
      id: "kepler-idu-series-wall-single-cfg-5",
      slug: "kepler-idu-series-wall-single-cfg-5",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumod30-24hfn1mu0w",
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
      id: "kepler-idu-series-wall-single-cfg-6",
      slug: "kepler-idu-series-wall-single-cfg-6",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumod30-33hfn1msr0w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-7",
      slug: "kepler-idu-series-wall-single-cfg-7",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-09hfn1-bs5w",
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
      id: "kepler-idu-series-wall-single-cfg-8",
      slug: "kepler-idu-series-wall-single-cfg-8",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-09hfn1-mt0w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-9",
      slug: "kepler-idu-series-wall-single-cfg-9",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox330-09hfn1my5w",
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
      id: "kepler-idu-series-wall-single-cfg-10",
      slug: "kepler-idu-series-wall-single-cfg-10",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox330-12hfn1mw5w",
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
      id: "kepler-idu-series-wall-single-cfg-11",
      slug: "kepler-idu-series-wall-single-cfg-11",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox430-17hfn1mt0w",
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
      id: "kepler-idu-series-wall-single-cfg-12",
      slug: "kepler-idu-series-wall-single-cfg-12",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumod30-24hfn1mu0w",
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
      id: "kepler-idu-series-wall-single-cfg-13",
      slug: "kepler-idu-series-wall-single-cfg-13",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox330-09hfn1my5w",
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
      id: "kepler-idu-series-wall-single-cfg-14",
      slug: "kepler-idu-series-wall-single-cfg-14",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox330-12hfn1mw5w",
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
      id: "kepler-idu-series-wall-single-cfg-15",
      slug: "kepler-idu-series-wall-single-cfg-15",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox430-17hfn1mt0w",
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
      id: "kepler-idu-series-wall-single-cfg-16",
      slug: "kepler-idu-series-wall-single-cfg-16",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumod30-24hfn1mu0w",
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
      id: "kepler-idu-series-wall-single-cfg-17",
      slug: "kepler-idu-series-wall-single-cfg-17",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox330-12hfn1mw5w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.2,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-18",
      slug: "kepler-idu-series-wall-single-cfg-18",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum2oi-18hfn1-m",
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
      id: "kepler-idu-series-wall-single-cfg-19",
      slug: "kepler-idu-series-wall-single-cfg-19",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum2oi-18hfn1-m",
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
      id: "kepler-idu-series-wall-single-cfg-20",
      slug: "kepler-idu-series-wall-single-cfg-20",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum2oi-18hfn1-m",
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
      id: "kepler-idu-series-wall-single-cfg-21",
      slug: "kepler-idu-series-wall-single-cfg-21",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum3ok-27hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-22",
      slug: "kepler-idu-series-wall-single-cfg-22",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum3ok-27hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-23",
      slug: "kepler-idu-series-wall-single-cfg-23",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum3ok-27hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-24",
      slug: "kepler-idu-series-wall-single-cfg-24",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum4oi-36hfn1-m",
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
      id: "kepler-idu-series-wall-single-cfg-25",
      slug: "kepler-idu-series-wall-single-cfg-25",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum4oi-36hfn1-m",
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
      id: "kepler-idu-series-wall-single-cfg-26",
      slug: "kepler-idu-series-wall-single-cfg-26",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum4ox630-36hfn1-m1x",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.4,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-27",
      slug: "kepler-idu-series-wall-single-cfg-27",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum4ox630-36hfn1-m1x",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-28",
      slug: "kepler-idu-series-wall-single-cfg-28",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum4ox630-36hfn1-m1x",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.9,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-29",
      slug: "kepler-idu-series-wall-single-cfg-29",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum5og-48hfn1-m-x",
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
      id: "kepler-idu-series-wall-single-cfg-30",
      slug: "kepler-idu-series-wall-single-cfg-30",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum5og-48hfn1-m-x",
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
      id: "kepler-idu-series-wall-single-cfg-31",
      slug: "kepler-idu-series-wall-single-cfg-31",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum5og-48hfn1-m-x",
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
      id: "kepler-idu-series-wall-single-cfg-32",
      slug: "kepler-idu-series-wall-single-cfg-32",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum5oa-55hfn1-m-x",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-33",
      slug: "kepler-idu-series-wall-single-cfg-33",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum5oa-55hfn1-m-x",
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
      id: "kepler-idu-series-wall-single-cfg-34",
      slug: "kepler-idu-series-wall-single-cfg-34",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odum5oa-55hfn1-m-x",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-35",
      slug: "kepler-idu-series-wall-single-cfg-35",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-09hfn1-bs5w",
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
      id: "kepler-idu-series-wall-single-cfg-36",
      slug: "kepler-idu-series-wall-single-cfg-36",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-09hfn1-mt0w",
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
      id: "kepler-idu-series-wall-single-cfg-37",
      slug: "kepler-idu-series-wall-single-cfg-37",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-09hfn1-bw0w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-38",
      slug: "kepler-idu-series-wall-single-cfg-38",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-12hfn1-bw0w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-39",
      slug: "kepler-idu-series-wall-single-cfg-39",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-09hfn1-mw5w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.5,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-40",
      slug: "kepler-idu-series-wall-single-cfg-40",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-12hfn1-mv5w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-41",
      slug: "kepler-idu-series-wall-single-cfg-41",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox430-18hfn1-mu0w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-42",
      slug: "kepler-idu-series-wall-single-cfg-42",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumod33-24hfn1-mt0w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-idu-series-wall-single-cfg-43",
      slug: "kepler-idu-series-wall-single-cfg-43",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-09hfn1-mw5w",
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
      id: "kepler-idu-series-wall-single-cfg-44",
      slug: "kepler-idu-series-wall-single-cfg-44",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-12hfn1-mv5w",
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
      id: "kepler-idu-series-wall-single-cfg-45",
      slug: "kepler-idu-series-wall-single-cfg-45",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox430-18hfn1-mu0w",
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
      id: "kepler-idu-series-wall-single-cfg-46",
      slug: "kepler-idu-series-wall-single-cfg-46",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumod33-24hfn1-mt0w",
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
      id: "kepler-idu-series-wall-single-cfg-47",
      slug: "kepler-idu-series-wall-single-cfg-47",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-09hfn1-mw5w",
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
      id: "kepler-idu-series-wall-single-cfg-48",
      slug: "kepler-idu-series-wall-single-cfg-48",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-12hfn1-mv5w",
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
      id: "kepler-idu-series-wall-single-cfg-49",
      slug: "kepler-idu-series-wall-single-cfg-49",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox430-18hfn1-mu0w",
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
      id: "kepler-idu-series-wall-single-cfg-50",
      slug: "kepler-idu-series-wall-single-cfg-50",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumod33-24hfn1-mt0w",
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
      id: "kepler-idu-series-wall-single-cfg-51",
      slug: "kepler-idu-series-wall-single-cfg-51",
      modelId: "kepler-idu-series-wall-single",
      outdoorUnitId: "kepler-odumox230-12hfn1-mv5w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-odu-series-wall-single-cfg-1",
      slug: "kepler-odu-series-wall-single-cfg-1",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odumox330-18hfn1-ms0w",
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
      id: "kepler-odu-series-wall-single-cfg-2",
      slug: "kepler-odu-series-wall-single-cfg-2",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odumox330-18hfn1-ms0w",
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
      id: "kepler-odu-series-wall-single-cfg-3",
      slug: "kepler-odu-series-wall-single-cfg-3",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum3ok-27hfn1-m",
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
      id: "kepler-odu-series-wall-single-cfg-4",
      slug: "kepler-odu-series-wall-single-cfg-4",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum3ok-27hfn1-m",
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
      id: "kepler-odu-series-wall-single-cfg-5",
      slug: "kepler-odu-series-wall-single-cfg-5",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum3ok-27hfn1-m",
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
      id: "kepler-odu-series-wall-single-cfg-6",
      slug: "kepler-odu-series-wall-single-cfg-6",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum2oa-18hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.9,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-odu-series-wall-single-cfg-7",
      slug: "kepler-odu-series-wall-single-cfg-7",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum2oa-18hfn1-m",
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
      id: "kepler-odu-series-wall-single-cfg-8",
      slug: "kepler-odu-series-wall-single-cfg-8",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum2oa-18hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.95,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-odu-series-wall-single-cfg-9",
      slug: "kepler-odu-series-wall-single-cfg-9",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum3oj-27hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 24.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-odu-series-wall-single-cfg-10",
      slug: "kepler-odu-series-wall-single-cfg-10",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum3oj-27hfn1-m",
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
      id: "kepler-odu-series-wall-single-cfg-11",
      slug: "kepler-odu-series-wall-single-cfg-11",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum3oj-27hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.8,
      hspf2: 9.35,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-odu-series-wall-single-cfg-12",
      slug: "kepler-odu-series-wall-single-cfg-12",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum4og-36hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.9,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-odu-series-wall-single-cfg-13",
      slug: "kepler-odu-series-wall-single-cfg-13",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum5og-48hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 23.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kepler-odu-series-wall-single-cfg-14",
      slug: "kepler-odu-series-wall-single-cfg-14",
      modelId: "kepler-odu-series-wall-single",
      outdoorUnitId: "kepler-odum5og-48hfn1-m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.95,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-5",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-7",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-8",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-9",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-10",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-11",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-15",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-16",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-17",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-18",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-19",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-22",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-25",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-26",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-28",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-31",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-32",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-33",
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
      configurationId: "kepler-azpn-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-azpn-series-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-standard-wall-single-cfg-1",
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
      configurationId: "kepler-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-standard-wall-single-cfg-3",
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
      configurationId: "kepler-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-standard-wall-single-cfg-5",
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
      configurationId: "kepler-standard-wall-single-cfg-6",
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
      configurationId: "kepler-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-standard-wall-single-cfg-10",
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
      configurationId: "kepler-standard-wall-single-cfg-11",
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
      configurationId: "kepler-standard-wall-single-cfg-12",
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
      configurationId: "kepler-standard-wall-single-cfg-13",
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
      configurationId: "kepler-standard-wall-single-cfg-14",
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
      configurationId: "kepler-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-standard-wall-single-cfg-16",
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
      configurationId: "kepler-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-standard-wall-single-cfg-18",
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
      configurationId: "kepler-standard-wall-single-cfg-19",
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
      configurationId: "kepler-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-standard-wall-single-cfg-21",
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
      configurationId: "kepler-standard-wall-single-cfg-22",
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
      configurationId: "kepler-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-1",
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
      configurationId: "kepler-idu-series-wall-single-cfg-2",
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
      configurationId: "kepler-idu-series-wall-single-cfg-3",
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
      configurationId: "kepler-idu-series-wall-single-cfg-4",
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
      configurationId: "kepler-idu-series-wall-single-cfg-5",
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
      configurationId: "kepler-idu-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-9",
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
      configurationId: "kepler-idu-series-wall-single-cfg-10",
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
      configurationId: "kepler-idu-series-wall-single-cfg-11",
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
      configurationId: "kepler-idu-series-wall-single-cfg-12",
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
      configurationId: "kepler-idu-series-wall-single-cfg-13",
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
      configurationId: "kepler-idu-series-wall-single-cfg-14",
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
      configurationId: "kepler-idu-series-wall-single-cfg-15",
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
      configurationId: "kepler-idu-series-wall-single-cfg-16",
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
      configurationId: "kepler-idu-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-18",
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
      configurationId: "kepler-idu-series-wall-single-cfg-19",
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
      configurationId: "kepler-idu-series-wall-single-cfg-20",
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
      configurationId: "kepler-idu-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-24",
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
      configurationId: "kepler-idu-series-wall-single-cfg-25",
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
      configurationId: "kepler-idu-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-29",
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
      configurationId: "kepler-idu-series-wall-single-cfg-30",
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
      configurationId: "kepler-idu-series-wall-single-cfg-31",
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
      configurationId: "kepler-idu-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-33",
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
      configurationId: "kepler-idu-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-35",
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
      configurationId: "kepler-idu-series-wall-single-cfg-36",
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
      configurationId: "kepler-idu-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-39",
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
      configurationId: "kepler-idu-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-idu-series-wall-single-cfg-43",
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
      configurationId: "kepler-idu-series-wall-single-cfg-44",
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
      configurationId: "kepler-idu-series-wall-single-cfg-45",
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
      configurationId: "kepler-idu-series-wall-single-cfg-46",
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
      configurationId: "kepler-idu-series-wall-single-cfg-47",
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
      configurationId: "kepler-idu-series-wall-single-cfg-48",
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
      configurationId: "kepler-idu-series-wall-single-cfg-49",
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
      configurationId: "kepler-idu-series-wall-single-cfg-50",
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
      configurationId: "kepler-idu-series-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9200,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-odu-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-odu-series-wall-single-cfg-2",
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
      configurationId: "kepler-odu-series-wall-single-cfg-3",
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
      configurationId: "kepler-odu-series-wall-single-cfg-4",
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
      configurationId: "kepler-odu-series-wall-single-cfg-5",
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
      configurationId: "kepler-odu-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-odu-series-wall-single-cfg-7",
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
      configurationId: "kepler-odu-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-odu-series-wall-single-cfg-9",
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
      configurationId: "kepler-odu-series-wall-single-cfg-10",
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
      configurationId: "kepler-odu-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kepler-odu-series-wall-single-cfg-12",
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
      configurationId: "kepler-odu-series-wall-single-cfg-13",
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
      configurationId: "kepler-odu-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.75,
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
