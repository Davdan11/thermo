import type { BrandDataset } from "../../types";

export const chDataset: BrandDataset = {
  brand: {
    id: "c-h",
    slug: "c-h",
    name: "C&H",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "c-h-standard",
      slug: "c-h-standard",
      name: "Standard",
      brandId: "c-h",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series",
      slug: "c-h-ch-series",
      name: "CH series",
      brandId: "c-h",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "c-h-standard-wall-single",
      slug: "c-h-standard-wall-single",
      name: "Standard",
      seriesId: "c-h-standard",
      brandId: "c-h",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 39000,
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
      id: "c-h-ch-series-wall-single",
      slug: "c-h-ch-series-wall-single",
      name: "CH series",
      seriesId: "c-h-ch-series",
      brandId: "c-h",
      modelNumber: "CH series",
      normalizedModelNumber: "ch-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 5900,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16.5,
      seer2Max: 28.1,
      hspf2Min: 8.5,
      hspf2Max: 13.6,
      cop5FMin: 1.59,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "c-h-ch-12sph-115vo",
      modelNumber: "CH-12SPH-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-09sph-230vo",
      modelNumber: "CH-09SPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-18sph-230vo",
      modelNumber: "CH-18SPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-24lcdtu-o",
      modelNumber: "CH-24LCDTU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-36lcdtu-o",
      modelNumber: "CH-36LCDTU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-48lcdtu-o",
      modelNumber: "CH-48LCDTU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-60lcdtu-o",
      modelNumber: "CH-60LCDTU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-24lcu-o",
      modelNumber: "CH-24LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-36lcu-o",
      modelNumber: "CH-36LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-48lcu-o",
      modelNumber: "CH-48LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-60lcu-o",
      modelNumber: "CH-60LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-09lcu-o",
      modelNumber: "CH-09LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-18lcu-o",
      modelNumber: "CH-18LCU/O",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-09dkt230vo",
      modelNumber: "CH-09DKT230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-12dkt230vo",
      modelNumber: "CH-12DKT230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch28msph230vo",
      modelNumber: "CH28MSPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-sr09sph-115vo",
      modelNumber: "CH-SR09SPH-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-09mia115vo",
      modelNumber: "CH-09MIA115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-12sph-230vo",
      modelNumber: "CH-12SPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-24sph-230vo",
      modelNumber: "CH-24SPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-24dkt230vo",
      modelNumber: "CH-24DKT230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp36msph-230vo",
      modelNumber: "CH-HYP36MSPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp28msph-230vo",
      modelNumber: "CH-HYP28MSPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch18msph230vo",
      modelNumber: "CH18MSPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch36msph230vo",
      modelNumber: "CH36MSPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch48msph230vo",
      modelNumber: "CH48MSPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp09sph230vo",
      modelNumber: "CH-HYP09SPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp12sph230vo",
      modelNumber: "CH-HYP12SPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp24sph230vo",
      modelNumber: "CH-HYP24SPH230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp48lcuo",
      modelNumber: "CH-HYP48LCUO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp48msph-230vo",
      modelNumber: "CH-HYP48MSPH-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ng09mia115vo",
      modelNumber: "CH-NG09MIA115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ng18mia230vo",
      modelNumber: "CH-NG18MIA230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-nh36lcuo",
      modelNumber: "CH-NH36LCUO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-nh48lcuo",
      modelNumber: "CH-NH48LCUO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny12mia-115vo",
      modelNumber: "CH-NY12MIA-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny12mia-230vo",
      modelNumber: "CH-NY12MIA-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny24mia-230vo",
      modelNumber: "CH-NY24MIA-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-el36-230vo",
      modelNumber: "CH-EL36-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-n36lcu-230vo",
      modelNumber: "CH-N36LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-n60lcu-230vo",
      modelNumber: "CH-N60LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-55mes-230vo",
      modelNumber: "CH-55MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hyp36lcuo",
      modelNumber: "CH-HYP36LCUO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr06f9-230vo",
      modelNumber: "CH-HPR06F9-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr09-230vo",
      modelNumber: "CH-HPR09-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr12-230vo",
      modelNumber: "CH-HPR12-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr18-230vo",
      modelNumber: "CH-HPR18-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr24-230vo",
      modelNumber: "CH-HPR24-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny09mia-115vo",
      modelNumber: "CH-NY09MIA-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny18mia-230vo",
      modelNumber: "CH-NY18MIA-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es09-230vo",
      modelNumber: "CH-ES09-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es12-230vo",
      modelNumber: "CH-ES12-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es18-230vo",
      modelNumber: "CH-ES18-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es24-230vo",
      modelNumber: "CH-ES24-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny09mia-230vo",
      modelNumber: "CH-NY09MIA-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es12-115vo",
      modelNumber: "CH-ES12-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-n48lcu-230vo",
      modelNumber: "CH-N48LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-nhpr36lcu-230vo",
      modelNumber: "CH-NHPR36LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-nhpr48lcu-230vo",
      modelNumber: "CH-NHPR48LCU-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-18mes-230vo",
      modelNumber: "CH-18MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-28mes-230vo",
      modelNumber: "CH-28MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-36mes-230vo",
      modelNumber: "CH-36MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-48mes-230vo",
      modelNumber: "CH-48MES-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr19m-230vo",
      modelNumber: "CH-HPR19M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr28m-230vo",
      modelNumber: "CH-HPR28M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr36m-230vo",
      modelNumber: "CH-HPR36M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr48m-230vo",
      modelNumber: "CH-HPR48M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es09-115vo",
      modelNumber: "CH-ES09-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-hpr55m-230vo",
      modelNumber: "CH-HPR55M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-06olvwm-115vo",
      modelNumber: "CH-06OLVWM-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-ny06mia-115vo",
      modelNumber: "CH-NY06MIA-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-es06-115vo",
      modelNumber: "CH-ES06-115VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp19m-230vo",
      modelNumber: "CH-RHP19M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp28m-230vo",
      modelNumber: "CH-RHP28M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp36m-230vo",
      modelNumber: "CH-RHP36M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp48m-230vo",
      modelNumber: "CH-RHP48M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    },
    {
      id: "c-h-ch-rhp55m-230vo",
      modelNumber: "CH-RHP55M-230VO",
      brandId: "c-h",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "c-h-standard-wall-single-cfg-1",
      slug: "c-h-standard-wall-single-cfg-1",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-12sph-115vo",
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
      id: "c-h-standard-wall-single-cfg-2",
      slug: "c-h-standard-wall-single-cfg-2",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-3",
      slug: "c-h-standard-wall-single-cfg-3",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-4",
      slug: "c-h-standard-wall-single-cfg-4",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24lcdtu-o",
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
      id: "c-h-standard-wall-single-cfg-5",
      slug: "c-h-standard-wall-single-cfg-5",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-36lcdtu-o",
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
      id: "c-h-standard-wall-single-cfg-6",
      slug: "c-h-standard-wall-single-cfg-6",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-48lcdtu-o",
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
      id: "c-h-standard-wall-single-cfg-7",
      slug: "c-h-standard-wall-single-cfg-7",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-60lcdtu-o",
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
      id: "c-h-standard-wall-single-cfg-8",
      slug: "c-h-standard-wall-single-cfg-8",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24lcu-o",
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
      id: "c-h-standard-wall-single-cfg-9",
      slug: "c-h-standard-wall-single-cfg-9",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-36lcu-o",
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
      id: "c-h-standard-wall-single-cfg-10",
      slug: "c-h-standard-wall-single-cfg-10",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-cfg-11",
      slug: "c-h-standard-wall-single-cfg-11",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-60lcu-o",
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
      id: "c-h-standard-wall-single-cfg-12",
      slug: "c-h-standard-wall-single-cfg-12",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09lcu-o",
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
      id: "c-h-standard-wall-single-cfg-13",
      slug: "c-h-standard-wall-single-cfg-13",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-18lcu-o",
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
      id: "c-h-standard-wall-single-cfg-14",
      slug: "c-h-standard-wall-single-cfg-14",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09dkt230vo",
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
      id: "c-h-standard-wall-single-cfg-15",
      slug: "c-h-standard-wall-single-cfg-15",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-12dkt230vo",
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
      id: "c-h-standard-wall-single-cfg-16",
      slug: "c-h-standard-wall-single-cfg-16",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-36lcu-o",
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
      id: "c-h-standard-wall-single-cfg-17",
      slug: "c-h-standard-wall-single-cfg-17",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-cfg-18",
      slug: "c-h-standard-wall-single-cfg-18",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch28msph230vo",
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
      id: "c-h-standard-wall-single-cfg-19",
      slug: "c-h-standard-wall-single-cfg-19",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-sr09sph-115vo",
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
      id: "c-h-standard-wall-single-cfg-20",
      slug: "c-h-standard-wall-single-cfg-20",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09mia115vo",
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
      id: "c-h-standard-wall-single-cfg-21",
      slug: "c-h-standard-wall-single-cfg-21",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-22",
      slug: "c-h-standard-wall-single-cfg-22",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-12sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-23",
      slug: "c-h-standard-wall-single-cfg-23",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-24",
      slug: "c-h-standard-wall-single-cfg-24",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-25",
      slug: "c-h-standard-wall-single-cfg-25",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-12dkt230vo",
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
      id: "c-h-standard-wall-single-cfg-26",
      slug: "c-h-standard-wall-single-cfg-26",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-27",
      slug: "c-h-standard-wall-single-cfg-27",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-28",
      slug: "c-h-standard-wall-single-cfg-28",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-29",
      slug: "c-h-standard-wall-single-cfg-29",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09dkt230vo",
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
      id: "c-h-standard-wall-single-cfg-30",
      slug: "c-h-standard-wall-single-cfg-30",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-12dkt230vo",
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
      id: "c-h-standard-wall-single-cfg-31",
      slug: "c-h-standard-wall-single-cfg-31",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24dkt230vo",
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
      id: "c-h-standard-wall-single-cfg-32",
      slug: "c-h-standard-wall-single-cfg-32",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-12sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-33",
      slug: "c-h-standard-wall-single-cfg-33",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-34",
      slug: "c-h-standard-wall-single-cfg-34",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-35",
      slug: "c-h-standard-wall-single-cfg-35",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-36",
      slug: "c-h-standard-wall-single-cfg-36",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-60lcu-o",
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
      id: "c-h-standard-wall-single-cfg-37",
      slug: "c-h-standard-wall-single-cfg-37",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-cfg-38",
      slug: "c-h-standard-wall-single-cfg-38",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp36msph-230vo",
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
      id: "c-h-standard-wall-single-cfg-39",
      slug: "c-h-standard-wall-single-cfg-39",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp36msph-230vo",
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
      id: "c-h-standard-wall-single-cfg-40",
      slug: "c-h-standard-wall-single-cfg-40",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp28msph-230vo",
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
      id: "c-h-standard-wall-single-cfg-41",
      slug: "c-h-standard-wall-single-cfg-41",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch18msph230vo",
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
      id: "c-h-standard-wall-single-cfg-42",
      slug: "c-h-standard-wall-single-cfg-42",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch36msph230vo",
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
      id: "c-h-standard-wall-single-cfg-43",
      slug: "c-h-standard-wall-single-cfg-43",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch48msph230vo",
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
      id: "c-h-standard-wall-single-cfg-44",
      slug: "c-h-standard-wall-single-cfg-44",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-12sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-45",
      slug: "c-h-standard-wall-single-cfg-45",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-46",
      slug: "c-h-standard-wall-single-cfg-46",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-47",
      slug: "c-h-standard-wall-single-cfg-47",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp09sph230vo",
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
      id: "c-h-standard-wall-single-cfg-48",
      slug: "c-h-standard-wall-single-cfg-48",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-49",
      slug: "c-h-standard-wall-single-cfg-49",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp12sph230vo",
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
      id: "c-h-standard-wall-single-cfg-50",
      slug: "c-h-standard-wall-single-cfg-50",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-51",
      slug: "c-h-standard-wall-single-cfg-51",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24lcu-o",
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
      id: "c-h-standard-wall-single-cfg-52",
      slug: "c-h-standard-wall-single-cfg-52",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp24sph230vo",
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
      id: "c-h-standard-wall-single-cfg-53",
      slug: "c-h-standard-wall-single-cfg-53",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-54",
      slug: "c-h-standard-wall-single-cfg-54",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-cfg-55",
      slug: "c-h-standard-wall-single-cfg-55",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-cfg-56",
      slug: "c-h-standard-wall-single-cfg-56",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-36lcu-o",
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
      id: "c-h-standard-wall-single-cfg-57",
      slug: "c-h-standard-wall-single-cfg-57",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-cfg-58",
      slug: "c-h-standard-wall-single-cfg-58",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-cfg-59",
      slug: "c-h-standard-wall-single-cfg-59",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-cfg-60",
      slug: "c-h-standard-wall-single-cfg-60",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-sr09sph-115vo",
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
      id: "c-h-standard-wall-single-cfg-61",
      slug: "c-h-standard-wall-single-cfg-61",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-12sph-115vo",
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
      id: "c-h-standard-wall-single-cfg-62",
      slug: "c-h-standard-wall-single-cfg-62",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-63",
      slug: "c-h-standard-wall-single-cfg-63",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp09sph230vo",
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
      id: "c-h-standard-wall-single-cfg-64",
      slug: "c-h-standard-wall-single-cfg-64",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp12sph230vo",
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
      id: "c-h-standard-wall-single-cfg-65",
      slug: "c-h-standard-wall-single-cfg-65",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-66",
      slug: "c-h-standard-wall-single-cfg-66",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-12sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-67",
      slug: "c-h-standard-wall-single-cfg-67",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-18sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-68",
      slug: "c-h-standard-wall-single-cfg-68",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-69",
      slug: "c-h-standard-wall-single-cfg-69",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch36msph230vo",
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
      id: "c-h-standard-wall-single-cfg-70",
      slug: "c-h-standard-wall-single-cfg-70",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp28msph-230vo",
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
      id: "c-h-standard-wall-single-cfg-71",
      slug: "c-h-standard-wall-single-cfg-71",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-60lcu-o",
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
      id: "c-h-standard-wall-single-cfg-72",
      slug: "c-h-standard-wall-single-cfg-72",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp48lcuo",
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
      id: "c-h-standard-wall-single-cfg-73",
      slug: "c-h-standard-wall-single-cfg-73",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-48lcu-o",
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
      id: "c-h-standard-wall-single-cfg-74",
      slug: "c-h-standard-wall-single-cfg-74",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch48msph230vo",
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
      id: "c-h-standard-wall-single-cfg-75",
      slug: "c-h-standard-wall-single-cfg-75",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-60lcu-o",
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
      id: "c-h-standard-wall-single-cfg-76",
      slug: "c-h-standard-wall-single-cfg-76",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp48msph-230vo",
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
      id: "c-h-standard-wall-single-cfg-77",
      slug: "c-h-standard-wall-single-cfg-77",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp48msph-230vo",
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
      id: "c-h-standard-wall-single-cfg-78",
      slug: "c-h-standard-wall-single-cfg-78",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-09sph-230vo",
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
      id: "c-h-standard-wall-single-cfg-79",
      slug: "c-h-standard-wall-single-cfg-79",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-ng09mia115vo",
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
      id: "c-h-standard-wall-single-cfg-80",
      slug: "c-h-standard-wall-single-cfg-80",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-ng18mia230vo",
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
      id: "c-h-standard-wall-single-cfg-81",
      slug: "c-h-standard-wall-single-cfg-81",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-nh36lcuo",
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
      id: "c-h-standard-wall-single-cfg-82",
      slug: "c-h-standard-wall-single-cfg-82",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-nh48lcuo",
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
      id: "c-h-standard-wall-single-cfg-83",
      slug: "c-h-standard-wall-single-cfg-83",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-hyp24sph230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-standard-wall-single-cfg-84",
      slug: "c-h-standard-wall-single-cfg-84",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-24lcu-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-standard-wall-single-cfg-85",
      slug: "c-h-standard-wall-single-cfg-85",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-ny12mia-115vo",
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
      id: "c-h-standard-wall-single-cfg-86",
      slug: "c-h-standard-wall-single-cfg-86",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-ny12mia-230vo",
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
      id: "c-h-standard-wall-single-cfg-87",
      slug: "c-h-standard-wall-single-cfg-87",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-ny24mia-230vo",
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
      id: "c-h-standard-wall-single-cfg-88",
      slug: "c-h-standard-wall-single-cfg-88",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-el36-230vo",
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
      id: "c-h-standard-wall-single-cfg-89",
      slug: "c-h-standard-wall-single-cfg-89",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-el36-230vo",
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
      id: "c-h-standard-wall-single-cfg-90",
      slug: "c-h-standard-wall-single-cfg-90",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-n36lcu-230vo",
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
      id: "c-h-standard-wall-single-cfg-91",
      slug: "c-h-standard-wall-single-cfg-91",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-n36lcu-230vo",
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
      id: "c-h-standard-wall-single-cfg-92",
      slug: "c-h-standard-wall-single-cfg-92",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-n36lcu-230vo",
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
      id: "c-h-standard-wall-single-cfg-93",
      slug: "c-h-standard-wall-single-cfg-93",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-n60lcu-230vo",
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
      id: "c-h-standard-wall-single-cfg-94",
      slug: "c-h-standard-wall-single-cfg-94",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-n60lcu-230vo",
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
      id: "c-h-standard-wall-single-cfg-95",
      slug: "c-h-standard-wall-single-cfg-95",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-55mes-230vo",
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
      id: "c-h-standard-wall-single-cfg-96",
      slug: "c-h-standard-wall-single-cfg-96",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-55mes-230vo",
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
      id: "c-h-standard-wall-single-cfg-97",
      slug: "c-h-standard-wall-single-cfg-97",
      modelId: "c-h-standard-wall-single",
      outdoorUnitId: "c-h-ch-55mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-1",
      slug: "c-h-ch-series-wall-single-cfg-1",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hyp36lcuo",
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
      id: "c-h-ch-series-wall-single-cfg-2",
      slug: "c-h-ch-series-wall-single-cfg-2",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr06f9-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-3",
      slug: "c-h-ch-series-wall-single-cfg-3",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-4",
      slug: "c-h-ch-series-wall-single-cfg-4",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-5",
      slug: "c-h-ch-series-wall-single-cfg-5",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-6",
      slug: "c-h-ch-series-wall-single-cfg-6",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-7",
      slug: "c-h-ch-series-wall-single-cfg-7",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-ny09mia-115vo",
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
      id: "c-h-ch-series-wall-single-cfg-8",
      slug: "c-h-ch-series-wall-single-cfg-8",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-ny18mia-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-9",
      slug: "c-h-ch-series-wall-single-cfg-9",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-10",
      slug: "c-h-ch-series-wall-single-cfg-10",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-11",
      slug: "c-h-ch-series-wall-single-cfg-11",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-12",
      slug: "c-h-ch-series-wall-single-cfg-12",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-13",
      slug: "c-h-ch-series-wall-single-cfg-13",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr06f9-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-14",
      slug: "c-h-ch-series-wall-single-cfg-14",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-15",
      slug: "c-h-ch-series-wall-single-cfg-15",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-16",
      slug: "c-h-ch-series-wall-single-cfg-16",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-17",
      slug: "c-h-ch-series-wall-single-cfg-17",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-18",
      slug: "c-h-ch-series-wall-single-cfg-18",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-ny09mia-115vo",
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
      id: "c-h-ch-series-wall-single-cfg-19",
      slug: "c-h-ch-series-wall-single-cfg-19",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-ny09mia-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-20",
      slug: "c-h-ch-series-wall-single-cfg-20",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-ny18mia-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-21",
      slug: "c-h-ch-series-wall-single-cfg-21",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es12-115vo",
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
      id: "c-h-ch-series-wall-single-cfg-22",
      slug: "c-h-ch-series-wall-single-cfg-22",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-ny09mia-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-23",
      slug: "c-h-ch-series-wall-single-cfg-23",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-24",
      slug: "c-h-ch-series-wall-single-cfg-24",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-25",
      slug: "c-h-ch-series-wall-single-cfg-25",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-26",
      slug: "c-h-ch-series-wall-single-cfg-26",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-27",
      slug: "c-h-ch-series-wall-single-cfg-27",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-28",
      slug: "c-h-ch-series-wall-single-cfg-28",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-29",
      slug: "c-h-ch-series-wall-single-cfg-29",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-30",
      slug: "c-h-ch-series-wall-single-cfg-30",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-31",
      slug: "c-h-ch-series-wall-single-cfg-31",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-32",
      slug: "c-h-ch-series-wall-single-cfg-32",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-33",
      slug: "c-h-ch-series-wall-single-cfg-33",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-34",
      slug: "c-h-ch-series-wall-single-cfg-34",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-35",
      slug: "c-h-ch-series-wall-single-cfg-35",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-36",
      slug: "c-h-ch-series-wall-single-cfg-36",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-37",
      slug: "c-h-ch-series-wall-single-cfg-37",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-38",
      slug: "c-h-ch-series-wall-single-cfg-38",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-39",
      slug: "c-h-ch-series-wall-single-cfg-39",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-40",
      slug: "c-h-ch-series-wall-single-cfg-40",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-41",
      slug: "c-h-ch-series-wall-single-cfg-41",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-42",
      slug: "c-h-ch-series-wall-single-cfg-42",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-43",
      slug: "c-h-ch-series-wall-single-cfg-43",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-44",
      slug: "c-h-ch-series-wall-single-cfg-44",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-45",
      slug: "c-h-ch-series-wall-single-cfg-45",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-n48lcu-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-46",
      slug: "c-h-ch-series-wall-single-cfg-46",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-n48lcu-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-47",
      slug: "c-h-ch-series-wall-single-cfg-47",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-n48lcu-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-48",
      slug: "c-h-ch-series-wall-single-cfg-48",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-nhpr36lcu-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-49",
      slug: "c-h-ch-series-wall-single-cfg-49",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-nhpr36lcu-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-50",
      slug: "c-h-ch-series-wall-single-cfg-50",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-nhpr36lcu-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-51",
      slug: "c-h-ch-series-wall-single-cfg-51",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-nhpr48lcu-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-52",
      slug: "c-h-ch-series-wall-single-cfg-52",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-nhpr48lcu-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-53",
      slug: "c-h-ch-series-wall-single-cfg-53",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-nhpr48lcu-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-54",
      slug: "c-h-ch-series-wall-single-cfg-54",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-18mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-55",
      slug: "c-h-ch-series-wall-single-cfg-55",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-18mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-56",
      slug: "c-h-ch-series-wall-single-cfg-56",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-18mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-57",
      slug: "c-h-ch-series-wall-single-cfg-57",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-28mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-58",
      slug: "c-h-ch-series-wall-single-cfg-58",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-28mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-59",
      slug: "c-h-ch-series-wall-single-cfg-59",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-28mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-60",
      slug: "c-h-ch-series-wall-single-cfg-60",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-36mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-61",
      slug: "c-h-ch-series-wall-single-cfg-61",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-48mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-62",
      slug: "c-h-ch-series-wall-single-cfg-62",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-48mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-63",
      slug: "c-h-ch-series-wall-single-cfg-63",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-48mes-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-64",
      slug: "c-h-ch-series-wall-single-cfg-64",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr19m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-65",
      slug: "c-h-ch-series-wall-single-cfg-65",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr19m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-66",
      slug: "c-h-ch-series-wall-single-cfg-66",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr19m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-67",
      slug: "c-h-ch-series-wall-single-cfg-67",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr28m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-68",
      slug: "c-h-ch-series-wall-single-cfg-68",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr28m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-69",
      slug: "c-h-ch-series-wall-single-cfg-69",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr28m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-70",
      slug: "c-h-ch-series-wall-single-cfg-70",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr36m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-71",
      slug: "c-h-ch-series-wall-single-cfg-71",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr36m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-72",
      slug: "c-h-ch-series-wall-single-cfg-72",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr48m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-73",
      slug: "c-h-ch-series-wall-single-cfg-73",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr48m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-74",
      slug: "c-h-ch-series-wall-single-cfg-74",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr48m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-75",
      slug: "c-h-ch-series-wall-single-cfg-75",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr36m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-76",
      slug: "c-h-ch-series-wall-single-cfg-76",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es09-115vo",
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
      id: "c-h-ch-series-wall-single-cfg-77",
      slug: "c-h-ch-series-wall-single-cfg-77",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr55m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-78",
      slug: "c-h-ch-series-wall-single-cfg-78",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr55m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-79",
      slug: "c-h-ch-series-wall-single-cfg-79",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr55m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-80",
      slug: "c-h-ch-series-wall-single-cfg-80",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-cfg-81",
      slug: "c-h-ch-series-wall-single-cfg-81",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-cfg-82",
      slug: "c-h-ch-series-wall-single-cfg-82",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-83",
      slug: "c-h-ch-series-wall-single-cfg-83",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-84",
      slug: "c-h-ch-series-wall-single-cfg-84",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-85",
      slug: "c-h-ch-series-wall-single-cfg-85",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-86",
      slug: "c-h-ch-series-wall-single-cfg-86",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-87",
      slug: "c-h-ch-series-wall-single-cfg-87",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-88",
      slug: "c-h-ch-series-wall-single-cfg-88",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-89",
      slug: "c-h-ch-series-wall-single-cfg-89",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-90",
      slug: "c-h-ch-series-wall-single-cfg-90",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-91",
      slug: "c-h-ch-series-wall-single-cfg-91",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-92",
      slug: "c-h-ch-series-wall-single-cfg-92",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-06olvwm-115vo",
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
      id: "c-h-ch-series-wall-single-cfg-93",
      slug: "c-h-ch-series-wall-single-cfg-93",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-ny06mia-115vo",
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
      id: "c-h-ch-series-wall-single-cfg-94",
      slug: "c-h-ch-series-wall-single-cfg-94",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es09-115vo",
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
      id: "c-h-ch-series-wall-single-cfg-95",
      slug: "c-h-ch-series-wall-single-cfg-95",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es12-115vo",
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
      id: "c-h-ch-series-wall-single-cfg-96",
      slug: "c-h-ch-series-wall-single-cfg-96",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr06f9-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-97",
      slug: "c-h-ch-series-wall-single-cfg-97",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-98",
      slug: "c-h-ch-series-wall-single-cfg-98",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-99",
      slug: "c-h-ch-series-wall-single-cfg-99",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-100",
      slug: "c-h-ch-series-wall-single-cfg-100",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-101",
      slug: "c-h-ch-series-wall-single-cfg-101",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr09-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-102",
      slug: "c-h-ch-series-wall-single-cfg-102",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr12-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-103",
      slug: "c-h-ch-series-wall-single-cfg-103",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr18-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-104",
      slug: "c-h-ch-series-wall-single-cfg-104",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-hpr24-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-105",
      slug: "c-h-ch-series-wall-single-cfg-105",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-es06-115vo",
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
      id: "c-h-ch-series-wall-single-cfg-106",
      slug: "c-h-ch-series-wall-single-cfg-106",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp19m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-107",
      slug: "c-h-ch-series-wall-single-cfg-107",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp19m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-108",
      slug: "c-h-ch-series-wall-single-cfg-108",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp19m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-109",
      slug: "c-h-ch-series-wall-single-cfg-109",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp28m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-110",
      slug: "c-h-ch-series-wall-single-cfg-110",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp28m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-111",
      slug: "c-h-ch-series-wall-single-cfg-111",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp28m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-112",
      slug: "c-h-ch-series-wall-single-cfg-112",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp36m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-113",
      slug: "c-h-ch-series-wall-single-cfg-113",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp36m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-114",
      slug: "c-h-ch-series-wall-single-cfg-114",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp36m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-115",
      slug: "c-h-ch-series-wall-single-cfg-115",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp48m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-116",
      slug: "c-h-ch-series-wall-single-cfg-116",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp48m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-117",
      slug: "c-h-ch-series-wall-single-cfg-117",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp48m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-118",
      slug: "c-h-ch-series-wall-single-cfg-118",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp55m-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 22.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "c-h-ch-series-wall-single-cfg-119",
      slug: "c-h-ch-series-wall-single-cfg-119",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp55m-230vo",
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
      id: "c-h-ch-series-wall-single-cfg-120",
      slug: "c-h-ch-series-wall-single-cfg-120",
      modelId: "c-h-ch-series-wall-single",
      outdoorUnitId: "c-h-ch-rhp55m-230vo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 21.1,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "c-h-standard-wall-single-cfg-1",
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
      configurationId: "c-h-standard-wall-single-cfg-2",
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
      configurationId: "c-h-standard-wall-single-cfg-3",
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
      configurationId: "c-h-standard-wall-single-cfg-4",
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
      configurationId: "c-h-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-8",
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
      configurationId: "c-h-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-13",
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
      configurationId: "c-h-standard-wall-single-cfg-14",
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
      configurationId: "c-h-standard-wall-single-cfg-15",
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
      configurationId: "c-h-standard-wall-single-cfg-16",
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
      configurationId: "c-h-standard-wall-single-cfg-17",
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
      configurationId: "c-h-standard-wall-single-cfg-18",
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
      configurationId: "c-h-standard-wall-single-cfg-19",
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
      configurationId: "c-h-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-21",
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
      configurationId: "c-h-standard-wall-single-cfg-22",
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
      configurationId: "c-h-standard-wall-single-cfg-23",
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
      configurationId: "c-h-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-25",
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
      configurationId: "c-h-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-27",
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
      configurationId: "c-h-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-30",
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
      configurationId: "c-h-standard-wall-single-cfg-31",
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
      configurationId: "c-h-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-33",
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
      configurationId: "c-h-standard-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-35",
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
      configurationId: "c-h-standard-wall-single-cfg-36",
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
      configurationId: "c-h-standard-wall-single-cfg-37",
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
      configurationId: "c-h-standard-wall-single-cfg-38",
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
      configurationId: "c-h-standard-wall-single-cfg-39",
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
      configurationId: "c-h-standard-wall-single-cfg-40",
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
      configurationId: "c-h-standard-wall-single-cfg-41",
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
      configurationId: "c-h-standard-wall-single-cfg-42",
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
      configurationId: "c-h-standard-wall-single-cfg-43",
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
      configurationId: "c-h-standard-wall-single-cfg-44",
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
      configurationId: "c-h-standard-wall-single-cfg-45",
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
      configurationId: "c-h-standard-wall-single-cfg-46",
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
      configurationId: "c-h-standard-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-49",
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
      configurationId: "c-h-standard-wall-single-cfg-50",
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
      configurationId: "c-h-standard-wall-single-cfg-51",
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
      configurationId: "c-h-standard-wall-single-cfg-52",
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
      configurationId: "c-h-standard-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-54",
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
      configurationId: "c-h-standard-wall-single-cfg-55",
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
      configurationId: "c-h-standard-wall-single-cfg-56",
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
      configurationId: "c-h-standard-wall-single-cfg-57",
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
      configurationId: "c-h-standard-wall-single-cfg-58",
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
      configurationId: "c-h-standard-wall-single-cfg-59",
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
      configurationId: "c-h-standard-wall-single-cfg-60",
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
      configurationId: "c-h-standard-wall-single-cfg-61",
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
      configurationId: "c-h-standard-wall-single-cfg-62",
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
      configurationId: "c-h-standard-wall-single-cfg-63",
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
      configurationId: "c-h-standard-wall-single-cfg-64",
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
      configurationId: "c-h-standard-wall-single-cfg-65",
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
      configurationId: "c-h-standard-wall-single-cfg-66",
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
      configurationId: "c-h-standard-wall-single-cfg-67",
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
      configurationId: "c-h-standard-wall-single-cfg-68",
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
      configurationId: "c-h-standard-wall-single-cfg-69",
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
      configurationId: "c-h-standard-wall-single-cfg-70",
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
      configurationId: "c-h-standard-wall-single-cfg-71",
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
      configurationId: "c-h-standard-wall-single-cfg-72",
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
      configurationId: "c-h-standard-wall-single-cfg-73",
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
      configurationId: "c-h-standard-wall-single-cfg-74",
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
      configurationId: "c-h-standard-wall-single-cfg-75",
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
      configurationId: "c-h-standard-wall-single-cfg-76",
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
      configurationId: "c-h-standard-wall-single-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-78",
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
      configurationId: "c-h-standard-wall-single-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-standard-wall-single-cfg-80",
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
      configurationId: "c-h-standard-wall-single-cfg-81",
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
      configurationId: "c-h-standard-wall-single-cfg-82",
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
      configurationId: "c-h-standard-wall-single-cfg-83",
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
      configurationId: "c-h-standard-wall-single-cfg-84",
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
      configurationId: "c-h-standard-wall-single-cfg-85",
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
      configurationId: "c-h-standard-wall-single-cfg-86",
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
      configurationId: "c-h-standard-wall-single-cfg-87",
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
      configurationId: "c-h-standard-wall-single-cfg-88",
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
      configurationId: "c-h-standard-wall-single-cfg-89",
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
      configurationId: "c-h-standard-wall-single-cfg-90",
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
      configurationId: "c-h-standard-wall-single-cfg-91",
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
      configurationId: "c-h-standard-wall-single-cfg-92",
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
      configurationId: "c-h-standard-wall-single-cfg-93",
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
      configurationId: "c-h-standard-wall-single-cfg-94",
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
      configurationId: "c-h-standard-wall-single-cfg-95",
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
      configurationId: "c-h-standard-wall-single-cfg-96",
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
      configurationId: "c-h-standard-wall-single-cfg-97",
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
      configurationId: "c-h-ch-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-cfg-2",
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
      configurationId: "c-h-ch-series-wall-single-cfg-3",
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
      configurationId: "c-h-ch-series-wall-single-cfg-4",
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
      configurationId: "c-h-ch-series-wall-single-cfg-5",
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
      configurationId: "c-h-ch-series-wall-single-cfg-6",
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
      configurationId: "c-h-ch-series-wall-single-cfg-7",
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
      configurationId: "c-h-ch-series-wall-single-cfg-8",
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
      configurationId: "c-h-ch-series-wall-single-cfg-9",
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
      configurationId: "c-h-ch-series-wall-single-cfg-10",
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
      configurationId: "c-h-ch-series-wall-single-cfg-11",
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
      configurationId: "c-h-ch-series-wall-single-cfg-12",
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
      configurationId: "c-h-ch-series-wall-single-cfg-13",
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
      configurationId: "c-h-ch-series-wall-single-cfg-14",
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
      configurationId: "c-h-ch-series-wall-single-cfg-15",
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
      configurationId: "c-h-ch-series-wall-single-cfg-16",
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
      configurationId: "c-h-ch-series-wall-single-cfg-17",
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
      configurationId: "c-h-ch-series-wall-single-cfg-18",
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
      configurationId: "c-h-ch-series-wall-single-cfg-19",
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
      configurationId: "c-h-ch-series-wall-single-cfg-20",
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
      configurationId: "c-h-ch-series-wall-single-cfg-21",
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
      configurationId: "c-h-ch-series-wall-single-cfg-22",
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
      configurationId: "c-h-ch-series-wall-single-cfg-23",
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
      configurationId: "c-h-ch-series-wall-single-cfg-24",
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
      configurationId: "c-h-ch-series-wall-single-cfg-25",
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
      configurationId: "c-h-ch-series-wall-single-cfg-26",
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
      configurationId: "c-h-ch-series-wall-single-cfg-27",
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
      configurationId: "c-h-ch-series-wall-single-cfg-28",
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
      configurationId: "c-h-ch-series-wall-single-cfg-29",
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
      configurationId: "c-h-ch-series-wall-single-cfg-30",
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
      configurationId: "c-h-ch-series-wall-single-cfg-31",
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
      configurationId: "c-h-ch-series-wall-single-cfg-32",
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
      configurationId: "c-h-ch-series-wall-single-cfg-33",
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
      configurationId: "c-h-ch-series-wall-single-cfg-34",
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
      configurationId: "c-h-ch-series-wall-single-cfg-35",
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
      configurationId: "c-h-ch-series-wall-single-cfg-36",
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
      configurationId: "c-h-ch-series-wall-single-cfg-37",
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
      configurationId: "c-h-ch-series-wall-single-cfg-38",
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
      configurationId: "c-h-ch-series-wall-single-cfg-39",
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
      configurationId: "c-h-ch-series-wall-single-cfg-40",
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
      configurationId: "c-h-ch-series-wall-single-cfg-41",
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
      configurationId: "c-h-ch-series-wall-single-cfg-42",
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
      configurationId: "c-h-ch-series-wall-single-cfg-43",
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
      configurationId: "c-h-ch-series-wall-single-cfg-44",
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
      configurationId: "c-h-ch-series-wall-single-cfg-45",
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
      configurationId: "c-h-ch-series-wall-single-cfg-46",
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
      configurationId: "c-h-ch-series-wall-single-cfg-47",
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
      configurationId: "c-h-ch-series-wall-single-cfg-48",
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
      configurationId: "c-h-ch-series-wall-single-cfg-49",
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
      configurationId: "c-h-ch-series-wall-single-cfg-50",
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
      configurationId: "c-h-ch-series-wall-single-cfg-51",
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
      configurationId: "c-h-ch-series-wall-single-cfg-52",
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
      configurationId: "c-h-ch-series-wall-single-cfg-53",
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
      configurationId: "c-h-ch-series-wall-single-cfg-54",
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
      configurationId: "c-h-ch-series-wall-single-cfg-55",
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
      configurationId: "c-h-ch-series-wall-single-cfg-56",
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
      configurationId: "c-h-ch-series-wall-single-cfg-57",
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
      configurationId: "c-h-ch-series-wall-single-cfg-58",
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
      configurationId: "c-h-ch-series-wall-single-cfg-59",
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
      configurationId: "c-h-ch-series-wall-single-cfg-60",
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
      configurationId: "c-h-ch-series-wall-single-cfg-61",
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
      configurationId: "c-h-ch-series-wall-single-cfg-62",
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
      configurationId: "c-h-ch-series-wall-single-cfg-63",
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
      configurationId: "c-h-ch-series-wall-single-cfg-64",
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
      configurationId: "c-h-ch-series-wall-single-cfg-65",
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
      configurationId: "c-h-ch-series-wall-single-cfg-66",
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
      configurationId: "c-h-ch-series-wall-single-cfg-67",
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
      configurationId: "c-h-ch-series-wall-single-cfg-68",
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
      configurationId: "c-h-ch-series-wall-single-cfg-69",
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
      configurationId: "c-h-ch-series-wall-single-cfg-70",
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
      configurationId: "c-h-ch-series-wall-single-cfg-71",
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
      configurationId: "c-h-ch-series-wall-single-cfg-72",
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
      configurationId: "c-h-ch-series-wall-single-cfg-73",
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
      configurationId: "c-h-ch-series-wall-single-cfg-74",
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
      configurationId: "c-h-ch-series-wall-single-cfg-75",
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
      configurationId: "c-h-ch-series-wall-single-cfg-76",
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
      configurationId: "c-h-ch-series-wall-single-cfg-77",
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
      configurationId: "c-h-ch-series-wall-single-cfg-78",
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
      configurationId: "c-h-ch-series-wall-single-cfg-79",
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
      configurationId: "c-h-ch-series-wall-single-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: 1.59,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "c-h-ch-series-wall-single-cfg-81",
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
      configurationId: "c-h-ch-series-wall-single-cfg-82",
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
      configurationId: "c-h-ch-series-wall-single-cfg-83",
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
      configurationId: "c-h-ch-series-wall-single-cfg-84",
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
      configurationId: "c-h-ch-series-wall-single-cfg-85",
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
      configurationId: "c-h-ch-series-wall-single-cfg-86",
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
      configurationId: "c-h-ch-series-wall-single-cfg-87",
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
      configurationId: "c-h-ch-series-wall-single-cfg-88",
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
      configurationId: "c-h-ch-series-wall-single-cfg-89",
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
      configurationId: "c-h-ch-series-wall-single-cfg-90",
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
      configurationId: "c-h-ch-series-wall-single-cfg-91",
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
      configurationId: "c-h-ch-series-wall-single-cfg-92",
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
      configurationId: "c-h-ch-series-wall-single-cfg-93",
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
      configurationId: "c-h-ch-series-wall-single-cfg-94",
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
      configurationId: "c-h-ch-series-wall-single-cfg-95",
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
      configurationId: "c-h-ch-series-wall-single-cfg-96",
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
      configurationId: "c-h-ch-series-wall-single-cfg-97",
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
      configurationId: "c-h-ch-series-wall-single-cfg-98",
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
      configurationId: "c-h-ch-series-wall-single-cfg-99",
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
      configurationId: "c-h-ch-series-wall-single-cfg-100",
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
      configurationId: "c-h-ch-series-wall-single-cfg-101",
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
      configurationId: "c-h-ch-series-wall-single-cfg-102",
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
      configurationId: "c-h-ch-series-wall-single-cfg-103",
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
      configurationId: "c-h-ch-series-wall-single-cfg-104",
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
      configurationId: "c-h-ch-series-wall-single-cfg-105",
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
      configurationId: "c-h-ch-series-wall-single-cfg-106",
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
      configurationId: "c-h-ch-series-wall-single-cfg-107",
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
      configurationId: "c-h-ch-series-wall-single-cfg-108",
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
      configurationId: "c-h-ch-series-wall-single-cfg-109",
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
      configurationId: "c-h-ch-series-wall-single-cfg-110",
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
      configurationId: "c-h-ch-series-wall-single-cfg-111",
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
      configurationId: "c-h-ch-series-wall-single-cfg-112",
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
      configurationId: "c-h-ch-series-wall-single-cfg-113",
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
      configurationId: "c-h-ch-series-wall-single-cfg-114",
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
      configurationId: "c-h-ch-series-wall-single-cfg-115",
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
      configurationId: "c-h-ch-series-wall-single-cfg-116",
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
      configurationId: "c-h-ch-series-wall-single-cfg-117",
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
      configurationId: "c-h-ch-series-wall-single-cfg-118",
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
      configurationId: "c-h-ch-series-wall-single-cfg-119",
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
      configurationId: "c-h-ch-series-wall-single-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2.05,
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
