import type { BrandDataset } from "../../types";

export const tgmDataset: BrandDataset = {
  brand: {
    id: "tgm",
    slug: "tgm",
    name: "TGM",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "tgm-m-series",
      slug: "tgm-m-series",
      name: "M series",
      brandId: "tgm",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mr-series",
      slug: "tgm-mr-series",
      name: "MR Series",
      brandId: "tgm",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-standard",
      slug: "tgm-standard",
      name: "Standard",
      brandId: "tgm",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mm-series",
      slug: "tgm-mm-series",
      name: "MM Series",
      brandId: "tgm",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mrs-series",
      slug: "tgm-mrs-series",
      name: "MRS Series",
      brandId: "tgm",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "tgm-m-series-wall-single",
      slug: "tgm-m-series-wall-single",
      name: "M series",
      seriesId: "tgm-m-series",
      brandId: "tgm",
      modelNumber: "M series",
      normalizedModelNumber: "m-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 8900,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 18.9,
      seer2Max: 25.5,
      hspf2Min: 9.8,
      hspf2Max: 10.6,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mr-series-wall-single",
      slug: "tgm-mr-series-wall-single",
      name: "MR Series",
      seriesId: "tgm-mr-series",
      brandId: "tgm",
      modelNumber: "MR Series",
      normalizedModelNumber: "mr-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 19,
      seer2Max: 22,
      hspf2Min: 9.7,
      hspf2Max: 11.2,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-standard-wall-single",
      slug: "tgm-standard-wall-single",
      name: "Standard",
      seriesId: "tgm-standard",
      brandId: "tgm",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 23000,
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
      id: "tgm-mm-series-wall-single",
      slug: "tgm-mm-series-wall-single",
      name: "MM Series",
      seriesId: "tgm-mm-series",
      brandId: "tgm",
      modelNumber: "MM Series",
      normalizedModelNumber: "mm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 20,
      seer2Max: 23.5,
      hspf2Min: 9.2,
      hspf2Max: 9.5,
      cop5FMin: 1.68,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mrs-series-wall-single",
      slug: "tgm-mrs-series-wall-single",
      name: "MRS Series",
      seriesId: "tgm-mrs-series",
      brandId: "tgm",
      modelNumber: "MRS Series",
      normalizedModelNumber: "mrs-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 13700,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 17.1,
      seer2Max: 22.3,
      hspf2Min: 9.8,
      hspf2Max: 11.4,
      cop5FMin: 1.95,
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
      id: "tgm-mrapt12as",
      modelNumber: "MRAPT12AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrsvht12as",
      modelNumber: "MRSVHT12AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrsvht18as",
      modelNumber: "MRSVHT18AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrsvht48as",
      modelNumber: "MRSVHT48AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mc4vht18s",
      modelNumber: "MC4VHT18S",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mmrsht18as2",
      modelNumber: "MMRSHT18AS2",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrapt24as",
      modelNumber: "MRAPT24AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrsvht24as",
      modelNumber: "MRSVHT24AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrsvht36as",
      modelNumber: "MRSVHT36AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mr5svht60as",
      modelNumber: "MR5SVHT60AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mmrsht27as3",
      modelNumber: "MMRSHT27AS3",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mmrsht36as4",
      modelNumber: "MMRSHT36AS4",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mmrsht48as5",
      modelNumber: "MMRSHT48AS5",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrs5vht18as",
      modelNumber: "MRS5VHT18AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrs5vht24as",
      modelNumber: "MRS5VHT24AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrs5vht36as",
      modelNumber: "MRS5VHT36AS",
      brandId: "tgm",
      refrigerant: null as any,
    },
    {
      id: "tgm-mrs5vht48as",
      modelNumber: "MRS5VHT48AS",
      brandId: "tgm",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "tgm-m-series-wall-single-cfg-1",
      slug: "tgm-m-series-wall-single-cfg-1",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mrapt12as",
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
      id: "tgm-m-series-wall-single-cfg-2",
      slug: "tgm-m-series-wall-single-cfg-2",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mrsvht12as",
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
      id: "tgm-m-series-wall-single-cfg-3",
      slug: "tgm-m-series-wall-single-cfg-3",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mrsvht18as",
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
      id: "tgm-m-series-wall-single-cfg-4",
      slug: "tgm-m-series-wall-single-cfg-4",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mrsvht48as",
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
      id: "tgm-m-series-wall-single-cfg-5",
      slug: "tgm-m-series-wall-single-cfg-5",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mrsvht12as",
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
      id: "tgm-m-series-wall-single-cfg-6",
      slug: "tgm-m-series-wall-single-cfg-6",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mrsvht18as",
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
      id: "tgm-m-series-wall-single-cfg-7",
      slug: "tgm-m-series-wall-single-cfg-7",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mrsvht48as",
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
      id: "tgm-m-series-wall-single-cfg-8",
      slug: "tgm-m-series-wall-single-cfg-8",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mc4vht18s",
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
      id: "tgm-m-series-wall-single-cfg-9",
      slug: "tgm-m-series-wall-single-cfg-9",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mrsvht48as",
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
      id: "tgm-m-series-wall-single-cfg-10",
      slug: "tgm-m-series-wall-single-cfg-10",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mmrsht18as2",
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
      id: "tgm-m-series-wall-single-cfg-11",
      slug: "tgm-m-series-wall-single-cfg-11",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mmrsht18as2",
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
      id: "tgm-m-series-wall-single-cfg-12",
      slug: "tgm-m-series-wall-single-cfg-12",
      modelId: "tgm-m-series-wall-single",
      outdoorUnitId: "tgm-mmrsht18as2",
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
      id: "tgm-mr-series-wall-single-cfg-1",
      slug: "tgm-mr-series-wall-single-cfg-1",
      modelId: "tgm-mr-series-wall-single",
      outdoorUnitId: "tgm-mrapt24as",
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
      id: "tgm-mr-series-wall-single-cfg-2",
      slug: "tgm-mr-series-wall-single-cfg-2",
      modelId: "tgm-mr-series-wall-single",
      outdoorUnitId: "tgm-mrsvht24as",
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
      id: "tgm-mr-series-wall-single-cfg-3",
      slug: "tgm-mr-series-wall-single-cfg-3",
      modelId: "tgm-mr-series-wall-single",
      outdoorUnitId: "tgm-mrsvht24as",
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
      id: "tgm-mr-series-wall-single-cfg-4",
      slug: "tgm-mr-series-wall-single-cfg-4",
      modelId: "tgm-mr-series-wall-single",
      outdoorUnitId: "tgm-mrsvht24as",
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
      id: "tgm-standard-wall-single-cfg-1",
      slug: "tgm-standard-wall-single-cfg-1",
      modelId: "tgm-standard-wall-single",
      outdoorUnitId: "tgm-mrsvht36as",
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
      id: "tgm-standard-wall-single-cfg-2",
      slug: "tgm-standard-wall-single-cfg-2",
      modelId: "tgm-standard-wall-single",
      outdoorUnitId: "tgm-mrsvht36as",
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
      id: "tgm-standard-wall-single-cfg-3",
      slug: "tgm-standard-wall-single-cfg-3",
      modelId: "tgm-standard-wall-single",
      outdoorUnitId: "tgm-mrsvht36as",
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
      id: "tgm-standard-wall-single-cfg-4",
      slug: "tgm-standard-wall-single-cfg-4",
      modelId: "tgm-standard-wall-single",
      outdoorUnitId: "tgm-mr5svht60as",
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
      id: "tgm-standard-wall-single-cfg-5",
      slug: "tgm-standard-wall-single-cfg-5",
      modelId: "tgm-standard-wall-single",
      outdoorUnitId: "tgm-mr5svht60as",
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
      id: "tgm-mm-series-wall-single-cfg-1",
      slug: "tgm-mm-series-wall-single-cfg-1",
      modelId: "tgm-mm-series-wall-single",
      outdoorUnitId: "tgm-mmrsht27as3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mm-series-wall-single-cfg-2",
      slug: "tgm-mm-series-wall-single-cfg-2",
      modelId: "tgm-mm-series-wall-single",
      outdoorUnitId: "tgm-mmrsht27as3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mm-series-wall-single-cfg-3",
      slug: "tgm-mm-series-wall-single-cfg-3",
      modelId: "tgm-mm-series-wall-single",
      outdoorUnitId: "tgm-mmrsht27as3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mm-series-wall-single-cfg-4",
      slug: "tgm-mm-series-wall-single-cfg-4",
      modelId: "tgm-mm-series-wall-single",
      outdoorUnitId: "tgm-mmrsht36as4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mm-series-wall-single-cfg-5",
      slug: "tgm-mm-series-wall-single-cfg-5",
      modelId: "tgm-mm-series-wall-single",
      outdoorUnitId: "tgm-mmrsht48as5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mm-series-wall-single-cfg-6",
      slug: "tgm-mm-series-wall-single-cfg-6",
      modelId: "tgm-mm-series-wall-single",
      outdoorUnitId: "tgm-mmrsht48as5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "tgm-mrs-series-wall-single-cfg-1",
      slug: "tgm-mrs-series-wall-single-cfg-1",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht18as",
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
      id: "tgm-mrs-series-wall-single-cfg-2",
      slug: "tgm-mrs-series-wall-single-cfg-2",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht24as",
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
      id: "tgm-mrs-series-wall-single-cfg-3",
      slug: "tgm-mrs-series-wall-single-cfg-3",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht36as",
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
      id: "tgm-mrs-series-wall-single-cfg-4",
      slug: "tgm-mrs-series-wall-single-cfg-4",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht48as",
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
      id: "tgm-mrs-series-wall-single-cfg-5",
      slug: "tgm-mrs-series-wall-single-cfg-5",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht48as",
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
      id: "tgm-mrs-series-wall-single-cfg-6",
      slug: "tgm-mrs-series-wall-single-cfg-6",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht18as",
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
      id: "tgm-mrs-series-wall-single-cfg-7",
      slug: "tgm-mrs-series-wall-single-cfg-7",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht18as",
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
      id: "tgm-mrs-series-wall-single-cfg-8",
      slug: "tgm-mrs-series-wall-single-cfg-8",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht24as",
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
      id: "tgm-mrs-series-wall-single-cfg-9",
      slug: "tgm-mrs-series-wall-single-cfg-9",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht24as",
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
      id: "tgm-mrs-series-wall-single-cfg-10",
      slug: "tgm-mrs-series-wall-single-cfg-10",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht36as",
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
      id: "tgm-mrs-series-wall-single-cfg-11",
      slug: "tgm-mrs-series-wall-single-cfg-11",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht36as",
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
      id: "tgm-mrs-series-wall-single-cfg-12",
      slug: "tgm-mrs-series-wall-single-cfg-12",
      modelId: "tgm-mrs-series-wall-single",
      outdoorUnitId: "tgm-mrs5vht48as",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "tgm-m-series-wall-single-cfg-1",
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
      configurationId: "tgm-m-series-wall-single-cfg-2",
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
      configurationId: "tgm-m-series-wall-single-cfg-3",
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
      configurationId: "tgm-m-series-wall-single-cfg-4",
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
      configurationId: "tgm-m-series-wall-single-cfg-5",
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
      configurationId: "tgm-m-series-wall-single-cfg-6",
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
      configurationId: "tgm-m-series-wall-single-cfg-7",
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
      configurationId: "tgm-m-series-wall-single-cfg-8",
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
      configurationId: "tgm-m-series-wall-single-cfg-9",
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
      configurationId: "tgm-m-series-wall-single-cfg-10",
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
      configurationId: "tgm-m-series-wall-single-cfg-11",
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
      configurationId: "tgm-m-series-wall-single-cfg-12",
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
      configurationId: "tgm-mr-series-wall-single-cfg-1",
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
      configurationId: "tgm-mr-series-wall-single-cfg-2",
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
      configurationId: "tgm-mr-series-wall-single-cfg-3",
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
      configurationId: "tgm-mr-series-wall-single-cfg-4",
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
      configurationId: "tgm-standard-wall-single-cfg-1",
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
      configurationId: "tgm-standard-wall-single-cfg-2",
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
      configurationId: "tgm-standard-wall-single-cfg-3",
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
      configurationId: "tgm-standard-wall-single-cfg-4",
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
      configurationId: "tgm-standard-wall-single-cfg-5",
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
      configurationId: "tgm-mm-series-wall-single-cfg-1",
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
      configurationId: "tgm-mm-series-wall-single-cfg-2",
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
      configurationId: "tgm-mm-series-wall-single-cfg-3",
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
      configurationId: "tgm-mm-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 1.68,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tgm-mm-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tgm-mm-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "tgm-mrs-series-wall-single-cfg-1",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-2",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-3",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-4",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-5",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-6",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-7",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-8",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-9",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-10",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-11",
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
      configurationId: "tgm-mrs-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
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
