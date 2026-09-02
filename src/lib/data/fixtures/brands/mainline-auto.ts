import type { BrandDataset } from "../../types";

export const mainlineDataset: BrandDataset = {
  brand: {
    id: "mainline",
    slug: "mainline",
    name: "MAINLINE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "mainline-ml-series",
      slug: "mainline-ml-series",
      name: "ML Series",
      brandId: "mainline",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-standard",
      slug: "mainline-standard",
      name: "Standard",
      brandId: "mainline",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "mainline-ml-series-central-ducted",
      slug: "mainline-ml-series-central-ducted",
      name: "ML Series",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series",
      normalizedModelNumber: "ml-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 11800,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19.7,
      hspf2Min: 8.1,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single",
      slug: "mainline-ml-series-wall-single",
      name: "ML Series",
      seriesId: "mainline-ml-series",
      brandId: "mainline",
      modelNumber: "ML Series",
      normalizedModelNumber: "ml-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 35,
      hspf2Min: 8.5,
      hspf2Max: 16.2,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-standard-wall-single",
      slug: "mainline-standard-wall-single",
      name: "Standard",
      seriesId: "mainline-standard",
      brandId: "mainline",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 40500,
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
    }
  ],
  outdoorUnits: [
    {
      id: "mainline-ml18hp230nex-o",
      modelNumber: "ML18HP230NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230nex-o",
      modelNumber: "ML24HP230NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230nexh-o",
      modelNumber: "ML18HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230nexh-o",
      modelNumber: "ML24HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml33hp230nexh-o",
      modelNumber: "ML33HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230lcm-o",
      modelNumber: "ML48HP230LCM-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230lcmh-o",
      modelNumber: "ML36HP230LCMH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230lcmh-o",
      modelNumber: "ML48HP230LCMH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml60hp230lcmh-o",
      modelNumber: "ML60HP230LCMH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230lmnt-o",
      modelNumber: "ML18HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230lmnt-o",
      modelNumber: "ML24HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml30hp230lmnt-o",
      modelNumber: "ML30HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230lmnt-o",
      modelNumber: "ML36HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230lmnt-o",
      modelNumber: "ML48HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml60hp230lmnt-o",
      modelNumber: "ML60HP230LMNT-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230lmnth-o",
      modelNumber: "ML18HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230lmnth-o",
      modelNumber: "ML24HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml30hp230lmnth-o",
      modelNumber: "ML30HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml33hp230lmnth-o",
      modelNumber: "ML33HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230lmnth-o",
      modelNumber: "ML36HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml42hp230lmnth-o",
      modelNumber: "ML42HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230lmnth-o",
      modelNumber: "ML48HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml50hp230lmnth-o",
      modelNumber: "ML50HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml60hp230lmnth-o",
      modelNumber: "ML60HP230LMNTH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml30hp230gen-o",
      modelNumber: "ML30HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230lcm-o",
      modelNumber: "ML36HP230LCM-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230win-o",
      modelNumber: "ML09HP230WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230win-o",
      modelNumber: "ML24HP230WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp115gen-o",
      modelNumber: "ML09HP115GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230gen-o",
      modelNumber: "ML09HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230gen-o",
      modelNumber: "ML12HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230gen-o",
      modelNumber: "ML18HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230gen-o",
      modelNumber: "ML24HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp115nex-o",
      modelNumber: "ML12HP115NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230nex-o",
      modelNumber: "ML09HP230NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230nex-o",
      modelNumber: "ML12HP230NEX-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml06hp230nexh-o",
      modelNumber: "ML06HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230nexh-o",
      modelNumber: "ML09HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230nexh-o",
      modelNumber: "ML12HP230NEXH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml06hp230calh-o",
      modelNumber: "ML06HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp230calh-o",
      modelNumber: "ML09HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230calh-o",
      modelNumber: "ML12HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230calh-o",
      modelNumber: "ML18HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml24hp230calh-o",
      modelNumber: "ML24HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml33hp230calh-o",
      modelNumber: "ML33HP230CALH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230mul-o",
      modelNumber: "ML18HP230MUL-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml27hp230mul-o",
      modelNumber: "ML27HP230MUL-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230mul-o",
      modelNumber: "ML36HP230MUL-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230mul-o",
      modelNumber: "ML48HP230MUL-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230mulh-o",
      modelNumber: "ML18HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml27hp230mulh-o",
      modelNumber: "ML27HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230mulh-o",
      modelNumber: "ML36HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml48hp230mulh-o",
      modelNumber: "ML48HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml55hp230mulh-o",
      modelNumber: "ML55HP230MULH-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml36hp230gen-o",
      modelNumber: "ML36HP230GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml60hp230lcm-o",
      modelNumber: "ML60HP230LCM-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml09hp115win-o",
      modelNumber: "ML09HP115WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp115win-o",
      modelNumber: "ML12HP115WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp230win-o",
      modelNumber: "ML12HP230WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml18hp230win-o",
      modelNumber: "ML18HP230WIN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml12hp115gen-o",
      modelNumber: "ML12HP115GEN-O",
      brandId: "mainline",
      refrigerant: null as any,
    },
    {
      id: "mainline-ml55hp230mul-o",
      modelNumber: "ML55HP230MUL-O",
      brandId: "mainline",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "mainline-ml-series-central-ducted-cfg-1",
      slug: "mainline-ml-series-central-ducted-cfg-1",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-central-ducted-cfg-2",
      slug: "mainline-ml-series-central-ducted-cfg-2",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-central-ducted-cfg-3",
      slug: "mainline-ml-series-central-ducted-cfg-3",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-central-ducted-cfg-4",
      slug: "mainline-ml-series-central-ducted-cfg-4",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-central-ducted-cfg-5",
      slug: "mainline-ml-series-central-ducted-cfg-5",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml33hp230nexh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-cfg-6",
      slug: "mainline-ml-series-central-ducted-cfg-6",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lcm-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-cfg-7",
      slug: "mainline-ml-series-central-ducted-cfg-7",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-cfg-8",
      slug: "mainline-ml-series-central-ducted-cfg-8",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-cfg-9",
      slug: "mainline-ml-series-central-ducted-cfg-9",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml60hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-cfg-10",
      slug: "mainline-ml-series-central-ducted-cfg-10",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-11",
      slug: "mainline-ml-series-central-ducted-cfg-11",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-12",
      slug: "mainline-ml-series-central-ducted-cfg-12",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-13",
      slug: "mainline-ml-series-central-ducted-cfg-13",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-14",
      slug: "mainline-ml-series-central-ducted-cfg-14",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-15",
      slug: "mainline-ml-series-central-ducted-cfg-15",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml60hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-16",
      slug: "mainline-ml-series-central-ducted-cfg-16",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-17",
      slug: "mainline-ml-series-central-ducted-cfg-17",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-18",
      slug: "mainline-ml-series-central-ducted-cfg-18",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-19",
      slug: "mainline-ml-series-central-ducted-cfg-19",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml33hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-cfg-20",
      slug: "mainline-ml-series-central-ducted-cfg-20",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-21",
      slug: "mainline-ml-series-central-ducted-cfg-21",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml42hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-22",
      slug: "mainline-ml-series-central-ducted-cfg-22",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-23",
      slug: "mainline-ml-series-central-ducted-cfg-23",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml50hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-cfg-24",
      slug: "mainline-ml-series-central-ducted-cfg-24",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml60hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-25",
      slug: "mainline-ml-series-central-ducted-cfg-25",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-cfg-26",
      slug: "mainline-ml-series-central-ducted-cfg-26",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-cfg-27",
      slug: "mainline-ml-series-central-ducted-cfg-27",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lcmh-o",
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
      id: "mainline-ml-series-central-ducted-cfg-28",
      slug: "mainline-ml-series-central-ducted-cfg-28",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-29",
      slug: "mainline-ml-series-central-ducted-cfg-29",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-30",
      slug: "mainline-ml-series-central-ducted-cfg-30",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-31",
      slug: "mainline-ml-series-central-ducted-cfg-31",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml33hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-32",
      slug: "mainline-ml-series-central-ducted-cfg-32",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-cfg-33",
      slug: "mainline-ml-series-central-ducted-cfg-33",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-34",
      slug: "mainline-ml-series-central-ducted-cfg-34",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml60hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-35",
      slug: "mainline-ml-series-central-ducted-cfg-35",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-36",
      slug: "mainline-ml-series-central-ducted-cfg-36",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-37",
      slug: "mainline-ml-series-central-ducted-cfg-37",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-38",
      slug: "mainline-ml-series-central-ducted-cfg-38",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-39",
      slug: "mainline-ml-series-central-ducted-cfg-39",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-40",
      slug: "mainline-ml-series-central-ducted-cfg-40",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-41",
      slug: "mainline-ml-series-central-ducted-cfg-41",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-42",
      slug: "mainline-ml-series-central-ducted-cfg-42",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-43",
      slug: "mainline-ml-series-central-ducted-cfg-43",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-44",
      slug: "mainline-ml-series-central-ducted-cfg-44",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-45",
      slug: "mainline-ml-series-central-ducted-cfg-45",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-46",
      slug: "mainline-ml-series-central-ducted-cfg-46",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-47",
      slug: "mainline-ml-series-central-ducted-cfg-47",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-48",
      slug: "mainline-ml-series-central-ducted-cfg-48",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-49",
      slug: "mainline-ml-series-central-ducted-cfg-49",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-50",
      slug: "mainline-ml-series-central-ducted-cfg-50",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-51",
      slug: "mainline-ml-series-central-ducted-cfg-51",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-52",
      slug: "mainline-ml-series-central-ducted-cfg-52",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-53",
      slug: "mainline-ml-series-central-ducted-cfg-53",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-54",
      slug: "mainline-ml-series-central-ducted-cfg-54",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-55",
      slug: "mainline-ml-series-central-ducted-cfg-55",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-56",
      slug: "mainline-ml-series-central-ducted-cfg-56",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-57",
      slug: "mainline-ml-series-central-ducted-cfg-57",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-58",
      slug: "mainline-ml-series-central-ducted-cfg-58",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-59",
      slug: "mainline-ml-series-central-ducted-cfg-59",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-60",
      slug: "mainline-ml-series-central-ducted-cfg-60",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml24hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-61",
      slug: "mainline-ml-series-central-ducted-cfg-61",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-62",
      slug: "mainline-ml-series-central-ducted-cfg-62",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-63",
      slug: "mainline-ml-series-central-ducted-cfg-63",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-64",
      slug: "mainline-ml-series-central-ducted-cfg-64",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-65",
      slug: "mainline-ml-series-central-ducted-cfg-65",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-66",
      slug: "mainline-ml-series-central-ducted-cfg-66",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml60hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-67",
      slug: "mainline-ml-series-central-ducted-cfg-67",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml60hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-68",
      slug: "mainline-ml-series-central-ducted-cfg-68",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-69",
      slug: "mainline-ml-series-central-ducted-cfg-69",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-70",
      slug: "mainline-ml-series-central-ducted-cfg-70",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-71",
      slug: "mainline-ml-series-central-ducted-cfg-71",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-72",
      slug: "mainline-ml-series-central-ducted-cfg-72",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-73",
      slug: "mainline-ml-series-central-ducted-cfg-73",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-74",
      slug: "mainline-ml-series-central-ducted-cfg-74",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml18hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-75",
      slug: "mainline-ml-series-central-ducted-cfg-75",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-central-ducted-cfg-76",
      slug: "mainline-ml-series-central-ducted-cfg-76",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-77",
      slug: "mainline-ml-series-central-ducted-cfg-77",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-78",
      slug: "mainline-ml-series-central-ducted-cfg-78",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-79",
      slug: "mainline-ml-series-central-ducted-cfg-79",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-80",
      slug: "mainline-ml-series-central-ducted-cfg-80",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml30hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-81",
      slug: "mainline-ml-series-central-ducted-cfg-81",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml36hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-82",
      slug: "mainline-ml-series-central-ducted-cfg-82",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnt-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-central-ducted-cfg-83",
      slug: "mainline-ml-series-central-ducted-cfg-83",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-84",
      slug: "mainline-ml-series-central-ducted-cfg-84",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml60hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-85",
      slug: "mainline-ml-series-central-ducted-cfg-85",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml60hp230lmnt-o",
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
      id: "mainline-ml-series-central-ducted-cfg-86",
      slug: "mainline-ml-series-central-ducted-cfg-86",
      modelId: "mainline-ml-series-central-ducted",
      outdoorUnitId: "mainline-ml48hp230lmnth-o",
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
      id: "mainline-ml-series-wall-single-cfg-1",
      slug: "mainline-ml-series-wall-single-cfg-1",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml30hp230gen-o",
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
      id: "mainline-ml-series-wall-single-cfg-2",
      slug: "mainline-ml-series-wall-single-cfg-2",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-cfg-3",
      slug: "mainline-ml-series-wall-single-cfg-3",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230win-o",
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
      id: "mainline-ml-series-wall-single-cfg-4",
      slug: "mainline-ml-series-wall-single-cfg-4",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230win-o",
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
      id: "mainline-ml-series-wall-single-cfg-5",
      slug: "mainline-ml-series-wall-single-cfg-5",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp115gen-o",
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
      id: "mainline-ml-series-wall-single-cfg-6",
      slug: "mainline-ml-series-wall-single-cfg-6",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230gen-o",
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
      id: "mainline-ml-series-wall-single-cfg-7",
      slug: "mainline-ml-series-wall-single-cfg-7",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230gen-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.3,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-8",
      slug: "mainline-ml-series-wall-single-cfg-8",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230gen-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.2,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-9",
      slug: "mainline-ml-series-wall-single-cfg-9",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230gen-o",
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
      id: "mainline-ml-series-wall-single-cfg-10",
      slug: "mainline-ml-series-wall-single-cfg-10",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml30hp230gen-o",
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
      id: "mainline-ml-series-wall-single-cfg-11",
      slug: "mainline-ml-series-wall-single-cfg-11",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp115nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-12",
      slug: "mainline-ml-series-wall-single-cfg-12",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-13",
      slug: "mainline-ml-series-wall-single-cfg-13",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-14",
      slug: "mainline-ml-series-wall-single-cfg-14",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-15",
      slug: "mainline-ml-series-wall-single-cfg-15",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-16",
      slug: "mainline-ml-series-wall-single-cfg-16",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml06hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-17",
      slug: "mainline-ml-series-wall-single-cfg-17",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-18",
      slug: "mainline-ml-series-wall-single-cfg-18",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-19",
      slug: "mainline-ml-series-wall-single-cfg-19",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-20",
      slug: "mainline-ml-series-wall-single-cfg-20",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-21",
      slug: "mainline-ml-series-wall-single-cfg-21",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml33hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-22",
      slug: "mainline-ml-series-wall-single-cfg-22",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml06hp230calh-o",
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
      id: "mainline-ml-series-wall-single-cfg-23",
      slug: "mainline-ml-series-wall-single-cfg-23",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230calh-o",
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
      id: "mainline-ml-series-wall-single-cfg-24",
      slug: "mainline-ml-series-wall-single-cfg-24",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230calh-o",
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
      id: "mainline-ml-series-wall-single-cfg-25",
      slug: "mainline-ml-series-wall-single-cfg-25",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230calh-o",
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
      id: "mainline-ml-series-wall-single-cfg-26",
      slug: "mainline-ml-series-wall-single-cfg-26",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230calh-o",
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
      id: "mainline-ml-series-wall-single-cfg-27",
      slug: "mainline-ml-series-wall-single-cfg-27",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml33hp230calh-o",
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
      id: "mainline-ml-series-wall-single-cfg-28",
      slug: "mainline-ml-series-wall-single-cfg-28",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-29",
      slug: "mainline-ml-series-wall-single-cfg-29",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-30",
      slug: "mainline-ml-series-wall-single-cfg-30",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-31",
      slug: "mainline-ml-series-wall-single-cfg-31",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-32",
      slug: "mainline-ml-series-wall-single-cfg-32",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-33",
      slug: "mainline-ml-series-wall-single-cfg-33",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-34",
      slug: "mainline-ml-series-wall-single-cfg-34",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-35",
      slug: "mainline-ml-series-wall-single-cfg-35",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-36",
      slug: "mainline-ml-series-wall-single-cfg-36",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-37",
      slug: "mainline-ml-series-wall-single-cfg-37",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-38",
      slug: "mainline-ml-series-wall-single-cfg-38",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-39",
      slug: "mainline-ml-series-wall-single-cfg-39",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 13.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-40",
      slug: "mainline-ml-series-wall-single-cfg-40",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-41",
      slug: "mainline-ml-series-wall-single-cfg-41",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-42",
      slug: "mainline-ml-series-wall-single-cfg-42",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-43",
      slug: "mainline-ml-series-wall-single-cfg-43",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-44",
      slug: "mainline-ml-series-wall-single-cfg-44",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.1,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-45",
      slug: "mainline-ml-series-wall-single-cfg-45",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nex-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-46",
      slug: "mainline-ml-series-wall-single-cfg-46",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nex-o",
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
      id: "mainline-ml-series-wall-single-cfg-47",
      slug: "mainline-ml-series-wall-single-cfg-47",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-48",
      slug: "mainline-ml-series-wall-single-cfg-48",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-49",
      slug: "mainline-ml-series-wall-single-cfg-49",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-50",
      slug: "mainline-ml-series-wall-single-cfg-50",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-51",
      slug: "mainline-ml-series-wall-single-cfg-51",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml06hp230nexh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 21.4,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-52",
      slug: "mainline-ml-series-wall-single-cfg-52",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-53",
      slug: "mainline-ml-series-wall-single-cfg-53",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-54",
      slug: "mainline-ml-series-wall-single-cfg-54",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-55",
      slug: "mainline-ml-series-wall-single-cfg-55",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-56",
      slug: "mainline-ml-series-wall-single-cfg-56",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-57",
      slug: "mainline-ml-series-wall-single-cfg-57",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-58",
      slug: "mainline-ml-series-wall-single-cfg-58",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-59",
      slug: "mainline-ml-series-wall-single-cfg-59",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-60",
      slug: "mainline-ml-series-wall-single-cfg-60",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-61",
      slug: "mainline-ml-series-wall-single-cfg-61",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-62",
      slug: "mainline-ml-series-wall-single-cfg-62",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-63",
      slug: "mainline-ml-series-wall-single-cfg-63",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml24hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-64",
      slug: "mainline-ml-series-wall-single-cfg-64",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml06hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-65",
      slug: "mainline-ml-series-wall-single-cfg-65",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml09hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-66",
      slug: "mainline-ml-series-wall-single-cfg-66",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml12hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-67",
      slug: "mainline-ml-series-wall-single-cfg-67",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230nexh-o",
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
      id: "mainline-ml-series-wall-single-cfg-68",
      slug: "mainline-ml-series-wall-single-cfg-68",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-cfg-69",
      slug: "mainline-ml-series-wall-single-cfg-69",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230lcm-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-70",
      slug: "mainline-ml-series-wall-single-cfg-70",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-cfg-71",
      slug: "mainline-ml-series-wall-single-cfg-71",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-cfg-72",
      slug: "mainline-ml-series-wall-single-cfg-72",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230lcm-o",
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
      id: "mainline-ml-series-wall-single-cfg-73",
      slug: "mainline-ml-series-wall-single-cfg-73",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230lcm-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19.8,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-74",
      slug: "mainline-ml-series-wall-single-cfg-74",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230lcmh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-75",
      slug: "mainline-ml-series-wall-single-cfg-75",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230lcmh-o",
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
      id: "mainline-ml-series-wall-single-cfg-76",
      slug: "mainline-ml-series-wall-single-cfg-76",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml60hp230lcmh-o",
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
      id: "mainline-ml-series-wall-single-cfg-77",
      slug: "mainline-ml-series-wall-single-cfg-77",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230lcmh-o",
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
      id: "mainline-ml-series-wall-single-cfg-78",
      slug: "mainline-ml-series-wall-single-cfg-78",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml60hp230lcmh-o",
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
      id: "mainline-ml-series-wall-single-cfg-79",
      slug: "mainline-ml-series-wall-single-cfg-79",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-80",
      slug: "mainline-ml-series-wall-single-cfg-80",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-81",
      slug: "mainline-ml-series-wall-single-cfg-81",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-82",
      slug: "mainline-ml-series-wall-single-cfg-82",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-83",
      slug: "mainline-ml-series-wall-single-cfg-83",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-84",
      slug: "mainline-ml-series-wall-single-cfg-84",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26200,
      coolingCapacityMaxBtu: 26200,
      seer2: 22,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-85",
      slug: "mainline-ml-series-wall-single-cfg-85",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-86",
      slug: "mainline-ml-series-wall-single-cfg-86",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-87",
      slug: "mainline-ml-series-wall-single-cfg-87",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-88",
      slug: "mainline-ml-series-wall-single-cfg-88",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-89",
      slug: "mainline-ml-series-wall-single-cfg-89",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-90",
      slug: "mainline-ml-series-wall-single-cfg-90",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-91",
      slug: "mainline-ml-series-wall-single-cfg-91",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-92",
      slug: "mainline-ml-series-wall-single-cfg-92",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-93",
      slug: "mainline-ml-series-wall-single-cfg-93",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-94",
      slug: "mainline-ml-series-wall-single-cfg-94",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-95",
      slug: "mainline-ml-series-wall-single-cfg-95",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-96",
      slug: "mainline-ml-series-wall-single-cfg-96",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-97",
      slug: "mainline-ml-series-wall-single-cfg-97",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-98",
      slug: "mainline-ml-series-wall-single-cfg-98",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-99",
      slug: "mainline-ml-series-wall-single-cfg-99",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-100",
      slug: "mainline-ml-series-wall-single-cfg-100",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-101",
      slug: "mainline-ml-series-wall-single-cfg-101",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-102",
      slug: "mainline-ml-series-wall-single-cfg-102",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-103",
      slug: "mainline-ml-series-wall-single-cfg-103",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-104",
      slug: "mainline-ml-series-wall-single-cfg-104",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-105",
      slug: "mainline-ml-series-wall-single-cfg-105",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-106",
      slug: "mainline-ml-series-wall-single-cfg-106",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-107",
      slug: "mainline-ml-series-wall-single-cfg-107",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-108",
      slug: "mainline-ml-series-wall-single-cfg-108",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-109",
      slug: "mainline-ml-series-wall-single-cfg-109",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-110",
      slug: "mainline-ml-series-wall-single-cfg-110",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-111",
      slug: "mainline-ml-series-wall-single-cfg-111",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-112",
      slug: "mainline-ml-series-wall-single-cfg-112",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-113",
      slug: "mainline-ml-series-wall-single-cfg-113",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-114",
      slug: "mainline-ml-series-wall-single-cfg-114",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-115",
      slug: "mainline-ml-series-wall-single-cfg-115",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 24,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-116",
      slug: "mainline-ml-series-wall-single-cfg-116",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mul-o",
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
      id: "mainline-ml-series-wall-single-cfg-117",
      slug: "mainline-ml-series-wall-single-cfg-117",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 22.2,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mainline-ml-series-wall-single-cfg-118",
      slug: "mainline-ml-series-wall-single-cfg-118",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-119",
      slug: "mainline-ml-series-wall-single-cfg-119",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-120",
      slug: "mainline-ml-series-wall-single-cfg-120",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml18hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-121",
      slug: "mainline-ml-series-wall-single-cfg-121",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-122",
      slug: "mainline-ml-series-wall-single-cfg-122",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-123",
      slug: "mainline-ml-series-wall-single-cfg-123",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml27hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-124",
      slug: "mainline-ml-series-wall-single-cfg-124",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-125",
      slug: "mainline-ml-series-wall-single-cfg-125",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-126",
      slug: "mainline-ml-series-wall-single-cfg-126",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml36hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-127",
      slug: "mainline-ml-series-wall-single-cfg-127",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-128",
      slug: "mainline-ml-series-wall-single-cfg-128",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-129",
      slug: "mainline-ml-series-wall-single-cfg-129",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml48hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-130",
      slug: "mainline-ml-series-wall-single-cfg-130",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-131",
      slug: "mainline-ml-series-wall-single-cfg-131",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-ml-series-wall-single-cfg-132",
      slug: "mainline-ml-series-wall-single-cfg-132",
      modelId: "mainline-ml-series-wall-single",
      outdoorUnitId: "mainline-ml55hp230mulh-o",
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
      id: "mainline-standard-wall-single-cfg-1",
      slug: "mainline-standard-wall-single-cfg-1",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml36hp230gen-o",
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
      id: "mainline-standard-wall-single-cfg-2",
      slug: "mainline-standard-wall-single-cfg-2",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml60hp230lcm-o",
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
      id: "mainline-standard-wall-single-cfg-3",
      slug: "mainline-standard-wall-single-cfg-3",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml09hp115win-o",
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
      id: "mainline-standard-wall-single-cfg-4",
      slug: "mainline-standard-wall-single-cfg-4",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml12hp115win-o",
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
      id: "mainline-standard-wall-single-cfg-5",
      slug: "mainline-standard-wall-single-cfg-5",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml12hp230win-o",
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
      id: "mainline-standard-wall-single-cfg-6",
      slug: "mainline-standard-wall-single-cfg-6",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml18hp230win-o",
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
      id: "mainline-standard-wall-single-cfg-7",
      slug: "mainline-standard-wall-single-cfg-7",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml12hp115gen-o",
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
      id: "mainline-standard-wall-single-cfg-8",
      slug: "mainline-standard-wall-single-cfg-8",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml36hp230gen-o",
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
      id: "mainline-standard-wall-single-cfg-9",
      slug: "mainline-standard-wall-single-cfg-9",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml60hp230lcm-o",
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
      id: "mainline-standard-wall-single-cfg-10",
      slug: "mainline-standard-wall-single-cfg-10",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml60hp230lcm-o",
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
      id: "mainline-standard-wall-single-cfg-11",
      slug: "mainline-standard-wall-single-cfg-11",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-cfg-12",
      slug: "mainline-standard-wall-single-cfg-12",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-cfg-13",
      slug: "mainline-standard-wall-single-cfg-13",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-cfg-14",
      slug: "mainline-standard-wall-single-cfg-14",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-cfg-15",
      slug: "mainline-standard-wall-single-cfg-15",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml55hp230mul-o",
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
      id: "mainline-standard-wall-single-cfg-16",
      slug: "mainline-standard-wall-single-cfg-16",
      modelId: "mainline-standard-wall-single",
      outdoorUnitId: "mainline-ml55hp230mul-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-1",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-2",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-3",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-4",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-5",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-7",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-8",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-9",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-10",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-11",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-14",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-15",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-16",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-17",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-18",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-20",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-21",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-22",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-23",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-24",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-28",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-29",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-30",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-31",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-32",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-33",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-34",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-35",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-36",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-37",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-39",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-40",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-41",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-42",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-43",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-44",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-45",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-46",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-48",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-49",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-50",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-51",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-52",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-55",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-56",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-57",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-58",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-59",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-60",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-62",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-63",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-64",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-65",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-66",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-67",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-70",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-71",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-72",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-73",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-74",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-75",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-82",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-central-ducted-cfg-84",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-85",
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
      configurationId: "mainline-ml-series-central-ducted-cfg-86",
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
      configurationId: "mainline-ml-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-2",
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
      configurationId: "mainline-ml-series-wall-single-cfg-3",
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
      configurationId: "mainline-ml-series-wall-single-cfg-4",
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
      configurationId: "mainline-ml-series-wall-single-cfg-5",
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
      configurationId: "mainline-ml-series-wall-single-cfg-6",
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
      configurationId: "mainline-ml-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-9",
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
      configurationId: "mainline-ml-series-wall-single-cfg-10",
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
      configurationId: "mainline-ml-series-wall-single-cfg-11",
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
      configurationId: "mainline-ml-series-wall-single-cfg-12",
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
      configurationId: "mainline-ml-series-wall-single-cfg-13",
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
      configurationId: "mainline-ml-series-wall-single-cfg-14",
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
      configurationId: "mainline-ml-series-wall-single-cfg-15",
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
      configurationId: "mainline-ml-series-wall-single-cfg-16",
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
      configurationId: "mainline-ml-series-wall-single-cfg-17",
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
      configurationId: "mainline-ml-series-wall-single-cfg-18",
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
      configurationId: "mainline-ml-series-wall-single-cfg-19",
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
      configurationId: "mainline-ml-series-wall-single-cfg-20",
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
      configurationId: "mainline-ml-series-wall-single-cfg-21",
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
      configurationId: "mainline-ml-series-wall-single-cfg-22",
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
      configurationId: "mainline-ml-series-wall-single-cfg-23",
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
      configurationId: "mainline-ml-series-wall-single-cfg-24",
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
      configurationId: "mainline-ml-series-wall-single-cfg-25",
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
      configurationId: "mainline-ml-series-wall-single-cfg-26",
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
      configurationId: "mainline-ml-series-wall-single-cfg-27",
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
      configurationId: "mainline-ml-series-wall-single-cfg-28",
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
      configurationId: "mainline-ml-series-wall-single-cfg-29",
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
      configurationId: "mainline-ml-series-wall-single-cfg-30",
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
      configurationId: "mainline-ml-series-wall-single-cfg-31",
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
      configurationId: "mainline-ml-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-34",
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
      configurationId: "mainline-ml-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-37",
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
      configurationId: "mainline-ml-series-wall-single-cfg-38",
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
      configurationId: "mainline-ml-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-41",
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
      configurationId: "mainline-ml-series-wall-single-cfg-42",
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
      configurationId: "mainline-ml-series-wall-single-cfg-43",
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
      configurationId: "mainline-ml-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-46",
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
      configurationId: "mainline-ml-series-wall-single-cfg-47",
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
      configurationId: "mainline-ml-series-wall-single-cfg-48",
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
      configurationId: "mainline-ml-series-wall-single-cfg-49",
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
      configurationId: "mainline-ml-series-wall-single-cfg-50",
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
      configurationId: "mainline-ml-series-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-52",
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
      configurationId: "mainline-ml-series-wall-single-cfg-53",
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
      configurationId: "mainline-ml-series-wall-single-cfg-54",
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
      configurationId: "mainline-ml-series-wall-single-cfg-55",
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
      configurationId: "mainline-ml-series-wall-single-cfg-56",
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
      configurationId: "mainline-ml-series-wall-single-cfg-57",
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
      configurationId: "mainline-ml-series-wall-single-cfg-58",
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
      configurationId: "mainline-ml-series-wall-single-cfg-59",
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
      configurationId: "mainline-ml-series-wall-single-cfg-60",
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
      configurationId: "mainline-ml-series-wall-single-cfg-61",
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
      configurationId: "mainline-ml-series-wall-single-cfg-62",
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
      configurationId: "mainline-ml-series-wall-single-cfg-63",
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
      configurationId: "mainline-ml-series-wall-single-cfg-64",
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
      configurationId: "mainline-ml-series-wall-single-cfg-65",
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
      configurationId: "mainline-ml-series-wall-single-cfg-66",
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
      configurationId: "mainline-ml-series-wall-single-cfg-67",
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
      configurationId: "mainline-ml-series-wall-single-cfg-68",
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
      configurationId: "mainline-ml-series-wall-single-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-71",
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
      configurationId: "mainline-ml-series-wall-single-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-75",
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
      configurationId: "mainline-ml-series-wall-single-cfg-76",
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
      configurationId: "mainline-ml-series-wall-single-cfg-77",
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
      configurationId: "mainline-ml-series-wall-single-cfg-78",
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
      configurationId: "mainline-ml-series-wall-single-cfg-79",
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
      configurationId: "mainline-ml-series-wall-single-cfg-80",
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
      configurationId: "mainline-ml-series-wall-single-cfg-81",
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
      configurationId: "mainline-ml-series-wall-single-cfg-82",
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
      configurationId: "mainline-ml-series-wall-single-cfg-83",
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
      configurationId: "mainline-ml-series-wall-single-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-85",
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
      configurationId: "mainline-ml-series-wall-single-cfg-86",
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
      configurationId: "mainline-ml-series-wall-single-cfg-87",
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
      configurationId: "mainline-ml-series-wall-single-cfg-88",
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
      configurationId: "mainline-ml-series-wall-single-cfg-89",
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
      configurationId: "mainline-ml-series-wall-single-cfg-90",
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
      configurationId: "mainline-ml-series-wall-single-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-92",
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
      configurationId: "mainline-ml-series-wall-single-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-94",
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
      configurationId: "mainline-ml-series-wall-single-cfg-95",
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
      configurationId: "mainline-ml-series-wall-single-cfg-96",
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
      configurationId: "mainline-ml-series-wall-single-cfg-97",
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
      configurationId: "mainline-ml-series-wall-single-cfg-98",
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
      configurationId: "mainline-ml-series-wall-single-cfg-99",
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
      configurationId: "mainline-ml-series-wall-single-cfg-100",
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
      configurationId: "mainline-ml-series-wall-single-cfg-101",
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
      configurationId: "mainline-ml-series-wall-single-cfg-102",
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
      configurationId: "mainline-ml-series-wall-single-cfg-103",
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
      configurationId: "mainline-ml-series-wall-single-cfg-104",
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
      configurationId: "mainline-ml-series-wall-single-cfg-105",
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
      configurationId: "mainline-ml-series-wall-single-cfg-106",
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
      configurationId: "mainline-ml-series-wall-single-cfg-107",
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
      configurationId: "mainline-ml-series-wall-single-cfg-108",
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
      configurationId: "mainline-ml-series-wall-single-cfg-109",
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
      configurationId: "mainline-ml-series-wall-single-cfg-110",
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
      configurationId: "mainline-ml-series-wall-single-cfg-111",
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
      configurationId: "mainline-ml-series-wall-single-cfg-112",
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
      configurationId: "mainline-ml-series-wall-single-cfg-113",
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
      configurationId: "mainline-ml-series-wall-single-cfg-114",
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
      configurationId: "mainline-ml-series-wall-single-cfg-115",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-116",
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
      configurationId: "mainline-ml-series-wall-single-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-ml-series-wall-single-cfg-118",
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
      configurationId: "mainline-ml-series-wall-single-cfg-119",
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
      configurationId: "mainline-ml-series-wall-single-cfg-120",
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
      configurationId: "mainline-ml-series-wall-single-cfg-121",
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
      configurationId: "mainline-ml-series-wall-single-cfg-122",
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
      configurationId: "mainline-ml-series-wall-single-cfg-123",
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
      configurationId: "mainline-ml-series-wall-single-cfg-124",
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
      configurationId: "mainline-ml-series-wall-single-cfg-125",
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
      configurationId: "mainline-ml-series-wall-single-cfg-126",
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
      configurationId: "mainline-ml-series-wall-single-cfg-127",
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
      configurationId: "mainline-ml-series-wall-single-cfg-128",
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
      configurationId: "mainline-ml-series-wall-single-cfg-129",
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
      configurationId: "mainline-ml-series-wall-single-cfg-130",
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
      configurationId: "mainline-ml-series-wall-single-cfg-131",
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
      configurationId: "mainline-ml-series-wall-single-cfg-132",
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
      configurationId: "mainline-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mainline-standard-wall-single-cfg-2",
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
      configurationId: "mainline-standard-wall-single-cfg-3",
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
      configurationId: "mainline-standard-wall-single-cfg-4",
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
      configurationId: "mainline-standard-wall-single-cfg-5",
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
      configurationId: "mainline-standard-wall-single-cfg-6",
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
      configurationId: "mainline-standard-wall-single-cfg-7",
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
      configurationId: "mainline-standard-wall-single-cfg-8",
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
      configurationId: "mainline-standard-wall-single-cfg-9",
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
      configurationId: "mainline-standard-wall-single-cfg-10",
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
      configurationId: "mainline-standard-wall-single-cfg-11",
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
      configurationId: "mainline-standard-wall-single-cfg-12",
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
      configurationId: "mainline-standard-wall-single-cfg-13",
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
      configurationId: "mainline-standard-wall-single-cfg-14",
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
      configurationId: "mainline-standard-wall-single-cfg-15",
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
      configurationId: "mainline-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
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
