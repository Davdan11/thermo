import type { BrandDataset } from "../../types";

export const haierDataset: BrandDataset = {
  brand: {
    id: "haier",
    slug: "haier",
    name: "HAIER",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "haier-standard",
      slug: "haier-standard",
      name: "Standard",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus",
      slug: "haier-advanced-plus",
      name: "Advanced Plus",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic",
      slug: "haier-arctic",
      name: "Arctic",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-3u24ms2hd",
      slug: "haier-3u24ms2hd",
      name: "3U24MS2HD**",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-1u24tl2hf",
      slug: "haier-1u24tl2hf",
      name: "1U24TL2HF**",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-1u3036tl2hf",
      slug: "haier-1u3036tl2hf",
      name: "1U3036TL2HF**",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro",
      slug: "haier-arctic-pro",
      name: "Arctic PRO",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-115v",
      slug: "haier-tempo-115v",
      name: "Tempo 115V",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single",
      slug: "haier-arctic-single",
      name: "Arctic Single",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single",
      slug: "haier-flexfit-single",
      name: "Flexfit Single",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-multi",
      slug: "haier-flexfit-multi",
      name: "Flexfit Multi",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi",
      slug: "haier-arctic-multi",
      name: "Arctic Multi",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-230v",
      slug: "haier-tempo-230v",
      name: "Tempo 230V",
      brandId: "haier",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "haier-standard-wall-single",
      slug: "haier-standard-wall-single",
      name: "Standard",
      seriesId: "haier-standard",
      brandId: "haier",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 24000,
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
      id: "haier-advanced-plus-wall-single",
      slug: "haier-advanced-plus-wall-single",
      name: "Advanced Plus",
      seriesId: "haier-advanced-plus",
      brandId: "haier",
      modelNumber: "Advanced Plus",
      normalizedModelNumber: "advanced-plus",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 19000,
      seer2Min: 20,
      seer2Max: 23.5,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single",
      slug: "haier-arctic-wall-single",
      name: "Arctic",
      seriesId: "haier-arctic",
      brandId: "haier",
      modelNumber: "Arctic",
      normalizedModelNumber: "arctic",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 33400,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 15.7,
      seer2Max: 30,
      hspf2Min: 8.5,
      hspf2Max: 14,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-3u24ms2hd-wall-single",
      slug: "haier-3u24ms2hd-wall-single",
      name: "3U24MS2HD**",
      seriesId: "haier-3u24ms2hd",
      brandId: "haier",
      modelNumber: "3U24MS2HD**",
      normalizedModelNumber: "3u24ms2hd",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 16000,
      seer2Min: 22,
      seer2Max: 22,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-1u24tl2hf-wall-single",
      slug: "haier-1u24tl2hf-wall-single",
      name: "1U24TL2HF**",
      seriesId: "haier-1u24tl2hf",
      brandId: "haier",
      modelNumber: "1U24TL2HF**",
      normalizedModelNumber: "1u24tl2hf",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 17000,
      heatingCapacity5FMaxBtu: 17000,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-1u3036tl2hf-wall-single",
      slug: "haier-1u3036tl2hf-wall-single",
      name: "1U3036TL2HF**",
      seriesId: "haier-1u3036tl2hf",
      brandId: "haier",
      modelNumber: "1U3036TL2HF**",
      normalizedModelNumber: "1u3036tl2hf",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single",
      slug: "haier-arctic-pro-wall-single",
      name: "Arctic PRO",
      seriesId: "haier-arctic-pro",
      brandId: "haier",
      modelNumber: "Arctic PRO",
      normalizedModelNumber: "arctic-pro",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 47500,
      heatingCapacity5FMinBtu: 15600,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 15.2,
      seer2Max: 21,
      hspf2Min: 8.1,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-115v-wall-single",
      slug: "haier-tempo-115v-wall-single",
      name: "Tempo 115V",
      seriesId: "haier-tempo-115v",
      brandId: "haier",
      modelNumber: "Tempo 115V",
      normalizedModelNumber: "tempo-115v",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 11500,
      heatingCapacity5FMinBtu: 6400,
      heatingCapacity5FMaxBtu: 7800,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single",
      slug: "haier-arctic-single-wall-single",
      name: "Arctic Single",
      seriesId: "haier-arctic-single",
      brandId: "haier",
      modelNumber: "Arctic Single",
      normalizedModelNumber: "arctic-single",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 17000,
      seer2Min: 18,
      seer2Max: 27,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single",
      slug: "haier-flexfit-single-wall-single",
      name: "Flexfit Single",
      seriesId: "haier-flexfit-single",
      brandId: "haier",
      modelNumber: "Flexfit Single",
      normalizedModelNumber: "flexfit-single",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 33800,
      heatingCapacity5FMinBtu: 5900,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 16,
      seer2Max: 23,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-multi-wall-single",
      slug: "haier-flexfit-multi-wall-single",
      name: "Flexfit Multi",
      seriesId: "haier-flexfit-multi",
      brandId: "haier",
      modelNumber: "Flexfit Multi",
      normalizedModelNumber: "flexfit-multi",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 17000,
      seer2Min: 18.8,
      seer2Max: 24,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi-wall-single",
      slug: "haier-arctic-multi-wall-single",
      name: "Arctic Multi",
      seriesId: "haier-arctic-multi",
      brandId: "haier",
      modelNumber: "Arctic Multi",
      normalizedModelNumber: "arctic-multi",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 17.2,
      seer2Max: 23,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-230v-wall-single",
      slug: "haier-tempo-230v-wall-single",
      name: "Tempo 230V",
      seriesId: "haier-tempo-230v",
      brandId: "haier",
      modelNumber: "Tempo 230V",
      normalizedModelNumber: "tempo-230v",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 14400,
      seer2Min: 18,
      seer2Max: 23,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "haier-4u36ms2vhb",
      modelNumber: "4U36MS2VHB",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-3u24ms2vhb",
      modelNumber: "3U24MS2VHB",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-2u20eh2vha",
      modelNumber: "2U20EH2VHA",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-3u24eh2vha",
      modelNumber: "3U24EH2VHA",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u09te2vha",
      modelNumber: "1U09TE2VHA*",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u12te2vha",
      modelNumber: "1U12TE2VHA*",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-4u36ms2hd",
      modelNumber: "4U36MS2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u18te2hd",
      modelNumber: "1U18TE2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u24te2hd",
      modelNumber: "1U24TE2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-5u42ms2hd",
      modelNumber: "5U42MS2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-4q36ff2be",
      modelNumber: "4Q36FF2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u09ap2vha",
      modelNumber: "1U09AP2VHA",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u18ap2vha",
      modelNumber: "1U18AP2VHA",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u12ap2vha",
      modelNumber: "1U12AP2VHA",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u15ap2vha",
      modelNumber: "1U15AP2VHA",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u24ap2vha",
      modelNumber: "1U24AP2VHA",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u09ap2hd",
      modelNumber: "1U09AP2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u12ap2hd",
      modelNumber: "1U12AP2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u15ap2hd",
      modelNumber: "1U15AP2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u18ap2hd",
      modelNumber: "1U18AP2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u24ap2hd",
      modelNumber: "1U24AP2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u12eh2vhe",
      modelNumber: "1U12EH2VHE*",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u09eh2vhe",
      modelNumber: "1U09EH2VHE*",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u18eh2vhe",
      modelNumber: "1U18EH2VHE*",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-2u20eh2hd",
      modelNumber: "2U20EH2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-3u24eh2hd",
      modelNumber: "3U24EH2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-4u36eh2hd",
      modelNumber: "4U36EH2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u09eh2he",
      modelNumber: "1U09EH2HE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u12eh2he",
      modelNumber: "1U12EH2HE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u18eh2he",
      modelNumber: "1U18EH2HE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-3u24ms2hd",
      modelNumber: "3U24MS2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u24tl2hf",
      modelNumber: "1U24TL2HF**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u3036tl2hf",
      modelNumber: "1U3036TL2HF**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u24lp2hd",
      modelNumber: "1U24LP2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u3036lp2hd",
      modelNumber: "1U3036LP2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1u4248lp2hd",
      modelNumber: "1U4248LP2HD**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q24rt2be",
      modelNumber: "1Q24RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q3036rt2be",
      modelNumber: "1Q3036RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q4248rt2be",
      modelNumber: "1Q4248RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q09te1be",
      modelNumber: "1Q09TE1BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q12te1be",
      modelNumber: "1Q12TE1BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q09rt2be",
      modelNumber: "1Q09RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q12rt2be",
      modelNumber: "1Q12RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q18rt2be",
      modelNumber: "1Q18RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q09ed2be",
      modelNumber: "1Q09ED2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q12ed2be",
      modelNumber: "1Q12ED2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q18ed2be",
      modelNumber: "1Q18ED2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q09ff2be",
      modelNumber: "1Q09FF2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q12ff2be",
      modelNumber: "1Q12FF2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q15ff2be",
      modelNumber: "1Q15FF2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q18ff2be",
      modelNumber: "1Q18FF2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q24ff2be",
      modelNumber: "1Q24FF2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q3036ff2be",
      modelNumber: "1Q3036FF2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-2q18ff2be",
      modelNumber: "2Q18FF2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-3q24ff2be",
      modelNumber: "3Q24FF2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-2q20rt2be",
      modelNumber: "2Q20RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-3q24rt2be",
      modelNumber: "3Q24RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-4q36rt2be",
      modelNumber: "4Q36RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-5q42rt2be",
      modelNumber: "5Q42RT2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q09te2be",
      modelNumber: "1Q09TE2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q12te2be",
      modelNumber: "1Q12TE2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q18te2be",
      modelNumber: "1Q18TE2BE**",
      brandId: "haier",
      refrigerant: null as any,
    },
    {
      id: "haier-1q24te2be",
      modelNumber: "1Q24TE2BE**",
      brandId: "haier",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "haier-standard-wall-single-cfg-1",
      slug: "haier-standard-wall-single-cfg-1",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-4u36ms2vhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-standard-wall-single-cfg-2",
      slug: "haier-standard-wall-single-cfg-2",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-3u24ms2vhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-standard-wall-single-cfg-3",
      slug: "haier-standard-wall-single-cfg-3",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-2u20eh2vha",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18100,
      coolingCapacityMaxBtu: 18100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-standard-wall-single-cfg-4",
      slug: "haier-standard-wall-single-cfg-4",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-3u24eh2vha",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-standard-wall-single-cfg-5",
      slug: "haier-standard-wall-single-cfg-5",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-1u09te2vha",
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
      id: "haier-standard-wall-single-cfg-6",
      slug: "haier-standard-wall-single-cfg-6",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-1u12te2vha",
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
      id: "haier-standard-wall-single-cfg-7",
      slug: "haier-standard-wall-single-cfg-7",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-4u36ms2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-standard-wall-single-cfg-8",
      slug: "haier-standard-wall-single-cfg-8",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-1u18te2hd",
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
      id: "haier-standard-wall-single-cfg-9",
      slug: "haier-standard-wall-single-cfg-9",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-1u24te2hd",
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
      id: "haier-standard-wall-single-cfg-10",
      slug: "haier-standard-wall-single-cfg-10",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-5u42ms2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-standard-wall-single-cfg-11",
      slug: "haier-standard-wall-single-cfg-11",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-4q36ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-standard-wall-single-cfg-12",
      slug: "haier-standard-wall-single-cfg-12",
      modelId: "haier-standard-wall-single",
      outdoorUnitId: "haier-4q36ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-1",
      slug: "haier-advanced-plus-wall-single-cfg-1",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u09ap2vha",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-2",
      slug: "haier-advanced-plus-wall-single-cfg-2",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u18ap2vha",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-3",
      slug: "haier-advanced-plus-wall-single-cfg-3",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u12ap2vha",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-4",
      slug: "haier-advanced-plus-wall-single-cfg-4",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u15ap2vha",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-5",
      slug: "haier-advanced-plus-wall-single-cfg-5",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u24ap2vha",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-6",
      slug: "haier-advanced-plus-wall-single-cfg-6",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u09ap2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-7",
      slug: "haier-advanced-plus-wall-single-cfg-7",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u12ap2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-8",
      slug: "haier-advanced-plus-wall-single-cfg-8",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u15ap2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-9",
      slug: "haier-advanced-plus-wall-single-cfg-9",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u18ap2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 21,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-advanced-plus-wall-single-cfg-10",
      slug: "haier-advanced-plus-wall-single-cfg-10",
      modelId: "haier-advanced-plus-wall-single",
      outdoorUnitId: "haier-1u24ap2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-1",
      slug: "haier-arctic-wall-single-cfg-1",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u12eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-2",
      slug: "haier-arctic-wall-single-cfg-2",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u12eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-3",
      slug: "haier-arctic-wall-single-cfg-3",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u12eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-4",
      slug: "haier-arctic-wall-single-cfg-4",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u12eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-5",
      slug: "haier-arctic-wall-single-cfg-5",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u09eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 30,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-6",
      slug: "haier-arctic-wall-single-cfg-6",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u18eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-7",
      slug: "haier-arctic-wall-single-cfg-7",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u09eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 30,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-8",
      slug: "haier-arctic-wall-single-cfg-8",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u18eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-9",
      slug: "haier-arctic-wall-single-cfg-9",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u09eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 30,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-10",
      slug: "haier-arctic-wall-single-cfg-10",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u18eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-11",
      slug: "haier-arctic-wall-single-cfg-11",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u09eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 30,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-12",
      slug: "haier-arctic-wall-single-cfg-12",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u18eh2vhe",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-13",
      slug: "haier-arctic-wall-single-cfg-13",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-2u20eh2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-14",
      slug: "haier-arctic-wall-single-cfg-14",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-3u24eh2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-15",
      slug: "haier-arctic-wall-single-cfg-15",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-3u24eh2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21400,
      coolingCapacityMaxBtu: 21400,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-16",
      slug: "haier-arctic-wall-single-cfg-16",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-4u36eh2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-17",
      slug: "haier-arctic-wall-single-cfg-17",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-2u20eh2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 16,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-18",
      slug: "haier-arctic-wall-single-cfg-18",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-4u36eh2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 15.7,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-19",
      slug: "haier-arctic-wall-single-cfg-19",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u09eh2he",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 30,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-20",
      slug: "haier-arctic-wall-single-cfg-20",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u12eh2he",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27.5,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-21",
      slug: "haier-arctic-wall-single-cfg-21",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u18eh2he",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17800,
      coolingCapacityMaxBtu: 17800,
      seer2: 23,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-22",
      slug: "haier-arctic-wall-single-cfg-22",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u12eh2he",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-wall-single-cfg-23",
      slug: "haier-arctic-wall-single-cfg-23",
      modelId: "haier-arctic-wall-single",
      outdoorUnitId: "haier-1u09eh2he",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-3u24ms2hd-wall-single-cfg-1",
      slug: "haier-3u24ms2hd-wall-single-cfg-1",
      modelId: "haier-3u24ms2hd-wall-single",
      outdoorUnitId: "haier-3u24ms2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-1u24tl2hf-wall-single-cfg-1",
      slug: "haier-1u24tl2hf-wall-single-cfg-1",
      modelId: "haier-1u24tl2hf-wall-single",
      outdoorUnitId: "haier-1u24tl2hf",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-1u3036tl2hf-wall-single-cfg-1",
      slug: "haier-1u3036tl2hf-wall-single-cfg-1",
      modelId: "haier-1u3036tl2hf-wall-single",
      outdoorUnitId: "haier-1u3036tl2hf",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-1u3036tl2hf-wall-single-cfg-2",
      slug: "haier-1u3036tl2hf-wall-single-cfg-2",
      modelId: "haier-1u3036tl2hf-wall-single",
      outdoorUnitId: "haier-1u3036tl2hf",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-1",
      slug: "haier-arctic-pro-wall-single-cfg-1",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u24lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-2",
      slug: "haier-arctic-pro-wall-single-cfg-2",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u3036lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-3",
      slug: "haier-arctic-pro-wall-single-cfg-3",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u3036lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-4",
      slug: "haier-arctic-pro-wall-single-cfg-4",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u4248lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 15.2,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-5",
      slug: "haier-arctic-pro-wall-single-cfg-5",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u4248lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-6",
      slug: "haier-arctic-pro-wall-single-cfg-6",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u24lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-7",
      slug: "haier-arctic-pro-wall-single-cfg-7",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u24lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-8",
      slug: "haier-arctic-pro-wall-single-cfg-8",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u3036lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-9",
      slug: "haier-arctic-pro-wall-single-cfg-9",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u3036lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-10",
      slug: "haier-arctic-pro-wall-single-cfg-10",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u3036lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-11",
      slug: "haier-arctic-pro-wall-single-cfg-11",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u4248lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-12",
      slug: "haier-arctic-pro-wall-single-cfg-12",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1u3036lp2hd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-13",
      slug: "haier-arctic-pro-wall-single-cfg-13",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q24rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-14",
      slug: "haier-arctic-pro-wall-single-cfg-14",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q3036rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-15",
      slug: "haier-arctic-pro-wall-single-cfg-15",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q3036rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-16",
      slug: "haier-arctic-pro-wall-single-cfg-16",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q4248rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-17",
      slug: "haier-arctic-pro-wall-single-cfg-17",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q4248rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 17.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-18",
      slug: "haier-arctic-pro-wall-single-cfg-18",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q24rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-19",
      slug: "haier-arctic-pro-wall-single-cfg-19",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q3036rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-20",
      slug: "haier-arctic-pro-wall-single-cfg-20",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q3036rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-21",
      slug: "haier-arctic-pro-wall-single-cfg-21",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q24rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-22",
      slug: "haier-arctic-pro-wall-single-cfg-22",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q3036rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-pro-wall-single-cfg-23",
      slug: "haier-arctic-pro-wall-single-cfg-23",
      modelId: "haier-arctic-pro-wall-single",
      outdoorUnitId: "haier-1q3036rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-115v-wall-single-cfg-1",
      slug: "haier-tempo-115v-wall-single-cfg-1",
      modelId: "haier-tempo-115v-wall-single",
      outdoorUnitId: "haier-1q09te1be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-115v-wall-single-cfg-2",
      slug: "haier-tempo-115v-wall-single-cfg-2",
      modelId: "haier-tempo-115v-wall-single",
      outdoorUnitId: "haier-1q12te1be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single-cfg-1",
      slug: "haier-arctic-single-wall-single-cfg-1",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q09rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single-cfg-2",
      slug: "haier-arctic-single-wall-single-cfg-2",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q12rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single-cfg-3",
      slug: "haier-arctic-single-wall-single-cfg-3",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q18rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single-cfg-4",
      slug: "haier-arctic-single-wall-single-cfg-4",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q09ed2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single-cfg-5",
      slug: "haier-arctic-single-wall-single-cfg-5",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q12ed2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single-cfg-6",
      slug: "haier-arctic-single-wall-single-cfg-6",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q18ed2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single-cfg-7",
      slug: "haier-arctic-single-wall-single-cfg-7",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q09ed2be",
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
      id: "haier-arctic-single-wall-single-cfg-8",
      slug: "haier-arctic-single-wall-single-cfg-8",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q12ed2be",
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
      id: "haier-arctic-single-wall-single-cfg-9",
      slug: "haier-arctic-single-wall-single-cfg-9",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q18ed2be",
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
      id: "haier-arctic-single-wall-single-cfg-10",
      slug: "haier-arctic-single-wall-single-cfg-10",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q09ed2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.6,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single-cfg-11",
      slug: "haier-arctic-single-wall-single-cfg-11",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q12ed2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 10000,
      coolingCapacityMaxBtu: 10000,
      seer2: 19.8,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-single-wall-single-cfg-12",
      slug: "haier-arctic-single-wall-single-cfg-12",
      modelId: "haier-arctic-single-wall-single",
      outdoorUnitId: "haier-1q18ed2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-1",
      slug: "haier-flexfit-single-wall-single-cfg-1",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q09ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-2",
      slug: "haier-flexfit-single-wall-single-cfg-2",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q12ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11800,
      coolingCapacityMaxBtu: 11800,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-3",
      slug: "haier-flexfit-single-wall-single-cfg-3",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q15ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 13500,
      coolingCapacityMaxBtu: 13500,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-4",
      slug: "haier-flexfit-single-wall-single-cfg-4",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q18ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-5",
      slug: "haier-flexfit-single-wall-single-cfg-5",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q24ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-6",
      slug: "haier-flexfit-single-wall-single-cfg-6",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q3036ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-7",
      slug: "haier-flexfit-single-wall-single-cfg-7",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q3036ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-8",
      slug: "haier-flexfit-single-wall-single-cfg-8",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q09ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-9",
      slug: "haier-flexfit-single-wall-single-cfg-9",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q12ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.8,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-10",
      slug: "haier-flexfit-single-wall-single-cfg-10",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q18ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 18.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-11",
      slug: "haier-flexfit-single-wall-single-cfg-11",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q3036ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-12",
      slug: "haier-flexfit-single-wall-single-cfg-12",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q3036ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 18.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-13",
      slug: "haier-flexfit-single-wall-single-cfg-13",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q09ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-14",
      slug: "haier-flexfit-single-wall-single-cfg-14",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q12ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-15",
      slug: "haier-flexfit-single-wall-single-cfg-15",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q09ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 17.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-16",
      slug: "haier-flexfit-single-wall-single-cfg-16",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q12ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 17,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-17",
      slug: "haier-flexfit-single-wall-single-cfg-17",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q18ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 17.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-18",
      slug: "haier-flexfit-single-wall-single-cfg-18",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q24ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-19",
      slug: "haier-flexfit-single-wall-single-cfg-19",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q3036ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-20",
      slug: "haier-flexfit-single-wall-single-cfg-20",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q3036ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-single-wall-single-cfg-21",
      slug: "haier-flexfit-single-wall-single-cfg-21",
      modelId: "haier-flexfit-single-wall-single",
      outdoorUnitId: "haier-1q24ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-multi-wall-single-cfg-1",
      slug: "haier-flexfit-multi-wall-single-cfg-1",
      modelId: "haier-flexfit-multi-wall-single",
      outdoorUnitId: "haier-2q18ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-multi-wall-single-cfg-2",
      slug: "haier-flexfit-multi-wall-single-cfg-2",
      modelId: "haier-flexfit-multi-wall-single",
      outdoorUnitId: "haier-3q24ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-multi-wall-single-cfg-3",
      slug: "haier-flexfit-multi-wall-single-cfg-3",
      modelId: "haier-flexfit-multi-wall-single",
      outdoorUnitId: "haier-2q18ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18.8,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-flexfit-multi-wall-single-cfg-4",
      slug: "haier-flexfit-multi-wall-single-cfg-4",
      modelId: "haier-flexfit-multi-wall-single",
      outdoorUnitId: "haier-3q24ff2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi-wall-single-cfg-1",
      slug: "haier-arctic-multi-wall-single-cfg-1",
      modelId: "haier-arctic-multi-wall-single",
      outdoorUnitId: "haier-2q20rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.6,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi-wall-single-cfg-2",
      slug: "haier-arctic-multi-wall-single-cfg-2",
      modelId: "haier-arctic-multi-wall-single",
      outdoorUnitId: "haier-3q24rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi-wall-single-cfg-3",
      slug: "haier-arctic-multi-wall-single-cfg-3",
      modelId: "haier-arctic-multi-wall-single",
      outdoorUnitId: "haier-4q36rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi-wall-single-cfg-4",
      slug: "haier-arctic-multi-wall-single-cfg-4",
      modelId: "haier-arctic-multi-wall-single",
      outdoorUnitId: "haier-5q42rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi-wall-single-cfg-5",
      slug: "haier-arctic-multi-wall-single-cfg-5",
      modelId: "haier-arctic-multi-wall-single",
      outdoorUnitId: "haier-2q20rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 17.6,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi-wall-single-cfg-6",
      slug: "haier-arctic-multi-wall-single-cfg-6",
      modelId: "haier-arctic-multi-wall-single",
      outdoorUnitId: "haier-3q24rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi-wall-single-cfg-7",
      slug: "haier-arctic-multi-wall-single-cfg-7",
      modelId: "haier-arctic-multi-wall-single",
      outdoorUnitId: "haier-4q36rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 17.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-arctic-multi-wall-single-cfg-8",
      slug: "haier-arctic-multi-wall-single-cfg-8",
      modelId: "haier-arctic-multi-wall-single",
      outdoorUnitId: "haier-5q42rt2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 17.4,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-230v-wall-single-cfg-1",
      slug: "haier-tempo-230v-wall-single-cfg-1",
      modelId: "haier-tempo-230v-wall-single",
      outdoorUnitId: "haier-1q09te2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-230v-wall-single-cfg-2",
      slug: "haier-tempo-230v-wall-single-cfg-2",
      modelId: "haier-tempo-230v-wall-single",
      outdoorUnitId: "haier-1q12te2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11800,
      coolingCapacityMaxBtu: 11800,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-230v-wall-single-cfg-3",
      slug: "haier-tempo-230v-wall-single-cfg-3",
      modelId: "haier-tempo-230v-wall-single",
      outdoorUnitId: "haier-1q18te2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haier-tempo-230v-wall-single-cfg-4",
      slug: "haier-tempo-230v-wall-single-cfg-4",
      modelId: "haier-tempo-230v-wall-single",
      outdoorUnitId: "haier-1q24te2be",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "haier-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-standard-wall-single-cfg-6",
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
      configurationId: "haier-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-standard-wall-single-cfg-10",
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
      configurationId: "haier-standard-wall-single-cfg-11",
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
      configurationId: "haier-standard-wall-single-cfg-12",
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
      configurationId: "haier-advanced-plus-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-advanced-plus-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-advanced-plus-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-advanced-plus-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-advanced-plus-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-advanced-plus-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-advanced-plus-wall-single-cfg-7",
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
      configurationId: "haier-advanced-plus-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-advanced-plus-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-advanced-plus-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-10",
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
      configurationId: "haier-arctic-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-18",
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
      configurationId: "haier-arctic-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-3u24ms2hd-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-1u24tl2hf-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-1u3036tl2hf-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-1u3036tl2hf-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-3",
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
      configurationId: "haier-arctic-pro-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-16",
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
      configurationId: "haier-arctic-pro-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-20",
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
      configurationId: "haier-arctic-pro-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-pro-wall-single-cfg-22",
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
      configurationId: "haier-arctic-pro-wall-single-cfg-23",
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
      configurationId: "haier-tempo-115v-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-tempo-115v-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-single-wall-single-cfg-10",
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
      configurationId: "haier-arctic-single-wall-single-cfg-11",
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
      configurationId: "haier-arctic-single-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7300,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-17",
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
      configurationId: "haier-flexfit-single-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-19",
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
      configurationId: "haier-flexfit-single-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-single-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-multi-wall-single-cfg-1",
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
      configurationId: "haier-flexfit-multi-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-flexfit-multi-wall-single-cfg-3",
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
      configurationId: "haier-flexfit-multi-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-multi-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-multi-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-multi-wall-single-cfg-3",
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
      configurationId: "haier-arctic-multi-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-multi-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-multi-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-multi-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-arctic-multi-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-tempo-230v-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-tempo-230v-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-tempo-230v-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haier-tempo-230v-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
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
