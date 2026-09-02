import type { BrandDataset } from "../../types";

export const centuryDataset: BrandDataset = {
  brand: {
    id: "century",
    slug: "century",
    name: "CENTURY",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "century-a-series",
      slug: "century-a-series",
      name: "A-series",
      brandId: "century",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard",
      slug: "century-standard",
      name: "Standard",
      brandId: "century",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series",
      slug: "century-hrg18-series",
      name: "HRG18 SERIES",
      brandId: "century",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-a-vmh-series",
      slug: "century-a-vmh-series",
      name: "A-VMH Series",
      brandId: "century",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-mcd-series",
      slug: "century-mcd-series",
      name: "MCD series",
      brandId: "century",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "century-a-series-wall-single",
      slug: "century-a-series-wall-single",
      name: "A-series",
      seriesId: "century-a-series",
      brandId: "century",
      modelNumber: "A-series",
      normalizedModelNumber: "a-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 18.4,
      seer2Max: 28.1,
      hspf2Min: 9.3,
      hspf2Max: 13.8,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-wall-single",
      slug: "century-standard-wall-single",
      name: "Standard",
      seriesId: "century-standard",
      brandId: "century",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 37800,
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
      id: "century-hrg18-series-central-ducted",
      slug: "century-hrg18-series-central-ducted",
      name: "HRG18 SERIES",
      seriesId: "century-hrg18-series",
      brandId: "century",
      modelNumber: "HRG18 SERIES",
      normalizedModelNumber: "hrg18-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 34600,
      heatingCapacity5FMinBtu: 14800,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 17.1,
      seer2Max: 19,
      hspf2Min: 7.8,
      hspf2Max: 8.5,
      cop5FMin: 1.85,
      cop5FMax: 2.18,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted",
      slug: "century-standard-central-ducted",
      name: "Standard",
      seriesId: "century-standard",
      brandId: "century",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 30400,
      heatingCapacity5FMaxBtu: 40500,
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
      id: "century-a-series-central-ducted",
      slug: "century-a-series-central-ducted",
      name: "A series",
      seriesId: "century-a-series",
      brandId: "century",
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
      id: "century-a-vmh-series-wall-single",
      slug: "century-a-vmh-series-wall-single",
      name: "A-VMH Series",
      seriesId: "century-a-vmh-series",
      brandId: "century",
      modelNumber: "A-VMH Series",
      normalizedModelNumber: "a-vmh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 27400,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 18.8,
      seer2Max: 22.4,
      hspf2Min: 9,
      hspf2Max: 10.9,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-mcd-series-central-ducted",
      slug: "century-mcd-series-central-ducted",
      name: "MCD series",
      seriesId: "century-mcd-series",
      brandId: "century",
      modelNumber: "MCD series",
      normalizedModelNumber: "mcd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 19600,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 15.2,
      seer2Max: 15.5,
      hspf2Min: 8.5,
      hspf2Max: 8.6,
      cop5FMin: 1.8,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "century-a-vmh24su-1",
      modelNumber: "A-VMH24SU-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh06sv-1",
      modelNumber: "A-VMH06SV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh09sv-1",
      modelNumber: "A-VMH09SV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh12sv-1",
      modelNumber: "A-VMH12SV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh18sv-1",
      modelNumber: "A-VMH18SV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh24sv-1",
      modelNumber: "A-VMH24SV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh18dv-1",
      modelNumber: "A-VMH18DV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh28tv-1",
      modelNumber: "A-VMH28TV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh36qv-1",
      modelNumber: "A-VMH36QV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vhp06sa-1",
      modelNumber: "A-VHP06SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vhp09sa-1",
      modelNumber: "A-VHP09SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vhp12sa-1",
      modelNumber: "A-VHP12SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vhp18sa-1",
      modelNumber: "A-VHP18SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vhp24sa-1",
      modelNumber: "A-VHP24SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-b-vmh12su-1",
      modelNumber: "B-VMH12SU-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh09su-1",
      modelNumber: "A-VMH09SU-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vfh18db-1",
      modelNumber: "A-VFH18DB-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vfh24tb-1",
      modelNumber: "A-VFH24TB-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vfh30qb-1",
      modelNumber: "A-VFH30QB-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vfh36qb-1",
      modelNumber: "A-VFH36QB-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vfh42pb-1",
      modelNumber: "A-VFH42PB-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh28tu-1",
      modelNumber: "A-VMH28TU-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh36qu-1",
      modelNumber: "A-VMH36QU-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh48pu-1",
      modelNumber: "A-VMH48PU-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-hrg1860s1p",
      modelNumber: "HRG1860S1P",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-hrg1836s1p",
      modelNumber: "HRG1836S1P",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vcd30sa-1",
      modelNumber: "A-VCD30SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vcd36sa-1",
      modelNumber: "A-VCD36SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vcd60sa-1",
      modelNumber: "A-VCD60SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vcd24sa-1",
      modelNumber: "A-VCD24SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vcd18sa-1",
      modelNumber: "A-VCD18SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vcd48sa-1",
      modelNumber: "A-VCD48SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vxp18sa-1",
      modelNumber: "A-VXP18SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vxp24sa-1",
      modelNumber: "A-VXP24SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vxp30sa-1",
      modelNumber: "A-VXP30SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vxp36sa-1",
      modelNumber: "A-VXP36SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vxp48sa-1",
      modelNumber: "A-VXP48SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vxp60sa-1",
      modelNumber: "A-VXP60SA-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh33sv-1",
      modelNumber: "A-VMH33SV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh36qv-1a",
      modelNumber: "A-VMH36QV-1A",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh55pv-1",
      modelNumber: "A-VMH55PV-1",
      brandId: "century",
      refrigerant: null as any,
    },
    {
      id: "century-a-vmh48pv-1",
      modelNumber: "A-VMH48PV-1",
      brandId: "century",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "century-a-series-wall-single-cfg-1",
      slug: "century-a-series-wall-single-cfg-1",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh24su-1",
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
      id: "century-a-series-wall-single-cfg-2",
      slug: "century-a-series-wall-single-cfg-2",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh06sv-1",
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
      id: "century-a-series-wall-single-cfg-3",
      slug: "century-a-series-wall-single-cfg-3",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh09sv-1",
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
      id: "century-a-series-wall-single-cfg-4",
      slug: "century-a-series-wall-single-cfg-4",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh12sv-1",
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
      id: "century-a-series-wall-single-cfg-5",
      slug: "century-a-series-wall-single-cfg-5",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh18sv-1",
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
      id: "century-a-series-wall-single-cfg-6",
      slug: "century-a-series-wall-single-cfg-6",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh24sv-1",
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
      id: "century-a-series-wall-single-cfg-7",
      slug: "century-a-series-wall-single-cfg-7",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh18dv-1",
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
      id: "century-a-series-wall-single-cfg-8",
      slug: "century-a-series-wall-single-cfg-8",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh18dv-1",
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
      id: "century-a-series-wall-single-cfg-9",
      slug: "century-a-series-wall-single-cfg-9",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh18dv-1",
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
      id: "century-a-series-wall-single-cfg-10",
      slug: "century-a-series-wall-single-cfg-10",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh28tv-1",
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
      id: "century-a-series-wall-single-cfg-11",
      slug: "century-a-series-wall-single-cfg-11",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh28tv-1",
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
      id: "century-a-series-wall-single-cfg-12",
      slug: "century-a-series-wall-single-cfg-12",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh36qv-1",
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
      id: "century-a-series-wall-single-cfg-13",
      slug: "century-a-series-wall-single-cfg-13",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh28tv-1",
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
      id: "century-a-series-wall-single-cfg-14",
      slug: "century-a-series-wall-single-cfg-14",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vmh36qv-1",
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
      id: "century-a-series-wall-single-cfg-15",
      slug: "century-a-series-wall-single-cfg-15",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp06sa-1",
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
      id: "century-a-series-wall-single-cfg-16",
      slug: "century-a-series-wall-single-cfg-16",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp09sa-1",
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
      id: "century-a-series-wall-single-cfg-17",
      slug: "century-a-series-wall-single-cfg-17",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp09sa-1",
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
      id: "century-a-series-wall-single-cfg-18",
      slug: "century-a-series-wall-single-cfg-18",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp09sa-1",
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
      id: "century-a-series-wall-single-cfg-19",
      slug: "century-a-series-wall-single-cfg-19",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp09sa-1",
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
      id: "century-a-series-wall-single-cfg-20",
      slug: "century-a-series-wall-single-cfg-20",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp12sa-1",
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
      id: "century-a-series-wall-single-cfg-21",
      slug: "century-a-series-wall-single-cfg-21",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp12sa-1",
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
      id: "century-a-series-wall-single-cfg-22",
      slug: "century-a-series-wall-single-cfg-22",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp12sa-1",
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
      id: "century-a-series-wall-single-cfg-23",
      slug: "century-a-series-wall-single-cfg-23",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp12sa-1",
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
      id: "century-a-series-wall-single-cfg-24",
      slug: "century-a-series-wall-single-cfg-24",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp18sa-1",
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
      id: "century-a-series-wall-single-cfg-25",
      slug: "century-a-series-wall-single-cfg-25",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp18sa-1",
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
      id: "century-a-series-wall-single-cfg-26",
      slug: "century-a-series-wall-single-cfg-26",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp18sa-1",
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
      id: "century-a-series-wall-single-cfg-27",
      slug: "century-a-series-wall-single-cfg-27",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp18sa-1",
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
      id: "century-a-series-wall-single-cfg-28",
      slug: "century-a-series-wall-single-cfg-28",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp18sa-1",
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
      id: "century-a-series-wall-single-cfg-29",
      slug: "century-a-series-wall-single-cfg-29",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp24sa-1",
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
      id: "century-a-series-wall-single-cfg-30",
      slug: "century-a-series-wall-single-cfg-30",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp24sa-1",
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
      id: "century-a-series-wall-single-cfg-31",
      slug: "century-a-series-wall-single-cfg-31",
      modelId: "century-a-series-wall-single",
      outdoorUnitId: "century-a-vhp24sa-1",
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
      id: "century-standard-wall-single-cfg-1",
      slug: "century-standard-wall-single-cfg-1",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-b-vmh12su-1",
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
      id: "century-standard-wall-single-cfg-2",
      slug: "century-standard-wall-single-cfg-2",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-a-vmh09su-1",
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
      id: "century-standard-wall-single-cfg-3",
      slug: "century-standard-wall-single-cfg-3",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-a-vfh18db-1",
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
      id: "century-standard-wall-single-cfg-4",
      slug: "century-standard-wall-single-cfg-4",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-a-vfh24tb-1",
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
      id: "century-standard-wall-single-cfg-5",
      slug: "century-standard-wall-single-cfg-5",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-a-vfh30qb-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-wall-single-cfg-6",
      slug: "century-standard-wall-single-cfg-6",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-a-vfh36qb-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-wall-single-cfg-7",
      slug: "century-standard-wall-single-cfg-7",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-a-vfh42pb-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39000,
      coolingCapacityMaxBtu: 39000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-wall-single-cfg-8",
      slug: "century-standard-wall-single-cfg-8",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-a-vmh28tu-1",
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
      id: "century-standard-wall-single-cfg-9",
      slug: "century-standard-wall-single-cfg-9",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-a-vmh36qu-1",
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
      id: "century-standard-wall-single-cfg-10",
      slug: "century-standard-wall-single-cfg-10",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-a-vmh48pu-1",
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
      id: "century-standard-wall-single-cfg-11",
      slug: "century-standard-wall-single-cfg-11",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-wall-single-cfg-12",
      slug: "century-standard-wall-single-cfg-12",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-wall-single-cfg-13",
      slug: "century-standard-wall-single-cfg-13",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-wall-single-cfg-14",
      slug: "century-standard-wall-single-cfg-14",
      modelId: "century-standard-wall-single",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-1",
      slug: "century-hrg18-series-central-ducted-cfg-1",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-2",
      slug: "century-hrg18-series-central-ducted-cfg-2",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-3",
      slug: "century-hrg18-series-central-ducted-cfg-3",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-4",
      slug: "century-hrg18-series-central-ducted-cfg-4",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-5",
      slug: "century-hrg18-series-central-ducted-cfg-5",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-6",
      slug: "century-hrg18-series-central-ducted-cfg-6",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-7",
      slug: "century-hrg18-series-central-ducted-cfg-7",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-8",
      slug: "century-hrg18-series-central-ducted-cfg-8",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-9",
      slug: "century-hrg18-series-central-ducted-cfg-9",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-10",
      slug: "century-hrg18-series-central-ducted-cfg-10",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-11",
      slug: "century-hrg18-series-central-ducted-cfg-11",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-12",
      slug: "century-hrg18-series-central-ducted-cfg-12",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-13",
      slug: "century-hrg18-series-central-ducted-cfg-13",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-14",
      slug: "century-hrg18-series-central-ducted-cfg-14",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-15",
      slug: "century-hrg18-series-central-ducted-cfg-15",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-16",
      slug: "century-hrg18-series-central-ducted-cfg-16",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-17",
      slug: "century-hrg18-series-central-ducted-cfg-17",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-18",
      slug: "century-hrg18-series-central-ducted-cfg-18",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-19",
      slug: "century-hrg18-series-central-ducted-cfg-19",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-20",
      slug: "century-hrg18-series-central-ducted-cfg-20",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-21",
      slug: "century-hrg18-series-central-ducted-cfg-21",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-22",
      slug: "century-hrg18-series-central-ducted-cfg-22",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-23",
      slug: "century-hrg18-series-central-ducted-cfg-23",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-24",
      slug: "century-hrg18-series-central-ducted-cfg-24",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-25",
      slug: "century-hrg18-series-central-ducted-cfg-25",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-26",
      slug: "century-hrg18-series-central-ducted-cfg-26",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-27",
      slug: "century-hrg18-series-central-ducted-cfg-27",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-28",
      slug: "century-hrg18-series-central-ducted-cfg-28",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-29",
      slug: "century-hrg18-series-central-ducted-cfg-29",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-30",
      slug: "century-hrg18-series-central-ducted-cfg-30",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-31",
      slug: "century-hrg18-series-central-ducted-cfg-31",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-32",
      slug: "century-hrg18-series-central-ducted-cfg-32",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-33",
      slug: "century-hrg18-series-central-ducted-cfg-33",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-34",
      slug: "century-hrg18-series-central-ducted-cfg-34",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-35",
      slug: "century-hrg18-series-central-ducted-cfg-35",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-36",
      slug: "century-hrg18-series-central-ducted-cfg-36",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-37",
      slug: "century-hrg18-series-central-ducted-cfg-37",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-38",
      slug: "century-hrg18-series-central-ducted-cfg-38",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-39",
      slug: "century-hrg18-series-central-ducted-cfg-39",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-40",
      slug: "century-hrg18-series-central-ducted-cfg-40",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-41",
      slug: "century-hrg18-series-central-ducted-cfg-41",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-42",
      slug: "century-hrg18-series-central-ducted-cfg-42",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-43",
      slug: "century-hrg18-series-central-ducted-cfg-43",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-44",
      slug: "century-hrg18-series-central-ducted-cfg-44",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-45",
      slug: "century-hrg18-series-central-ducted-cfg-45",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-46",
      slug: "century-hrg18-series-central-ducted-cfg-46",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-47",
      slug: "century-hrg18-series-central-ducted-cfg-47",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-48",
      slug: "century-hrg18-series-central-ducted-cfg-48",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-49",
      slug: "century-hrg18-series-central-ducted-cfg-49",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-50",
      slug: "century-hrg18-series-central-ducted-cfg-50",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-51",
      slug: "century-hrg18-series-central-ducted-cfg-51",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-52",
      slug: "century-hrg18-series-central-ducted-cfg-52",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-53",
      slug: "century-hrg18-series-central-ducted-cfg-53",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-54",
      slug: "century-hrg18-series-central-ducted-cfg-54",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-55",
      slug: "century-hrg18-series-central-ducted-cfg-55",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-56",
      slug: "century-hrg18-series-central-ducted-cfg-56",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-57",
      slug: "century-hrg18-series-central-ducted-cfg-57",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-58",
      slug: "century-hrg18-series-central-ducted-cfg-58",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-59",
      slug: "century-hrg18-series-central-ducted-cfg-59",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-60",
      slug: "century-hrg18-series-central-ducted-cfg-60",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-61",
      slug: "century-hrg18-series-central-ducted-cfg-61",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-62",
      slug: "century-hrg18-series-central-ducted-cfg-62",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-63",
      slug: "century-hrg18-series-central-ducted-cfg-63",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-64",
      slug: "century-hrg18-series-central-ducted-cfg-64",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-65",
      slug: "century-hrg18-series-central-ducted-cfg-65",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-66",
      slug: "century-hrg18-series-central-ducted-cfg-66",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-67",
      slug: "century-hrg18-series-central-ducted-cfg-67",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-68",
      slug: "century-hrg18-series-central-ducted-cfg-68",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-69",
      slug: "century-hrg18-series-central-ducted-cfg-69",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-70",
      slug: "century-hrg18-series-central-ducted-cfg-70",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-71",
      slug: "century-hrg18-series-central-ducted-cfg-71",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-72",
      slug: "century-hrg18-series-central-ducted-cfg-72",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-73",
      slug: "century-hrg18-series-central-ducted-cfg-73",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-74",
      slug: "century-hrg18-series-central-ducted-cfg-74",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-75",
      slug: "century-hrg18-series-central-ducted-cfg-75",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-76",
      slug: "century-hrg18-series-central-ducted-cfg-76",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-77",
      slug: "century-hrg18-series-central-ducted-cfg-77",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-78",
      slug: "century-hrg18-series-central-ducted-cfg-78",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-79",
      slug: "century-hrg18-series-central-ducted-cfg-79",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-80",
      slug: "century-hrg18-series-central-ducted-cfg-80",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-81",
      slug: "century-hrg18-series-central-ducted-cfg-81",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-82",
      slug: "century-hrg18-series-central-ducted-cfg-82",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-83",
      slug: "century-hrg18-series-central-ducted-cfg-83",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-84",
      slug: "century-hrg18-series-central-ducted-cfg-84",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-85",
      slug: "century-hrg18-series-central-ducted-cfg-85",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-86",
      slug: "century-hrg18-series-central-ducted-cfg-86",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-87",
      slug: "century-hrg18-series-central-ducted-cfg-87",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-88",
      slug: "century-hrg18-series-central-ducted-cfg-88",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-89",
      slug: "century-hrg18-series-central-ducted-cfg-89",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-90",
      slug: "century-hrg18-series-central-ducted-cfg-90",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-91",
      slug: "century-hrg18-series-central-ducted-cfg-91",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-92",
      slug: "century-hrg18-series-central-ducted-cfg-92",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-93",
      slug: "century-hrg18-series-central-ducted-cfg-93",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-94",
      slug: "century-hrg18-series-central-ducted-cfg-94",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-95",
      slug: "century-hrg18-series-central-ducted-cfg-95",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-96",
      slug: "century-hrg18-series-central-ducted-cfg-96",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-97",
      slug: "century-hrg18-series-central-ducted-cfg-97",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-98",
      slug: "century-hrg18-series-central-ducted-cfg-98",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-99",
      slug: "century-hrg18-series-central-ducted-cfg-99",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-100",
      slug: "century-hrg18-series-central-ducted-cfg-100",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-101",
      slug: "century-hrg18-series-central-ducted-cfg-101",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-102",
      slug: "century-hrg18-series-central-ducted-cfg-102",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-103",
      slug: "century-hrg18-series-central-ducted-cfg-103",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-104",
      slug: "century-hrg18-series-central-ducted-cfg-104",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-105",
      slug: "century-hrg18-series-central-ducted-cfg-105",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.1,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-106",
      slug: "century-hrg18-series-central-ducted-cfg-106",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-107",
      slug: "century-hrg18-series-central-ducted-cfg-107",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-108",
      slug: "century-hrg18-series-central-ducted-cfg-108",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-109",
      slug: "century-hrg18-series-central-ducted-cfg-109",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-110",
      slug: "century-hrg18-series-central-ducted-cfg-110",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-111",
      slug: "century-hrg18-series-central-ducted-cfg-111",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-112",
      slug: "century-hrg18-series-central-ducted-cfg-112",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-113",
      slug: "century-hrg18-series-central-ducted-cfg-113",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-114",
      slug: "century-hrg18-series-central-ducted-cfg-114",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-115",
      slug: "century-hrg18-series-central-ducted-cfg-115",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-116",
      slug: "century-hrg18-series-central-ducted-cfg-116",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-117",
      slug: "century-hrg18-series-central-ducted-cfg-117",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-118",
      slug: "century-hrg18-series-central-ducted-cfg-118",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-119",
      slug: "century-hrg18-series-central-ducted-cfg-119",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-120",
      slug: "century-hrg18-series-central-ducted-cfg-120",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-121",
      slug: "century-hrg18-series-central-ducted-cfg-121",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-122",
      slug: "century-hrg18-series-central-ducted-cfg-122",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-123",
      slug: "century-hrg18-series-central-ducted-cfg-123",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-124",
      slug: "century-hrg18-series-central-ducted-cfg-124",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-125",
      slug: "century-hrg18-series-central-ducted-cfg-125",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-126",
      slug: "century-hrg18-series-central-ducted-cfg-126",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-127",
      slug: "century-hrg18-series-central-ducted-cfg-127",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-128",
      slug: "century-hrg18-series-central-ducted-cfg-128",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-129",
      slug: "century-hrg18-series-central-ducted-cfg-129",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-130",
      slug: "century-hrg18-series-central-ducted-cfg-130",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-131",
      slug: "century-hrg18-series-central-ducted-cfg-131",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-132",
      slug: "century-hrg18-series-central-ducted-cfg-132",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-133",
      slug: "century-hrg18-series-central-ducted-cfg-133",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-134",
      slug: "century-hrg18-series-central-ducted-cfg-134",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-135",
      slug: "century-hrg18-series-central-ducted-cfg-135",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-136",
      slug: "century-hrg18-series-central-ducted-cfg-136",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-137",
      slug: "century-hrg18-series-central-ducted-cfg-137",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-138",
      slug: "century-hrg18-series-central-ducted-cfg-138",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-139",
      slug: "century-hrg18-series-central-ducted-cfg-139",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-140",
      slug: "century-hrg18-series-central-ducted-cfg-140",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-141",
      slug: "century-hrg18-series-central-ducted-cfg-141",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-142",
      slug: "century-hrg18-series-central-ducted-cfg-142",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-143",
      slug: "century-hrg18-series-central-ducted-cfg-143",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-144",
      slug: "century-hrg18-series-central-ducted-cfg-144",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-145",
      slug: "century-hrg18-series-central-ducted-cfg-145",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-146",
      slug: "century-hrg18-series-central-ducted-cfg-146",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-147",
      slug: "century-hrg18-series-central-ducted-cfg-147",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-148",
      slug: "century-hrg18-series-central-ducted-cfg-148",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-149",
      slug: "century-hrg18-series-central-ducted-cfg-149",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-150",
      slug: "century-hrg18-series-central-ducted-cfg-150",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-151",
      slug: "century-hrg18-series-central-ducted-cfg-151",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-152",
      slug: "century-hrg18-series-central-ducted-cfg-152",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-153",
      slug: "century-hrg18-series-central-ducted-cfg-153",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-154",
      slug: "century-hrg18-series-central-ducted-cfg-154",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-155",
      slug: "century-hrg18-series-central-ducted-cfg-155",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-156",
      slug: "century-hrg18-series-central-ducted-cfg-156",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-157",
      slug: "century-hrg18-series-central-ducted-cfg-157",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-158",
      slug: "century-hrg18-series-central-ducted-cfg-158",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-159",
      slug: "century-hrg18-series-central-ducted-cfg-159",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-160",
      slug: "century-hrg18-series-central-ducted-cfg-160",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-161",
      slug: "century-hrg18-series-central-ducted-cfg-161",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-162",
      slug: "century-hrg18-series-central-ducted-cfg-162",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-163",
      slug: "century-hrg18-series-central-ducted-cfg-163",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-164",
      slug: "century-hrg18-series-central-ducted-cfg-164",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-165",
      slug: "century-hrg18-series-central-ducted-cfg-165",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-166",
      slug: "century-hrg18-series-central-ducted-cfg-166",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-167",
      slug: "century-hrg18-series-central-ducted-cfg-167",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-168",
      slug: "century-hrg18-series-central-ducted-cfg-168",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-169",
      slug: "century-hrg18-series-central-ducted-cfg-169",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-170",
      slug: "century-hrg18-series-central-ducted-cfg-170",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-171",
      slug: "century-hrg18-series-central-ducted-cfg-171",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-172",
      slug: "century-hrg18-series-central-ducted-cfg-172",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-173",
      slug: "century-hrg18-series-central-ducted-cfg-173",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-174",
      slug: "century-hrg18-series-central-ducted-cfg-174",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-175",
      slug: "century-hrg18-series-central-ducted-cfg-175",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-176",
      slug: "century-hrg18-series-central-ducted-cfg-176",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-177",
      slug: "century-hrg18-series-central-ducted-cfg-177",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-178",
      slug: "century-hrg18-series-central-ducted-cfg-178",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-179",
      slug: "century-hrg18-series-central-ducted-cfg-179",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-180",
      slug: "century-hrg18-series-central-ducted-cfg-180",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-181",
      slug: "century-hrg18-series-central-ducted-cfg-181",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-182",
      slug: "century-hrg18-series-central-ducted-cfg-182",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-183",
      slug: "century-hrg18-series-central-ducted-cfg-183",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-184",
      slug: "century-hrg18-series-central-ducted-cfg-184",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-185",
      slug: "century-hrg18-series-central-ducted-cfg-185",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-186",
      slug: "century-hrg18-series-central-ducted-cfg-186",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-187",
      slug: "century-hrg18-series-central-ducted-cfg-187",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-188",
      slug: "century-hrg18-series-central-ducted-cfg-188",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-189",
      slug: "century-hrg18-series-central-ducted-cfg-189",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-190",
      slug: "century-hrg18-series-central-ducted-cfg-190",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-191",
      slug: "century-hrg18-series-central-ducted-cfg-191",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-192",
      slug: "century-hrg18-series-central-ducted-cfg-192",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-193",
      slug: "century-hrg18-series-central-ducted-cfg-193",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-194",
      slug: "century-hrg18-series-central-ducted-cfg-194",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-195",
      slug: "century-hrg18-series-central-ducted-cfg-195",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-196",
      slug: "century-hrg18-series-central-ducted-cfg-196",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-197",
      slug: "century-hrg18-series-central-ducted-cfg-197",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-hrg18-series-central-ducted-cfg-198",
      slug: "century-hrg18-series-central-ducted-cfg-198",
      modelId: "century-hrg18-series-central-ducted",
      outdoorUnitId: "century-hrg1836s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-1",
      slug: "century-standard-central-ducted-cfg-1",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-2",
      slug: "century-standard-central-ducted-cfg-2",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-3",
      slug: "century-standard-central-ducted-cfg-3",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-4",
      slug: "century-standard-central-ducted-cfg-4",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-5",
      slug: "century-standard-central-ducted-cfg-5",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-6",
      slug: "century-standard-central-ducted-cfg-6",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-7",
      slug: "century-standard-central-ducted-cfg-7",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-8",
      slug: "century-standard-central-ducted-cfg-8",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-9",
      slug: "century-standard-central-ducted-cfg-9",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-10",
      slug: "century-standard-central-ducted-cfg-10",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-11",
      slug: "century-standard-central-ducted-cfg-11",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-12",
      slug: "century-standard-central-ducted-cfg-12",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-13",
      slug: "century-standard-central-ducted-cfg-13",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-14",
      slug: "century-standard-central-ducted-cfg-14",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 59500,
      coolingCapacityMaxBtu: 59500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-15",
      slug: "century-standard-central-ducted-cfg-15",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 59500,
      coolingCapacityMaxBtu: 59500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-16",
      slug: "century-standard-central-ducted-cfg-16",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-17",
      slug: "century-standard-central-ducted-cfg-17",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-18",
      slug: "century-standard-central-ducted-cfg-18",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-19",
      slug: "century-standard-central-ducted-cfg-19",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-20",
      slug: "century-standard-central-ducted-cfg-20",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-21",
      slug: "century-standard-central-ducted-cfg-21",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-22",
      slug: "century-standard-central-ducted-cfg-22",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-23",
      slug: "century-standard-central-ducted-cfg-23",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 59500,
      coolingCapacityMaxBtu: 59500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-24",
      slug: "century-standard-central-ducted-cfg-24",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 59500,
      coolingCapacityMaxBtu: 59500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-25",
      slug: "century-standard-central-ducted-cfg-25",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-26",
      slug: "century-standard-central-ducted-cfg-26",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-27",
      slug: "century-standard-central-ducted-cfg-27",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-28",
      slug: "century-standard-central-ducted-cfg-28",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-29",
      slug: "century-standard-central-ducted-cfg-29",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-30",
      slug: "century-standard-central-ducted-cfg-30",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-31",
      slug: "century-standard-central-ducted-cfg-31",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-32",
      slug: "century-standard-central-ducted-cfg-32",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-33",
      slug: "century-standard-central-ducted-cfg-33",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-34",
      slug: "century-standard-central-ducted-cfg-34",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-35",
      slug: "century-standard-central-ducted-cfg-35",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-36",
      slug: "century-standard-central-ducted-cfg-36",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-37",
      slug: "century-standard-central-ducted-cfg-37",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-38",
      slug: "century-standard-central-ducted-cfg-38",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58500,
      coolingCapacityMaxBtu: 58500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-39",
      slug: "century-standard-central-ducted-cfg-39",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-40",
      slug: "century-standard-central-ducted-cfg-40",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-41",
      slug: "century-standard-central-ducted-cfg-41",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-42",
      slug: "century-standard-central-ducted-cfg-42",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-43",
      slug: "century-standard-central-ducted-cfg-43",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-44",
      slug: "century-standard-central-ducted-cfg-44",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58500,
      coolingCapacityMaxBtu: 58500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "century-standard-central-ducted-cfg-45",
      slug: "century-standard-central-ducted-cfg-45",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-46",
      slug: "century-standard-central-ducted-cfg-46",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-standard-central-ducted-cfg-47",
      slug: "century-standard-central-ducted-cfg-47",
      modelId: "century-standard-central-ducted",
      outdoorUnitId: "century-hrg1860s1p",
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
      id: "century-a-series-central-ducted-cfg-1",
      slug: "century-a-series-central-ducted-cfg-1",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd30sa-1",
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
      id: "century-a-series-central-ducted-cfg-2",
      slug: "century-a-series-central-ducted-cfg-2",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd36sa-1",
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
      id: "century-a-series-central-ducted-cfg-3",
      slug: "century-a-series-central-ducted-cfg-3",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd60sa-1",
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
      id: "century-a-series-central-ducted-cfg-4",
      slug: "century-a-series-central-ducted-cfg-4",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd24sa-1",
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
      id: "century-a-series-central-ducted-cfg-5",
      slug: "century-a-series-central-ducted-cfg-5",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd18sa-1",
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
      id: "century-a-series-central-ducted-cfg-6",
      slug: "century-a-series-central-ducted-cfg-6",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd18sa-1",
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
      id: "century-a-series-central-ducted-cfg-7",
      slug: "century-a-series-central-ducted-cfg-7",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd48sa-1",
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
      id: "century-a-series-central-ducted-cfg-8",
      slug: "century-a-series-central-ducted-cfg-8",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd24sa-1",
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
      id: "century-a-series-central-ducted-cfg-9",
      slug: "century-a-series-central-ducted-cfg-9",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd30sa-1",
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
      id: "century-a-series-central-ducted-cfg-10",
      slug: "century-a-series-central-ducted-cfg-10",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd48sa-1",
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
      id: "century-a-series-central-ducted-cfg-11",
      slug: "century-a-series-central-ducted-cfg-11",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd36sa-1",
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
      id: "century-a-series-central-ducted-cfg-12",
      slug: "century-a-series-central-ducted-cfg-12",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vcd60sa-1",
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
      id: "century-a-series-central-ducted-cfg-13",
      slug: "century-a-series-central-ducted-cfg-13",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp18sa-1",
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
      id: "century-a-series-central-ducted-cfg-14",
      slug: "century-a-series-central-ducted-cfg-14",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp24sa-1",
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
      id: "century-a-series-central-ducted-cfg-15",
      slug: "century-a-series-central-ducted-cfg-15",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp30sa-1",
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
      id: "century-a-series-central-ducted-cfg-16",
      slug: "century-a-series-central-ducted-cfg-16",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp36sa-1",
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
      id: "century-a-series-central-ducted-cfg-17",
      slug: "century-a-series-central-ducted-cfg-17",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp48sa-1",
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
      id: "century-a-series-central-ducted-cfg-18",
      slug: "century-a-series-central-ducted-cfg-18",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp60sa-1",
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
      id: "century-a-series-central-ducted-cfg-19",
      slug: "century-a-series-central-ducted-cfg-19",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp18sa-1",
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
      id: "century-a-series-central-ducted-cfg-20",
      slug: "century-a-series-central-ducted-cfg-20",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp24sa-1",
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
      id: "century-a-series-central-ducted-cfg-21",
      slug: "century-a-series-central-ducted-cfg-21",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp18sa-1",
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
      id: "century-a-series-central-ducted-cfg-22",
      slug: "century-a-series-central-ducted-cfg-22",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp24sa-1",
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
      id: "century-a-series-central-ducted-cfg-23",
      slug: "century-a-series-central-ducted-cfg-23",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp30sa-1",
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
      id: "century-a-series-central-ducted-cfg-24",
      slug: "century-a-series-central-ducted-cfg-24",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp30sa-1",
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
      id: "century-a-series-central-ducted-cfg-25",
      slug: "century-a-series-central-ducted-cfg-25",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp36sa-1",
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
      id: "century-a-series-central-ducted-cfg-26",
      slug: "century-a-series-central-ducted-cfg-26",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp30sa-1",
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
      id: "century-a-series-central-ducted-cfg-27",
      slug: "century-a-series-central-ducted-cfg-27",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp36sa-1",
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
      id: "century-a-series-central-ducted-cfg-28",
      slug: "century-a-series-central-ducted-cfg-28",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp48sa-1",
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
      id: "century-a-series-central-ducted-cfg-29",
      slug: "century-a-series-central-ducted-cfg-29",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp60sa-1",
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
      id: "century-a-series-central-ducted-cfg-30",
      slug: "century-a-series-central-ducted-cfg-30",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp60sa-1",
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
      id: "century-a-series-central-ducted-cfg-31",
      slug: "century-a-series-central-ducted-cfg-31",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp48sa-1",
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
      id: "century-a-series-central-ducted-cfg-32",
      slug: "century-a-series-central-ducted-cfg-32",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vhp18sa-1",
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
      id: "century-a-series-central-ducted-cfg-33",
      slug: "century-a-series-central-ducted-cfg-33",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vhp24sa-1",
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
      id: "century-a-series-central-ducted-cfg-34",
      slug: "century-a-series-central-ducted-cfg-34",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp18sa-1",
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
      id: "century-a-series-central-ducted-cfg-35",
      slug: "century-a-series-central-ducted-cfg-35",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp24sa-1",
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
      id: "century-a-series-central-ducted-cfg-36",
      slug: "century-a-series-central-ducted-cfg-36",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp30sa-1",
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
      id: "century-a-series-central-ducted-cfg-37",
      slug: "century-a-series-central-ducted-cfg-37",
      modelId: "century-a-series-central-ducted",
      outdoorUnitId: "century-a-vxp36sa-1",
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
      id: "century-a-vmh-series-wall-single-cfg-1",
      slug: "century-a-vmh-series-wall-single-cfg-1",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh33sv-1",
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
      id: "century-a-vmh-series-wall-single-cfg-2",
      slug: "century-a-vmh-series-wall-single-cfg-2",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh36qv-1a",
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
      id: "century-a-vmh-series-wall-single-cfg-3",
      slug: "century-a-vmh-series-wall-single-cfg-3",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh36qv-1a",
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
      id: "century-a-vmh-series-wall-single-cfg-4",
      slug: "century-a-vmh-series-wall-single-cfg-4",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh36qv-1a",
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
      id: "century-a-vmh-series-wall-single-cfg-5",
      slug: "century-a-vmh-series-wall-single-cfg-5",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh55pv-1",
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
      id: "century-a-vmh-series-wall-single-cfg-6",
      slug: "century-a-vmh-series-wall-single-cfg-6",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh55pv-1",
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
      id: "century-a-vmh-series-wall-single-cfg-7",
      slug: "century-a-vmh-series-wall-single-cfg-7",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh55pv-1",
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
      id: "century-a-vmh-series-wall-single-cfg-8",
      slug: "century-a-vmh-series-wall-single-cfg-8",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh48pv-1",
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
      id: "century-a-vmh-series-wall-single-cfg-9",
      slug: "century-a-vmh-series-wall-single-cfg-9",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh48pv-1",
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
      id: "century-a-vmh-series-wall-single-cfg-10",
      slug: "century-a-vmh-series-wall-single-cfg-10",
      modelId: "century-a-vmh-series-wall-single",
      outdoorUnitId: "century-a-vmh48pv-1",
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
      id: "century-mcd-series-central-ducted-cfg-1",
      slug: "century-mcd-series-central-ducted-cfg-1",
      modelId: "century-mcd-series-central-ducted",
      outdoorUnitId: "century-a-vcd30sa-1",
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
      id: "century-mcd-series-central-ducted-cfg-2",
      slug: "century-mcd-series-central-ducted-cfg-2",
      modelId: "century-mcd-series-central-ducted",
      outdoorUnitId: "century-a-vcd36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "century-a-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-a-series-wall-single-cfg-2",
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
      configurationId: "century-a-series-wall-single-cfg-3",
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
      configurationId: "century-a-series-wall-single-cfg-4",
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
      configurationId: "century-a-series-wall-single-cfg-5",
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
      configurationId: "century-a-series-wall-single-cfg-6",
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
      configurationId: "century-a-series-wall-single-cfg-7",
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
      configurationId: "century-a-series-wall-single-cfg-8",
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
      configurationId: "century-a-series-wall-single-cfg-9",
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
      configurationId: "century-a-series-wall-single-cfg-10",
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
      configurationId: "century-a-series-wall-single-cfg-11",
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
      configurationId: "century-a-series-wall-single-cfg-12",
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
      configurationId: "century-a-series-wall-single-cfg-13",
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
      configurationId: "century-a-series-wall-single-cfg-14",
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
      configurationId: "century-a-series-wall-single-cfg-15",
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
      configurationId: "century-a-series-wall-single-cfg-16",
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
      configurationId: "century-a-series-wall-single-cfg-17",
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
      configurationId: "century-a-series-wall-single-cfg-18",
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
      configurationId: "century-a-series-wall-single-cfg-19",
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
      configurationId: "century-a-series-wall-single-cfg-20",
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
      configurationId: "century-a-series-wall-single-cfg-21",
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
      configurationId: "century-a-series-wall-single-cfg-22",
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
      configurationId: "century-a-series-wall-single-cfg-23",
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
      configurationId: "century-a-series-wall-single-cfg-24",
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
      configurationId: "century-a-series-wall-single-cfg-25",
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
      configurationId: "century-a-series-wall-single-cfg-26",
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
      configurationId: "century-a-series-wall-single-cfg-27",
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
      configurationId: "century-a-series-wall-single-cfg-28",
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
      configurationId: "century-a-series-wall-single-cfg-29",
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
      configurationId: "century-a-series-wall-single-cfg-30",
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
      configurationId: "century-a-series-wall-single-cfg-31",
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
      configurationId: "century-standard-wall-single-cfg-1",
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
      configurationId: "century-standard-wall-single-cfg-2",
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
      configurationId: "century-standard-wall-single-cfg-3",
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
      configurationId: "century-standard-wall-single-cfg-4",
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
      configurationId: "century-standard-wall-single-cfg-5",
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
      configurationId: "century-standard-wall-single-cfg-6",
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
      configurationId: "century-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-wall-single-cfg-8",
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
      configurationId: "century-standard-wall-single-cfg-9",
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
      configurationId: "century-standard-wall-single-cfg-10",
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
      configurationId: "century-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-wall-single-cfg-12",
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
      configurationId: "century-standard-wall-single-cfg-13",
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
      configurationId: "century-standard-wall-single-cfg-14",
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
      configurationId: "century-hrg18-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-5",
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
      configurationId: "century-hrg18-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-102",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-107",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-110",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-113",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-114",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-115",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-118",
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
      configurationId: "century-hrg18-series-central-ducted-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-123",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-124",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-125",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-126",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-127",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-130",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-131",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-137",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-138",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-139",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-140",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-141",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-142",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-143",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-144",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-145",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-146",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-147",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-148",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-149",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-150",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-151",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-152",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-153",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-154",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-155",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-156",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-157",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-158",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-159",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-160",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-161",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-162",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-163",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-164",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-165",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-166",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-167",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-168",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-169",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-170",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-171",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-172",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-173",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-174",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-175",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-176",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-177",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-178",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-179",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-180",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-181",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-182",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-183",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-184",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-185",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-186",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-187",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-188",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-189",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-190",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-191",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-192",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-194",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-196",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-197",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-hrg18-series-central-ducted-cfg-198",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-4",
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
      configurationId: "century-standard-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-9",
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
      configurationId: "century-standard-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-12",
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
      configurationId: "century-standard-central-ducted-cfg-13",
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
      configurationId: "century-standard-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-18",
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
      configurationId: "century-standard-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-21",
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
      configurationId: "century-standard-central-ducted-cfg-22",
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
      configurationId: "century-standard-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-26",
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
      configurationId: "century-standard-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-29",
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
      configurationId: "century-standard-central-ducted-cfg-30",
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
      configurationId: "century-standard-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-33",
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
      configurationId: "century-standard-central-ducted-cfg-34",
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
      configurationId: "century-standard-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-38",
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
      configurationId: "century-standard-central-ducted-cfg-39",
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
      configurationId: "century-standard-central-ducted-cfg-40",
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
      configurationId: "century-standard-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-standard-central-ducted-cfg-44",
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
      configurationId: "century-standard-central-ducted-cfg-45",
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
      configurationId: "century-standard-central-ducted-cfg-46",
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
      configurationId: "century-standard-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "century-a-series-central-ducted-cfg-1",
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
      configurationId: "century-a-series-central-ducted-cfg-2",
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
      configurationId: "century-a-series-central-ducted-cfg-3",
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
      configurationId: "century-a-series-central-ducted-cfg-4",
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
      configurationId: "century-a-series-central-ducted-cfg-5",
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
      configurationId: "century-a-series-central-ducted-cfg-6",
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
      configurationId: "century-a-series-central-ducted-cfg-7",
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
      configurationId: "century-a-series-central-ducted-cfg-8",
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
      configurationId: "century-a-series-central-ducted-cfg-9",
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
      configurationId: "century-a-series-central-ducted-cfg-10",
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
      configurationId: "century-a-series-central-ducted-cfg-11",
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
      configurationId: "century-a-series-central-ducted-cfg-12",
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
      configurationId: "century-a-series-central-ducted-cfg-13",
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
      configurationId: "century-a-series-central-ducted-cfg-14",
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
      configurationId: "century-a-series-central-ducted-cfg-15",
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
      configurationId: "century-a-series-central-ducted-cfg-16",
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
      configurationId: "century-a-series-central-ducted-cfg-17",
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
      configurationId: "century-a-series-central-ducted-cfg-18",
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
      configurationId: "century-a-series-central-ducted-cfg-19",
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
      configurationId: "century-a-series-central-ducted-cfg-20",
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
      configurationId: "century-a-series-central-ducted-cfg-21",
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
      configurationId: "century-a-series-central-ducted-cfg-22",
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
      configurationId: "century-a-series-central-ducted-cfg-23",
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
      configurationId: "century-a-series-central-ducted-cfg-24",
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
      configurationId: "century-a-series-central-ducted-cfg-25",
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
      configurationId: "century-a-series-central-ducted-cfg-26",
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
      configurationId: "century-a-series-central-ducted-cfg-27",
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
      configurationId: "century-a-series-central-ducted-cfg-28",
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
      configurationId: "century-a-series-central-ducted-cfg-29",
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
      configurationId: "century-a-series-central-ducted-cfg-30",
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
      configurationId: "century-a-series-central-ducted-cfg-31",
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
      configurationId: "century-a-series-central-ducted-cfg-32",
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
      configurationId: "century-a-series-central-ducted-cfg-33",
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
      configurationId: "century-a-series-central-ducted-cfg-34",
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
      configurationId: "century-a-series-central-ducted-cfg-35",
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
      configurationId: "century-a-series-central-ducted-cfg-36",
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
      configurationId: "century-a-series-central-ducted-cfg-37",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-1",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-2",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-3",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-4",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-5",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-6",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-7",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-8",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-9",
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
      configurationId: "century-a-vmh-series-wall-single-cfg-10",
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
      configurationId: "century-mcd-series-central-ducted-cfg-1",
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
      configurationId: "century-mcd-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.85,
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
