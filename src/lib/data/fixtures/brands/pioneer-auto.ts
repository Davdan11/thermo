import type { BrandDataset } from "../../types";

export const pioneerDataset: BrandDataset = {
  brand: {
    id: "pioneer",
    slug: "pioneer",
    name: "PIONEER",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "pioneer-standard",
      slug: "pioneer-standard",
      name: "Standard",
      brandId: "pioneer",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-dyr-inverter-plus",
      slug: "pioneer-dyr-inverter-plus",
      name: "DYR Inverter Plus",
      brandId: "pioneer",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-yn-series",
      slug: "pioneer-yn-series",
      name: "YN series",
      brandId: "pioneer",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "pioneer-standard-wall-single",
      slug: "pioneer-standard-wall-single",
      name: "Standard",
      seriesId: "pioneer-standard",
      brandId: "pioneer",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5500,
      heatingCapacity5FMaxBtu: 40000,
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
      id: "pioneer-dyr-inverter-plus-central-ducted",
      slug: "pioneer-dyr-inverter-plus-central-ducted",
      name: "DYR Inverter Plus",
      seriesId: "pioneer-dyr-inverter-plus",
      brandId: "pioneer",
      modelNumber: "DYR Inverter Plus",
      normalizedModelNumber: "dyr-inverter-plus",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 31000,
      seer2Min: 16.5,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-yn-series-wall-single",
      slug: "pioneer-yn-series-wall-single",
      name: "YN series",
      seriesId: "pioneer-yn-series",
      brandId: "pioneer",
      modelNumber: "YN series",
      normalizedModelNumber: "yn-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 18.9,
      seer2Max: 23.5,
      hspf2Min: 9,
      hspf2Max: 11.5,
      cop5FMin: 1.85,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "pioneer-yn012amfi22rpd",
      modelNumber: "YN012AMFI22RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn009gmfi22rpd",
      modelNumber: "YN009GMFI22RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn018gmfi22rpd",
      modelNumber: "YN018GMFI22RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn009amfi19rpd",
      modelNumber: "YN009AMFI19RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn018gmfi19rpd",
      modelNumber: "YN018GMFI19RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yh4860ghfd18r2",
      modelNumber: "YH4860GHFD18R2",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn020glfi22m2d",
      modelNumber: "YN020GLFI22M2D",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn030glfi22m3d",
      modelNumber: "YN030GLFI22M3D",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn040glfi22m4d",
      modelNumber: "YN040GLFI22M4D",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn009alfi22rpd",
      modelNumber: "YN009ALFI22RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn012alfi22rpd",
      modelNumber: "YN012ALFI22RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn009glfi22rpd",
      modelNumber: "YN009GLFI22RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn012glfi22rpd",
      modelNumber: "YN012GLFI22RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn018glfi22rpd",
      modelNumber: "YN018GLFI22RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn024glfi22rpd",
      modelNumber: "YN024GLFI22RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn009amfi20rpd",
      modelNumber: "YN009AMFI20RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn009amfi22rpe",
      modelNumber: "YN009AMFI22RPE",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn018gmfi20rpd",
      modelNumber: "YN018GMFI20RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn036gmfi20rpd",
      modelNumber: "YN036GMFI20RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn036gmfi18rue",
      modelNumber: "YN036GMFI18RUE",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn040gmfi22m4e",
      modelNumber: "YN040GMFI22M4E",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn050gmfi22m5e",
      modelNumber: "YN050GMFI22M5E",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-thtu-heatpump24",
      modelNumber: "THTU-HEATPUMP24",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn009ghfi25rph",
      modelNumber: "YN009GHFI25RPH",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn012ghfi25rph",
      modelNumber: "YN012GHFI25RPH",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn018ghfi25rph",
      modelNumber: "YN018GHFI25RPH",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn024ghfi25rph",
      modelNumber: "YN024GHFI25RPH",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-hp36r410a",
      modelNumber: "HP36R410A",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yh1824ghfd18r2",
      modelNumber: "YH1824GHFD18R2",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yh3036ghfd18r2",
      modelNumber: "YH3036GHFD18R2",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yh4248ghfd18r2",
      modelNumber: "YH4248GHFD18R2",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn009gmfi20rpd",
      modelNumber: "YN009GMFI20RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn012amfi22rpe",
      modelNumber: "YN012AMFI22RPE",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn009gmfi22rpe",
      modelNumber: "YN009GMFI22RPE",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn012gmfi22rpe",
      modelNumber: "YN012GMFI22RPE",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn018gmfi22rpe",
      modelNumber: "YN018GMFI22RPE",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn024gmfi22rpe",
      modelNumber: "YN024GMFI22RPE",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn012gmfi20rpd",
      modelNumber: "YN012GMFI20RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn024gmfi20rpd",
      modelNumber: "YN024GMFI20RPD",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn048gmfi18rue",
      modelNumber: "YN048GMFI18RUE",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn020gmfi22m2e",
      modelNumber: "YN020GMFI22M2E",
      brandId: "pioneer",
      refrigerant: null as any,
    },
    {
      id: "pioneer-yn030gmfi22m3e",
      modelNumber: "YN030GMFI22M3E",
      brandId: "pioneer",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "pioneer-standard-wall-single-cfg-1",
      slug: "pioneer-standard-wall-single-cfg-1",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn012amfi22rpd",
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
      id: "pioneer-standard-wall-single-cfg-2",
      slug: "pioneer-standard-wall-single-cfg-2",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn009gmfi22rpd",
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
      id: "pioneer-standard-wall-single-cfg-3",
      slug: "pioneer-standard-wall-single-cfg-3",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn018gmfi22rpd",
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
      id: "pioneer-standard-wall-single-cfg-4",
      slug: "pioneer-standard-wall-single-cfg-4",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn009amfi19rpd",
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
      id: "pioneer-standard-wall-single-cfg-5",
      slug: "pioneer-standard-wall-single-cfg-5",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn018gmfi19rpd",
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
      id: "pioneer-standard-wall-single-cfg-6",
      slug: "pioneer-standard-wall-single-cfg-6",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yh4860ghfd18r2",
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
      id: "pioneer-standard-wall-single-cfg-7",
      slug: "pioneer-standard-wall-single-cfg-7",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn020glfi22m2d",
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
      id: "pioneer-standard-wall-single-cfg-8",
      slug: "pioneer-standard-wall-single-cfg-8",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn030glfi22m3d",
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
      id: "pioneer-standard-wall-single-cfg-9",
      slug: "pioneer-standard-wall-single-cfg-9",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn040glfi22m4d",
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
      id: "pioneer-standard-wall-single-cfg-10",
      slug: "pioneer-standard-wall-single-cfg-10",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn009alfi22rpd",
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
      id: "pioneer-standard-wall-single-cfg-11",
      slug: "pioneer-standard-wall-single-cfg-11",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn012alfi22rpd",
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
      id: "pioneer-standard-wall-single-cfg-12",
      slug: "pioneer-standard-wall-single-cfg-12",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn009glfi22rpd",
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
      id: "pioneer-standard-wall-single-cfg-13",
      slug: "pioneer-standard-wall-single-cfg-13",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn012glfi22rpd",
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
      id: "pioneer-standard-wall-single-cfg-14",
      slug: "pioneer-standard-wall-single-cfg-14",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn018glfi22rpd",
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
      id: "pioneer-standard-wall-single-cfg-15",
      slug: "pioneer-standard-wall-single-cfg-15",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn024glfi22rpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-standard-wall-single-cfg-16",
      slug: "pioneer-standard-wall-single-cfg-16",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn009amfi20rpd",
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
      id: "pioneer-standard-wall-single-cfg-17",
      slug: "pioneer-standard-wall-single-cfg-17",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn009amfi22rpe",
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
      id: "pioneer-standard-wall-single-cfg-18",
      slug: "pioneer-standard-wall-single-cfg-18",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn018gmfi20rpd",
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
      id: "pioneer-standard-wall-single-cfg-19",
      slug: "pioneer-standard-wall-single-cfg-19",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn036gmfi20rpd",
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
      id: "pioneer-standard-wall-single-cfg-20",
      slug: "pioneer-standard-wall-single-cfg-20",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn036gmfi18rue",
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
      id: "pioneer-standard-wall-single-cfg-21",
      slug: "pioneer-standard-wall-single-cfg-21",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn036gmfi18rue",
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
      id: "pioneer-standard-wall-single-cfg-22",
      slug: "pioneer-standard-wall-single-cfg-22",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn036gmfi18rue",
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
      id: "pioneer-standard-wall-single-cfg-23",
      slug: "pioneer-standard-wall-single-cfg-23",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn040gmfi22m4e",
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
      id: "pioneer-standard-wall-single-cfg-24",
      slug: "pioneer-standard-wall-single-cfg-24",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn050gmfi22m5e",
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
      id: "pioneer-standard-wall-single-cfg-25",
      slug: "pioneer-standard-wall-single-cfg-25",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn050gmfi22m5e",
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
      id: "pioneer-standard-wall-single-cfg-26",
      slug: "pioneer-standard-wall-single-cfg-26",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-thtu-heatpump24",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27600,
      coolingCapacityMaxBtu: 27600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-standard-wall-single-cfg-27",
      slug: "pioneer-standard-wall-single-cfg-27",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn009ghfi25rph",
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
      id: "pioneer-standard-wall-single-cfg-28",
      slug: "pioneer-standard-wall-single-cfg-28",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn012ghfi25rph",
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
      id: "pioneer-standard-wall-single-cfg-29",
      slug: "pioneer-standard-wall-single-cfg-29",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn018ghfi25rph",
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
      id: "pioneer-standard-wall-single-cfg-30",
      slug: "pioneer-standard-wall-single-cfg-30",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-yn024ghfi25rph",
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
      id: "pioneer-standard-wall-single-cfg-31",
      slug: "pioneer-standard-wall-single-cfg-31",
      modelId: "pioneer-standard-wall-single",
      outdoorUnitId: "pioneer-hp36r410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27600,
      coolingCapacityMaxBtu: 27600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-dyr-inverter-plus-central-ducted-cfg-1",
      slug: "pioneer-dyr-inverter-plus-central-ducted-cfg-1",
      modelId: "pioneer-dyr-inverter-plus-central-ducted",
      outdoorUnitId: "pioneer-yh1824ghfd18r2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-dyr-inverter-plus-central-ducted-cfg-2",
      slug: "pioneer-dyr-inverter-plus-central-ducted-cfg-2",
      modelId: "pioneer-dyr-inverter-plus-central-ducted",
      outdoorUnitId: "pioneer-yh3036ghfd18r2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-dyr-inverter-plus-central-ducted-cfg-3",
      slug: "pioneer-dyr-inverter-plus-central-ducted-cfg-3",
      modelId: "pioneer-dyr-inverter-plus-central-ducted",
      outdoorUnitId: "pioneer-yh4248ghfd18r2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-yn-series-wall-single-cfg-1",
      slug: "pioneer-yn-series-wall-single-cfg-1",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn009gmfi20rpd",
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
      id: "pioneer-yn-series-wall-single-cfg-2",
      slug: "pioneer-yn-series-wall-single-cfg-2",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn012amfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-3",
      slug: "pioneer-yn-series-wall-single-cfg-3",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn009gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-4",
      slug: "pioneer-yn-series-wall-single-cfg-4",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn012gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-5",
      slug: "pioneer-yn-series-wall-single-cfg-5",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn018gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-6",
      slug: "pioneer-yn-series-wall-single-cfg-6",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn024gmfi22rpe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-yn-series-wall-single-cfg-7",
      slug: "pioneer-yn-series-wall-single-cfg-7",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn009gmfi20rpd",
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
      id: "pioneer-yn-series-wall-single-cfg-8",
      slug: "pioneer-yn-series-wall-single-cfg-8",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn012gmfi20rpd",
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
      id: "pioneer-yn-series-wall-single-cfg-9",
      slug: "pioneer-yn-series-wall-single-cfg-9",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn024gmfi20rpd",
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
      id: "pioneer-yn-series-wall-single-cfg-10",
      slug: "pioneer-yn-series-wall-single-cfg-10",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn048gmfi18rue",
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
      id: "pioneer-yn-series-wall-single-cfg-11",
      slug: "pioneer-yn-series-wall-single-cfg-11",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn048gmfi18rue",
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
      id: "pioneer-yn-series-wall-single-cfg-12",
      slug: "pioneer-yn-series-wall-single-cfg-12",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn048gmfi18rue",
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
      id: "pioneer-yn-series-wall-single-cfg-13",
      slug: "pioneer-yn-series-wall-single-cfg-13",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn020gmfi22m2e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-yn-series-wall-single-cfg-14",
      slug: "pioneer-yn-series-wall-single-cfg-14",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn020gmfi22m2e",
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
      id: "pioneer-yn-series-wall-single-cfg-15",
      slug: "pioneer-yn-series-wall-single-cfg-15",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn020gmfi22m2e",
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
      id: "pioneer-yn-series-wall-single-cfg-16",
      slug: "pioneer-yn-series-wall-single-cfg-16",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn030gmfi22m3e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-yn-series-wall-single-cfg-17",
      slug: "pioneer-yn-series-wall-single-cfg-17",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn030gmfi22m3e",
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
      id: "pioneer-yn-series-wall-single-cfg-18",
      slug: "pioneer-yn-series-wall-single-cfg-18",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn030gmfi22m3e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "pioneer-yn-series-wall-single-cfg-19",
      slug: "pioneer-yn-series-wall-single-cfg-19",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn009gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-20",
      slug: "pioneer-yn-series-wall-single-cfg-20",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn012gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-21",
      slug: "pioneer-yn-series-wall-single-cfg-21",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn018gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-22",
      slug: "pioneer-yn-series-wall-single-cfg-22",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn024gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-23",
      slug: "pioneer-yn-series-wall-single-cfg-23",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn012gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-24",
      slug: "pioneer-yn-series-wall-single-cfg-24",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn018gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-25",
      slug: "pioneer-yn-series-wall-single-cfg-25",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn024gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-26",
      slug: "pioneer-yn-series-wall-single-cfg-26",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn009gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-27",
      slug: "pioneer-yn-series-wall-single-cfg-27",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn012gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-28",
      slug: "pioneer-yn-series-wall-single-cfg-28",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn018gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-29",
      slug: "pioneer-yn-series-wall-single-cfg-29",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn024gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-30",
      slug: "pioneer-yn-series-wall-single-cfg-30",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn024gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-31",
      slug: "pioneer-yn-series-wall-single-cfg-31",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn018gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-32",
      slug: "pioneer-yn-series-wall-single-cfg-32",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn012gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-33",
      slug: "pioneer-yn-series-wall-single-cfg-33",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn009gmfi22rpe",
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
      id: "pioneer-yn-series-wall-single-cfg-34",
      slug: "pioneer-yn-series-wall-single-cfg-34",
      modelId: "pioneer-yn-series-wall-single",
      outdoorUnitId: "pioneer-yn018gmfi22rpe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 22.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "pioneer-standard-wall-single-cfg-1",
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
      configurationId: "pioneer-standard-wall-single-cfg-2",
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
      configurationId: "pioneer-standard-wall-single-cfg-3",
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
      configurationId: "pioneer-standard-wall-single-cfg-4",
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
      configurationId: "pioneer-standard-wall-single-cfg-5",
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
      configurationId: "pioneer-standard-wall-single-cfg-6",
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
      configurationId: "pioneer-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-9",
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
      configurationId: "pioneer-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-11",
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
      configurationId: "pioneer-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-16",
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
      configurationId: "pioneer-standard-wall-single-cfg-17",
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
      configurationId: "pioneer-standard-wall-single-cfg-18",
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
      configurationId: "pioneer-standard-wall-single-cfg-19",
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
      configurationId: "pioneer-standard-wall-single-cfg-20",
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
      configurationId: "pioneer-standard-wall-single-cfg-21",
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
      configurationId: "pioneer-standard-wall-single-cfg-22",
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
      configurationId: "pioneer-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-24",
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
      configurationId: "pioneer-standard-wall-single-cfg-25",
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
      configurationId: "pioneer-standard-wall-single-cfg-26",
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
      configurationId: "pioneer-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-28",
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
      configurationId: "pioneer-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-standard-wall-single-cfg-31",
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
      configurationId: "pioneer-dyr-inverter-plus-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-dyr-inverter-plus-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-dyr-inverter-plus-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-yn-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-yn-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-yn-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-yn-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8200,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-yn-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-yn-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-yn-series-wall-single-cfg-7",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-8",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-9",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-10",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-11",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-12",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-13",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-14",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "pioneer-yn-series-wall-single-cfg-16",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-17",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-18",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-19",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-20",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-21",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-22",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-23",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-24",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-25",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-26",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-27",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-28",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-29",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-30",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-31",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-32",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-33",
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
      configurationId: "pioneer-yn-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2.32,
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
