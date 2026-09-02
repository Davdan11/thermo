import type { BrandDataset } from "../../types";

export const comfortaireDataset: BrandDataset = {
  brand: {
    id: "comfort-aire",
    slug: "comfort-aire",
    name: "COMFORT AIRE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "comfort-aire-a-series",
      slug: "comfort-aire-a-series",
      name: "A-series",
      brandId: "comfort-aire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-standard",
      slug: "comfort-aire-standard",
      name: "Standard",
      brandId: "comfort-aire",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-ssp-series",
      slug: "comfort-aire-a-ssp-series",
      name: "A-SSP Series",
      brandId: "comfort-aire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-vhp-series",
      slug: "comfort-aire-a-vhp-series",
      name: "A-VHP Series",
      brandId: "comfort-aire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-zhp-series",
      slug: "comfort-aire-a-zhp-series",
      name: "A-ZHP Series",
      brandId: "comfort-aire",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-vcd-series",
      slug: "comfort-aire-a-vcd-series",
      name: "A-VCD series",
      brandId: "comfort-aire",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-mcd-series",
      slug: "comfort-aire-mcd-series",
      name: "MCD series",
      brandId: "comfort-aire",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-vhp",
      slug: "comfort-aire-a-vhp",
      name: "A-VHP",
      brandId: "comfort-aire",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "comfort-aire-a-series-wall-single",
      slug: "comfort-aire-a-series-wall-single",
      name: "A-series",
      seriesId: "comfort-aire-a-series",
      brandId: "comfort-aire",
      modelNumber: "A-series",
      normalizedModelNumber: "a-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 18,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 13.8,
      cop5FMin: 1.75,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-standard-wall-single",
      slug: "comfort-aire-standard-wall-single",
      name: "Standard",
      seriesId: "comfort-aire-standard",
      brandId: "comfort-aire",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 11500,
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
      id: "comfort-aire-a-ssp-series-wall-single",
      slug: "comfort-aire-a-ssp-series-wall-single",
      name: "A-SSP Series",
      seriesId: "comfort-aire-a-ssp-series",
      brandId: "comfort-aire",
      modelNumber: "A-SSP Series",
      normalizedModelNumber: "a-ssp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 17100,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 9.7,
      cop5FMin: 2.01,
      cop5FMax: 2.15,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-vhp-series-wall-single",
      slug: "comfort-aire-a-vhp-series-wall-single",
      name: "A-VHP Series",
      seriesId: "comfort-aire-a-vhp-series",
      brandId: "comfort-aire",
      modelNumber: "A-VHP Series",
      normalizedModelNumber: "a-vhp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 45000,
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
      id: "comfort-aire-a-zhp-series-wall-single",
      slug: "comfort-aire-a-zhp-series-wall-single",
      name: "A-ZHP Series",
      seriesId: "comfort-aire-a-zhp-series",
      brandId: "comfort-aire",
      modelNumber: "A-ZHP Series",
      normalizedModelNumber: "a-zhp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11000,
      heatingCapacity5FMaxBtu: 19300,
      seer2Min: 25.6,
      seer2Max: 35,
      hspf2Min: 12.7,
      hspf2Max: 16.2,
      cop5FMin: 2,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted",
      slug: "comfort-aire-a-series-central-ducted",
      name: "A series",
      seriesId: "comfort-aire-a-series",
      brandId: "comfort-aire",
      modelNumber: "A series",
      normalizedModelNumber: "a-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19.3,
      hspf2Min: 8.1,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-vcd-series-central-ducted",
      slug: "comfort-aire-a-vcd-series-central-ducted",
      name: "A-VCD series",
      seriesId: "comfort-aire-a-vcd-series",
      brandId: "comfort-aire",
      modelNumber: "A-VCD series",
      normalizedModelNumber: "a-vcd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      heatingCapacity5FMinBtu: 19600,
      heatingCapacity5FMaxBtu: 19600,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-mcd-series-central-ducted",
      slug: "comfort-aire-mcd-series-central-ducted",
      name: "MCD series",
      seriesId: "comfort-aire-mcd-series",
      brandId: "comfort-aire",
      modelNumber: "MCD series",
      normalizedModelNumber: "mcd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 27400,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 15.5,
      seer2Max: 15.5,
      hspf2Min: 8.6,
      hspf2Max: 8.6,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-vhp-central-ducted",
      slug: "comfort-aire-a-vhp-central-ducted",
      name: "A-VHP",
      seriesId: "comfort-aire-a-vhp",
      brandId: "comfort-aire",
      modelNumber: "A-VHP",
      normalizedModelNumber: "a-vhp",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 16.5,
      seer2Max: 18.7,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "comfort-aire-a-vmh06sv-1",
      modelNumber: "A-VMH06SV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh09sv-1",
      modelNumber: "A-VMH09SV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh12sv-1",
      modelNumber: "A-VMH12SV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh18sv-1",
      modelNumber: "A-VMH18SV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh24sv-1",
      modelNumber: "A-VMH24SV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh18dv-1",
      modelNumber: "A-VMH18DV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh28tv-1",
      modelNumber: "A-VMH28TV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh36qv-1",
      modelNumber: "A-VMH36QV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh48pv-1",
      modelNumber: "A-VMH48PV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-dvh09sh-0",
      modelNumber: "A-DVH09SH-0",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-dvh09sh-1",
      modelNumber: "A-DVH09SH-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh18su-1a",
      modelNumber: "A-VMH18SU-1A",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh24su-1",
      modelNumber: "A-VMH24SU-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-kmh18su-1",
      modelNumber: "A-KMH18SU-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-kmh24su-1",
      modelNumber: "A-KMH24SU-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh55pv-1",
      modelNumber: "A-VMH55PV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh33sv-1",
      modelNumber: "A-VMH33SV-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vmh36qv-1a",
      modelNumber: "A-VMH36QV-1A",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp06sa-1",
      modelNumber: "A-VHP06SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp09sa-1",
      modelNumber: "A-VHP09SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp12sa-1",
      modelNumber: "A-VHP12SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp18sa-1",
      modelNumber: "A-VHP18SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp24sa-1",
      modelNumber: "A-VHP24SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-dvh18sh-1",
      modelNumber: "A-DVH18SH-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-ssp09sa-0",
      modelNumber: "A-SSP09SA-0",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-ssp12sa-0",
      modelNumber: "A-SSP12SA-0",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-ssp12sa-1",
      modelNumber: "A-SSP12SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-ssp18sa-1",
      modelNumber: "A-SSP18SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-ssp09sa-1",
      modelNumber: "A-SSP09SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-ssp24sa-1",
      modelNumber: "A-SSP24SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp33sa-1",
      modelNumber: "A-VHP33SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp183a-1",
      modelNumber: "A-VHP183A-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp284a-1",
      modelNumber: "A-VHP284A-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp365a-1",
      modelNumber: "A-VHP365A-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp486a-1",
      modelNumber: "A-VHP486A-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vhp556a-1",
      modelNumber: "A-VHP556A-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-zhp06sa-1",
      modelNumber: "A-ZHP06SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-zhpo9sa-1",
      modelNumber: "A-ZHPO9SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-zhp12sa-1",
      modelNumber: "A-ZHP12SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-zhp18sa-1",
      modelNumber: "A-ZHP18SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vcd30sa-1",
      modelNumber: "A-VCD30SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vcd36sa-1",
      modelNumber: "A-VCD36SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vcd60sa-1",
      modelNumber: "A-VCD60SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vcd24sa-1",
      modelNumber: "A-VCD24SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vcd18sa-1",
      modelNumber: "A-VCD18SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vcd48sa-1",
      modelNumber: "A-VCD48SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vxp18sa-1",
      modelNumber: "A-VXP18SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vxp24sa-1",
      modelNumber: "A-VXP24SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vxp30sa-1",
      modelNumber: "A-VXP30SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vxp36sa-1",
      modelNumber: "A-VXP36SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vxp48sa-1",
      modelNumber: "A-VXP48SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    },
    {
      id: "comfort-aire-a-vxp60sa-1",
      modelNumber: "A-VXP60SA-1",
      brandId: "comfort-aire",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "comfort-aire-a-series-wall-single-cfg-1",
      slug: "comfort-aire-a-series-wall-single-cfg-1",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh06sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-2",
      slug: "comfort-aire-a-series-wall-single-cfg-2",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh09sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-3",
      slug: "comfort-aire-a-series-wall-single-cfg-3",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh12sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-4",
      slug: "comfort-aire-a-series-wall-single-cfg-4",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh18sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-5",
      slug: "comfort-aire-a-series-wall-single-cfg-5",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh24sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-6",
      slug: "comfort-aire-a-series-wall-single-cfg-6",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh24sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-7",
      slug: "comfort-aire-a-series-wall-single-cfg-7",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh18dv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-8",
      slug: "comfort-aire-a-series-wall-single-cfg-8",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh18dv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-9",
      slug: "comfort-aire-a-series-wall-single-cfg-9",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh18dv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-10",
      slug: "comfort-aire-a-series-wall-single-cfg-10",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh28tv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-11",
      slug: "comfort-aire-a-series-wall-single-cfg-11",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh28tv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-12",
      slug: "comfort-aire-a-series-wall-single-cfg-12",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh36qv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-13",
      slug: "comfort-aire-a-series-wall-single-cfg-13",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh48pv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-14",
      slug: "comfort-aire-a-series-wall-single-cfg-14",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh48pv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-15",
      slug: "comfort-aire-a-series-wall-single-cfg-15",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-dvh09sh-0",
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
      id: "comfort-aire-a-series-wall-single-cfg-16",
      slug: "comfort-aire-a-series-wall-single-cfg-16",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-dvh09sh-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-17",
      slug: "comfort-aire-a-series-wall-single-cfg-17",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh18su-1a",
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
      id: "comfort-aire-a-series-wall-single-cfg-18",
      slug: "comfort-aire-a-series-wall-single-cfg-18",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh24su-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-19",
      slug: "comfort-aire-a-series-wall-single-cfg-19",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-kmh18su-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-20",
      slug: "comfort-aire-a-series-wall-single-cfg-20",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-kmh24su-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-21",
      slug: "comfort-aire-a-series-wall-single-cfg-21",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh18sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-22",
      slug: "comfort-aire-a-series-wall-single-cfg-22",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh18sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-23",
      slug: "comfort-aire-a-series-wall-single-cfg-23",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh18sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-24",
      slug: "comfort-aire-a-series-wall-single-cfg-24",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh12sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-25",
      slug: "comfort-aire-a-series-wall-single-cfg-25",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh09sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-26",
      slug: "comfort-aire-a-series-wall-single-cfg-26",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh12sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-27",
      slug: "comfort-aire-a-series-wall-single-cfg-27",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh24sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-28",
      slug: "comfort-aire-a-series-wall-single-cfg-28",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh24sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-29",
      slug: "comfort-aire-a-series-wall-single-cfg-29",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh09sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-30",
      slug: "comfort-aire-a-series-wall-single-cfg-30",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh12sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-31",
      slug: "comfort-aire-a-series-wall-single-cfg-31",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh12sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-32",
      slug: "comfort-aire-a-series-wall-single-cfg-32",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh55pv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-33",
      slug: "comfort-aire-a-series-wall-single-cfg-33",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh55pv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-34",
      slug: "comfort-aire-a-series-wall-single-cfg-34",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh55pv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-35",
      slug: "comfort-aire-a-series-wall-single-cfg-35",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh33sv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-36",
      slug: "comfort-aire-a-series-wall-single-cfg-36",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh36qv-1a",
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
      id: "comfort-aire-a-series-wall-single-cfg-37",
      slug: "comfort-aire-a-series-wall-single-cfg-37",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh36qv-1a",
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
      id: "comfort-aire-a-series-wall-single-cfg-38",
      slug: "comfort-aire-a-series-wall-single-cfg-38",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh36qv-1a",
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
      id: "comfort-aire-a-series-wall-single-cfg-39",
      slug: "comfort-aire-a-series-wall-single-cfg-39",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh28tv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-40",
      slug: "comfort-aire-a-series-wall-single-cfg-40",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh48pv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-41",
      slug: "comfort-aire-a-series-wall-single-cfg-41",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vmh36qv-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-42",
      slug: "comfort-aire-a-series-wall-single-cfg-42",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp06sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-wall-single-cfg-43",
      slug: "comfort-aire-a-series-wall-single-cfg-43",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-wall-single-cfg-44",
      slug: "comfort-aire-a-series-wall-single-cfg-44",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-wall-single-cfg-45",
      slug: "comfort-aire-a-series-wall-single-cfg-45",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp09sa-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-46",
      slug: "comfort-aire-a-series-wall-single-cfg-46",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp09sa-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-47",
      slug: "comfort-aire-a-series-wall-single-cfg-47",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp12sa-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-48",
      slug: "comfort-aire-a-series-wall-single-cfg-48",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp12sa-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-49",
      slug: "comfort-aire-a-series-wall-single-cfg-49",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp12sa-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-50",
      slug: "comfort-aire-a-series-wall-single-cfg-50",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp12sa-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-51",
      slug: "comfort-aire-a-series-wall-single-cfg-51",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.6,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-wall-single-cfg-52",
      slug: "comfort-aire-a-series-wall-single-cfg-52",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp18sa-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-53",
      slug: "comfort-aire-a-series-wall-single-cfg-53",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp18sa-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-54",
      slug: "comfort-aire-a-series-wall-single-cfg-54",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-wall-single-cfg-55",
      slug: "comfort-aire-a-series-wall-single-cfg-55",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp18sa-1",
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
      id: "comfort-aire-a-series-wall-single-cfg-56",
      slug: "comfort-aire-a-series-wall-single-cfg-56",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-wall-single-cfg-57",
      slug: "comfort-aire-a-series-wall-single-cfg-57",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.4,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-wall-single-cfg-58",
      slug: "comfort-aire-a-series-wall-single-cfg-58",
      modelId: "comfort-aire-a-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp24sa-1",
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
      id: "comfort-aire-standard-wall-single-cfg-1",
      slug: "comfort-aire-standard-wall-single-cfg-1",
      modelId: "comfort-aire-standard-wall-single",
      outdoorUnitId: "comfort-aire-a-dvh18sh-1",
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
      id: "comfort-aire-standard-wall-single-cfg-2",
      slug: "comfort-aire-standard-wall-single-cfg-2",
      modelId: "comfort-aire-standard-wall-single",
      outdoorUnitId: "comfort-aire-a-ssp09sa-0",
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
      id: "comfort-aire-standard-wall-single-cfg-3",
      slug: "comfort-aire-standard-wall-single-cfg-3",
      modelId: "comfort-aire-standard-wall-single",
      outdoorUnitId: "comfort-aire-a-ssp12sa-0",
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
      id: "comfort-aire-standard-wall-single-cfg-4",
      slug: "comfort-aire-standard-wall-single-cfg-4",
      modelId: "comfort-aire-standard-wall-single",
      outdoorUnitId: "comfort-aire-a-ssp12sa-1",
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
      id: "comfort-aire-standard-wall-single-cfg-5",
      slug: "comfort-aire-standard-wall-single-cfg-5",
      modelId: "comfort-aire-standard-wall-single",
      outdoorUnitId: "comfort-aire-a-ssp18sa-1",
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
      id: "comfort-aire-a-ssp-series-wall-single-cfg-1",
      slug: "comfort-aire-a-ssp-series-wall-single-cfg-1",
      modelId: "comfort-aire-a-ssp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-ssp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-ssp-series-wall-single-cfg-2",
      slug: "comfort-aire-a-ssp-series-wall-single-cfg-2",
      modelId: "comfort-aire-a-ssp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-ssp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-vhp-series-wall-single-cfg-1",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-1",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp06sa-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-2",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-2",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp09sa-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-3",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-3",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp12sa-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-4",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-4",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp18sa-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-5",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-5",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp24sa-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-6",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-6",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp33sa-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-7",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-7",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp183a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-8",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-8",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp183a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-9",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-9",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp183a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-10",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-10",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp284a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-11",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-11",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp284a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-12",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-12",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp284a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-13",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-13",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp365a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-14",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-14",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp365a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-15",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-15",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp365a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-16",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-16",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp486a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-17",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-17",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp486a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-18",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-18",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp486a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-19",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-19",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp556a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-20",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-20",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp556a-1",
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
      id: "comfort-aire-a-vhp-series-wall-single-cfg-21",
      slug: "comfort-aire-a-vhp-series-wall-single-cfg-21",
      modelId: "comfort-aire-a-vhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-vhp556a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 21.1,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-zhp-series-wall-single-cfg-1",
      slug: "comfort-aire-a-zhp-series-wall-single-cfg-1",
      modelId: "comfort-aire-a-zhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-zhp06sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 35,
      hspf2: 15.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-zhp-series-wall-single-cfg-2",
      slug: "comfort-aire-a-zhp-series-wall-single-cfg-2",
      modelId: "comfort-aire-a-zhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-zhpo9sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-zhp-series-wall-single-cfg-3",
      slug: "comfort-aire-a-zhp-series-wall-single-cfg-3",
      modelId: "comfort-aire-a-zhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-zhp12sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.4,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-zhp-series-wall-single-cfg-4",
      slug: "comfort-aire-a-zhp-series-wall-single-cfg-4",
      modelId: "comfort-aire-a-zhp-series-wall-single",
      outdoorUnitId: "comfort-aire-a-zhp18sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-1",
      slug: "comfort-aire-a-series-central-ducted-cfg-1",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vmh18sv-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-2",
      slug: "comfort-aire-a-series-central-ducted-cfg-2",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vmh24sv-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-3",
      slug: "comfort-aire-a-series-central-ducted-cfg-3",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd30sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-4",
      slug: "comfort-aire-a-series-central-ducted-cfg-4",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd36sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-5",
      slug: "comfort-aire-a-series-central-ducted-cfg-5",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd60sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-6",
      slug: "comfort-aire-a-series-central-ducted-cfg-6",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd24sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-7",
      slug: "comfort-aire-a-series-central-ducted-cfg-7",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd18sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-8",
      slug: "comfort-aire-a-series-central-ducted-cfg-8",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd18sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-9",
      slug: "comfort-aire-a-series-central-ducted-cfg-9",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd48sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-10",
      slug: "comfort-aire-a-series-central-ducted-cfg-10",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd24sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-11",
      slug: "comfort-aire-a-series-central-ducted-cfg-11",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd30sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-12",
      slug: "comfort-aire-a-series-central-ducted-cfg-12",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd48sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-13",
      slug: "comfort-aire-a-series-central-ducted-cfg-13",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd36sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-14",
      slug: "comfort-aire-a-series-central-ducted-cfg-14",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd60sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-15",
      slug: "comfort-aire-a-series-central-ducted-cfg-15",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd18sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-16",
      slug: "comfort-aire-a-series-central-ducted-cfg-16",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd24sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-17",
      slug: "comfort-aire-a-series-central-ducted-cfg-17",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd30sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-18",
      slug: "comfort-aire-a-series-central-ducted-cfg-18",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd36sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-19",
      slug: "comfort-aire-a-series-central-ducted-cfg-19",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd48sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-20",
      slug: "comfort-aire-a-series-central-ducted-cfg-20",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd60sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-21",
      slug: "comfort-aire-a-series-central-ducted-cfg-21",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-22",
      slug: "comfort-aire-a-series-central-ducted-cfg-22",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-23",
      slug: "comfort-aire-a-series-central-ducted-cfg-23",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-24",
      slug: "comfort-aire-a-series-central-ducted-cfg-24",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-25",
      slug: "comfort-aire-a-series-central-ducted-cfg-25",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-26",
      slug: "comfort-aire-a-series-central-ducted-cfg-26",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp60sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-27",
      slug: "comfort-aire-a-series-central-ducted-cfg-27",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp18sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-28",
      slug: "comfort-aire-a-series-central-ducted-cfg-28",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-29",
      slug: "comfort-aire-a-series-central-ducted-cfg-29",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp18sa-1",
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
      id: "comfort-aire-a-series-central-ducted-cfg-30",
      slug: "comfort-aire-a-series-central-ducted-cfg-30",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-31",
      slug: "comfort-aire-a-series-central-ducted-cfg-31",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.3,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-32",
      slug: "comfort-aire-a-series-central-ducted-cfg-32",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-33",
      slug: "comfort-aire-a-series-central-ducted-cfg-33",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-34",
      slug: "comfort-aire-a-series-central-ducted-cfg-34",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-35",
      slug: "comfort-aire-a-series-central-ducted-cfg-35",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-36",
      slug: "comfort-aire-a-series-central-ducted-cfg-36",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-37",
      slug: "comfort-aire-a-series-central-ducted-cfg-37",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp60sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-38",
      slug: "comfort-aire-a-series-central-ducted-cfg-38",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp60sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-39",
      slug: "comfort-aire-a-series-central-ducted-cfg-39",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-40",
      slug: "comfort-aire-a-series-central-ducted-cfg-40",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.3,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-41",
      slug: "comfort-aire-a-series-central-ducted-cfg-41",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-42",
      slug: "comfort-aire-a-series-central-ducted-cfg-42",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-series-central-ducted-cfg-43",
      slug: "comfort-aire-a-series-central-ducted-cfg-43",
      modelId: "comfort-aire-a-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vxp36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.8,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "comfort-aire-a-vcd-series-central-ducted-cfg-1",
      slug: "comfort-aire-a-vcd-series-central-ducted-cfg-1",
      modelId: "comfort-aire-a-vcd-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd30sa-1",
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
      id: "comfort-aire-mcd-series-central-ducted-cfg-1",
      slug: "comfort-aire-mcd-series-central-ducted-cfg-1",
      modelId: "comfort-aire-mcd-series-central-ducted",
      outdoorUnitId: "comfort-aire-a-vcd36sa-1",
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
      id: "comfort-aire-a-vhp-central-ducted-cfg-1",
      slug: "comfort-aire-a-vhp-central-ducted-cfg-1",
      modelId: "comfort-aire-a-vhp-central-ducted",
      outdoorUnitId: "comfort-aire-a-vhp18sa-1",
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
      id: "comfort-aire-a-vhp-central-ducted-cfg-2",
      slug: "comfort-aire-a-vhp-central-ducted-cfg-2",
      modelId: "comfort-aire-a-vhp-central-ducted",
      outdoorUnitId: "comfort-aire-a-vhp24sa-1",
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
      id: "comfort-aire-a-vhp-central-ducted-cfg-3",
      slug: "comfort-aire-a-vhp-central-ducted-cfg-3",
      modelId: "comfort-aire-a-vhp-central-ducted",
      outdoorUnitId: "comfort-aire-a-vhp33sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "comfort-aire-a-series-wall-single-cfg-1",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-2",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-3",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-4",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-5",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-6",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-7",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-8",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-9",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-10",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-11",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-12",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-13",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-14",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-15",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-16",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-17",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-18",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-19",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-20",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-21",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-22",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-23",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-24",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-25",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-26",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-27",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-28",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-29",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-30",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-31",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-32",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-33",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-34",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-35",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-36",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-37",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-38",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-39",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-40",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-41",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-wall-single-cfg-45",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-46",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-wall-single-cfg-48",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-49",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-50",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-wall-single-cfg-52",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-53",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-wall-single-cfg-55",
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
      configurationId: "comfort-aire-a-series-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-wall-single-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-wall-single-cfg-58",
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
      configurationId: "comfort-aire-standard-wall-single-cfg-1",
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
      configurationId: "comfort-aire-standard-wall-single-cfg-2",
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
      configurationId: "comfort-aire-standard-wall-single-cfg-3",
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
      configurationId: "comfort-aire-standard-wall-single-cfg-4",
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
      configurationId: "comfort-aire-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-ssp-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-ssp-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.01,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-1",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-2",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-3",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-4",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-5",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-6",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-7",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-8",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-9",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-10",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-11",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-12",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-13",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-14",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-15",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-16",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-17",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-18",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-19",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-20",
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
      configurationId: "comfort-aire-a-vhp-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-zhp-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-zhp-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-zhp-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-zhp-series-wall-single-cfg-4",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-1",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-2",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-3",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-4",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-5",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-6",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-7",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-8",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-9",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-10",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-11",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-12",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-13",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-14",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-15",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-16",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-17",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-18",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-19",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-20",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-31",
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
      configurationId: "comfort-aire-a-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-series-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "comfort-aire-a-vcd-series-central-ducted-cfg-1",
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
      configurationId: "comfort-aire-mcd-series-central-ducted-cfg-1",
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
      configurationId: "comfort-aire-a-vhp-central-ducted-cfg-1",
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
      configurationId: "comfort-aire-a-vhp-central-ducted-cfg-2",
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
      configurationId: "comfort-aire-a-vhp-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
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
