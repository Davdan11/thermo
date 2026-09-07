import type { BrandDataset } from "../../types";

export const generalluxstarDataset: BrandDataset = {
  brand: {
    id: "generallux-star",
    slug: "generallux-star",
    name: "GENERALLUX  STAR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "generallux-star-standard",
      slug: "generallux-star-standard",
      name: "Standard",
      brandId: "generallux-star",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "generallux-star-standard-wall-single-12000",
      slug: "generallux-star-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "generallux-star-standard",
      brandId: "generallux-star",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 7500,
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
      id: "generallux-star-standard-wall-single-18000",
      slug: "generallux-star-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "generallux-star-standard",
      brandId: "generallux-star",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 10000,
      heatingCapacity5FMaxBtu: 11600,
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
      id: "generallux-star-standard-wall-single-24000",
      slug: "generallux-star-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "generallux-star-standard",
      brandId: "generallux-star",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 14500,
      heatingCapacity5FMaxBtu: 14500,
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
      id: "generallux-star-ast-12uw3sxetu01-o",
      modelNumber: "AST-12UW3SXETU01(O)",
      brandId: "generallux-star",
      refrigerant: null as any,
    },
    {
      id: "generallux-star-ast-12uw3sxetu02-o",
      modelNumber: "AST-12UW3SXETU02(O)",
      brandId: "generallux-star",
      refrigerant: null as any,
    },
    {
      id: "generallux-star-gns-12hch22to1",
      modelNumber: "GNS-12HCH22TO1",
      brandId: "generallux-star",
      refrigerant: null as any,
    },
    {
      id: "generallux-star-gns-12hch23to2",
      modelNumber: "GNS-12HCH23TO2",
      brandId: "generallux-star",
      refrigerant: null as any,
    },
    {
      id: "generallux-star-ast-18uw3sbbtu00-o",
      modelNumber: "AST-18UW3SBBTU00(O)",
      brandId: "generallux-star",
      refrigerant: null as any,
    },
    {
      id: "generallux-star-ast-18uw3sbbtu01-o",
      modelNumber: "AST-18UW3SBBTU01(O)",
      brandId: "generallux-star",
      refrigerant: null as any,
    },
    {
      id: "generallux-star-gns-18hch23to1",
      modelNumber: "GNS-18HCH23TO1",
      brandId: "generallux-star",
      refrigerant: null as any,
    },
    {
      id: "generallux-star-gns-18hch21to2",
      modelNumber: "GNS-18HCH21TO2",
      brandId: "generallux-star",
      refrigerant: null as any,
    },
    {
      id: "generallux-star-ast-24uw3sdbtu01-o",
      modelNumber: "AST-24UW3SDBTU01(O)",
      brandId: "generallux-star",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "generallux-star-ast-12uw3sxetu01-i",
      modelNumber: "AST-12UW3SXETU01(I)",
      brandId: "generallux-star",
      type: "wall-single",
    },
    {
      id: "generallux-star-ast-12uw3sxetu02-i",
      modelNumber: "AST-12UW3SXETU02(I)",
      brandId: "generallux-star",
      type: "wall-single",
    },
    {
      id: "generallux-star-gns-12hch22ti1",
      modelNumber: "GNS-12HCH22TI1",
      brandId: "generallux-star",
      type: "wall-single",
    },
    {
      id: "generallux-star-gns-12hch23ti2",
      modelNumber: "GNS-12HCH23TI2",
      brandId: "generallux-star",
      type: "wall-single",
    },
    {
      id: "generallux-star-ast-18uw3sbbtu00-i",
      modelNumber: "AST-18UW3SBBTU00(I)",
      brandId: "generallux-star",
      type: "wall-single",
    },
    {
      id: "generallux-star-ast-18uw3sbbtu01-i",
      modelNumber: "AST-18UW3SBBTU01(I)",
      brandId: "generallux-star",
      type: "wall-single",
    },
    {
      id: "generallux-star-gns-18hch23ti1",
      modelNumber: "GNS-18HCH23TI1",
      brandId: "generallux-star",
      type: "wall-single",
    },
    {
      id: "generallux-star-gns-18hch21ti2",
      modelNumber: "GNS-18HCH21TI2",
      brandId: "generallux-star",
      type: "wall-single",
    },
    {
      id: "generallux-star-ast-24uw3sdbtu01-i",
      modelNumber: "AST-24UW3SDBTU01(I)",
      brandId: "generallux-star",
      type: "wall-single",
    }
  ],
  configurations: [
    {
      id: "generallux-star-standard-wall-single-12000-cfg-1",
      slug: "generallux-star-standard-wall-single-12000-cfg-1",
      modelId: "generallux-star-standard-wall-single-12000",
      outdoorUnitId: "generallux-star-ast-12uw3sxetu01-o",
      indoorUnitId: "generallux-star-ast-12uw3sxetu01-i",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-star-standard-wall-single-12000-cfg-2",
      slug: "generallux-star-standard-wall-single-12000-cfg-2",
      modelId: "generallux-star-standard-wall-single-12000",
      outdoorUnitId: "generallux-star-ast-12uw3sxetu02-o",
      indoorUnitId: "generallux-star-ast-12uw3sxetu02-i",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-star-standard-wall-single-12000-cfg-3",
      slug: "generallux-star-standard-wall-single-12000-cfg-3",
      modelId: "generallux-star-standard-wall-single-12000",
      outdoorUnitId: "generallux-star-gns-12hch22to1",
      indoorUnitId: "generallux-star-gns-12hch22ti1",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-star-standard-wall-single-12000-cfg-4",
      slug: "generallux-star-standard-wall-single-12000-cfg-4",
      modelId: "generallux-star-standard-wall-single-12000",
      outdoorUnitId: "generallux-star-gns-12hch23to2",
      indoorUnitId: "generallux-star-gns-12hch23ti2",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-star-standard-wall-single-18000-cfg-1",
      slug: "generallux-star-standard-wall-single-18000-cfg-1",
      modelId: "generallux-star-standard-wall-single-18000",
      outdoorUnitId: "generallux-star-ast-18uw3sbbtu00-o",
      indoorUnitId: "generallux-star-ast-18uw3sbbtu00-i",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-star-standard-wall-single-18000-cfg-2",
      slug: "generallux-star-standard-wall-single-18000-cfg-2",
      modelId: "generallux-star-standard-wall-single-18000",
      outdoorUnitId: "generallux-star-ast-18uw3sbbtu01-o",
      indoorUnitId: "generallux-star-ast-18uw3sbbtu01-i",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-star-standard-wall-single-18000-cfg-3",
      slug: "generallux-star-standard-wall-single-18000-cfg-3",
      modelId: "generallux-star-standard-wall-single-18000",
      outdoorUnitId: "generallux-star-gns-18hch23to1",
      indoorUnitId: "generallux-star-gns-18hch23ti1",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-star-standard-wall-single-18000-cfg-4",
      slug: "generallux-star-standard-wall-single-18000-cfg-4",
      modelId: "generallux-star-standard-wall-single-18000",
      outdoorUnitId: "generallux-star-gns-18hch21to2",
      indoorUnitId: "generallux-star-gns-18hch21ti2",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-star-standard-wall-single-24000-cfg-1",
      slug: "generallux-star-standard-wall-single-24000-cfg-1",
      modelId: "generallux-star-standard-wall-single-24000",
      outdoorUnitId: "generallux-star-ast-24uw3sdbtu01-o",
      indoorUnitId: "generallux-star-ast-24uw3sdbtu01-i",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "generallux-star-standard-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-star-standard-wall-single-12000-cfg-2",
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
      configurationId: "generallux-star-standard-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-star-standard-wall-single-12000-cfg-4",
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
      configurationId: "generallux-star-standard-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-star-standard-wall-single-18000-cfg-2",
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
      configurationId: "generallux-star-standard-wall-single-18000-cfg-3",
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
      configurationId: "generallux-star-standard-wall-single-18000-cfg-4",
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
      configurationId: "generallux-star-standard-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
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
