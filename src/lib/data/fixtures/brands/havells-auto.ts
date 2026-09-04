import type { BrandDataset } from "../../types";

export const havellsDataset: BrandDataset = {
  brand: {
    id: "havells",
    slug: "havells",
    name: "HAVELLS",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "havells-standard",
      slug: "havells-standard",
      name: "Standard",
      brandId: "havells",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "havells-standard-wall-single-18000",
      slug: "havells-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "havells-standard",
      brandId: "havells",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 12000,
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
      id: "havells-standard-wall-single-24000",
      slug: "havells-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "havells-standard",
      brandId: "havells",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 23600,
      heatingCapacity5FMaxBtu: 23600,
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
      id: "havells-standard-wall-single-36000",
      slug: "havells-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "havells-standard",
      brandId: "havells",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 27200,
      heatingCapacity5FMaxBtu: 27200,
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
      id: "havells-gsshax7641",
      modelNumber: "GSSHAX7641",
      brandId: "havells",
      refrigerant: null as any,
    },
    {
      id: "havells-gsshax7642",
      modelNumber: "GSSHAX7642",
      brandId: "havells",
      refrigerant: null as any,
    },
    {
      id: "havells-gsshax7643",
      modelNumber: "GSSHAX7643",
      brandId: "havells",
      refrigerant: null as any,
    },
    {
      id: "havells-gsshax7644",
      modelNumber: "GSSHAX7644",
      brandId: "havells",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "havells-appareils-sans-conduits",
      modelNumber: "Appareils sans conduits",
      brandId: "havells",
      type: "wall-single",
    }
  ],
  configurations: [
    {
      id: "havells-standard-wall-single-18000-cfg-1",
      slug: "havells-standard-wall-single-18000-cfg-1",
      modelId: "havells-standard-wall-single-18000",
      outdoorUnitId: "havells-gsshax7641",
      indoorUnitId: "havells-appareils-sans-conduits",
      coolingCapacityMinBtu: 17700,
      coolingCapacityMaxBtu: 17700,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "havells-standard-wall-single-24000-cfg-1",
      slug: "havells-standard-wall-single-24000-cfg-1",
      modelId: "havells-standard-wall-single-24000",
      outdoorUnitId: "havells-gsshax7642",
      indoorUnitId: "havells-appareils-sans-conduits",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "havells-standard-wall-single-36000-cfg-1",
      slug: "havells-standard-wall-single-36000-cfg-1",
      modelId: "havells-standard-wall-single-36000",
      outdoorUnitId: "havells-gsshax7643",
      indoorUnitId: "havells-appareils-sans-conduits",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "havells-standard-wall-single-36000-cfg-2",
      slug: "havells-standard-wall-single-36000-cfg-2",
      modelId: "havells-standard-wall-single-36000",
      outdoorUnitId: "havells-gsshax7644",
      indoorUnitId: "havells-appareils-sans-conduits",
      coolingCapacityMinBtu: 37000,
      coolingCapacityMaxBtu: 37000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "havells-standard-wall-single-18000-cfg-1",
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
      configurationId: "havells-standard-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "havells-standard-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "havells-standard-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
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
