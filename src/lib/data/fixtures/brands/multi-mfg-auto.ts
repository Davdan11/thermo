import type { BrandDataset } from "../../types";

export const multimfgDataset: BrandDataset = {
  brand: {
    id: "multi-mfg",
    slug: "multi-mfg",
    name: "MULTI MFG",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "multi-mfg-hes-series",
      slug: "multi-mfg-hes-series",
      name: "HES Series",
      brandId: "multi-mfg",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series",
      slug: "multi-mfg-hhs-series",
      name: "HHS Series",
      brandId: "multi-mfg",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series",
      slug: "multi-mfg-msh-series",
      name: "MSH Series",
      brandId: "multi-mfg",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series",
      slug: "multi-mfg-mpc-series",
      name: "MPC Series",
      brandId: "multi-mfg",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series",
      slug: "multi-mfg-msz-series",
      name: "MSZ Series",
      brandId: "multi-mfg",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mez-series",
      slug: "multi-mfg-mez-series",
      name: "MEZ Series",
      brandId: "multi-mfg",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msu-series",
      slug: "multi-mfg-msu-series",
      name: "MSU Series",
      brandId: "multi-mfg",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "multi-mfg-hes-series-central-ducted",
      slug: "multi-mfg-hes-series-central-ducted",
      name: "HES Series",
      seriesId: "multi-mfg-hes-series",
      brandId: "multi-mfg",
      modelNumber: "HES Series",
      normalizedModelNumber: "hes-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 11800,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 18.8,
      hspf2Min: 8.4,
      hspf2Max: 10.4,
      cop5FMin: 1.8,
      cop5FMax: 2.33,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted",
      slug: "multi-mfg-hhs-series-central-ducted",
      name: "HHS Series",
      seriesId: "multi-mfg-hhs-series",
      brandId: "multi-mfg",
      modelNumber: "HHS Series",
      normalizedModelNumber: "hhs-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.3,
      seer2Max: 19.3,
      hspf2Min: 8.8,
      hspf2Max: 10.8,
      cop5FMin: 1.75,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single",
      slug: "multi-mfg-msh-series-wall-single",
      name: "MSH Series",
      seriesId: "multi-mfg-msh-series",
      brandId: "multi-mfg",
      modelNumber: "MSH Series",
      normalizedModelNumber: "msh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 9000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 28.1,
      hspf2Min: 10,
      hspf2Max: 13.8,
      cop5FMin: 1.8,
      cop5FMax: 2.23,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single",
      slug: "multi-mfg-mpc-series-wall-single",
      name: "MPC Series",
      seriesId: "multi-mfg-mpc-series",
      brandId: "multi-mfg",
      modelNumber: "MPC Series",
      normalizedModelNumber: "mpc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19,
      seer2Max: 24.6,
      hspf2Min: 8.7,
      hspf2Max: 11.3,
      cop5FMin: 1.75,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single",
      slug: "multi-mfg-msz-series-wall-single",
      name: "MSZ Series",
      seriesId: "multi-mfg-msz-series",
      brandId: "multi-mfg",
      modelNumber: "MSZ Series",
      normalizedModelNumber: "msz-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 19,
      seer2Max: 24,
      hspf2Min: 8.7,
      hspf2Max: 13.5,
      cop5FMin: 1.85,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-central-ducted",
      slug: "multi-mfg-msz-series-central-ducted",
      name: "MSZ Series",
      seriesId: "multi-mfg-msz-series",
      brandId: "multi-mfg",
      modelNumber: "MSZ Series",
      normalizedModelNumber: "msz-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 17600,
      seer2Min: 18.5,
      seer2Max: 19.7,
      hspf2Min: 9,
      hspf2Max: 9.8,
      cop5FMin: 2.2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mez-series-wall-single",
      slug: "multi-mfg-mez-series-wall-single",
      name: "MEZ Series",
      seriesId: "multi-mfg-mez-series",
      brandId: "multi-mfg",
      modelNumber: "MEZ Series",
      normalizedModelNumber: "mez-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 8000,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 9.7,
      hspf2Max: 9.7,
      cop5FMin: 2.15,
      cop5FMax: 2.15,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msu-series-wall-single",
      slug: "multi-mfg-msu-series-wall-single",
      name: "MSU Series",
      seriesId: "multi-mfg-msu-series",
      brandId: "multi-mfg",
      modelNumber: "MSU Series",
      normalizedModelNumber: "msu-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 26800,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 17.1,
      seer2Max: 20,
      hspf2Min: 9.8,
      hspf2Max: 10.3,
      cop5FMin: 1.95,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "multi-mfg-hes-24hd-a",
      modelNumber: "HES-24HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hes-18hd-a",
      modelNumber: "HES-18HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hes-18hd-b",
      modelNumber: "HES-18HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hes-24hd-b",
      modelNumber: "HES-24HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hes-36hd-b",
      modelNumber: "HES-36HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hes-48hd-b",
      modelNumber: "HES-48HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hes-60hd-b",
      modelNumber: "HES-60HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hes-30hd-b",
      modelNumber: "HES-30HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-18hd-a",
      modelNumber: "HHS-18HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-24hd-a",
      modelNumber: "HHS-24HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-30hd-a",
      modelNumber: "HHS-30HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-36hd-a",
      modelNumber: "HHS-36HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-48hd-a",
      modelNumber: "HHS-48HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-60hd-a",
      modelNumber: "HHS-60HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-36hd-b",
      modelNumber: "HHS-36HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-42hd-b",
      modelNumber: "HHS-42HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-48hd-b",
      modelNumber: "HHS-48HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-60hd-b",
      modelNumber: "HHS-60HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-18hd-b",
      modelNumber: "HHS-18HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-24hd-b",
      modelNumber: "HHS-24HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-30hd-b",
      modelNumber: "HHS-30HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-hhs-25hd-b",
      modelNumber: "HHS-25HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-24hd-a",
      modelNumber: "MSH-24HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-12hd-a",
      modelNumber: "MSH-12HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-09hd-a",
      modelNumber: "MSH-09HD-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-09hd-b",
      modelNumber: "MSH-09HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-12hd-b",
      modelNumber: "MSH-12HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-24hd-b",
      modelNumber: "MSH-24HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-30hd-b",
      modelNumber: "MSH-30HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-36hd-b",
      modelNumber: "MSH-36HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-48hd-b",
      modelNumber: "MSH-48HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msh-60hd-b",
      modelNumber: "MSH-60HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-36mpc4-hh-a",
      modelNumber: "36MPC4-HH-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-28mpc3-hh-a",
      modelNumber: "28MPC3-HH-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-18mpc2-xx-a",
      modelNumber: "18MPC2-XX-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-27mpc3-xx-a",
      modelNumber: "27MPC3-XX-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-36mpc4-xx-a",
      modelNumber: "36MPC4-XX-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-48mpc5-xx-a",
      modelNumber: "48MPC5-XX-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-19mpc2-hh-a",
      modelNumber: "19MPC2-HH-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-18mpc3-he-b",
      modelNumber: "18MPC3-HE-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-36mpc5-he-b",
      modelNumber: "36MPC5-HE-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-48mpc6-he-b",
      modelNumber: "48MPC6-HE-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-27mpc4-hh-b",
      modelNumber: "27MPC4-HH-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-36mpc5-hh-b",
      modelNumber: "36MPC5-HH-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-48mpc6-hh-b",
      modelNumber: "48MPC6-HH-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-55mpc6-hh-b",
      modelNumber: "55MPC6-HH-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-18msz-m-a",
      modelNumber: "18MSZ-M-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-30msz-m-a",
      modelNumber: "30MSZ-M-A",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-18msz-m-b",
      modelNumber: "18MSZ-M-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-24msz-m-b",
      modelNumber: "24MSZ-M-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-9mez-m-b",
      modelNumber: "9MEZ-M-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msu-36hd-b",
      modelNumber: "MSU-36HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    },
    {
      id: "multi-mfg-msu-48hd-b",
      modelNumber: "MSU-48HD-B",
      brandId: "multi-mfg",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-1",
      slug: "multi-mfg-hes-series-central-ducted-cfg-1",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-24hd-a",
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
      id: "multi-mfg-hes-series-central-ducted-cfg-2",
      slug: "multi-mfg-hes-series-central-ducted-cfg-2",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-24hd-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-3",
      slug: "multi-mfg-hes-series-central-ducted-cfg-3",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-18hd-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-4",
      slug: "multi-mfg-hes-series-central-ducted-cfg-4",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-18hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-5",
      slug: "multi-mfg-hes-series-central-ducted-cfg-5",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-24hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.1,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-6",
      slug: "multi-mfg-hes-series-central-ducted-cfg-6",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-36hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-7",
      slug: "multi-mfg-hes-series-central-ducted-cfg-7",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-48hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-8",
      slug: "multi-mfg-hes-series-central-ducted-cfg-8",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-60hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-9",
      slug: "multi-mfg-hes-series-central-ducted-cfg-9",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-18hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-10",
      slug: "multi-mfg-hes-series-central-ducted-cfg-10",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-24hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-11",
      slug: "multi-mfg-hes-series-central-ducted-cfg-11",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-30hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-12",
      slug: "multi-mfg-hes-series-central-ducted-cfg-12",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-36hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-13",
      slug: "multi-mfg-hes-series-central-ducted-cfg-13",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-18hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-14",
      slug: "multi-mfg-hes-series-central-ducted-cfg-14",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-24hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hes-series-central-ducted-cfg-15",
      slug: "multi-mfg-hes-series-central-ducted-cfg-15",
      modelId: "multi-mfg-hes-series-central-ducted",
      outdoorUnitId: "multi-mfg-hes-36hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-1",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-1",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-18hd-a",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-2",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-2",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-24hd-a",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-3",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-3",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-30hd-a",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-4",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-4",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-36hd-a",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-5",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-5",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-48hd-a",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-6",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-6",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-60hd-a",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-7",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-7",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-36hd-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-8",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-8",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-24hd-a",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-9",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-9",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-18hd-a",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-10",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-10",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-30hd-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-11",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-11",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-18hd-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-12",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-12",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-24hd-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-13",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-13",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-30hd-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 18.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-14",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-14",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-36hd-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-15",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-15",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-36hd-b",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-16",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-16",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-42hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-17",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-17",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-48hd-b",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-18",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-18",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-60hd-b",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-19",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-19",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-18hd-b",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-20",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-20",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-24hd-b",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-21",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-21",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-30hd-b",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-22",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-22",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-36hd-b",
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
      id: "multi-mfg-hhs-series-central-ducted-cfg-23",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-23",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-18hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-24",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-24",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-24hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-25",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-25",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-30hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-26",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-26",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-36hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.4,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-27",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-27",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-25hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-hhs-series-central-ducted-cfg-28",
      slug: "multi-mfg-hhs-series-central-ducted-cfg-28",
      modelId: "multi-mfg-hhs-series-central-ducted",
      outdoorUnitId: "multi-mfg-hhs-25hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-1",
      slug: "multi-mfg-msh-series-wall-single-cfg-1",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-24hd-a",
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
      id: "multi-mfg-msh-series-wall-single-cfg-2",
      slug: "multi-mfg-msh-series-wall-single-cfg-2",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-12hd-a",
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
      id: "multi-mfg-msh-series-wall-single-cfg-3",
      slug: "multi-mfg-msh-series-wall-single-cfg-3",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-09hd-a",
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
      id: "multi-mfg-msh-series-wall-single-cfg-4",
      slug: "multi-mfg-msh-series-wall-single-cfg-4",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-24hd-a",
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
      id: "multi-mfg-msh-series-wall-single-cfg-5",
      slug: "multi-mfg-msh-series-wall-single-cfg-5",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-09hd-a",
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
      id: "multi-mfg-msh-series-wall-single-cfg-6",
      slug: "multi-mfg-msh-series-wall-single-cfg-6",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-09hd-a",
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
      id: "multi-mfg-msh-series-wall-single-cfg-7",
      slug: "multi-mfg-msh-series-wall-single-cfg-7",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-12hd-a",
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
      id: "multi-mfg-msh-series-wall-single-cfg-8",
      slug: "multi-mfg-msh-series-wall-single-cfg-8",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-24hd-a",
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
      id: "multi-mfg-msh-series-wall-single-cfg-9",
      slug: "multi-mfg-msh-series-wall-single-cfg-9",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-12hd-a",
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
      id: "multi-mfg-msh-series-wall-single-cfg-10",
      slug: "multi-mfg-msh-series-wall-single-cfg-10",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-09hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-11",
      slug: "multi-mfg-msh-series-wall-single-cfg-11",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-12hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-12",
      slug: "multi-mfg-msh-series-wall-single-cfg-12",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-24hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-13",
      slug: "multi-mfg-msh-series-wall-single-cfg-13",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-30hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-14",
      slug: "multi-mfg-msh-series-wall-single-cfg-14",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-09hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-15",
      slug: "multi-mfg-msh-series-wall-single-cfg-15",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-12hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-16",
      slug: "multi-mfg-msh-series-wall-single-cfg-16",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-24hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-17",
      slug: "multi-mfg-msh-series-wall-single-cfg-17",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-36hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36600,
      coolingCapacityMaxBtu: 36600,
      seer2: 21.2,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-18",
      slug: "multi-mfg-msh-series-wall-single-cfg-18",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-48hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-19",
      slug: "multi-mfg-msh-series-wall-single-cfg-19",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-09hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-20",
      slug: "multi-mfg-msh-series-wall-single-cfg-20",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-12hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-21",
      slug: "multi-mfg-msh-series-wall-single-cfg-21",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-09hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-22",
      slug: "multi-mfg-msh-series-wall-single-cfg-22",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-12hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-23",
      slug: "multi-mfg-msh-series-wall-single-cfg-23",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-24hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-24",
      slug: "multi-mfg-msh-series-wall-single-cfg-24",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-36hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-25",
      slug: "multi-mfg-msh-series-wall-single-cfg-25",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-48hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-26",
      slug: "multi-mfg-msh-series-wall-single-cfg-26",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-60hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-27",
      slug: "multi-mfg-msh-series-wall-single-cfg-27",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-12hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-28",
      slug: "multi-mfg-msh-series-wall-single-cfg-28",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-24hd-b",
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
      id: "multi-mfg-msh-series-wall-single-cfg-29",
      slug: "multi-mfg-msh-series-wall-single-cfg-29",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-36hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36400,
      coolingCapacityMaxBtu: 36400,
      seer2: 20,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-30",
      slug: "multi-mfg-msh-series-wall-single-cfg-30",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-48hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.5,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-31",
      slug: "multi-mfg-msh-series-wall-single-cfg-31",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-60hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msh-series-wall-single-cfg-32",
      slug: "multi-mfg-msh-series-wall-single-cfg-32",
      modelId: "multi-mfg-msh-series-wall-single",
      outdoorUnitId: "multi-mfg-msh-09hd-b",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-1",
      slug: "multi-mfg-mpc-series-wall-single-cfg-1",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-36mpc4-hh-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-2",
      slug: "multi-mfg-mpc-series-wall-single-cfg-2",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-36mpc4-hh-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-3",
      slug: "multi-mfg-mpc-series-wall-single-cfg-3",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-28mpc3-hh-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-4",
      slug: "multi-mfg-mpc-series-wall-single-cfg-4",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-28mpc3-hh-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-5",
      slug: "multi-mfg-mpc-series-wall-single-cfg-5",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-28mpc3-hh-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-6",
      slug: "multi-mfg-mpc-series-wall-single-cfg-6",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-18mpc2-xx-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-7",
      slug: "multi-mfg-mpc-series-wall-single-cfg-7",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-18mpc2-xx-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-8",
      slug: "multi-mfg-mpc-series-wall-single-cfg-8",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-18mpc2-xx-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-9",
      slug: "multi-mfg-mpc-series-wall-single-cfg-9",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-27mpc3-xx-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-10",
      slug: "multi-mfg-mpc-series-wall-single-cfg-10",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-27mpc3-xx-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-11",
      slug: "multi-mfg-mpc-series-wall-single-cfg-11",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-27mpc3-xx-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-12",
      slug: "multi-mfg-mpc-series-wall-single-cfg-12",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-36mpc4-xx-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-13",
      slug: "multi-mfg-mpc-series-wall-single-cfg-13",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-48mpc5-xx-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-14",
      slug: "multi-mfg-mpc-series-wall-single-cfg-14",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-48mpc5-xx-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-15",
      slug: "multi-mfg-mpc-series-wall-single-cfg-15",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-19mpc2-hh-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-16",
      slug: "multi-mfg-mpc-series-wall-single-cfg-16",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-19mpc2-hh-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-17",
      slug: "multi-mfg-mpc-series-wall-single-cfg-17",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-19mpc2-hh-a",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-18",
      slug: "multi-mfg-mpc-series-wall-single-cfg-18",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-18mpc3-he-b",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-19",
      slug: "multi-mfg-mpc-series-wall-single-cfg-19",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-18mpc3-he-b",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-20",
      slug: "multi-mfg-mpc-series-wall-single-cfg-20",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-18mpc3-he-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-21",
      slug: "multi-mfg-mpc-series-wall-single-cfg-21",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-36mpc5-he-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 23.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-22",
      slug: "multi-mfg-mpc-series-wall-single-cfg-22",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-36mpc5-he-b",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-23",
      slug: "multi-mfg-mpc-series-wall-single-cfg-23",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-36mpc5-he-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 21.55,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-24",
      slug: "multi-mfg-mpc-series-wall-single-cfg-24",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-48mpc6-he-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-25",
      slug: "multi-mfg-mpc-series-wall-single-cfg-25",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-48mpc6-he-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-26",
      slug: "multi-mfg-mpc-series-wall-single-cfg-26",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-48mpc6-he-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.85,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-27",
      slug: "multi-mfg-mpc-series-wall-single-cfg-27",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-27mpc4-hh-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-28",
      slug: "multi-mfg-mpc-series-wall-single-cfg-28",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-27mpc4-hh-b",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-29",
      slug: "multi-mfg-mpc-series-wall-single-cfg-29",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-27mpc4-hh-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 20,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-30",
      slug: "multi-mfg-mpc-series-wall-single-cfg-30",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-36mpc5-hh-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-31",
      slug: "multi-mfg-mpc-series-wall-single-cfg-31",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-36mpc5-hh-b",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-32",
      slug: "multi-mfg-mpc-series-wall-single-cfg-32",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-36mpc5-hh-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.45,
      hspf2: 10.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-33",
      slug: "multi-mfg-mpc-series-wall-single-cfg-33",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-48mpc6-hh-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-34",
      slug: "multi-mfg-mpc-series-wall-single-cfg-34",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-48mpc6-hh-b",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-35",
      slug: "multi-mfg-mpc-series-wall-single-cfg-35",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-48mpc6-hh-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 20.8,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-36",
      slug: "multi-mfg-mpc-series-wall-single-cfg-36",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-55mpc6-hh-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 21.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-mpc-series-wall-single-cfg-37",
      slug: "multi-mfg-mpc-series-wall-single-cfg-37",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-55mpc6-hh-b",
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
      id: "multi-mfg-mpc-series-wall-single-cfg-38",
      slug: "multi-mfg-mpc-series-wall-single-cfg-38",
      modelId: "multi-mfg-mpc-series-wall-single",
      outdoorUnitId: "multi-mfg-55mpc6-hh-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 20.7,
      hspf2: 10.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single-cfg-1",
      slug: "multi-mfg-msz-series-wall-single-cfg-1",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-18msz-m-a",
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
      id: "multi-mfg-msz-series-wall-single-cfg-2",
      slug: "multi-mfg-msz-series-wall-single-cfg-2",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-30msz-m-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single-cfg-3",
      slug: "multi-mfg-msz-series-wall-single-cfg-3",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-18msz-m-b",
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
      id: "multi-mfg-msz-series-wall-single-cfg-4",
      slug: "multi-mfg-msz-series-wall-single-cfg-4",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-24msz-m-b",
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
      id: "multi-mfg-msz-series-wall-single-cfg-5",
      slug: "multi-mfg-msz-series-wall-single-cfg-5",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-18msz-m-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single-cfg-6",
      slug: "multi-mfg-msz-series-wall-single-cfg-6",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-24msz-m-b",
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
      id: "multi-mfg-msz-series-wall-single-cfg-7",
      slug: "multi-mfg-msz-series-wall-single-cfg-7",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-18msz-m-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single-cfg-8",
      slug: "multi-mfg-msz-series-wall-single-cfg-8",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-18msz-m-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single-cfg-9",
      slug: "multi-mfg-msz-series-wall-single-cfg-9",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-24msz-m-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single-cfg-10",
      slug: "multi-mfg-msz-series-wall-single-cfg-10",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-18msz-m-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 23.8,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single-cfg-11",
      slug: "multi-mfg-msz-series-wall-single-cfg-11",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-18msz-m-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single-cfg-12",
      slug: "multi-mfg-msz-series-wall-single-cfg-12",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-24msz-m-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-wall-single-cfg-13",
      slug: "multi-mfg-msz-series-wall-single-cfg-13",
      modelId: "multi-mfg-msz-series-wall-single",
      outdoorUnitId: "multi-mfg-18msz-m-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.2,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "multi-mfg-msz-series-central-ducted-cfg-1",
      slug: "multi-mfg-msz-series-central-ducted-cfg-1",
      modelId: "multi-mfg-msz-series-central-ducted",
      outdoorUnitId: "multi-mfg-18msz-m-b",
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
      id: "multi-mfg-msz-series-central-ducted-cfg-2",
      slug: "multi-mfg-msz-series-central-ducted-cfg-2",
      modelId: "multi-mfg-msz-series-central-ducted",
      outdoorUnitId: "multi-mfg-24msz-m-b",
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
      id: "multi-mfg-mez-series-wall-single-cfg-1",
      slug: "multi-mfg-mez-series-wall-single-cfg-1",
      modelId: "multi-mfg-mez-series-wall-single",
      outdoorUnitId: "multi-mfg-9mez-m-b",
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
      id: "multi-mfg-msu-series-wall-single-cfg-1",
      slug: "multi-mfg-msu-series-wall-single-cfg-1",
      modelId: "multi-mfg-msu-series-wall-single",
      outdoorUnitId: "multi-mfg-msu-36hd-b",
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
      id: "multi-mfg-msu-series-wall-single-cfg-2",
      slug: "multi-mfg-msu-series-wall-single-cfg-2",
      modelId: "multi-mfg-msu-series-wall-single",
      outdoorUnitId: "multi-mfg-msu-48hd-b",
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
      id: "multi-mfg-msu-series-wall-single-cfg-3",
      slug: "multi-mfg-msu-series-wall-single-cfg-3",
      modelId: "multi-mfg-msu-series-wall-single",
      outdoorUnitId: "multi-mfg-msu-48hd-b",
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
      id: "multi-mfg-msu-series-wall-single-cfg-4",
      slug: "multi-mfg-msu-series-wall-single-cfg-4",
      modelId: "multi-mfg-msu-series-wall-single",
      outdoorUnitId: "multi-mfg-msu-48hd-b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19.8,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-1",
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
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-5",
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
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-8",
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
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-10",
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
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hes-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-1",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-2",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-3",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-4",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-5",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-6",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-10",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-12",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-13",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-15",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-16",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-17",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-18",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-19",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-20",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-21",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-22",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-23",
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
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-hhs-series-central-ducted-cfg-28",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-1",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-2",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-3",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-4",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-5",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-6",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-7",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-8",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-9",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-10",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-11",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-12",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-13",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-14",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-15",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-16",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msh-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msh-series-wall-single-cfg-19",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msh-series-wall-single-cfg-21",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-22",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-23",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msh-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msh-series-wall-single-cfg-26",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-27",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-28",
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
      configurationId: "multi-mfg-msh-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msh-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msh-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msh-series-wall-single-cfg-32",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-1",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-2",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-3",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-4",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-5",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-6",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-7",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-8",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-9",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-10",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-11",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-12",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-13",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-14",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-15",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-16",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-17",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-19",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-22",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-23",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-28",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-31",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-34",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-37",
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
      configurationId: "multi-mfg-mpc-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msz-series-wall-single-cfg-1",
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
      configurationId: "multi-mfg-msz-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msz-series-wall-single-cfg-3",
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
      configurationId: "multi-mfg-msz-series-wall-single-cfg-4",
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
      configurationId: "multi-mfg-msz-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msz-series-wall-single-cfg-6",
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
      configurationId: "multi-mfg-msz-series-wall-single-cfg-7",
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
      configurationId: "multi-mfg-msz-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msz-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msz-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msz-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msz-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msz-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msz-series-central-ducted-cfg-1",
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
      configurationId: "multi-mfg-msz-series-central-ducted-cfg-2",
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
      configurationId: "multi-mfg-mez-series-wall-single-cfg-1",
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
      configurationId: "multi-mfg-msu-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "multi-mfg-msu-series-wall-single-cfg-2",
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
      configurationId: "multi-mfg-msu-series-wall-single-cfg-3",
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
      configurationId: "multi-mfg-msu-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.95,
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
