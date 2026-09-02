import type { BrandDataset } from "../../types";

export const cooperhunterDataset: BrandDataset = {
  brand: {
    id: "cooper-hunter",
    slug: "cooper-hunter",
    name: "COOPER&HUNTER",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "cooper-hunter-ch-series",
      slug: "cooper-hunter-ch-series",
      name: "CH series",
      brandId: "cooper-hunter",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard",
      slug: "cooper-hunter-standard",
      name: "Standard",
      brandId: "cooper-hunter",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "cooper-hunter-ch-series-wall-single",
      slug: "cooper-hunter-ch-series-wall-single",
      name: "CH series",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series",
      normalizedModelNumber: "ch-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 15.8,
      seer2Max: 28.1,
      hspf2Min: 8.5,
      hspf2Max: 14.6,
      cop5FMin: 1.75,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single",
      slug: "cooper-hunter-standard-wall-single",
      name: "Standard",
      seriesId: "cooper-hunter-standard",
      brandId: "cooper-hunter",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 63000,
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
      id: "cooper-hunter-ch-series-central-ducted",
      slug: "cooper-hunter-ch-series-central-ducted",
      name: "CH series",
      seriesId: "cooper-hunter-ch-series",
      brandId: "cooper-hunter",
      modelNumber: "CH series",
      normalizedModelNumber: "ch-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 41000,
      seer2Min: 15.2,
      seer2Max: 19.7,
      hspf2Min: 8.1,
      hspf2Max: 10.8,
      cop5FMin: 1.9,
      cop5FMax: 2.31,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "cooper-hunter-ch-n48lcu-230vo",
      modelNumber: "CH-N48LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-nhpr36lcu-230vo",
      modelNumber: "CH-NHPR36LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-nhpr48lcu-230vo",
      modelNumber: "CH-NHPR48LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr06f9-230vo",
      modelNumber: "CH-HPR06F9-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr09-230vo",
      modelNumber: "CH-HPR09-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr12-230vo",
      modelNumber: "CH-HPR12-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr18-230vo",
      modelNumber: "CH-HPR18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr24-230vo",
      modelNumber: "CH-HPR24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny09mia-115vo",
      modelNumber: "CH-NY09MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny18mia-230vo",
      modelNumber: "CH-NY18MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es09-230vo",
      modelNumber: "CH-ES09-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es12-230vo",
      modelNumber: "CH-ES12-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es18-230vo",
      modelNumber: "CH-ES18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es24-230vo",
      modelNumber: "CH-ES24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny09mia-230vo",
      modelNumber: "CH-NY09MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es12-115vo",
      modelNumber: "CH-ES12-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-18mes-230vo",
      modelNumber: "CH-18MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-28mes-230vo",
      modelNumber: "CH-28MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-36mes-230vo",
      modelNumber: "CH-36MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-48mes-230vo",
      modelNumber: "CH-48MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr19m-230vo",
      modelNumber: "CH-HPR19M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr28m-230vo",
      modelNumber: "CH-HPR28M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr36m-230vo",
      modelNumber: "CH-HPR36M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr48m-230vo",
      modelNumber: "CH-HPR48M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es09-115vo",
      modelNumber: "CH-ES09-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr55m-230vo",
      modelNumber: "CH-HPR55M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-es06-115vo",
      modelNumber: "CH-ES06-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-06olvwm-115vo",
      modelNumber: "CH-06OLVWM-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny06mia-115vo",
      modelNumber: "CH-NY06MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-nhpr60lcu-230vo",
      modelNumber: "CH-NHPR60LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-hpr35-230vo",
      modelNumber: "CH-HPR35-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res06-115vo",
      modelNumber: "CH-RES06-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res09-115vo",
      modelNumber: "CH-RES09-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res12-115vo",
      modelNumber: "CH-RES12-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res09-230vo",
      modelNumber: "CH-RES09-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res12-230vo",
      modelNumber: "CH-RES12-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res18-230vo",
      modelNumber: "CH-RES18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-res24-230vo",
      modelNumber: "CH-RES24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp06f9-230vo",
      modelNumber: "CH-RHP06F9-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp09-230vo",
      modelNumber: "CH-RHP09-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp12-230vo",
      modelNumber: "CH-RHP12-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp18-230vo",
      modelNumber: "CH-RHP18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp24-230vo",
      modelNumber: "CH-RHP24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r48lcu-230vo",
      modelNumber: "CH-R48LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r18mes-230vo",
      modelNumber: "CH-R18MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r28mes-230vo",
      modelNumber: "CH-R28MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r36mes-230vo",
      modelNumber: "CH-R36MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rvhp36m-230vo",
      modelNumber: "CH-RVHP36M-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r36lcu-230vo",
      modelNumber: "CH-R36LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls06mia-115vo",
      modelNumber: "CH-RLS06MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls09mia-115vo",
      modelNumber: "CH-RLS09MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls09mia-230vo",
      modelNumber: "CH-RLS09MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls24mia-230vo",
      modelNumber: "CH-RLS24MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp33-230vo",
      modelNumber: "CH-RHP33-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp15-230vo",
      modelNumber: "CH-RHP15-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rel30-230vo",
      modelNumber: "CH-REL30-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-n36lcu-230vo",
      modelNumber: "CH-N36LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-36urbm",
      modelNumber: "CHV6-36URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-48urbm",
      modelNumber: "CHV6-48URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-60urbm",
      modelNumber: "CHV6-60URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-n60lcu-230vo",
      modelNumber: "CH-N60LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny12mia-115vo",
      modelNumber: "CH-NY12MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny12mia-230vo",
      modelNumber: "CH-NY12MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-ny24mia-230vo",
      modelNumber: "CH-NY24MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-el36-230vo",
      modelNumber: "CH-EL36-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-55mes-230vo",
      modelNumber: "CH-55MES-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-28urbm",
      modelNumber: "CHV6-28URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r06mia-115vo",
      modelNumber: "CH-R06MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r09mia-115vo",
      modelNumber: "CH-R09MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rel36-230vo",
      modelNumber: "CH-REL36-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-r60lcu-230vo",
      modelNumber: "CH-R60LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls12mia-115vo",
      modelNumber: "CH-RLS12MIA-115VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls12mia-230vo",
      modelNumber: "CH-RLS12MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rls18mia-230vo",
      modelNumber: "CH-RLS18MIA-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs24urbm",
      modelNumber: "CHV6-RS24URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs36urbm",
      modelNumber: "CHV6-RS36URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs48urbm",
      modelNumber: "CHV6-RS48URBM",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs36urbmhh",
      modelNumber: "CHV6-RS36URBMHH",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs48urbmhh",
      modelNumber: "CHV6-RS48URBMHH",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-chv6-rs60urbmhh",
      modelNumber: "CHV6-RS60URBMHH",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq18-230vo",
      modelNumber: "CH-PQ18-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq24-230vo",
      modelNumber: "CH-PQ24-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq33-230vo",
      modelNumber: "CH-PQ33-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq36-230vo",
      modelNumber: "CH-PQ36-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq48-230vo",
      modelNumber: "CH-PQ48-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-pq55-230vo",
      modelNumber: "CH-PQ55-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp36lcu-230vo",
      modelNumber: "CH-RHP36LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp48lcu-230vo",
      modelNumber: "CH-RHP48LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    },
    {
      id: "cooper-hunter-ch-rhp60lcu-230vo",
      modelNumber: "CH-RHP60LCU-230VO",
      brandId: "cooper-hunter",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-1",
      slug: "cooper-hunter-ch-series-wall-single-cfg-1",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-2",
      slug: "cooper-hunter-ch-series-wall-single-cfg-2",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-3",
      slug: "cooper-hunter-ch-series-wall-single-cfg-3",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-4",
      slug: "cooper-hunter-ch-series-wall-single-cfg-4",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-5",
      slug: "cooper-hunter-ch-series-wall-single-cfg-5",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-6",
      slug: "cooper-hunter-ch-series-wall-single-cfg-6",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-7",
      slug: "cooper-hunter-ch-series-wall-single-cfg-7",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-8",
      slug: "cooper-hunter-ch-series-wall-single-cfg-8",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-9",
      slug: "cooper-hunter-ch-series-wall-single-cfg-9",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-10",
      slug: "cooper-hunter-ch-series-wall-single-cfg-10",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny18mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-11",
      slug: "cooper-hunter-ch-series-wall-single-cfg-11",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-12",
      slug: "cooper-hunter-ch-series-wall-single-cfg-12",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-13",
      slug: "cooper-hunter-ch-series-wall-single-cfg-13",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-14",
      slug: "cooper-hunter-ch-series-wall-single-cfg-14",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-15",
      slug: "cooper-hunter-ch-series-wall-single-cfg-15",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-16",
      slug: "cooper-hunter-ch-series-wall-single-cfg-16",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-17",
      slug: "cooper-hunter-ch-series-wall-single-cfg-17",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-18",
      slug: "cooper-hunter-ch-series-wall-single-cfg-18",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-19",
      slug: "cooper-hunter-ch-series-wall-single-cfg-19",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-20",
      slug: "cooper-hunter-ch-series-wall-single-cfg-20",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-21",
      slug: "cooper-hunter-ch-series-wall-single-cfg-21",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-22",
      slug: "cooper-hunter-ch-series-wall-single-cfg-22",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny18mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-23",
      slug: "cooper-hunter-ch-series-wall-single-cfg-23",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-24",
      slug: "cooper-hunter-ch-series-wall-single-cfg-24",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-25",
      slug: "cooper-hunter-ch-series-wall-single-cfg-25",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-26",
      slug: "cooper-hunter-ch-series-wall-single-cfg-26",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-27",
      slug: "cooper-hunter-ch-series-wall-single-cfg-27",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-28",
      slug: "cooper-hunter-ch-series-wall-single-cfg-28",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-29",
      slug: "cooper-hunter-ch-series-wall-single-cfg-29",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-30",
      slug: "cooper-hunter-ch-series-wall-single-cfg-30",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-31",
      slug: "cooper-hunter-ch-series-wall-single-cfg-31",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-32",
      slug: "cooper-hunter-ch-series-wall-single-cfg-32",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-33",
      slug: "cooper-hunter-ch-series-wall-single-cfg-33",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-34",
      slug: "cooper-hunter-ch-series-wall-single-cfg-34",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-35",
      slug: "cooper-hunter-ch-series-wall-single-cfg-35",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-36",
      slug: "cooper-hunter-ch-series-wall-single-cfg-36",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-37",
      slug: "cooper-hunter-ch-series-wall-single-cfg-37",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-38",
      slug: "cooper-hunter-ch-series-wall-single-cfg-38",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-39",
      slug: "cooper-hunter-ch-series-wall-single-cfg-39",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-40",
      slug: "cooper-hunter-ch-series-wall-single-cfg-40",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-41",
      slug: "cooper-hunter-ch-series-wall-single-cfg-41",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-42",
      slug: "cooper-hunter-ch-series-wall-single-cfg-42",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-43",
      slug: "cooper-hunter-ch-series-wall-single-cfg-43",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-44",
      slug: "cooper-hunter-ch-series-wall-single-cfg-44",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-45",
      slug: "cooper-hunter-ch-series-wall-single-cfg-45",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-46",
      slug: "cooper-hunter-ch-series-wall-single-cfg-46",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-47",
      slug: "cooper-hunter-ch-series-wall-single-cfg-47",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-48",
      slug: "cooper-hunter-ch-series-wall-single-cfg-48",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-49",
      slug: "cooper-hunter-ch-series-wall-single-cfg-49",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-50",
      slug: "cooper-hunter-ch-series-wall-single-cfg-50",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-51",
      slug: "cooper-hunter-ch-series-wall-single-cfg-51",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-52",
      slug: "cooper-hunter-ch-series-wall-single-cfg-52",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-53",
      slug: "cooper-hunter-ch-series-wall-single-cfg-53",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-54",
      slug: "cooper-hunter-ch-series-wall-single-cfg-54",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-55",
      slug: "cooper-hunter-ch-series-wall-single-cfg-55",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-56",
      slug: "cooper-hunter-ch-series-wall-single-cfg-56",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-57",
      slug: "cooper-hunter-ch-series-wall-single-cfg-57",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-58",
      slug: "cooper-hunter-ch-series-wall-single-cfg-58",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-59",
      slug: "cooper-hunter-ch-series-wall-single-cfg-59",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-28mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-60",
      slug: "cooper-hunter-ch-series-wall-single-cfg-60",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-28mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-61",
      slug: "cooper-hunter-ch-series-wall-single-cfg-61",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-28mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-62",
      slug: "cooper-hunter-ch-series-wall-single-cfg-62",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-36mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-63",
      slug: "cooper-hunter-ch-series-wall-single-cfg-63",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-48mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-64",
      slug: "cooper-hunter-ch-series-wall-single-cfg-64",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-48mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.95,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-65",
      slug: "cooper-hunter-ch-series-wall-single-cfg-65",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr19m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-66",
      slug: "cooper-hunter-ch-series-wall-single-cfg-66",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr19m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-67",
      slug: "cooper-hunter-ch-series-wall-single-cfg-67",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr19m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-68",
      slug: "cooper-hunter-ch-series-wall-single-cfg-68",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr28m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-69",
      slug: "cooper-hunter-ch-series-wall-single-cfg-69",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr28m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-70",
      slug: "cooper-hunter-ch-series-wall-single-cfg-70",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr28m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-71",
      slug: "cooper-hunter-ch-series-wall-single-cfg-71",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr36m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-72",
      slug: "cooper-hunter-ch-series-wall-single-cfg-72",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr48m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-73",
      slug: "cooper-hunter-ch-series-wall-single-cfg-73",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr48m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-74",
      slug: "cooper-hunter-ch-series-wall-single-cfg-74",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr48m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-75",
      slug: "cooper-hunter-ch-series-wall-single-cfg-75",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr36m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-76",
      slug: "cooper-hunter-ch-series-wall-single-cfg-76",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-77",
      slug: "cooper-hunter-ch-series-wall-single-cfg-77",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr55m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-78",
      slug: "cooper-hunter-ch-series-wall-single-cfg-78",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr55m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-79",
      slug: "cooper-hunter-ch-series-wall-single-cfg-79",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr55m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-80",
      slug: "cooper-hunter-ch-series-wall-single-cfg-80",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-81",
      slug: "cooper-hunter-ch-series-wall-single-cfg-81",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-82",
      slug: "cooper-hunter-ch-series-wall-single-cfg-82",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-83",
      slug: "cooper-hunter-ch-series-wall-single-cfg-83",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-84",
      slug: "cooper-hunter-ch-series-wall-single-cfg-84",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-85",
      slug: "cooper-hunter-ch-series-wall-single-cfg-85",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-86",
      slug: "cooper-hunter-ch-series-wall-single-cfg-86",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 22.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-87",
      slug: "cooper-hunter-ch-series-wall-single-cfg-87",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-88",
      slug: "cooper-hunter-ch-series-wall-single-cfg-88",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-89",
      slug: "cooper-hunter-ch-series-wall-single-cfg-89",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-90",
      slug: "cooper-hunter-ch-series-wall-single-cfg-90",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-91",
      slug: "cooper-hunter-ch-series-wall-single-cfg-91",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-92",
      slug: "cooper-hunter-ch-series-wall-single-cfg-92",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-93",
      slug: "cooper-hunter-ch-series-wall-single-cfg-93",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-94",
      slug: "cooper-hunter-ch-series-wall-single-cfg-94",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-95",
      slug: "cooper-hunter-ch-series-wall-single-cfg-95",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-96",
      slug: "cooper-hunter-ch-series-wall-single-cfg-96",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-97",
      slug: "cooper-hunter-ch-series-wall-single-cfg-97",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-98",
      slug: "cooper-hunter-ch-series-wall-single-cfg-98",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-99",
      slug: "cooper-hunter-ch-series-wall-single-cfg-99",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es06-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-100",
      slug: "cooper-hunter-ch-series-wall-single-cfg-100",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-06olvwm-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-101",
      slug: "cooper-hunter-ch-series-wall-single-cfg-101",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny06mia-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-102",
      slug: "cooper-hunter-ch-series-wall-single-cfg-102",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-103",
      slug: "cooper-hunter-ch-series-wall-single-cfg-103",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-104",
      slug: "cooper-hunter-ch-series-wall-single-cfg-104",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-105",
      slug: "cooper-hunter-ch-series-wall-single-cfg-105",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-106",
      slug: "cooper-hunter-ch-series-wall-single-cfg-106",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-107",
      slug: "cooper-hunter-ch-series-wall-single-cfg-107",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-108",
      slug: "cooper-hunter-ch-series-wall-single-cfg-108",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-109",
      slug: "cooper-hunter-ch-series-wall-single-cfg-109",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 19.8,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-110",
      slug: "cooper-hunter-ch-series-wall-single-cfg-110",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-111",
      slug: "cooper-hunter-ch-series-wall-single-cfg-111",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-112",
      slug: "cooper-hunter-ch-series-wall-single-cfg-112",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr35-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-113",
      slug: "cooper-hunter-ch-series-wall-single-cfg-113",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-114",
      slug: "cooper-hunter-ch-series-wall-single-cfg-114",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-115",
      slug: "cooper-hunter-ch-series-wall-single-cfg-115",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-116",
      slug: "cooper-hunter-ch-series-wall-single-cfg-116",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-117",
      slug: "cooper-hunter-ch-series-wall-single-cfg-117",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-118",
      slug: "cooper-hunter-ch-series-wall-single-cfg-118",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-119",
      slug: "cooper-hunter-ch-series-wall-single-cfg-119",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-120",
      slug: "cooper-hunter-ch-series-wall-single-cfg-120",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-121",
      slug: "cooper-hunter-ch-series-wall-single-cfg-121",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-122",
      slug: "cooper-hunter-ch-series-wall-single-cfg-122",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-123",
      slug: "cooper-hunter-ch-series-wall-single-cfg-123",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-124",
      slug: "cooper-hunter-ch-series-wall-single-cfg-124",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-125",
      slug: "cooper-hunter-ch-series-wall-single-cfg-125",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-126",
      slug: "cooper-hunter-ch-series-wall-single-cfg-126",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-127",
      slug: "cooper-hunter-ch-series-wall-single-cfg-127",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-128",
      slug: "cooper-hunter-ch-series-wall-single-cfg-128",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-129",
      slug: "cooper-hunter-ch-series-wall-single-cfg-129",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-130",
      slug: "cooper-hunter-ch-series-wall-single-cfg-130",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-131",
      slug: "cooper-hunter-ch-series-wall-single-cfg-131",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-132",
      slug: "cooper-hunter-ch-series-wall-single-cfg-132",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-133",
      slug: "cooper-hunter-ch-series-wall-single-cfg-133",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-134",
      slug: "cooper-hunter-ch-series-wall-single-cfg-134",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-135",
      slug: "cooper-hunter-ch-series-wall-single-cfg-135",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-136",
      slug: "cooper-hunter-ch-series-wall-single-cfg-136",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-137",
      slug: "cooper-hunter-ch-series-wall-single-cfg-137",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-138",
      slug: "cooper-hunter-ch-series-wall-single-cfg-138",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-139",
      slug: "cooper-hunter-ch-series-wall-single-cfg-139",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-140",
      slug: "cooper-hunter-ch-series-wall-single-cfg-140",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-141",
      slug: "cooper-hunter-ch-series-wall-single-cfg-141",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-142",
      slug: "cooper-hunter-ch-series-wall-single-cfg-142",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-143",
      slug: "cooper-hunter-ch-series-wall-single-cfg-143",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-144",
      slug: "cooper-hunter-ch-series-wall-single-cfg-144",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-145",
      slug: "cooper-hunter-ch-series-wall-single-cfg-145",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-146",
      slug: "cooper-hunter-ch-series-wall-single-cfg-146",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-147",
      slug: "cooper-hunter-ch-series-wall-single-cfg-147",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-148",
      slug: "cooper-hunter-ch-series-wall-single-cfg-148",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-149",
      slug: "cooper-hunter-ch-series-wall-single-cfg-149",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-150",
      slug: "cooper-hunter-ch-series-wall-single-cfg-150",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 19.8,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-151",
      slug: "cooper-hunter-ch-series-wall-single-cfg-151",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-152",
      slug: "cooper-hunter-ch-series-wall-single-cfg-152",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-153",
      slug: "cooper-hunter-ch-series-wall-single-cfg-153",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-nhpr48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-154",
      slug: "cooper-hunter-ch-series-wall-single-cfg-154",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny06mia-115vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-155",
      slug: "cooper-hunter-ch-series-wall-single-cfg-155",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-156",
      slug: "cooper-hunter-ch-series-wall-single-cfg-156",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny18mia-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-157",
      slug: "cooper-hunter-ch-series-wall-single-cfg-157",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny09mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-158",
      slug: "cooper-hunter-ch-series-wall-single-cfg-158",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res06-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-159",
      slug: "cooper-hunter-ch-series-wall-single-cfg-159",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res09-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-160",
      slug: "cooper-hunter-ch-series-wall-single-cfg-160",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res12-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-161",
      slug: "cooper-hunter-ch-series-wall-single-cfg-161",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-162",
      slug: "cooper-hunter-ch-series-wall-single-cfg-162",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-163",
      slug: "cooper-hunter-ch-series-wall-single-cfg-163",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-164",
      slug: "cooper-hunter-ch-series-wall-single-cfg-164",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-165",
      slug: "cooper-hunter-ch-series-wall-single-cfg-165",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-166",
      slug: "cooper-hunter-ch-series-wall-single-cfg-166",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-167",
      slug: "cooper-hunter-ch-series-wall-single-cfg-167",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-168",
      slug: "cooper-hunter-ch-series-wall-single-cfg-168",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-169",
      slug: "cooper-hunter-ch-series-wall-single-cfg-169",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-170",
      slug: "cooper-hunter-ch-series-wall-single-cfg-170",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res09-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-171",
      slug: "cooper-hunter-ch-series-wall-single-cfg-171",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res12-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-172",
      slug: "cooper-hunter-ch-series-wall-single-cfg-172",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-173",
      slug: "cooper-hunter-ch-series-wall-single-cfg-173",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-174",
      slug: "cooper-hunter-ch-series-wall-single-cfg-174",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-175",
      slug: "cooper-hunter-ch-series-wall-single-cfg-175",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-176",
      slug: "cooper-hunter-ch-series-wall-single-cfg-176",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp06f9-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-177",
      slug: "cooper-hunter-ch-series-wall-single-cfg-177",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-178",
      slug: "cooper-hunter-ch-series-wall-single-cfg-178",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-179",
      slug: "cooper-hunter-ch-series-wall-single-cfg-179",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-180",
      slug: "cooper-hunter-ch-series-wall-single-cfg-180",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-181",
      slug: "cooper-hunter-ch-series-wall-single-cfg-181",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-182",
      slug: "cooper-hunter-ch-series-wall-single-cfg-182",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-183",
      slug: "cooper-hunter-ch-series-wall-single-cfg-183",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-184",
      slug: "cooper-hunter-ch-series-wall-single-cfg-184",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp09-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-185",
      slug: "cooper-hunter-ch-series-wall-single-cfg-185",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-186",
      slug: "cooper-hunter-ch-series-wall-single-cfg-186",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-187",
      slug: "cooper-hunter-ch-series-wall-single-cfg-187",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-188",
      slug: "cooper-hunter-ch-series-wall-single-cfg-188",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-189",
      slug: "cooper-hunter-ch-series-wall-single-cfg-189",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-190",
      slug: "cooper-hunter-ch-series-wall-single-cfg-190",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-191",
      slug: "cooper-hunter-ch-series-wall-single-cfg-191",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r48lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-192",
      slug: "cooper-hunter-ch-series-wall-single-cfg-192",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp12-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-193",
      slug: "cooper-hunter-ch-series-wall-single-cfg-193",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r18mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-194",
      slug: "cooper-hunter-ch-series-wall-single-cfg-194",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r18mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-195",
      slug: "cooper-hunter-ch-series-wall-single-cfg-195",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r18mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.55,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-196",
      slug: "cooper-hunter-ch-series-wall-single-cfg-196",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r28mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 25,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-197",
      slug: "cooper-hunter-ch-series-wall-single-cfg-197",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r28mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26800,
      coolingCapacityMaxBtu: 26800,
      seer2: 23,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-198",
      slug: "cooper-hunter-ch-series-wall-single-cfg-198",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r36mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 24,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-199",
      slug: "cooper-hunter-ch-series-wall-single-cfg-199",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r36mes-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-200",
      slug: "cooper-hunter-ch-series-wall-single-cfg-200",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r36mes-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 22,
      hspf2: 9.35,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-201",
      slug: "cooper-hunter-ch-series-wall-single-cfg-201",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rvhp36m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-202",
      slug: "cooper-hunter-ch-series-wall-single-cfg-202",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rvhp36m-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-203",
      slug: "cooper-hunter-ch-series-wall-single-cfg-203",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r36lcu-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-204",
      slug: "cooper-hunter-ch-series-wall-single-cfg-204",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rls06mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-205",
      slug: "cooper-hunter-ch-series-wall-single-cfg-205",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rls09mia-115vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-206",
      slug: "cooper-hunter-ch-series-wall-single-cfg-206",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rls09mia-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.2,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-207",
      slug: "cooper-hunter-ch-series-wall-single-cfg-207",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rls24mia-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-208",
      slug: "cooper-hunter-ch-series-wall-single-cfg-208",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp33-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-209",
      slug: "cooper-hunter-ch-series-wall-single-cfg-209",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp33-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-210",
      slug: "cooper-hunter-ch-series-wall-single-cfg-210",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp33-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-211",
      slug: "cooper-hunter-ch-series-wall-single-cfg-211",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp15-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-212",
      slug: "cooper-hunter-ch-series-wall-single-cfg-212",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rhp15-230vo",
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
      id: "cooper-hunter-ch-series-wall-single-cfg-213",
      slug: "cooper-hunter-ch-series-wall-single-cfg-213",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rel30-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-wall-single-cfg-214",
      slug: "cooper-hunter-ch-series-wall-single-cfg-214",
      modelId: "cooper-hunter-ch-series-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rel30-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-cfg-1",
      slug: "cooper-hunter-standard-wall-single-cfg-1",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-2",
      slug: "cooper-hunter-standard-wall-single-cfg-2",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-36urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-3",
      slug: "cooper-hunter-standard-wall-single-cfg-3",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-48urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-4",
      slug: "cooper-hunter-standard-wall-single-cfg-4",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-36urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-5",
      slug: "cooper-hunter-standard-wall-single-cfg-5",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-48urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-6",
      slug: "cooper-hunter-standard-wall-single-cfg-6",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-60urbm",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57500,
      coolingCapacityMaxBtu: 57500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-cfg-7",
      slug: "cooper-hunter-standard-wall-single-cfg-7",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-8",
      slug: "cooper-hunter-standard-wall-single-cfg-8",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny12mia-115vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-9",
      slug: "cooper-hunter-standard-wall-single-cfg-9",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny12mia-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-10",
      slug: "cooper-hunter-standard-wall-single-cfg-10",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-ny24mia-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-11",
      slug: "cooper-hunter-standard-wall-single-cfg-11",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-el36-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-12",
      slug: "cooper-hunter-standard-wall-single-cfg-12",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-13",
      slug: "cooper-hunter-standard-wall-single-cfg-13",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-14",
      slug: "cooper-hunter-standard-wall-single-cfg-14",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-15",
      slug: "cooper-hunter-standard-wall-single-cfg-15",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-16",
      slug: "cooper-hunter-standard-wall-single-cfg-16",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-17",
      slug: "cooper-hunter-standard-wall-single-cfg-17",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-55mes-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-18",
      slug: "cooper-hunter-standard-wall-single-cfg-18",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-55mes-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-19",
      slug: "cooper-hunter-standard-wall-single-cfg-19",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-20",
      slug: "cooper-hunter-standard-wall-single-cfg-20",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-21",
      slug: "cooper-hunter-standard-wall-single-cfg-21",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-22",
      slug: "cooper-hunter-standard-wall-single-cfg-22",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-23",
      slug: "cooper-hunter-standard-wall-single-cfg-23",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-24",
      slug: "cooper-hunter-standard-wall-single-cfg-24",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n36lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-25",
      slug: "cooper-hunter-standard-wall-single-cfg-25",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-n60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-26",
      slug: "cooper-hunter-standard-wall-single-cfg-26",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-28urbm",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27200,
      coolingCapacityMaxBtu: 27200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-cfg-27",
      slug: "cooper-hunter-standard-wall-single-cfg-27",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-28urbm",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27200,
      coolingCapacityMaxBtu: 27200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-cfg-28",
      slug: "cooper-hunter-standard-wall-single-cfg-28",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-28urbm",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27200,
      coolingCapacityMaxBtu: 27200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-standard-wall-single-cfg-29",
      slug: "cooper-hunter-standard-wall-single-cfg-29",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r06mia-115vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-30",
      slug: "cooper-hunter-standard-wall-single-cfg-30",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r09mia-115vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-31",
      slug: "cooper-hunter-standard-wall-single-cfg-31",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rel36-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-32",
      slug: "cooper-hunter-standard-wall-single-cfg-32",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-r60lcu-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-33",
      slug: "cooper-hunter-standard-wall-single-cfg-33",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rls12mia-115vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-34",
      slug: "cooper-hunter-standard-wall-single-cfg-34",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rls12mia-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-35",
      slug: "cooper-hunter-standard-wall-single-cfg-35",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rls18mia-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-36",
      slug: "cooper-hunter-standard-wall-single-cfg-36",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs24urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-37",
      slug: "cooper-hunter-standard-wall-single-cfg-37",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-38",
      slug: "cooper-hunter-standard-wall-single-cfg-38",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-39",
      slug: "cooper-hunter-standard-wall-single-cfg-39",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs24urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-40",
      slug: "cooper-hunter-standard-wall-single-cfg-40",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-41",
      slug: "cooper-hunter-standard-wall-single-cfg-41",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-42",
      slug: "cooper-hunter-standard-wall-single-cfg-42",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs24urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-43",
      slug: "cooper-hunter-standard-wall-single-cfg-43",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-44",
      slug: "cooper-hunter-standard-wall-single-cfg-44",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbm",
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
      id: "cooper-hunter-standard-wall-single-cfg-45",
      slug: "cooper-hunter-standard-wall-single-cfg-45",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbmhh",
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
      id: "cooper-hunter-standard-wall-single-cfg-46",
      slug: "cooper-hunter-standard-wall-single-cfg-46",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbmhh",
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
      id: "cooper-hunter-standard-wall-single-cfg-47",
      slug: "cooper-hunter-standard-wall-single-cfg-47",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs36urbmhh",
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
      id: "cooper-hunter-standard-wall-single-cfg-48",
      slug: "cooper-hunter-standard-wall-single-cfg-48",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbmhh",
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
      id: "cooper-hunter-standard-wall-single-cfg-49",
      slug: "cooper-hunter-standard-wall-single-cfg-49",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbmhh",
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
      id: "cooper-hunter-standard-wall-single-cfg-50",
      slug: "cooper-hunter-standard-wall-single-cfg-50",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs48urbmhh",
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
      id: "cooper-hunter-standard-wall-single-cfg-51",
      slug: "cooper-hunter-standard-wall-single-cfg-51",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs60urbmhh",
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
      id: "cooper-hunter-standard-wall-single-cfg-52",
      slug: "cooper-hunter-standard-wall-single-cfg-52",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs60urbmhh",
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
      id: "cooper-hunter-standard-wall-single-cfg-53",
      slug: "cooper-hunter-standard-wall-single-cfg-53",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-chv6-rs60urbmhh",
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
      id: "cooper-hunter-standard-wall-single-cfg-54",
      slug: "cooper-hunter-standard-wall-single-cfg-54",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rel36-230vo",
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
      id: "cooper-hunter-standard-wall-single-cfg-55",
      slug: "cooper-hunter-standard-wall-single-cfg-55",
      modelId: "cooper-hunter-standard-wall-single",
      outdoorUnitId: "cooper-hunter-ch-rel36-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-cfg-1",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-1",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-2",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-2",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.4,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-3",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-3",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-cfg-4",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-4",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.6,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-5",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-5",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-6",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-6",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-es18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-7",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-7",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-hpr18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.6,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-8",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-8",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-es24-230vo",
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
      id: "cooper-hunter-ch-series-central-ducted-cfg-9",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-9",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-hpr24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.4,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-10",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-10",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-nhpr60lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-11",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-11",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-pq18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-12",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-12",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-pq24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-13",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-13",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-pq33-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.2,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-14",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-14",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-pq36-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-15",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-15",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-pq48-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-16",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-16",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-pq55-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 17.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-17",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-17",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-rhp18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-18",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-18",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-rhp24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-19",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-19",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-rhp36lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-20",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-20",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-rhp48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-21",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-21",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-rhp60lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-22",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-22",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-res18-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-23",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-23",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-res24-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-24",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-24",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-rel30-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "cooper-hunter-ch-series-central-ducted-cfg-25",
      slug: "cooper-hunter-ch-series-central-ducted-cfg-25",
      modelId: "cooper-hunter-ch-series-central-ducted",
      outdoorUnitId: "cooper-hunter-ch-r48lcu-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-3",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-4",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-5",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-6",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-7",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-8",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-9",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-10",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-11",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-12",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-13",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-14",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-16",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-17",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-18",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-19",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-20",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-21",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-22",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-23",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-24",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-25",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-26",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-27",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-28",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-30",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-31",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-33",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-34",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-36",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-37",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-38",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-39",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-41",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-42",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-43",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-44",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-45",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-46",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-51",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-54",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-55",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-56",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-57",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-58",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-59",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-60",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-61",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-62",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-63",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-65",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-66",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-67",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-68",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-69",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-70",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-71",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-72",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-73",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-74",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-75",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-76",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-77",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-78",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-79",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-80",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-81",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-82",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-83",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-84",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-85",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.76,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-88",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-89",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-91",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-92",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-93",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-94",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-95",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-96",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-97",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-98",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-99",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-100",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-101",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-102",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-103",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-104",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-105",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-106",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-107",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-110",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-111",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-112",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-113",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-114",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-115",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-116",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-117",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-118",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-119",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-120",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-123",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-124",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-125",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-126",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-127",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-128",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-129",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-130",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-131",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-132",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-134",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-135",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-137",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-138",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-139",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-140",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-141",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-142",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-143",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-144",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-145",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-146",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-147",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-148",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-149",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-150",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-151",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-152",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-153",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-154",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-155",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-156",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-157",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-158",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-159",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-160",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-161",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-162",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-163",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-164",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-165",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-166",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-167",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-168",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-169",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-170",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-171",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-172",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-173",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-174",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-175",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-176",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-177",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-178",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-179",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-180",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-181",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-182",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-183",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-184",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-185",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-186",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-187",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-188",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-189",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-190",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-191",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-192",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-194",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-196",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-197",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-198",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-199",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-200",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-201",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-202",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-203",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-204",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-205",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-206",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 2.07,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-207",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-208",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-209",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-210",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-211",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-212",
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
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-213",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-wall-single-cfg-214",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-2",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-4",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-6",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-8",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-9",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-10",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-11",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-12",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-13",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-14",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-15",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-16",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-17",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-18",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-19",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-20",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-21",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-22",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-23",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-29",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-30",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-31",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-36",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-39",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-42",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-44",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 63000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 63000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 63000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-standard-wall-single-cfg-54",
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
      configurationId: "cooper-hunter-standard-wall-single-cfg-55",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-16",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-21",
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
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "cooper-hunter-ch-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.9,
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
