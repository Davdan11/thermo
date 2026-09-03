import type { BrandDataset } from "../../types";

export const zenairtechnologiesDataset: BrandDataset = {
  brand: {
    id: "zenair-technologies",
    slug: "zenair-technologies",
    name: "ZENAIR TECHNOLOGIES",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: false,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "zenair-technologies-standard",
      slug: "zenair-technologies-standard",
      name: "Standard",
      brandId: "zenair-technologies",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "zenair-technologies-standard-wall-single-12000",
      slug: "zenair-technologies-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "zenair-technologies-standard",
      brandId: "zenair-technologies",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 10300,
      heatingCapacity5FMaxBtu: 10300,
      seer2Min: 26.5,
      seer2Max: 20.8,
      hspf2Min: 8.4,
      hspf2Max: 11.1,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zenair-technologies-standard-wall-single-48000",
      slug: "zenair-technologies-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "zenair-technologies-standard",
      brandId: "zenair-technologies",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 36000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 22.5,
      seer2Max: 22.6,
      hspf2Min: 9.7,
      hspf2Max: 12.8,
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
      id: "zenair-technologies-zen-wm12hp23s-o",
      modelNumber: "ZEN-WM12HP23S/O",
      brandId: "zenair-technologies",
      refrigerant: null as any,
    },
    {
      id: "zenair-technologies-zen-pc48hp20s-o",
      modelNumber: "ZEN-PC48HP20S/O",
      brandId: "zenair-technologies",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "zenair-technologies-standard-wall-single-12000-cfg-1",
      slug: "zenair-technologies-standard-wall-single-12000-cfg-1",
      modelId: "zenair-technologies-standard-wall-single-12000",
      outdoorUnitId: "zenair-technologies-zen-wm12hp23s-o",
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
      id: "zenair-technologies-standard-wall-single-48000-cfg-1",
      slug: "zenair-technologies-standard-wall-single-48000-cfg-1",
      modelId: "zenair-technologies-standard-wall-single-48000",
      outdoorUnitId: "zenair-technologies-zen-pc48hp20s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "zenair-technologies-standard-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zenair-technologies-standard-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
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
