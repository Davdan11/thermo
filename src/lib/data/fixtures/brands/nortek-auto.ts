import type { BrandDataset } from "../../types";

export const nortekDataset: BrandDataset = {
  brand: {
    id: "nortek",
    slug: "nortek",
    name: "NORTEK",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "nortek-ultra-side-discharge",
      slug: "nortek-ultra-side-discharge",
      name: "Ultra Side Discharge",
      brandId: "nortek",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "nortek-ultra-side-discharge-central-ducted-24000",
      slug: "nortek-ultra-side-discharge-central-ducted-24000",
      name: "Ultra Side Discharge 24 000 BTU",
      seriesId: "nortek-ultra-side-discharge",
      brandId: "nortek",
      modelNumber: "Ultra Side Discharge 24k",
      normalizedModelNumber: "ultra-side-discharge-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 17,
      seer2Max: 17,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "nortek-ultra-side-discharge-central-ducted-36000",
      slug: "nortek-ultra-side-discharge-central-ducted-36000",
      name: "Ultra Side Discharge 36 000 BTU",
      seriesId: "nortek-ultra-side-discharge",
      brandId: "nortek",
      modelNumber: "Ultra Side Discharge 36k",
      normalizedModelNumber: "ultra-side-discharge-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 29000,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "nortek-ultra-side-discharge-central-ducted-48000",
      slug: "nortek-ultra-side-discharge-central-ducted-48000",
      name: "Ultra Side Discharge 48 000 BTU",
      seriesId: "nortek-ultra-side-discharge",
      brandId: "nortek",
      modelNumber: "Ultra Side Discharge 48k",
      normalizedModelNumber: "ultra-side-discharge-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 39500,
      heatingCapacity5FMaxBtu: 44000,
      seer2Min: 16,
      seer2Max: 17,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "nortek-gxh24-36msk4dh",
      modelNumber: "GXH24-36MSK4DH",
      brandId: "nortek",
      refrigerant: null as any,
    },
    {
      id: "nortek-gxh48-60msk4dh",
      modelNumber: "GXH48-60MSK4DH",
      brandId: "nortek",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "nortek-gmh24-msk4dh1",
      modelNumber: "GMH24-**MSK4DH1",
      brandId: "nortek",
      type: "central-ducted",
    },
    {
      id: "nortek-gmh-36msk4dh1",
      modelNumber: "GMH**-36MSK4DH1",
      brandId: "nortek",
      type: "central-ducted",
    },
    {
      id: "nortek-gmh48-msk4dh1",
      modelNumber: "GMH48-**MSK4DH1",
      brandId: "nortek",
      type: "central-ducted",
    },
    {
      id: "nortek-gmh-60msk4dh1",
      modelNumber: "GMH**-60MSK4DH1",
      brandId: "nortek",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "nortek-ultra-side-discharge-central-ducted-24000-cfg-1",
      slug: "nortek-ultra-side-discharge-central-ducted-24000-cfg-1",
      modelId: "nortek-ultra-side-discharge-central-ducted-24000",
      outdoorUnitId: "nortek-gxh24-36msk4dh",
      indoorUnitId: "nortek-gmh24-msk4dh1",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "nortek-ultra-side-discharge-central-ducted-36000-cfg-1",
      slug: "nortek-ultra-side-discharge-central-ducted-36000-cfg-1",
      modelId: "nortek-ultra-side-discharge-central-ducted-36000",
      outdoorUnitId: "nortek-gxh24-36msk4dh",
      indoorUnitId: "nortek-gmh-36msk4dh1",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "nortek-ultra-side-discharge-central-ducted-48000-cfg-1",
      slug: "nortek-ultra-side-discharge-central-ducted-48000-cfg-1",
      modelId: "nortek-ultra-side-discharge-central-ducted-48000",
      outdoorUnitId: "nortek-gxh48-60msk4dh",
      indoorUnitId: "nortek-gmh48-msk4dh1",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "nortek-ultra-side-discharge-central-ducted-48000-cfg-2",
      slug: "nortek-ultra-side-discharge-central-ducted-48000-cfg-2",
      modelId: "nortek-ultra-side-discharge-central-ducted-48000",
      outdoorUnitId: "nortek-gxh48-60msk4dh",
      indoorUnitId: "nortek-gmh-60msk4dh1",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "nortek-ultra-side-discharge-central-ducted-24000-cfg-1",
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
      configurationId: "nortek-ultra-side-discharge-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "nortek-ultra-side-discharge-central-ducted-48000-cfg-1",
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
      configurationId: "nortek-ultra-side-discharge-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
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
