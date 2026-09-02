import type { BrandDataset } from "../../types";

export const senvilleDataset: BrandDataset = {
  brand: {
    id: "senville",
    slug: "senville",
    name: "SENVILLE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "senville-standard",
      slug: "senville-standard",
      name: "Standard",
      brandId: "senville",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sen-series",
      slug: "senville-sen-series",
      name: "SEN series",
      brandId: "senville",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc",
      slug: "senville-sendc",
      name: "SENDC",
      brandId: "senville",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series",
      slug: "senville-sena-series",
      name: "SENA Series",
      brandId: "senville",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-senl-series",
      slug: "senville-senl-series",
      name: "SENL Series",
      brandId: "senville",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-series",
      slug: "senville-sendc-series",
      name: "SENDC Series",
      brandId: "senville",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "senville-standard-wall-single",
      slug: "senville-standard-wall-single",
      name: "Standard",
      seriesId: "senville-standard",
      brandId: "senville",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 29600,
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
      id: "senville-sen-series-wall-single",
      slug: "senville-sen-series-wall-single",
      name: "SEN series",
      seriesId: "senville-sen-series",
      brandId: "senville",
      modelNumber: "SEN series",
      normalizedModelNumber: "sen-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 18,
      seer2Max: 28.1,
      hspf2Min: 8.7,
      hspf2Max: 12,
      cop5FMin: 1.75,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-central-ducted",
      slug: "senville-sendc-central-ducted",
      name: "SENDC",
      seriesId: "senville-sendc",
      brandId: "senville",
      modelNumber: "SENDC",
      normalizedModelNumber: "sendc",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 19200,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.3,
      seer2Max: 17.4,
      hspf2Min: 9.4,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 1.97,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-wall-single",
      slug: "senville-sena-series-wall-single",
      name: "SENA Series",
      seriesId: "senville-sena-series",
      brandId: "senville",
      modelNumber: "SENA Series",
      normalizedModelNumber: "sena-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 18,
      seer2Max: 27.4,
      hspf2Min: 9,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-senl-series-wall-single",
      slug: "senville-senl-series-wall-single",
      name: "SENL Series",
      seriesId: "senville-senl-series",
      brandId: "senville",
      modelNumber: "SENL Series",
      normalizedModelNumber: "senl-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 16900,
      seer2Min: 18.7,
      seer2Max: 21.5,
      hspf2Min: 9,
      hspf2Max: 9.3,
      cop5FMin: 1.96,
      cop5FMax: 2.14,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-series-central-ducted",
      slug: "senville-sendc-series-central-ducted",
      name: "SENDC Series",
      seriesId: "senville-sendc-series",
      brandId: "senville",
      modelNumber: "SENDC Series",
      normalizedModelNumber: "sendc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16,
      seer2Max: 18.3,
      hspf2Min: 9,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 1.96,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sen-series-central-ducted",
      slug: "senville-sen-series-central-ducted",
      name: "SEN Series",
      seriesId: "senville-sen-series",
      brandId: "senville",
      modelNumber: "SEN Series",
      normalizedModelNumber: "sen-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 19700,
      heatingCapacity5FMaxBtu: 37800,
      seer2Min: 15.8,
      seer2Max: 16,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "senville-sena-09hf-oz",
      modelNumber: "SENA/09HF/OZ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-12hf-oz",
      modelNumber: "SENA/12HF/OZ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-18hf-moz",
      modelNumber: "SENA/18HF/MOZ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-30hf-moz",
      modelNumber: "SENA/30HF/MOZ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-36hf-moz",
      modelNumber: "SENA/36HF/MOZ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-48hf-moz",
      modelNumber: "SENA/48HF/MOZ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-09cd-ox",
      modelNumber: "SENL/09CD/OX",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-18cd-ox",
      modelNumber: "SENL/18CD/OX",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-24hf-oz",
      modelNumber: "SENA/24HF/OZ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-36cd-oy",
      modelNumber: "SENL/36CD/OY",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-18cd-oy",
      modelNumber: "SENL/18CD/OY",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-12cd-ol",
      modelNumber: "SENL-12CD-OL",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-12cd220-ol",
      modelNumber: "SENL-12CD220-OL",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-18cd-ol",
      modelNumber: "SENL-18CD-OL",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-36cd-ol",
      modelNumber: "SENL-36CD-OL",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-09hf-oq",
      modelNumber: "SENA/09HF/OQ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-12hf-oq",
      modelNumber: "SENA/12HF/OQ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-18hf-oq",
      modelNumber: "SENA/18HF/OQ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-24hf-oq",
      modelNumber: "SENA/24HF/OQ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-09cd-oy",
      modelNumber: "SENL/09CD/OY",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-09cd220-oy",
      modelNumber: "SENL/09CD220/OY",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-18hf-moq",
      modelNumber: "SENA/18HF/MOQ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-30hf-moq",
      modelNumber: "SENA/30HF/MOQ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-36hf-moq",
      modelNumber: "SENA/36HF/MOQ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-48hf-moq",
      modelNumber: "SENA/48HF/MOQ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-33hf-oq",
      modelNumber: "SENA-33HF-OQ",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-30cd-ol",
      modelNumber: "SENL-30CD-OL",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sendc-36hf-om",
      modelNumber: "SENDC-36HF-OM",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sendc-24hf-om",
      modelNumber: "SENDC-24HF-OM",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sendc-48hf-om",
      modelNumber: "SENDC-48HF-OM",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sendc-60hf-om",
      modelNumber: "SENDC-60HF-OM",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-18hf-mob",
      modelNumber: "SENA-18HF-MOB",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-28hf-mob",
      modelNumber: "SENA-28HF-MOB",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-36hf-mob",
      modelNumber: "SENA-36HF-MOB",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-48hf-mob",
      modelNumber: "SENA-48HF-MOB",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-06hf-og",
      modelNumber: "SENA-06HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-09hf-og",
      modelNumber: "SENA-09HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-12hf-og",
      modelNumber: "SENA-12HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-18hf-og",
      modelNumber: "SENA-18HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-24hf-og",
      modelNumber: "SENA-24HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-33hf-og",
      modelNumber: "SENA-33HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-18hf-moa",
      modelNumber: "SENA-18HF-MOA",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-28hf-moa",
      modelNumber: "SENA-28HF-MOA",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-36hf-moa",
      modelNumber: "SENA-36HF-MOA",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-48hf-moa",
      modelNumber: "SENA-48HF-MOA",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sena-55hf-moa",
      modelNumber: "SENA-55HF-MOA",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-09cd-ol",
      modelNumber: "SENL-09CD-OL",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-09cd220-ol",
      modelNumber: "SENL-09CD220-OL",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-senl-24cd-ol",
      modelNumber: "SENL-24CD-OL",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sendc-24hf-og",
      modelNumber: "SENDC-24HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sendc-30hf-og",
      modelNumber: "SENDC-30HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sendc-36hf-og",
      modelNumber: "SENDC-36HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sendc-48hf-og",
      modelNumber: "SENDC-48HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    },
    {
      id: "senville-sendc-60hf-og",
      modelNumber: "SENDC-60HF-OG",
      brandId: "senville",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "senville-standard-wall-single-cfg-1",
      slug: "senville-standard-wall-single-cfg-1",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-sena-09hf-oz",
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
      id: "senville-standard-wall-single-cfg-2",
      slug: "senville-standard-wall-single-cfg-2",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-sena-12hf-oz",
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
      id: "senville-standard-wall-single-cfg-3",
      slug: "senville-standard-wall-single-cfg-3",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-sena-18hf-moz",
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
      id: "senville-standard-wall-single-cfg-4",
      slug: "senville-standard-wall-single-cfg-4",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-sena-30hf-moz",
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
      id: "senville-standard-wall-single-cfg-5",
      slug: "senville-standard-wall-single-cfg-5",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-sena-36hf-moz",
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
      id: "senville-standard-wall-single-cfg-6",
      slug: "senville-standard-wall-single-cfg-6",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-sena-48hf-moz",
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
      id: "senville-standard-wall-single-cfg-7",
      slug: "senville-standard-wall-single-cfg-7",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-senl-09cd-ox",
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
      id: "senville-standard-wall-single-cfg-8",
      slug: "senville-standard-wall-single-cfg-8",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-senl-18cd-ox",
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
      id: "senville-standard-wall-single-cfg-9",
      slug: "senville-standard-wall-single-cfg-9",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-sena-09hf-oz",
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
      id: "senville-standard-wall-single-cfg-10",
      slug: "senville-standard-wall-single-cfg-10",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-sena-12hf-oz",
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
      id: "senville-standard-wall-single-cfg-11",
      slug: "senville-standard-wall-single-cfg-11",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-sena-24hf-oz",
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
      id: "senville-standard-wall-single-cfg-12",
      slug: "senville-standard-wall-single-cfg-12",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-senl-36cd-oy",
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
      id: "senville-standard-wall-single-cfg-13",
      slug: "senville-standard-wall-single-cfg-13",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-senl-18cd-oy",
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
      id: "senville-standard-wall-single-cfg-14",
      slug: "senville-standard-wall-single-cfg-14",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-senl-36cd-oy",
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
      id: "senville-standard-wall-single-cfg-15",
      slug: "senville-standard-wall-single-cfg-15",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-senl-12cd-ol",
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
      id: "senville-standard-wall-single-cfg-16",
      slug: "senville-standard-wall-single-cfg-16",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-senl-12cd220-ol",
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
      id: "senville-standard-wall-single-cfg-17",
      slug: "senville-standard-wall-single-cfg-17",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-senl-18cd-ol",
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
      id: "senville-standard-wall-single-cfg-18",
      slug: "senville-standard-wall-single-cfg-18",
      modelId: "senville-standard-wall-single",
      outdoorUnitId: "senville-senl-36cd-ol",
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
      id: "senville-sen-series-wall-single-cfg-1",
      slug: "senville-sen-series-wall-single-cfg-1",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-09hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-2",
      slug: "senville-sen-series-wall-single-cfg-2",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-3",
      slug: "senville-sen-series-wall-single-cfg-3",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-4",
      slug: "senville-sen-series-wall-single-cfg-4",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-24hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-5",
      slug: "senville-sen-series-wall-single-cfg-5",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-senl-09cd-oy",
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
      id: "senville-sen-series-wall-single-cfg-6",
      slug: "senville-sen-series-wall-single-cfg-6",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-senl-09cd220-oy",
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
      id: "senville-sen-series-wall-single-cfg-7",
      slug: "senville-sen-series-wall-single-cfg-7",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-8",
      slug: "senville-sen-series-wall-single-cfg-8",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-9",
      slug: "senville-sen-series-wall-single-cfg-9",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-10",
      slug: "senville-sen-series-wall-single-cfg-10",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-30hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-11",
      slug: "senville-sen-series-wall-single-cfg-11",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-30hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-12",
      slug: "senville-sen-series-wall-single-cfg-12",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-30hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-13",
      slug: "senville-sen-series-wall-single-cfg-13",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-36hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-14",
      slug: "senville-sen-series-wall-single-cfg-14",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-48hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-15",
      slug: "senville-sen-series-wall-single-cfg-15",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-48hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-16",
      slug: "senville-sen-series-wall-single-cfg-16",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-48hf-moq",
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
      id: "senville-sen-series-wall-single-cfg-17",
      slug: "senville-sen-series-wall-single-cfg-17",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-09hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-18",
      slug: "senville-sen-series-wall-single-cfg-18",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-19",
      slug: "senville-sen-series-wall-single-cfg-19",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-20",
      slug: "senville-sen-series-wall-single-cfg-20",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-24hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-21",
      slug: "senville-sen-series-wall-single-cfg-21",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-09hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-22",
      slug: "senville-sen-series-wall-single-cfg-22",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-23",
      slug: "senville-sen-series-wall-single-cfg-23",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-24",
      slug: "senville-sen-series-wall-single-cfg-24",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-24hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-25",
      slug: "senville-sen-series-wall-single-cfg-25",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-26",
      slug: "senville-sen-series-wall-single-cfg-26",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-27",
      slug: "senville-sen-series-wall-single-cfg-27",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-24hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-28",
      slug: "senville-sen-series-wall-single-cfg-28",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-09hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-29",
      slug: "senville-sen-series-wall-single-cfg-29",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-30",
      slug: "senville-sen-series-wall-single-cfg-30",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-31",
      slug: "senville-sen-series-wall-single-cfg-31",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-24hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-32",
      slug: "senville-sen-series-wall-single-cfg-32",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-33",
      slug: "senville-sen-series-wall-single-cfg-33",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-sena-33hf-oq",
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
      id: "senville-sen-series-wall-single-cfg-34",
      slug: "senville-sen-series-wall-single-cfg-34",
      modelId: "senville-sen-series-wall-single",
      outdoorUnitId: "senville-senl-30cd-ol",
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
      id: "senville-sendc-central-ducted-cfg-1",
      slug: "senville-sendc-central-ducted-cfg-1",
      modelId: "senville-sendc-central-ducted",
      outdoorUnitId: "senville-sendc-36hf-om",
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
      id: "senville-sendc-central-ducted-cfg-2",
      slug: "senville-sendc-central-ducted-cfg-2",
      modelId: "senville-sendc-central-ducted",
      outdoorUnitId: "senville-sendc-24hf-om",
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
      id: "senville-sendc-central-ducted-cfg-3",
      slug: "senville-sendc-central-ducted-cfg-3",
      modelId: "senville-sendc-central-ducted",
      outdoorUnitId: "senville-sendc-48hf-om",
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
      id: "senville-sendc-central-ducted-cfg-4",
      slug: "senville-sendc-central-ducted-cfg-4",
      modelId: "senville-sendc-central-ducted",
      outdoorUnitId: "senville-sendc-60hf-om",
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
      id: "senville-sena-series-wall-single-cfg-1",
      slug: "senville-sena-series-wall-single-cfg-1",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-2",
      slug: "senville-sena-series-wall-single-cfg-2",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-3",
      slug: "senville-sena-series-wall-single-cfg-3",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-4",
      slug: "senville-sena-series-wall-single-cfg-4",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-28hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-5",
      slug: "senville-sena-series-wall-single-cfg-5",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-28hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-6",
      slug: "senville-sena-series-wall-single-cfg-6",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-28hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-7",
      slug: "senville-sena-series-wall-single-cfg-7",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-36hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-8",
      slug: "senville-sena-series-wall-single-cfg-8",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-36hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-9",
      slug: "senville-sena-series-wall-single-cfg-9",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-36hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-10",
      slug: "senville-sena-series-wall-single-cfg-10",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-48hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-11",
      slug: "senville-sena-series-wall-single-cfg-11",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-48hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-12",
      slug: "senville-sena-series-wall-single-cfg-12",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-48hf-mob",
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
      id: "senville-sena-series-wall-single-cfg-13",
      slug: "senville-sena-series-wall-single-cfg-13",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-06hf-og",
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
      id: "senville-sena-series-wall-single-cfg-14",
      slug: "senville-sena-series-wall-single-cfg-14",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-09hf-og",
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
      id: "senville-sena-series-wall-single-cfg-15",
      slug: "senville-sena-series-wall-single-cfg-15",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-og",
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
      id: "senville-sena-series-wall-single-cfg-16",
      slug: "senville-sena-series-wall-single-cfg-16",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-og",
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
      id: "senville-sena-series-wall-single-cfg-17",
      slug: "senville-sena-series-wall-single-cfg-17",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-24hf-og",
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
      id: "senville-sena-series-wall-single-cfg-18",
      slug: "senville-sena-series-wall-single-cfg-18",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-33hf-og",
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
      id: "senville-sena-series-wall-single-cfg-19",
      slug: "senville-sena-series-wall-single-cfg-19",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-09hf-og",
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
      id: "senville-sena-series-wall-single-cfg-20",
      slug: "senville-sena-series-wall-single-cfg-20",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-og",
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
      id: "senville-sena-series-wall-single-cfg-21",
      slug: "senville-sena-series-wall-single-cfg-21",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-og",
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
      id: "senville-sena-series-wall-single-cfg-22",
      slug: "senville-sena-series-wall-single-cfg-22",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-24hf-og",
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
      id: "senville-sena-series-wall-single-cfg-23",
      slug: "senville-sena-series-wall-single-cfg-23",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-09hf-og",
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
      id: "senville-sena-series-wall-single-cfg-24",
      slug: "senville-sena-series-wall-single-cfg-24",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-og",
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
      id: "senville-sena-series-wall-single-cfg-25",
      slug: "senville-sena-series-wall-single-cfg-25",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-og",
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
      id: "senville-sena-series-wall-single-cfg-26",
      slug: "senville-sena-series-wall-single-cfg-26",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-24hf-og",
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
      id: "senville-sena-series-wall-single-cfg-27",
      slug: "senville-sena-series-wall-single-cfg-27",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-og",
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
      id: "senville-sena-series-wall-single-cfg-28",
      slug: "senville-sena-series-wall-single-cfg-28",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-og",
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
      id: "senville-sena-series-wall-single-cfg-29",
      slug: "senville-sena-series-wall-single-cfg-29",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-24hf-og",
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
      id: "senville-sena-series-wall-single-cfg-30",
      slug: "senville-sena-series-wall-single-cfg-30",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-31",
      slug: "senville-sena-series-wall-single-cfg-31",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-32",
      slug: "senville-sena-series-wall-single-cfg-32",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-33",
      slug: "senville-sena-series-wall-single-cfg-33",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-28hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-34",
      slug: "senville-sena-series-wall-single-cfg-34",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-28hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-35",
      slug: "senville-sena-series-wall-single-cfg-35",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-28hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-36",
      slug: "senville-sena-series-wall-single-cfg-36",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-36hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-37",
      slug: "senville-sena-series-wall-single-cfg-37",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-36hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-38",
      slug: "senville-sena-series-wall-single-cfg-38",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-36hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-39",
      slug: "senville-sena-series-wall-single-cfg-39",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-48hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-40",
      slug: "senville-sena-series-wall-single-cfg-40",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-48hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-41",
      slug: "senville-sena-series-wall-single-cfg-41",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-48hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-42",
      slug: "senville-sena-series-wall-single-cfg-42",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-55hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-43",
      slug: "senville-sena-series-wall-single-cfg-43",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-55hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-44",
      slug: "senville-sena-series-wall-single-cfg-44",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-55hf-moa",
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
      id: "senville-sena-series-wall-single-cfg-45",
      slug: "senville-sena-series-wall-single-cfg-45",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-06hf-og",
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
      id: "senville-sena-series-wall-single-cfg-46",
      slug: "senville-sena-series-wall-single-cfg-46",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-09hf-og",
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
      id: "senville-sena-series-wall-single-cfg-47",
      slug: "senville-sena-series-wall-single-cfg-47",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-12hf-og",
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
      id: "senville-sena-series-wall-single-cfg-48",
      slug: "senville-sena-series-wall-single-cfg-48",
      modelId: "senville-sena-series-wall-single",
      outdoorUnitId: "senville-sena-18hf-og",
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
      id: "senville-senl-series-wall-single-cfg-1",
      slug: "senville-senl-series-wall-single-cfg-1",
      modelId: "senville-senl-series-wall-single",
      outdoorUnitId: "senville-senl-09cd-ol",
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
      id: "senville-senl-series-wall-single-cfg-2",
      slug: "senville-senl-series-wall-single-cfg-2",
      modelId: "senville-senl-series-wall-single",
      outdoorUnitId: "senville-senl-09cd220-ol",
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
      id: "senville-senl-series-wall-single-cfg-3",
      slug: "senville-senl-series-wall-single-cfg-3",
      modelId: "senville-senl-series-wall-single",
      outdoorUnitId: "senville-senl-24cd-ol",
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
      id: "senville-sendc-series-central-ducted-cfg-1",
      slug: "senville-sendc-series-central-ducted-cfg-1",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville-sendc-24hf-og",
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
      id: "senville-sendc-series-central-ducted-cfg-2",
      slug: "senville-sendc-series-central-ducted-cfg-2",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville-sendc-30hf-og",
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
      id: "senville-sendc-series-central-ducted-cfg-3",
      slug: "senville-sendc-series-central-ducted-cfg-3",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville-sendc-36hf-og",
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
      id: "senville-sendc-series-central-ducted-cfg-4",
      slug: "senville-sendc-series-central-ducted-cfg-4",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville-sendc-48hf-og",
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
      id: "senville-sendc-series-central-ducted-cfg-5",
      slug: "senville-sendc-series-central-ducted-cfg-5",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville-sendc-60hf-og",
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
      id: "senville-sen-series-central-ducted-cfg-1",
      slug: "senville-sen-series-central-ducted-cfg-1",
      modelId: "senville-sen-series-central-ducted",
      outdoorUnitId: "senville-sendc-24hf-og",
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
      id: "senville-sen-series-central-ducted-cfg-2",
      slug: "senville-sen-series-central-ducted-cfg-2",
      modelId: "senville-sen-series-central-ducted",
      outdoorUnitId: "senville-sendc-36hf-og",
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
      id: "senville-sen-series-central-ducted-cfg-3",
      slug: "senville-sen-series-central-ducted-cfg-3",
      modelId: "senville-sen-series-central-ducted",
      outdoorUnitId: "senville-sendc-36hf-og",
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
      id: "senville-sen-series-central-ducted-cfg-4",
      slug: "senville-sen-series-central-ducted-cfg-4",
      modelId: "senville-sen-series-central-ducted",
      outdoorUnitId: "senville-sendc-60hf-og",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "senville-standard-wall-single-cfg-1",
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
      configurationId: "senville-standard-wall-single-cfg-2",
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
      configurationId: "senville-standard-wall-single-cfg-3",
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
      configurationId: "senville-standard-wall-single-cfg-4",
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
      configurationId: "senville-standard-wall-single-cfg-5",
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
      configurationId: "senville-standard-wall-single-cfg-6",
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
      configurationId: "senville-standard-wall-single-cfg-7",
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
      configurationId: "senville-standard-wall-single-cfg-8",
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
      configurationId: "senville-standard-wall-single-cfg-9",
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
      configurationId: "senville-standard-wall-single-cfg-10",
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
      configurationId: "senville-standard-wall-single-cfg-11",
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
      configurationId: "senville-standard-wall-single-cfg-12",
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
      configurationId: "senville-standard-wall-single-cfg-13",
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
      configurationId: "senville-standard-wall-single-cfg-14",
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
      configurationId: "senville-standard-wall-single-cfg-15",
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
      configurationId: "senville-standard-wall-single-cfg-16",
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
      configurationId: "senville-standard-wall-single-cfg-17",
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
      configurationId: "senville-standard-wall-single-cfg-18",
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
      configurationId: "senville-sen-series-wall-single-cfg-1",
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
      configurationId: "senville-sen-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sen-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sen-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sen-series-wall-single-cfg-5",
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
      configurationId: "senville-sen-series-wall-single-cfg-6",
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
      configurationId: "senville-sen-series-wall-single-cfg-7",
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
      configurationId: "senville-sen-series-wall-single-cfg-8",
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
      configurationId: "senville-sen-series-wall-single-cfg-9",
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
      configurationId: "senville-sen-series-wall-single-cfg-10",
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
      configurationId: "senville-sen-series-wall-single-cfg-11",
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
      configurationId: "senville-sen-series-wall-single-cfg-12",
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
      configurationId: "senville-sen-series-wall-single-cfg-13",
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
      configurationId: "senville-sen-series-wall-single-cfg-14",
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
      configurationId: "senville-sen-series-wall-single-cfg-15",
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
      configurationId: "senville-sen-series-wall-single-cfg-16",
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
      configurationId: "senville-sen-series-wall-single-cfg-17",
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
      configurationId: "senville-sen-series-wall-single-cfg-18",
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
      configurationId: "senville-sen-series-wall-single-cfg-19",
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
      configurationId: "senville-sen-series-wall-single-cfg-20",
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
      configurationId: "senville-sen-series-wall-single-cfg-21",
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
      configurationId: "senville-sen-series-wall-single-cfg-22",
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
      configurationId: "senville-sen-series-wall-single-cfg-23",
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
      configurationId: "senville-sen-series-wall-single-cfg-24",
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
      configurationId: "senville-sen-series-wall-single-cfg-25",
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
      configurationId: "senville-sen-series-wall-single-cfg-26",
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
      configurationId: "senville-sen-series-wall-single-cfg-27",
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
      configurationId: "senville-sen-series-wall-single-cfg-28",
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
      configurationId: "senville-sen-series-wall-single-cfg-29",
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
      configurationId: "senville-sen-series-wall-single-cfg-30",
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
      configurationId: "senville-sen-series-wall-single-cfg-31",
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
      configurationId: "senville-sen-series-wall-single-cfg-32",
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
      configurationId: "senville-sen-series-wall-single-cfg-33",
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
      configurationId: "senville-sen-series-wall-single-cfg-34",
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
      configurationId: "senville-sendc-central-ducted-cfg-1",
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
      configurationId: "senville-sendc-central-ducted-cfg-2",
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
      configurationId: "senville-sendc-central-ducted-cfg-3",
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
      configurationId: "senville-sendc-central-ducted-cfg-4",
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
      configurationId: "senville-sena-series-wall-single-cfg-1",
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
      configurationId: "senville-sena-series-wall-single-cfg-2",
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
      configurationId: "senville-sena-series-wall-single-cfg-3",
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
      configurationId: "senville-sena-series-wall-single-cfg-4",
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
      configurationId: "senville-sena-series-wall-single-cfg-5",
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
      configurationId: "senville-sena-series-wall-single-cfg-6",
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
      configurationId: "senville-sena-series-wall-single-cfg-7",
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
      configurationId: "senville-sena-series-wall-single-cfg-8",
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
      configurationId: "senville-sena-series-wall-single-cfg-9",
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
      configurationId: "senville-sena-series-wall-single-cfg-10",
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
      configurationId: "senville-sena-series-wall-single-cfg-11",
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
      configurationId: "senville-sena-series-wall-single-cfg-12",
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
      configurationId: "senville-sena-series-wall-single-cfg-13",
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
      configurationId: "senville-sena-series-wall-single-cfg-14",
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
      configurationId: "senville-sena-series-wall-single-cfg-15",
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
      configurationId: "senville-sena-series-wall-single-cfg-16",
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
      configurationId: "senville-sena-series-wall-single-cfg-17",
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
      configurationId: "senville-sena-series-wall-single-cfg-18",
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
      configurationId: "senville-sena-series-wall-single-cfg-19",
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
      configurationId: "senville-sena-series-wall-single-cfg-20",
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
      configurationId: "senville-sena-series-wall-single-cfg-21",
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
      configurationId: "senville-sena-series-wall-single-cfg-22",
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
      configurationId: "senville-sena-series-wall-single-cfg-23",
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
      configurationId: "senville-sena-series-wall-single-cfg-24",
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
      configurationId: "senville-sena-series-wall-single-cfg-25",
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
      configurationId: "senville-sena-series-wall-single-cfg-26",
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
      configurationId: "senville-sena-series-wall-single-cfg-27",
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
      configurationId: "senville-sena-series-wall-single-cfg-28",
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
      configurationId: "senville-sena-series-wall-single-cfg-29",
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
      configurationId: "senville-sena-series-wall-single-cfg-30",
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
      configurationId: "senville-sena-series-wall-single-cfg-31",
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
      configurationId: "senville-sena-series-wall-single-cfg-32",
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
      configurationId: "senville-sena-series-wall-single-cfg-33",
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
      configurationId: "senville-sena-series-wall-single-cfg-34",
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
      configurationId: "senville-sena-series-wall-single-cfg-35",
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
      configurationId: "senville-sena-series-wall-single-cfg-36",
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
      configurationId: "senville-sena-series-wall-single-cfg-37",
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
      configurationId: "senville-sena-series-wall-single-cfg-38",
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
      configurationId: "senville-sena-series-wall-single-cfg-39",
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
      configurationId: "senville-sena-series-wall-single-cfg-40",
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
      configurationId: "senville-sena-series-wall-single-cfg-41",
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
      configurationId: "senville-sena-series-wall-single-cfg-42",
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
      configurationId: "senville-sena-series-wall-single-cfg-43",
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
      configurationId: "senville-sena-series-wall-single-cfg-44",
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
      configurationId: "senville-sena-series-wall-single-cfg-45",
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
      configurationId: "senville-sena-series-wall-single-cfg-46",
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
      configurationId: "senville-sena-series-wall-single-cfg-47",
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
      configurationId: "senville-sena-series-wall-single-cfg-48",
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
      configurationId: "senville-senl-series-wall-single-cfg-1",
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
      configurationId: "senville-senl-series-wall-single-cfg-2",
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
      configurationId: "senville-senl-series-wall-single-cfg-3",
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
      configurationId: "senville-sendc-series-central-ducted-cfg-1",
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
      configurationId: "senville-sendc-series-central-ducted-cfg-2",
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
      configurationId: "senville-sendc-series-central-ducted-cfg-3",
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
      configurationId: "senville-sendc-series-central-ducted-cfg-4",
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
      configurationId: "senville-sendc-series-central-ducted-cfg-5",
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
      configurationId: "senville-sen-series-central-ducted-cfg-1",
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
      configurationId: "senville-sen-series-central-ducted-cfg-2",
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
      configurationId: "senville-sen-series-central-ducted-cfg-3",
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
      configurationId: "senville-sen-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 1.8,
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
