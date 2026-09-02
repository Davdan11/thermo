import type { BrandDataset } from "../../types";

export const zenairtechnologiesDataset: BrandDataset = {
  brand: {
    id: "zenair-technologies",
    slug: "zenair-technologies",
    name: "ZENAIR TECHNOLOGIES",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
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
      id: "zenair-technologies-standard-wall-single",
      slug: "zenair-technologies-standard-wall-single",
      name: "Standard",
      seriesId: "zenair-technologies-standard",
      brandId: "zenair-technologies",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 10300,
      heatingCapacity5FMaxBtu: 36000,
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
      id: "zenair-technologies-standard-wall-single-cfg-1",
      slug: "zenair-technologies-standard-wall-single-cfg-1",
      modelId: "zenair-technologies-standard-wall-single",
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
      id: "zenair-technologies-standard-wall-single-cfg-2",
      slug: "zenair-technologies-standard-wall-single-cfg-2",
      modelId: "zenair-technologies-standard-wall-single",
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
      configurationId: "zenair-technologies-standard-wall-single-cfg-1",
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
      configurationId: "zenair-technologies-standard-wall-single-cfg-2",
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
